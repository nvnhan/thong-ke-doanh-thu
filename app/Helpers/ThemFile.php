<?php

namespace App\Helpers;

use App\DatVe;
use App\KhachHang;
use App\Util;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;

class ThemFile
{
    public static function parse_money(string $tt)
    {
        $tt = str_replace(',', '', $tt);
        $tt = str_replace('.', '', $tt);
        $tt = str_replace('-', '', $tt);
        return (float) (trim($tt));
    }

    public static function insert_into_db($parse, Request $request)
    {
        // filter data 
        // Lọc từ ngày đến ngày
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $parse = array_filter($parse, function ($item) use ($request) {
                return $item->ngay_thang >= $request->bat_dau && $item->ngay_thang <= $request->ket_thuc;
            });

        // Tài khoản F1 nơi mua
        $id_tai_khoan_mua = -1;
        if (!empty($request->id_tai_khoan_mua)) $id_tai_khoan_mua = $request->id_tai_khoan_mua;
        // Khách hàng mặc định
        $id_khach_hang = -1;
        if (!empty($request->id_khach_hang)) $id_khach_hang = $request->id_khach_hang;
        $khach_hang = KhachHang::find($id_khach_hang);

        $cnt = 0;
        foreach ($parse as $item) {
            $dv = new DatVe((array) $item);

            if ($id_tai_khoan_mua !== -1) $dv->id_tai_khoan_mua = $id_tai_khoan_mua;
            // Ko set ngay thanh toan truc tiep => bat buoc phai qua Thu chi
            // if (!empty($request->ngay_thanh_toan)) $dv->ngay_thanh_toan = $request->ngay_thanh_toan;

            $so_nguoi = count(explode(";", $item->ten_khach));
            $so_chieu = empty($item->sb_ve) ? 1 : 2;

            // Nếu trong file không có tổng tiền thu khách
            if (empty($item->tong_tien_thu_khach)) {
                $kh = null;
                // Find KhachHang has Ma Dai Ly
                if (!empty($item->ma_dai_ly))
                    $kh = KhachHang::all()->filter(function ($model) use ($item) {
                        return in_array($item->ma_dai_ly, $model->dai_ly);
                    })->first(null);
                if (empty($kh)) $kh = $khach_hang;

                if (!empty($kh)) {
                    $dv->id_khach_hang = $kh->id;

                    switch ($item->hang_bay) {
                        case "VN":
                            $dv->tong_tien_thu_khach = $kh->phi_vn;
                            break;
                        case "VJ":
                            $dv->tong_tien_thu_khach = $kh->phi_vj;
                            break;
                        case "Jets":
                            $dv->tong_tien_thu_khach = $kh->phi_jets;
                            break;
                        case "BB":
                            $dv->tong_tien_thu_khach = $kh->phi_bb;
                            break;
                    }
                    $dv->tong_tien_thu_khach *= $so_nguoi * $so_chieu;
                }

                if (!empty($request->khong_tinh_phi) && $request->khong_tinh_phi >= ($item->tong_tien + $request->phi_thu_khach))
                    $dv->tong_tien_thu_khach = 0;          // Ko tính phí Đại lý thu nữa
                $dv->tong_tien_thu_khach += $item->tong_tien +  $request->phi_thu_khach;
            }

            try {
                $dv->save();
                $cnt++;
            } catch (\Exception $e) {
            }
        }

        return $cnt;
    }

    /**
     * Parse data from Excel
     */
    public static function parse_excel(Request $request, string $dinh_danh, string $extension)
    {
        $path = storage_path('app/upload') . "/$dinh_danh.$extension";

        if ($extension === 'xlsx')
            $reader = IOFactory::createReader("Xlsx");
        else
            $reader = IOFactory::createReader("Xls");
        $spreadSheet = $reader->load($path);
        $sheet = $spreadSheet->getSheet(0);

        $ind = $request->xu_ly_tu_hang;
        $parse = [];
        // Parse data from file
        while (true) {
            $tmp = new stdClass;
            $tmp->ngay_thang = date("Y-m-d");
            $tmp->username = $request->user()->username;
            $tmp->hang_bay = $request->hang_bay;
            $tmp->dinh_danh = $dinh_danh;

            $tmp->so_ve = $sheet->getCell($request->cot_so_ve . $ind)->getValue();
            if (empty($tmp->so_ve))
                break;

            if (preg_match("/[0-9A-Z]{6,20}/", $tmp->so_ve, $matches)) {
                $tmp->so_ve = $matches[0];
                $ss = substr($tmp->so_ve, 0, 3);
                if ($ss === "VJA" || $ss === "VJC" || $ss === "550")
                    $tmp->so_ve = substr($tmp->so_ve, 3);
            } else continue;

            // Loại tuổi
            if (!empty($request->cot_loai_tuoi)) {
                $t = trim($sheet->getCell($request->cot_loai_tuoi . $ind)->getValue());
                if (empty($t) || $t == "ADULT") $tmp->loai_tuoi = 0;
                else $tmp->loai_tuoi = 1;
            }
            // Mã giữ chỗ
            if (!empty($request->cot_ma_giu_cho))
                $tmp->ma_giu_cho = trim($sheet->getCell($request->cot_ma_giu_cho . $ind)->getValue());
            // Ngày đặt
            if (!empty($request->cot_ngay_thang)) {
                $t = trim($sheet->getCell($request->cot_ngay_thang . $ind)->getValue());
                if (!empty($t)) {
                    $t = strtoupper($t);
                    if (preg_match("/(\d+)\/(\d+)\/(\d+)/", $t, $matches))
                        if (strpos($t, "AM") !== false || strpos($t, "PM") !== false)         // Jets: 4/17/2019 12:14:57 AM
                            $tmp->ngay_thang = "$matches[3]-$matches[1]-$matches[2] 0:0:0";
                        else $tmp->ngay_thang = "$matches[3]-$matches[2]-$matches[1] 0:0:0"; // 17/04/2019 Wed
                    else if (preg_match("/(\d+)-([A-Z]+)-(\d+)/", $t, $matches)) { //  03-Apr-2019	
                        $mon = array_search($matches[2], Util::$thang);
                        if ($mon !== false) {
                            $mon++;
                            $tmp->ngay_thang = "$matches[3]-$mon-$matches[1]";
                        }
                    }
                }
            }

            // Tên khách
            if (!empty($request->cot_ten_khach))
                $tmp->ten_khach = trim(str_replace([',', '/'], ['', ' '], $sheet->getCell($request->cot_ten_khach . $ind)->getValue()));
            // Mã đại lý
            if (!empty($request->cot_ma_dai_ly))
                $tmp->ma_dai_ly = trim($sheet->getCell($request->cot_ma_dai_ly . $ind)->getValue());

            // Tổng tiền
            if (!empty($request->cot_so_tien))
                $tmp->tong_tien = self::parse_money($sheet->getCell($request->cot_so_tien . $ind)->getValue());
            // thu khách
            if (!empty($request->cot_thu_khach))
                $tmp->tong_tien_thu_khach = self::parse_money($sheet->getCell($request->cot_thu_khach . $ind)->getValue());
            // Hoa hồng
            if (!empty($request->cot_hoa_hong))
                $tmp->hoa_hong = self::parse_money($sheet->getCell($request->cot_hoa_hong . $ind)->getValue());

            // Hành trình chỉ có trong 4 file tương ứng với 4 hãng
            if (!empty($request->cot_hanh_trinh)) {
                $ht = trim($sheet->getCell($request->cot_hanh_trinh . $ind)->getValue());
                if (strpos($ht, '-') === false) {       // Đối với các hành trình dạng này HANVNSGNVNDAD 
                    $ht1 = strtoupper($ht);
                    $ht1 = str_replace([' ', 'VN', 'BL', "VJ", "QH"], "", $ht1);
                    preg_match("/[A-Z]+/", $ht1, $matches);
                    $tmp->sb_di = substr($matches[0], 0, 3);
                    $tmp->sb_di1 = substr($matches[0], 3, 3);
                    if (strlen($matches[0]) >= 9) {
                        $tmp->sb_ve = $tmp->sb_di1;
                        $tmp->sb_ve1 = substr($matches[0], 6, 3);
                    }
                } else if (preg_match_all("/\b([A-Z]{3})\b/", $ht, $matches)) {        // 3 hãng còn lại có dạng HAN - SGN hoặc HAN-SGN
                    $tmp->sb_di = $matches[0][0];
                    $tmp->sb_di1 = $matches[0][1];
                    if (count($matches[0]) >= 4) {      // Có lượt về
                        $tmp->sb_ve = $matches[0][2];
                        $tmp->sb_ve1 = $matches[0][3];
                    }

                    if (preg_match_all("/QH [0-9\-A-Z]+/", $ht, $matches)) {       // Đối với BamBoo trong hành trình có cả mã chuyến bay ví dụ QH 208-R
                        $tmp->cb_di = $matches[0][0];
                        if (count($matches[0]) > 1) $tmp->cb_ve = $matches[0][1];
                    }
                }
            }

            // Ngày bay
            if (!empty($request->cot_ngay_bay)) {
                // VJ là Apr 19, 2019 HAN - CXR CONF
                // BB là 24/06/2019 QH 208-R SGN-HAN
                // Jets là  11/05/2019

                $t = trim($sheet->getCell($request->cot_ngay_bay . $ind)->getValue());
                if (preg_match_all("/(\d+)\/(\d+)\/(\d{4})/", $t, $matches)) {              // Dạng dd/mm/yyyy
                    $tmp->ngay_gio_di = $matches[3][0] . "-" . $matches[2][0] . "-" . $matches[1][0];
                    if (count($matches[0]) > 1)
                        $tmp->ngay_gio_ve = $matches[3][1] . "-" . $matches[2][1] . "-" . $matches[1][1];
                } else if (preg_match_all("/([a-zA-Z]{3}) (\d+), (\d{4})/", $t, $matches)) {              // Dạng dd/mm/yyyy
                    $mon = array_search(strtoupper($matches[2][0]), Util::$thang);
                    if ($mon !== false) {
                        $mon++;
                        $tmp->ngay_gio_di = $matches[3][0] . "-" . $mon . "-" . $matches[1][0];
                    }
                    if (count($matches[0]) > 1) {
                        $mon = array_search(strtoupper($matches[2][1]), Util::$thang);
                        if ($mon !== false) {
                            $mon++;
                            $tmp->ngay_gio_ve = $matches[3][1] . "-" . $mon . "-" . $matches[1][1];
                        }
                    }
                }
            }

            $parse[] = $tmp;
            $ind++;
        }

        // insert rows to db
        $cnt = self::insert_into_db($parse, $request);

        return $cnt;
    }

    /**
     * Parse data from HTML
     */
    public static function parse_html(Request $request, string $dinh_danh, string $extension)
    {
        $path = storage_path('app/upload') . "/$dinh_danh.$extension";
        $parse = [];
        if ($request->hang_bay === "BB")
            $parse = self::parse_html_bb($path, $dinh_danh, $request->user()->username);
        if ($request->hang_bay === "VJ")
            $parse = self::parse_html_vj($path, $dinh_danh, $request->user()->username);

        // insert rows to db
        $cnt = self::insert_into_db($parse, $request);

        return $cnt;
    }

    public static function parse_html_bb(string $path, string $dinh_danh, $username)
    {
        $parse = [];
        $content = file_get_html($path);
        $rows = $content->find('table.data-table tbody tr');

        foreach ($rows as $row) {
            $tmp = new stdClass;
            $tmp->ngay_thang = date("Y-m-d");
            $tmp->username = $username;
            $tmp->hang_bay = "BB";
            $tmp->dinh_danh = $dinh_danh;

            $cols = $row->find('td');
            $tmp->so_ve = $cols[6]->plaintext;
            if (empty($tmp->so_ve))
                continue;
            $tmp->ma_giu_cho = $cols[4]->plaintext;

            // Ngay dat
            if (preg_match("/(\d+)-([a-zA-Z]+)-(\d+)/", $cols[0]->plaintext, $matches)) { //  03-Apr-2019	
                $mon = array_search(strtoupper($matches[2]), Util::$thang);
                if ($mon !== false) {
                    $mon++;
                    $tmp->ngay_thang = "$matches[3]-$mon-$matches[1]";
                }
            }
            $tmp->ma_dai_ly = $cols[3]->plaintext;
            $tmp->ten_khach = str_replace('/', ' ', $cols[7]->plaintext);

            // Loai tuoi
            $tuoi = $cols[8]->plaintext;
            switch ($tuoi) {
                case 'ADULT':
                    $tmp->loai_tuoi = 0;
                    break;
                case 'CHILD':
                    $tmp->loai_tuoi = 1;
                    break;
                default:
                    $tmp->loai_tuoi = 2;
                    break;
            }
            // tong Tien
            $tmp->tong_tien = (float) (str_replace([',', '.'], '', $cols[15]->plaintext));

            // Hanh trinh, ngay bay, chuyen bay
            $hanh_trinh = $cols[23]->plaintext;

            if (preg_match_all("/\b([A-Z]{3})\b/", $hanh_trinh, $matches)) {
                $tmp->sb_di = $matches[1][0];
                $tmp->sb_di1 = $matches[1][1];
                if (count($matches[1]) >= 4) {
                    $tmp->sb_ve = $matches[1][2];
                    $tmp->sb_ve1 = $matches[1][3];
                }
            }
            if (preg_match_all("/QH [0-9\-A-Z]+/", $hanh_trinh, $matches)) {
                $tmp->cb_di = $matches[0][0];
                if (count($matches[0]) > 1)
                    $tmp->cb_ve = $matches[0][1];
            }
            if (preg_match_all("/(\d+)\/(\d+)\/(\d{4})/", $hanh_trinh, $matches)) {  // Dạng dd/mm/yyyy
                $tmp->ngay_gio_di = $matches[3][0] . "-" . $matches[2][0] . "-" . $matches[1][0];
                if (count($matches[1]) > 1)
                    $tmp->ngay_gio_ve = $matches[3][1] . "-" . $matches[2][1] . "-" . $matches[1][1];
            }
            //TODO: Nếu ko đc thì thử dạng MMM dd, yyyy

            $parse[] = $tmp;
        }

        return $parse;
    }

    public static function parse_html_vj(string $path, string $dinh_danh, $username)
    {
        $parse = [];
        $content = file_get_html($path);
        $rows = $content->find('table.data-table tbody tr');

        foreach ($rows as $row) {
            $tmp = new stdClass;
            $tmp->ngay_thang = date("Y-m-d");
            $tmp->username = $username;
            $tmp->hang_bay = "BB";
            $tmp->dinh_danh = $dinh_danh;

            $parse[] = $tmp;
        }

        return $parse;
    }
}

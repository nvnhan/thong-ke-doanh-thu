<?php

namespace App\Helpers;

use App\DatVe;
use App\KhachHang;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpParser\Node\Stmt\Continue_;
use stdClass;

class ThemFile
{
    public static function parse_money(string $tt)
    {
        return (float) (trim(str_replace([',', '.', '-', '$'], '', $tt)));
    }

    public static function parse_date(string $t)
    {
        $s = '';
        $t = strtoupper($t);
        if (is_numeric($t)) {        // Excel date 
            $linux_time = ($t - 25569) * 86400;
            $s = date("Y-m-d", $linux_time);
        } else if (preg_match("/(\d+)\/(\d+)\/(\d+)/", $t, $matches))
            if (strpos($t, "AM") !== false || strpos($t, "PM") !== false)         // Jets: 4/17/2019 12:14:57 AM
                $s = "$matches[3]-$matches[1]-$matches[2]";
            else $s = "$matches[3]-$matches[2]-$matches[1]"; // 17/04/2019 Wed
        else if (preg_match("/(\d+)-([A-Z]+)-(\d+)/", $t, $matches)) { //  03-Apr-2019	
            $mon = array_search($matches[2], Util::$thang);
            if ($mon !== false) {
                $mon++;
                $s = "$matches[3]-$mon-$matches[1]";
            }
        }
        return $s;
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
                $dv->tong_tien_thu_khach += $item->tong_tien + $request->phi_thu_khach;
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
        $user = $request->user();
        $parse = [];
        // Parse data from file
        while (true) {
            $tmp = new stdClass;
            $tmp->ngay_thang = date("Y-m-d");
            $tmp->username = $user->username;
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
            } else {
                $ind++;
                continue;
            }

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
                if (!empty($t))  $tmp->ngay_thang = self::parse_date($t);
            }

            // Tên khách
            if (!empty($request->cot_ten_khach)) {
                $array = explode('-', $sheet->getCell($request->cot_ten_khach . $ind)->getValue());
                $tmp->ten_khach = trim(str_replace([',', '/'], ['', ' '], $array[0]));
            }
            // Mã đại lý
            if (!empty($request->cot_ma_dai_ly))
                $tmp->ma_dai_ly = trim($sheet->getCell($request->cot_ma_dai_ly . $ind)->getValue());

            // Tổng tiền
            if (!empty($request->cot_so_tien))
                $tmp->tong_tien = self::parse_money($sheet->getCell($request->cot_so_tien . $ind)->getCalculatedValue());
            // thu khách
            if (!empty($request->cot_thu_khach))
                $tmp->tong_tien_thu_khach = self::parse_money($sheet->getCell($request->cot_thu_khach . $ind)->getCalculatedValue());
            // Hoa hồng
            if (!empty($request->cot_hoa_hong))
                $tmp->hoa_hong = self::parse_money($sheet->getCell($request->cot_hoa_hong . $ind)->getValue());

            // Hành trình chỉ có trong 4 file tương ứng với 4 hãng
            if (!empty($request->cot_hanh_trinh)) {
                $ht = trim($sheet->getCell($request->cot_hanh_trinh . $ind)->getValue());
                if (preg_match("/\b([a-zA-Z]{8,})\b/", $ht, $matches)) {       // Đối với các hành trình dạng này HANVNSGNVNDAD, DADVNBMV....
                    $ht1 = strtoupper($matches[0]);
                    if (strpos($ht1, 'VN')) $tmp->hang_bay = 'VN';
                    else if (strpos($ht1, 'BL')) $tmp->hang_bay = 'Jets';
                    else if (strpos($ht1, 'VJ')) $tmp->hang_bay = 'VJ';
                    else if (strpos($ht1, 'QH')) $tmp->hang_bay = 'BB';

                    $ht1 = str_replace(['VN', 'BL', "VJ", "QH"], "", $ht1);
                    preg_match("/[A-Z]+/", $ht1, $matches);
                    $tmp->sb_di = substr($matches[0], 0, 3);
                    $tmp->sb_di1 = substr($matches[0], 3, 3);
                    if (strlen($matches[0]) >= 9) {
                        $tmp->sb_ve = $tmp->sb_di1;
                        $tmp->sb_ve1 = substr($matches[0], 6, 3);
                    }
                } else if (preg_match_all("/\b([A-Z]{3})\b/", $ht, $matches1)) {        // 3 hãng còn lại có dạng HAN - SGN hoặc HAN-SGN
                    if (count($matches1[0]) >= 2) {
                        $tmp->sb_di = $matches1[0][0];
                        $tmp->sb_di1 = $matches1[0][1];
                        if (count($matches1[0]) >= 4) {      // Có lượt về
                            $tmp->sb_ve = $matches1[0][2];
                            $tmp->sb_ve1 = $matches1[0][3];
                        }

                        if (preg_match_all("/QH [0-9\-A-Z]+/", $ht, $matches2)) {       // Đối với BamBoo trong hành trình có cả mã chuyến bay ví dụ QH 208-R
                            $tmp->cb_di = $matches2[0][0];
                            if (count($matches2[0]) > 1) $tmp->cb_ve = $matches2[0][1];
                        }
                    }
                }
            }

            // Ngày bay
            if (!empty($request->cot_ngay_bay)) {
                // VJ là Apr 19, 2019 HAN - CXR CONF
                // BB là 24/06/2019 QH 208-R SGN-HAN
                // Jets là  11/05/2019

                $t = trim($sheet->getCell($request->cot_ngay_bay . $ind)->getValue());
                if (preg_match_all("/(\d+)\/(\d+)\/(\d{4})/", $t, $matches3)) {              // Dạng dd/mm/yyyy
                    $tmp->ngay_gio_di = $matches3[3][0] . "-" . $matches3[2][0] . "-" . $matches3[1][0];
                    if (count($matches3[0]) > 1)
                        $tmp->ngay_gio_ve = $matches3[3][1] . "-" . $matches3[2][1] . "-" . $matches3[1][1];
                } else if (preg_match_all("/([a-zA-Z]{3}) (\d+), (\d{4})/", $t, $matches4)) {              // Dạng mmm dd, yyyy
                    $mon = array_search(strtoupper($matches4[1][0]), Util::$thang);
                    if ($mon !== false) {
                        $mon++;
                        $tmp->ngay_gio_di = $matches4[3][0] . "-" . $mon . "-" . $matches4[2][0];
                    }
                    // Ngay ve
                    if (count($matches4[0]) > 1) {
                        $mon = array_search(strtoupper($matches4[1][1]), Util::$thang);
                        if ($mon !== false) {
                            $mon++;
                            $tmp->ngay_gio_ve = $matches4[3][1] . "-" . $mon . "-" . $matches4[2][1];
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
        $content = file_get_html($path);
        $rows = $content->find('table.data-table tbody tr');
        if (count($rows) > 0)
            self::parse_html_bb($parse, $rows, $dinh_danh, $request->user()->username);
        else {
            $rows = $content->find('tr.GridPayDetsEven, tr.GridPayDetsOdd');

            if (count($rows) > 0)
                self::parse_html_vj($parse, $rows, $dinh_danh, $request->user()->username);
            else {
                $rows = $content->find('tr.odd, tr.even');

                if (count($rows) > 0)
                    self::parse_html_1($parse, $rows, $dinh_danh, $request->user()->username);
            }
        }

        // insert rows to db
        $cnt = self::insert_into_db($parse, $request);

        return $cnt;
    }

    public static function parse_html_bb(&$parse, $rows, string $dinh_danh, $username)
    {
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
            $tmp->ngay_thang = self::parse_date($cols[0]->plaintext);

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
            $tmp->tong_tien = self::parse_money($cols[15]->plaintext);

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
            } else if (preg_match_all("/([a-zA-Z]{3}) (\d+), (\d{4})/", $hanh_trinh, $matches)) { // Nếu ko đc thì thử dạng MMM dd, yyyy
                $mon = array_search(strtoupper($matches[1][0]), Util::$thang);
                if ($mon !== false) {
                    $mon++;
                    $tmp->ngay_gio_di = $matches[3][0] . "-" . $mon . "-" . $matches[2][0];
                }
                if (count($matches[1]) > 1) {
                    $mon = array_search(strtoupper($matches[1][1]), Util::$thang);
                    if ($mon !== false) {
                        $mon++;
                        $tmp->ngay_gio_ve = $matches[3][1] . "-" . $mon . "-" . $matches[2][1];
                    }
                }
            }

            $parse[] = $tmp;
        }
    }

    public static function parse_html_vj(&$parse, $rows, string $dinh_danh, $username)
    {
        foreach ($rows as $row) {
            $tmp = new stdClass;
            $tmp->ngay_thang = date("Y-m-d");
            $tmp->username = $username;
            $tmp->hang_bay = "VJ";
            $tmp->dinh_danh = $dinh_danh;

            $cols = $row->find('td');
            // So Ve
            $tmp->so_ve = $cols[1]->plaintext;
            if (empty($tmp->so_ve))
                continue;

            // Ngay dat
            $tmp->ngay_thang = self::parse_date($cols[3]->plaintext);

            $tmp->ma_dai_ly = $cols[5]->plaintext;
            $tmp->ten_khach = str_replace(',', '', $cols[2]->plaintext);

            // Loai tuoi
            $tmp->loai_tuoi = 0;

            // tong Tien
            $tmp->tong_tien = self::parse_money($cols[6]->plaintext) / 100;

            // Hanh trinh, ngay bay, chuyen bay
            $hanh_trinh = $cols[4]->plaintext;

            if (preg_match_all("/\b([A-Z]{3})\b/", $hanh_trinh, $matches)) {
                $tmp->sb_di = $matches[1][0];
                $tmp->sb_di1 = $matches[1][1];
                if (count($matches[1]) >= 4) {
                    $tmp->sb_ve = $matches[1][2];
                    $tmp->sb_ve1 = $matches[1][3];
                }
            }
            if (preg_match_all("/([a-zA-Z]{3}) (\d+), (\d{4})/", $hanh_trinh, $matches)) { // Nếu ko đc thì thử dạng MMM dd, yyyy
                $mon = array_search(strtoupper($matches[1][0]), Util::$thang);
                if ($mon !== false) {
                    $mon++;
                    $tmp->ngay_gio_di = $matches[3][0] . "-" . $mon . "-" . $matches[2][0];
                }
                if (count($matches[1]) > 1) {
                    $mon = array_search(strtoupper($matches[1][1]), Util::$thang);
                    if ($mon !== false) {
                        $mon++;
                        $tmp->ngay_gio_ve = $matches[3][1] . "-" . $mon . "-" . $matches[2][1];
                    }
                }
            } else if (preg_match_all("/(\d+)\/(\d+)\/(\d{4})/", $hanh_trinh, $matches)) {  // Dạng dd/mm/yyyy
                $tmp->ngay_gio_di = $matches[3][0] . "-" . $matches[2][0] . "-" . $matches[1][0];
                if (count($matches[1]) > 1)
                    $tmp->ngay_gio_ve = $matches[3][1] . "-" . $matches[2][1] . "-" . $matches[1][1];
            }

            $parse[] = $tmp;
        }
    }

    /**
     * File VJ + VN 25/02/2023
     */
    public static function parse_html_1(&$parse, $rows, string $dinh_danh, $username)
    {
        foreach ($rows as $row) {
            $tmp = new stdClass;
            $tmp->ngay_thang = date("Y-m-d");
            $tmp->username = $username;
            $tmp->dinh_danh = $dinh_danh;

            $cols = $row->find('td');
            if (count($cols) < 23) continue;

            // So Ve
            $tmp->so_ve = $cols[2]->plaintext;
            if (empty($tmp->so_ve)) continue;

            $tmp->ma_giu_cho = $cols[3]->plaintext;
            $tmp->ten_khach = str_replace('/', ' ', $cols[4]->plaintext);

            // Ngay dat
            $tmp->ngay_thang = self::parse_date($cols[5]->plaintext);

            // Hang bay
            $tmp->hang_bay = $cols[7]->plaintext;

            // Loai tuoi
            $tmp->loai_tuoi = 0;

            // tong Tien
            $tmp->phu_phi = self::parse_money($cols[9]->plaintext);
            $tmp->tong_tien = self::parse_money($cols[14]->plaintext);
            $tmp->tong_tien_thu_khach = self::parse_money($cols[18]->plaintext);

            // Hanh trinh, ngay bay, chuyen bay
            $hanh_trinh = $cols[11]->plaintext;
            if (preg_match("/\b([a-zA-Z]{8,})\b/", $hanh_trinh, $matches)) {       // Đối với các hành trình dạng này HANVNSGNVNDAD, DADVNBMV....
                $ht1 = strtoupper($matches[0]);
                $ht1 = str_replace(['VN', 'BL', "VJ", "QH"], "", $ht1);
                preg_match("/[A-Z]+/", $ht1, $matches);
                $tmp->sb_di = substr($matches[0], 0, 3);
                $tmp->sb_di1 = substr($matches[0], 3, 3);
                if (strlen($matches[0]) >= 9) {
                    $tmp->sb_ve = $tmp->sb_di1;
                    $tmp->sb_ve1 = substr($matches[0], 6, 3);
                }
            }

            $tmp->ngay_gio_di = self::parse_date($cols[22]->plaintext);
            $ngay_gio_ve = $cols[20]->plaintext;
            if (!empty($ngay_gio_ve))
                $tmp->ngay_gio_ve = self::parse_date($ngay_gio_ve);

            $parse[] = $tmp;
        }
    }
}

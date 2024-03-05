<?php

namespace App\Helpers;

use App\KhachHang;
use App\TaiKhoan;
use App\ThuChi;
use App\User;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;

class ThemFileThuChi
{
    public static function parse_money(string $tt)
    {
        $tt = str_replace(',', '', $tt);
        $tt = str_replace('.', '', $tt);
        $tt = str_replace('-', '', $tt);
        return (float) (trim($tt));
    }

    public static function insert_into_db($parse, User $user)
    {
        // filter data 
        // Lọc từ ngày đến ngày
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $parse = array_filter($parse, fn ($item) => $item->ngay_thang >= $request->bat_dau && $item->ngay_thang <= $request->ket_thuc);

        $cnt = 0;
        foreach ($parse as $item) {
            $tc = new ThuChi((array) $item);

            $tk = TaiKhoan::ofUser($user)->where('ky_hieu', $item->ngan_hang)->first();
            if (empty($tk)) continue;

            if ($item->thu_chi === "+") $tc->id_tai_khoan_den = $tk->id;
            else $tc->id_tai_khoan_di = $tk->id;

            $kh = KhachHang::where('ma_khach_hang', $item->khach_hang)->first();
            if ($kh) $tc->id_khach_hang = $kh->id;

            try {
                $tc->save();
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

        $user = $request->user();
        $ind = $request->xu_ly_tu_hang;
        $parse = [];
        // Parse data from file
        while (true) {
            $tmp = new stdClass;
            $tmp->username = $user->username;
            $tmp->dinh_danh = $dinh_danh;

            // Ngày tháng
            $t = $sheet->getCell($request->cot_ngay_thang . $ind)->getValue() ?? "";
            $tmp->ngay_thang = ThemFile::parse_date($t);
            if ($tmp->ngay_thang === '')
                break;

            // Mã Ngân hàng
            if (!empty($request->cot_ngan_hang))
                $tmp->ngan_hang = trim($sheet->getCell($request->cot_ngan_hang . $ind)->getValue());
            // Dấu thu chi
            if (!empty($request->cot_thu_chi))
                $tmp->thu_chi = trim($sheet->getCell($request->cot_thu_chi . $ind)->getValue());
            // Mã khách hàng
            if (!empty($request->cot_khach_hang))
                $tmp->khach_hang = trim($sheet->getCell($request->cot_khach_hang . $ind)->getValue());
            // Nội dung
            if (!empty($request->cot_noi_dung))
                $tmp->hang_muc = trim($sheet->getCell($request->cot_noi_dung . $ind)->getValue());

            // Số tiền 
            if (!empty($request->cot_so_tien))
                $tmp->so_tien = self::parse_money($sheet->getCell($request->cot_so_tien . $ind)->getValue());

            $parse[] = $tmp;
            $ind++;
        }

        // insert rows to db
        $cnt = self::insert_into_db($parse, $user);

        return $cnt;
    }
}

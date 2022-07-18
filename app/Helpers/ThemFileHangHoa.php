<?php

namespace App\Helpers;

use App\HangHoa;
use App\TaiKhoan;
use App\User;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;

class ThemFileHangHoa
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
        $cnt = 0;
        foreach ($parse as $item) {
            $tc = new HangHoa((array) $item);

            $tk = TaiKhoan::ofUser($user)->where('ky_hieu', $item->nha_cung_cap)->first();
            if (empty($tk)) continue;

            try {
                $tc->id_tai_khoan = $tk->id;
                $tc->username = $item->username;
                $tc->dinh_danh = $item->dinh_danh;
                $tc->save();
                $cnt++;
            } catch (\Exception $e) {
                \Log::debug($e);
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

            // Mã hàng
            if (!empty($request->cot_ma_hang))
                $tmp->ma_hang = trim($sheet->getCell($request->cot_ma_hang . $ind)->getValue());
            if ($tmp->ma_hang === '')
                break;

            // Tên hàng
            if (!empty($request->cot_ten_hang))
                $tmp->ten_hang = trim($sheet->getCell($request->cot_ten_hang . $ind)->getValue());
            // Phân loại
            if (!empty($request->cot_phan_loai))
                $tmp->phan_loai = trim($sheet->getCell($request->cot_phan_loai . $ind)->getValue());
            // Mã nhà cung cấp
            if (!empty($request->cot_nha_cung_cap))
                $tmp->nha_cung_cap = trim($sheet->getCell($request->cot_nha_cung_cap . $ind)->getValue());
            // Đơn vị
            if (!empty($request->cot_don_vi))
                $tmp->don_vi = trim($sheet->getCell($request->cot_don_vi . $ind)->getValue());
            // Ghi chú
            if (!empty($request->cot_ghi_chu))
                $tmp->ghi_chu = trim($sheet->getCell($request->cot_ghi_chu . $ind)->getValue());

            // Đơn giá
            if (!empty($request->cot_don_gia))
                $tmp->don_gia = self::parse_money($sheet->getCell($request->cot_don_gia . $ind)->getValue());

            $parse[] = $tmp;
            $ind++;
        }

        // insert rows to db
        $cnt = self::insert_into_db($parse, $user);

        return $cnt;
    }
}

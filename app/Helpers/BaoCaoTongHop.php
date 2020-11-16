<?php

namespace App\Helpers;

use App\Helpers\Util;
use App\KhachHang;
use App\Report;
use App\TaiKhoan;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Worksheet;
use stdClass;

class BaoCaoTongHop
{
    public static function set_cell_style($sheet, string $cell)
    {
        $sheet->getStyle($cell)->getFont()->setBold(true);
        $sheet->getStyle($cell)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID);
        $sheet->getStyle($cell)->getFill()->getStartColor()->setARGB('FFdcf0dc');
    }

    public static function export_cong_no(Request $request, $sheet)
    {
        $muavao = [];
        $banra  = [];
        Report::tinh_cong_no($request, $muavao, $banra);

        // Bán ra
        $phan_loai = [];
        foreach ($banra as $item)       // Group by phan_loai
            $phan_loai[$item->phan_loai][] = $item;

        $row_index = 3;
        $sheet->insertNewRowBefore($row_index + 2, count($banra) + count($phan_loai) + 1);       // 1 hàng tổng
        $sheet->removeRow($row_index, 3);

        foreach ($phan_loai as $pl => $pls) {
            self::set_cell_style($sheet, "A$row_index");
            self::set_cell_style($sheet, "B$row_index");
            $sheet->setCellValue("B$row_index", $pl);
            self::set_cell_style($sheet, "C$row_index");
            $sheet->setCellValue("C$row_index", array_reduce($pls, fn ($carry, $item) => $carry + $item->dau_ky));
            self::set_cell_style($sheet, "D$row_index");
            $sheet->setCellValue("D$row_index", array_reduce($pls, fn ($carry, $item) => $carry + $item->cuoi_ky));
            self::set_cell_style($sheet, "E$row_index");
            $sheet->setCellValue("E$row_index", array_reduce($pls, fn ($carry, $item) => $carry + $item->thanh_toan));
            self::set_cell_style($sheet, "F$row_index");
            $sheet->setCellValue("F$row_index", array_reduce($pls, fn ($carry, $item) => $carry + $item->giao_dich));

            $row_index++;
            foreach ($pls as $key => $value) {
                $sheet->setCellValue("A$row_index", $key + 1);
                $sheet->setCellValue("B$row_index", $value->khach_hang);
                $sheet->setCellValue("C$row_index", $value->dau_ky);
                $sheet->setCellValue("D$row_index", $value->cuoi_ky);
                $sheet->setCellValue("E$row_index", $value->thanh_toan);
                $sheet->setCellValue("F$row_index", $value->giao_dich);
                $row_index++;
            }
        }
        self::set_cell_style($sheet, "A$row_index");
        self::set_cell_style($sheet, "B$row_index");
        $sheet->setCellValue("B$row_index", "Tổng");
        self::set_cell_style($sheet, "C$row_index");
        $sheet->setCellValue("C$row_index", array_reduce($banra, fn ($carry, $item) => $carry + $item->dau_ky));
        self::set_cell_style($sheet, "D$row_index");
        $sheet->setCellValue("D$row_index", array_reduce($banra, fn ($carry, $item) => $carry + $item->cuoi_ky));
        self::set_cell_style($sheet, "E$row_index");
        $sheet->setCellValue("E$row_index", array_reduce($banra, fn ($carry, $item) => $carry + $item->thanh_toan));
        self::set_cell_style($sheet, "F$row_index");
        $sheet->setCellValue("F$row_index", array_reduce($banra, fn ($carry, $item) => $carry + $item->giao_dich));

        // Mua vào
        $row_index += 4;
        $sheet->insertNewRowBefore($row_index + 2, count($muavao) + 1);       // 1 hàng tổng
        $sheet->removeRow($row_index, 3);
        foreach ($muavao as $key => $value) {
            $sheet->setCellValue("A$row_index", $key + 1);
            $sheet->setCellValue("B$row_index", $value->tai_khoan);
            $sheet->setCellValue("C$row_index", $value->dau_ky);
            $sheet->setCellValue("D$row_index", $value->cuoi_ky);
            $sheet->setCellValue("E$row_index", $value->thanh_toan);
            $sheet->setCellValue("F$row_index", $value->giao_dich);
            $row_index++;
        }
        self::set_cell_style($sheet, "A$row_index");
        self::set_cell_style($sheet, "B$row_index");
        $sheet->setCellValue("B$row_index", "Tổng");
        self::set_cell_style($sheet, "C$row_index");
        $sheet->setCellValue("C$row_index", array_reduce($muavao, fn ($carry, $item) => $carry + $item->dau_ky));
        self::set_cell_style($sheet, "D$row_index");
        $sheet->setCellValue("D$row_index", array_reduce($muavao, fn ($carry, $item) => $carry + $item->cuoi_ky));
        self::set_cell_style($sheet, "E$row_index");
        $sheet->setCellValue("E$row_index", array_reduce($muavao, fn ($carry, $item) => $carry + $item->thanh_toan));
        self::set_cell_style($sheet, "F$row_index");
        $sheet->setCellValue("F$row_index", array_reduce($muavao, fn ($carry, $item) => $carry + $item->giao_dich));
    }

    public static function export_tai_khoan(Request $request, $sheet)
    {
        $tai_khoan = Report::tinh_tai_khoan($request);
        $row_index = 1;
        $sheet->setCellValue("A$row_index", "Tài khoản");
        $sheet->setCellValue("B$row_index", "Đầu kỳ");

        $col = 4;
        $cols = [];
        foreach ($tai_khoan as $row) {
            if ($row_index === 1)
                foreach ($row as $key => $value)
                    if ($key != 'id' && $key != 'tai_khoan' && $key != 'dau_ky' && $key != 'thu_chi') {
                        $cols[$col] = $key;
                        $sheet->setCellValueByColumnAndRow($col++, $row_index, $key);
                    }

            $row_index++;
            $sheet->setCellValue("A$row_index", $row->tai_khoan);
            $sheet->setCellValue("B$row_index", $row->dau_ky);
            $sheet->setCellValue("C$row_index", $row->thu_chi ?? "");
            foreach ($cols as $key => $value)
                $sheet->setCellValueByColumnAndRow($key, $row_index, $row->$value ?? "");
        }
    }
}

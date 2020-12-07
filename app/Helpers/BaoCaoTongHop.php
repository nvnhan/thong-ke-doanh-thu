<?php

namespace App\Helpers;

use App\DatVe;
use App\Helpers\Util;
use App\KhachHang;
use App\Report;
use App\TaiKhoan;
use App\ThuChi;
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
        $tai_khoan = Report::tinh_tai_khoan($request, false);
        $row_index = 2;
        $sheet->insertNewRowBefore($row_index + 3, count($tai_khoan));
        $sheet->removeRow($row_index + 1, 3);

        $col = 4;
        $cols = [];
        foreach ($tai_khoan as $row) {
            if ($row_index === 2)
                foreach ($row as $key => $value)
                    if ($key != 'id' && $key != 'tai_khoan' && $key != 'dau_ky' && $key != 'thu_chi') {
                        $cols[$col] = $key;
                        $sheet->setCellValueByColumnAndRow($col++, $row_index, $key);
                    }

            $row_index++;
            $sheet->setCellValue("A$row_index", $row->tai_khoan);
            if (!strpos($row->id, 'a'))
                self::set_cell_style($sheet, "A$row_index");
            $sheet->setCellValue("B$row_index", $row->dau_ky);
            $sheet->setCellValue("C$row_index", $row->thu_chi ?? "");
            foreach ($cols as $key => $value)
                $sheet->setCellValueByColumnAndRow($key, $row_index, $row->$value ?? "");
        }
    }

    public static function export_dat_ve(Request $request, $sheet, int $type = 1)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        $dat_ve = [];

        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }

        switch ($type) {
            case 1:
                $dat_ve =
                    DatVe::ofUser($request->user())->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();
                break;
            case 2:
                $dat_ve =
                    DatVe::ofUser($request->user())->whereNull('ngay_thanh_toan')
                    ->orWhere('ngay_thanh_toan', '>', $den_ngay)->get();
                break;
            case 3:
                $dat_ve =
                    DatVe::ofUser($request->user())->where('ngay_gio_di', ">", $den_ngay)
                    ->orWhere('ngay_gio_ve', '>', $den_ngay)->get();
                break;
        }

        $row_index = 4;
        $sheet->insertNewRowBefore($row_index + 3, count($dat_ve));
        $sheet->removeRow($row_index + 1, 3);

        foreach ($dat_ve as $key => $row) {
            $sheet->setCellValue("A$row_index", $key + 1);
            $sheet->setCellValue("B$row_index", $row->ngay_thang->format('d/m/Y'));
            $sheet->setCellValue("C$row_index", $row->ma_giu_cho ?? "");
            $sheet->setCellValue("D$row_index", $row->so_ve ?? "");
            $sheet->setCellValue("E$row_index", $row->ten_khach ?? "");

            $sheet->setCellValue("F$row_index", $row->ngay_gio_di);
            $sheet->setCellValue("G$row_index", $row->cb_di);
            $sheet->setCellValue("H$row_index", $row->chang_di);

            $sheet->setCellValue("I$row_index", $row->ngay_gio_ve);
            $sheet->setCellValue("J$row_index", $row->cb_ve);
            $sheet->setCellValue("K$row_index", $row->chang_ve);

            $sheet->setCellValue("L$row_index", $row->tong_tien);
            $sheet->setCellValue("M$row_index", $row->lai);
            $sheet->setCellValue("N$row_index", $row->tong_tien_thu_khach);
            $sheet->setCellValue("O$row_index", $row->ngay_thanh_toan);

            $sheet->setCellValue("P$row_index", $row->noi_mua);
            $sheet->setCellValue("Q$row_index", $row->ma_khach_hang);

            $row_index++;
        }
    }

    public static function export_thu_chi(Request $request, $sheet)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');

        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }

        $objs = ThuChi::ofUser($request->user())->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();

        $row_index = 4;
        $sheet->insertNewRowBefore($row_index + 3, count($objs));
        $sheet->removeRow($row_index + 1, 3);

        foreach ($objs as $key => $row) {
            $sheet->setCellValue("A$row_index", $key + 1);
            $sheet->setCellValue("B$row_index", $row->ngay_thang->format('d/m/Y'));
            $sheet->setCellValue("C$row_index", $row->hang_muc);
            $sheet->setCellValue("D$row_index", $row->so_tien);

            $sheet->setCellValue("E$row_index", $row->tai_khoan_di);
            $sheet->setCellValue("F$row_index", $row->tai_khoan_den);
            $sheet->setCellValue("G$row_index", $row->ten_khach_hang);
            $sheet->setCellValue("H$row_index", $row->con_du);

            $row_index++;
        }
    }
}

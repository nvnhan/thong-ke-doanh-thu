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
    /** 
     * Tính muavao, banra
     */
    public static function tinh_cong_no(Request $request, &$muavao, &$banra)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));

        $khachHang = KhachHang::ofUser($request->user())
            ->where(fn ($query) => $query->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay))
            ->get();
        foreach ($khachHang as $kh) {
            $tmp = new stdClass;
            $tmp->id = $kh->id;
            $tmp->phan_loai = $kh->phan_loai;
            $tmp->khach_hang = $kh->ma_khach_hang . ' - ' . $kh->ho_ten;

            $tmp->dau_ky = $kh->so_du_ky_truoc + Report::TinhTongThanhToanBanRa($kh, $ngayTruoc) - Report::TinhTongGiaoDichBanRa($kh, $ngayTruoc);
            $tmp->thanh_toan = Report::TinhTongThanhToanBanRa($kh, $den_ngay, $tu_ngay);
            $tmp->giao_dich = Report::TinhTongGiaoDichBanRa($kh, $den_ngay, $tu_ngay);
            $tmp->cuoi_ky = $tmp->dau_ky + $tmp->thanh_toan - $tmp->giao_dich;

            $banra[] = $tmp;
        }

        $nhaCungCap = TaiKhoan::ofUser($request->user())->whereLoai(1)->get();
        foreach ($nhaCungCap as $ncc) {
            $tmp = new stdClass;
            $tmp->id = $ncc->id;
            $tmp->tai_khoan = $ncc->ky_hieu . ' - ' . $ncc->mo_ta;

            $tmp->dau_ky = Report::TongThuTK($ncc, '', $ngayTruoc) - Report::TongChiTK($ncc, '', $ngayTruoc);
            $tmp->thanh_toan = Report::TongThuTK($ncc, '', $den_ngay, $tu_ngay);
            $tmp->giao_dich = Report::TongChiTK($ncc, '', $den_ngay, $tu_ngay);
            $tmp->cuoi_ky = $tmp->dau_ky + $tmp->thanh_toan - $tmp->giao_dich;

            $muavao[] = $tmp;
            //TODO: Tính NƠI KHÁC..............
        }
    }

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
        BaoCaoTongHop::tinh_cong_no($request, $muavao, $banra);

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
}

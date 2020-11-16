<?php

namespace App\Http\Controllers;

use App\Helpers\Util;
use App\KhachHang;
use App\Report;
use App\TaiKhoan;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;

class BaoCaoController extends BaseController
{
    //
    public function taikhoan(Request $request)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        $user = $request->user;
        $result = [];

        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $taiKhoan = TaiKhoan::ofUser($request->user())->where('loai', '!=', '-1')->where(function ($q) use ($den_ngay) {
            return $q->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay);
        })->orderBy('loai')->get();

        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));
        $sum = 0;
        // Thêm các tài khoản
        foreach ($taiKhoan as $tk) {
            $tmp = new stdClass;
            $tmp->id = $tk->id;
            $tmp->tai_khoan = $tk->ky_hieu;

            $duCuoiKy = Report::TongThuTK($tk, $den_ngay) - Report::TongChiTK($tk, $den_ngay);
            $sum += $duCuoiKy;
            $tmp->dau_ky = Util::VNDFormater(Report::TongThuTK($tk, $ngayTruoc) - Report::TongChiTK($tk, $ngayTruoc)) . ' | '       // Đầu kỳ
                . Util::VNDFormater($duCuoiKy);
            $tmp->thu_chi = "THU | CHI";
            $coDuLieu = false;
            // Thêm các cột tương ứng với giá trị thu theo từng ngày
            for ($i = $tu_ngay; $i <= $den_ngay; $i++) {
                $t = (new DateTime($i))->format('d/m/y');
                $tmp->$t = Util::VNDFormater(Report::TongThuTK($tk, $i, $i)) . ' | ' . Util::VNDFormater(Report::TongChiTK($tk, $i, $i));
                if ($tmp->$t != '0 | 0')
                    $coDuLieu = true;
            }
            if ($tmp->dau_ky != '0 | 0' || $coDuLieu)
                $result[] = $tmp;
        }
        //TODO: Thêm Dư - Nợ
        $duNo = 0;
        $sum -= $duNo;
        $tmp = new stdClass;
        $tmp->id = -2;
        $tmp->tai_khoan = "DƯ - NỢ";
        $tmp->dau_ky = $duNo;
        $result[] = $tmp;
        // Thêm Lãi
        $lai = Report::TinhLai($request, $tu_ngay, $den_ngay);
        $tmp = new stdClass;
        $tmp->id = -1;
        $tmp->tai_khoan = "LÃI";
        $tmp->dau_ky = Util::VNDFormater($lai);
        $result[] = $tmp;
        // Thêm tồn kho
        $tonKho = Report::TinhTonKho($request, $den_ngay);
        $sum += $tonKho;
        $tmp = new stdClass;
        $tmp->id = -4;
        $tmp->tai_khoan = "TỒN KHO";
        $tmp->dau_ky = Util::VNDFormater($tonKho);
        $result[] = $tmp;
        // Thêm tổng cộng
        $tmp = new stdClass;
        $tmp->id = -3;
        $tmp->tai_khoan = "TỔNG CỘNG";
        $tmp->dau_ky = Util::VNDFormater($sum);
        $result[] = $tmp;

        return $this->sendResponse($result, "THTK retrieved successfully");
    }

    public function congno(Request $request)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        $muavao = [];
        $banra = [];
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

        $result = ['banra' => $banra, 'muavao' => $muavao];
        return $this->sendResponse((object) $result, "THCN retrieved successfully");
    }

    public function congnochitiet(Request $request)
    {
        $tu_ngay = date('Y-m-01');
        $den_ngay = date('Y-m-d');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $khach_hang = KhachHang::find($request->id_khach_hang);
        Report::maucongno($request, $tu_ngay, $den_ngay, [], $khach_hang);
    }

    public function doisoattaikhoan(Request $request)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $taiKhoan = TaiKhoan::find($request->id_tai_khoan);

        // Prepare Excel File
        $file = storage_path('app/reports') . "/trich-xuat-thanh-toan.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);
        $sheet->setCellValue("A2", "Tài khoản: " . $taiKhoan->ky_hieu);

        $data = Report::doi_soat_tai_khoan($taiKhoan, $tu_ngay, $den_ngay);
        // Số hàng dữ liệu
        $cnt = 0;
        foreach ($data as $value) {
            $cnt += max(count($value->thu_vao), count($value->chi_ra));
        }
        $sheet->insertNewRowBefore(8, $cnt);
        $sheet->removeRow(6, 3);

        $row_index = 6;
        $sthu = 0;
        $schi = 0;
        foreach ($data as $ngay => $value) {
            if (count($value->thu_vao) + count($value->chi_ra) > 0) {
                $sheet->setCellValue("B" . $row_index, $ngay);
                $tmp_index = $row_index;
                foreach ($value->thu_vao as $tv) {
                    $sheet->setCellValue("A" . $tmp_index, $tmp_index - 5);
                    $sheet->setCellValue("C" . $tmp_index, $tv->hang_muc);
                    $sheet->setCellValue("D" . $tmp_index, $tv->so_tien);
                    $sthu += $tv->so_tien;
                    $tmp_index++;
                }
                $tmp_index1 = $row_index;
                foreach ($value->chi_ra as $tv) {
                    $sheet->setCellValue("A" . $tmp_index1, $tmp_index1 - 5);
                    $sheet->setCellValue("E" . $tmp_index1, $tv->hang_muc);
                    $sheet->setCellValue("F" . $tmp_index1, $tv->so_tien);
                    $schi += $tv->so_tien;
                    $tmp_index1++;
                }
                $row_index = max($tmp_index, $tmp_index1);
            }
        }
        $sheet->setCellValue("D" . $row_index, $sthu);
        $sheet->setCellValue("F" . $row_index, $schi);

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }

    public function baocaotonghop(Request $request)
    {
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $taiKhoan = TaiKhoan::find($request->id_tai_khoan);

        // Prepare Excel File
        $file = storage_path('app/reports') . "/trich-xuat-thanh-toan.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);
        $sheet->setCellValue("A2", "Tài khoản: " . $taiKhoan->ky_hieu);

        $data = Report::doi_soat_tai_khoan($taiKhoan, $tu_ngay, $den_ngay);
        // Số hàng dữ liệu
        $cnt = 0;
        foreach ($data as $value) {
            $cnt += max(count($value->thu_vao), count($value->chi_ra));
        }
        $sheet->insertNewRowBefore(8, $cnt);
        $sheet->removeRow(6, 3);

        $row_index = 6;
        $sthu = 0;
        $schi = 0;
        foreach ($data as $ngay => $value) {
            if (count($value->thu_vao) + count($value->chi_ra) > 0) {
                $sheet->setCellValue("B" . $row_index, $ngay);
                $tmp_index = $row_index;
                foreach ($value->thu_vao as $tv) {
                    $sheet->setCellValue("A" . $tmp_index, $tmp_index - 5);
                    $sheet->setCellValue("C" . $tmp_index, $tv->hang_muc);
                    $sheet->setCellValue("D" . $tmp_index, $tv->so_tien);
                    $sthu += $tv->so_tien;
                    $tmp_index++;
                }
                $tmp_index1 = $row_index;
                foreach ($value->chi_ra as $tv) {
                    $sheet->setCellValue("A" . $tmp_index1, $tmp_index1 - 5);
                    $sheet->setCellValue("E" . $tmp_index1, $tv->hang_muc);
                    $sheet->setCellValue("F" . $tmp_index1, $tv->so_tien);
                    $schi += $tv->so_tien;
                    $tmp_index1++;
                }
                $row_index = max($tmp_index, $tmp_index1);
            }
        }
        $sheet->setCellValue("D" . $row_index, $sthu);
        $sheet->setCellValue("F" . $row_index, $schi);

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }
}

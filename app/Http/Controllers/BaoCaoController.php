<?php

namespace App\Http\Controllers;

use App\Helpers\BaoCaoTongHop;
use App\KhachHang;
use App\Report;
use App\TaiKhoan;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;

class BaoCaoController extends BaseController
{
    /**
     * Get data to show in view
     */
    public function taikhoan(Request $request)
    {
        $result = Report::tinh_tai_khoan($request);
        return $this->sendResponse($result, "THTK retrieved successfully");
    }

    public function congno(Request $request)
    {
        $muavao = [];
        $banra = [];
        Report::tinh_cong_no($request, $muavao, $banra);

        $result = ['banra' => $banra, 'muavao' => $muavao];
        return $this->sendResponse((object) $result, "THCN retrieved successfully");
    }

    /**
     * Create and download file
     */
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
        // Prepare Excel File
        $file = storage_path('app/reports') . "/bao-cao-tong-hop.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);

        // Tổng hợp công nợ ==> Sheet 0
        $sheet = $spreadSheet->getSheet(0);
        BaoCaoTongHop::export_cong_no($request, $sheet);



        
        $sheet = $spreadSheet->getSheet(5);
        BaoCaoTongHop::export_tai_khoan($request, $sheet);

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }
}

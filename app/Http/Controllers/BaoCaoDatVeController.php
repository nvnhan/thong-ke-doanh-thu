<?php

namespace App\Http\Controllers;

use App\DatVe;
use App\SanBay;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class BaoCaoDatVeController extends Controller
{
    public function mauve(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (!\is_array($objs))
            return;

        // Prepare Excel File
        $file = storage_path('app/reports') . "/mau-ve.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);

        // Get data from SQL
        $vnbb = DatVe::whereIn('id', $objs)->whereIn('hang_bay', ['VN', 'BB'])->get()->groupBy('ma_giu_cho');
        $vjjets = DatVe::whereIn('id', $objs)->whereIn('hang_bay', ['VJ', 'Jets'])->get()->groupBy('so_ve');

        foreach ($vnbb as $mgc => $ves) {
            $sheet = clone $spreadSheet->getSheet(0);
            if ($ves[0]->hang_bay == "BB")
                $sheet = clone $spreadSheet->getSheet(3);
            $sheet->setTitle($mgc);
            $spreadSheet->addSheet($sheet);
            $sheet->setCellValue("C9", $mgc);
            // Information of Dai Ly
            $sheet->setCellValue("C1", env("TT_DAI_LY"));
            $sheet->setCellValue("C2", env("TT_DIA_CHI_DAI_LY"));
            $sheet->setCellValue("C3", env("TT_SDT_DAI_LY"));
            // Chuyen Bay di
            $sheet->setCellValue("A8", $ves[0]->cb_di);
            $sheet->setCellValue("B8", (new DateTime($ves[0]->ngay_gio_di))->format('d/m/Y'));

            $sb = SanBay::where('ma_san_bay', $ves[0]->sb_di)->first();
            $sheet->setCellValue("C8", optional($sb)->ten_san_bay);
            $sb = SanBay::where('ma_san_bay', $ves[0]->sb_di1)->first();
            $sheet->setCellValue("D8", optional($sb)->ten_san_bay);

            $rowIndex = 8;
            // chuyen di ve
            if (!empty($ves[0]->ngay_gio_ve)) {
                $rowIndex++;
                $sheet->insertNewRowBefore($rowIndex, 1);
                $sheet->setCellValue("A9", $ves[0]->cb_ve);
                $sheet->setCellValue("B9", (new DateTime($ves[0]->ngay_gio_ve))->format('d/m/Y'));

                $sb = SanBay::where('ma_san_bay', $ves[0]->sb_ve)->first();
                $sheet->setCellValue("C9", optional($sb)->ten_san_bay);
                $sb = SanBay::where('ma_san_bay', $ves[0]->sb_ve1)->first();
                $sheet->setCellValue("D9", optional($sb)->ten_san_bay);
            }
            $rowIndex += 3;
            if (count($ves) > 1) $sheet->insertNewRowBefore($rowIndex + 1, count($ves) - 1);
            foreach ($ves as $key => $ve) {
                $sheet->setCellValue("A" . $rowIndex, $key + 1);            // STT
                $sheet->setCellValue("B" . $rowIndex, $ve->ten_khach);      // Ten khach
                $sheet->setCellValue("D" . $rowIndex, $ve->so_ve);          // So ve
                $rowIndex++;
            }
            $sheet->setCellValue("D" . $rowIndex, $ves->sum('tong_tien_thu_khach'));          // Tong Tien
        }

        foreach ($vjjets as $sove => $ves) {
            $sheet = clone $spreadSheet->getSheet(1);
            if ($ves[0]->hang_bay == "Jets")
                $sheet = clone $spreadSheet->getSheet(2);
            $sheet->setTitle($sove . '');
            $spreadSheet->addSheet($sheet);
            $sheet->setCellValue("A8", $sove);
            // Information of Dai Ly
            $sheet->setCellValue("D1", env("TT_DAI_LY"));
            $sheet->setCellValue("D2", env("TT_DIA_CHI_DAI_LY"));
            $sheet->setCellValue("D3", env("TT_SDT_DAI_LY"));
            // Ngay Thang
            $sheet->setCellValue("D8", (new DateTime($ves[0]->ngay_thang))->format('d/m/Y'));
            $sheet->setCellValue("D9", $ves[0]->ten_khach);

            $rowIndex = 12;
            if (count($ves) > 1) $sheet->insertNewRowBefore($rowIndex + 1, count($ves) - 1);
            foreach ($ves as $ve) {
                $sheet->setCellValue("A" . $rowIndex, $ve->ten_khach);      // Ten khach
                $rowIndex++;
            }
            $rowIndex += 2;
            // Chuyen Bay di
            $sheet->setCellValue("A" . $rowIndex, $ves[0]->cb_di);
            $sheet->setCellValue("B" . $rowIndex, (new DateTime($ves[0]->ngay_gio_di))->format('d/m/Y'));
            $sb = SanBay::where('ma_san_bay', $ves[0]->sb_di)->first();
            $sheet->setCellValue("D" . $rowIndex, optional($sb)->ten_san_bay);
            $sb = SanBay::where('ma_san_bay', $ves[0]->sb_di1)->first();
            $sheet->setCellValue("E" . $rowIndex, optional($sb)->ten_san_bay);

            // chuyen di ve
            if (!empty($ves[0]->ngay_gio_ve)) {
                $rowIndex++;
                $sheet->insertNewRowBefore($rowIndex, 1);
                $sheet->setCellValue("A" . $rowIndex, $ves[0]->cb_ve);
                $sheet->setCellValue("B" . $rowIndex, (new DateTime($ves[0]->ngay_gio_ve))->format('d/m/Y'));

                $sb = SanBay::where('ma_san_bay', $ves[0]->sb_ve)->first();
                $sheet->setCellValue("D" . $rowIndex, optional($sb)->ten_san_bay);
                $sb = SanBay::where('ma_san_bay', $ves[0]->sb_ve1)->first();
                $sheet->setCellValue("E" . $rowIndex, optional($sb)->ten_san_bay);
            }
            $rowIndex++;

            $sheet->setCellValue("E" . $rowIndex, $ves->sum('tong_tien_thu_khach'));          // Tong Tien
        }

        // Remove empty sheets
        // $spreadSheet->removeSheetByIndex(0);
        // $spreadSheet->removeSheetByIndex(0);
        // $spreadSheet->removeSheetByIndex(0);
        // $spreadSheet->removeSheetByIndex(0);
        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }

    public function layhoadon(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (!\is_array($objs))
            return;

        // Prepare Excel File
        $file = storage_path('app/reports') . "/thong-tin-hoa-don.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);

        $datVe = DatVe::whereIn('id', $objs)->get();
        // Thông tin nơi mua
        $noiMua = $datVe[0]->tai_khoan_mua;
        if ($noiMua != null) {
            $sheet->setCellValue("B2", $noiMua->mo_ta);
            $sheet->setCellValue("B3", "Mã số thuế: " . $noiMua->mst);
            $sheet->setCellValue("B4", "Địa chỉ: " . $noiMua->dia_chi);
            $sheet->setCellValue("B5", "Email: " . $noiMua->email);
        }
        // Thông tin đại lý
        $sheet->setCellValue("C7", env("TT_DAI_LY"));
        $sheet->setCellValue("C14", env("TT_TEN_CONG_TY"));
        $sheet->setCellValue("C15", env("TT_MST_CONG_TY"));
        $sheet->setCellValue("C16", env("TT_DIA_CHI_CONG_TY"));

        // Khách hàng nhận hóa đơn
        $khachHang = $datVe[0]->khach_hang;
        if ($khachHang != null) {
            $sheet->setCellValue("C19", $khachHang->ho_ten);
            $sheet->setCellValue("C20", $khachHang->dia_chi);
            $sheet->setCellValue("C21", $khachHang->sdt);
        }

        $rowIndex = 11;
        if (count($datVe) > 0) $sheet->insertNewRowBefore($rowIndex + 1, count($datVe) - 1);
        foreach ($datVe as $key => $ve) {
            $sheet->setCellValue("A" . $rowIndex, $key + 1);
            $sheet->setCellValue("B" . $rowIndex, (new DateTime($ve->ngay_thang))->format('d/m/Y'));

            if ($ve->hang_bay == "VN" || $ve->hang_bay == "BB")
                $sheet->setCellValue("C" . $rowIndex, $ve->so_ve);
            else
                $sheet->setCellValue("C" . $rowIndex, $ve->ma_giu_cho);

            $sheet->setCellValue("D" . $rowIndex, "$ve->sb_di $ve->sb_di1 $ve->sb_ve1");
            $sheet->setCellValue("E" . $rowIndex, $ve->tong_tien);

            if ($request->type == 1) {
                $sheet->setCellValue("F" . $rowIndex, $ve->tong_tien);
            } else if ($request->type == 2) {
                $sheet->setCellValue("F" . $rowIndex, $ve->tong_tien_thu_khach);
                $sheet->setCellValue("G" . $rowIndex, $ve->lai);
            }
            $rowIndex++;
        }

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }
}

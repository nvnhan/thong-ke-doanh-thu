<?php

namespace App;

use Carbon\Carbon;
use DateInterval;
use DatePeriod;
use DateTime;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;

class Report
{
    /// Là số tiền KHÁCH HÀNG ĐÃ THANH TOÁN === MÌNH THU CỦA KH
    public  static function TinhTongThanhToanBanRa($khachHang, $date2, $date1 = '')
    {
        if ($khachHang->ngay_tao != null && ($date1 == '' || $date1 < $khachHang->ngay_tao))
            $date1 = $khachHang->ngay_tao;
        if ($khachHang->ngay_tao != null && $khachHang->ngay_tao > $date2)
            return 0;

        $sum = $khachHang->thu_chis()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2)->sum('so_tien');
        return (float) $sum;
    }

    /// Là số tiền Khách hàng phát sinh từ các đối tượng, cần phải thanh toán cho mình
    public  static function TinhTongGiaoDichBanRa($khachHang, $date2, $date1 = '')
    {
        if ($khachHang->ngay_tao != null && ($date1 == '' || $date1 < $khachHang->ngay_tao))
            $date1 = $khachHang->ngay_tao;
        if ($khachHang->ngay_tao != null && $khachHang->ngay_tao > $date2)
            return 0;

        $sum = $khachHang->dat_ves()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2)->sum('tong_tien_thu_khach');

        $sum += $khachHang->ban_ras()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2)->sum('thanh_tien_ban');

        $sum += $khachHang->visas()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2)->sum('gia_ban');

        $sum += $khachHang->tours()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2)->sum('tong_tien_ban');

        return (float) $sum;
    }

    // Tổng lãi cho tổng hợp tài khoản
    public  static function TinhLai($request, $date1, $date2)
    {
        $lai = 0;
        $q = DatVe::ofUser($request->user())->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $lai += $q->sum('lai');

        $q = BanRa::ofUser($request->user())->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $lai += $q->get()->sum('lai');

        $q = Tour::ofUser($request->user())->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $lai += $q->get()->sum('lai');

        $q = Visa::ofUser($request->user())->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $lai += $q->sum('lai');

        return (float) $lai;
    }

    // Tổng tồn kho cho Tổng hợp tài khoản
    public  static function TinhTonKho($request, $date2)
    {
        $tonKho = 0;
        $hh = HangHoa::ofUser($request->user())->get();
        foreach ($hh as $h) {
            $q = $h->mua_vaos()->where('ngay_thang', '<=', $date2);
            $sl = $q->sum('so_luong');

            $q = $h->ban_ras()->where('ngay_thang', '<=', $date2);
            $sl -= $q->sum('so_luong');

            $q = $h->ban_ras()->where('ngay_hoan_doi_xong', '<=', $date2);
            $sl += $q->sum('so_luong');

            if ($sl > 0)
                $tonKho += $sl * $h->don_gia;
        }
        return (float) $tonKho;
    }

    // Tổng thu của tài khoản từ ngày đến ngày
    public  static function TongThuTK($taiKhoan, $date2, $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $q = $taiKhoan->thu_chi_dens()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $sthu = $q->sum('so_tien');
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao <= $date2 && $taiKhoan->ngay_tao >= $date1)
            $sthu += $taiKhoan->so_du_ky_truoc;
        return (float) $sthu;
    }

    // Tổng chi của tài khoản từ ngày đến ngày
    public  static function TongChiTK($taiKhoan, $date2, $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $q = $taiKhoan->thu_chi_dis()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $schi = $q->sum('so_tien');

        $q = $taiKhoan->dat_ves()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $schi += $q->sum('tong_tien');

        $q = $taiKhoan->ban_ra_hoa_dois()->where('ngay_thanh_toan_hoan_doi', '>=', $date1)->where('ngay_thanh_toan_hoan_doi', '<=', $date2);
        $schi += $q->sum('thanh_tien_ban');

        $q = $taiKhoan->tour_chi_tiets()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $schi += $q->sum('thanh_tien');

        $q = $taiKhoan->visas()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $schi += $q->sum('gia_ban');

        $q = $taiKhoan->mua_vaos()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        $schi += $q->sum('thanh_tien');

        return (float) $schi;
    }

    /**
     * Chi tiết đối soát tài khoản
     * 
     * @param TaiKhoan $taiKhoan Tài khoản
     * @param string $tu_ngay
     * @param string $den_ngay
     * 
     * @return Array Array of data
     */
    public static function doi_soat_tai_khoan(TaiKhoan $taiKhoan, string $tu_ngay, string $den_ngay)
    {
        $data = [];
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod(new DateTime($tu_ngay), $interval, new DateTime($den_ngay));

        foreach ($period as $dt) {
            $val = new stdClass;
            $val->thu_vao = [];
            $val->chi_ra = [];
            $tmp = $dt->format('d/m/Y');
            $data[$tmp] = $val;
        }
        // Tài khoản thu vào: chỉ từ thu chi
        $thuVao = $taiKhoan->thu_chi_dens()->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($thuVao as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = $tc->hang_muc . ' - ' . $tc->tai_khoan_di;
                $val->so_tien = $tc->so_tien;
                $data[$nt]->thu_vao[] = $val;
            }
        }

        // Các mục chi ra của tài khoản
        $q = $taiKhoan->thu_chi_dis()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = $tc->hang_muc . ' - ' . $tc->tai_khoan_den;
                $val->so_tien = $tc->so_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->dat_ves()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Đặt vé " . $tc->so_ve . ' - ' . $tc->ma_khach_hang;
                $val->so_tien = $tc->tong_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->ban_ra_hoa_dois()->whereBetween('ngay_thanh_toan_hoan_doi', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thanh_toan_hoan_doi)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Hoàn đổi " . $tc->ma_hang . ' - ' . $tc->ma_khach_hang;
                $val->so_tien = $tc->thanh_tien_ban;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->tour_chi_tiets()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Tour chi tiết " . $tc->ma_tour . ' - ' . $tc->ma_hang;
                $val->so_tien = $tc->thanh_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->visas()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Visa " . $tc->ma_visa;
                $val->so_tien = $tc->gia_mua;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->mua_vaos()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Mua vào " . $tc->ma_hang;
                $val->so_tien = $tc->thanh_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        return $data;
    }

    public static function maucongno($request, string $tu_ngay = "", string $den_ngay = "", $dat_ve = [], KhachHang $khach_hang = null)
    {
        $user = $request->user();
        // Prepare Excel File
        $file = storage_path('app/reports') . "/cong-no.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);
        // Infomation 
        $sheet->setCellValue("A1", $user->ct_ten);
        $sheet->setCellValue("A2", $user->ct_dia_chi);
        $sheet->setCellValue("A3", "Tel: " . $user->ct_sdt . " / Fax: " . $user->ct_fax);
        $sheet->setCellValue("A4", "Email: " . $user->ct_email);
        // Dates
        if (empty($tu_ngay) || empty($den_ngay)) {
            $tu_ngay = date('Y-m-01');
            $den_ngay = date('Y-m-d');
        }
        $sheet->setCellValue("G3", "From date: " . (new DateTime($tu_ngay))->format('d/m/Y'));
        $sheet->setCellValue("G4", "To date: " . (new DateTime($den_ngay))->format('d/m/Y'));

        $thu_chi = [];
        // Chỉ có khách hàng === Xuất phát từ Công nợ chi tiết ==> Tính toàn bộ theo khách hàng
        if ($dat_ve == []) {
            // Đặt vé phát sinh trong khoảng thời gian của khách hàng tương ứng
            $dat_ve = $khach_hang->dat_ves()->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();
            // All thu chi of this Customer
            $thu_chi = $khach_hang->thu_chis()->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();

            //TODO: Other object: Tour, Visa...
        } else if ($khach_hang == null)
            $khach_hang = $dat_ve[0]->khach_hang;
        // Fill Customer Info
        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));
        $no_dau_ky = 0;
        if ($khach_hang != null) {
            $sheet->setCellValue("A7", "Kính gửi (To):    $khach_hang->ho_ten");
            $sheet->setCellValue("A8", "Tên giao dịch (Name):   $khach_hang->ho_ten - Tel: $khach_hang->sdt - Email: $khach_hang->email");
            $no_dau_ky = $khach_hang->so_du_ky_truoc + self::TinhTongThanhToanBanRa($khach_hang, $ngayTruoc) - self::TinhTongGiaoDichBanRa($khach_hang, $ngayTruoc);
            $sheet->setCellValue("M8", $no_dau_ky);
        }

        $data = [];
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod(new DateTime($tu_ngay), $interval, new DateTime($den_ngay));
        foreach ($period as $dt) {
            $tmp = $dt->format('d/m/Y');
            $data[$tmp] = [];
        }

        $sno = 0;
        $sco = 0;
        $row_count = 0;
        $dat_ve = $dat_ve->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        // Each day
        foreach ($dat_ve as $ngay => $ves) {
            $tmp = $ves->groupBy('so_ve');
            // Each So Ve
            foreach ($tmp as $sove => $ves1) {
                $obj = new stdClass;
                $obj->ngay_thang = $ngay;
                $obj->chung_tu = $sove;
                $obj->no = $ves1->sum('tong_tien_thu_khach');
                $obj->noi_dung = $sove . ' ' . count($ves1) . ' vé';
                $obj->dich_vu = $ves1->sum('lai');
                $obj->tong_tien = $ves1->sum('tong_tien');
                $obj->loai_tuoi = $ves1[0]->ten_loai_tuoi;
                //TODO: Tai Khoan "CO" la Tong Tien da thu trong khoang thoi gian???
                $obj->co = 0;
                // Chua xu ly Ngay thanh toan tron Dat Ve
                $sno += $obj->no;
                $data[$ngay][] = $obj;
                $row_count++;
            }
        }

        foreach ($thu_chi as $tc) {
            $ngay = (new DateTime($tc->ngay_thang))->format('d/m/Y');
            $obj = new stdClass;
            $obj->ngay_thang = $ngay;
            $obj->chung_tu = "";
            $obj->no = 0;
            $obj->noi_dung = "$tc->tai_khoan_di => $tc->tai_khoan_den - $tc->hang_muc";
            $obj->dich_vu = '';
            $obj->tong_tien = '';
            $obj->loai_tuoi = '';
            $obj->co = $tc->so_tien;

            $sco += $obj->co;
            $data[$ngay][] = $obj;
            $row_count++;
        }
        // No Cuoi Ky
        $sheet->setCellValue("M17", $no_dau_ky + $sco - $sno);

        $sheet->insertNewRowBefore(15, $row_count);
        $sheet->removeRow(13, 2);
        $row_index = 13;
        foreach ($data as $ngay => $values) {
            foreach ($values as $value) {
                $sheet->setCellValue("A$row_index", $row_index - 12);
                $sheet->setCellValue("B$row_index", $ngay);
                $sheet->setCellValue("C$row_index", $value->chung_tu);
                $sheet->setCellValue("E$row_index", $value->noi_dung);

                $sheet->setCellValue("G$row_index", $value->loai_tuoi);
                $sheet->setCellValue("H$row_index", $value->tong_tien);
                $sheet->setCellValue("I$row_index", $value->dich_vu);

                $sheet->setCellValue("L$row_index", $value->no);
                $sheet->setCellValue("M$row_index", $value->co);
                $no_dau_ky += $value->co - $value->no;
                $sheet->setCellValue("N$row_index", $no_dau_ky);
                $row_index++;
            }
        }
        $sheet->setCellValue("E$row_index", "Tổng cộng");
        $sheet->setCellValue("L$row_index", $sno);
        $sheet->setCellValue("M$row_index", $sco);

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }
}

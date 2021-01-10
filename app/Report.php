<?php

namespace App;

use Carbon\Carbon;
use DateInterval;
use DatePeriod;
use DateTime;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;
use App\Helpers\Util;
use App\KhachHang;
use App\TaiKhoan;
use Illuminate\Http\Request;

class Report
{
    /**
     * Tổng thanh toán bán ra
     * Là số tiền KHÁCH HÀNG ĐÃ THANH TOÁN === MÌNH THU CỦA KH
     *
     * @param  mixed $request
     * @param  mixed $khachHang
     * @param  mixed $date2
     * @param  mixed $date1
     * @return void
     */
    public  static function TinhTongThanhToanBanRa(User $user, KhachHang $khachHang, $date2, $date1 = '')
    {
        if ($khachHang->ngay_tao != null && ($date1 == '' || $date1 < $khachHang->ngay_tao))
            $date1 = $khachHang->ngay_tao;
        if ($khachHang->ngay_tao != null && $khachHang->ngay_tao > $date2)
            return 0;

        $sum = $khachHang->thu_chis()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2])->sum('so_tien');
        return (float) $sum;
    }

    /**
     * Tổng giao dịch bán ra
     * Là số tiền Khách hàng phát sinh từ các đối tượng, cần PHẢI THANH TOÁN CHO MÌNH
     *
     * @param  mixed $request
     * @param  mixed $khachHang
     * @param  mixed $date2
     * @param  mixed $date1
     * @return void
     */
    public  static function TinhTongGiaoDichBanRa(User $user, KhachHang $khachHang, $date2, $date1 = '')
    {
        if ($khachHang->ngay_tao != null && ($date1 == '' || $date1 < $khachHang->ngay_tao))
            $date1 = $khachHang->ngay_tao;
        if ($khachHang->ngay_tao != null && $khachHang->ngay_tao > $date2)
            return 0;

        $sum = $khachHang->dat_ves()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien_thu_khach');

        $sum += $khachHang->ban_ras()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2])->sum('thanh_tien_ban');

        $sum += $khachHang->visas()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2])->sum('gia_ban');

        $sum += $khachHang->tours()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien_ban');

        return (float) $sum;
    }

    /**
     * Tổng lãi cho tổng hợp tài khoản
     *
     * @param  mixed $request
     * @param  mixed $date1
     * @param  mixed $date2
     * @return void
     */
    public  static function TinhLai(User $user, $date1, $date2)
    {
        $lai = 0;
        $q = DatVe::ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $lai += $q->sum('lai');

        $q = BanRa::ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $lai += $q->get()->sum('lai');

        $q = Tour::ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $lai += $q->get()->sum('lai');

        $q = Visa::ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $lai += $q->sum('lai');

        return (float) $lai;
    }

    // Tổng tồn kho cho Tổng hợp tài khoản
    public  static function TinhTonKho(User $user, $date2)
    {
        $tonKho = 0;
        $hh = HangHoa::ofUser($user)->get();
        foreach ($hh as $h) {
            $q = $h->mua_vaos()->ofUser($user)->where('ngay_thang', '<=', $date2);
            $sl = $q->sum('so_luong');

            $q = $h->ban_ras()->ofUser($user)->where('ngay_thang', '<=', $date2);
            $sl -= $q->sum('so_luong');

            $q = $h->ban_ras()->ofUser($user)->where('ngay_hoan_doi_xong', '<=', $date2);
            $sl += $q->sum('so_luong');

            if ($sl > 0)
                $tonKho += $sl * $h->don_gia;
        }
        return (float) $tonKho;
    }

    // Tổng thu của tài khoản từ ngày đến ngày
    public  static function TongThuTK(User $user, TaiKhoan $taiKhoan, $date2, $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $q = $taiKhoan->thu_chi_dens()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $sthu = $q->sum('so_tien');
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao <= $date2 && $taiKhoan->ngay_tao >= $date1)
            $sthu += $taiKhoan->so_du_ky_truoc;
        return (float) $sthu;
    }

    // Tổng chi của tài khoản từ ngày đến ngày
    public  static function TongChiTK(User $user, TaiKhoan $taiKhoan, $date2, $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $q = $taiKhoan->thu_chi_dis()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $schi = $q->sum('so_tien');

        $q = $taiKhoan->dat_ves()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $schi += $q->sum('tong_tien');

        $q = $taiKhoan->ban_ra_hoa_dois()->ofUser($user)->whereBetween('ngay_thanh_toan_hoan_doi', [$date1, $date2]);
        $schi += $q->sum('thanh_tien_ban');

        $q = $taiKhoan->visas()->ofUser($user)->whereBetween('ngay_thang', [$date1, $date2]);
        $schi += $q->sum('gia_ban');

        // Do Have Many Through ko dùng scope đc nên mới phải làm thủ công
        $idHH = $taiKhoan->hang_hoas()->ofUser($user)->pluck('id')->toArray();
        $idTour = Tour::ofUser($user)->pluck('id')->toArray();
        $q = TourChiTiet::whereIn('id_tour', $idTour)->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$date1, $date2]);
        $schi += $q->sum('thanh_tien');

        $q = MuaVao::ofUser($user)->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$date1, $date2]);
        $schi += $q->sum('thanh_tien');

        return (float) $schi;
    }

    /**
     * TinhNoiDungXuatCongNo
     *
     * @param  mixed $dat_ves
     * @return void
     */
    public static function TinhNoiDungXuatCongNo($dat_ves)
    {
        $s = '';
        $dv = $dat_ves[0];
        $s = ($dv->hang_bay == "VN" || $dv->hang_bay == "BB") ? $dv->ma_giu_cho : $dv->so_ve;
        $s .= ' - ';

        foreach ($dat_ves as $ve)
            $s .= $ve->ten_khach . '/' . $ve->tong_tien_thu_khach . ' ';

        $s .= $ve->sb_di . $ve->sb_di1 . $ve->sb_ve1;
        $s .= ' ' . $ve->ngay_gio_di . ' ' . $ve->cb_di . ' ' . $ve->ngay_gio_ve . ' ' . $ve->cb_ve;
        return $s;
    }

    /**
     * TinhDuNo
     * Công thức lấy từ bên Tổng hợp công nợ
     * @param  mixed $den_ngay
     * @return void
     */
    public static function TinhDuNo(User $user, $den_ngay)
    {
        $sum = 0;
        $khachHang = KhachHang::allowUser($user)
            ->whereRaw("UPPER(phan_loai) != 'THU CHI NGOÀI'")
            ->where(fn ($query) => $query->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay))
            ->get();

        foreach ($khachHang as $kh) {
            $sum += $kh->so_du_ky_truoc
                + self::TinhTongThanhToanBanRa($user,  $kh, $den_ngay)
                - self::TinhTongGiaoDichBanRa($user,  $kh, $den_ngay);
        }
        return $sum;
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
    public static function doi_soat_tai_khoan(User $user, TaiKhoan $taiKhoan, string $tu_ngay, string $den_ngay)
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
        $thuVao = $taiKhoan->thu_chi_dens()->ofUser($user)->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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
        $q = $taiKhoan->thu_chi_dis()->ofUser($user)->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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

        $q = $taiKhoan->dat_ves()->ofUser($user)->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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

        $q = $taiKhoan->ban_ra_hoa_dois()->ofUser($user)->whereBetween('ngay_thanh_toan_hoan_doi', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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

        $idHH = $taiKhoan->hang_hoas()->ofUser($user)->pluck('id')->toArray();
        $idTour = Tour::ofUser($user)->pluck('id')->toArray();
        $q = TourChiTiet::whereIn('id_tour', $idTour)->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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

        $q = $taiKhoan->visas()->ofUser($user)->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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

        $q = MuaVao::ofUser($user)->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
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

    /**
     * Công nợ chi tiết
     */
    public static function maucongno(Request $request, string $tu_ngay = "", string $den_ngay = "", $dat_ve = [], KhachHang $khach_hang = null)
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
            $no_dau_ky = $khach_hang->so_du_ky_truoc + self::TinhTongThanhToanBanRa($user, $khach_hang, $ngayTruoc) - self::TinhTongGiaoDichBanRa($user, $khach_hang, $ngayTruoc);
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
                $obj->noi_dung = self::TinhNoiDungXuatCongNo($ves1);
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

    /** 
     * Tính muavao, banra
     */
    public static function tinh_cong_no(Request $request, &$muavao, &$banra)
    {
        $user = $request->user();
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));

        $khachHang = KhachHang::allowUser($user)
            // ->whereRaw("UPPER(phan_loai) != 'THU CHI NGOÀI'")
            ->where(fn ($query) => $query->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay))
            ->get();
        foreach ($khachHang as $kh) {
            $tmp = new stdClass;
            $tmp->id = $kh->id;
            $tmp->phan_loai = $kh->phan_loai;
            $tmp->khach_hang = $kh->ma_khach_hang . ' - ' . $kh->ho_ten;

            $phan_loai = strtoupper($tmp->phan_loai);
            if ($phan_loai !== "THU CHI NGOÀI") {
                $tmp->dau_ky = $kh->so_du_ky_truoc + self::TinhTongThanhToanBanRa($user, $kh, $ngayTruoc) - self::TinhTongGiaoDichBanRa($user, $kh, $ngayTruoc);
                $tmp->thanh_toan = self::TinhTongThanhToanBanRa($user, $kh, $den_ngay, $tu_ngay);
                $tmp->giao_dich = self::TinhTongGiaoDichBanRa($user, $kh, $den_ngay, $tu_ngay);
                $tmp->cuoi_ky = $tmp->dau_ky + $tmp->thanh_toan - $tmp->giao_dich;
            } else {
                $tmp->dau_ky = 0;
                $tmp->thanh_toan = 0;
                $tmp->giao_dich = self::TinhTongGiaoDichBanRa($user, $kh, $den_ngay, $tu_ngay);
                $tmp->cuoi_ky = 0;
            }

            $banra[] = $tmp;
        }

        $nhaCungCap = TaiKhoan::ofUser($user)->whereLoai(1)->get();
        foreach ($nhaCungCap as $ncc) {
            $tmp = new stdClass;
            $tmp->id = $ncc->id;
            $tmp->tai_khoan = $ncc->ky_hieu . ' - ' . $ncc->mo_ta;

            $tmp->dau_ky = self::TongThuTK($user, $ncc, $ngayTruoc) - self::TongChiTK($user, $ncc, $ngayTruoc);
            $tmp->thanh_toan = self::TongThuTK($user, $ncc, $den_ngay, $tu_ngay);
            $tmp->giao_dich = self::TongChiTK($user, $ncc, $den_ngay, $tu_ngay);
            $tmp->cuoi_ky = $tmp->dau_ky + $tmp->thanh_toan - $tmp->giao_dich;

            $muavao[] = $tmp;
        }
        // Tính NƠI KHÁC..............
        $idNhaCungCap = $nhaCungCap->pluck('id')->toArray();
        $gdKhacF1 = DatVe::ofUser($user)
            ->where('ngay_thang', '>=', $tu_ngay)->where('ngay_thang', '<=', $den_ngay)
            ->where(fn ($query) => $query->whereNull('id_tai_khoan_mua')->orWhereNotIn('id_tai_khoan_mua', $idNhaCungCap))
            ->sum('tong_tien');
        $muavao[] = (object)[
            'id' => -1,
            'tai_khoan' => "Nơi khác",
            'dau_ky' => 0,
            'thanh_toan' => 0,
            'cuoi_ky' => 0,
            'giao_dich' => round($gdKhacF1)
        ];
    }

    /**
     * Chi tiết tài khoản
     */
    public static function tinh_tai_khoan(Request $request, $format_price = true)
    {
        $user = $request->user();
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        $result = [];

        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $taiKhoan = TaiKhoan::ofUser($user)
            ->where('loai', '!=', '-1')
            ->where(function ($q) use ($den_ngay) {
                return $q->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay);
            })
            ->orderBy('loai')
            ->get();

        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod(new DateTime($tu_ngay), $interval, new DateTime($den_ngay));

        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));
        $sum = 0;
        // Thêm các tài khoản
        foreach ($taiKhoan as $tk) {
            $tmp = new stdClass;
            $tmp1 = new stdClass;
            $tmp->id = $tk->id;
            $tmp1->id = $tk->id . 'a';
            $tmp->tai_khoan = $tk->ky_hieu;

            $duCuoiKy = Report::TongThuTK($user, $tk, $den_ngay) - Report::TongChiTK($user, $tk, $den_ngay);
            $sum += $duCuoiKy;
            $dau_ky = Report::TongThuTK($user, $tk, $ngayTruoc) - Report::TongChiTK($user, $tk, $ngayTruoc);
            if ($format_price) {
                $tmp->dau_ky = Util::VNDFormater($dau_ky);      // Đầu kỳ
                $tmp1->tai_khoan = Util::VNDFormater($duCuoiKy);
            } else {
                $tmp->dau_ky = $dau_ky;      // Đầu kỳ
                $tmp1->tai_khoan = $duCuoiKy;
            }
            $tmp1->dau_ky = '';
            $tmp->thu_chi = "THU";
            $tmp1->thu_chi = "CHI";

            $coDuLieu = false;
            // Thêm các cột tương ứng với giá trị thu theo từng ngày
            foreach ($period as $dt) {
                $t = $dt->format('d/m/y');
                $i = $dt->format("Y-m-d");
                if ($format_price) {
                    $tmp->$t = Util::VNDFormater(Report::TongThuTK($user, $tk, $i, $i));
                    $tmp1->$t = Util::VNDFormater(Report::TongChiTK($user, $tk, $i, $i));
                } else {
                    $tmp->$t = Report::TongThuTK($user, $tk, $i, $i);
                    $tmp1->$t = Report::TongChiTK($user, $tk, $i, $i);
                }
                if ($tmp->$t != '0' || $tmp1->$t != '0')
                    $coDuLieu = true;
            }
            if ($tmp->dau_ky != '0' || $tmp1->tai_khoan != '0' || $coDuLieu) {
                $result[] = $tmp;
                $result[] = $tmp1;
            }
        }
        $duNo = self::TinhDuNo($user, $den_ngay);
        $sum -= $duNo;
        $tmp = new stdClass;
        $tmp->id = -2;
        $tmp->tai_khoan = "DƯ - NỢ";
        $tmp->dau_ky = $format_price ? Util::VNDFormater($duNo) : $duNo;
        $result[] = $tmp;

        // Thêm Lãi
        $lai = Report::TinhLai($user, $tu_ngay, $den_ngay);
        $tmp = new stdClass;
        $tmp->id = -1;
        $tmp->tai_khoan = "LÃI";
        $tmp->dau_ky = $format_price ? Util::VNDFormater($lai) : $lai;
        // Lãi từng ngày
        foreach ($period as $dt) {
            $t = $dt->format('d/m/y');
            $i = $dt->format("Y-m-d");
            $lai = Report::TinhLai($user, $i, $i);
            $tmp->$t = $format_price ? Util::VNDFormater($lai) : $lai;
        }
        $result[] = $tmp;

        // Thêm tồn kho
        if ($user->ban_hang) {
            $tonKho = Report::TinhTonKho($user, $den_ngay);
            $sum += $tonKho;
            $tmp = new stdClass;
            $tmp->id = -4;
            $tmp->tai_khoan = "TỒN KHO";
            $tmp->dau_ky = $format_price ? Util::VNDFormater($tonKho) : $tonKho;
            $result[] = $tmp;
        }

        // Thêm tổng cộng
        $tmp = new stdClass;
        $tmp->id = -3;
        $tmp->tai_khoan = "TỔNG CỘNG";
        $tmp->dau_ky = $format_price ? Util::VNDFormater($sum) : $sum;
        $result[] = $tmp;

        return $result;
    }
}

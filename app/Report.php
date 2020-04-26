<?php

namespace App;

use DateInterval;
use DatePeriod;
use DateTime;
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
    public  static function TinhLai($user, $date1, $date2)
    {
        $lai = 0;
        $q = DatVe::where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $lai += $q->sum('lai');

        $q = BanRa::where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $lai += $q->get()->sum('lai');

        $q = Tour::where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $lai += $q->get()->sum('lai');

        $q = Visa::where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $lai += $q->sum('lai');

        return (float) $lai;
    }

    // Tổng tồn kho cho Tổng hợp tài khoản
    public  static function TinhTonKho($user, $date2)
    {
        $tonKho = 0;
        $hh = HangHoa::all();
        foreach ($hh as $h) {
            $q = $h->mua_vaos()->where('ngay_thang', '<=', $date2);
            if (!empty($user))
                $q = $q->where('username', $user);
            $sl = $q->sum('so_luong');
            $q = $h->ban_ras()->where('ngay_thang', '<=', $date2);
            if (!empty($user))
                $q = $q->where('username', $user);
            $sl -= $q->sum('so_luong');
            $q = $h->ban_ras()->where('ngay_hoan_doi_xong', '<=', $date2);
            if (!empty($user))
                $q = $q->where('username', $user);
            $sl += $q->sum('so_luong');
            if ($sl > 0)
                $tonKho += $sl * $h->don_gia;
        }
        return (float) $tonKho;
    }

    // Tổng thu của tài khoản từ ngày đến ngày
    public  static function TongThuTK($taiKhoan, $user, $date2, $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $q = $taiKhoan->thu_chi_dens()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $sthu = $q->sum('so_tien');
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao <= $date2 && $taiKhoan->ngay_tao >= $date1)
            $sthu += $taiKhoan->so_du_ky_truoc;
        return (float) $sthu;
    }

    // Tổng chi của tài khoản từ ngày đến ngày
    public  static function TongChiTK($taiKhoan, $user, $date2, $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $q = $taiKhoan->thu_chi_dis()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $schi = $q->sum('so_tien');

        $q = $taiKhoan->dat_ves()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $schi += $q->sum('tong_tien');

        $q = $taiKhoan->ban_ra_hoa_dois()->where('ngay_thanh_toan_hoan_doi', '>=', $date1)->where('ngay_thanh_toan_hoan_doi', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $schi += $q->sum('thanh_tien_ban');

        $q = $taiKhoan->tour_chi_tiets()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $schi += $q->sum('thanh_tien');

        $q = $taiKhoan->visas()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
        $schi += $q->sum('gia_ban');

        $q = $taiKhoan->mua_vaos()->where('ngay_thang', '>=', $date1)->where('ngay_thang', '<=', $date2);
        if (!empty($user))
            $q = $q->where('username', $user);
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
        $thuVao = $taiKhoan->thu_chi_dens()->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy('thu_chi.ngay_thang');
        foreach ($thuVao as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = $tc->hang_muc . ' - ' . $tc->tai_khoan_di;
                $val->so_tien = $tc->so_tien;
                $data[$nt]->thu_vao[] = $val;
            }
        }

        // Các mục chi ra của tài khoản
        $q = $taiKhoan->thu_chi_dis()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy('thu_chi.ngay_thang');
        foreach ($q as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = $tc->hang_muc . ' - ' . $tc->tai_khoan_den;
                $val->so_tien = $tc->so_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->dat_ves()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy('dat_ve.ngay_thang');
        foreach ($q as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Đặt vé " . $tc->so_ve . ' - ' . $tc->ma_khach_hang;
                $val->so_tien = $tc->tong_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->ban_ra_hoa_dois()->whereBetween('ngay_thanh_toan_hoan_doi', [$tu_ngay, $den_ngay])->get()->groupBy('ban_ra.ngay_thanh_toan_hoan_doi');
        foreach ($q as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Hoàn đổi " . $tc->ma_hang . ' - ' . $tc->ma_khach_hang;
                $val->so_tien = $tc->thanh_tien_ban;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->tour_chi_tiets()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy('tour_chi_tiet.ngay_thang');
        foreach ($q as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Tour chi tiết " . $tc->ma_tour . ' - ' . $tc->ma_hang;
                $val->so_tien = $tc->thanh_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->visas()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy('visa.ngay_thang');
        foreach ($q as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Visa " . $tc->ma_visa;
                $val->so_tien = $tc->gia_mua;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->mua_vaos()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy('mua_vao.ngay_thang');
        foreach ($q as $ngay => $items) {
            $ngay = new DateTime($ngay);
            $nt = trim($ngay->format('d/m/Y'));
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Mua vào " . $tc->ma_hang;
                $val->so_tien = $tc->thanh_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        return $data;
    }
}

<?php

namespace App\Helpers;

use App\HangHoa;
use App\KhachHang;
use App\TaiKhoan;
use App\User;
use Illuminate\Database\Eloquent\Collection;

class BaoCaoHelper
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
    public  static function TinhTongThanhToanBanRa(KhachHang $khachHang, string $date2, string $date1 = '', User $user = null)
    {
        if ($khachHang->ngay_tao != null && ($date1 == '' || $date1 < $khachHang->ngay_tao))
            $date1 = $khachHang->ngay_tao;
        if ($khachHang->ngay_tao != null && $khachHang->ngay_tao > $date2)
            return 0;

        $date2 = date('Y-m-d', strtotime($date2 . ' +1 days'));
        if ($user == null)
            $sum = $khachHang->thu_chis->whereBetween('ngay_thang', [$date1, $date2])->sum('so_tien');
        else        // In web route: has no Auth::user => send $user from function parameter
            $sum = $khachHang->thu_chis->whereIn('username', $user->user_zone)->whereBetween('ngay_thang', [$date1, $date2])->sum('so_tien');

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
    public static function TinhTongGiaoDichBanRa(KhachHang $khachHang, string $date2, string $date1 = '', User $user = null)
    {
        if ($khachHang->ngay_tao != null && ($date1 == '' || $date1 < $khachHang->ngay_tao))
            $date1 = $khachHang->ngay_tao;
        if ($khachHang->ngay_tao != null && $khachHang->ngay_tao > $date2)
            return 0;

        $date2 = date('Y-m-d', strtotime($date2 . ' +1 days'));

        if ($user == null) {
            $sum = $khachHang->dat_ves->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien_thu_khach');
            $sum += $khachHang->ban_ras->whereBetween('ngay_thang', [$date1, $date2])->sum('thanh_tien_ban');
            $sum += $khachHang->visas->whereBetween('ngay_thang', [$date1, $date2])->sum('gia_ban');
            $sum += $khachHang->tours->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien_ban');
        } else {
            $sum = $khachHang->dat_ves->whereIn('username', $user->user_zone)->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien_thu_khach');
            $sum += $khachHang->ban_ras->whereIn('username', $user->user_zone)->whereBetween('ngay_thang', [$date1, $date2])->sum('thanh_tien_ban');
            $sum += $khachHang->visas->whereIn('username', $user->user_zone)->whereBetween('ngay_thang', [$date1, $date2])->sum('gia_ban');
            $sum += $khachHang->tours->whereIn('username', $user->user_zone)->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien_ban');
        }

        return (float) $sum;
    }

    /**
     * Tổng lãi cho tổng hợp tài khoản
     *
     * @param  mixed $datVe
     * @param  mixed $banRa
     * @param  mixed $tour
     * @param  mixed $visa
     * @param  mixed $date1
     * @param  mixed $date2
     * @return void
     */
    public static function TinhLai(Collection $datVe, Collection $banRa, Collection $tour, Collection $visa, string $date1, string $date2)
    {
        $lai = 0;
        // whereBetween ở DB và Collection khác nhau : a <= x < b
        $date2 = date('Y-m-d', strtotime($date2 . ' +1 days'));

        $lai += $datVe->whereBetween('ngay_thang', [$date1, $date2])->sum('lai');

        $lai += $banRa->whereBetween('ngay_thang', [$date1, $date2])->sum('lai');

        $lai += $tour->whereBetween('ngay_thang', [$date1, $date2])->sum('lai');

        $lai += $visa->whereBetween('ngay_thang', [$date1, $date2])->sum('lai');

        return (float) $lai;
    }

    /**
     * Tổng giá trị tồn kho đến ngày
     *
     * @param  mixed $date2 Đến ngày
     * @return void
     */
    public static function TinhTonKho(string $date2)
    {
        $tonKho = 0;
        $hang_hoa = HangHoa::whereHas('mua_vaos', fn ($query) => $query->where('ngay_thang', "<=", $date2))->with(['mua_vaos', 'ban_ras'])->get();
        foreach ($hang_hoa as $h) {
            $sl = $h->mua_vaos->where('ngay_thang', '<=', $date2)->sum('so_luong');
            $sl -= $h->ban_ras->where('ngay_thang', '<=', $date2)->sum('so_luong');
            $sl += $h->ban_ras->whereNotNull('ngay_hoan_doi_xong')->where('ngay_hoan_doi_xong', "<=", $date2)->sum('so_luong');

            if ($sl > 0)
                $tonKho += $sl * $h->don_gia;
        }
        return (float) $tonKho;
    }

    /**
     * Tổng thu của tài khoản từ ngày đến ngày
     *
     * @param  mixed $taiKhoan
     * @param  mixed $date2
     * @param  mixed $date1
     * @return void
     */
    public  static function TongThuTK(TaiKhoan $taiKhoan, string $date2, string $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $date2 = date('Y-m-d', strtotime($date2 . ' +1 days'));
        $q = $taiKhoan->thu_chi_dens->whereBetween('ngay_thang', [$date1, $date2]);
        $sthu = $q->sum('so_tien');
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao <= $date2 && $taiKhoan->ngay_tao >= $date1)
            $sthu += $taiKhoan->so_du_ky_truoc;
        return (float) $sthu;
    }

    /**
     * Tổng chi của tài khoản từ ngày đến ngày
     *
     * @param  mixed $taiKhoan Tài khoản
     * @param  mixed $tour_chi_tiets Các tour chi tiết của người dùng hiện tại
     * @param  mixed $mua_vaos Các mua vào của người dùng hiện tại
     * @param  mixed $date2 Ngày kết thúc
     * @param  mixed $date1 Ngày bắt đầu
     * @return void
     */
    public  static function TongChiTK(TaiKhoan $taiKhoan, Collection $tour_chi_tiets, Collection $mua_vaos, string $date2, string $date1 = '')
    {
        if ($taiKhoan->ngay_tao != null && ($date1 == '' || $date1 < $taiKhoan->ngay_tao))
            $date1 = $taiKhoan->ngay_tao;
        if ($taiKhoan->ngay_tao != null && $taiKhoan->ngay_tao > $date2)
            return 0;

        $date2 = date('Y-m-d', strtotime($date2 . ' +1 days'));
        $schi = $taiKhoan->thu_chi_dis->whereBetween('ngay_thang', [$date1, $date2])->sum('so_tien');

        $schi += $taiKhoan->dat_ves->whereBetween('ngay_thang', [$date1, $date2])->sum('tong_tien');

        $schi += $taiKhoan->ban_ra_hoa_dois->whereBetween('ngay_thanh_toan_hoan_doi', [$date1, $date2])->sum('thanh_tien_ban');

        $schi += $taiKhoan->visas->whereBetween('ngay_thang', [$date1, $date2])->sum('gia_ban');

        // Do Have Many Through ko dùng scope đc nên mới phải làm thủ công
        $idHH = $taiKhoan->hang_hoas->pluck('id');
        $schi += $tour_chi_tiets->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$date1, $date2])->sum('thanh_tien');

        $schi += $mua_vaos->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$date1, $date2])->sum('thanh_tien');

        return (float) $schi;
    }

    /**
     * TinhNoiDungXuatCongNo
     *
     * @param  mixed $dat_ves
     * @return void
     */
    public static function TinhNoiDungXuatCongNo(Collection $dat_ves)
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
     * Tính dư nợ của các Khách hàng
     * Công thức lấy từ bên Tổng hợp công nợ
     * @param  mixed $den_ngay
     * @return void
     */
    public static function TinhDuNo(string $den_ngay)
    {
        $sum = 0;
        $khachHang = KhachHang::whereRaw("UPPER(phan_loai) != 'THU CHI NGOÀI'")
            ->where(fn ($query) => $query->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay))
            ->with(['thu_chis', 'dat_ves', 'ban_ras', 'tours', 'visas'])
            ->get();

        foreach ($khachHang as $kh) {
            $sum += $kh->so_du_ky_truoc
                + self::TinhTongThanhToanBanRa($kh, $den_ngay)
                - self::TinhTongGiaoDichBanRa($kh, $den_ngay);
        }
        return $sum;
    }
}

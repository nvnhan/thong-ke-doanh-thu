<?php

namespace App\Http\Controllers;

use App\BanRa;
use App\DatVe;
use App\HangHoa;
use App\TaiKhoan;
use App\ThuChi;
use App\Tour;
use App\TourChiTiet;
use App\Visa;
use DateTime;
use Illuminate\Http\Request;
use stdClass;

class BaoCaoController extends BaseController
{
    //
    public function taikhoan(Request $request)
    {
        $tuNgay =  date('Y-m-01');
        $denNgay = date('Y-m-t');
        $user = $request->user;
        $result = [];

        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tuNgay = substr($request->bat_dau, 0, 10);
            $denNgay = substr($request->ket_thuc, 0, 10);
        }
        $taiKhoan = TaiKhoan::where('loai', '!=', '-1')->where(function ($q) use ($denNgay) {
            return $q->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $denNgay);
        })->orderBy('loai')->orderBy('ky_hieu')->get();

        $ngayTruoc = date('Y-m-d', strtotime($tuNgay . ' - 1 days'));
        $sum = 0;
        // Thêm các tài khoản
        foreach ($taiKhoan as $tk) {
            $tmp = new stdClass;
            $tmp->id = $tk->id;
            $tmp->tai_khoan = $tk->ky_hieu;

            $duCuoiKy = self::TongThu($tk, $user, $denNgay) - self::TongChi($tk, $user, $denNgay);
            $sum += $duCuoiKy;
            $tmp->dau_ky = self::VNDFormater(self::TongThu($tk, $user, $ngayTruoc) - self::TongChi($tk, $user, $ngayTruoc)) . ' | '       // Đầu kỳ
                . self::VNDFormater($duCuoiKy);
            $tmp->thu_chi = "THU | CHI";
            // Thêm các cột tương ứng với giá trị thu theo từng ngày
            for ($i = $tuNgay; $i <= $denNgay; $i++) {
                $t = (new DateTime($i))->format('d/m/y');
                $tmp->$t = self::VNDFormater(self::TongThu($tk, $user, $i, $i)) . ' | ' . self::VNDFormater(self::TongChi($tk, $user, $i, $i));
            }
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
        $lai = self::TinhLai($user, $tuNgay, $denNgay);
        $tmp = new stdClass;
        $tmp->id = -1;
        $tmp->tai_khoan = "LÃI";
        $tmp->dau_ky = self::VNDFormater($lai);
        $result[] = $tmp;
        // Thêm tồn kho
        $tonKho = self::TinhTonKho($user, $denNgay);
        $sum += $tonKho;
        $tmp = new stdClass;
        $tmp->id = -4;
        $tmp->tai_khoan = "TỒN KHO";
        $tmp->dau_ky = self::VNDFormater($tonKho);
        $result[] = $tmp;
        // Thêm tổng cộng
        $tmp = new stdClass;
        $tmp->id = -3;
        $tmp->tai_khoan = "TỔNG CỘNG";
        $tmp->dau_ky = self::VNDFormater($sum);
        $result[] = $tmp;

        return $this->sendResponse($result, "THTK retrieved successfully");
    }

    public function VNDFormater($number)
    {
        if ($number == 0)
            return 0;
        return number_format($number, 0, '', '.') . '₫';
    }

    public function TinhLai($user, $date1, $date2)
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

        return $lai;
    }

    public function TinhTonKho($user, $date2)
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
        return $tonKho;
    }

    // Tổng thu của tài khoản từ ngày đến ngày
    public function TongThu($taiKhoan, $user, $date2, $date1 = '')
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
    public function TongChi($taiKhoan, $user, $date2, $date1 = '')
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
}

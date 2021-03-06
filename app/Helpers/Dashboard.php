<?php

namespace App\Helpers;

use App\DatVe;
use App\MuaVao;
use App\Helpers\BaoCaoHelper;
use App\SanBay;
use App\TaiKhoan;
use App\Tour;
use App\TourChiTiet;
use DateInterval;
use DatePeriod;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class Dashboard
{
    public static function TinhSoDuCuoiKy(Request $request, &$sum)
    {
        $user = $request->user();       // Execute: select * from users
        $den_ngay = date('Y-m-t');
        if (!empty($request->ket_thuc))
            $den_ngay = substr($request->ket_thuc, 0, 10);

        $taiKhoan = TaiKhoan::ofUser($user)
            ->where('loai', '!=', '-1')
            ->where(function ($q) use ($den_ngay) {
                return $q->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay);
            })
            ->orderBy('loai')
            ->with(['thu_chi_dens', 'thu_chi_dis', 'dat_ves', 'ban_ra_hoa_dois', 'visas', 'hang_hoas'])
            ->get();

        $result = new stdClass;
        $result->hang_muc = [];
        $result->gia_tri = [];

        // Lấy các tour chi tiết và mua vào của user hiện tại
        $tours = Tour::pluck('id');
        $tour_chi_tiets = TourChiTiet::whereIn('id_tour', $tours)->get();
        $mua_vaos = MuaVao::all();

        // Thêm các tài khoản
        $sum = 0;
        foreach ($taiKhoan as $tk) {
            $duCuoiKy = BaoCaoHelper::TongThuTK($tk, $den_ngay) - BaoCaoHelper::TongChiTK($tk, $tour_chi_tiets, $mua_vaos, $den_ngay);
            $sum += $duCuoiKy;
            if ($duCuoiKy != 0) {
                $result->hang_muc[] = $tk->ky_hieu;
                $result->gia_tri[] = round($duCuoiKy / 1000);
            }
        }
        // Thêm dư Nợ
        $duNo = BaoCaoHelper::TinhDuNo($den_ngay);
        $sum -= $duNo;
        $result->hang_muc[] = "Dư - Nợ";
        $result->gia_tri[] = -round($duNo / 1000);

        // Thêm tồn kho
        if ($user->ban_hang) {
            $tonKho = BaoCaoHelper::TinhTonKho($den_ngay);
            $sum += $tonKho;
            $result->hang_muc[] = "Tồn kho";
            $result->gia_tri[] = round($tonKho / 1000);
        }
        return $result;
    }

    public static function DatVeTrongThang(Request $request)
    {
        $bat_dau = date('Y-m-01');
        $ket_thuc = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $bat_dau = substr($request->bat_dau, 0, 10);
            $ket_thuc = substr($request->ket_thuc, 0, 10);
        }
        $dv = DatVe::whereBetween('ngay_thang', [$bat_dau, $ket_thuc])->groupBy('ngay_thang')
            ->select('ngay_thang', DB::raw('count(*) as dat_ve, sum(tong_tien_thu_khach) as thu_khach, sum(lai) as lai'))->get();
        $tt = DatVe::whereBetween('ngay_thanh_toan', [$bat_dau, $ket_thuc])->groupBy('ngay_thanh_toan')
            ->select(DB::raw('ngay_thanh_toan as ngay_thang'), DB::raw('count(*) as thanh_toan'))->get();

        $data = [];

        $begin = new DateTime($bat_dau);
        $end = new DateTime($ket_thuc);
        $end->modify('+1 day');
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod($begin, $interval, $end);
        foreach ($period as $dt) {
            $val = new stdClass;
            $val->dat_ve = 0;
            $val->thanh_toan = 0;
            $val->thu_khach = 0;
            $val->lai = 0;
            $tmp = $dt->format('d/m');
            $data[$tmp] = $val;
        }
        // Fill Datve
        foreach ($dv as $item) {
            $ngay = new DateTime($item->ngay_thang);
            $nt = trim($ngay->format('d/m'));
            $data[$nt]->dat_ve = $item->dat_ve;
            $data[$nt]->thu_khach = $item->thu_khach;
            $data[$nt]->lai = $item->lai;
        }
        // Fill ThanhToan
        foreach ($tt as $item) {
            $ngay = new DateTime($item->ngay_thang);
            $nt = trim($ngay->format('d/m'));
            $data[$nt]->thanh_toan = $item->thanh_toan;
        }
        $result = new stdClass;
        $result->ngay_thangs = [];
        $result->dat_ves = [];
        $result->thu_khachs = [];
        $result->lais = [];
        $result->thanh_toans = [];
        foreach ($data as $key => $value) {
            $result->ngay_thangs[] = $key;
            $result->dat_ves[] = $value->dat_ve;
            $result->thu_khachs[] = round($value->thu_khach / 1000);
            $result->lais[] = round($value->lai / 1000);
            $result->thanh_toans[] = $value->thanh_toan;
        }
        return $result;
    }

    public static function ThongTinVe(Request $request)
    {
        $bat_dau = date('Y-m-01');
        $ket_thuc = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $bat_dau = substr($request->bat_dau, 0, 10);
            $ket_thuc = substr($request->ket_thuc, 0, 10);
        }
        $objs = DatVe::whereBetween('ngay_thang', [$bat_dau, $ket_thuc])->get();

        $sbqt = SanBay::where('phan_loai', '!=', 'Việt Nam')->pluck('ma_san_bay')->toArray();
        $quocte = clone $objs;
        $quocte = $quocte->filter(function ($item) use ($sbqt) {
            return in_array($item->sb_di, $sbqt) || in_array($item->sb_di1, $sbqt) || in_array($item->sb_ve, $sbqt) || in_array($item->sb_ve1, $sbqt);
        });

        $result = new stdClass;
        $result->hang_muc = [];
        $result->quoc_noi = [];
        $result->quoc_te = [];

        $sum = $objs->count();
        $qt = $quocte->count();
        $result->hang_muc[] = 'Tổng số vé';
        $result->quoc_te[] = $qt;
        $result->quoc_noi[] = $sum - $qt;

        $objs1 = clone $objs;
        $quocte1 = clone $quocte;
        $sumdaxuat = $objs1->where('chua_xuat_ve', false)->count();
        $qtdaxuat = $quocte1->where('chua_xuat_ve', false)->count();
        $result->hang_muc[] = 'Đã xuất vé';
        $result->quoc_te[] = $qtdaxuat;
        $result->quoc_noi[] = $sumdaxuat - $qtdaxuat;
        $result->hang_muc[] = 'Chưa xuất vé';
        $result->quoc_te[] = $qt - $qtdaxuat;
        $result->quoc_noi[] = $sum - $qt - $sumdaxuat + $qtdaxuat;

        $den_ngay = date('Y-m-d H:i:s'); // Chưa bay, nợ vé tính đến hôm nay
        $objs1 = clone $objs;
        $quocte1 = clone $quocte;
        $sumchuabay = $objs1->filter(function ($item) use ($den_ngay) {
            return $item->ngay_gio_di > $den_ngay || $item->ngay_gio_ve > $den_ngay;
        })->count();
        $qtchuabay = $quocte1->filter(function ($item) use ($den_ngay) {
            return $item->ngay_gio_di > $den_ngay || $item->ngay_gio_ve > $den_ngay;
        })->count();
        $result->hang_muc[] = 'Số vé chưa bay';
        $result->quoc_te[] = $qtchuabay;
        $result->quoc_noi[] = $sumchuabay - $qtchuabay;

        $sumnove = $objs->filter(function ($item) use ($den_ngay) {
            return $item->ngay_thanh_toan == null || $item->ngay_thanh_toan > $den_ngay;
        })->count();
        $qtnove = $quocte->filter(function ($item) use ($den_ngay) {
            return $item->ngay_thanh_toan == null || $item->ngay_thanh_toan > $den_ngay;
        })->count();
        $result->hang_muc[] = 'Số vé còn nợ';
        $result->quoc_te[] = $qtnove;
        $result->quoc_noi[] = $sumnove - $qtnove;

        return $result;
    }

    public static function DoanhSoTrongNam()
    {
        $dv = DatVe::whereYear('ngay_thang', date('Y'))
            ->select(DB::raw('MONTH(ngay_thang) as thang, sum(tong_tien_thu_khach) as thu_khach, sum(lai) as lai'))
            ->groupBy('thang')
            ->get();

        $result = new stdClass;
        $result->thangs = [];
        $result->thu_khachs = [];
        $result->lais = [];
        for ($i = 1; $i <= 12; $i++) {
            $result->thangs[] = "Tháng $i";
            $result->thu_khachs[] = 0;
            $result->lais[] = 0;
        }

        foreach ($dv as $item) {
            $result->thu_khachs[$item->thang - 1] = round($item->thu_khach / 1000000, 2);
            $result->lais[$item->thang - 1] = round($item->lai / 1000000, 2);
        }
        return $result;
    }
}

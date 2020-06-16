<?php

namespace App\Http\Controllers;

use App\DatVe;
use App\SanBay;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class HomeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datve = self::DatVeTrongThang($request);
        $ttve = self::ThongTinVe($request);
        $result = [
            'datve' => $datve,
            'thongtinve' => $ttve
        ];
        return $this->sendResponse((object) $result, "Home retrieved successfully");
    }

    public static function DatVeTrongThang(Request $request)
    {
        $dv = DatVe::ofUser($request->user())->whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')])->groupBy('ngay_thang')
            ->select('ngay_thang', DB::raw('count(*) as dat_ve'))->get();
        $tt = DatVe::ofUser($request->user())->whereBetween('ngay_thanh_toan', [date('Y-m-01'), date('Y-m-t')])->groupBy('ngay_thanh_toan')
            ->select(DB::raw('ngay_thanh_toan as ngay_thang'), DB::raw('count(*) as thanh_toan'))->get();

        $data = [];
        $m = date('m');
        for ($i = 1; $i <= (date('t')); $i++) {
            $val = new stdClass;
            $val->dat_ve = 0;
            $val->thanh_toan = 0;
            $tmp = sprintf("%02d", $i) . '/' . $m;
            $data[$tmp] = $val;
        }
        foreach ($dv as $item) {
            $ngay = new DateTime($item->ngay_thang);
            $nt = trim($ngay->format('d/m'));
            $data[$nt]->dat_ve = $item->dat_ve;
        }
        foreach ($tt as $item) {
            $ngay = new DateTime($item->ngay_thang);
            $nt = trim($ngay->format('d/m'));
            $data[$nt]->thanh_toan = $item->thanh_toan;
        }
        $result = new stdClass;
        $result->ngay_thangs = [];
        $result->dat_ves = [];
        $result->thanh_toans = [];
        foreach ($data as $key => $value) {
            $result->ngay_thangs[] = $key;
            $result->dat_ves[] = $value->dat_ve;
            $result->thanh_toans[] = $value->thanh_toan;
        }
        return $result;
    }

    public static function ThongTinVe($request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = DatVe::ofUser($request->user())->whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else
            $objs = DatVe::ofUser($request->user())->whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        // if (!$request->user()->admin)
        //     $objs = $objs->where('username', $request->user()->username);
        $sbqt = SanBay::where('phan_loai', '!=', 'Việt Nam')->pluck('ma_san_bay');
        $quocte = clone $objs;
        $quocte = $quocte->where(function ($query) use ($sbqt) {
            return $query->whereIn('sb_di', $sbqt)
                ->orWhereIn('sb_di1', $sbqt)
                ->orWhereIn('sb_ve', $sbqt)
                ->orWhereIn('sb_ve1', $sbqt);
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

        $den_ngay = date('Y-m-d H:i:s');
        $objs1 = clone $objs;
        $quocte1 = clone $quocte;
        $sumchuabay = $objs1->where(function ($query) use ($den_ngay) {
            return $query->where('ngay_gio_di', ">", $den_ngay)
                ->orWhere('ngay_gio_ve', '>', $den_ngay);
        })->count();
        $qtchuabay = $quocte1->where(function ($query) use ($den_ngay) {
            return $query->where('ngay_gio_di', ">", $den_ngay)
                ->orWhere('ngay_gio_ve', '>', $den_ngay);
        })->count();
        $result->hang_muc[] = 'Số vé chưa bay';
        $result->quoc_te[] = $qtchuabay;
        $result->quoc_noi[] = $sumchuabay - $qtchuabay;

        $sumnove = $objs->where(function ($query) use ($den_ngay) {
            return $query->whereNull('ngay_thanh_toan')
                ->orWhere('ngay_thanh_toan', '>', $den_ngay);
        })->count();
        $qtnove = $quocte->where(function ($query) use ($den_ngay) {
            return $query->whereNull('ngay_thanh_toan')
                ->orWhere('ngay_thanh_toan', '>', $den_ngay);
        })->count();
        $result->hang_muc[] = 'Số vé còn nợ';
        $result->quoc_te[] = $qtnove;
        $result->quoc_noi[] = $sumnove - $qtnove;

        return $result;
    }
}

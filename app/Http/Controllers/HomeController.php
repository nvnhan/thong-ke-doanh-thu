<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\Dashboard;
use App\User;
use App\DatVe;
use App\SanBay;

class HomeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datve = Dashboard::DatVeTrongThang($request);
        $ds_nam = Dashboard::DoanhSoTrongNam();
        $ttve = Dashboard::ThongTinVe($request);
        $sum = 0;
        $sodu = Dashboard::TinhSoDuCuoiKy($request, $sum);
        $result = [
            'datve' => $datve,
            'ds_nam' => $ds_nam,
            'thongtinve' => $ttve,
            'sodu' => $sodu,
            'tong' => number_format($sum, 0)
        ];
        return $this->sendResponse((object) $result, "Home retrieved successfully");
    }

    public function matve(Request $request, $u, $ids)
    {
        $user = User::find($u);
        $objs = explode(',', $ids);
        if (\is_array($objs)) {
            $datves = DatVe::whereIn('id', $objs)->get();
            $dv = $datves->where('hang_bay', $datves[0]->hang_bay);
            if ($dv[0]->hang_bay === 'VN' || $dv[0]->hang_bay === 'BB')
                $dv = $dv->where('ma_giu_cho', $dv[0]->ma_giu_cho);
            else
                $dv = $dv->where('so_ve', $dv[0]->so_ve);

            // return $dv->sum('tong_tien_thu_khach');
            $datve = $dv[0];
            $sb_di = SanBay::where('ma_san_bay', $datve->sb_di)->first()->ten_san_bay ?? "";
            $sb_di1 = SanBay::where('ma_san_bay', $datve->sb_di1)->first()->ten_san_bay ?? "";
            $sb_ve = SanBay::where('ma_san_bay', $datve->sb_ve)->first()->ten_san_bay ?? "";
            $sb_ve1 = SanBay::where('ma_san_bay', $datve->sb_ve1)->first()->ten_san_bay ?? "";
            $datve = $datve->toArray();

            return view('mat-ve.index', compact('user', 'datve', 'sb_di', 'sb_di1', 'sb_ve', 'sb_ve1', 'dv'));
        }
    }
}

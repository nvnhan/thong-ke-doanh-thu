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
        $ttve = Dashboard::ThongTinVe($request);
        $sum = 0;
        $sodu = Dashboard::TinhSoDuCuoiKy($request, $sum);
        $result = [
            'datve' => $datve,
            'thongtinve' => $ttve,
            'sodu' => $sodu,
            'tong' => number_format($sum, 0)
        ];
        return $this->sendResponse((object) $result, "Home retrieved successfully");
    }

    public function matve(Request $request, $u, $id)
    {
        $user = User::find($u);
        $datve = DatVe::find($id);
        if (!$user || !$datve || $datve->username != $user->username)
            return 'Errors';
        $sb_di = SanBay::where('ma_san_bay', $datve->sb_di)->first()->ten_san_bay ?? "";
        $sb_di1 = SanBay::where('ma_san_bay', $datve->sb_di1)->first()->ten_san_bay ?? "";
        $sb_ve = SanBay::where('ma_san_bay', $datve->sb_ve)->first()->ten_san_bay ?? "";
        $sb_ve1 = SanBay::where('ma_san_bay', $datve->sb_ve1)->first()->ten_san_bay ?? "";
        $datve = $datve->toArray();
        return view('mat-ve.index', compact('user', 'datve', 'sb_di', 'sb_di1', 'sb_ve', 'sb_ve1'));
    }
}

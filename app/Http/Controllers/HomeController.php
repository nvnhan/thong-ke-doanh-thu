<?php

namespace App\Http\Controllers;

use App\DatVe;
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
        $dv = DatVe::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')])
            ->select('ngay_thang', DB::raw('count(*) as dat_ve'))->groupBy('ngay_thang')->get();
        $tt = DatVe::whereBetween('ngay_thanh_toan', [date('Y-m-01'), date('Y-m-t')])
            ->select(DB::raw('ngay_thanh_toan as ngay_thang'), DB::raw('count(*) as thanh_toan'))->groupBy('ngay_thanh_toan')->get();

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
        return $this->sendResponse($result, "DatVe, ThanhToan retrieved successfully");
    }
}

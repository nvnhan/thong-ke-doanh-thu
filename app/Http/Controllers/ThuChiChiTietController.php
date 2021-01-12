<?php

namespace App\Http\Controllers;

use App\BanRa;
use App\DatVe;
use App\MuaVao;
use App\ThuChi;
use App\ThuChiChiTiet;
use App\Tour;
use App\TourChiTiet;
use App\Visa;
use DateTime;
use Illuminate\Http\Request;
use stdClass;

class ThuChiChiTietController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->tc)) {
            $objs = ThuChiChiTiet::where('id_thu_chi', $request->tc)->get();
            return $this->sendResponse($objs, "ThuChiChiTiet retrieved successfully");
        } else return $this->sendError("Error", []);
    }

    public function doituong(Request $request)
    {
        $thuChi =  ThuChi::find($request->tc);
        if ($thuChi == null) return $this->sendError("Error", []);
        $result = [];
        // Có khách hàng
        $khachHang = $thuChi->khach_hang;
        if ($khachHang != null) {
            $banRas = $khachHang->ban_ras()->whereNull('ngay_thanh_toan')->get();
            foreach ($banRas as $br) {
                $tmp = new stdClass;
                $tmp->id = "br_" . $br->id;
                $tmp->phan_loai = "Bán ra";
                $tmp->so_tien = $br->chua_thanh_toan;
                $tmp->ngay_thang = (new DateTime($br->ngay_thang))->format('d/m/Y');
                $tmp->noi_dung = "$br->ma_hang - $br->ten_hang";
                $result[] = $tmp;
            }
            $tours = $khachHang->tours()->whereNull('ngay_thanh_toan')->get();
            foreach ($tours as $t) {
                $tmp = new stdClass;
                $tmp->id = "to_" . $t->id;
                $tmp->phan_loai = "Tour";
                $tmp->so_tien = $t->chua_thanh_toan;
                $tmp->ngay_thang = (new DateTime($t->ngay_thang))->format('d/m/Y');
                $tmp->noi_dung = "$t->ma_tour - $t->ten_tour";
                $result[] = $tmp;
            }
            $datVes = $khachHang->dat_ves()->whereNull('ngay_thanh_toan')->get();
            foreach ($datVes as $t) {
                $tmp = new stdClass;
                $tmp->id = "dv_" . $t->id;
                $tmp->phan_loai = "Đặt vé";
                $tmp->so_tien = $t->chua_thanh_toan;
                $tmp->ngay_thang = (new DateTime($t->ngay_thang))->format('d/m/Y');
                $tmp->noi_dung =  "Mã $t->ma_giu_cho, $t->so_ve, $t->ten_khach";
                $result[] = $tmp;
            }
            $visas = $khachHang->visas()->whereNull('ngay_thanh_toan')->get();
            foreach ($visas as $t) {
                $tmp = new stdClass;
                $tmp->id = "vs_" . $t->id;
                $tmp->phan_loai = "Visa";
                $tmp->so_tien = $t->chua_thanh_toan;
                $tmp->ngay_thang = (new DateTime($t->ngay_thang))->format('d/m/Y');
                $tmp->noi_dung =  "$t->ma_visa";
                $result[] = $tmp;
            }
        } else {
            $tkDen = $thuChi->tai_khoan_dens;
            $muaVaos = $tkDen->mua_vaos()->whereNull('ngay_thanh_toan')->get();
            foreach ($muaVaos as $t) {
                $tmp = new stdClass;
                $tmp->id = "mv_" . $t->id;
                $tmp->phan_loai = "Mua vào";
                $tmp->so_tien = $t->chua_thanh_toan;
                $tmp->ngay_thang = (new DateTime($t->ngay_thang))->format('d/m/Y');
                $tmp->noi_dung = "$t->ma_hang - $t->ten_hang";
                $result[] = $tmp;
            }
            $tct = $tkDen->tour_chi_tiets()->whereNull('ngay_thanh_toan')->get();
            foreach ($tct as $t) {
                $tmp = new stdClass;
                $tmp->id = "tct_" . $t->id;
                $tmp->phan_loai = "Tour chi tiết";
                $tmp->so_tien = $t->chua_thanh_toan;
                $tmp->ngay_thang = (new DateTime($t->ngay_thang))->format('d/m/Y');
                $tmp->noi_dung = $t->tour->ma_tour . ", Hàng: $t->ma_hang - $t->ten_hang";
                $result[] = $tmp;
            }
        }
        return $this->sendResponse($result, "DoiTuong retrieved successfully");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $objs = explode('|', $request['doi_tuong']);
        $result = [];

        $thu_chi = ThuChi::find($request->id_thu_chi);
        $tien = $thu_chi->con_du;
        foreach ($objs as $obj) {
            $tmp = new ThuChiChiTiet;
            $tmp->id_thu_chi = $request->id_thu_chi;

            $dt = explode("_", $obj);
            switch ($dt[0]) {
                case 'br':
                    $tmp->loai_doi_tuong = "BR";
                    $tmp->id_ban_ra = (int) $dt[1];
                    $tmp1 = BanRa::find($dt[1]);
                    break;
                case 'to':
                    $tmp->loai_doi_tuong = "Tour";
                    $tmp->id_tour = (int) $dt[1];
                    $tmp1 = Tour::find($dt[1]);
                    break;
                case 'dv':
                    $tmp->loai_doi_tuong = "ĐV";
                    $tmp->id_dat_ve = (int) $dt[1];
                    $tmp1 = DatVe::find($dt[1]);
                    break;
                case 'vs':
                    $tmp->loai_doi_tuong = "Visa";
                    $tmp->id_visa = (int) $dt[1];
                    $tmp1 = Visa::find($dt[1]);
                    break;
                case 'mv':
                    $tmp->loai_doi_tuong = "MV";
                    $tmp->id_mua_vao = (int) $dt[1];
                    $tmp1 = MuaVao::find($dt[1]);
                    break;
                case 'tct':
                    $tmp->loai_doi_tuong = "TCT";
                    $tmp->id_tour_chi_tiet = (int) $dt[1];
                    $tmp1 = TourChiTiet::find($dt[1]);
                    break;
            }
            $t = $tmp1->chua_thanh_toan;
            if ($tien < $t)
                $t = $tien;
            $tmp->so_tien = $t;
            $tmp->save();
            $result[] = $tmp;

            $tien -= $t;
            if ($tien <= 0) break;
        }
        return $this->sendResponse($result, "Thêm mới thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ThuChiChiTiet  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ThuChiChiTiet::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công thu chi chi tiết");
    }

    /**
     * Remove multiple resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deletes(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $cnt = count($objs);
            ThuChiChiTiet::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

<?php

namespace App\Http\Controllers;

use App\ThuChi;
use App\ThuChiChiTiet;
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
        $khachHang = $thuChi->khach_hang()->first();
        if ($khachHang != null) {
            $banRas = $khachHang->ban_ras()->whereNull('ngay_thanh_toan')->get();
            foreach ($banRas as $br) {
                $tmp = new stdClass;
                $tmp->id = "br_" . $br->id;
                $tmp->phan_loai = "Bán ra";
                $tmp->so_tien = $br->chua_thanh_toan;
                $da = new DateTime($br->ngay_thang);
                $tmp->noi_dung = "Ngày " . $da->format('d/m/Y') . ", hàng hóa: $br->ma_hang - $br->ten_hang, còn lại: " . number_format($br->chua_thanh_toan);
                $result[] = $tmp;
            }
            $tours = $khachHang->tours()->whereNull('ngay_thanh_toan')->get();
            foreach ($tours as $t) {
                $tmp = new stdClass;
                $tmp->id = "to_" . $t->id;
                $tmp->phan_loai = "Tour";
                $tmp->so_tien = $t->chua_thanh_toan;
                $da = new DateTime($t->ngay_thang);
                $tmp->noi_dung = "Ngày " . $da->format('d/m/Y') . ", tour: $t->ma_tour - $t->ten_tour, còn lại: " . number_format($t->chua_thanh_toan);
                $result[] = $tmp;
            }
            $datVes = $khachHang->dat_ves()->whereNull('ngay_thanh_toan')->get();
            foreach ($datVes as $t) {
                $tmp = new stdClass;
                $tmp->id = "dv_" . $t->id;
                $tmp->phan_loai = "Đặt vé";
                $tmp->so_tien = $t->chua_thanh_toan;
                $da = new DateTime($t->ngay_thang);
                $tmp->noi_dung = "Ngày " . $da->format('d/m/Y') . ", đặt vé: $t->ma_giu_cho $t->so_ve, tên khách: $t->ten_khach, còn lại: " . number_format($t->chua_thanh_toan);
                $result[] = $tmp;
            }
            $visas = $khachHang->visas()->whereNull('ngay_thanh_toan')->get();
            foreach ($visas as $t) {
                $tmp = new stdClass;
                $tmp->id = "vs_" . $t->id;
                $tmp->phan_loai = "Visa";
                $tmp->so_tien = $t->chua_thanh_toan;
                $da = new DateTime($t->ngay_thang);
                $tmp->noi_dung = "Ngày " . $da->format('d/m/Y') . ", visa: $t->ma_visa, còn lại: " . number_format($t->chua_thanh_toan);
                $result[] = $tmp;
            }
        } else {
            $tkDen = $thuChi->tai_khoan_den()->first();
            $muaVaos = $tkDen->mua_vaos()->whereNull('ngay_thanh_toan')->get();
            foreach ($muaVaos as $t) {
                $tmp = new stdClass;
                $tmp->id = "mv_" . $t->id;
                $tmp->phan_loai = "Mua vào";
                $tmp->so_tien = $t->chua_thanh_toan;
                $da = new DateTime($t->ngay_thang);
                $tmp->noi_dung = "Ngày " . $da->format('d/m/Y') . ", hàng hóa: $t->ma_hang - $t->ten_hang, còn lại: " . number_format($t->chua_thanh_toan);
                $result[] = $tmp;
            }
            $tct = $tkDen->tour_chi_tiets()->whereNull('ngay_thanh_toan')->get();
            foreach ($tct as $t) {
                $tmp = new stdClass;
                $tmp->id = "tct_" . $t->id;
                $tmp->phan_loai = "Tour chi tiết";
                $tmp->so_tien = $t->chua_thanh_toan;
                $da = new DateTime($t->ngay_thang);
                $tmp->noi_dung = "Ngày " . $da->format('d/m/Y') . ", tour: " . $t->tour()->first()->ma_tour . ", hàng hóa: $t->ma_hang - $t->ten_hang, còn lại: " . number_format($t->chua_thanh_toan);
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
        $obj = new ThuChiChiTiet;
        $obj->id_thu_chi = $request->id_thu_chi;
        $obj->so_tien = $request->so_tien;
        
        $dt = explode("_", $request->doi_tuong);
        switch ($dt[0]) {
            case 'br':
                $obj->loai_doi_tuong = "BR";
                $obj->id_ban_ra = (int) $dt[1];
                break;
            case 'to':
                $obj->loai_doi_tuong = "Tour";
                $obj->id_tour = (int) $dt[1];
                break;
            case 'dv':
                $obj->loai_doi_tuong = "ĐV";
                $obj->id_dat_ve = (int) $dt[1];
                break;
            case 'vs':
                $obj->loai_doi_tuong = "Visa";
                $obj->id_visa = (int) $dt[1];
                break;
            case 'mv':
                $obj->loai_doi_tuong = "MV";
                $obj->id_mua_vao = (int) $dt[1];
                break;
            case 'tct':
                $obj->loai_doi_tuong = "TCT";
                $obj->id_tour_chi_tiet = (int) $dt[1];
                break;
        }
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
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

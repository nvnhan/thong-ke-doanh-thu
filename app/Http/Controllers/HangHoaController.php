<?php

namespace App\Http\Controllers;

use App\HangHoa;
use App\Scopes\OfUserScope;
use Illuminate\Http\Request;

class HangHoaController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $objs = HangHoa::query();
        if (!empty($request->ncc) && $request->ncc != -1)
            $objs = $objs->where('id_tai_khoan', $request->ncc);
        return $this->sendResponse($objs->with('tai_khoan')->get(), "HangHoa retrieved successfully");
    }

    public function all(Request $request)
    {
        $objs = HangHoa::withoutGlobalScope(OfUserScope::class)->allowUser($request->user())->get();
        foreach ($objs as $value)
            $value->setHidden(['id_tai_khoan', 'ten_hang', 'don_vi', 'ghi_chu', 'username', 'created_at', 'updated_at']);

        return $this->sendResponse($objs, "HangHoa retrieved successfully");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = HangHoa::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HangHoa  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = HangHoa::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HangHoa  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HangHoa::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công khách hàng");
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
            HangHoa::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }

    public function tonkho(Request $request)
    {
        $date = date('Y-m-d 0:0:0');
        if (!empty($request->den_ngay))
            $date = $request->den_ngay;

        $hang_hoa = HangHoa::whereHas('mua_vaos', function ($query) use ($date) {
            $query->where('ngay_thang', "<=", $date);
        })->with(['tai_khoan', 'mua_vaos', 'ban_ras'])->get();
        foreach ($hang_hoa as $value) {
            $mv = $value->mua_vaos->where('ngay_thang', "<=", $date)->sum('so_luong');
            $br = $value->ban_ras->where('ngay_thang', "<=", $date)->sum('so_luong');
            $hd = $value->ban_ras->whereNotNull('ngay_hoan_doi_xong')->where('ngay_hoan_doi_xong', "<=", $date)->sum('so_luong');
            $value->so_luong_ton_kho = $mv - $br + $hd;
            $value->setAppends(['so_luong_ton_kho', 'thanh_tien_ton_kho', 'nha_cung_cap']);
        }

        return $this->sendResponse($hang_hoa, "HangHoa retrieved successfully");
    }

    public function tonghop(Request $request)
    {
        $bat_dau = date('Y-m-1');
        $ket_thuc = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $bat_dau = $request->bat_dau;
            $ket_thuc = $request->ket_thuc;
        }

        $hang_hoa = HangHoa::where(function ($q) use ($bat_dau, $ket_thuc) {
            return $q->whereHas('mua_vaos', function ($query) use ($bat_dau, $ket_thuc) {
                return $query->whereBetween('ngay_thang', [$bat_dau, $ket_thuc]);
            })->orWhereHas('ban_ras', function ($query) use ($bat_dau, $ket_thuc) {
                return $query->whereBetween('ngay_thang', [$bat_dau, $ket_thuc]);
            })->orWhereHas('ban_ras', function ($query) use ($bat_dau, $ket_thuc) {
                return $query->whereBetween('ngay_hoan_doi_xong', [$bat_dau, $ket_thuc]);
            });
        })->with(['tai_khoan', 'mua_vaos', 'ban_ras'])->get();

        foreach ($hang_hoa as $value) {
            // Mua vào trong khoảng
            $mv = $value->mua_vaos->whereBetween('ngay_thang', [$bat_dau, $ket_thuc]);
            $value->so_luong_mua_vao = $mv->sum('so_luong');
            $value->thanh_tien_mua_vao = $mv->sum('thanh_tien');

            // bán ra trong khoảng
            $br = $value->ban_ras->whereBetween('ngay_thang', [$bat_dau, $ket_thuc]);
            $value->so_luong_ban_ra = $br->sum('so_luong');
            $value->thanh_tien_ban_ra = $br->sum('thanh_tien_ban');

            // Hoàn đổi trong khoảng
            $br = $value->ban_ras->whereBetween('ngay_hoan_doi_xong', [$bat_dau, $ket_thuc]);
            $value->so_luong_hoan_doi = $br->sum('so_luong');
            $value->thanh_tien_hoan_doi = $br->sum('thanh_tien_ban');

            // Tồn kho đến cuối kỳ
            $mv = $value->mua_vaos->where('ngay_thang', "<=", $ket_thuc)->sum('so_luong');
            $br = $value->ban_ras->where('ngay_thang', "<=", $ket_thuc)->sum('so_luong');
            $hd = $value->ban_ras->whereNotNull('ngay_hoan_doi_xong')->where('ngay_hoan_doi_xong', "<=", $ket_thuc)->sum('so_luong');
            $value->so_luong_ton_kho = $mv - $br + $hd;

            $value->setAppends([
                'so_luong_mua_vao', 'thanh_tien_mua_vao',
                'so_luong_ban_ra', 'thanh_tien_ban_ra',
                'so_luong_hoan_doi', 'thanh_tien_hoan_doi',
                'so_luong_ton_kho', 'thanh_tien_ton_kho',
                'nha_cung_cap'
            ]);
        }

        return $this->sendResponse($hang_hoa, "HangHoa retrieved successfully");
    }
}

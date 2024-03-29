<?php

namespace App\Http\Controllers;

use App\BanRa;
use Illuminate\Http\Request;

class HoanDoiController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = BanRa::whereBetween('ngay_hoan_doi', [$request->bat_dau, $request->ket_thuc]);
        else
            $objs = BanRa::whereBetween('ngay_hoan_doi', [date('Y-m-01'), date('Y-m-t')]);

        return $this->sendResponse($objs->with(['hang_hoa', 'khach_hang', 'hang_hoa.tai_khoan', 'tai_khoan_doi_tra', 'thu_chi_chi_tiets'])->get(), "HoanDoi retrieved successfully");
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
        $obj = new BanRa();
        $obj->fill($data);
        $obj->username = $request->user()->username;
        $obj->ngay_thang = $obj->ngay_hoan_doi;
        $obj->don_gia_ban = 0;
        if (empty($request->so_hoa_don)) {
            $hoa_don = BanRa::max('so_hoa_don') ?? 0;
            $obj->so_hoa_don = $hoa_don + 1;
        }
        $obj->save();
        $obj->refresh();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BanRa  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = BanRa::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BanRa  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        BanRa::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công hoàn đổi");
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
            BanRa::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

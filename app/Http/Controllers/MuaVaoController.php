<?php

namespace App\Http\Controllers;

use App\MuaVao;
use Illuminate\Http\Request;

class MuaVaoController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = MuaVao::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else
            $objs = MuaVao::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        return $this->sendResponse($objs->with(['hang_hoa', 'hang_hoa.tai_khoan', 'thu_chi_chi_tiets'])->get(), "MuaVao retrieved successfully");
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
        $obj = MuaVao::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        $obj->refresh();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MuaVao  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = MuaVao::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MuaVao  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MuaVao::find($id)->delete();
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
            MuaVao::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

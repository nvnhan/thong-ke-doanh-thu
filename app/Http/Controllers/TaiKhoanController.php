<?php

namespace App\Http\Controllers;

use App\TaiKhoan;
use Illuminate\Http\Request;

class TaiKhoanController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $objs = TaiKhoan::whereLoai(0)->get();
        return $this->sendResponse($objs, "TaiKhoan retrieved successfully");
    }

    public function all()
    {
        $objs = TaiKhoan::where('loai', "!=", '-1')->get(['id', 'ky_hieu', 'phan_loai', 'phi_vn', 'phi_vj', 'phi_jets', 'phi_bb']);
        return $this->sendResponse($objs, "TaiKhoan retrieved successfully");
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
        $obj = TaiKhoan::create($data);
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TaiKhoan  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = TaiKhoan::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TaiKhoan  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TaiKhoan::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công tài khoản");
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
            TaiKhoan::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

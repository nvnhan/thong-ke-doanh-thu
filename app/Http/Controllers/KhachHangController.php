<?php

namespace App\Http\Controllers;

use App\KhachHang;
use Illuminate\Http\Request;

class KhachHangController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $objs = KhachHang::ofUser($request->user())->get();
        return $this->sendResponse($objs, "KhachHang retrieved successfully");
    }

    public function all(Request $request)
    {
        $objs = KhachHang::allowUser($request->user())->get(['id', 'ma_khach_hang', 'phan_loai', 'phi_vn', 'phi_vj', 'phi_jets', 'phi_bb']);
        return $this->sendResponse($objs, "KhachHang retrieved successfully");
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
        $obj = KhachHang::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\KhachHang  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data =$request->all();
        $model = KhachHang::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\KhachHang  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        KhachHang::find($id)->delete();
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
        if (\is_array($objs))
        {
            $cnt = count($objs);
            KhachHang::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }
        
        return $this->sendError('Không xóa được', []);
    }
}

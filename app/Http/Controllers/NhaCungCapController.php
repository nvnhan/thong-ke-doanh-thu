<?php

namespace App\Http\Controllers;

use App\TaiKhoan;
use Illuminate\Http\Request;

class NhaCungCapController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $objs = TaiKhoan::ofUser($request->user())->whereLoai(1);
        if (!empty($request->ncc) && $request->ncc != -1)
            $objs = $objs->where('id', $request->ncc);
        return $this->sendResponse($objs->get(), "NhaCungCap retrieved successfully");
    }

    public function all(Request $request)
    {
        $objs = TaiKhoan::ofUser($request->user())->whereLoai('1')->get(['id', 'ky_hieu', 'phan_loai']);
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
        $obj->loai = 1;
        $obj->username = $request->user()->username;
        $obj->save();
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
        $data =$request->all();
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
        return $this->sendResponse('', "Xóa thành công nhà cung cấp và các hàng hóa của họ");
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
            TaiKhoan::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }
        
        return $this->sendError('Không xóa được', []);
    }
}

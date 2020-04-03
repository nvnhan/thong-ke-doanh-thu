<?php

namespace App\Http\Controllers;

use App\SanBay;
use Illuminate\Http\Request;

class SanBayController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $san_bay = SanBay::get();
        return $this->sendResponse($san_bay, "SanBay retrieved successfully");
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
        $obj = SanBay::create($data);
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SanBay  $sanBay
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = SanBay::find($id);
        $data = $request->all();
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SanBay  $sanBay
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        SanBay::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công sân bay");
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
            SanBay::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }
        
        return $this->sendError('Không xóa được', []);
    }
}

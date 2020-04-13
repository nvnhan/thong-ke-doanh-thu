<?php

namespace App\Http\Controllers;

use App\PhiHanhLy;
use Illuminate\Http\Request;

class PhiHanhLyController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $objs = PhiHanhLy::get();
        return $this->sendResponse($objs, "PhiHanhLy retrieved successfully");
    }

    public function all()
    {
        $objs = PhiHanhLy::get(['id', 'hanh_ly', 'muc_phi']);
        return $this->sendResponse($objs, "PhiHanhLy retrieved successfully");
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
        $obj = PhiHanhLy::create($data);
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PhiHanhLy  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data =$request->all();
        $model = PhiHanhLy::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PhiHanhLy  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        PhiHanhLy::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công phí hành lý");
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
            PhiHanhLy::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }
        
        return $this->sendError('Không xóa được', []);
    }
}

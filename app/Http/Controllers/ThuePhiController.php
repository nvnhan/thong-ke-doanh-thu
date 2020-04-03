<?php

namespace App\Http\Controllers;

use App\ThuePhi;
use Illuminate\Http\Request;

class ThuePhiController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $objs = ThuePhi::get();
        return $this->sendResponse($objs, "ThuePhi retrieved successfully");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ThuePhi  $thuePhi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = ThuePhi::find($id);
        $data =$request->all();
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }
}

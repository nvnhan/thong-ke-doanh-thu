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
            $objs = BanRa::ofUser($request->user())->whereBetween('ngay_hoan_doi', [$request->bat_dau, $request->ket_thuc])->get();
        else
            $objs = BanRa::ofUser($request->user())->whereBetween('ngay_hoan_doi', [date('Y-m-01'), date('Y-m-t')])->get();

        return $this->sendResponse($objs, "HoanDoi retrieved successfully");
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
}

<?php

namespace App\Http\Controllers;

use App\Visa;
use Illuminate\Http\Request;

class VisaController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = Visa::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else
            $objs = Visa::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        // if (!empty($request->tinh_trang))
        //     $objs = array_values($objs->where('tinh_trang', $request->tinh_trang)->toArray());

        return $this->sendResponse($objs->with(['khach_hang', 'nha_cung_cap', 'thu_chi_chi_tiets'])->get(), "Visa retrieved successfully");
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
        $obj = Visa::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Visa  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = Visa::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Visa  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Visa::find($id)->delete();
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
            Visa::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

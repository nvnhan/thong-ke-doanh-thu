<?php

namespace App\Http\Controllers;

use App\DatVe;
use Illuminate\Http\Request;

class DatVeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = DatVe::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc])->get();
        else
            $objs = DatVe::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')])->get();

        //TODO: Lọc theosân bay

        // if (!empty($request->hb)) {
        //     if ($request->hb != 'khac')
        //         $objs = array_values($objs->where('hang_bay', $request->hb)->toArray());
        //     else
        //         $objs = array_values($objs->whereNotIn('hang_bay', ['VN', 'VJ', 'Jets', 'BB'])->toArray());
        // }

        // if (!empty($request->user))
        //     $objs = array_values($objs->where('username', $request->user)->toArray());

        return $this->sendResponse($objs, "DatVe retrieved successfully");
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
        $obj = DatVe::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DatVe  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = DatVe::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Update multiple resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DatVe  $model
     * @return \Illuminate\Http\Response
     */
    public function updates(Request $request)
    {
        $data = $request->all();
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $cnt = count($objs);
            foreach ($objs as $id) {
                $model = DatVe::find($id);
                $model->fill($data);
                $model->save();
            }

            return $this->sendResponse('', "Cập nhật thành công $cnt mục");
        }
        return $this->sendError('Không sửa được', []);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DatVe  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DatVe::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công đặt vé");
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
            DatVe::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

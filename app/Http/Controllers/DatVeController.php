<?php

namespace App\Http\Controllers;

use App\DatVe;
use App\SanBay;
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
            $objs = DatVe::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else
            $objs = DatVe::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        if (!$request->user()->admin)
            $objs = $objs->where('username', $request->user()->username);

        // Lọc theosân bay
        if (!empty($request->sb)) {
            $sbqt = SanBay::where('phan_loai', '!=', 'Việt Nam')->pluck('ma_san_bay');
            if ($request->sb == 'qt')
                $objs = $objs
                    ->whereIn('sb_di', $sbqt)
                    ->orWhereIn('sb_di1', $sbqt)
                    ->orWhereIn('sb_ve', $sbqt)
                    ->orWhereIn('sb_ve1', $sbqt);
            else if ($request->sb == 'qn')
                $objs = $objs->whereNotIn('sb_di', $sbqt)
                    ->whereNotIn('sb_di1', $sbqt)
                    ->whereNotIn('sb_ve', $sbqt)
                    ->whereNotIn('sb_ve1', $sbqt);
        }

        return $this->sendResponse($objs->get(), "DatVe retrieved successfully");
    }

    public function hangbay(Request $request)
    {
        $objs = DatVe::all()->pluck('hang_bay');

        return $this->sendResponse($objs, "HangBay retrieved successfully");
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

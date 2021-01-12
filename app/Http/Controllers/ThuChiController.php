<?php

namespace App\Http\Controllers;

use App\Helpers\ThemFileThuChi;
use App\ThuChi;
use App\ThuChiChiTiet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ThuChiController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = ThuChi::ofUser($request->user())->whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else if (!empty($request->dd))
            $objs = ThuChi::ofUser($request->user())->where('dinh_danh', $request->dd);
        else
            $objs = ThuChi::ofUser($request->user())->whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        return $this->sendResponse($objs->with(['tai_khoan_dens', 'tai_khoan_dis', 'khach_hang', 'thu_chi_chi_tiets'])->get(), "ThuChi retrieved successfully");
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
        $obj = ThuChi::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Show the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ThuChi  $model
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = ThuChi::find($id);
        $model->append('so_du_khach_hang');
        return $this->sendResponse($model, "ThuChi retrieved successfully");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ThuChi  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = ThuChi::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ThuChi  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $obj = ThuChi::find($id);
        foreach ($obj->thu_chi_chi_tiets as $tiet)
            $tiet->delete();
        $obj->delete();
        return $this->sendResponse('', "Xóa thành công thu chi");
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
            foreach ($objs  as $id) {
                $obj = ThuChi::find($id);
                foreach ($obj->thu_chi_chi_tiets as $tiet)
                    $tiet->delete();
                $obj->delete();
            }
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function themfile(Request $request)
    {
        $cnt = 0;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $ext = strtolower($file->getClientOriginalExtension());
            $dinh_danh = $file->getClientOriginalName() . time();
            $file->storeAs('upload', "$dinh_danh.$ext"); // Upload file to storage/app/upload

            if ($ext === 'xls' || $ext === 'xlsx')
                $cnt = ThemFileThuChi::parse_excel($request, $dinh_danh, $ext);

            Storage::delete("upload/$dinh_danh.$ext");
        }

        if ($cnt > 0)
            return $this->sendResponse($dinh_danh, "Thêm mới thành công $cnt mục");
        else return $this->sendError("Không xử lý được");
    }
}

<?php

namespace App\Http\Controllers;

use App\HangHoa;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent;

class HangHoaController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $objs = HangHoa::query();
        if (!empty($request->ncc) && $request->ncc != -1)
            $objs = $objs->where('id_tai_khoan', $request->ncc);
        return $this->sendResponse($objs->get(), "HangHoa retrieved successfully");
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
        $obj = HangHoa::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HangHoa  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = HangHoa::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HangHoa  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HangHoa::find($id)->delete();
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
            HangHoa::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }

    public function tonkho (Request $request) 
    {
        $date = date('Y-m-d');
        if (!empty($request->den_ngay))
            $date = $request->den_ngay;

        $hang_hoa = HangHoa::whereHas('mua_vaos', function ($query) use ($date) {
            $query->where('ngay_thang', "<=", $date);
        })->get();
        foreach ($hang_hoa as $value) {
            $mv = $value->mua_vaos()->where('ngay_thang', "<=", $date)->sum('so_luong');
            $br = $value->ban_ras()->where('ngay_thang', "<=", $date)->sum('so_luong');
            $hd = $value->ban_ras()->where('ngay_hoan_doi_xong', "<=", $date)->sum('so_luong');
            $value->so_luong = $mv - $br + $hd;
        }
        
        return $this->sendResponse($hang_hoa, "HangHoa retrieved successfully");
    }
}

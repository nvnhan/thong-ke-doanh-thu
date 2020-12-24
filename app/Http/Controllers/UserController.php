<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        if ($user->admin) {
            $objs = User::where('username', '!=', $user->username)
                ->where(function ($query) use ($user) {
                    return $query->where('phan_quyen', '>=', 2)->orWhere('id_nguoi_tao', $user->id);
                })->get();
            foreach ($objs as $obj) {
                $childs = $obj->tao_ra()->get();
                if (count($childs) > 0)
                    $obj->children = $childs;
            }
        } else if ($user->quan_tri)
            $objs = User::where('id_nguoi_tao', $user->id)->get();
        else $objs = [];
        return $this->sendResponse($objs, "User retrieved successfully");
    }

    public function all(Request $request)
    {
        $user = $request->user();
        if ($user->admin)
            $objs = User::query();
        else if ($user->quan_tri)
            $objs = User::where('id_nguoi_tao', $user->id);
        else
            $objs = User::where('username', $user->username);
        $objs = $objs->get(['username', 'ho_ten']);
        return $this->sendResponse($objs, "User retrieved successfully");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $u = User::where('username', $request->username)->first();
        if ($u)
            return $this->sendError("Trùng tên tài khoản");

        $data = $request->all();
        $obj = new User();
        $obj->fill($data);
        if (!$request->user()->admin && $obj->phan_quyen > 1)
            $obj->phan_quyen = 0;
        $obj->id_nguoi_tao = $request->user()->id;
        $obj->password = Hash::make('123');
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công, mật khẩu: 123");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->fill($request->except('username', 'password'));
        if (!$request->user()->admin && $user->phan_quyen > 1)
            $user->phan_quyen = 0;
        $user->save();
        return $this->sendResponse($user, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công nhân viên");
    }
}

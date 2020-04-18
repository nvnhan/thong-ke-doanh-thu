<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $objs = User::all();
        return $this->sendResponse($objs, "User retrieved successfully");
    }

    public function all(Request $request)
    {
        if ($request->user()->admin)
            $objs = User::query();
        else
            $objs = User::where('username', $request->user()->username);
        $objs = $objs->get(['username', 'ho_ten']);
        return $this->sendResponse($objs, "User retrieved successfully");
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
        $user->fill($request->except('username', 'password'))->save();
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

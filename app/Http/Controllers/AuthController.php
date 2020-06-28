<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends BaseController
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors()->all(), []);
        }

        $request['password'] = Hash::make($request['password']);
        $user = User::create($request->toArray());

        return $this->sendResponse("", 'Đăng ký thành công, xin chờ quản trị viên phê duyệt');
    }

    /**
     * Login = app & tool
     */
    public function getApiLogin(Request $req)
    {
        $us = User::where('username', $req->username)->first();
        if (!$us)
            return response()->json(array('message' => 'User does not exist'), 400);
        if (!$us->actived)
            return response()->json(array('message' => 'User inactived'), 400);

        if ($us->ngay_het_han && $us->ngay_het_han <= date('Y-m-d'))
            return response()->json(array('message' => 'Account has expired'), 400);
        // if ($req->ip && $us->clientapi != '' && $us->clientapi != $req->ip)
        //     return response()->json(array('message' => 'User is already logged in'), 400);
        // if ($req->desktop && $us->desktop != '' && $us->desktop != $req->desktop)
        //     return response()->json(array('message' => 'You have logged in with another computer'), 400);

        // Kiểm tra đăng nhập
        if (Hash::check($req->password, $us->password)) {
            // if ($req->ip) { // Tool
            //     if (!$us->tool)
            //         return response()->json(array('message' => 'You dont have permission'), 400);
            //     $us->clientapi = $req->ip;
            //     $us->save();
            // } else if ($req->desktop) { // App
            //     if (!$us->app)
            //         return response()->json(array('message' => 'You dont have permission'), 400);
            //     $us->desktop = $req->desktop;
            //     $us->save();
            // }
            // $token = $us->createToken('App/Tool login')->accessToken;
            return response()->json(['username' => $us->username, 'hoten' => $us->ho_ten, 'ngayhethan' => $us->ngay_het_han]);
        } else
            return response()->json(array('message' => 'Username/Email and Password mismatch'), 400);
    }

    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                if ($user->actived) {
                    if (empty($user->ngay_het_han) || now() < $user->ngay_het_han) {
                        $tokens = $user->tokens()
                            ->where('name', 'Web API login')
                            ->where(fn ($query) => $query->where('revoked', 0)->orWhere('expires_at', '<=', date('Y-m-d H:i:s')))->count();
                        if ($tokens <= 0) {
                            $response = $user->toArray();
                            $token = $user->createToken('Web API login')->accessToken;
                            $response['token'] = $token;
                            return $this->sendResponse($response, 'Đăng nhập thành công');
                        } else
                            return $this->sendError("Tài khoản đã đăng nhập trên thiết bị khác", []);
                    } else
                        return $this->sendError("Tài khoản đã hết hạn sử dụng", []);
                } else
                    return $this->sendError("Tài khoản không hoạt động. Vui lòng liên hệ quản trị viên", []);
            } else
                return $this->sendError("Mật khẩu không chính xác", []);
        } else
            return $this->sendError('Tài khoản không tồn tại', []);
    }

    public function user(Request $request)
    {
        $user = $request->user();

        if ($user) {
            return $this->sendResponse($user, 'Get user successfully');
        } else
            return $this->sendError('Invalid token or is Revoked', []);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $user->fill($request->except('username', 'password', 'ngay_het_han'))->save();
            return $this->sendResponse($user, 'Cập nhật thành công');
        } else
            return $this->sendError('Invalid token or is Revoked', []);
    }

    public function password(Request $request)
    {
        $u = $request->user();
        if ($u) {
            $user = User::where('username', $u->username)->first();
            $validator = Validator::make($request->all(), [
                'old_pass' => 'required|string',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return $this->sendError($validator->errors()->all(), []);
            }

            if (!Hash::check($request->old_pass, $user->password)) {
                return $this->sendError("Mật khẩu cũ không chính xác", []);
            }

            $request['password'] = Hash::make($request['password']);
            $user->fill($request->except('username'))->save();
            return $this->sendResponse($user, 'Đổi mật khẩu thành công');
        } else
            return $this->sendError('Invalid token or is Revoked', []);
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();

        return $this->sendResponse('', 'Đã đăng xuất');
    }
}

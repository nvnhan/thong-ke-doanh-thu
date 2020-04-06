<?php

namespace App\Http\Controllers;

use App\User;
use Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthController extends BaseController
{
    public function register (Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails())
        {
            return $this->sendError("Error", ['errors'=>$validator->errors()->all()]);
        }

        $request['password']=Hash::make($request['password']);
        $user = User::create($request->toArray());

        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];

        return $this->sendResponse($response, 'Register successfully');

    }

    public function login (Request $request) {
        $user = User::where('username', $request->username)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['username' => $user->username, 'ho_ten' => $user->ho_ten, 'token' => $token];
                return $this->sendResponse($response, 'Đăng nhập thành công');
            } else {
                $response = "Mật khẩu không chính xác";
                return $this->sendError($response, []);
            }
        } else {
            $response = 'Tài khoản không tồn tại';
            return $this->sendError($response, []);
        }
    }

    public function user (Request $request) {
        $user = $request->user();

        if ($user) {
                $response = ['username' => $user->username, 'ho_ten' => $user->ho_ten];
                return $this->sendResponse($response, 'Get user successfully');
        } else {
            $response = 'Invalid token or is Revoked';
            return $this->sendError($response, []);
        }
    }

    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();

        $response = 'You have been succesfully logged out!';
        return $this->sendResponse($response, 'Đã đăng xuất');
    }
}

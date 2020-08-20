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
        $user = User::where('username', $req->username)->first();
        if (!$user)
            return $this->sendError('Account does not exist', [], 400);
        // Kiểm tra đăng nhập
        if (!Hash::check($req->password, $user->password))
            return $this->sendError('Username and Password mismatch', [], 400);
        if (!$user->actived)
            return $this->sendError('Account inactived', [], 400);

        $today = date("Y-m-d");
        if (empty($user->ngay_dang_nhap) || $today > $user->ngay_dang_nhap) {
            $user->ngay_dang_nhap = $today;
            $user->so_ngay_dang_nhap++;
        }
        $max_dn = intval(env('NGAY_DANG_NHAP_TOI_DA'));
        if ($user->so_ngay_dang_nhap <= $max_dn) {
            $user->save();
            // Delete all previous Tokens
            $user->tokens()
                ->where('name', 'Extension API login')
                ->delete();

            $token = $user->createToken('Extension API login')->accessToken;
            return response()->json([
                'username' => $user->username,
                'hoten' => $user->ho_ten,
                'songay' => $max_dn - $user->so_ngay_dang_nhap,
                'token' => $token
            ], 200);
        } else
            return $this->sendError("The account has run out of limited login attempts", [], 400);
    }

    /**
     * Login in web
     */
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                if ($user->actived) {
                    $today = date("Y-m-d");
                    if (empty($user->ngay_dang_nhap) || $today > $user->ngay_dang_nhap) {
                        $user->ngay_dang_nhap = $today;
                        $user->so_ngay_dang_nhap++;
                    }
                    $max_dn = intval(env('NGAY_DANG_NHAP_TOI_DA'));
                    if ($user->so_ngay_dang_nhap <= $max_dn) {
                        $user->save();
                        // Delete all previous Tokens
                        $user->tokens()
                            ->where('name', 'Web API login')
                            ->delete();

                        $response = $user->toArray();
                        unset($response['khong_gioi_han_dang_nhap']);
                        unset($response['so_ngay_dang_nhap']);
                        unset($response['ngay_dang_nhap']);

                        $token = $user->createToken('Web API login')->accessToken;
                        $response['token'] = $token;
                        $response['ngay_dang_nhap_con_lai'] = $max_dn - $user->so_ngay_dang_nhap;
                        return $this->sendResponse($response, 'Đăng nhập thành công');
                    } else
                        return $this->sendError("Tài khoản đã dùng hết số lượt đăng nhập giới hạn", []);
                } else
                    return $this->sendError("Tài khoản không hoạt động. Vui lòng liên hệ quản trị viên", []);
            } else
                return $this->sendError("Mật khẩu không chính xác", []);
        } else
            return $this->sendError('Tài khoản không tồn tại', []);
    }
    /**
     * Get user information
     */
    public function user(Request $request)
    {
        $user = $request->user();

        if ($user) {
            $today = date("Y-m-d");
            if (empty($user->ngay_dang_nhap) || $today > $user->ngay_dang_nhap) {
                $user->ngay_dang_nhap = $today;
                $user->so_ngay_dang_nhap++;
            }
            $max_dn = intval(env('NGAY_DANG_NHAP_TOI_DA'));
            if ($user->so_ngay_dang_nhap <= $max_dn) {
                $user->save();

                $response = $user->toArray();
                unset($response['khong_gioi_han_dang_nhap']);
                unset($response['so_ngay_dang_nhap']);
                unset($response['ngay_dang_nhap']);

                $response['ngay_dang_nhap_con_lai'] = $max_dn - $user->so_ngay_dang_nhap;
                return $this->sendResponse($response, 'Get user successfully');
            } else
                return $this->sendError("Tài khoản đã dùng hết số lượt đăng nhập giới hạn", []);
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

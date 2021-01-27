<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
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
    public function getApiLogin(Request $request)
    {
        $user = User::where('username', $request->username)->first();
        if (!$user)
            return $this->sendError('Account does not exist', [], 400);
        // Kiểm tra đăng nhập
        if (!Hash::check($request->password, $user->password))
            return $this->sendError('Username and Password mismatch', [], 400);
        if (!$user->actived)
            return $this->sendError('Account inactived', [], 400);
        if (!$user->extension)
            return $this->sendError('Account is not allowed', [], 400);

        $today = date("Y-m-d");
        if (empty($user->ngay_dang_nhap) || $today > $user->ngay_dang_nhap) {
            $user->ngay_dang_nhap = $today;
            if (!$user->admin)
                $user->so_ngay_dang_nhap--;
        }
        if ($user->so_ngay_dang_nhap >= 0) {
            $user->save();
            // Delete all previous Tokens
            $user->tokens()
                ->where('name', 'Extension API login')
                ->delete();

            $token = $user->createToken('Extension API login')->accessToken;
            return response()->json([
                'username' => $user->username,
                'hoten' => $user->ho_ten,
                'songay' => $user->so_ngay_dang_nhap,
                'token' => $token,
                'id' => $user->id
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
                    $nguoi_tao = $user->nguoi_tao()->first();
                    if (
                        $nguoi_tao === null ||
                        ($nguoi_tao->actived &&
                            ($nguoi_tao->so_ngay_dang_nhap > 0 ||
                                (($nguoi_tao->so_ngay_dang_nhap === 0 &&
                                    $nguoi_tao->ngay_dang_nhap === $today))))
                    ) {
                        if (empty($user->ngay_dang_nhap) || $today > $user->ngay_dang_nhap) {
                            $user->ngay_dang_nhap = $today;
                            if (!$user->admin)
                                $user->so_ngay_dang_nhap--;
                        }
                        if ($user->so_ngay_dang_nhap >= 0) {
                            $user->setUserZone();
                            $user->save();
                            // Delete all previous Tokens
                            $user->tokens()
                                ->where('name', 'Web API login')
                                ->delete();

                            $response = $user->toArray();
                            $response['ngay_dang_nhap_con_lai'] = $user->so_ngay_dang_nhap;
                            unset($response['khong_gioi_han_dang_nhap']);
                            unset($response['so_ngay_dang_nhap']);
                            unset($response['ngay_dang_nhap']);

                            $token = $user->createToken('Web API login')->accessToken;
                            $response['token'] = $token;
                            return $this->sendResponse($response, 'Đăng nhập thành công');
                        } else
                            return $this->sendError("Tài khoản đã dùng hết số lượt đăng nhập giới hạn", []);
                    } else
                        return $this->sendError("Đại lý đã bị vô hiệu hóa", []);
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
                $user->so_ngay_dang_nhap--;
            }
            if ($user->so_ngay_dang_nhap >= 0) {
                $user->setUserZone();
                $user->save();

                $response = $user->toArray();
                unset($response['khong_gioi_han_dang_nhap']);
                unset($response['so_ngay_dang_nhap']);
                unset($response['ngay_dang_nhap']);

                $response['ngay_dang_nhap_con_lai'] = $user->so_ngay_dang_nhap;
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

            $response = $user->toArray();
            unset($response['khong_gioi_han_dang_nhap']);
            unset($response['so_ngay_dang_nhap']);
            unset($response['ngay_dang_nhap']);

            $response['ngay_dang_nhap_con_lai'] = $user->so_ngay_dang_nhap;
            return $this->sendResponse($response, 'Cập nhật thành công');
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

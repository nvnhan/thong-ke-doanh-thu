<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// public routes
Route::post('/login', 'AuthController@login')->name('login.api');
Route::post('/register', 'AuthController@register')->name('register.api');

// private routes
Route::middleware('auth:api')->group(function () {
    Route::get('/logout', 'AuthController@logout')->name('logout');
    Route::get('/get-user', 'AuthController@user')->name('getuser');
    Route::put('/profile', 'AuthController@update')->name('profile');
    Route::put('/password', 'AuthController@password')->name('password');

    Route::delete('phi-hanh-ly/deletes', 'PhiHanhLyController@deletes');
    Route::resource('phi-hanh-ly', 'PhiHanhLyController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('san-bay/deletes', 'SanBayController@deletes');
    Route::resource('san-bay', 'SanBayController')->only(['index', 'store', 'update', 'destroy']);
    Route::resource('thue-phi', 'ThuePhiController')->only(['index', 'update']);
    
    Route::delete('tai-khoan/deletes', 'TaiKhoanController@deletes');
    Route::resource('tai-khoan', 'TaiKhoanController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('nha-cung-cap/deletes', 'NhaCungCapController@deletes');
    Route::resource('nha-cung-cap', 'NhaCungCapController')->only(['index', 'store', 'update', 'destroy']);

    Route::delete('khach-hang/deletes', 'KhachHangController@deletes');
    Route::resource('khach-hang', 'KhachHangController')->only(['index', 'store', 'update', 'destroy']);

    Route::resource('user', 'UserController');
    Route::resource('ban-ra', 'BanRaController');
    Route::resource('mua-vao', 'MuaVaoController');
    Route::resource('dat-ve', 'DatVeController');
    Route::resource('hang-hoa', 'HangHoaController');
    Route::resource('thu-chi', 'ThuChiController');
    Route::resource('thu-chi-chi-tiet', 'ThuChiChiTietController');

    Route::resource('tour', 'TourController');
    Route::resource('tour-chi-tiet', 'TourChiTietController');
    Route::resource('visa', 'VisaController');
});
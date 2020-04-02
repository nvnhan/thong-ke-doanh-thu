<?php

use Illuminate\Http\Request;

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

    Route::resource('san-bay', 'SanBayController');
// Route::middleware('auth:api')->group(function () {
    Route::resource('user', 'UserController');
    Route::resource('ban-ra', 'BanRaController');
    Route::resource('mua-vao', 'MuaVaoController');
    Route::resource('dat-ve', 'DatVeController');
    Route::resource('hang-hoa', 'HangHoaController');
    Route::resource('khach-hang', 'KhachHangController');
    Route::resource('phi-hanh-ly', 'PhiHanhLyController');
    Route::resource('tai-khoan', 'TaiKhoanController');
    Route::resource('thu-chi', 'ThuChiController');
    Route::resource('thu-chi-chi-tiet', 'ThuChiChiTietController');
    Route::resource('thue-phi', 'ThuePhiController');
    Route::resource('tour', 'TourController');
    Route::resource('tour-chi-tiet', 'TourChiTietController');
    Route::resource('visa', 'VisaController');
// });
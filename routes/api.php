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



    Route::delete('phi-hanh-ly/deletes', 'PhiHanhLyController@deletes');
    Route::resource('phi-hanh-ly', 'PhiHanhLyController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('san-bay/deletes', 'SanBayController@deletes');
    Route::resource('san-bay', 'SanBayController')->only(['index', 'store', 'update', 'destroy']);
    Route::resource('thue-phi', 'ThuePhiController')->only(['index', 'update']);
    
// Route::middleware('auth:api')->group(function () {
    Route::resource('user', 'UserController');
    Route::resource('ban-ra', 'BanRaController');
    Route::resource('mua-vao', 'MuaVaoController');
    Route::resource('dat-ve', 'DatVeController');
    Route::resource('hang-hoa', 'HangHoaController');
    Route::resource('khach-hang', 'KhachHangController');
    
    Route::resource('tai-khoan', 'TaiKhoanController');
    Route::resource('thu-chi', 'ThuChiController');
    Route::resource('thu-chi-chi-tiet', 'ThuChiChiTietController');

    Route::resource('tour', 'TourController');
    Route::resource('tour-chi-tiet', 'TourChiTietController');
    Route::resource('visa', 'VisaController');
// });
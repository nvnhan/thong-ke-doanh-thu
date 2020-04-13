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
    // Account
    Route::get('/logout', 'AuthController@logout')->name('logout');
    Route::get('/get-user', 'AuthController@user')->name('getuser');
    Route::put('/profile', 'AuthController@update')->name('profile');
    Route::put('/password', 'AuthController@password')->name('password');

    // Ve May Bay
    Route::delete('phi-hanh-ly/deletes', 'PhiHanhLyController@deletes');
    Route::resource('phi-hanh-ly', 'PhiHanhLyController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('san-bay/deletes', 'SanBayController@deletes');
    Route::resource('san-bay', 'SanBayController')->only(['index', 'store', 'update', 'destroy']);
    Route::resource('thue-phi', 'ThuePhiController')->only(['index', 'update']);
    
    // Thong Tin Chung
    Route::get('tai-khoan/all', 'TaiKhoanController@all');
    Route::delete('tai-khoan/deletes', 'TaiKhoanController@deletes');
    Route::resource('tai-khoan', 'TaiKhoanController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('nha-cung-cap/deletes', 'NhaCungCapController@deletes');
    Route::resource('nha-cung-cap', 'NhaCungCapController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('khach-hang/deletes', 'KhachHangController@deletes');
    Route::resource('khach-hang', 'KhachHangController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('hang-hoa/deletes', 'HangHoaController@deletes');
    Route::resource('hang-hoa', 'HangHoaController')->only(['index', 'store', 'update', 'destroy']);

    // Tour - Visa
    Route::delete('tour/deletes', 'TourController@deletes');
    Route::resource('tour', 'TourController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('tour-chi-tiet/deletes', 'TourChiTietController@deletes');
    Route::resource('tour-chi-tiet', 'TourChiTietController')->only(['index', 'store', 'update', 'destroy']);

    Route::delete('visa/deletes', 'VisaController@deletes');
    Route::resource('visa', 'VisaController')->only(['index', 'store', 'update', 'destroy']);

    // Ban Hang
    Route::delete('ban-ra/deletes', 'BanRaController@deletes');
    Route::resource('ban-ra', 'BanRaController')->only(['index', 'store', 'update', 'destroy']);
    Route::resource('hoan-doi', 'HoanDoiController')->only(['index', 'update']);

    Route::delete('mua-vao/deletes', 'MuaVaoController@deletes');
    Route::resource('mua-vao', 'MuaVaoController')->only(['index', 'store', 'update', 'destroy']);

    Route::get('ton-kho', 'HangHoaController@tonkho');
    Route::get('tong-hop-hang', 'HangHoaController@tonghop');

    // Dat Ve
    Route::delete('dat-ve/deletes', 'DatVeController@deletes');
    Route::put('dat-ve/updates', 'DatVeController@updates');
    Route::get('dat-ve/hang-bay', 'DatVeController@hangbay');
    Route::resource('dat-ve', 'DatVeController')->only(['index', 'store', 'update', 'destroy']);


    // Add middleware checkadmin
    Route::resource('user', 'UserController');
    Route::resource('thu-chi', 'ThuChiController');
    Route::resource('thu-chi-chi-tiet', 'ThuChiChiTietController');
});
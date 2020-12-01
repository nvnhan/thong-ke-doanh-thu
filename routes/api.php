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
Route::get('/login', 'AuthController@getApiLogin');         // Login in App or Extension

Route::post('/login', 'AuthController@login')->name('login.api');
Route::post('/register', 'AuthController@register')->name('register.api');

// private routes
Route::middleware('auth:api')->group(function () {
    Route::get('parcel', 'FooController@parcel');       // Parse excel text from extension

    // Account
    Route::get('/logout', 'AuthController@logout')->name('logout');
    Route::get('/get-user', 'AuthController@user')->name('getuser');
    Route::put('/profile', 'AuthController@update')->name('profile');
    Route::put('/password', 'AuthController@password')->name('password');

    // Ve May Bay
    Route::get('phi-hanh-ly/all', 'PhiHanhLyController@all');
    Route::delete('phi-hanh-ly/deletes', 'PhiHanhLyController@deletes');
    Route::resource('phi-hanh-ly', 'PhiHanhLyController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('san-bay/deletes', 'SanBayController@deletes');
    Route::resource('san-bay', 'SanBayController')->only(['index', 'store', 'update', 'destroy']);
    Route::get('thue-phi/all', 'ThuePhiController@all');
    Route::resource('thue-phi', 'ThuePhiController')->only(['index', 'update']);

    // Dat Ve
    Route::delete('dat-ve/deletes', 'DatVeController@deletes');
    Route::get('dat-ve/code-ve', 'DatVeController@codeve');
    Route::get('dat-ve/hang-bay', 'DatVeController@hangbay');

    Route::get('no-ve', 'DatVeController@nove');
    Route::get('chua-bay', 'DatVeController@chuabay');

    Route::put('dat-ve/updates', 'DatVeController@updates');
    Route::put('dat-ve/them-text', 'DatVeController@themtext');
    Route::post('dat-ve/them-file', 'DatVeController@themfile');

    Route::post('dat-ve/get-mail', 'DatVeController@getmail');
    Route::post('dat-ve/them-mail', 'DatVeController@themmail');

    Route::resource('dat-ve', 'DatVeController')->only(['index', 'store', 'update', 'destroy']);
    // Bao Cao
    Route::get('dat-ve/mau-ve', 'BaoCaoDatVeController@mauve');
    Route::get('dat-ve/lay-hoa-don', 'BaoCaoDatVeController@layhoadon');
    Route::get('dat-ve/bang-ke', 'BaoCaoDatVeController@bangkehoadon');
    Route::get('dat-ve/cong-no', 'BaoCaoDatVeController@congno');

    // Thong Tin Chung
    Route::get('tai-khoan/all', 'TaiKhoanController@all');
    Route::delete('tai-khoan/deletes', 'TaiKhoanController@deletes');
    Route::resource('tai-khoan', 'TaiKhoanController')->only(['index', 'store', 'update', 'destroy']);
    Route::get('nha-cung-cap/all', 'NhaCungCapController@all');
    Route::delete('nha-cung-cap/deletes', 'NhaCungCapController@deletes');
    Route::resource('nha-cung-cap', 'NhaCungCapController')->only(['index', 'store', 'update', 'destroy']);
    Route::delete('khach-hang/deletes', 'KhachHangController@deletes');

    Route::get('khach-hang/all', 'KhachHangController@all');
    Route::resource('khach-hang', 'KhachHangController')->only(['index', 'store', 'update', 'destroy']);
    Route::get('hang-hoa/all', 'HangHoaController@all');
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

    // Add middleware checkadmin
    Route::middleware('checkadmin')->group(function () {
        Route::get('cai-dat', 'SettingController@index');
        Route::put('cai-dat', 'SettingController@update');
    });

    Route::get('nhan-vien/all', 'UserController@all');
    // Route::delete('nhan-vien/deletes', 'UserController@deletes');
    Route::resource('nhan-vien', 'UserController')->only(['index', 'store', 'update', 'destroy']);


    Route::delete('thu-chi/deletes', 'ThuChiController@deletes');
    Route::resource('thu-chi', 'ThuChiController')->only(['index', 'show', 'store', 'update', 'destroy']);
    Route::post('thu-chi/them-file', 'ThuChiController@themfile');

    Route::delete('thu-chi-chi-tiet/deletes', 'ThuChiChiTietController@deletes');
    Route::get('thu-chi-chi-tiet/doi-tuong', 'ThuChiChiTietController@doituong');
    Route::resource('thu-chi-chi-tiet', 'ThuChiChiTietController')->only(['index', 'store', 'destroy']);

    Route::get('trang-chu', 'HomeController@index');

    Route::get('tong-hop-tai-khoan', 'BaoCaoController@taikhoan');
    Route::get('tong-hop-cong-no', 'BaoCaoController@congno');
    Route::get('cong-no-chi-tiet', 'BaoCaoController@congnochitiet');
    Route::get('doi-soat-tai-khoan', 'BaoCaoController@doisoattaikhoan');
    Route::get('bao-cao-tong-hop', 'BaoCaoController@baocaotonghop');
});

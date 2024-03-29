<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dat-ve/mat-ve/{u}/{ids}', 'HomeController@matve')->where('u', '[0-9]+')->where('ids', '[0-9,]+');
Route::get('/mua-vao/hoa-don/{u}/{id}', 'MuaVaoController@hoadon')->where('u', '[0-9]+')->where('id', '[0-9,]+');
Route::get('/ban-ra/hoa-don/{u}/{id}', 'BanRaController@hoadon')->where('u', '[0-9]+')->where('id', '[0-9,]+');

// Login routes for Gmail Authenticate
Route::get('/oauth/login', 'GmailController@login');

// Laravel Gmail
Route::get('/oauth/gmail', 'GmailController@redirect');

Route::get('/oauth/gmail/callback', function () {
    LaravelGmail::makeToken();
    return redirect()->to('/');
});

Route::get('/oauth/gmail/logout', function () {
    LaravelGmail::logout(); //It returns exception if fails
    return redirect()->to('/');
});


// Tất cả route đều vào SPA VIew
Route::get('{path?}', 'RenderSpaView')->where('path', '[a-zA-Z0-9-/]+');

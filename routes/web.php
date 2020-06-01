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

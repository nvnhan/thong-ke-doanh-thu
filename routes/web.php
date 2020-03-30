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


// Tất cả route đều vào SPA VIew
Route::get('{path?}', 'RenderSpaView');//->where('path', '[a-zA-Z0-9-/]+');

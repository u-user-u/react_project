<?php

use Illuminate\Support\Facades\Route;

Route::get('/app', 'App\Http\Controllers\CommonController@gameStart');
Route::get('', 'App\Http\Controllers\CommonController@showTitle');
Route::get('register', 'App\Http\Controllers\CommonController@registerUser');
Route::get('load', 'App\Http\Controllers\CommonController@loadUser');

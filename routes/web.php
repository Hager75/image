<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::get('/', function () {
    return view('home.index');
});
Route::get('home', function () {
    return view('home.index');
});

// Route::prefix('/admin')->group(function(){
Route::prefix('/admin')->middleware(['auth',])->group(function(){
    // Routes For User
    Route::prefix('/users')->middleware(['auth',])->group(function(){
        Route::get('', 'UserController@index')->name('users.index');
        Route::get('/create', 'UserController@create')->name("users.create");
        Route::post('', 'UserController@store')->name("users.store");
        Route::get('/{user}', 'UserController@show')->name("users.show");
        Route::get('/{user}/edit', 'UserController@edit')->name("users.edit");
        Route::put('/{user}', 'UserController@update')->name("users.update");
        Route::delete('/{user}', 'UserController@destroy')->name("users.destroy");
    });
        Route::get('home', 'HomeController@index')->name('home');
   
   
       });


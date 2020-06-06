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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/users', 'API\UserController@store')->name("users.store");
Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@store');

// Route::prefix('/users')->group(function(){
//     Route::prefix('/users')->middleware(['auth:sanctum',])->group(function(){
//     Route::get('', 'API\UserController@index')->name('users.index');
//     Route::post('', 'API\UserController@store')->name("users.store");
//     Route::get('/{user}', 'API\UserController@show')->name("users.show");
//     Route::put('/{user}', 'API\UserController@update')->name("users.update");
//     Route::delete('/{user}', 'API\UserController@destroy')->name("users.destroy");
// });

Route::prefix('/courses')->group(function(){
    Route::get('', 'API\course\CourseController@index')->name('courses.index');
    Route::post('', 'API\course\CourseController@store')->name("courses.store");
    Route::get('/{course}', 'API\course\CourseController@show')->name("courses.show");
    Route::put('/{id}', 'API\course\CourseController@update')->name("courses.update");
    Route::delete('/{id}', 'API\course\CourseController@destroy')->name("courses.destroy");
});

Route::prefix('/categories')->group(function(){
    Route::get('', 'API\category\CategoryController@index')->name('categories.index');
    Route::post('', 'API\category\CategoryController@store')->name("categories.store");
    Route::get('/{category}', 'API\category\CategoryController@show')->name("categories.show");
    Route::put('/{id}', 'API\category\CategoryController@update')->name("categories.update");
    Route::delete('/{id}', 'API\category\CategoryController@destroy')->name("categories.destroy");
});
   
Route::prefix('/users')->middleware(['auth:api',])->group(function(){
    Route::get('', 'API\UserController@index')->name('users.index');
    // Route::post('', 'API\UserController@store')->name("users.store");
    Route::get('/{user}', 'API\UserController@show')->name("users.show");
    Route::put('/{user}', 'API\UserController@update')->name("users.update");
    Route::delete('/{user}', 'API\UserController@destroy')->name("users.destroy");
});

Route::prefix('/products')->group(function(){
    Route::get('', 'API\product\ProductController@index')->name('products.index');
    Route::get('/create', 'API\product\ProductController@create')->name("products.create");
    Route::post('', 'API\product\ProductController@store')->name("products.store");
    Route::get('/{product}', 'API\product\ProductController@show')->name("products.show");
    Route::get('/{product}/edit', 'API\product\ProductController@edit')->name("products.edit");
    Route::put('/{product}', 'API\product\ProductController@update')->name("products.update");
    Route::delete('/{prdouct}', 'API\product\ProductController@destroy')->name("products.destroy");

});
Route::prefix('/events')->group(function(){
    Route::get('', 'API\event\EventController@index')->name('events.index');
    Route::get('/create', 'API\event\EventController@create')->name("events.create");
    Route::post('', 'API\event\EventController@store')->name("events.store");
    Route::get('/{event}', 'API\event\EventController@show')->name("events.show");
    Route::get('/{event}/edit', 'API\event\EventController@edit')->name("events.edit");
    Route::put('/{event}', 'API\event\EventController@update')->name("events.update");
    Route::delete('/{event}', 'API\event\EventController@destroy')->name("events.destroy");

});

// to Generate Token 
// Route::post('/token', 'API\UserController@generateToken');
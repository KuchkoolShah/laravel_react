<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\ProductController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/product' , App\Http\Controllers\ProductController::class);

Route::get('students', [App\Http\Controllers\API\StudentController::class, 'index']);
Route::post('/add-student', [App\Http\Controllers\API\StudentController::class, 'store']);
Route::get('/edit-student/{id}', [App\Http\Controllers\API\StudentController::class, 'edit']);
Route::put('update-student/{id}', [App\Http\Controllers\API\StudentController::class, 'update']);
Route::delete('delete-student/{id}', [App\Http\Controllers\API\StudentController::class, 'destroy']);
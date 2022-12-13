<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AjaxBOOKCRUDController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\HomeController;
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

// Route::get('/', function () {
//     return view('welcome');
// });
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/' , [App\Http\Controllers\Auth\LoginController::class , 'showLoginForm']);

// Route::get('ajax-book-crud', [AjaxBOOKCRUDController::class, 'index']);
// Route::post('add-update-book', [AjaxBOOKCRUDController::class, 'store']);
// Route::post('edit-book', [AjaxBOOKCRUDController::class, 'edit']);
// Route::post('delete-book', [AjaxBOOKCRUDController::class, 'destroy']);


// Route::get('student',  [App\Http\Controllers\StudentController::class, 'index']);
// Route::post('student',  [App\Http\Controllers\StudentController::class, 'store']);
// Route::get('fetch-students',  [App\Http\Controllers\StudentController::class, 'fetchstudent']);
// Route::get('edit-student/{id}',  [App\Http\Controllers\StudentController::class, 'edit']);
// Route::put('update-student/{id}',  [App\Http\Controllers\StudentController::class, 'update']);
// Route::delete('delete-student/{id}',  [App\Http\Controllers\StudentController::class, 'destroy']);



// Route::get('react-crud', [App\Http\Controllers\HomeController::class, 'react_crud']);
// Route::get('user/create', [App\Http\Controllers\HomeController::class, 'create']);
// Route::post('user/create', [App\Http\Controllers\HomeController::class,'store']);

// Route::group(['middleware' => ['auth','isAdmin']], function () {

//     Route::get('/dashboard', function () {
//        return view('dashboard');
//     });
 
//  });

// Route::get('/', 'HomeController@index');
// Route::get('/load-latest-messages', 'MessagesController@getLoadLatestMessages');
// Route::post('/send', 'MessagesController@postSendMessage');
// Route::get('/fetch-old-messages', 'MessagesController@getOldMessages');

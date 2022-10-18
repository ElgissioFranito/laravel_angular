<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\ProductController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// route pour produit
Route::get('/getProducts', [ProductController::class, 'getProducts']);
Route::get('/getProduct/{id}', [ProductController::class, 'getProduct']);
Route::post('/createProd', [ProductController::class, 'createProd']);
Route::post('/updateProd/{id}', [ProductController::class, 'updateProd']);
Route::post('/deleteProd/{id}', [ProductController::class, 'deleteProd']);


// route pour user
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/listuser', [UserController::class, 'listuser']);

Route::group(["middleware" => ['auth:api']], function () {
    Route::post('/logout', [UserController::class, 'logout']);
});

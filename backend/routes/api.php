<?php

use App\Http\Controllers\admin\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;

Route::post('authenticate',[AuthenticateController::class,'authenticate']);
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['middleware'=>['auth:sanctum']],function(){
    //protected routes
    Route::get('dashboard',[DashboardController::class,'index']);
    Route::get('logout',[AuthenticateController::class,'logout']);
   
});

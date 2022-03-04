<?php

use App\Http\Controllers\Auth\ForgottenPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Tenant\TenantController;
use App\Http\Controllers\Tenant\LandLordController;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;

// Auth routes
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::get('/logout', [LogoutController::class, 'store'])->name('logoutReact');
Route::post('/logout', [LogoutController::class, 'store'])->name('logout');
Route::get('/forgot-password', [ForgottenPasswordController::class, 'index'])->name('password.request');
Route::post('/forgot-password', [ForgottenPasswordController::class, 'store'])->name('password.email');
Route::get('/reset-password/{token}', [ResetPasswordController::class, 'index'])->name('password.reset');
Route::post('/reset-password', [ResetPasswordController::class, 'store'])->middleware('guest')->name('password.update');


// General routes
Route::get('/', [HomeController::class, 'index'])->name('home');

// Tenant routes
Route::get('/tenant-home', [TenantController::class, 'index'])->name('tenant-home');
Route::get('/tenant-test', function() {
    return view('tenant.tenant-test');
    });

// Admin routes

// Landlord routes
Route::get('/landlord-home', [LandLordController::class, 'index'])-> name('landlord-home');
Route::get('/landlord-properties', function() {
    return view('landlord.landlord-properties');
});
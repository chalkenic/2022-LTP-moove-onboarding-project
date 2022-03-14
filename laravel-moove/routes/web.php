<?php

use App\Http\Controllers\Auth\ForgottenPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\UserConvertController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\Tenant\ApplicationController;
use App\Http\Controllers\Tenant\TenantController;
use App\Http\Controllers\Tenant\TenantAptController;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use App\Http\Controllers\Landlord\LandlordController;
use Illuminate\Support\Facades\Route;

// Auth routes
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LogoutController::class, 'store'])->name('logout');
Route::get('/forgot-password', [ForgottenPasswordController::class, 'index'])->name('password.request');
Route::post('/forgot-password', [ForgottenPasswordController::class, 'store'])->name('password.email');
Route::get('/reset-password/{token}', [ResetPasswordController::class, 'index'])->name('password.reset');
Route::post('/reset-password', [ResetPasswordController::class, 'store'])->middleware('guest')->name('password.update');


// General routes
Route::get('/', [HomeController::class, 'index'])->name('home');

// Tenant routes
Route::get('/tenant-home', [TenantController::class, 'index'])->name('tenant.home');
Route::get('/book-appointment', [TenantAptController::class, 'index'])->name('tenant.bookapt');

// Landlord routes
Route::get('/landlord-home', [TenantController::class, 'index'])->name('landlord.home');
Route::get('/application', [ApplicationController::class, 'index'])->name('tenant.application');
Route::get('/start-application', [ApplicationController::class, 'create'])->name('tenant.start-application');
Route::post('/start-application', [ApplicationController::class, 'store']);
Route::post('/tenant-upload', [FileController::class, 'store'])->name('tenant.upload');

// Landlord routes
Route::get('/landlord-home', [LandlordController::class, 'index'])-> name('landlord.home');
Route::get('/landlord-properties', function() {
    return view('landlord.landlord-properties');
});

// Admin routes
Route::get('/admin-home', [AdminController::class, 'index'])->name('admin.home');
Route::get('/convert-user', [UserConvertController::class, 'index'])->name('admin.convert-user');
Route::put('/convert-user', [UserConvertController::class, 'update']);
Route::get('/admin-tenant-list', function() {
    return view('admin.admin-tenant-list');
});
Route::get('/admin-tenant-application/{id}', function($id) {
    return view('admin.admin-tenant-application', ['id' => $id]);
});
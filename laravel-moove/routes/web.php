<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Tenant\TenantController;
use Illuminate\Support\Facades\Route;

// Auth routes
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LogoutController::class, 'store'])->name('logout');

// General routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/tenantList', function () {
    return view('admin.admin-tenant-list');
});

// Tenant routes
Route::get('/tenant-home', [TenantController::class, 'index'])->name('tenant-home');

// Admin routes
Route::get('/admin-tenant-list', function() {
    return view('admin.admin-tenant-list');
});
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        if (auth()->user()) {
            if (auth()->user()->role === 'TENANT') {
                return view('tenant.tenant-home');
            } else if (auth()->user()->role === 'ADMIN') {
                return view('admin.admin-home', ['users' => User::all()]);
            }
        } else {
            return view('home');
        }
    }
}

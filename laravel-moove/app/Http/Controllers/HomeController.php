<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        if (auth()->user()) {
            if (auth()->user()->role === 'TENANT') {
                return redirect()->route('tenant.home');
            } else if (auth()->user()->role === 'ADMIN') {
                return redirect()->route('admin.home');
            }
        }

        return view('home');
    }
}
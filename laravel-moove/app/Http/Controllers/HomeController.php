<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
        if (auth()->user()) {
            if (auth()->user()->role === 'TENANT') {
                return view('tenant.tenant-home');
            } else if (auth()->user()->role === 'ADMIN') {
                return view('admin.admin-home');
            } else if (auth()->user()->role === 'LANDLORD') {
                return view('landlord.landlord-home');
            } 
        } else {
            return view('home');
        }
    }
}
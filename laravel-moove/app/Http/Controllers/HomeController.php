<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use JavaScript;

class HomeController extends Controller
{
    public function index() {
        if (auth()->user()) {
            if (auth()->user()->role === 'TENANT') {
                return view('tenant.tenant-home');
            } else if (auth()->user()->role === 'ADMIN') {
                return view('admin.admin-home');
            } else if (auth()->user()->role === 'LANDLORD') {
                JavaScript::put([
                    'name' => auth()->user()->name
                ]);
                return view('landlord.landlord-home');
            } 
        } else {
            return view('home');
        }
    }
}
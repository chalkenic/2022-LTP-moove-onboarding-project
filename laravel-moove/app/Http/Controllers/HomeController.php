<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;
use JavaScript;

class HomeController extends Controller
{
    public function index() {
        if (auth()->user()) {
            if (auth()->user()->role === 'TENANT') {
                return redirect()->route('tenant.home');
            } else if (auth()->user()->role === 'ADMIN') {
                return redirect()->route('admin.home');
            } else if (auth()->user()->role === 'LANDLORD') {
                return redirect()->route('landlord.home');
            } 
        } else {
            return redirect()->route('login');
            }
        }
    }
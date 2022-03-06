<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['tenant']);
    }

    public function index(Request $request) {
        return view('tenant.application');
    }
}
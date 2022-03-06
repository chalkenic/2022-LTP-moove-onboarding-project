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

    /**
     * Show the application
     */
    public function index(Request $request) {
        return view('tenant.application');
    }

    /**
     * Show the application creation form
     */
    public function create(Request $request) {
        if (auth()->user()->application) {
            return redirect('/application');
        }
        return view('tenant.start-application');
    }

    /**
     * Intialise an application and bind it to
     * the logged in tenant
     */
    public function store(Request $request) {
        if (auth()->user()->application) {
            return redirect('/application');
        }
        auth()->user()->application()->create();

        return view('tenant.application');
    }
}
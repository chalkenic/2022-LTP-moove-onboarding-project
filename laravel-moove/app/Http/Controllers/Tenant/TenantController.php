<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    public function __construct()
    {
        $this->middleware(['tenant']);
    }

    public function index() {
        return view(
            'tenant.tenant-home', [
                'hasStartedApplication' => auth()->user()->application !== null
        ]);
    }
}
<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TenantViewApplController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index() {
        return view('tenant.tenant-view-appl');
    }
}
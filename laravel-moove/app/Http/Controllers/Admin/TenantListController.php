<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;

class TenantListController extends Controller
{

    public function __construct()
    {
        $this->middleware(['admin']);
    }

    public function tenantList() {
        $tenants = User::where(['role' => 'TENANT'])->get();
        return view('admin.admin-tenant-list', ['tenants' => $tenants]);
    }

}

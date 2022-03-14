<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\User;
use Illuminate\Http\Request;

class AdminApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['admin']);   
    }

    public function index() {
        // TODO: investigate paginating with React
        $applicants = json_encode(User::whereRelation('application', 'is_approved', 0)->get());

        return view('admin.admin-tenant-list', [
            'applicants' => $applicants
        ]);
    }
}
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserConvertController extends Controller
{
    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-convert-users');
    }
}

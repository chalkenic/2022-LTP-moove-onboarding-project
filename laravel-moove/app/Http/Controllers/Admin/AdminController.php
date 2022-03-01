<?php

namespace App\Http\Controllers\Admin;

class AdminController extends Controller
{

    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-home');
    }

    // Put this in UserConvertController
    public function setRole($id, $role) {
        // User::where(['id' => $id])->update(['role' => $role]);
        return redirect('/');
    }

}

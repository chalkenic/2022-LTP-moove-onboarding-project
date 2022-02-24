<?php

namespace App\Http\Controllers;

use App\Models\User;

class AdminController extends Controller
{

    public function __construct() {
        if (auth()->user()) {
            if (auth()->user()->role != 'ADMIN') {
                return view('home');
            }
        }
        return view('home');
    }

    public function index() {
        return view('admin.admin-home', ['users' => User::all()]);
    }

    public function setRole($id, $role) {
        User::where(['id' => $id])->update(['role' => $role]);
        return redirect('/');
    }

}

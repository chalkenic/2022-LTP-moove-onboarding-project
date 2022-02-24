<?php

namespace App\Http\Controllers;

use App\Models\User;

class AdminController extends Controller
{

    public function setRole($id, $role) {
        if (auth()->user()) {
            if(auth()->user()->role === 'ADMIN') {
                User::where(['id' => $id])->update(['role' => $role]);
                return redirect('/');
            } else {
                return view('home');
            }
        } else {
            return view('home');
        }
    }

}

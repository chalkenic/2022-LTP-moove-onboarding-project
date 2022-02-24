<?php

namespace App\Http\Controllers;

use App\Models\User;

class AdminController extends Controller
{

    public function setAdmin($id) {
        if (auth()->user()) {
            if(auth()->user()->role === 'ADMIN') {
                User::where(['id' => $id])->update(['role' => 'ADMIN']);
                return redirect('/');
            } else {
                return view('home');
            }
        } else {
            return view('home');
        }
    }

}

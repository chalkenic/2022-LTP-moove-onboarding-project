<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserConvertController extends Controller
{
    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-convert-user');
    }

    public function update(Request $request) {
        $request->validate([
            'email' => 'required'
        ]);

        if (User::where('email', $request->email)->exists()) {
            // TODO: Once applications are modelled,
            // check that the user doesn't have any
            // active.
            // Doesn't check if the user is already admin;
            // is this a big deal? Not sure.
            User::where('email', $request->email)->first()->update(
                [
                    'role' => 'ADMIN'
                ]
                );
            
            return view('admin.admin-convert-user', [
                'success' => 'Successfully converted user'
            ]);
        } else {
            return back()->withErrors([
                'email' => 'Couldn\'t find a user with that email'
            ]);
        }
    }
}
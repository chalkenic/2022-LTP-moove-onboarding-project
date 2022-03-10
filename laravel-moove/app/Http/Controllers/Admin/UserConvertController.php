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
        // Swap the 2 below to use strict moove email validation
        // $emailValidation = 'required|regex:/(.*)moove\.to$/i';
        $emailValidation = 'required';

        $request->validate([
            'email' => $emailValidation
        ]);

        $userToConvert = User::where('email', $request->email)->first();

        if ($userToConvert) {
            if ($userToConvert->application) {
                if ($userToConvert->application->approved !== 1) {
                    return back()->withErrors([
                        'email' => 'Cannot convert a user with an active application'
                    ]);
                }
            }

            if ($userToConvert->role === 'ADMIN') {
                return back()->withErrors([
                    'email' => 'That user is already an Admin!'
                ]);
            }
            
            $userToConvert->update(
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
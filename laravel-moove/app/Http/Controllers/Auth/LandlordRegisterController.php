<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class LandlordRegisterController extends Controller
{
    public function __construct() {
        $this->middleware(['guest']);
    }

    public function index() {
        return view('auth.forgot-password');
    }

    public function store(Request $request) {
        $request->validate(['email' => 'required|email']);
        
        Password::sendResetLink((
            $request->only('email')
        ));

        return back()->with('status', 'If there is a moove account with that email, we just sent reset instructions to it.');
    }
}
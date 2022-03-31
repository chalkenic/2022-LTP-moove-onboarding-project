<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LandlordRegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest']);
    }

    public function index() {
        return view('auth.landlord-register');
    }

    public function store(Request $request) {
        $this->validate($request, [
            'token' => 'required',
            'name' => 'required|alpha|max:50',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|confirmed'
        ]);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => 'LANDLORD',
            'password' => Hash::make($request->password)
        ]);

        auth()->attempt($request->only('email', 'password'));
        return redirect()->route('landlord.home');
    }
}
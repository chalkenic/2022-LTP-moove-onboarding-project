<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

class AdminInvLandlordController extends Controller
{

    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-invite-landlord');
    }

    public function store(Request $request) {
        $request->validate([
            'title' => 'required|string|max:255',
            'token' => 'required',
        ]);

        if ($request->hasFile('file')) {
            $request->file->store('product', 'public');
            $regToken = new LandlordRegisterToken([
                //"name" => $request->get('name'),
                //"file_path" => $request->file->hashName()
            ]);
            $regToken->save();
        }
        return back()->with('status', 'Email containing a link to sign up as a landlord has been sent to the email specified.');
    }
}
<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\LandlordRegisterToken;
use App\Notifications\MailLandlordInvitation;

class AdminInvLandlordController extends Controller
{

    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-invite-landlord');
    }


    public function sendLandlordInviteNotification($token)
    {
        $this->notify(new MailLandlordInvitation($token));
    }

    public function store(Request $request) {
        $request->validate([
            'email' => 'required|string|max:255',
        ]);

        $randomToken = Str::random(32);

        LandlordRegisterToken::create([
            'email' => $request->email,
            'token' => $randomToken,
        ]);

        sendLandlordInviteNotification($randomToken);
        return back()->with('status', 'Email containing a link to sign up as a landlord has been sent to the email specified.');
    }
}
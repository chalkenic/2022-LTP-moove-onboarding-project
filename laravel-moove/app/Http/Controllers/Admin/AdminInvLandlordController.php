<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\LandlordRegisterToken;
use App\Notifications\MailLandlordInvitation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;

class AdminInvLandlordController extends Controller
{

    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-invite-landlord');
    }


    public function store(Request $request) {
        $this->validate($request, [
            'email' => 'required|string|max:255',
        ]);

        $randomToken = Str::random(32);

        LandlordRegisterToken::create([
            'email' => $request->email,
            'token' => $randomToken,
        ]);

        (new User)->forceFill([
            'name' => 'Landlord',
            'email' => $request->email,
        ])->notify(new MailLandlordInvitation($randomToken));

        return back()->with('status', 'Email containing a link to sign up as a landlord has been sent to the email specified.');
    }
}
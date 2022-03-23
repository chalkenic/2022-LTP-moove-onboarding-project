<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JavaScript;

class LandlordSigningController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index() {

        JavaScript::put([
            'test' => auth()->user()->name
        ]);
        return view('landlord.landlord-sign-tenancy');
    }


    public function store(Request $request)
    {
        $signature = $request->landlordSignature;
        Tenancy::where('user_id', Auth::id())
        ->update(['landlord_signature_blob' => $signature]);

    return view('landlord.landlord-sign-tenancy');

    }

}
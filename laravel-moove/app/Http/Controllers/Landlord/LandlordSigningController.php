<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JavaScript;
use App\Models\Tenancy;
use App\Http\Middleware\Authenticate;

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
        $propertyId = $request->propertyId;
        dd($signature);
        //Tenancy::where('user_id', auth()->user()->id)
        Tenancy::where('property_id', $propertyId)
        ->update(['landlord_signature_blob' => $signature]);

    return view('landlord.landlord-sign-tenancy');
    }

}
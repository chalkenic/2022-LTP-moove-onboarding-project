<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JavaScript;
use App\Models\Tenancy;
use App\Models\Property;
use App\Http\Middleware\Authenticate;
use Session;

class LandlordSigningController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index(Request $request) {
        JavaScript::put([
            'property' => Property::where('id', $request->id)->first(),
        ]);
        return view('landlord.landlord-sign-tenancy');
    }


    public function store(Request $request)
    {
        $signature = $request->landlordSignature;
        $propertyId = $request->propertyId;
        //Tenancy::where('user_id', auth()->user()->id)

    
            Tenancy::where('property_id', $propertyId)
            ->update(['landlord_signature_blob' => $signature]);
        
        return redirect()->back()->withSuccess('IT WORKS!');
    }

}
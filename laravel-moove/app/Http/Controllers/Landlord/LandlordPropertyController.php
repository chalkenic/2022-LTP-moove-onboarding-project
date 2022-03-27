<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use App\Models\Tenancy;
use App\Models\User;
use JavaScript;

class LandlordPropertyController extends Controller
{

    public function __construct()
    {
        $this->middleware(['landlord']);
    }


    public function index()
    {
        JavaScript::put([
            'properties' => Property::where('user_id', auth()->user()->id)->get(),

        ]);


        return view('landlord.landlord-properties');
    }

    public function store(Request $request) {

        $this->validate($request, [
            'name'=> 'required', 
            'location'=>'required',
            'status' => 'required']);
        
        Property::create([
            'user_id'=>$request->user()->id,
            'name'=> $request->name,
            'location'=> $request->location,
            'status' => $request->status,
            'verified'=> false
        ]);

        return back();
    }

    public function show($id){
        // COnfirm property exists within database.
        if(Property::where('id', $id)->exists()) { 
            
            //Find all tenants that have tenancies associated with property.
            $tenants = User::whereRelation('tenancy', 'property_id', $id)->get();

            // Send array of tenant objects back to page as JSON array.
            return response()->json(
                [
                    'tenants' => $tenants
                ],
                200
            );

        } 
    }
}


    

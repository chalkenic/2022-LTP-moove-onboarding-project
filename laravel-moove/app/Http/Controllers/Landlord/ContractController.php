<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Facades\DB;
use App\Models\Property;
use App\Models\Contract;

class ContractController extends Controller
{
    public function __construct()
    {
        $this->middleware(['landlord']);
    }

    public function show($id) {



            $contract = Contract::where('property_id', $id)->get();
            $property = Property::where('id', $id)->get();

        return view('landlord.landlord-show-contract',                
            [
                'property' => $property,
                'contract' => $contract,
            ]);
            

        // if(Property::where('id')->exists()) {

        // $property = Property::where( 'id', $prop->id)->get();
        // return view('landlord.landlord-create-contract',                
        //     [swc?
        //     ]);
    
        // }
    }

    public function open($id) {
        

        if(Contract::where('property_id', $id)->exists()) { 

        $contract = Contract::where('property_id', $id)->first();

            // return response()->json([
            //     'status'=>200,
            //     'message'=>`contract exists! `.$contract,
                            
            // ]);

            return response()->json(
            [
                'contract' => $contract,
                ],
            );
    
        }
    }

    public function index($id) {

        $property = Property::where('id', $id)->first();


        return view('landlord.landlord-create-contract',                
            [
                'property' => $property,
            ]);

    }

}

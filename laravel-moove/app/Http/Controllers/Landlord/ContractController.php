<?php

namespace App\Http\Controllers\Landlord;

use Illuminate\Http\Request;

class ContractController extends Controller
{
    public function __construct()
    {
        $this->middleware(['landlord']);
    }

    public function index($id) {

        if(Property::where('id', $id)->exists()) {

        $property = Property::where( 'id', $id)->get();
        return view('landlord.landlord-create-contract',                
            [
                'property' => $property
            ]);
    
        }
    }

    public function contract($id) {

        if(Contract::where('id', $id)->exists()) { 

        $contract = Contract::whereRelation('id', 'contract_id', $id)->get();

            return response()->json([
                'status'=>200,
                'message'=>`contract exists! `.$contract,
                            
            ]);
    
        } else {
                            
            return response()->json([
                'status'=>200,
                'message'=>`no contract found`.$id,
            ]);
        }
    }
}
<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use App\Models\Contract;
use App\Models\User;
use App\Models\ContractDetail;

class ContractController extends Controller
{
    public function __construct()
    {
        $this->middleware(['landlord']);
    }

    public function index($id) {

        if (Contract::where('property_id', $id)->exists()) {

            $contract = Contract::where('property_id', $id)->first();
            $property = Property::where('id', $id)->first();
            $details = ContractDetail::where('contract_id', $contract->id)->get();
            $landlord = User::where('id', $property->user_id)->first();

                    return view('landlord.landlord-contracts',                
            [
                'property' => $property,
                'contract' => $contract,
                'details' => $details,
                'landlord' => $landlord
            ]);

        } else {

        $property = Property::where('id', $id)->first();
        $landlord = User::where('id', $property->user_id)->first();



        return view('landlord.landlord-contracts',                
            [
                'property' => $property,
                'landlord'=> $landlord,
            ]);
        }
    }

    public function show(Contract $contract) {      

        return response()->json(
            [
            'contract' => $contract,
            ],
            $contract ? 200 : 404
        );  
    }

    public function store(Request $request) {

        $this->validate($request, [
            'property_id'=> 'required', 
            'sections'=> 'required'
        ]);

        $propId = $request->property_id;
        $propName = $request->property_name;
        $contract = Contract::create([
            'property_id'=>$propId,
            'landlord-signed'=> false,
            'tenant-signed'=> false,
        ]);

        foreach($request->sections as $key =>$val) {
            $contract->section()->create([
                'header' => $val['header'] ?? '',
                'title' => $val['title'] ?? '',
                'value' => $val['value'],
                'accepted'=> 0
            ]);

        };
    }
}

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

    public function show($id) {



            $contract = Contract::where('property_id', $id)->get();
            $property = Property::where('id', $id)->get();

        return view('landlord.landlord-show-contract',                
            [
                'property' => $property,
                'contract' => $contract,
            ]);
    }

    public function open($id) {
        

        if(Contract::where('property_id', $id)->exists()) { 

        $contract = Contract::where('property_id', $id)->first();

            return response()->json(
            [
                'contract' => $contract,
                ],
            );
    
        }
    }

    public function index($id) {

        $property = Property::where('id', $id)->first();
        $landlord = User::where('id', $property->user_id)->first();



        return view('landlord.landlord-create-contract',                
            [
                'property' => $property,
                'landlord'=> $landlord,
            ]);

    }

    public function store(Request $request) {

                $this->validate($request, [
            'property_id'=> 'required', 
        'sections'=> 'required']);

        $propId = $request->property_id;
        $propName = $request->property_name;
        Contract::create([
            
            'property_id'=>$propId,
            'landlord-signed'=> false,
            'tenant-signed'=> false,
            'user_id'=>$request->user()->id,
        ]);

        $sections = array($request->sections);
        $contract_id= Contract::query()->latest()->first()->id;
        $data = array();

        echo `${contract_id}`;

        foreach($request->sections as $key =>$val) {
            ContractDetail::create([
                'contract_id' => $contract_id, 
                'header' => $val['header'] ?? '',
                'title' => $val['title'] ?? '',
                'value' => $val['value'],
                'accepted'=> 0
            ]);

        };


    }

}

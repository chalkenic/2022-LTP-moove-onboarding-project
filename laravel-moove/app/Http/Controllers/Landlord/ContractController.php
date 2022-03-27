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
        Contract::create([
            
            'property_id'=>$propId,
            'landlord-signed'=> false,
            'tenant-signed'=> false,
            'user_id'=>$request->user()->id,
        ]);

        $contract = Contract::query()->latest()->first()->id;
        $contract_details_insert_array = array();
        foreach($request->sections as $key=>$val)
        {
            $contract_details_insert_array[]=array(
                'contract_id' => $val[$contract], 
                'header'=>$val[$request->sections->header], 
                'title'=>$val[$request->sections->title], 
                'content'=>$val[$request->sections->content],
                'accepted'=>$val[false] );
        }

        ContractDetail::insert($contract_details_insert_array);

        return back();


    }

}

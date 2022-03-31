<?php


namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use App\Models\Contract;
use App\Models\User;
use App\Models\ContractDetail;

class TenantContractController extends Controller
{
        public function __construct()
    {
        $this->middleware(['tenant']);
    }

    public function index(Property $property) {

        if ($property->exists()) {

            
            $contract = Contract::where('property_id', $property->id)->first();
            $property = Property::where('id', $property->id)->first();
            $details = ContractDetail::where('contract_id', $contract->id)->get();
            $landlord = User::where('id', $property->user_id)->first();


            $data = [
                "property" => $property,
                "contract" => $contract,
                "details" => $details,
                "landlord" => $landlord,

                'requestRoute' => route('tenant.update-contract'),
                'redirectRoute' => route('tenant.tenant-contract', ['property' => $property])
            ];

                return view('tenant.tenant-contract', [
                'data' => json_encode($data),
            ]);

        }

            
    }

    public function update(Request $request) {

        $this->validate($request, [
            'id'=> 'required', 
            'sections'=> 'required'
        ]);

        $contract = Contract::where('property_id', $request->input('id'))->first();
        

        foreach($request->sections as $key =>$val) {

                $details = ContractDetail::where('id', $val['id'])->first();

                if ($details->exists()) {
                    $details->update(['accepted' => $val['accepted']]);
            
            };

        };

    }





    
}
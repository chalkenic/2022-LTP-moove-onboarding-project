<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use JavaScript;
use App\Models\User;

use App\Models\Property;
use App\Models\Tenancy;

class TenantViewApplController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index() {
        try{
            $ownPropertyId = Tenancy::where('user_id',Auth::id())->first()->property_id;
            $tenantsContracts = Tenancy::where('property_id',$ownPropertyId)->get();
            $tableData = [];
            foreach ($tenantsContracts as $contract)
            {
                $tableData[] = [
                    'id' => $contract->id,
                    'name' => User::where('id', $contract->user_id)->name,
                    'status' => ,
                    'date' => 
                ];
            }
            JavaScript::put([
                'property' => Property::where('id', $ownPropertyId)->first(),
                'tenants' => $tenantsContracts
            ]);
        }
        catch (\Throwable $e){
            JavaScript::put([
                'noTenancy' => true,
                'errorMsg' => $e->getMessage()
            ]);
        }

        return view('tenant.tenant-view-appl');
    }

    public function fellowtenants($id){
        if(Property::where('id', $id)->exists()) { 
            $tenants = User::whereRelation('tenancy', 'property_id', $id)->get();
            return response()->json(
                [
                    'fellowtenants' => $tenants
                ],
                200
            );

        } else {
            return response()->json([
                'status'=>200,
                'message'=>`no housemates at property of ID `.$id,            
            ]);
        }
    }
}
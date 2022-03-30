<?php

namespace App\Http\Controllers\Tenant;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use App\Models\Tenancy;
use App\Models\User;
use App\models\Contract;
use JavaScript;

class TenantPropertyController extends Controller
{

    public function __construct()
    {
        $this->middleware(['tenant']);
    }

        public function index()
    {

        $property = Property::whereRelation('tenancies', 'user_id',  auth()->user()->id)->first();
        $tenants = User::whereRelation('tenancy', 'property_id', $property->id)->get();

        



        return view('tenant.tenant-property', [

                'property' => $property,
                'tenants'=> $tenants,
        ]);
    }
}

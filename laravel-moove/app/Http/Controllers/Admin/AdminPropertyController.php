<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Facades\DB;
use App\Models\Property;
use App\Models\Tenancy;
use App\Models\User;
use JavaScript;

class AdminPropertyController extends Controller
{
       public function __construct()
    {
        $this->middleware(['admin']);
    }


    public function index()
    {




    $properties = Property::get();

        $tenancies = json_encode(Property::join('tenancies', 'tenancies.property_id', '=', 'properties.id')
    ->join('users', 'tenancies.user_id', '=', 'users.id')->get(['tenancies.property_id','users.id', 'users.name', 'users.email']));


        return view('admin.admin-all-properties', ['properties' => $properties, 'tenancies'=> $tenancies]);
    }
}

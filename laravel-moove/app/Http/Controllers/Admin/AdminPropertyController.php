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

        $properties = json_encode(Property::all());


        return view('admin.admin-all-properties', ['properties' => $properties]);
    }
}

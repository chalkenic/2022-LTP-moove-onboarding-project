<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JavaScript;

class LandlordController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index() {

        JavaScript::put([
            'test' => auth()->user()->name
        ]);
        return view('landlord.landlord-home');
    }

    public function tenantList() {

        JavaScript::put([
            'test' => auth()->user()->name
        ]);
        return view('landlord.landlord-tenant-list');
    }

    public function tenantApplication() {

        JavaScript::put([
            'test' => auth()->user()->name
        ]);
        return view('landlord.landlord-tenant-application');
    }
}
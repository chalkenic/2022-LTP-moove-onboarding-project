<?php

namespace App\Http\Controllers;

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

}
<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Property;
use JavaScript;

class PropertyController extends Controller
{
    public function index()
    {


        JavaScript::put([
            'properties' => Property::where('user_id', auth()->user()->id)->get(),

        ]);


        return view('landlord.landlord-properties');
    }

    public function store(Request $request) {

        $this->validate($request, [
            'name'=> 'required', 
            'location'=>'required']);
        
        $request->user()->properties()->create([
            'landlord_id'=>auth()-id(),
            'name'=> $request->name,
            'location'=> $request->location
        ]);

        

    }
 

    
}

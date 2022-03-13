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
        // $properties = Property::get();

        JavaScript::put([
            'properties' => Property::get()
        ]);

        // $properties = Property::all()->toJson();

        return view('landlord.landlord-properties');
    }

    public function store(Request $request) {

        $this->validate($request, [
            'name'=> 'required', 
            'location'=>'required']);

        // auth()->user()->properties()->create();

        // Post::create([
        //     'landlord_id'=> auth()->id(),
        //     'name' => $request->name
        // ]);
        
        $request->user()->properties()->create([
            'landlord_id'=>auth()-id(),
            'name'=> $request->name,
            'location'=> $request->location
        ]);

        

    }
 

    
}

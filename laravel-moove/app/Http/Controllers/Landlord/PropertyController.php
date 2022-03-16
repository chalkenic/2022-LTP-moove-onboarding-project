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

    public function tenantList($id){
        $tenants = Tenants::where('user_id','=',function($query) {
                $query->from('tenancies')
                    ->select('*')
                    ->where('property_id','=',$id);
            })
            ->get();

            if ($tenants) 
            {
                return response()->json([
                    'status'=> 200,
                    'tenants'=>$tenants
                ]);
            } else {
                return response()->json([
                    'status'=>404,
                    'message'=> 'No Tenants found',
                ]);
            }
    }
    
 

    
}

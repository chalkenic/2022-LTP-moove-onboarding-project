<?php

namespace App\Http\Controllers\Landlord;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Facades\DB;
use App\Models\Property;
use App\Models\Tenancy;
use App\Models\User;
use JavaScript;

class PropertyController extends Controller
{

    public function __construct()
    {
        $this->middleware(['landlord']);
    }


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

    public function tenants($id){
        if(Property::where('id', $id)->exists()) { 
            

            // $tenants = User::addSelect(['id'=> function($query) use ($id) {
            //     $query->select('*')
            //     ->from('tenancies')
            //     ->where('property_id', $id);
            // }])->get();

            $tenants = User::whereRelation('tenancy', 'property_id', $id)->get();

            // $data = DB::table('user')
            // ->select("users.*",
            // DB::raw("SELECT * FROM tenancies
            // WHERE tenancy.property_id = $id"))->get();



            // $tenants = User::find('*')->with('id', function($query) use ($id) {
            //     $query->from('tenancies')
            //     ->select('*')
            //     ->where('property_id', '=', $id);
            // })->get();

            return response()->json(
                [
                    'tenants' => $tenants
                ],
                200
            );
            // return response()->json([
            //     'status' => 200,
            //     'message' => json_encode($tenants),
                            
            // ]);
        } else {
            return response()->json([
                'status'=>200,
                'message'=>`We found yer tenants mun`.$id,
                            
            ]);
        }
    }
}


        
            
            
                // return response()->json([
                // 'status'=>200,
                // 'message'=>`We found yer tenants mun`.$id,
        
        
    
           
                            //     return response()->json([
            //         'status'=>404,
            //         'message'=> 'No Tenants found',
            //     ]);

            
                            
    
    
        // $propertyId = $request->input('id');



        // if (Tenancy::where('property_id', $id)-> exists()) {




        // $tenants = Tenants::where('user_id','=',function($query) {
        //         $query->from('tenancies')
        //             ->select('*')
        //             ->where('property_id','=',$propertyId);
        //     })
        //     ->get();

            // if ($tenants) 
            // {
            //     return response()->json([
            //         'status'=> 200,
            //         'tenants'=>$tenants
            //     ]);
            // } else {
            //     return response()->json([
            //         'status'=>404,
            //         'message'=> 'No Tenants found',
            //     ]);
            // }
    
    
 

    

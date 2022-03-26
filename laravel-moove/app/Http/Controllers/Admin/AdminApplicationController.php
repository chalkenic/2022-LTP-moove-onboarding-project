<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['admin']);   
    }

    public function index() {
        // TODO: investigate paginating with React
        $applicants = json_encode(User::whereRelation('application', 'is_approved', 0)->get());

        return view('admin.admin-tenant-list', [
            'applicants' => $applicants
        ]);
    }

    public function show(User $user) {
        if ($user->application->exists()) {
            $data = [
                'tenant' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
                'files' => $user->application->files,
                'requestRoute' => route('admin.change-application'),
                'deleteRoute' => route('admin.delete-application', ['application' => $user->application->id]),
                'redirectRoute' => route('admin-tenant-list')
            ];
            return view('admin.admin-tenant-application', [
                'data' => json_encode($data),
            ]);
        } else {
            return view('admin.admin-tenant-application')->withErrors([
                'user' => 'Oops! Something went wrong looking for a user with ID '.$user->id.'.'
            ]);
        }
    }

    public function update(Request $request) {
        $userId = $request->input('id');
        $approved = $request->boolean('approved');

        Application::where('user_id', $userId)->first()->update([
            'is_approved' => $approved ? 1 : 2
        ]);

        session()->flash('status', $approved ? 'Application approved successfully.' : 'Application denied successfully.');
        
        return response()->noContent();
    }


    public function destroy(Application $application) {

        $application->delete();
        session()->flash('status', 'Deleted application');

        return response()->noContent();
    }
}
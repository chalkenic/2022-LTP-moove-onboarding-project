<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\User;
use App\Notifications\ApplicationApproved;
use App\Notifications\ApplicationRejected;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['admin']);   
    }

    public function index() {
        $applicants = User::whereRelation('application', 'is_approved', 0)->paginate(1);

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
        $user = User::firstWhere('id', $request->input('id'));
        $approved = $request->boolean('approved');

        $user->application->update([
            'is_approved' => $approved ? 1 : 2
        ]);

        if ($approved) {
            $user->notify(new ApplicationApproved($user));
        } else {
            $user->notify(new ApplicationRejected($user));
        }

        session()->flash('success', $approved ? 'Application approved successfully.' : 'Application denied successfully.');
        
        return response()->noContent();
    }


    public function destroy(Application $application) {

        $application->delete();
        session()->flash('success', 'Deleted application');

        return response()->noContent();
    }
}
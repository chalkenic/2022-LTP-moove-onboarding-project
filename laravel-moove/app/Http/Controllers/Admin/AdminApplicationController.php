<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\User;
use App\Notifications\ApplicationApproved;
use App\Notifications\ApplicationRejected;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

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
                    'rejected_at' => isset($user->application->rejected_at) ? Carbon::createFromTimeString($user->application->rejected_at)->diffForHumans() : null,
                    'updated_at' => isset($user->application->updated_at) ? Carbon::createFromTimeString($user->application->updated_at)->diffForHumans() : null,
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
            'is_approved' => $approved ? 1 : 2,
            'approved_at' => $approved ? Date::now() : null,
            'rejected_at' => !$approved ? Date::now() : null,
        ]);

        if ($request->input('notes')) {
            $user->application->update([
                'notes' => $request->input('notes')
            ]);
        }

        if ($approved) {
            $user->notify(new ApplicationApproved($user));
        } else {
            $user->notify(new ApplicationRejected($user));
        }

        session()->flash('success', $approved ? 'Application approved successfully.' : 'Application rejected successfully.');
        
        return response()->noContent();
    }


    public function destroy(Application $application) {

        $application->delete();
        session()->flash('success', 'Deleted application');

        return response()->noContent();
    }
}
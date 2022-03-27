<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class DeleteTenantApplicationTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * @test
     */
    public function can_delete_application() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->delete(route('admin.delete-application', [
            'application' => $tenant->application->id
        ]));

        $this->assertDatabaseMissing('applications', [
            'user_id' => $tenant->id,
        ]);
    }

    /**
     * @test
     */
    public function cannot_delete_application_when_unauthorised() {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        $this->followingRedirects()->delete(route('admin.delete-application', [
            'application' => $tenant->application->id
        ]))->assertViewIs('auth.login');

        $this->assertDatabaseHas('applications', [
            'user_id' => $tenant->id,
        ]);
    }
}
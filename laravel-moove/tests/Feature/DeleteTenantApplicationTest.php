<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class DeleteTenantApplicationTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * @test
     */
    public function can_delete_application()
    {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->getJson('/admin-delete-application', [
            'id' => $tenant->id,
        ]);

        $this->assertDatabaseHas('applications', [
            'user_id' => $tenant->id,
        ]);


    }
}

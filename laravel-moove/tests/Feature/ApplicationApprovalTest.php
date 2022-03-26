<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class ApplicationApprovalTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function admin_can_approve_application() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->putJson('/admin.change-application', [
            'id' => $tenant->id,
            'approved' => true
        ]);

        // 1 means approved!
        $this->assertEquals(
            1,
            $tenant->application->is_approved
        );
    }

    /**
     * @test
     */
    public function admin_can_deny_application() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->putJson('/admin.change-application', [
            'id' => $tenant->id,
            'approved' => false
        ]);

        // 2 means denied!
        $this->assertEquals(
            2,
            $tenant->application->is_approved
        );
    }
}
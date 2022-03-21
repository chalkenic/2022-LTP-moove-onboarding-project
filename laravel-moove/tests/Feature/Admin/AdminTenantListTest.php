<?php

namespace Tests\Feature\Admin;

use App\Models\Application;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class AdminTenantListTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function admin_can_see_tenant_list() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        Auth::login($admin);

        $response = $this->get('/admin-tenants');
        $response->assertStatus(200)
            ->assertViewIs('admin.admin-tenant-list');
    }

    /**
     * @test
     */
    public function tenant_cannot_see_tenant_list()
    {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);

        $response = $this->get('/admin-tenants');
        $response->assertStatus(302);
    }


}

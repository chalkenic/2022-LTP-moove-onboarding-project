<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function guest_sees_home_page()
    {
        $response = $this->get('/');

        $response->assertStatus(200)
            ->assertViewIs('home');
    }

    /**
     * @test
     */
    public function tenant_sees_tenant_dashboard() {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);
        
        $response = $this->followingRedirects()->get('/');
        $response->assertStatus(200)
            ->assertViewIs('tenant.tenant-home');
    }

    /**
     * @test
     */
    public function admin_sees_admin_dashboard() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        Auth::login($admin);
        
        $response = $this->followingRedirects()->get('/');
        $response->assertStatus(200)
            ->assertViewIs('admin.admin-home');
    }
}
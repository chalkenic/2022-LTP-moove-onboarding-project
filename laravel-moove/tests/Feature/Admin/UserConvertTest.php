<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class UserConvertTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function admin_can_see_convert_user_page()
    {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        Auth::login($admin);

        $response = $this->get('/convert-user');
        $response->assertStatus(200)
            ->assertViewIs('admin.admin-convert-user');
    }

    /**
     * @test
     */
    public function tenant_cannot_see_convert_user_page()
    {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);

        $response = $this->get('/convert-user');
        $response->assertStatus(302);
    }

    /**
     * @test
     */
    public function admin_can_convert_a_tenant_to_admin()
    {
        // This test needs to be updated once the application
        // process is modelled, to make sure there are no
        // active applications for the tenant before conversion
        
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $userToConvert = User::factory()->create(['role' => 'TENANT']);
        Auth::login($admin);

        $response = $this->put('/convert-user', [
            'email' => $userToConvert->email
        ]);

        $response->assertStatus(200)
            ->assertViewIs('admin.admin-convert-user')
            ->assertSee('Successfully converted user');

    }
}
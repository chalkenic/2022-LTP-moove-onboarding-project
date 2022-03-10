<?php

namespace Tests\Feature\Admin;

use App\Models\Application;
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

    /**
     * @test
     */
    public function cannot_convert_user_with_open_application()
    {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $userToConvert = User::factory()->create(['role' => 'TENANT']);
        $userToConvert->application()->create();
        
        Auth::login($admin);

        $response = $this->put('/convert-user', [
            'email' => $userToConvert->email
        ]);

        $response->assertStatus(302)
            ->assertSessionHasErrors();
            
        $this->assertEquals(
            session('errors')->get('email')[0],
            'Cannot convert a user with an active application'
        );
    }

        /**
     * @test
     */
    public function cannot_convert_user_who_is_already_admin()
    {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $userToConvert = User::factory()->create(['role' => 'ADMIN']);
        
        Auth::login($admin);

        $response = $this->put('/convert-user', [
            'email' => $userToConvert->email
        ]);

        $response->assertStatus(302)
            ->assertSessionHasErrors();
            
        $this->assertEquals(
            session('errors')->get('email')[0],
            'That user is already an Admin!'
        );
    }
}
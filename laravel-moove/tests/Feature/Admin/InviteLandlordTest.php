<?php

namespace Tests\Feature\Admin;

use App\Models\User;
use App\Models\Property;
use App\Models\Tenancy;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class InviteLandlord extends TestCase

{
    use DatabaseMigrations;
    
    /**
     * @test
     */
    public function admin_can_see_invite_landlord_page()
    {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        Auth::login($admin);
        $response = $this->get('/admin-invite-landlord');
        $response->assertStatus(200)
            ->assertViewIs('admin.admin-invite-landlord');
    }
};
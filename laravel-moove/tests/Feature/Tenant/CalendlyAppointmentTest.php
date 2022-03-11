<?php

namespace Tests\Feature\Tenant;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class CalendlyAppoinmentTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function tenant_can_see_appointment_page()
    {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);

        $response = $this->get('/book-appointment');
        $response->assertStatus(200)
            ->assertViewIs('tenant.bookapt');
    }


}
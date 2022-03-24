<?php

namespace Tests\Feature\Tenant;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class CalendlyAppointmentTest extends TestCase
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
            ->assertViewIs('tenant.tenant-bookapt');
    }


}
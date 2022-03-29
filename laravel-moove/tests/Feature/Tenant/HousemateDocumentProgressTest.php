<?php

namespace Tests\Feature\Tenant;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class HousemateDocumentProgressTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function tenant_can_see_tenancy_form_page()
    {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);

        $response = $this->get('/tenancy-appl-progress');
        $response->assertStatus(200)
            ->assertViewIs('tenant.tenant-view-appl');
    }

    public function tenant_can_see_data_loaded_into_page()
    {
    $tenant = User::factory()->create(['role' => 'TENANT']);
    $propertyForTenancy = Property::factory()->create(['name'=> 'real', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);
    $tenancyForTest = Tenancy::factory()->create(['name'=> 'real', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);
    
    Auth::login($tenant);
        $response = $this->get('/properties');

        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-properties')
            ->assertSee('real')
            ->assertDontSee('fake');
    }


}

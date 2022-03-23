<?php

namespace Tests\Feature\Admin;

use App\Models\Property;
use App\Models\User;
use App\Models\Tenancy;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class PropertiesListTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function admin_can_see_all_properties_page()
    {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        Auth::login($admin);

        $response = $this->get('/admin-all-properties');
        $response->assertStatus(200)
            ->assertViewIs('admin.admin-all-properties');
    }

    /**
     * @test
     */
    public function admin_can_see_added_properties_from_db()
    {
        $admin = User::factory()->create(['role'=>'ADMIN']);
        $landlord1 = User::factory()->create(['role'=>'LANDLORD']);
        $landlord2 = User::factory()->create(['role'=>'LANDLORD']);

        $tenant1 = User::factory()->create(['name'=>'testTenant','role'=>'TENANT']);
        $tenant2 = User::factory()->create(['role'=>'TENANT']);
        $tenant3 = User::factory()->create(['role'=>'TENANT']);

        $property1 = Property::factory()->create(['name'=> 'prop1', 'user_id' => '1', 'status'=> 'occupied']);
        $property2 = Property::factory()->create(['name'=> 'prop2', 'user_id' => '2', 'status'=> 'occupied']);
        $property3 = Property::factory()->create(['name'=> 'prop3', 'user_id' => '2', ]);

        $tenancy1 = Tenancy::factory()->create(['property_id'=> '1','user_id' => '3', 'is_active'=> '1' ]);
        $tenancy2 = Tenancy::factory()->create(['property_id'=> '1','user_id' => '3', 'is_active'=> '1' ]);
        $tenancy3 = Tenancy::factory()->create(['property_id'=> '1','user_id' => '3', 'is_active'=> '1' ]);

        Auth::login($admin);

        $response = $this->get('/admin-all-properties');
        $response->assertStatus(200)
            ->assertSee('prop1')
            ->assertSee('prop3')
            ->assertDontSee('testTenant');

    }
}

<?php

namespace Tests\Feature\Landlord;

use App\Models\User;
use App\Models\Property;
use App\Models\Tenancy;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class PropertyTest extends TestCase

{
    use DatabaseMigrations;
    
    /**
     * @test
     */
    public function landlord_can_see_properties_page()
    {
        $landlord = User::factory()->create(['role' => 'LANDLORD']);
        Auth::login($landlord);

        $response = $this->get('/properties');
        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-properties');
    }

        /**
     * @test
     */
    public function tenant_cannot_see_properties_page()
    {
        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);

        $response = $this->get('/properties');
        $response->assertStatus(302);
    }

        /**
     * @test
     */
    public function landlord_can_see_properties_they_have_assigned()
    {
        
        $landlord = User::factory()->create(['role' => 'LANDLORD']);
        $property = Property::factory()->create(['name'=> 'testProp', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);
        Auth::login($landlord);

        $response = $this->get('/properties');

        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-properties')
            ->assertSee('testProp')
            ->assertSee('testLocation');

    }

            /**
     * @test
     */
    public function landlord_cannot_see_properties_not_assigned_to_them()
    {
        
        $landlord = User::factory()->create(['role' => 'LANDLORD']);
         $propertyOwned = Property::factory()->create(['name'=> 'real', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);

         // Fake landlord & property created to confirm existance in database.
        $fakeLandlord = User::factory()->create(['role' => 'LANDLORD']);
        $fakeProperty = Property::factory()->create(['name'=> 'fake', 'user_id' => '2', 'location' => 'testLocation', 'status'=> 'occupied']);

        Auth::login($landlord);

        $response = $this->get('/properties');
        // Confirm landlord can see their own property while assert they cannot see fake landlord's property.
        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-properties')
            ->assertSee('ownedProp')
            ->assertDontSee('unownedProp');

    }
}

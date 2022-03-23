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

class LandlordSignatureTest extends TestCase

{
    use DatabaseMigrations;
    
    /**
     * @test
     */
    public function landlord_can_see_signature_page()
    {
        $landlord = User::factory()->create(['role' => 'LANDLORD']);
        $property = Property::factory()->create(['name'=> 'testProperty', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);
        Auth::login($landlord);

        $response = $this->get('/landlord-sign-tenancy/1');

        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-sign-tenancy')
            ->assertSee('Open Signature Pad')
    }
}
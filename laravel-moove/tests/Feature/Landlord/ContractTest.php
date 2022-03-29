<?php

namespace Tests\Feature\Landlord;

use App\Models\User;
use App\Models\Property;
use App\Models\Tenancy;
use App\Models\Contract;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class ContractTest extends TestCase

{
    use DatabaseMigrations;
    
    /**
     * Landlord table is not passed into HTML page if a contract already exists, so test confirms whether user is redirected to page properly.
     * @test
     */
    public function landlord_will_see_contract_create_page_if_none_exists()
    {
        $landlord = User::factory()->create(['name'=>'tester', 'role' => 'LANDLORD']);
        $property = Property::factory()->create(['name'=> 'testProp', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);
        Auth::login($landlord);

        $response = $this->get('/contract/1');
        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-contracts')
            ->assertSee('tester')
            ->assertDontSee('property_id');
    }

    /**
     * Landlord table is not passed into HTML page if a contract already exists, so test confirms whether user is not shown landlord data.
     * @test
     */
    public function landlord_will_not_see_contract_create_page_if_contract_exists()
    {
        $landlord = User::factory()->create(['name'=>'tester', 'role' => 'LANDLORD']);
        $property = Property::factory()->create(['name'=> 'testProp', 'user_id' => '1', 'location' => 'testLocation', 'status'=> 'occupied']);
        $contract = Contract::factory()->create([ 'property_id' => '1', 'landlord_signed' => 1, 'tenant_signed'=> 1]);
        Auth::login($landlord);

        $response = $this->get('/contract/1');
        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-contracts')
            ->assertSee('property_id');
    }

}

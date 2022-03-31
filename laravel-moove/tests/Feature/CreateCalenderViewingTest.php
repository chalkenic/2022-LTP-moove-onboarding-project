<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class CreateCalenderViewingTest extends TestCase
{

    use DatabaseMigrations;
    
    /**
     * @test
     */
    public function show_calender_viewing_page()
    {
        $landlord = User::factory()->create(['role' => 'LANDLORD']);
        
        Auth::login($landlord);

        $response = $this->get('/landlord-calender');

        $response->assertStatus(200)
            ->assertViewIs('landlord.landlord-calender');
    }
}

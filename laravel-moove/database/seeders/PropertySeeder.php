<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('properties')->insert([
            'user_id'=> 7,
            'name' => '26 Woodville Road',
            'location' => 'Living in da bay',
            'status' => 'occupied',
            'verified' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('properties')->insert([
            'user_id'=> 7,
            'name' => '63 Court Road',
            'location' => 'Butetown',
            'status' => 'occupied',
            'verified' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('properties')->insert([
            'user_id'=> 7,
            'name' => '69 Nice Avenue',
            'location' => 'Splott',
            'status' => 'occupied',
            'verified' => 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('properties')->insert([
            'user_id'=> 7,
            'name' => 'Abacwys',
            'location' => 'Heath',
            'status' => 'occupied',
            'verified' => 0,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}

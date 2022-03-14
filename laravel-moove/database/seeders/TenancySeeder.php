<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TenancySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('tenancies')->insert([
            'property_id'=> 1,
            'user_id'=> 1,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 1,
            'user_id'=> 4,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 2,
            'user_id'=> 1,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 2,
            'user_id'=> 2,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 3,
            'user_id'=> 2,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 3,
            'user_id'=> 4,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 2,
            'is_active' => 'true',
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 3,
            'is_active' => 'true',
        ]);
    }
}

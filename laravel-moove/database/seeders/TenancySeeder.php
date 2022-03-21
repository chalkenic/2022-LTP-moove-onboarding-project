<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),

        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 1,
            'user_id'=> 4,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 2,
            'user_id'=> 1,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 2,
            'user_id'=> 2,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 3,
            'user_id'=> 2,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 3,
            'user_id'=> 4,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 2,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 3,
            'is_active'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}

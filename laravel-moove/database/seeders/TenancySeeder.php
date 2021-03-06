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
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),

        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 1,
            'user_id'=> 2,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 2,
            'user_id'=> 3,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 2,
            'user_id'=> 4,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 3,
            'user_id'=> 5,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 3,
            'user_id'=> 6,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 7,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 8,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 9,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('tenancies')->insert([
            'property_id'=> 4,
            'user_id'=> 10,
            'status'=> 1,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}

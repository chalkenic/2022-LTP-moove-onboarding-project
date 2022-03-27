<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('applications')->insert([
            'user_id' => 1,
        ]);

        DB::table('applications')->insert([
            'user_id' => 2,
        ]);

        DB::table('applications')->insert([
            'user_id'=> 3
        ]);
    }
}
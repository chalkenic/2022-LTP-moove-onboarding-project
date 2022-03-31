<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContractSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('contracts')->insert([
            'property_id' => 1,
            'landlord_signed' => 0,
            'tenant_signed' => 0,
        ]);
        //
    }
}

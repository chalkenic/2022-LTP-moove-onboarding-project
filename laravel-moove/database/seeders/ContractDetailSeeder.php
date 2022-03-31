<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ContractDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => 'Section 1',
            'title' => 'Title 1',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);

                DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => '',
            'title' => 'Title 2',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);

                DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => '',
            'title' => '',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);
                DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => '',
            'title' => '',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);
                DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => '',
            'title' => '',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);
                DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => 'Section 2',
            'title' => 'Ttitle 1',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);

                        DB::table('contract_details')->insert([
            'contract_id'=> 1,
            'header' => '',
            'title' => 'Title 2',
            'value' => 'some random lorem ipsum text that no-one knows what it means...',
            'accepted'=> 0,
        ]);
    }
}

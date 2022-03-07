<?php

namespace Database\Seeders;

use App\Models\Application;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('files')->insert([
            'filename' => 'supporting_evidence.pdf',
            'url' => 'https://aws-bucket-location.com/supporting_evidence.pdf',
            'application_id' => 1,
        ]);
    }
}
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Terry Tibbs',
            'email' => 'terrytibbs'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        DB::table('users')->insert([
            'name' => 'Mike Johnson',
            'email' => 'mikejohnson'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        DB::table('users')->insert([
            'name' => 'Theresa Thomas',
            'email' => 'theresathomas'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        DB::table('users')->insert([
            'name' => 'Seb Walker',
            'email' => 'seb'.'@gmail.com',
            'role' => 'ADMIN',
            'password' => Hash::make('password'),
        ]);
    }
}
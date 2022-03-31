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

        // Tenants.

        // Tenant -> id 1
        DB::table('users')->insert([
            'name' => 'Terry Tibbs',
            'email' => 'terrytibbs'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 2
        DB::table('users')->insert([
            'name' => 'Luke',
            'email' => 'lukemorcom'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 3
        DB::table('users')->insert([
            'name' => 'Mike Johnson',
            'email' => 'mikejohnson'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 4
        DB::table('users')->insert([
            'name' => 'Theresa Thomas',
            'email' => 'theresathomas'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 5
        DB::table('users')->insert([
            'name' => 'Tony Stark',
            'email' => 'ironman'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 6
        DB::table('users')->insert([
            'name' => 'James Cooper',
            'email' => 'jimmy'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 7
        DB::table('users')->insert([
            'name' => 'James Bond',
            'email' => 'jamesbond'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 8
        DB::table('users')->insert([
            'name' => 'alfred Hitchcock',
            'email' => 'alfred'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 9
        DB::table('users')->insert([
            'name' => 'Bruce Wayne',
            'email' => 'imbatman'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Tenant -> id 10
        DB::table('users')->insert([
            'name' => 'Peter Parker',
            'email' => 'whoknows'.'@gmail.com',
            'role' => 'TENANT',
            'password' => Hash::make('password'),
        ]);

        // Admins.

        // Admin - id-> 11
        DB::table('users')->insert([
            'name' => 'Seb Walker',
            'email' => 'seb'.'@gmail.com',
            'role' => 'ADMIN',
            'password' => Hash::make('password'),
        ]);
        
        // Admin -> id 12
        DB::table('users')->insert([
            'name' => 'Nick white',
            'email' => 'nick'.'@gmail.com',
            'role' => 'ADMIN',
            'password' => Hash::make('password'),
        ]);

        // Landlords

        // Landlord -> id 13
        DB::table('users')->insert([
            'name' => 'Ronan Manning',
            'email' => 'ronan'.'@gmail.com',
            'role' => 'LANDLORD',
            'password' => Hash::make('password'),
        ]);

        // Landlord -> id 14
        DB::table('users')->insert([
            'name' => 'Aaron A Aaronson',
            'email' => 'aaron'.'@gmail.com',
            'role' => 'LANDLORD',
            'password' => Hash::make('password'),
        ]);
        
    }
}
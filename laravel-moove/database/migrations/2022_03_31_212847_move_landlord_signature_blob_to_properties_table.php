<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tenancies', function (Blueprint $table) {
            $table->dropColumn('landlord_signature_blob');
        });

        Schema::table('properties', function (Blueprint $table) {
            $table->text('landlord_signature_blob')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('properties', function (Blueprint $table) {
            $table->dropColumn('landlord_signature_blob');
        });

                Schema::table('tenancies', function (Blueprint $table) {
            $table->text('landlord_signature_blob')->nullable();
        });


    }
};

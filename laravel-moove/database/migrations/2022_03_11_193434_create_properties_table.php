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
        Schema::create('properties', function (Blueprint $table) {
            $table->id(); //Primary key
            $table->foreignId('user_id')->constrained() ->onDelete('cascade');
            $table->text('name');
            $table->text('location');
            $table->text('status');
            $table->string('image', 255)->default('');
            $table->string('moove_url', 255)->default('');
            $table->tinyInteger('verified')->default(0);

            $table->timestamps(); //created_at & updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
};

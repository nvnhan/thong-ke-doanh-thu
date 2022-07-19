<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHoaDon extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mua_vao', function (Blueprint $table) {
            $table->integer('so_hoa_don')->nullable();
        });
        Schema::table('ban_ra', function (Blueprint $table) {
            $table->integer('so_hoa_don')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSettingUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {        
        Schema::table('users', function (Blueprint $table) {
            $table->string('ct_ten', 200)->nullable();
            $table->string('ct_mst', 50)->nullable();
            $table->string('ct_sdt', 20)->nullable();
            $table->string('ct_fax', 20)->nullable();
            $table->string('ct_email', 100)->nullable();
            $table->string('ct_dia_chi', 500)->nullable();

            $table->string('dai_ly', 200)->nullable();
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

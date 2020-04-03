<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThuePhisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thue_phi', function (Blueprint $table) {
            $table->increments('id');
            $table->string('loai_phi', 50);
            $table->decimal('muc_phi', 11, 2);
            $table->string('ghi_chu', 500)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thue_phi');
    }
}

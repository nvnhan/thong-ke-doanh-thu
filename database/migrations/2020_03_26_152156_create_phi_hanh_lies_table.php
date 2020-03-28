<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhiHanhLiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phi_hanh_ly', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hanh_ly', 50);
            $table->decimal('phi', 11, 2)->default(0);
            
            $table->string('ghi_chu', 500)->nullable();
            $table->string('hang_bay', 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phi_hanh_ly');
    }
}

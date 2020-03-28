<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSanBaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('san_bay', function (Blueprint $table) {
            $table->string('ma_san_bay', 10);
            $table->primary('ma_san_bay');
            $table->string('ten_san_bay', 500);
            $table->string('phan_loai', 50)->nullable();
            $table->boolean('loai_a')->default(false)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('san_bay');
    }
}

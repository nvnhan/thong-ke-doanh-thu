<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThuChisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thu_chi', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('ngay_thang')->useCurrent();
            $table->string('hang_muc', 500)->nullable();
            $table->decimal('so_tien', 11, 2)->default(0);
            $table->integer('id_tai_khoan_di')->nullable();
            $table->integer('id_tai_khoan_den')->nullable();
            $table->integer('id_khach_hang')->nullable();
            $table->string('username', 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thu_chi');
    }
}

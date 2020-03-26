<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visa', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('ngay_thang')->useCurrent();
            $table->string('phan_loai', 50)->nullable();
            $table->string('ma_visa', 50);
            $table->string('quoc_gia', 50)->nullable();

            $table->date('ngay_mua')->nullable();
            $table->decimal('gia_mua', 11, 2);
            $table->date('ngay_tra_khach')->nullable();
            $table->decimal('gia_ban', 11, 2);
            
            $table->integer('id_nha_cung_cap')->nullable();
            $table->integer('id_khach_hang')->nullable();
            
            $table->integer('id_tai_khoan')->nullable();
            $table->date('ngay_thanh_toan')->nullable();

            $table->string('ghi_chu', 500)->nullable();
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
        Schema::dropIfExists('visa');
    }
}
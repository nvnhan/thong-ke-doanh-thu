<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour', function (Blueprint $table) {
            $table->increments('id');
            $table->string('phan_loai', 50)->nullable();
            $table->string('ma_tour');
            $table->string('ten_tour');
            $table->date('ngay_thang');
            $table->date('bat_dau')->nullable();
            $table->date('ket_thuc')->nullable();
            $table->decimal('gia_ban', 11, 2);
            $table->integer('so_luong')->default(1);
            $table->integer('id_khach_hang')->unsigned()->nullable();
            $table->date('ngay_thanh_toan')->nullable();
            $table->integer('id_tai_khoan')->unsigned()->nullable();
            $table->boolean('hoan_thanh')->default(false);
            
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
        Schema::dropIfExists('tour');
    }
}

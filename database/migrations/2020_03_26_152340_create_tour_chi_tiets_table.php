<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourChiTietsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_chi_tiet', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_tour')->unsigned();
            $table->integer('id_hang_hoa')->unsigned();
            $table->date('ngay_thang')->useCurrent();
            $table->date('bat_dau')->nullable();
            $table->date('ket_thuc')->nullable();

            $table->decimal('don_gia', 11, 2)->default(0);
            $table->integer('so_luong')->default(1);
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
        Schema::dropIfExists('tour_chi_tiet');
    }
}

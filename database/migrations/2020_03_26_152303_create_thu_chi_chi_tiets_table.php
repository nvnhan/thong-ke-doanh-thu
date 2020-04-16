<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThuChiChiTietsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thu_chi_chi_tiet', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_thu_chi')->unsigned();
            $table->string('loai_doi_tuong', 50)->default('');
            $table->decimal('so_tien', 11, 2)->default(0);
            $table->decimal('so_tien_goc', 11, 2)->nullable();
            $table->integer('id_dat_ve')->unsigned()->nullable();
            $table->integer('id_tour')->unsigned()->nullable();
            $table->integer('id_tour_chi_tiet')->unsigned()->nullable();
            $table->integer('id_mua_vao')->unsigned()->nullable();
            $table->integer('id_ban_ra')->unsigned()->nullable();
            $table->integer('id_visa')->unsigned()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thu_chi_chi_tiet');
    }
}

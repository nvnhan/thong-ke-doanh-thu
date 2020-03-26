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
            $table->bigIncrements('id');
            $table->integer('id_thu_chi');
            $table->string('loai_doi_tuong', 50);
            $table->decimal('so_tien', 11, 2)->default(0);
            $table->decimal('so_tien_goc', 11, 2)->nullable();
            $table->integer('id_dat_ve')->nullable();
            $table->integer('id_tour')->nullable();
            $table->integer('id_tour_chi_tiet')->nullable();
            $table->integer('id_mua_vao')->nullable();
            $table->integer('id_ban_ra')->nullable();
            $table->integer('id_visa')->nullable();
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

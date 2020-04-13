<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAddForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ban_ra', function (Blueprint $table) {
            $table->foreign('id_hang_hoa')->references('id')->on('hang_hoa');
            $table->foreign('id_khach_hang')->references('id')->on('khach_hang')->onDelete('set null');
            $table->foreign('id_tai_khoan_tra_hoan_doi')->references('id')->on('tai_khoan');
        });
        Schema::table('dat_ve', function (Blueprint $table) {
            $table->foreign('id_khach_hang')->references('id')->on('khach_hang');
            $table->foreign('id_tai_khoan_mua')->references('id')->on('tai_khoan');
            $table->foreign('id_phi_hanh_ly')->references('id')->on('phi_hanh_ly');
        });
        Schema::table('hang_hoa', function (Blueprint $table) {
            $table->foreign('id_tai_khoan')->references('id')->on('tai_khoan')->onDelete('cascade');
        });
        Schema::table('mua_vao', function (Blueprint $table) {
            $table->foreign('id_hang_hoa')->references('id')->on('hang_hoa');
        });
        Schema::table('thu_chi', function (Blueprint $table) {
            $table->foreign('id_khach_hang')->references('id')->on('khach_hang');
            $table->foreign('id_tai_khoan_di')->references('id')->on('tai_khoan');
            $table->foreign('id_tai_khoan_den')->references('id')->on('tai_khoan');
        });
        Schema::table('thu_chi_chi_tiet', function (Blueprint $table) {
            $table->foreign('id_thu_chi')->references('id')->on('thu_chi')->onDelete('cascade');
            $table->foreign('id_dat_ve')->references('id')->on('dat_ve')->onDelete('cascade');
            $table->foreign('id_tour')->references('id')->on('tour')->onDelete('cascade');
            $table->foreign('id_tour_chi_tiet')->references('id')->on('tour_chi_tiet')->onDelete('cascade');
            $table->foreign('id_mua_vao')->references('id')->on('mua_vao')->onDelete('cascade');
            $table->foreign('id_ban_ra')->references('id')->on('ban_ra')->onDelete('cascade');
            $table->foreign('id_visa')->references('id')->on('visa')->onDelete('cascade');
        });
        Schema::table('tour', function (Blueprint $table) {
            $table->foreign('id_khach_hang')->references('id')->on('khach_hang');
        });
        Schema::table('tour_chi_tiet', function (Blueprint $table) {
            $table->foreign('id_hang_hoa')->references('id')->on('hang_hoa')->onDelete('cascade');
            $table->foreign('id_tour')->references('id')->on('tour');
        });
        Schema::table('visa', function (Blueprint $table) {
            $table->foreign('id_khach_hang')->references('id')->on('khach_hang');
            $table->foreign('id_nha_cung_cap')->references('id')->on('tai_khoan');
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

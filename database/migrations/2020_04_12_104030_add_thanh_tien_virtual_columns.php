<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThanhTienVirtualColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ban_ra', function (Blueprint $table) {
            $table->decimal('thanh_tien_mua', 11, 2)->virtualAs('so_luong * don_gia_mua');
            $table->decimal('thanh_tien_ban', 11, 2)->virtualAs('so_luong * don_gia_ban');
        });
        Schema::table('mua_vao', function (Blueprint $table) {
            $table->decimal('thanh_tien', 11, 2)->virtualAs('so_luong * don_gia');
        });
        Schema::table('tour_chi_tiet', function (Blueprint $table) {
            $table->decimal('thanh_tien', 11, 2)->virtualAs('so_luong * don_gia');
        });
        Schema::table('tour', function (Blueprint $table) {
            $table->decimal('tong_tien_ban', 11, 2)->virtualAs('so_luong * gia_ban');
        });
        Schema::table('visa', function (Blueprint $table) {
            $table->decimal('lai', 11, 2)->virtualAs('gia_ban - gia_mua');
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

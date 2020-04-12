<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatVesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dat_ve', function (Blueprint $table) {
            $table->increments('id');
            $table->date('ngay_thang')->useCurrent();
            $table->string('ma_giu_cho', 50)->nullable();
            $table->string('so_ve', 50);
            $table->string('hang_bay', 50)->nullable();
            $table->string('ten_khach', 200)->nullable();
            $table->integer('loai_tuoi')->nullable();
            
            $table->dateTime('ngay_gio_di')->nullable();
            $table->dateTime('ngay_gio_ve')->nullable();
            $table->string('cb_di', 50)->nullable();
            $table->string('cb_ve', 50)->nullable();
            $table->string('sb_di', 50)->nullable();
            $table->string('sb_di1', 50)->nullable();
            $table->string('sb_ve', 50)->nullable();
            $table->string('sb_ve1', 50)->nullable();

            $table->decimal('gia_net', 11, 2)->default(0);
            $table->decimal('phi_san_bay', 11, 2)->nullable();
            $table->decimal('phu_phi_san_bay', 11, 2)->nullable();
            $table->decimal('hanh_ly', 11, 2)->nullable();
            $table->integer('id_phi_hanh_ly')->unsigned()->nullable();
            $table->decimal('vat', 11, 2)->nullable();
            $table->decimal('phu_phi', 11, 2)->nullable();
            $table->decimal('hoa_hong', 11, 2)->nullable();
            $table->decimal('tong_tien', 11, 2)->default(0);
            $table->decimal('phi_dich_vu', 11, 2)->nullable();
            $table->decimal('phi_cong_tac_vien', 11, 2)->nullable();
            $table->decimal('tong_tien_thu_khach', 11, 2)->default(0);

            $table->date('ngay_thanh_toan')->nullable();
            $table->integer('id_tai_khoan_mua')->unsigned()->nullable();
            $table->integer('id_khach_hang')->unsigned()->nullable();
            
            $table->dateTime('canh_bao_xuat_ve')->nullable();
            $table->boolean('chua_xuat_ve')->default(false);
            $table->boolean('nhac_lich_bay')->default(false);
            $table->dateTime('ngay_nhac_lich')->nullable();

            $table->string('dinh_danh', 100)->nullable();
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
        Schema::dropIfExists('dat_ve');
    }
}

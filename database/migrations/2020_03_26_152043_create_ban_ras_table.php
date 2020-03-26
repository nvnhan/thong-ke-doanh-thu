<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanRasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ban_ra', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('ngay_thang')->useCurrent();
            $table->integer('id_hang_hoa');
            $table->integer('so_luong')->default(1);
            $table->decimal('don_gia_mua', 11, 2);
            $table->decimal('don_gia_ban', 11, 2);
            $table->integer('id_khach_hang')->nullable();
            $table->date('ngay_thanh_toan')->nullable();
            $table->integer('id_tai_khoan')->nullable();
            $table->date('ngay_hoan_doi')->nullable();
            $table->date('ngay_thanh_toan_hoan_doi')->nullable();
            $table->integer('id_tai_khoan_tra_hoan_doi')->nullable();            
            $table->date('ngay_hoan_doi_xong')->nullable();
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
        Schema::dropIfExists('ban_ra');
    }
}

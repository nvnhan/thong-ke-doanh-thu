<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuaVaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mua_vao', function (Blueprint $table) {
            $table->increments('id');
            $table->date('ngay_thang')->useCurrent();
            $table->integer('id_hang_hoa')->unsigned();
            $table->integer('so_luong')->default(1);

            $table->decimal('don_gia', 11, 2)->default(0);
            $table->date('ngay_thanh_toan')->nullable();
            $table->integer('id_tai_khoan')->unsigned()->nullable();
            
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
        Schema::dropIfExists('mua_vao');
    }
}

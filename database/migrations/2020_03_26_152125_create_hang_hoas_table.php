<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHangHoasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hang_hoa', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_tai_khoan')->unsigned();
            $table->string('ma_hang', 50);
            $table->string('ten_hang', 200);
            $table->string('phan_loai', 50)->default('');
            $table->string('don_vi', 50)->nullable();

            $table->decimal('don_gia', 11, 2)->default(0);
            
            $table->string('ghi_chu', 500)->nullable();
            $table->string('username', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hang_hoa');
    }
}

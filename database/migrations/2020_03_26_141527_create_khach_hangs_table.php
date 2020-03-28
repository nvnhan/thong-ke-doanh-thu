<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKhachHangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khach_hang', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ma_khach_hang', 50);
            $table->string('ho_ten', 500)->default('');
            $table->string('sdt', 50)->nullable();
            $table->string('dia_chi', 500)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('mst', 50)->nullable();
            $table->string('ma_dai_ly', 500)->nullable();
            $table->string('phan_loai', 50)->default('');
            $table->decimal('so_du_ky_truoc', 11, 2)->default(0);
            $table->date('ngay_tao')->useCurrent()->nullable();
            $table->date('ngay_nhac')->nullable();
            $table->decimal('phi_vn', 11, 2)->default(0);
            $table->decimal('phi_vj', 11, 2)->default(0);
            $table->decimal('phi_jets', 11, 2)->default(0);
            $table->decimal('phi_bb', 11, 2)->default(0);
            $table->string('ghi_chu', 500)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('khach_hang');
    }
}

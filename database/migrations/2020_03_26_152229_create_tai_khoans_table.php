<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaiKhoansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tai_khoan', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ky_hieu', 50);
            $table->string('mo_ta', 500)->nullable();
            $table->integer('loai')->default(0);
            $table->string('phan_loai', 50)->nullable();
            
            $table->decimal('phi_vn', 11, 2)->default(0);
            $table->decimal('phi_vj', 11, 2)->default(0);
            $table->decimal('phi_jets', 11, 2)->default(0);
            $table->decimal('phi_bb', 11, 2)->default(0);
            
            $table->string('mst', 50)->nullable();
            $table->string('dia_chi', 500)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('sdt', 50)->nullable();
            
            $table->decimal('so_du_ky_truoc', 11, 2)->default(0);
            $table->date('ngay_tao')->useCurrent()->nullable();
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
        Schema::dropIfExists('tai_khoan');
    }
}

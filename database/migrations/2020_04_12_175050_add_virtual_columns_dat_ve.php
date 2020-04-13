<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVirtualColumnsDatVe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dat_ve', function (Blueprint $table) {
            $table->decimal('lai', 11, 2)->virtualAs('tong_tien_thu_khach - tong_tien');
            $table->decimal('vat', 11, 2)->virtualAs('gia_net / 10');
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

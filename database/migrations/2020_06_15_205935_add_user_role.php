<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('email', 100)->nullable();
            $table->integer('phan_quyen')->default(0);
            $table->integer('id_nguoi_tao')->unsigned()->nullable();
            $table->boolean('tour_visa')->default(false);
            $table->boolean('ban_hang')->default(false);
        });
        if (Schema::hasColumn('users', 'admin'))
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('admin');
        });
        if (Schema::hasColumn('users', 'gmail_client'))
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('gmail_client');
            });
        if (Schema::hasColumn('users', 'gmail_secret'))
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('gmail_secret');
            });
        if (Schema::hasColumn('users', 'remember_token'))
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('remember_token');
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

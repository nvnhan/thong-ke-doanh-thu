<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SanBay extends Model
{
    //
    protected $table = "san_bay";
    public $timestamps = false;
    protected $casts = [
        'loai_a' => 'boolean'
    ];

    protected $fillable = ['ma_san_bay', 'ten_san_bay', 'phan_loai', 'loai_a'];

}

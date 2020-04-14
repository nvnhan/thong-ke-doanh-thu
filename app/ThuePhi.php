<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThuePhi extends Model
{
    //
    protected $table = "thue_phi";
    public $timestamps = false;
    protected $casts = [
        'muc_phi' => 'float'
    ];

    protected $fillable = ['muc_phi', 'ghi_chu'];
}

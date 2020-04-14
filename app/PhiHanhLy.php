<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PhiHanhLy extends Model
{
    //
    protected $table = "phi_hanh_ly";
    public $timestamps = false;
    protected $fillable = ['hanh_ly', 'muc_phi', 'hang_bay', 'ghi_chu'];
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'muc_phi' => 'float'
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {

        });
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThuChiChiTiet extends Model
{
    //
    protected $table = "thu_chi_chi_tiet";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
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

    public function thu_chi()
    {
        return $this->belongsTo('App\ThuChi', 'id_thu_chi');
    }

    public function ban_ra()
    {
        return $this->belongsTo('App\BanRa', 'id_ban_ra');
    }

    public function mua_vao()
    {
        return $this->belongsTo('App\MuaVao', 'id_mua_vao');
    }

    public function dat_ve()
    {
        return $this->belongsTo('App\DatVe', 'id_dat_ve');
    }

    public function tour()
    {
        return $this->belongsTo('App\Tour', 'id_tour');
    }

    public function tour_chi_tiet()
    {
        return $this->belongsTo('App\TourChiTiet', 'id_tour_chi_tiet');
    }

    public function visa()
    {
        return $this->belongsTo('App\Visa', 'id_visa');
    }

    public function getNgayThangAttribute() {
        return $this->thu_chi()->first()->ngay_thang;
    }
}

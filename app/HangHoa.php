<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HangHoa extends Model
{
    //
    protected $table = "hang_hoa";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            // $model->username = xxx;
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {
            $model->mua_vaos()->delete();
            $model->ban_ras()->delete();
        });
    }

    public function tai_khoan() {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan');
    }

    public function tour_chi_tiets() {
        return $this->hasMany('App\TourChiTiet', 'id_hang_hoa');
    }

    public function mua_vaos()
    {
        return $this->hasMany('App\MuaVao', 'id_hang_hoa');
    }

    public function ban_ras()
    {
        return $this->hasMany('App\BanRa', 'id_hang_hoa');
    }
}

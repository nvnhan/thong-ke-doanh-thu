<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KhachHang extends Model
{
    //
    protected $table = "khach_hang";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_tao' => 'date:d/m/Y',
        'ngay_nhac' => 'date:d/m/Y'
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

    public function ban_ras()
    {
        return $this->hasMany('App\BanRa', 'id_khach_hang');
    }

    public function dat_ves()
    {
        return $this->hasMany('App\DatVe', 'id_khach_hang');
    }

    public function thu_chis()
    {
        return $this->hasMany('App\ThuChi', 'id_khach_hang');
    }

    public function tours()
    {
        return $this->hasMany('App\Tour', 'id_khach_hang');
    }

    public function visas()
    {
        return $this->hasMany('App\Visa', 'id_khach_hang');
    }

    public function getSoTienThuDuAttribute() {
        return $this->so_du_ky_truoc + $this->thu_chis()->sum('con_du');
    }

    public function getDaiLysAttribute() {
        return split(',', $this->ma_dai_ly);
    }
}

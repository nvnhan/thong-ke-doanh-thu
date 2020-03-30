<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Visa extends Model
{
    //
    protected $table = "visa";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'ngay_mua' => 'date:d/m/Y',
        'ngay_tra_khach' => 'date:d/m/Y'
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            $model->ngay_thang = now(); //date("Y-m-d");
            // $model->username = xxx;
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {

        });
    }

    public function khach_hang() {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function nha_cung_cap() {
        return $this->belongsTo('App\TaiKhoan', 'id_nha_cung_cap');
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_visa');
    }

    public function getLaiAttribute() {
        return $this->gia_ban - $this->gia_mua;
    }

    public function getDaThanhToanAttribute() {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

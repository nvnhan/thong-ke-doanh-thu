<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThuChi extends Model
{
    //
    protected $table = "thu_chi";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y'
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
        return $this->belongsTo('App\KhachHang', 'id_khach_hang')->withDefault();
    }

    public function tai_khoan_den() {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_den')->withDefault();
    }

    public function tai_khoan_di() {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_di')->withDefault();
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_thu_chi');
    }

    public function getConDuAttribute() {
        return $this->so_tien - $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

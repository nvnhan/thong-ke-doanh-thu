<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DatVe extends Model
{
    //
    protected $table = "dat_ve";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_gio_di' => 'datetime:H:i d/m/Y',
        'ngay_gio_ve' => 'datetime:H:i d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'ngay_nhac_lich' => 'datetime:H:i d/m/Y'
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            $model->ngay_thang = now(); //date("Y-m-d");
            $model->nhac_lich_bay = true;
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

    public function tai_khoan_mua() {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_mua');
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_dat_ve');
    }

    public function getDaThanhToanAttribute() {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

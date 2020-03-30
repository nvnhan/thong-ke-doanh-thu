<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    //
    protected $table = "tour";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'bat_dau' => 'date:d/m/Y',
        'ket_thuc' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y'
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            $model->ngay_thang = now(); //date("Y-m-d");
            $model->so_luong = 1;
            $model->hoan_thanh = false;
            // $model->username = xxx;
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {

        });
    }
    
    public function tour_chi_tiets() {
        return $this->hasMany('App\TourChiTiet', 'id_tour');
    }

    public function khach_hang() {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang')->withDefault();
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_tour');
    }

    public function getGiaTourAttribute() {
        return $this->tour_chi_tiets()->sum('thanh_tien');
    }

    public function getTongTienBanAttribute() {
        return $this->gia_ban * $this->so_luong;
    }

    public function getLaiAttribute() {
        return $this->tong_tien_ban - $this->gia_tour * $this->so_luong;
    }

    public function getDaThanhToanAttribute() {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
 
    public function getTinhTrangAttribute() {
        return 'N/A';
    }
}

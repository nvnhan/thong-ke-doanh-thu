<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TourChiTiet extends Model
{
    //
    protected $table = "tour_chi_tiet";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'bat_dau' => 'date:d/m/Y',
        'ket_thuc' => 'date:d/m/Y'
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            $model->ngay_thang = now(); //date("Y-m-d");
            $model->so_luong = 1;
            // $model->username = xxx;
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {

        });
    }

    public function hang_hoa() {
        return $this->belongsTo('App\HangHoa', 'id_hang_hoa');
    }

    public function tour()
    {
        return $this->belongsTo('App\Tour', 'id_tour');
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_ban_ra');
    }

    public function getThanhTienAttribute() {
        return $this->don_gia * $this->so_luong;
    }
    
    public function getDaThanhToanAttribute() {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

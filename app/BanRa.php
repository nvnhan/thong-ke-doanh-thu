<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BanRa extends Model
{
    //
    protected $table = "ban_ra";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'ngay_hoan_doi' => 'date:d/m/Y',
        'ngay_thanh_toan_hoan_doi' => 'date:d/m/Y',
        'ngay_hoan_doi_xong' => 'date:d/m/Y'
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

    public function khach_hang() {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function tai_khoan_doi_tra() {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_tra_hoan_doi');
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_ban_ra');
    }

    public function getThanhTienMuaAttribute() {
        return $this->don_gia_mua * $this->so_luong;
    }

    public function getThanhTienBanAttribute() {
        return $this->don_gia_ban * $this->so_luong;
    }

    public function getLaiAttribute() {
        return $this->thanh_tien_ban - $this->thanh_tien_mua;
    }

    public function getDaThanhToanAttribute() {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

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

    protected $fillable = ['ngay_thang', 'phan_loai', 'ma_visa', 'quoc_gia', 'ngay_mua', 'ngay_tra_khach', 'gia_mua', 'gia_ban', 'id_khach_hang', 'id_nha_cung_cap', 'ghi_chu'];

    protected $appends = ['ten_khach_hang', 'nha_cung_cap', 'lai', 'da_thanh_toan', 'tinh_trang'];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
        });
        self::updating(function ($model) {
        });
        self::deleting(function ($model) {
        });
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang()->first())->ma_khach_hang;
    }

    public function nha_cung_cap()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_nha_cung_cap');
    }

    public function getNhaCungCapAttribute()
    {
        return optional($this->nha_cung_cap()->first())->ky_hieu;
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_visa');
    }

    public function getLaiAttribute()
    {
        return $this->gia_ban - $this->gia_mua;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }

    public function getTinhTrangAttribute()
    {
        if (now() < $this->ngay_mua)
            return "Đang chờ lấy";
        else if (now() <= $this->ngay_tra_khach)
            return "Đã lấy chờ trả khách";
        else
            return "Đã trả khách";
    }
}

<?php

namespace App;

use App\Scopes\OfUserScope;
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
        'ngay_tra_khach' => 'date:d/m/Y',
        'gia_mua' => 'double',
        'gia_ban' => 'double',
        'lai' => 'double',
    ];

    protected $fillable = ['ngay_thang', 'phan_loai', 'ma_visa', 'quoc_gia', 'ngay_mua', 'ngay_tra_khach', 'gia_mua', 'gia_ban', 'id_khach_hang', 'id_nha_cung_cap', 'ghi_chu'];

    protected $appends = ['ten_khach_hang', 'nha_cung_cap', 'da_thanh_toan', 'tinh_trang', 'chua_thanh_toan'];

    protected $hidden = ['khach_hang', 'nha_cung_cap', 'thu_chi_chi_tiets'];

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

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new OfUserScope);
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function nha_cung_cap()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_nha_cung_cap');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_visa');
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang)->ma_khach_hang;
    }

    public function getNhaCungCapAttribute()
    {
        return optional($this->nha_cung_cap)->ky_hieu;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets->sum('so_tien');
    }

    public function getChuaThanhToanAttribute()
    {
        return $this->gia_ban - $this->da_thanh_toan;
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

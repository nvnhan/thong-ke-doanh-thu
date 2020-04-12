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

    protected $fillable = [
        'ngay_thang', 'id_hang_hoa', 'so_luong', 'don_gia_mua', 'don_gia_ban', 'id_khach_hang', 'ngay_hoan_doi',
        'ngay_thanh_toan_hoan_doi', 'id_tai_khoan_tra_hoan_doi', 'ngay_hoan_doi_xong', 'ghi_chu'
    ];

    protected $appends = [
        'chang_di', 'chang_ve',
        'ten_khach_hang', 'noi_mua'
    ];

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

    public function tai_khoan_mua()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_mua');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_dat_ve');
    }

    ///////////////////////
    public function getChangDiAttribute()
    {
        return $this->sb_di . '->' . $this->sb_di1;
    }

    public function getChangVeAttribute()
    {
        return $this->sb_ve . '->' . $this->sb_ve1;
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang()->first())->ho_ten;
    }

    public function getNoiMuaAttribute()
    {
        return optional($this->tai_khoan_mua()->first())->ky_hieu;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

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
        'ngay_thang' => 'date:d/m/Y',
        'so_tien' => 'float',
        'con_du' => 'float'
    ];

    protected $fillable = [
        'ngay_thang', 'hang_muc', 'so_tien',
        'id_tai_khoan_di', 'id_tai_khoan_den', 'id_khach_hang'
    ];

    protected $appends = [
        'con_du', 'ten_khach_hang',
        'tai_khoan_di', 'tai_khoan_den'
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
        return $this->belongsTo('App\KhachHang', 'id_khach_hang')->withDefault();
    }

    public function tai_khoan_den()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_den')->withDefault();
    }

    public function tai_khoan_di()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_di')->withDefault();
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_thu_chi');
    }

    /////////////////
    public function getTaiKhoanDiAttribute()
    {
        return optional($this->tai_khoan_di()->first())->ky_hieu;
    }

    public function getTaiKhoanDenAttribute()
    {
        return optional($this->tai_khoan_den()->first())->ky_hieu;
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang()->first())->ma_khach_hang;
    }

    public function getConDuAttribute()
    {
        return $this->so_tien - $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

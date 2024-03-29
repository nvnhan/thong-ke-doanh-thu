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
        'ket_thuc' => 'date:d/m/Y',
        'thanh_tien' => 'float'
    ];

    protected $fillable = ['ngay_thang', 'id_tour', 'id_hang_hoa', 'bat_dau', 'ket_thuc', 'so_luong', 'don_gia', 'ghi_chu'];

    protected $appends = ['ten_hang', 'ma_hang', 'phan_loai', 'nha_cung_cap', 'da_thanh_toan', 'chua_thanh_toan'];

    protected $hidden = ['tour', 'hang_hoa', 'thu_chi_chi_tiets'];

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

    public function hang_hoa()
    {
        return $this->belongsTo('App\HangHoa', 'id_hang_hoa');
    }

    public function tour()
    {
        return $this->belongsTo('App\Tour', 'id_tour');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_tour_chi_tiet');
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets->sum('so_tien');
    }

    public function getMaTourAttribute()
    {
        return $this->tour->ma_tour;
    }

    public function getChuaThanhToanAttribute()
    {
        return $this->thanh_tien - $this->da_thanh_toan;
    }

    public function getPhanLoaiAttribute()
    {
        return $this->hang_hoa->phan_loai;
    }

    public function getTenHangAttribute()
    {
        return $this->hang_hoa->ten_hang;
    }

    public function getMaHangAttribute()
    {
        return $this->hang_hoa->ma_hang;
    }

    public function getNhaCungCapAttribute()
    {
        return $this->hang_hoa->tai_khoan->mo_ta;
    }
}

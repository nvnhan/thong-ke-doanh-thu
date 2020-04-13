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
        'canh_bao_xuat_ve' => 'datetime:H:i d/m/Y',
        'ngay_nhac_lich' => 'datetime:H:i d/m/Y',
        'chua_xuat_ve' => 'boolean',
    ];

    protected $fillable = [
        'ngay_thang',
    ];

    protected $appends = [
        'chang_di', 'chang_ve',
        'ten_khach_hang', 'noi_mua',
        'da_thanh_toan', 'loai_hanh_ly'
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

    public function phi_hanh_ly()
    {
        return $this->belongsTo('App\PhiHanhLy', 'id_phi_hanh_ly');
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

    public function getLoaiHanhLyAttribute()
    {
        return optional($this->phi_hanh_ly()->first())->hanh_ly;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }

    public function getLoaiTuoiAttribute()
    {
        switch ($this->attribute['loai_tuoi']) {
            case 1:
                return "Trẻ em";
            case 2:
                return "Em bé";
            default:
                return "Người lớn";
        }
    }
}

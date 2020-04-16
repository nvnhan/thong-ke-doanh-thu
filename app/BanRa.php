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
        'ngay_hoan_doi_xong' => 'date:d/m/Y',
        'thanh_tien_mua' => 'double',
        'thanh_tien_ban' => 'double',
    ];

    protected $fillable = [
        'ngay_thang', 'id_hang_hoa', 'so_luong', 'don_gia_mua', 'don_gia_ban', 'id_khach_hang', 'ngay_hoan_doi',
        'ngay_thanh_toan_hoan_doi', 'id_tai_khoan_tra_hoan_doi', 'ngay_hoan_doi_xong', 'ghi_chu'
    ];

    protected $appends = [
        'lai', 'da_thanh_toan', 'ma_hang', 'ten_hang', 'phan_loai', 'nha_cung_cap',
        'tai_khoan_tra_hoan_doi', 'ma_khach_hang', 'chua_thanh_toan'
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

    public function hang_hoa()
    {
        return $this->belongsTo('App\HangHoa', 'id_hang_hoa');
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function tai_khoan_doi_tra()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_tra_hoan_doi');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_ban_ra');
    }

    ////////

    public function getLaiAttribute()
    {
        return $this->thanh_tien_ban - $this->thanh_tien_mua;
    }

    public function getTaiKhoanTraHoanDoiAttribute()
    {
        return optional($this->tai_khoan_doi_tra()->first())->ky_hieu;
    }

    public function getMaKhachHangAttribute()
    {
        return optional($this->khach_hang()->first())->ma_khach_hang;
    }

    public function getMaHangAttribute()
    {
        return $this->hang_hoa()->first()->ma_hang;
    }

    public function getTenHangAttribute()
    {
        return $this->hang_hoa()->first()->ten_hang;
    }
    public function getPhanLoaiAttribute()
    {
        return $this->hang_hoa()->first()->phan_loai;
    }

    public function getNhaCungCapAttribute()
    {
        return $this->hang_hoa()->first()->nha_cung_cap;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }

    public function getChuaThanhToanAttribute()
    {
        return $this->thanh_tien_ban - $this->da_thanh_toan;
    }
}

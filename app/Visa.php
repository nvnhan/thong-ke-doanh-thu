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
        'ngay_tra_khach' => 'date:d/m/Y',
        'gia_mua' => 'double',
        'gia_ban' => 'double',
        'lai' => 'double',
    ];

    protected $fillable = ['ngay_thang', 'phan_loai', 'ma_visa', 'quoc_gia', 'ngay_mua', 'ngay_tra_khach', 'gia_mua', 'gia_ban', 'id_khach_hang', 'id_nha_cung_cap', 'ghi_chu'];

    protected $appends = ['ten_khach_hang', 'nha_cung_cap', 'da_thanh_toan', 'tinh_trang', 'chua_thanh_toan'];

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
     * Scope a query to only include record of a given user.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $user
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfUser($query, $user)
    {
        if ($user->phan_quyen === 1) // Nếu lá Quản lý đại lý
            $user = $user->nguoi_tao()->first();      // Người tạo:  admin hoặc chủ đl

        if ($user->phan_quyen === 0 || $user->phan_quyen === 9)      // Nhân viên & admin
            return $query->where('username', $user->username);

        $users = $user->tao_ra()->pluck('username')->push($user->username);
        return $query->whereIn('username', $users);
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

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
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

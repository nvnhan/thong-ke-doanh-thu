<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    //
    protected $table = "tour";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'bat_dau' => 'date:d/m/Y',
        'ket_thuc' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'hoan_thanh' => 'boolean',
        'gia_ban' => 'double',
        'tong_tien_ban' => 'double'
    ];

    protected $fillable = ['ngay_thang', 'ma_tour', 'ten_tour', 'phan_loai', 'bat_dau', 'ket_thuc', 'so_luong', 'gia_ban', 'id_khach_hang', 'hoan_thanh', 'ghi_chu'];

    protected $appends = ['ten_khach_hang', 'gia_tour', 'lai', 'da_thanh_toan', 'tinh_trang', 'chua_thanh_toan'];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
        });
        self::updating(function ($model) {
        });
        self::deleting(function ($model) {
            $model->tour_chi_tiets()->delete();
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

    public function tour_chi_tiets()
    {
        return $this->hasMany('App\TourChiTiet', 'id_tour');
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang()->first())->ma_khach_hang;
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_tour');
    }

    // Trường tính toán
    public function getGiaTourAttribute()
    {
        return $this->tour_chi_tiets()->get()->sum('thanh_tien');
    }

    public function getLaiAttribute()
    {
        return $this->tong_tien_ban - $this->gia_tour * $this->so_luong;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }

    public function getChuaThanhToanAttribute()
    {
        return $this->tong_tien_ban - $this->da_thanh_toan;
    }

    public function getTinhTrangAttribute()
    {
        if ($this->hoan_thanh)
            return "Đã hoàn thành";
        else if ($this->ngay_thanh_toan != null)
            return "Đã thanh toán";
        else if ($this->bat_dau != null && $this->ket_thuc != null) {
            if (now() < $this->bat_dau)
                return "Chưa đi";
            else if (now() <= $this->ket_thuc)
                return "Đang đi";
            else
                return "Đã đi";
        }
        return "";
    }
}

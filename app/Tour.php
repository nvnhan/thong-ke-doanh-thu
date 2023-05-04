<?php

namespace App;

use App\Scopes\OfUserScope;
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
        'tong_tien_ban' => 'double',
        'id_khach_hang' => 'integer',
        'so_luong' => 'integer'
    ];

    protected $fillable = [
        'ngay_thang', 'ma_tour', 'ten_tour', 'phan_loai',
        'bat_dau', 'ket_thuc',
        'so_luong', 'gia_ban',
        'id_khach_hang', 'hoan_thanh', 'ghi_chu'
    ];

    protected $appends = ['ten_khach_hang', 'gia_tour', 'lai', 'da_thanh_toan', 'tinh_trang', 'chua_thanh_toan'];

    protected $hidden = ['tour_chi_tiets', 'khach_hang', 'thu_chi_chi_tiets'];

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
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new OfUserScope);
    }

    public function scopeAllowUser($query, $user)
    {
        return $query->where('username', $user->username);
    }

    public function tour_chi_tiets()
    {
        return $this->hasMany('App\TourChiTiet', 'id_tour');
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_tour');
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang)->ma_khach_hang;
    }

    // Trường tính toán
    public function getGiaTourAttribute()
    {
        return $this->tour_chi_tiets->sum('thanh_tien');
    }

    public function getLaiAttribute()
    {
        return $this->tong_tien_ban - $this->gia_tour * $this->so_luong;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets->sum('so_tien');
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

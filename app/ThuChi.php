<?php

namespace App;

use App\Scopes\OfUserScope;
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
        'con_du' => 'float',
        'id_tai_khoan_di' => 'integer',
        'id_tai_khoan_den' => 'integer',
        'id_khach_hang' => 'integer'
    ];

    protected $fillable = [
        'ngay_thang', 'hang_muc', 'so_tien',
        'id_tai_khoan_di', 'id_tai_khoan_den', 'id_khach_hang',
        'username', 'dinh_danh'
    ];

    protected $appends = [
        'con_du',
        'ten_khach_hang',
        'tai_khoan_di', 'tai_khoan_den'
    ];

    // Tránh vòng lặp vô hạn khi sử dụng chung với 'with' trong eager load
    protected $hidden = ['khach_hang', 'tai_khoan_dens', 'tai_khoan_dis', 'thu_chi_chi_tiets', 'dinh_danh'];

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
        return $this->belongsTo('App\KhachHang', 'id_khach_hang')->withoutGlobalScopes();
    }

    public function tai_khoan_dens()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_den');
    }

    public function tai_khoan_dis()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_di');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_thu_chi');
    }

    /////////////////
    public function getTaiKhoanDiAttribute()
    {
        return optional($this->tai_khoan_dis)->ky_hieu;
    }

    public function getTaiKhoanDenAttribute()
    {
        return optional($this->tai_khoan_dens)->ky_hieu;
    }

    public function getSoDuKhachHangAttribute()
    {
        return optional($this->khach_hang)->so_tien_thu_du;
    }

    public function getTenKhachHangAttribute()
    {
        return optional($this->khach_hang)->ma_khach_hang;
    }

    public function getConDuAttribute()
    {
        return $this->so_tien - $this->thu_chi_chi_tiets->sum('so_tien');
    }
}

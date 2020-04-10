<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MuaVao extends Model
{
    //
    protected $table = "mua_vao";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
    ];

    protected $fillable = ['ngay_thang', 'id_hang_hoa', 'so_luong', 'don_gia', 'ghi_chu'];

    protected $appends = ['thanh_tien', 'da_thanh_toan', 'ma_hang', 'ten_hang', 'phan_loai', 'nha_cung_cap'];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {

        });
    }

    public function hang_hoa() {
        return $this->belongsTo('App\HangHoa', 'id_hang_hoa');
    }

    public function thu_chi_chi_tiets() {
        return $this->hasMany('App\ThuChiChiTiet', 'id_mua_vao');
    }

    ////////
    public function getMaHangAttribute() {
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

    public function getThanhTienAttribute() {
        return $this->don_gia * $this->so_luong;
    }

    public function getDaThanhToanAttribute() {
        return $this->thu_chi_chi_tiets()->sum('so_tien');
    }
}

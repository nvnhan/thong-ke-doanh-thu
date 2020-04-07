<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HangHoa extends Model
{
    //
    protected $table = "hang_hoa";
    public $timestamps = true;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
    ];

    protected $fillable = ['id_tai_khoan', 'ma_hang', 'ten_hang', 'phan_loai', 'don_vi', 'don_gia', 'ghi_chu'];

    protected $appends = ['nha_cung_cap'];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            // $model->username = xxx;
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {
            $model->mua_vaos()->delete();
            $model->ban_ras()->delete();
        });
    }

    public function tai_khoan() {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan');
    }

    public function getNhaCungCapAttribute() {
        return $this->tai_khoan()->first()->mo_ta;
    }

    public function tour_chi_tiets() {
        return $this->hasMany('App\TourChiTiet', 'id_hang_hoa');
    }

    public function mua_vaos()
    {
        return $this->hasMany('App\MuaVao', 'id_hang_hoa');
    }

    public function ban_ras()
    {
        return $this->hasMany('App\BanRa', 'id_hang_hoa');
    }
}

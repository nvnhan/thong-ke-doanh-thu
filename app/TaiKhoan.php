<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaiKhoan extends Model
{
    //
    protected $table = "tai_khoan";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_tao' => 'date:d/m/Y',
        'phi_vn' => 'float',
        'phi_vj' => 'float',
        'phi_jets' => 'float',
        'phi_bb' => 'float',
    ];

    protected $fillable = ['ky_hieu', 'mo_ta', 'phan_loai', 'phi_vn', 'phi_vj', 'phi_jets', 'phi_bb', 'mst', 'dia_chi', 'email', 'sdt', 'so_du_ky_truoc', 'ghi_chu'];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->ngay_tao = now(); //date("Y-m-d");
            $model->loai = 0;
            // $model->username = xxx;
        });
        self::updating(function ($model) {
        });
        self::deleting(function ($model) {
            //TODO: Check Delete MuaVao, BanRa from HangHoas
            $model->hang_hoas()->delete();
        });
    }

    public function hang_hoas()
    {
        return $this->hasMany('App\HangHoa', 'id_tai_khoan');
    }

    public function mua_vaos()
    {
        // https://laravel.com/docs/7.x/eloquent-relationships#has-many-through
        return $this->hasManyThrough('App\MuaVao', 'App\HangHoa', 'id_tai_khoan', 'id_hang_hoa', 'id', 'id');
    }

    public function tour_chi_tiets()
    {
        // https://laravel.com/docs/7.x/eloquent-relationships#has-many-through
        return $this->hasManyThrough('App\TourChiTiet', 'App\HangHoa', 'id_tai_khoan', 'id_hang_hoa', 'id', 'id');
    }
}

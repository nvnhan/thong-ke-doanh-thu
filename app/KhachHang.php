<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KhachHang extends Model
{
    //
    protected $table = "khach_hang";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_tao' => 'date:d/m/Y',
        'ngay_nhac' => 'datetime:H:i d/m/Y'
    ];

    protected $fillable = ['ma_khach_hang', 'ho_ten', 'phan_loai', 'phi_vn', 'phi_vj', 'phi_jets', 'phi_bb', 'mst', 'dia_chi', 'email', 'sdt', 'so_du_ky_truoc','ngay_nhac', 'ma_dai_ly', 'ghi_chu'];

    protected $appends = ['so_tien_thu_du'];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            $model->ngay_tao = now();
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {
            //TODO: KhachHang onDelete
        });
    }

    public function ban_ras()
    {
        return $this->hasMany('App\BanRa', 'id_khach_hang');
    }

    public function dat_ves()
    {
        return $this->hasMany('App\DatVe', 'id_khach_hang');
    }

    public function thu_chis()
    {
        return $this->hasMany('App\ThuChi', 'id_khach_hang');
    }

    public function tours()
    {
        return $this->hasMany('App\Tour', 'id_khach_hang');
    }

    public function visas()
    {
        return $this->hasMany('App\Visa', 'id_khach_hang');
    }

    public function getSoTienThuDuAttribute() {
        return $this->so_du_ky_truoc + $this->thu_chis()->get()->sum('con_du');
    }

    public function getDaiLysAttribute() {
        return split(',', $this->ma_dai_ly);
    }
}

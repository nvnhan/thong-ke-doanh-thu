<?php

namespace App;

use App\Scopes\OfUserScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class KhachHang extends Model
{
    use Notifiable;

    //
    protected $table = "khach_hang";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_tao' => 'date:d/m/Y',
        'ngay_nhac' => 'datetime:H:i d/m/Y',
        'phi_vn' => 'float',
        'phi_vj' => 'float',
        'phi_jets' => 'float',
        'phi_bb' => 'float',
    ];

    protected $fillable = [
        'ma_khach_hang', 'ho_ten', 'phan_loai',
        'phi_vn', 'phi_vj', 'phi_jets', 'phi_bb',
        'mst', 'dia_chi', 'email', 'sdt',
        'so_du_ky_truoc', 'ngay_nhac', 'ma_dai_ly', 'ghi_chu', 'ngay_tao'
    ];

    protected $appends = ['so_tien_thu_du'];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            // $model->ngay_tao = now();
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

    public function scopeAllowUser($query, $user)
    {
        // Nhân viên đc xem hết
        if ($user->phan_quyen < 2) // Nếu lá Quản lý đại lý
            $user = $user->nguoi_tao()->first();      // Chủ đại lý

        if ($user->phan_quyen === 9)      // admin
            return $query->where('username', $user->username);

        $users = $user->tao_ra()->pluck('username')->push($user->username);
        return $query->whereIn('username', $users);
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

    public function getSoTienThuDuAttribute()
    {
        return $this->so_du_ky_truoc + $this->thu_chis()->get()->sum('con_du');
    }

    public function getDaiLyAttribute()
    {
        return explode(',', $this->ma_dai_ly);
    }
}

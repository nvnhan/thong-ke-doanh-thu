<?php

namespace App;

use App\Scopes\OfUserScope;
use Illuminate\Database\Eloquent\Model;

class HangHoa extends Model
{
    //
    protected $table = "hang_hoa";
    public $timestamps = true;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'don_gia' => 'float'
    ];

    protected $fillable = ['id_tai_khoan', 'ma_hang', 'ten_hang', 'phan_loai', 'don_vi', 'don_gia', 'ghi_chu'];

    protected $appends = ['nha_cung_cap'];

    protected $hidden = ['tai_khoan', 'tour_chi_tiets', 'mua_vaos', 'ban_ras'];

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            // $model->username = xxx;
        });
        self::updating(function ($model) {
        });
        self::deleting(function ($model) {
            $model->mua_vaos()->delete();
            $model->ban_ras()->delete();
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

    // Danh mục => show all
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

    public function tai_khoan()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan');
    }

    public function getNhaCungCapAttribute()
    {
        return $this->tai_khoan->mo_ta;
    }

    public function tour_chi_tiets()
    {
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

    // Mua Vao
    public function getSoLuongMuaVaoAttribute()
    {
        if (property_exists($this, 'so_luong_mua_vao'))
            return $this->so_luong_mua_vao;
        return null;
    }

    public function setSoLuongMuaVaoAttribute($value)
    {
        $this->so_luong_mua_vao = $value;
    }

    public function getThanhTienMuaVaoAttribute()
    {
        if (property_exists($this, 'thanh_tien_mua_vao'))
            return $this->thanh_tien_mua_vao;
        return null;
    }

    public function setThanhTienMuaVaoAttribute($value)
    {
        $this->thanh_tien_mua_vao = (float) $value;
    }

    // Ban Ra
    public function getSoLuongBanRaAttribute()
    {
        if (property_exists($this, 'so_luong_ban_ra'))
            return $this->so_luong_ban_ra;
        return null;
    }

    public function setSoLuongBanRaAttribute($value)
    {
        $this->so_luong_ban_ra = $value;
    }

    public function getThanhTienBanRaAttribute()
    {
        if (property_exists($this, 'thanh_tien_ban_ra'))
            return $this->thanh_tien_ban_ra;
        return null;
    }

    public function setThanhTienBanRaAttribute($value)
    {
        $this->thanh_tien_ban_ra = (float) $value;
    }

    // Hoan Doi
    public function getSoLuongHoanDoiAttribute()
    {
        if (property_exists($this, 'so_luong_hoan_doi'))
            return $this->so_luong_hoan_doi;
        return null;
    }

    public function setSoLuongHoanDoiAttribute($value)
    {
        $this->so_luong_hoan_doi = $value;
    }

    public function getThanhTienHoanDoiAttribute()
    {
        if (property_exists($this, 'thanh_tien_hoan_doi'))
            return $this->thanh_tien_hoan_doi;
        return null;
    }

    public function setThanhTienHoanDoiAttribute($value)
    {
        $this->thanh_tien_hoan_doi = (float) $value;
    }

    // Ton Kho
    public function getSoLuongTonKhoAttribute()
    {
        if (property_exists($this, 'so_luong_ton_kho'))
            return $this->so_luong_ton_kho;
        return null;
    }

    public function setSoLuongTonKhoAttribute($value)
    {
        $this->so_luong_ton_kho = $value;
    }

    public function getThanhTienTonKhoAttribute()
    {
        if (property_exists($this, 'so_luong_ton_kho'))
            return $this->so_luong_ton_kho * $this->don_gia;
        return null;
    }
}

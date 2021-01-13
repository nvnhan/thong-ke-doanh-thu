<?php

namespace App;

use App\Scopes\OfUserScope;
use Illuminate\Database\Eloquent\Model;

class DatVe extends Model
{
    //
    protected $table = "dat_ve";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_gio_di' => 'datetime:H:i d/m/Y',
        'ngay_gio_ve' => 'datetime:H:i d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'canh_bao_xuat_ve' => 'datetime:H:i d/m/Y',
        'ngay_nhac_lich' => 'datetime:H:i d/m/Y',
        'chua_xuat_ve' => 'boolean',
        'tong_tien' => 'float',
        'tong_tien_thu_khach' => 'float',
        'lai' => 'float',
        'gia_net' => 'float',
        'phi_san_bay' => 'float',
        'phu_phi_san_bay' => 'float',
        'hanh_ly' => 'float',
        'phu_phi' => 'float',
        'hoa_hong' => 'float',
        'vat' => 'float',
    ];

    protected $fillable = [
        'ngay_thang', 'ma_giu_cho', 'so_ve', 'hang_bay',
        'ten_khach', 'loai_tuoi', 'id_tai_khoan_mua', 'id_khach_hang',
        'ngay_nhac_lich', 'canh_bao_xuat_ve', 'chua_xuat_ve',
        'ngay_gio_di', 'cb_di', 'sb_di', 'sb_di1',
        'ngay_gio_ve', 'cb_ve', 'sb_ve', 'sb_ve1',
        'gia_net', 'phu_phi', 'phi_san_bay', 'phu_phi_san_bay',
        'id_phi_hanh_ly', 'hanh_ly', 'hoa_hong',
        'tong_tien', 'tong_tien_thu_khach', 'ghi_chu',
        'username', 'dinh_danh'
    ];

    protected $appends = [
        'chang_di', 'chang_ve',
        'ma_khach_hang', 'noi_mua',
        'da_thanh_toan', 'loai_hanh_ly',
        'ten_loai_tuoi', 'chua_thanh_toan'
    ];

    // Tránh vòng lặp vô hạn khi sử dụng chung với 'with' trong eager load
    protected $hidden = ['dinh_danh', 'khach_hang', 'tai_khoan_mua', 'phi_hanh_ly', 'thu_chi_chi_tiets'];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new OfUserScope);
    }

    /**
     * Scope a query to only include record of a given user.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $user
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfUser($query, $user, $user_zone = [])
    {
        if (!empty($user_zone))
            return $query->whereIn('username', $user_zone);
        return $query->whereIn('username', $user->getUserZone());
    }

    /**
     * Scope a query to only include record of a given user.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $user
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfCustomer($query, $khach_hang)
    {
        return $query->where('id_khach_hang', $khach_hang->id);
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang');
    }

    public function tai_khoan_mua()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_mua');
    }

    public function phi_hanh_ly()
    {
        return $this->belongsTo('App\PhiHanhLy', 'id_phi_hanh_ly');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_dat_ve');
    }

    ///////////////////////
    public function getChangDiAttribute()
    {
        return $this->sb_di . '→' . $this->sb_di1;
    }

    public function getChangVeAttribute()
    {
        if (!empty($this->sb_ve) && !empty($this->sb_ve1))
            return $this->sb_ve . '→' . $this->sb_ve1;
        return '';
    }

    public function getMaKhachHangAttribute()
    {
        return optional($this->khach_hang)->ma_khach_hang;
    }

    public function getNoiMuaAttribute()
    {
        return optional($this->tai_khoan_mua)->ky_hieu;
    }

    public function getLoaiHanhLyAttribute()
    {
        return optional($this->phi_hanh_ly)->hanh_ly;
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets->sum('so_tien');
    }

    public function getChuaThanhToanAttribute()
    {
        return $this->tong_tien_thu_khach - $this->da_thanh_toan;
    }

    public function getTenLoaiTuoiAttribute()
    {
        switch ($this->loai_tuoi) {
            case 1:
                return "Trẻ em";
            case 2:
                return "Em bé";
            default:
                return "Người lớn";
        }
    }
}

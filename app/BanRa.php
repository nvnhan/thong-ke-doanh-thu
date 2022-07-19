<?php

namespace App;

use App\Scopes\OfUserScope;
use Illuminate\Database\Eloquent\Model;

class BanRa extends Model
{
    //
    protected $table = "ban_ra";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'ngay_thanh_toan' => 'date:d/m/Y',
        'ngay_hoan_doi' => 'date:d/m/Y',
        'ngay_thanh_toan_hoan_doi' => 'date:d/m/Y',
        'ngay_hoan_doi_xong' => 'date:d/m/Y',
        'thanh_tien_mua' => 'double',
        'thanh_tien_ban' => 'double',
        'don_gia_mua' => 'double',
        'don_gia_ban' => 'double',
        'id_hang_hoa' => 'integer',
        'so_luong' => 'integer',
        'id_khach_hang' => 'integer',
        'id_tai_khoan_tra_hoan_doi' => 'integer',
    ];

    protected $fillable = [
        'ngay_thang', 'id_hang_hoa', 'so_luong', 'don_gia_mua', 'don_gia_ban', 'id_khach_hang', 'ngay_hoan_doi',
        'ngay_thanh_toan_hoan_doi', 'id_tai_khoan_tra_hoan_doi', 'ngay_hoan_doi_xong', 'ghi_chu',
        'so_hoa_don'
    ];

    protected $appends = [
        'lai', 'da_thanh_toan', 'chua_thanh_toan',
        'ma_hang', 'ten_hang', 'phan_loai', 'nha_cung_cap',
        'ma_khach_hang',
        'tai_khoan_tra_hoan_doi',
    ];

    protected $hidden = ['hang_hoa', 'khach_hang', 'tai_khoan_doi_tra', 'thu_chi_chi_tiets'];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new OfUserScope);
    }

    public function hang_hoa()
    {
        return $this->belongsTo('App\HangHoa', 'id_hang_hoa')->withoutGlobalScopes();
    }

    public function khach_hang()
    {
        return $this->belongsTo('App\KhachHang', 'id_khach_hang')->withoutGlobalScopes();
    }

    public function tai_khoan_doi_tra()
    {
        return $this->belongsTo('App\TaiKhoan', 'id_tai_khoan_tra_hoan_doi');
    }

    public function thu_chi_chi_tiets()
    {
        return $this->hasMany('App\ThuChiChiTiet', 'id_ban_ra');
    }

    ////////

    public function getLaiAttribute()
    {
        return $this->thanh_tien_ban - $this->thanh_tien_mua;
    }

    public function getTaiKhoanTraHoanDoiAttribute()
    {
        return optional($this->tai_khoan_doi_tra)->ky_hieu;
    }

    public function getMaKhachHangAttribute()
    {
        return optional($this->khach_hang)->ma_khach_hang;
    }

    public function getMaHangAttribute()
    {
        return $this->hang_hoa->ma_hang ?? '';
    }

    public function getTenHangAttribute()
    {
        return $this->hang_hoa->ten_hang ?? '';
    }
    public function getPhanLoaiAttribute()
    {
        return $this->hang_hoa->phan_loai ?? '';
    }

    public function getNhaCungCapAttribute()
    {
        return $this->hang_hoa->nha_cung_cap ?? '';
    }

    public function getDaThanhToanAttribute()
    {
        return $this->thu_chi_chi_tiets->sum('so_tien');
    }

    public function getChuaThanhToanAttribute()
    {
        return $this->thanh_tien_ban - $this->da_thanh_toan;
    }
}

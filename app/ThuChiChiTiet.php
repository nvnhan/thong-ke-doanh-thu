<?php

namespace App;

use DateTime;
use Illuminate\Database\Eloquent\Model;

class ThuChiChiTiet extends Model
{
    //
    protected $table = "thu_chi_chi_tiet";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_thang' => 'date:d/m/Y',
        'so_tien' => 'float',
    ];

    protected $fillable = [
        'id_thu_chi', 'so_tien',
    ];

    protected $appends = ['ngay_thang', 'chi_tiet'];

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

    public function thu_chi()
    {
        return $this->belongsTo('App\ThuChi', 'id_thu_chi');
    }

    public function ban_ra()
    {
        return $this->belongsTo('App\BanRa', 'id_ban_ra');
    }

    public function mua_vao()
    {
        return $this->belongsTo('App\MuaVao', 'id_mua_vao');
    }

    public function dat_ve()
    {
        return $this->belongsTo('App\DatVe', 'id_dat_ve');
    }

    public function tour()
    {
        return $this->belongsTo('App\Tour', 'id_tour');
    }

    public function tour_chi_tiet()
    {
        return $this->belongsTo('App\TourChiTiet', 'id_tour_chi_tiet');
    }

    public function visa()
    {
        return $this->belongsTo('App\Visa', 'id_visa');
    }

    public function getNgayThangAttribute()
    {
        return $this->thu_chi()->first()->ngay_thang;
    }

    public function getChiTietAttribute()
    {
        if ($this->dat_ve()->first() != null) {
            $dv = $this->dat_ve()->first();
            return "Đối tượng: Đặt vé. Ngày tháng: " . (new DateTime($dv->ngay_thang))->format('d/m/Y') . "<br />" .
                "Số vé: $dv->so_ve, Tên khách: $dv->ten_khach, Hãng bay: $dv->hang_bay<br />" .
                "Nơi mua: $dv->noi_mua, Khách hàng: $dv->ten_khach_hang<br />" .
                "Giá net: " . number_format($dv->gia_net) . ", Tổng tiền: " . number_format($dv->tong_tien) . ", Thu khách: " . number_format($dv->tong_tien_thu_khach);
        }
        if ($this->tour()->first() != null) {
            $t = $this->tour()->first();
            return "Đối tượng: Tour. Ngày tháng: " . (new DateTime($t->ngay_thang))->format('d/m/Y') . "<br />" .
                "Phân loại: $t->phan_loai, Mã tour: $t->ma_tour, Tên tour: $t->ten_tour<br />" .
                "Bắt đầu: " . (new DateTime($t->bat_dau))->format('d/m/Y') . ", Kết thúc: " . (new DateTime($t->ket_thuc))->format('d/m/Y') . ", Số lượng: $t->so_luong<br />" .
                "Tổng tiền bán: " . number_format($t->tong_tien_ban) . ", Khách hàng: " . $t->ten_khach_hang;
        }
        if ($this->tour_chi_tiet()->first() != null) {
            $tct = $this->tour_chi_tiet()->first();
            $t = $tct->tour()->first();
            return "Đối tượng: Chi tiết tour. Mã tour: $t->ma_tour; Tên tour: $t->ten_tour<br />" .
                "Phân loại hàng hóa: $tct->phan_loai, Tên hàng: $tct->ten_hang, Số lượng: $tct->so_luong<br />" .
                "Nhà cung cấp: $tct->nha_cung_cap, Thành tiền: " . number_format($tct->thanh_tien);
        }
        if ($this->mua_vao()->first() != null) {
            $mv = $this->mua_vao()->first();
            return "Đối tượng: Hàng hóa Mua vào. Ngày tháng: " . (new DateTime($mv->ngay_thang))->format('d/m/Y') . ", Mã hàng: $mv->ma_hang, Tên hàng: $mv->ten_hang<br />" .
                "Nhà cung cấp: $mv->nha_cung_cap, Thành tiền: " . number_format($mv->thanh_tien);
        }
        if ($this->ban_ra()->first() != null) {
            $br = $this->ban_ra()->first();
            $tmp =  "Đối tượng: Bán ra - Hoàn đổi. Ngày tháng: " . (new DateTime($br->ngay_thang))->format('d/m/Y') . ", Mã hàng: $br->ma_hang, Tên hàng: $br->ten_hang<br />" .
                "Khách hàng: $br->ma_khach_hang, Thành tiền bán: " . number_format($br->thanh_tien_ban);
            if ($br->ngay_hoan_doi != null)
                $tmp .= "<br />Hoàn đổi ngày: " . (new DateTime($br->ngay_hoan_doi))->format('d/m/Y');
            return $tmp;
        }
        if ($this->visa()->first() != null) {
            $vs = $this->visa()->first();
            return "Đối tượng: Visa. Ngày tháng: " . (new DateTime($vs->ngay_thang))->format('d/m/Y') . ", Mã Visa: $vs->ma_visa, Loại Visa: $vs->phan_loai<br />" .
                "Nhà cung cấp: $vs->nha_cung_cap, Ngày lấy nơi mua: " . (new DateTime($vs->ngay_mua))->format('d/m/Y') . ", Giá mua: " . number_format($vs->gia_mua) . "<br />" .
                "Khách hàng: $vs->ten_khach_hang, Ngày trả khách: " . (new DateTime($vs->ngay_tra_khach))->format('d/m/Y') . ", Giá bán: " . number_format($vs->gia_ban);
        }

        return "";
    }
}

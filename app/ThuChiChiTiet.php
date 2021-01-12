<?php

namespace App;

use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

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
    // Tránh vòng lặp vô hạn khi sử dụng chung với 'with' trong eager load
    protected $hidden = ['thu_chi', 'ban_ra', 'mua_vao', 'dat_ve', 'tour', 'tour_chi_tiet', 'visa'];

    public static function boot()
    {
        parent::boot();
        self::created(function ($model) {
            // Sau khi đã tạo xong object và load lại các relationship của nó
            // Dùng mass update
            if ($model->dat_ve != null && $model->dat_ve->chua_thanh_toan <= 0) $model->dat_ve()->update(['ngay_thanh_toan' => $model->ngay_thang]);
            if ($model->ban_ra != null && $model->ban_ra->chua_thanh_toan <= 0) $model->ban_ra()->update(['ngay_thanh_toan' => $model->ngay_thang]);
            if ($model->mua_vao != null && $model->mua_vao->chua_thanh_toan <= 0) $model->mua_vao()->update(['ngay_thanh_toan' => $model->ngay_thang]);
            if ($model->tour != null && $model->tour->chua_thanh_toan <= 0) $model->tour()->update(['ngay_thanh_toan' => $model->ngay_thang]);
            if ($model->tour_chi_tiet != null && $model->tour_chi_tiet->chua_thanh_toan <= 0) $model->tour_chi_tiet()->update(['ngay_thanh_toan' => $model->ngay_thang]);
            if ($model->visa != null && $model->visa->chua_thanh_toan <= 0) $model->visa()->update(['ngay_thanh_toan' => $model->ngay_thang]);
        });
        self::updating(function ($model) {
        });
        self::deleting(function ($model) {
            if ($model->dat_ve != null) $model->dat_ve()->update(['ngay_thanh_toan' => null]);
            if ($model->ban_ra != null) $model->ban_ra()->update(['ngay_thanh_toan' => null]);
            if ($model->mua_vao != null) $model->mua_vao()->update(['ngay_thanh_toan' => null]);
            if ($model->tour != null) $model->tour()->update(['ngay_thanh_toan' => null]);
            if ($model->tour_chi_tiet != null) $model->tour_chi_tiet()->update(['ngay_thanh_toan' => null]);
            if ($model->visa != null) $model->visa()->update(['ngay_thanh_toan' => null]);
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
        return $this->thu_chi->ngay_thang;
    }

    public function getChiTietAttribute()
    {
        if ($this->dat_ve()->first() != null) {
            $dv = $this->dat_ve()->first();
            return "Đối tượng: Đặt vé | Ngày tháng: " . (new DateTime($dv->ngay_thang))->format('d/m/Y') . " | " .
                "Số vé: $dv->so_ve, Tên khách: $dv->ten_khach, Hãng bay: $dv->hang_bay | " .
                "Nơi mua: $dv->noi_mua, Khách hàng: $dv->ma_khach_hang | " .
                "Giá net: " . number_format($dv->gia_net) . ", Tổng tiền: " . number_format($dv->tong_tien) . ", Thu khách: " . number_format($dv->tong_tien_thu_khach);
        }
        if ($this->tour()->first() != null) {
            $t = $this->tour()->first();
            return "Đối tượng: Tour | Ngày tháng: " . (new DateTime($t->ngay_thang))->format('d/m/Y') . " | " .
                "Phân loại: $t->phan_loai, Mã tour: $t->ma_tour, Tên tour: $t->ten_tour | " .
                "Bắt đầu: " . (new DateTime($t->bat_dau))->format('d/m/Y') . ", Kết thúc: " . (new DateTime($t->ket_thuc))->format('d/m/Y') . ", Số lượng: $t->so_luong | " .
                "Tổng tiền bán: " . number_format($t->tong_tien_ban) . ", Khách hàng: " . $t->ma_khach_hang;
        }
        if ($this->tour_chi_tiet()->first() != null) {
            $tct = $this->tour_chi_tiet()->first();
            $t = $tct->tour()->first();
            return "Đối tượng: Chi tiết tour | Mã tour: $t->ma_tour; Tên tour: $t->ten_tour | " .
                "Phân loại hàng hóa: $tct->phan_loai, Tên hàng: $tct->ten_hang, Số lượng: $tct->so_luong | " .
                "Nhà cung cấp: $tct->nha_cung_cap, Thành tiền: " . number_format($tct->thanh_tien);
        }
        if ($this->mua_vao()->first() != null) {
            $mv = $this->mua_vao()->first();
            return "Đối tượng: Hàng hóa Mua vào | Ngày tháng: " . (new DateTime($mv->ngay_thang))->format('d/m/Y') . ", Mã hàng: $mv->ma_hang, Tên hàng: $mv->ten_hang | " .
                "Nhà cung cấp: $mv->nha_cung_cap, Thành tiền: " . number_format($mv->thanh_tien);
        }
        if ($this->ban_ra()->first() != null) {
            $br = $this->ban_ra()->first();
            $tmp =  "Đối tượng: Bán ra | Ngày tháng: " . (new DateTime($br->ngay_thang))->format('d/m/Y') . ", Mã hàng: $br->ma_hang, Tên hàng: $br->ten_hang | " .
                "Khách hàng: $br->ma_khach_hang, Thành tiền bán: " . number_format($br->thanh_tien_ban);
            if ($br->ngay_hoan_doi != null)
                $tmp .= " | Hoàn đổi ngày: " . (new DateTime($br->ngay_hoan_doi))->format('d/m/Y');
            return $tmp;
        }
        if ($this->visa()->first() != null) {
            $vs = $this->visa()->first();
            return "Đối tượng: Visa | Ngày tháng: " . (new DateTime($vs->ngay_thang))->format('d/m/Y') . ", Mã Visa: $vs->ma_visa, Loại Visa: $vs->phan_loai | " .
                "Nhà cung cấp: $vs->nha_cung_cap, Ngày lấy nơi mua: " . (new DateTime($vs->ngay_mua))->format('d/m/Y') . ", Giá mua: " . number_format($vs->gia_mua) . " | " .
                "Khách hàng: $vs->ma_khach_hang, Ngày trả khách: " . (new DateTime($vs->ngay_tra_khach))->format('d/m/Y') . ", Giá bán: " . number_format($vs->gia_ban);
        }

        return "";
    }
}

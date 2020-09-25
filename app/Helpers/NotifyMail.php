<?php

namespace App\Helpers;

use App\DatVe;
use DateTime;
use App\Notifications\ThongBaoVe;

class NotifyMail
{
    public static function check($user)
    {
        $today = date('Y-m-d');
        $tomorrow = (new DateTime('tomorrow'))->format('Y-m-d');

        // Check ve may bay
        $chuaxuat = DatVe::ofUser($user)
            ->whereChuaXuatVe(true)
            ->whereDate('canh_bao_xuat_ve', '=', $today)
            ->get()
            ->map(fn ($ve) => 'Cảnh báo xuất vé :  Mã giữ chỗ ' . $ve->ma_giu_cho . ', Họ tên: ' . $ve->ten_khach . ' (Số vé: ' . $ve->so_ve . ')')->toArray();

        $sapbay = DatVe::ofUser($user)
            ->where(fn ($query) => $query->whereDate('ngay_gio_di', '=', $tomorrow)->orWhereDate('ngay_gio_ve', '=', $tomorrow))
            ->get()
            ->map(fn ($ve) => 'Cảnh báo sắp bay :  Họ tên: ' . $ve->ten_khach . ' (Số vé: ' . $ve->so_ve . '), thời gian đi: ' . $ve->ngay_gio_di . ', thời gian về: ' . $ve->ngay_gio_ve)->toArray();

        $data = array_merge($chuaxuat, $sapbay);
        if (!empty($data)) {
            $user->notify(new ThongBaoVe($data));
            return true;
        }
        return false;
    }
}

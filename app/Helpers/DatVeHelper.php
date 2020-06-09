<?php

namespace App\Helpers;

use App\DatVe;
use App\SanBay;
use App\TaiKhoan;
use App\ThuePhi;

class DatVeHelper
{
    /**
     * Remove prefix name as MR, MRS, MISS...
     */
    public static function remove_prefix_name(string $line, string $bo_sung = "")
    {
        $line = strtoupper($line);

        $line = str_replace("MSTR" . $bo_sung, "", $line);
        $line = str_replace("MRS" . $bo_sung, "", $line);
        $line = str_replace("MR" . $bo_sung, "", $line);
        $line = str_replace("MS" . $bo_sung, "", $line);
        $line = str_replace("MISS" . $bo_sung, "", $line);
        return trim($line);
    }

    /**
     * Thêm các loại phí, giá cho đặt vé
     */
    public static function add_gia(DatVe &$obj)
    {
        if (!empty($obj->id_tai_khoan_mua)) self::phu_phi_noi_mua($obj);
        // Tinh phi & Tinh gia
        self::tinh_phi($obj);
        self::tinh_gia($obj);
    }

    /**
     * Tính phí sân bay & phụ phí sân bay
     */
    public static function tinh_phi(DatVe &$obj)
    {
        $obj->phi_san_bay = self::phi_san_bay($obj->sb_di, $obj->hang_bay, $obj->loai_tuoi) +
            self::phi_san_bay($obj->sb_ve, $obj->hang_bay, $obj->loai_tuoi);
        $obj->phu_phi_san_bay = self::phu_phi_san_bay($obj->sb_di, $obj->sb_di1, $obj->hang_bay) +
            self::phu_phi_san_bay($obj->sb_ve, $obj->sb_ve1, $obj->hang_bay);
    }

    public static function phi_san_bay($san_bay, $hang_bay, $loai_tuoi)
    {
        if (empty($hang_bay)) return 0;

        $sb = SanBay::where('ma_san_bay', $san_bay)->first();
        if ($sb) {
            $q = ThuePhi::query();

            if ($sb->loai_a) $q = $q->where('loai_phi', 'LIKE', '%nhóm A%');
            else $q = $q->where('loai_phi', 'LIKE', '%nhóm B%');

            if ($loai_tuoi === 0) $q = $q->where('loai_phi', 'LIKE', '%Người lớn%');
            else if ($loai_tuoi === 1) $q = $q->where('loai_phi', 'LIKE', '%Trẻ em%');
            else return 0;

            $q = $q->where('loai_phi', 'LIKE', "%$hang_bay%")->first();
            if ($q) return $q->muc_phi;
        }
        return 0;
    }

    public static function phu_phi_san_bay($san_bay, $san_bay1, $hang_bay)
    {
        if (empty($san_bay)) return 0;

        $q = ThuePhi::query();
        $q = $q->where('loai_phi', 'LIKE', '%quản trị%');
        $q = $q->where('loai_phi', 'LIKE', "%$hang_bay%")->first();

        if ($q) return $q->muc_phi;
        return 0;
    }

    /**
     * Tính lại tổng tiền
     */
    public static function tinh_gia(DatVe &$obj)
    {
        if ($obj->gia_net !== 0)          //&& $obj->tong_tien === 0
            $obj->tong_tien = $obj->gia_net * 1.1 + $obj->phu_phi + $obj->phi_san_bay + $obj->phu_phi_san_bay;
    }

    /**
     * Tính phụ phí nơi mua thu cho đặt vé
     */
    public static function phu_phi_noi_mua(DatVe &$obj)
    {
        $tk = TaiKhoan::find($obj->id_tai_khoan_mua)->first();
        if ($tk) {
            switch ($obj->hang_bay) {
                case 'VN':
                    $obj->phu_phi = $tk->phi_vn ?? 0;
                    break;
                case 'VJ':
                    $obj->phu_phi = $tk->phi_vj ?? 0;
                    break;
                case 'Jets':
                    $obj->phu_phi = $tk->phi_jets ?? 0;
                    break;
                case 'BB':
                    $obj->phu_phi = $tk->phi_bb ?? 0;
                    break;
            }
            if (!empty($obj->sb_ve)) $obj->phu_phi *= 2;
        }
    }
}

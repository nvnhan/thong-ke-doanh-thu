<?php

namespace App\Helpers;

use App\DatVe;
use App\Util;
use Illuminate\Http\Request;
use stdClass;

class ThemText
{
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

    public static function parse_bamboo($lines, Request $request)
    {
        $hanh_khach = [];
        $so_ve = [];
        $i = 0;
        $line = "";

        for ($i = 1; $i < count($lines); $i++) {    // Tên khách từ Passengers
            $line = trim($lines[$i]);

            if ($line === "Passengers" || $line === "Hành khách") {      // Bắt đầu danh sách hành khách
                $i++;
                for (; $i < count($lines); $i++) {
                    $line = $lines[$i];
                    if ($line === "Outbound Flight" || $line === "Chuyến bay đi" || $line === "Khởi hành")        // Khi chuyển sang thông tin chuyến bay thì dừng
                        break;
                    $line = str_replace("(Em bé)", "", $line);
                    $line = self::remove_prefix_name($line, ". ");

                    preg_match("/^([A-Z ]+)$/", $line, $matches);
                    if (count($matches) > 0)      // Tên khách
                        $hanh_khach[] = $line;

                    preg_match("/^[0-9]{10,13}$/", $line, $matches);
                    if (count($matches) > 0)     // Số vé
                        $so_ve[] = $line;
                }
                break;
            }
        }
        $i++;
        $tmp = new stdClass;

        $line = trim(str_replace('.', ' ', $lines[$i]));
        preg_match("/(\d{2}) (.+) (\d{4})/", $line, $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
        $imonth = array_search($matches[2], Util::$thang_full) +
            array_search($matches[2], Util::$thang_full_viet) + 1;     // Bao cả tiếng Việt & Anh

        $spl = explode(":", $lines[++$i]);      // Giờ bay ở dòng tiếp theo
        // Ngày giờ bay  đi
        $tmp->ngay_gio_di = "$matches[3]-$imonth-$matches[1] $spl[0]:$spl[1]:0";

        preg_match("/[A-Z]{3}/", $lines[++$i], $matches);
        $tmp->sb_di = $matches[0];        // Dòng tiếp theo là mã sân bay đi
        $i += 2;
        preg_match("/[A-Z]{3}/", $lines[$i], $matches);
        $tmp->sb_di1 = $matches[0];       // Cách 2 dòng là mã sân bay đi 1   
        $i += 2;
        $tmp->cb_di = trim(explode(":", $lines[$i])[1]);     // cách 2 dòng là mã chuyến bay
        /////////////////////////////////////
        // Chuyến về???????????
        $line = '';
        $i++;
        while ($line == "" && $i < count($lines)) $line = $lines[$i++];

        if ($line == "Outbound Flight" || $line == "Chuyến bay đi" || $line == "Khởi hành") {
            $line = trim(str_replace('.', ' ', $lines[$i]));
            preg_match("/(\d{2}) (.+) (\d{4})/", $line, $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
            $imonth = array_search($matches[2], Util::$thang_full) +
                array_search($matches[2], Util::$thang_full_viet) + 1;     // Bao cả tiếng Việt & Anh

            $spl = explode(":", $lines[++$i]);      // Giờ bay ở dòng tiếp theo
            // Ngày giờ bay  đi
            $tmp->ngay_gio_ve = "$matches[3]-$imonth-$matches[1] $spl[0]:$spl[1]:0";

            preg_match("/[A-Z]{3}/", $lines[++$i], $matches);
            $tmp->sb_ve = $matches[0];        // Dòng tiếp theo là mã sân bay đi
            $i += 2;
            preg_match("/[A-Z]{3}/", $lines[$i], $matches);
            $tmp->sb_ve1 = $matches[0];       // Cách 2 dòng là mã sân bay đi 1   
            $i += 2;
            $tmp->cb_ve = trim(explode(":", $lines[$i])[1]);     // cách 2 dòng là mã chuyến bay
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();
            $obj->username = $request->user()->username;
            $obj->hang_bay = "BB";
            $obj->ngay_thang = date("Y-m-d");
            $obj->loai_tuoi = 0;

            if (count($so_ve) > $j)
                $obj->so_ve = $so_ve[$j];
            //TODO: So ve mac dinh
            // else
            //     dv.SoVe = Properties.Settings.Default.SoVeVNMacDinh;
            $obj->fill((array) $tmp);
            $obj->fill($request->all());
            //TODO: addGia(ref dv, j == 0);

            //TODO: Chung code???
            // if (dv.GiaNet == 0 && chkChungCode.Checked)
            // {
            //     dv.TenKhach = String.Join(", ", lstHanhKhach);
            //     lstDatVe.Add(dv);
            //     break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            // }
            // else
            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();
            $result[] = $obj;
        }

        return $result;
    }
}

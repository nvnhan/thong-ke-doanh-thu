<?php

namespace App\Helpers;

use App\DatVe;
use App\Util;
use DateTime;
use Illuminate\Http\Request;
use stdClass;

class ThemText
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
     * Parse Bamboo Airline
     */
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
            $obj->ma_giu_cho = trim($lines[0]);
            $obj->ngay_thang = date("Y-m-d");
            $obj->loai_tuoi = 0;

            if (count($so_ve) > $j)
                $obj->so_ve = $so_ve[$j];
            //TODO: So ve mac dinh
            // else
            //     dv.SoVe = Properties.Settings.Default.SoVeVNMacDinh;

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...

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
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse VietJet
     */
    public static function parse_vj($lines, Request $request)
    {
        $hanh_khach = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->so_ve = trim($lines[0]);
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VJ";
        $tmp->loai_tuoi = 0;
        $tmp->ngay_thang = date('Y-m-d');

        for ($i = 0; $i < count($lines); $i++) {
            preg_match("/(\d+)\/(\d+)\/(\d+)/", $lines[$i], $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
            if (count($matches) > 0) {
                $tmp->ngay_thang = "$matches[3]-$matches[2]-$matches[1]";
                break;
            }
        }
        for (; $i < 10; $i++) {
            $line = trim($lines[$i]);
            if (strpos($line, "Tên hành khách") !== false || strpos($line, "Passenger Name") !== false)
                break;
        }
        $i++;
        for (; $i < count($lines); $i += 2) {
            preg_match("/^[A-Z ,]+$/", $lines[$i], $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
            if (count($matches) > 0)
                $hanh_khach[] = trim(str_replace(',', '', $lines[$i]));
            else
                break;
        }
        $i += 2;

        // Chiều đi
        $line = $lines[$i++];
        $tmp->cb_di = explode(' ', str_replace("\t", ' ', $line))[0];

        preg_match("/(\d+)\/(\d+)\/(\d+)/", $line, $matches);
        preg_match("/(\d+):(\d+)/", $line, $matches1);
        $tmp->ngay_gio_di = "$matches[3]-$matches[2]-$matches[1] $matches1[1]:$matches1[2]:0";
        preg_match_all("/\(([A-Z]{3})\)/", $line, $matches);
        $tmp->sb_di = $matches[1][0];
        $tmp->sb_di1 = $matches[1][1];

        // // Chuyến về tương tự
        if (count($lines) > $i) {
            $line = $lines[$i];
            $tmp->cb_ve = explode(' ', str_replace("\t", ' ', $line))[0];

            preg_match("/(\d+)\/(\d+)\/(\d+)/", $line, $matches);
            preg_match("/(\d+):(\d+)/", $line, $matches1);
            if (count($matches) > 0 && count($matches1) > 0) {
                $tmp->ngay_gio_ve = "$matches[3]-$matches[2]-$matches[1] $matches1[1]:$matches1[2]:0";
                preg_match_all("/\(([A-Z]{3})\)/", $line, $matches);
                $tmp->sb_ve = $matches[1][0];
                $tmp->sb_ve1 = $matches[1][1];
            }
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...

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
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }
}

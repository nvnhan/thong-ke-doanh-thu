<?php

namespace App\Helpers;

use App\DatVe;
use Illuminate\Http\Request;
use stdClass;

class ThemText
{

    /**
     * Parse Bamboo Airline
     */
    public static function parse_bamboo($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $so_ve = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "BB";
        $tmp->ma_giu_cho = trim($lines[0]);
        $tmp->ngay_thang = date("Y-m-d");
        $tmp->loai_tuoi = 0;
        $tmp->dinh_danh = $dinh_danh;

        for ($i = 1; $i < count($lines); $i++) {    // Tên khách từ Passengers
            $line = trim($lines[$i]);

            if ($line === "Passengers" || $line === "Hành khách") {      // Bắt đầu danh sách hành khách
                $i++;
                for (; $i < count($lines); $i++) {
                    $line = $lines[$i];
                    if ($line === "Outbound Flight" || $line === "Chuyến bay đi" || $line === "Khởi hành")        // Khi chuyển sang thông tin chuyến bay thì dừng
                        break;
                    $line = str_replace("(Em bé)", "", $line);
                    $line = DatVeHelper::remove_prefix_name($line, ". ");

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
            $obj->fill((array) $tmp);

            if (count($so_ve) > $j)
                $obj->so_ve = $so_ve[$j];
            else
                $obj->so_ve = env('SO_VE_VN_MAC_DINH');

            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse Bamboo Airline + VJ 25/02/2023
     */
    public static function parse_bamboo_vj($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $so_ve = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "BB";
        $tmp->ma_giu_cho = trim($lines[0]);
        $tmp->ngay_thang = date("Y-m-d");
        $tmp->loai_tuoi = 0;
        $tmp->dinh_danh = $dinh_danh;

        for ($i = 1; $i < count($lines); $i++) {    // Tên khách từ Passengers
            $line = trim($lines[$i]);
            if ($line == "ITINERARY")
                break;

            if (preg_match("/^[0-9]+. ([A-Z \/]+)$/", $line, $matches) != false) {
                $hanh_khach[] = trim(DatVeHelper::remove_prefix_name(str_replace('/', ' ', $matches[1])));
            }
        }
        $line =  $lines[++$i];
        $year = date("Y");
        // 1 QH 1544 26APR ECONOMYSMART SGNHPH 1030 1240
        if (preg_match("/(QH|VJ) (\d{3,}) (\d{2})([A-Z]{3}) ([a-zA-Z0-9_\-]+) ([A-Z]{3})([A-Z]{3}) (\d{2})(\d{2})/", $line, $matches)) {
            $tmp->hang_bay = $matches[1] == "QH" ? "BB" : "VJ";

            $tmp->cb_di = "$matches[1] $matches[2]";
            // Ngày giờ bay  đi
            $imonth = array_search($matches[4], Util::$thang) + 1;
            $tmp->ngay_gio_di = "$year-$imonth-$matches[3] $matches[8]:$matches[9]:0";

            // Sân bay đi
            $tmp->sb_di = $matches[6];
            $tmp->sb_di1 = $matches[7];
        }

        /////////////////////////////////////
        // Chuyến về???????????
        $line =  $lines[++$i];
        if (!str_contains($line, "TIMELIMIT")) {
            if (preg_match("/(QH|VJ) (\d{3,}) (\d{2})([A-Z]{3}) ([a-zA-Z0-9_\-]+) ([A-Z]{3})([A-Z]{3}) (\d{2})(\d{2})/", $line, $matches)) {

                $tmp->cb_ve = "$matches[1] $matches[2]";
                // Ngày giờ bay  về
                $imonth = array_search($matches[4], Util::$thang) + 1;
                $tmp->ngay_gio_ve = "$year-$imonth-$matches[3] $matches[8]:$matches[9]:0";

                // Sân bay về
                $tmp->sb_ve = $matches[6];
                $tmp->sb_ve1 = $matches[7];
            }
            $line = $lines[++$i];
        }
        if (strpos($line, "TIMELIMIT") >= 0) {
            // Ngày đặt vé
            if (preg_match("/(\d{2})\/(\d{2})\/(\d{4})/", $line, $matches))
                $tmp->ngay_thang = "$matches[3]-$matches[2]-$matches[1]";
        }

        // Số vé
        for (; $i < count($lines); $i++) {
            $line = $lines[$i];
            if (preg_match("/[0-9]{10,13}/", $line, $matches))
                $so_ve[] = $matches[0];
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();
            $obj->fill((array) $tmp);

            if (count($so_ve) > $j)
                $obj->so_ve = $so_ve[$j];
            else
                $obj->so_ve = $tmp->ma_giu_cho;

            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse VietJet moi ngay 22/6
     */
    public static function parse_vj($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $em_be = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->so_ve = trim($lines[0]);
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VJ";
        $tmp->loai_tuoi = 0;
        $tmp->ngay_thang = date('Y-m-d');
        $tmp->dinh_danh  = $dinh_danh;

        // Mẫu ngày 20/07/2022: Không có ngày tháng đặt vé

        $fail = true;
        for ($i = 1; $i < 10; $i++) {
            $line = trim($lines[$i]);
            if (strpos($line, "Chặng 1") !== false) {
                $fail = false;
                break;
            }
        }
        if ($fail) return self::parse_vj_new($lines, $request, $dinh_danh);
        // Chiều đi
        $line = $lines[$i];
        preg_match("/([A-Z]{3})-([A-Z]{3})([A-Z0-9]+)$/", $line, $matches);
        $tmp->cb_di = $matches[3];
        $tmp->sb_di = $matches[1];
        $tmp->sb_di1 = $matches[2];

        $i += 2;
        preg_match("/(\d+)\/(\d+)\/(\d{4})/", $lines[$i], $matches);
        preg_match("/(\d+):(\d+)/", $lines[$i], $matches1);
        $tmp->ngay_gio_di = "$matches[3]-$matches[2]-$matches[1] $matches1[1]:$matches1[2]:0";

        $i += 2;
        for (; $i < count($lines); $i += 2) {
            preg_match("/([A-Z]+[A-Z, ]+)$/", $lines[$i], $matches); // Họ tên hành khách 
            if (count($matches) > 0) {
                $hanh_khach[] = trim(str_replace(',', '', $matches[1]));
                if (strpos($lines[$i], 'Em bé') !== false) $em_be[] = true;
                else $em_be[] = false;
            } else
                break;
        }

        if (count($hanh_khach) === 0) return self::parse_vj_old($lines, $request, $dinh_danh);

        // // Chuyến về tương tự
        for (; $i < count($lines); $i++) {
            $line = trim($lines[$i]);
            if (strpos($line, "Chặng 2") !== false) {
                $line = $lines[$i];
                preg_match("/([A-Z]{3})-([A-Z]{3})([A-Z0-9]+)$/", $line, $matches);
                $tmp->cb_ve = $matches[3];
                $tmp->sb_ve = $matches[1];
                $tmp->sb_ve1 = $matches[2];
                $i += 2;
                preg_match("/(\d+)\/(\d+)\/(\d{4})/", $lines[$i], $matches);
                preg_match("/(\d+):(\d+)/", $lines[$i], $matches1);
                $tmp->ngay_gio_ve = "$matches[3]-$matches[2]-$matches[1] $matches1[1]:$matches1[2]:0";
                break;
            }
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            if ($em_be[$j]) $obj->loai_tuoi = 2;
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse VietJet moi ngay 20/11/2023
     */
    public static function parse_vj_new($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $em_be = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->so_ve = trim($lines[0]);
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VJ";
        $tmp->loai_tuoi = 0;
        $tmp->ngay_thang = date('Y-m-d');
        $tmp->dinh_danh  = $dinh_danh;

        for ($i = 1; $i < 10; $i++) {
            $line = trim($lines[$i]);
            if (strpos($line, "Ngày đặt") !== false) {
                preg_match("/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/", $line, $matches);
                $tmp->ngay_thang = "$matches[3]-$matches[2]-$matches[1]";
                $i += 4;
                break;
            }
        }
        // Hành khách
        for (; $i < count($lines); $i += 2) {
            preg_match("/([A-Z]+[A-Z, ]+)$/", $lines[$i], $matches); // Họ tên hành khách 
            if (count($matches) > 0) {
                $hanh_khach[] = trim(str_replace(',', '', $matches[1]));
                if (strpos($lines[$i], 'Em bé') !== false) $em_be[] = true;
                else $em_be[] = false;
            } else
                break;
        }

        // Chiều đi
        $i += 2;
        $line = $lines[$i];
        if (preg_match("/([A-Z0-9]+)(.*)([0-9]{2})\/([0-9]{2})\/([0-9]{4})(.*)([0-9]{2}):([0-9]{2})(.*)([A-Z]{3})(.*)([A-Z]{3})/", $line, $matches)) {
            $tmp->cb_di = $matches[1];
            $tmp->ngay_gio_di = "$matches[5]-$matches[4]-$matches[3] $matches[7]:$matches[8]:0";
            $tmp->sb_di = $matches[10];
            $tmp->sb_di1 = $matches[12];
        }

        // // Chuyến về tương tự
        if ($i < count($lines) - 1 && preg_match("/([A-Z0-9]+)(.*)([0-9]{2})\/([0-9]{2})\/([0-9]{4})(.*)([0-9]{2}):([0-9]{2})(.*)([A-Z]{3})(.*)([A-Z]{3})/", $lines[$i + 1], $matches)) {
            $tmp->cb_ve = $matches[1];
            $tmp->ngay_gio_ve = "$matches[5]-$matches[4]-$matches[3] $matches[7]:$matches[8]:0";
            $tmp->sb_ve = $matches[10];
            $tmp->sb_ve1 = $matches[12];
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            if ($em_be[$j]) $obj->loai_tuoi = 2;
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

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
    public static function parse_vj_old($lines, Request $request, $dinh_danh)
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
        $tmp->dinh_danh  = $dinh_danh;

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
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse VietNam Airline
     */
    public static function parse_vn($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $tre_em = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->ma_giu_cho = trim($lines[0]);
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VN";
        $tmp->ngay_thang = date('Y-m-d');
        $tmp->dinh_danh  = $dinh_danh;

        for ($i = 1; $i < count($lines); $i++)        // Tên khách từ hàng thứ 2 trở đi
        {
            $line = trim($lines[$i]);
            $line = str_replace('/', ' ', $line);
            $line = DatVeHelper::remove_prefix_name($line);
            preg_match_all("/\d\.(I )?1([A-Z ]+)/", $line, $matches1);
            if (count($matches1[2]) > 0) {
                foreach ($matches1[2] as $key => $value) { // Trong 1 hàng có thể có nhiều khách
                    if (strpos($matches1[0][$key], "I 1") !== false)      // EM bé
                        $tre_em[] = true;
                    else $tre_em[] = false;
                    $hanh_khach[] = trim($value);
                }
            } else
                break;
        }

        #region Chuyến bay đầu tiên
        $line = trim($lines[$i++]);    // Mã chuyến bay, hành trình, giờ bay
        $line = str_replace("VN ", "VN", $line);
        $line = str_replace("VN ", "VN", $line);
        $line = str_replace("VN ", "VN", $line);

        $arr = explode(' ', $line);
        $tmp->cb_di = substr($arr[1], 0, strlen($arr[1]) - 1);    // Bỏ ký tự cuối cùng

        // Ngày bay
        preg_match('/\d+/', $arr[2], $matches);
        $ngay = $matches[0];
        preg_match('/[A-Z]{3}/', $arr[2], $matches);
        $thang = array_search($matches[0], Util::$thang);
        if ($thang !== false) $thang += 1;
        $nam = date('Y');
        // Giờ bay
        preg_match_all('/ (\d{4}) /', $line, $matches1);         // Exclude: VN7578A 
        $gio = substr($matches1[1][0], 0, 2);
        $phut = substr($matches1[1][0], 2, 2);
        $tmp->ngay_gio_di = "$nam-$thang-$ngay $gio:$phut:00";

        // Hành trình bay
        preg_match('/[A-Z]{6}/', $line, $matches);
        $tmp->sb_di = substr($matches[0], 0, 3);
        $tmp->sb_di1 = substr($matches[0], 3, 3);
        if (strpos($lines[$i], "OPERATED BY") !== false || strpos($lines[$i], "DCVN") !== false)
            $i++;
        #endregion

        #region Chuyến bay thứ hai
        $line = trim($lines[$i]);
        if (preg_match('/\d/', $line)) {
            $i++;
            $line = str_replace("VN ", "VN", $line);
            $line = str_replace("VN ", "VN", $line);
            $line = str_replace("VN ", "VN", $line);

            $arr = explode(' ', $line);
            $tmp->cb_ve = substr($arr[1], 0, strlen($arr[1]) - 1);    // Bỏ ký tự cuối cùng

            // Ngày bay
            preg_match('/\d+/', $arr[2], $matches);
            $ngay = $matches[0];
            preg_match('/[A-Z]{3}/', $arr[2], $matches);
            $thang = array_search($matches[0], Util::$thang);
            if ($thang !== false) $thang += 1;
            $nam = date('Y');
            // Giờ bay
            preg_match_all('/ (\d{4}) /', $line, $matches1);         // Exclude: VN7578A 
            $gio = substr($matches1[1][0], 0, 2);
            $phut = substr($matches1[1][0], 2, 2);
            $tmp->ngay_gio_ve = "$nam-$thang-$ngay $gio:$phut:00";

            // Hành trình bay
            preg_match('/[A-Z]{6}/', $line, $matches);
            $tmp->sb_ve = substr($matches[0], 0, 3);
            $tmp->sb_ve1 = substr($matches[0], 3, 3);
            if (strpos($lines[$i], "OPERATED BY") !== false || strpos($lines[$i], "DCVN") !== false)
                $i++;
        }
        #endregion

        $i++;
        $line = trim($lines[$i++]);
        if (strpos($line, '-') !== false)         // Nếu có ngày đặt
        {
            $arr = explode('-', $line);
            // Ngày đặt
            preg_match('/\d+/', $arr[1], $matches);
            $ngay = $matches[0];
            preg_match('/[A-Z]{3}/', $arr[1], $matches);
            $thang = array_search($matches[0], Util::$thang);
            if ($thang !== false) $thang += 1;
            $nam = date('Y');
            $tmp->ngay_thang = "$nam-$thang-$ngay";
        }
        // Số vé
        $so_ve = [];
        for (; $i < count($lines); $i++) {
            if (preg_match('/\d{13}/', $lines[$i], $matches))
                $so_ve[] = $matches[0];
            if (count($so_ve) === count($hanh_khach))
                break;
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();

            if (count($so_ve) > $j)
                $obj->so_ve = $so_ve[$j];
            else
                $obj->so_ve = env('SO_VE_VN_MAC_DINH');

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            $obj->loai_tuoi = (int) $tre_em[$j];
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse Mail VietNam Airline
     */
    public static function parse_vn_mail($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $so_ve = [];
        $i = 0;
        $line = "";
        $tmp = new stdClass;
        $tmp->ma_giu_cho = trim($lines[0]);
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VN";
        $tmp->loai_tuoi = 0;
        $tmp->ngay_thang = date('Y-m-d');
        $tmp->dinh_danh = $dinh_danh;

        #region Chuyến bay đầu tiên
        for ($i = 1; $i < count($lines); $i++)        // Tên khách từ hàng thứ 2 trở đi
        {
            $line = $lines[$i];
            if (preg_match('/VN( ?)\d{3,4}/', $line, $matches)) {
                $tmp->cb_di = $matches[0];

                $line = $lines[++$i];       // Next line: CONFIRMED	Saturday, 20 June
                preg_match('/\d+/', $line, $matches1); // 20
                $iday = $matches1[0];
                $arr = explode(' ', $line);
                $month = end($arr);      // June
                $imonth = array_search($month, Util::$thang_full) + 1;

                preg_match('/[A-Z]{3}/', $lines[++$i], $matches1);      // Departure:	SGN HO CHI MINH CITY, VIETNAM
                $tmp->sb_di = $matches1[0];

                preg_match('/(\d+)\:(\d+)/', $lines[++$i], $matches1);
                $tmp->ngay_gio_di = date('Y') . "-$imonth-$iday $matches1[1]:$matches1[2]:00";
                $i++;
                while (empty($tmp->sb_di1))
                    if (preg_match('/\b[A-Z]{3}\b/', $lines[++$i], $matches1))
                        $tmp->sb_di1 = $matches1[0];

                break;
            }
        }
        #endregion

        #region Chuyến bay thứ hai
        $tmpi = $i;
        for ($i; $i < count($lines); $i++)        // Tên khách từ hàng thứ 2 trở đi
        {
            $line = $lines[$i];
            if (preg_match('/VN( ?)\d{3,4}/', $line, $matches)) {
                $tmp->cb_ve = $matches[0];

                $line = $lines[++$i];       // Next line: CONFIRMED	Saturday, 20 June
                preg_match('/\d+/', $line, $matches1); // 20
                $iday = $matches1[0];
                $arr = explode(' ', $line);
                $month = end($arr);      // June
                $imonth = array_search($month, Util::$thang_full) + 1;

                preg_match('/[A-Z]{3}/', $lines[++$i], $matches1);      // Departure:	SGN HO CHI MINH CITY, VIETNAM
                $tmp->sb_ve = $matches1[0];

                preg_match('/(\d+)\:(\d+)/', $lines[++$i], $matches1);
                $tmp->ngay_gio_ve = date('Y') . "-$imonth-$iday $matches1[1]:$matches1[2]:00";
                $i++;
                while (empty($tmp->sb_ve1))
                    if (preg_match(
                        '/\b[A-Z]{3}\b/',
                        $lines[++$i],
                        $matches1
                    ))
                        $tmp->sb_ve1 = $matches1[0];

                break;
            }
        }
        #endregion

        for ($i = $tmpi; $i < count($lines); $i++) {
            $line = trim($lines[$i]);
            if (strpos($line, 'Your ticket') !== false || strpos($line, 'Số vé') !== false) {
                $i++;
                for ($i; $i < count($lines); $i++) {
                    $arr = explode(':', $lines[$i]);         // Mrs Thi Long Nguyen: 7382440537326
                    $hanh_khach[] = DatVeHelper::remove_prefix_name($arr[0]);
                    $so_ve[] = trim($arr[1]);
                }
                break;
            }
        }

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();

            if (count($so_ve) > $j)
                $obj->so_ve = $so_ve[$j];
            else
                $obj->so_ve = env('SO_VE_VN_MAC_DINH');

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }

    /**
     * Parse VietJet, VietNam moi ngay 20/02/2024
     * MJDNJC
     * HAN SGN VN213 1300 25/02/2024
     * SGN HAN VN214 1400 26/02/2024
     * DO THI LAN 7382465684635
     */
    public static function parse_vj_vn_custom($lines, Request $request, $dinh_danh)
    {
        $hanh_khach = [];
        $so_ve = [];
        $i = 0;
        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->loai_tuoi = 0;
        $tmp->ngay_thang = date('Y-m-d');
        $tmp->dinh_danh  = $dinh_danh;

        if (strpos($lines[1], 'VJ') !== false) {
            $tmp->hang_bay = "VJ";
            $tmp->so_ve = trim($lines[0]);
        } else if (strpos($lines[1], 'VN') !== false) {
            $tmp->hang_bay = "VN";
            $tmp->ma_giu_cho = trim($lines[0]);
        } else return [];

        $i++;
        $regex_chuyen_bay = "/^([A-Z]{3}) ([A-Z]{3}) ([A-Z0-9]+) ([0-9]{2})([0-9]{2}) ([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/";
        // Chiều đi
        if (preg_match($regex_chuyen_bay, $lines[$i], $matches)) {
            $tmp->sb_di = $matches[1];
            $tmp->sb_di1 = $matches[2];
            $tmp->cb_di = $matches[3];
            $tmp->ngay_gio_di = "$matches[8]-$matches[7]-$matches[6] $matches[4]:$matches[5]:0";
            $i++;

            // Chuyến về tương tự
            if (preg_match($regex_chuyen_bay, $lines[$i], $matches)) {
                $tmp->sb_ve = $matches[1];
                $tmp->sb_ve1 = $matches[2];
                $tmp->cb_ve = $matches[3];
                $tmp->ngay_gio_ve = "$matches[8]-$matches[7]-$matches[6] $matches[4]:$matches[5]:0";
                $i++;
            }
        }

        // Hành khách
        for (; $i < count($lines); $i++) {
            preg_match("/^([A-Z ]+)([0-9]*)$/", $lines[$i], $matches); // Họ tên hành khách 
            if (count($matches) > 1) {
                $hanh_khach[] = trim($matches[1]);
                if (count($matches) > 2 && !empty($matches[2]))
                    $so_ve[] = trim($matches[2]);
            } else
                break;
        }
        // \Log::debug($so_ve);

        $result = [];
        for ($j = 0; $j < count($hanh_khach); $j++) {
            $obj = new DatVe();

            $obj->fill((array) $tmp);
            $obj->fill($request->all());        // Gia net, tong tien, thu khach, tai khoan mua, khach hang...
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net == 0 && $request->chung_code) {
                $obj->ten_khach = implode(", ", $hanh_khach);
                $obj->save();
                $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            if (count($so_ve) > $j) $obj->so_ve = $so_ve[$j];
            $obj->save();
            $obj->refresh();        // Reload object from sql
            $result[] = $obj;
        }

        return $result;
    }
}

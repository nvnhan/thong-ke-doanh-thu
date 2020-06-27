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
    public static function parse_bamboo($lines, Request $request)
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
            if ($obj->gia_net === 0 && $request->chung_code) {
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
            DatVeHelper::add_gia($obj, $request);

            // Chung code???
            if ($obj->gia_net === 0 && $request->chung_code) {
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
    public static function parse_vn($lines, Request $request)
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

        for ($i = 1; $i < count($lines); $i++)        // Tên khách từ hàng thứ 2 trở đi
        {
            $line = trim($lines[$i]);
            $line = str_replace('/', ' ', $line);
            $line = DatVeHelper::remove_prefix_name($line);
            preg_match_all("/\d\.(I )?1([A-Z ]+)/", $line, $matches);
            if (count($matches[2]) > 0) {
                foreach ($matches[2] as $key => $value) { // Trong 1 hàng có thể có nhiều khách
                    if (strpos($matches[0][$key], "I 1") !== false)      // EM bé
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
        preg_match_all('/ (\d{4}) /', $line, $matches);         // Exclude: VN7578A 
        $gio = substr($matches[1][0], 0, 2);
        $phut = substr($matches[1][0], 2, 2);
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
            preg_match('/\d{4}/', $line, $matches);
            $gio = substr($matches[0], 0, 2);
            $phut = substr($matches[0], 2, 2);
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
            if ($obj->gia_net === 0 && $request->chung_code) {
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
    public static function parse_vn_mail($lines, Request $request)
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
            if ($obj->gia_net === 0 && $request->chung_code) {
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
}

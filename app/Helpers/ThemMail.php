<?php

namespace App\Helpers;

use App\DatVe;
use App\SanBay;
use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use DateTime;
use Illuminate\Http\Request;
use stdClass;

class ThemMail
{
    public static function tim_san_bay_theo_tv($ten)
    {
        $ten = Util::vn_to_str(html_entity_decode($ten));
        $ten = trim(str_replace(['Tp.', 'Thanh pho', 'Thanh Pho', 'City'],  '', $ten));
        $sb = SanBay::where('ten_san_bay', 'like', "%$ten%")->first();
        return optional($sb)->ma_san_bay;
    }

    public static function get_all_mail(Request $request)
    {
        $data = [];
        $mails = LaravelGmail::message()->subject($request->tu_khoa)->take($request->gioi_han);
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $mails = $mails->after(strtotime($request->bat_dau))->before(strtotime($request->ket_thuc));
        else
            $mails = $mails->after(strtotime(date('Y-m-01')))->before(strtotime(date('Y-m-t 23:59')));

        // Documnent: https://github.com/dacastro4/laravel-gmail/tree/v3.2.6
        $mails = $mails->preload()->all();
        foreach ($mails as $mail) {
            $tmp = new stdClass;
            $tmp->id = $mail->getId();
            $da = new DateTime();
            $da->setTimestamp((int) substr($mail->getInternalDate(), 0, 10));
            $tmp->ngay_thang = $da->format('d/m/Y');

            $tmp->nguoi_gui = str_replace("\"", '', $mail->getFromName());
            $tmp->email = $mail->getSubject();
            $data[] = $tmp;
        }
        return $data;
    }

    public static function get_mail_body(string $id)
    {
        $s = "";
        $mail = LaravelGmail::message()->get($id);
        $s = $mail->getHtmlBody();
        if (empty($s)) $s = $mail->getPlainTextBody();
        return $s;
    }


    public static function parse_bb(string $body, Request $request, $dinh_danh)
    {
        $path = storage_path('app/upload/test.html');
        file_put_contents($path, $body);

        $content = str_get_html($body);

        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "BB";
        $tmp->loai_tuoi = 0;
        $tmp->dinh_danh = $dinh_danh;

        $hanh_khach = [];
        // Ten hanh khach
        $node = $content->find('div[style=cursor:auto;color:#424853;font-family:trebuchet, sans-serif;font-size:16px;line-height:22px;;text-align:left;]');
        foreach ($node as $hk) {
            $ten = str_replace(["(Em bé)", "\t", "&nbsp;"], "", $hk->plaintext);
            $ten = str_replace('  ', ' ', $ten);
            $ten = trim(DatVeHelper::remove_prefix_name($ten, '. '));
            $hanh_khach[] = $ten;
        }
        $so_ve = [];
        // So ve dien tu
        $node = $content->find('td[style=word-break:break-word;font-size:1px;padding:10px 0px 0px 0px;text-align:left;white-space:nowrap;width:100%;]');
        foreach ($node as $sv) {
            $ve = $sv->parent()->parent()->plaintext;
            if (preg_match("/[0-9]{13}/", $ve, $matches))
                $so_ve[] = $matches[0];
        }
        // Hanh trinh
        $node = $content->find('td[style=vertical-align:top;]');

        #region Chuyen bay dau tien
        $line = $node[0]->parent()->parent()->plaintext; // Lay ca table

        preg_match("/(\d{2}) (.+) (\d{4})/", $line, $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
        $imonth = array_search($matches[2], Util::$thang_full) +
            array_search($matches[2], Util::$thang_full_viet) + 1;     // Bao cả tiếng Việt & Anh

        preg_match("/(\d+):(\d+)/", $line, $matches1);
        // Ngày giờ bay  đi
        $tmp->ngay_gio_di = "$matches[3]-$imonth-$matches[1] $matches1[1]:$matches1[2]:0";

        preg_match_all("/\(([A-Z]{3})\)/", $line, $matches);
        $tmp->sb_di = $matches[1][0];        // Dòng tiếp theo là mã sân bay đi
        $tmp->sb_di1 = $matches[1][1];
        preg_match("/bay: ([a-zA-Z0-9]+)/", $line, $matches);
        $tmp->cb_di = trim($matches[1]);     // cách 2 dòng là mã chuyến bay
        #endregion

        #region Chuyen bay thu hai
        if (count($node) > 1) {
            $line = $node[1]->parent()->parent()->plaintext; // Lay ca table

            preg_match("/(\d{2}) (.+) (\d{4})/", $line, $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
            $imonth = array_search($matches[2], Util::$thang_full) +
                array_search($matches[2], Util::$thang_full_viet) + 1;     // Bao cả tiếng Việt & Anh

            preg_match("/(\d+):(\d+)/", $line, $matches1);
            // Ngày giờ bay  đi
            $tmp->ngay_gio_ve = "$matches[3]-$imonth-$matches[1] $matches1[1]:$matches1[2]:0";

            preg_match_all("/\(([A-Z]{3})\)/", $line, $matches);
            $tmp->sb_ve = $matches[1][0];        // Dòng tiếp theo là mã sân bay đi
            $tmp->sb_ve1 = $matches[1][1];
            preg_match("/bay: ([a-zA-Z0-9]+)/", $line, $matches);
            $tmp->cb_ve = trim($matches[1]);     // cách 2 dòng là mã chuyến bay
        }

        #endregion

        // Ma giu cho
        $node = $content->find('td[style=padding: 0px 0px 0px 0px; line-height: 18px]');
        $tmp->ma_giu_cho = trim($node[1]->plaintext);

        // Ngay dat
        preg_match("/(\d{2}) (.+) (\d{4})/", str_replace("&nbsp;", ' ', $node[0]->plaintext), $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
        $imonth = array_search($matches[2], Util::$thang_full) +
            array_search($matches[2], Util::$thang_full_viet) + 1;     // Bao cả tiếng Việt & Anh
        $tmp->ngay_thang = "$matches[3]-$imonth-$matches[1]";

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
                // $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $result[] = $obj;
        }

        return $result;
    }

    public static function parse_vn(string $body, Request $request, $dinh_danh)
    {
        $content = str_get_html($body);

        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VN";
        $tmp->loai_tuoi = 0;
        $tmp->dinh_danh = $dinh_danh;
        $tmp->ngay_thang = date('Y-m-d');

        $hanh_khach = [];
        // Ten hanh khach
        $node = $content->find('b[id^=documents-passenger]');
        foreach ($node as $hk) {
            $ten = strtoupper(str_replace(':', '', $hk->plaintext));
            $ten = trim(DatVeHelper::remove_prefix_name($ten));
            $hanh_khach[] = $ten;
        }
        $so_ve = [];
        // So ve dien tu
        $node = $content->find('a[id^=document-link]');
        foreach ($node as $sv) {
            $ve = $sv->plaintext;
            if (preg_match("/[0-9]{10,13}/", $ve, $matches))
                $so_ve[] = $matches[0];
        }
        // Thong tin chuyen bay
        $chuyen_bay = $content->find('span[id^=airSegment-flight-number]');
        $ngay_bay = $content->find('strong[id^=airSegment-flight-date]');
        $khoi_hanh = $content->find('span[id^=airSegment-departure-city]');
        $diem_den = $content->find('span[id^=airSegment-arrival-city]');

        #region Chuyen bay dau tien
        $tmp->cb_di = trim($chuyen_bay[0]->plaintext);

        $line = trim($ngay_bay[0]->plaintext);
        // Tuesday, 25 June
        // Tiếng Việt: Ngày 26 Tháng 05
        preg_match("/\d+/", $line, $matches);
        $idate = $matches[0];

        $arr = explode(' ', $line);
        $thang = end($arr);
        if (strlen($thang) < 3)
            $imonth = (int) $thang;
        else
            $imonth = array_search(strtoupper(substr($thang, 0, 3)), Util::$thang) + 1;     // Bao cả tiếng Việt & Anh

        preg_match("/(\d+):(\d+)/", $khoi_hanh[0]->parent()->plaintext, $matches);
        // Ngày giờ bay  đi
        $tmp->ngay_gio_di = date('Y') . "-$imonth-$idate $matches[1]:$matches[2]:0";

        $tmp->sb_di = strtoupper(substr(trim($khoi_hanh[0]->plaintext), 0, 3));
        $tmp->sb_di1 = strtoupper(substr(trim($diem_den[0]->plaintext), 0, 3));
        #endregion

        #region Chuyen bay thu hai
        if (count($chuyen_bay) > 1) {
            $tmp->cb_ve = trim($chuyen_bay[1]->plaintext);

            $line = trim($ngay_bay[1]->plaintext);
            // Tuesday, 25 June
            // Tiếng Việt: Ngày 26 Tháng 05
            preg_match("/\d+/", $line, $matches);
            $idate = $matches[0];

            $arr = explode(' ', $line);
            $thang = end($arr);
            if (strlen($thang) < 3)
                $imonth = (int) $thang;
            else
                $imonth = array_search(strtoupper(substr($thang, 0, 3)), Util::$thang) + 1;     // Bao cả tiếng Việt & Anh

            preg_match("/(\d+):(\d+)/", $khoi_hanh[0]->parent()->plaintext, $matches);
            // Ngày giờ bay  đi
            $tmp->ngay_gio_ve = date('Y') . "-$imonth-$idate $matches[1]:$matches[2]:0";

            $tmp->sb_ve = strtoupper(substr(trim($khoi_hanh[1]->plaintext), 0, 3));
            $tmp->sb_ve1 = strtoupper(substr(trim($diem_den[1]->plaintext), 0, 3));
        }
        #endregion

        // Ma giu cho
        $tmp->ma_giu_cho = trim($content->find('td[id=pnr-value]', 0)->plaintext ?? "");

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
                // $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $result[] = $obj;
        }

        return $result;
    }

    public static function parse_vj(string $body, Request $request, $dinh_danh)
    {
        $content = str_get_html($body);

        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "VJ";
        $tmp->loai_tuoi = 0;
        $tmp->dinh_danh = $dinh_danh;
        $tmp->ngay_thang = date('Y-m-d');

        $node = $content->find('span[style^=font-size:25px]');
        $tmp->so_ve = trim($node[0]->plaintext);

        $hanh_khach = [];
        // Ten hanh khach
        for ($i = 1; $i < count($node); $i++) {
            $ten = strtoupper(str_replace(',', '', $node[$i]->plaintext));
            $ten = trim($ten);
            $hanh_khach[] = $ten;
        }
        // Thong tin chuyen bay
        $trs = $content->find('table[cellspacing=0px]', 0);
        $trs = $trs->find('tr');

        #region Chuyen bay dau tien
        $tds = $trs[0]->find('td');
        $tmp->cb_di = trim($tds[0]->plaintext);

        preg_match("/(\d+)\/(\d+)\/(\d+)/", $tds[1]->plaintext, $matches);
        preg_match("/(\d+):(\d+)/", $tds[3]->plaintext, $matches1);
        // Ngày giờ bay  đi
        $tmp->ngay_gio_di = "$matches[3]-$matches[2]-$matches[1] $matches1[1]:$matches1[2]:0";

        preg_match('/\b([A-Z]{3})\b/', $tds[3]->plaintext, $matches);
        $tmp->sb_di = $matches[1];
        preg_match('/\b([A-Z]{3})\b/', $tds[4]->plaintext, $matches);
        $tmp->sb_di1 = $matches[1];
        #endregion

        #region Chuyen bay thu hai
        if (count($trs) > 1) {
            $tds = $trs[1]->find('td');
            $tmp->cb_ve = trim($tds[0]->plaintext);

            preg_match("/(\d+)\/(\d+)\/(\d+)/", $tds[1]->plaintext, $matches);
            preg_match("/(\d+):(\d+)/", $tds[3]->plaintext, $matches1);
            // Ngày giờ bay  đi
            $tmp->ngay_gio_ve = "$matches[3]-$matches[2]-$matches[1] $matches1[1]:$matches1[2]:0";

            preg_match('/\b([A-Z]{3})\b/', $tds[3]->plaintext, $matches);
            $tmp->sb_ve = $matches[1];
            preg_match('/\b([A-Z]{3})\b/', $tds[4]->plaintext, $matches);
            $tmp->sb_ve1 = $matches[1];
        }
        #endregion

        $node = $content->find('th[style=background:#58585a;color:#ffffff;]', 2);
        $node = $node->next_sibling();
        preg_match("/(\d+)\/(\d+)\/(\d+)/", $node->plaintext, $matches);
        $tmp->ngay_thang = "$matches[3]-$matches[2]-$matches[1]";

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
                // $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $result[] = $obj;
        }

        return $result;
    }

    public static function parse_jets(string $body, Request $request, $dinh_danh)
    {
        $content = str_get_html($body);

        $tmp = new stdClass;
        $tmp->username = $request->user()->username;
        $tmp->hang_bay = "Jets";
        $tmp->loai_tuoi = 0;
        $tmp->dinh_danh = $dinh_danh;

        $node = $content->find('td.lighter', 0);
        $tmp->so_ve = trim($node->plaintext);

        // Ngay dat
        $node = $content->find('td.desk', 0);
        preg_match("/(\d+)(.*)(\d{4})/", $node->plaintext, $matches);       // Bao ca tieng Viet & Anh
        $imonth = trim(strtoupper($matches[2]));
        if (substr($imonth, 0, 1) === 'T') {
            $imonth = substr($imonth, 1);
            $thang = (int) $imonth;
        } else {
            $imonth = substr($imonth, 0, 3);
            $thang = array_search($imonth, Util::$thang) + 1;
        }
        $tmp->ngay_thang = "$matches[3]-$thang-$matches[1]";

        $node = $content->find('table.passengers', 0)->find('tr.desk');
        $hanh_khach = [];
        $em_be = [];
        // Ten hanh khach
        for ($i = 1; $i < count($node); $i++) {
            $hk = $node[$i]->find('th', 0);
            $ten = strtoupper($hk->plaintext);
            $ten = trim(DatVeHelper::remove_prefix_name($ten));
            $ten = str_replace(['PASSENGER', ':', '  '], ['', '', ' '], $ten);
            if (empty($ten)) continue;

            $arr = explode('|', str_replace("INFANT", '|', $ten));
            $hanh_khach[] = trim($arr[0]);
            $em_be[] = false;
            if (count($arr) > 1) {      // Co em be
                $hanh_khach[] = trim($arr[1]);
                $em_be[] = true;
            }
        }
        // Thong tin chuyen bay
        $trs = $content->find('table.details', 0)->find('tr');

        #region Chuyen bay dau tien
        $ths = $trs[1]->find('th');
        $tmp->cb_di = trim($ths[1]->find('h4', 0)->plaintext);

        // Ngày giờ bay  đi
        preg_match("/(\d+)(.*)(\d{4})/", $ths[0]->plaintext, $matches);       // Bao ca tieng Viet & Anh
        $imonth = trim(strtoupper($matches[2]));
        if (substr($imonth, 0, 1) === 'T') {
            $imonth = substr($imonth, 1);
            $thang = (int) $imonth;
        } else {
            $imonth = substr($imonth, 0, 3);
            $thang = array_search($imonth, Util::$thang) + 1;
        }
        preg_match_all("/(\d+):(\d+)/", $ths[0]->plaintext, $matches1);
        $tmp->ngay_gio_di = "$matches[3]-$thang-$matches[1] " . $matches1[1][1] . ":" . $matches1[2][1] . ":0";

        $sb = $ths[2]->find('h4', 0)->plaintext;
        $tmp->sb_di = self::tim_san_bay_theo_tv($sb);
        $sb = $ths[3]->find('h4', 0)->plaintext;
        $tmp->sb_di1 = self::tim_san_bay_theo_tv($sb);
        #endregion

        #region Chuyen bay thu hai
        if (count($trs) > 2) {
            $ths = $trs[2]->find('th');
            $tmp->cb_ve = trim($ths[1]->find('h4', 0)->plaintext);

            // Ngày giờ bay  đi
            preg_match("/(\d+)(.*)(\d{4})/", $ths[0]->plaintext, $matches);       // Bao ca tieng Viet & Anh
            $imonth = trim(strtoupper($matches[2]));
            if (substr($imonth, 0, 1) === 'T') {
                $imonth = substr($imonth, 1);
                $thang = (int) $imonth;
            } else {
                $imonth = substr($imonth, 0, 3);
                $thang = array_search($imonth, Util::$thang) + 1;
            }
            preg_match_all("/(\d+):(\d+)/", $ths[0]->plaintext, $matches1);
            $tmp->ngay_gio_ve = "$matches[3]-$thang-$matches[1] " . $matches1[1][1] . ":" . $matches1[2][1] . ":0";

            $sb = $ths[2]->find('h4', 0)->plaintext;
            $tmp->sb_ve = self::tim_san_bay_theo_tv($sb);
            $sb = $ths[3]->find('h4', 0)->plaintext;
            $tmp->sb_ve1 = self::tim_san_bay_theo_tv($sb);
        }
        #endregion

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
                // $obj->refresh();        // Reload object from sql
                $result[] = $obj;
                break;      // Chỉ add 1 hàng đặt vé, Cộng tất cả tên khách vào
            }

            $obj->ten_khach = $hanh_khach[$j];
            $obj->save();
            $result[] = $obj;
        }

        return $result;
    }
}

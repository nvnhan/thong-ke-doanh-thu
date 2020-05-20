<?php

namespace App\Helpers;

use App\DatVe;
use App\Util;
use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use DateTime;
use Illuminate\Http\Request;
use stdClass;

class ThemMail
{
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
        $s = $mail->getPlainTextBody();
        return $s;
    }

    public static function parse_bb(string $body, Request $request, $dinh_danh)
    {
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
            $ten = trim(ThemText::remove_prefix_name($ten, '. '));
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
        $node = $content->find('td[style=border-collapse: collapse;cursor:auto;color:#424853;font-family:trebuchet, sans-serif;font-size:12px;font-weight:normal;line-height:16px;]');

        #region Chuyen bay dau tien
        $line = $node[0]->parent()->parent()->plaintext; // Lay ca table

        preg_match("/(\d{2}) (.+) (\d{4})/", $line, $matches); // Định dạng ngày tháng: dd Tháng MM YYYY
        $imonth = array_search($matches[2], Util::$thang_full) +
            array_search($matches[2], Util::$thang_full_viet) + 1;     // Bao cả tiếng Việt & Anh

        preg_match("/(\d+):(\d+)/", $line, $matches1);
        // Ngày giờ bay  đi
        $tmp->ngay_gio_di = "$matches[3]-$imonth-$matches[1] $matches1[1]:$matches1[2]:0";

        preg_match_all("/\b([A-Z]{3})\b/", $line, $matches);
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

            preg_match_all("/\b([A-Z]{3})\b/", $line, $matches);
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
            $result[] = $obj;
        }

        return $result;
    }

    public static function parse_vj(string $body, Request $request, $dinh_danh)
    {
        $cnt = 0;
        $content = str_get_html($body);

        return $cnt;
    }

    public static function parse_jets(string $body, Request $request, $dinh_danh)
    {
        $cnt = 0;
        $content = str_get_html($body);

        return $cnt;
    }

    public static function parse_vn(string $body, Request $request, $dinh_danh)
    {
        $cnt = 0;
        $content = str_get_html($body);

        return $cnt;
    }
}

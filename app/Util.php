<?php

namespace App;

class Util
{

    public static $thang = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    public static $thang_full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    public static $thang_full_viet = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"];

    public static function vn_to_str($str)
    {
        $unicode = array(
            'a' => 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',
            'd' => 'đ',
            'e' => 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
            'i' => 'í|ì|ỉ|ĩ|ị',
            'o' => 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
            'u' => 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
            'y' => 'ý|ỳ|ỷ|ỹ|ỵ',
            'A' => 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
            'D' => 'Đ',
            'E' => 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
            'I' => 'Í|Ì|Ỉ|Ĩ|Ị',
            'O' => 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
            'U' => 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
            'Y' => 'Ý|Ỳ|Ỷ|Ỹ|Ỵ',
        );
        foreach ($unicode as $nonUnicode => $uni) {
            $str = preg_replace("/($uni)/i", $nonUnicode, $str);
        }

        return $str;
    }

    public static function convert_number_to_words($number)
    {
        $hyphen = ' ';
        $conjunction = ' ';
        $separator = ' ';
        $negative = 'âm ';
        $decimal = ' phẩy ';
        $dictionary = array(
            0 => 'không',
            1 => 'một',
            2 => 'hai',
            3 => 'ba',
            4 => 'bốn',
            5 => 'năm',
            6 => 'sáu',
            7 => 'bảy',
            8 => 'tám',
            9 => 'chín',
            10 => 'mười',
            11 => 'mười một',
            12 => 'mười hai',
            13 => 'mười ba',
            14 => 'mười bốn',
            15 => 'mười năm',
            16 => 'mười sáu',
            17 => 'mười bảy',
            18 => 'mười tám',
            19 => 'mười chín',
            20 => 'hai mươi',
            30 => 'ba mươi',
            40 => 'bốn mươi',
            50 => 'năm mươi',
            60 => 'sáu mươi',
            70 => 'bảy mươi',
            80 => 'tám mươi',
            90 => 'chín mươi',
            100 => 'trăm',
            1000 => 'nghìn',
            1000000 => 'triệu',
            1000000000 => 'tỷ',
            1000000000000 => 'nghìn tỷ',
            1000000000000000 => 'nghìn triệu triệu',
            1000000000000000000 => 'tỷ tỷ'
        );
        if (!is_numeric($number)) {
            return false;
        }
        if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) { // overflow 
            trigger_error('convert_number_to_words only accepts numbers between -' . PHP_INT_MAX . ' and ' . PHP_INT_MAX, E_USER_WARNING);
            return false;
        }
        if ($number < 0) {
            return $negative .  self::convert_number_to_words(abs($number));
        }
        $string = $fraction = null;
        if (strpos($number, '.') !== false) {
            list($number, $fraction) = explode('.', $number);
        }
        switch (true) {
            case $number < 21:
                $string = $dictionary[$number];
                break;
            case $number < 100:
                $tens = ((int) ($number / 10)) * 10;
                $units = $number % 10;
                $string = $dictionary[$tens];
                if ($units) {
                    $string .= $hyphen . $dictionary[$units];
                }
                break;
            case $number < 1000:
                $hundreds = $number / 100;
                $remainder = $number % 100;
                $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
                if ($remainder) {
                    $string .= $conjunction . self::convert_number_to_words($remainder);
                }
                break;
            default:
                $baseUnit = pow(1000, floor(log($number, 1000)));
                $numBaseUnits = (int) ($number / $baseUnit);
                $remainder = $number % $baseUnit;
                $string = self::convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
                if ($remainder) {
                    $string .= $remainder < 100 ? $conjunction : $separator;
                    $string .= self::convert_number_to_words($remainder);
                }
                break;
        }
        if (null !== $fraction && is_numeric($fraction)) {
            $string .= $decimal;
            $words = array();
            foreach (str_split((string) $fraction) as $number) {
                $words[] = $dictionary[$number];
            }
            $string .= implode(' ', $words);
        }
        return $string;
    }

    public static function VNDFormater($number)
    {
        if ($number == 0)
            return 0;
        return number_format($number, 0, '', '.') . '₫';
    }

    public static function updateDotEnv($key, $newValue)
    {
        $path = base_path('.env');
        // get old value from current env
        $oldValue = env($key);

        // was there any change?
        if ($oldValue === $newValue) {
            return;
        }
        $delim = '"';

        // rewrite file content with changed data
        if (file_exists($path)) {
            // replace current value with new value 
            file_put_contents(
                $path,
                str_replace(
                    [$key . '=' . $delim . $oldValue . $delim],
                    [$key . '=' . $delim . $newValue . $delim],
                    file_get_contents($path)
                )
            );
        }
    }
}

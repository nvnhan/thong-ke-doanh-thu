<?php

namespace App\Helpers;

use App\DatVe;
use App\Util;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;

class ThemFile
{
    /**
     * Parse data from Excel
     */
    public static function parse_excel(Request $request, string $dinh_danh, string $extension)
    {
        $path = storage_path('app/upload') . "/$dinh_danh.$extension";

        if ($extension === 'xlsx')
            $reader = IOFactory::createReader("Xlsx");
        else
            $reader = IOFactory::createReader("Xls");
        $spreadSheet = $reader->load($path);
        $sheet = $spreadSheet->getSheet(0);

        $ind = $request->xu_ly_tu_hang;
        $parse = [];
        // Parse data from file
        while (true) {
            $tmp = new stdClass;
            $tmp->ngay_thang = $sheet->getCell($request->cot_ngay_thang . $ind)->getValue();
            if (empty($tmp->ngay_thang))
                break;

            $ind++;
        }
        // filter data 

        // insert rows to db

        return 0;
    }

    /**
     * Parse data from HTML
     */
    public static function parse_html(Request $request, string $dinh_danh, string $extension)
    {
        $data = [];
        $path = storage_path('app/upload') . "/$dinh_danh.$extension";

        return $data;
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FooController extends BaseController
{
    public static function convert_date(String $s)
    {
        $ar = explode('/', $s);
        if (count($ar) !== 3) return $s;

        $d = (int)$ar[0];
        $m = (int)$ar[1];
        $y = (int)$ar[2];
        return $y . "-" . ($m < 10 ? "0$m" : $m) . "-" . ($d < 10 ? "0$d" : $d);
    }

    //
    public function parcel(Request $request)
    {
        $data = [];
        $rows = explode("\n", $request->text);
        foreach ($rows as $key => $row) {
            if (!empty($row)) {
                $cells = explode("\t", $row);
                $person = new \stdClass();
                $person->hoten = $cells[0];
                $person->gioitinh = count($cells) >= 2 ? $cells[1]:"";
                $person->ngaysinh = count($cells) >= 3 ? self::convert_date($cells[2]) : "";
                $person->hldi = count($cells) >= 4 ? $cells[3] : "";
                $person->hlve = count($cells) >= 5 ? $cells[4] : "";
                $person->check = true;
                $data[] = $person;
            }
        }

        return $this->sendResponse($data, "Parsed success");
    }
}

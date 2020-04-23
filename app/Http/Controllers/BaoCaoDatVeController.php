<?php

namespace App\Http\Controllers;

use App\DatVe;
use Illuminate\Http\Request;

class BaoCaoDatVeController extends Controller
{
    public function mauve(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $file = storage_path('app/reports') . "/mau-ve.xlsx";
            return response()->download($file);
        }
    }
}

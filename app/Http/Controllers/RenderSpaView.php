<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RenderSpaView extends Controller
{
    //
    public function __invoke()
    {
        return view('spa-view');
    }
}

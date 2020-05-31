<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RenderSpaView extends Controller
{
    //
    public function __invoke(Request $request)
    {
        return view('spa-view');
    }
}

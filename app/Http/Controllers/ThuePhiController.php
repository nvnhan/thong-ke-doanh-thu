<?php

namespace App\Http\Controllers;

use App\ThuePhi;
use Illuminate\Http\Request;

class ThuePhiController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $objs = ThuePhi::get();
        return $this->sendResponse($objs, "ThuePhi retrieved successfully");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ThuePhi  $thuePhi
     * @return \Illuminate\Http\Response
     */
    public function show(ThuePhi $thuePhi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ThuePhi  $thuePhi
     * @return \Illuminate\Http\Response
     */
    public function edit(ThuePhi $thuePhi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ThuePhi  $thuePhi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ThuePhi $thuePhi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ThuePhi  $thuePhi
     * @return \Illuminate\Http\Response
     */
    public function destroy(ThuePhi $thuePhi)
    {
        //
    }
}

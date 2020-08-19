<?php

namespace App\Http\Controllers;

use App\Helpers\Util;
use Illuminate\Http\Request;

class SettingController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [
            'cb_dai_han' => env("CB_DAI_HAN"),
            'cb_dai_sgn' => env('CB_DAI_SGN'),
            'sb_giam_phi' => env('SB_GIAM_PHI'),
            'phi_giam' => env('PHI_GIAM'),

            'so_ve_vn_mac_dinh' => env('SO_VE_VN_MAC_DINH'),

            'client_id' => env('GOOGLE_CLIENT_ID'),
            'client_secret' => env('GOOGLE_CLIENT_SECRET'),

            'dang_nhap_toi_da' => env('NGAY_DANG_NHAP_TOI_DA')
        ];
        return $this->sendResponse((object) $data, "Setting retrieved successfully");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Util::updateDotEnv('CB_DAI_HAN', $request->cb_dai_han);
        Util::updateDotEnv('CB_DAI_SGN', $request->cb_dai_sgn);
        Util::updateDotEnv('SB_GIAM_PHI', $request->sb_giam_phi);
        Util::updateDotEnv('PHI_GIAM', $request->phi_giam);

        Util::updateDotEnv('SO_VE_VN_MAC_DINH', $request->so_ve_vn_mac_dinh);

        Util::updateDotEnv('GOOGLE_CLIENT_ID', $request->client_id);
        Util::updateDotEnv('GOOGLE_CLIENT_SECRET', $request->client_secret);

        Util::updateDotEnv('NGAY_DANG_NHAP_TOI_DA', $request->dang_nhap_toi_da);

        return $this->sendResponse([], "Cập nhật thành công");
    }
}

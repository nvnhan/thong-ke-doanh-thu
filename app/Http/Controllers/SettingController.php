<?php

namespace App\Http\Controllers;

use App\Util;
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
            'tt_dai_ly' => env('TT_DAI_LY'),
            'tt_dia_chi_dai_ly' => env('TT_DIA_CHI_DAI_LY'),
            'tt_sdt_dai_ly' => env('TT_SDT_DAI_LY'),

            'tt_ten_cong_ty' => env('TT_TEN_CONG_TY'),
            'tt_mst_cong_ty' => env('TT_MST_CONG_TY'),
            'tt_dia_chi_cong_ty' => env('TT_DIA_CHI_CONG_TY'),

            'tt_sdt_cong_ty' => env('TT_SDT_CONG_TY'),
            'tt_fax_cong_ty' => env('TT_FAX_CONG_TY'),
            'tt_email_cong_ty' => env('TT_EMAIL_CONG_TY'),

            'client_id' => env('GOOGLE_CLIENT_ID'),
            'client_secret' => env('GOOGLE_CLIENT_SECRET')
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
        Util::updateDotEnv('TT_DAI_LY', $request->tt_dai_ly);
        Util::updateDotEnv('TT_DIA_CHI_DAI_LY', $request->tt_dia_chi_dai_ly);
        Util::updateDotEnv('TT_SDT_DAI_LY', $request->tt_sdt_dai_ly);

        Util::updateDotEnv('TT_TEN_CONG_TY', $request->tt_ten_cong_ty);
        Util::updateDotEnv('TT_MST_CONG_TY', $request->tt_mst_cong_ty);
        Util::updateDotEnv('TT_DIA_CHI_CONG_TY', $request->tt_dia_chi_cong_ty);

        Util::updateDotEnv('TT_SDT_CONG_TY', $request->tt_sdt_cong_ty);
        Util::updateDotEnv('TT_FAX_CONG_TY', $request->tt_fax_cong_ty);
        Util::updateDotEnv('TT_EMAIL_CONG_TY', $request->tt_email_cong_ty);

        Util::updateDotEnv('GOOGLE_CLIENT_ID', $request->client_id);
        Util::updateDotEnv('GOOGLE_CLIENT_SECRET', $request->client_secret);

        return $this->sendResponse([], "Cập nhật thành công");
    }
}

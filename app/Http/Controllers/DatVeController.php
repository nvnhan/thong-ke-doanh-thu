<?php

namespace App\Http\Controllers;

use App\DatVe;
use App\Helpers\ThemText;
use App\SanBay;
use DateTime;
use Illuminate\Http\Request;

class DatVeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = DatVe::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else
            $objs = DatVe::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        if (!$request->user()->admin)
            $objs = $objs->where('username', $request->user()->username);

        // Lọc theosân bay
        if (!empty($request->sb)) {
            $sbqt = SanBay::where('phan_loai', '!=', 'Việt Nam')->pluck('ma_san_bay');
            if ($request->sb == 'qt')
                $objs = $objs
                    ->whereIn('sb_di', $sbqt)
                    ->orWhereIn('sb_di1', $sbqt)
                    ->orWhereIn('sb_ve', $sbqt)
                    ->orWhereIn('sb_ve1', $sbqt);
            else if ($request->sb == 'qn')
                $objs = $objs->whereNotIn('sb_di', $sbqt)
                    ->whereNotIn('sb_di1', $sbqt)
                    ->whereNotIn('sb_ve', $sbqt)
                    ->whereNotIn('sb_ve1', $sbqt);
        }

        if (!empty($request->xv)) {
            if ($request->xv == 1) $objs = $objs->where('chua_xuat_ve', false);
            else if ($request->xv == -1) $objs = $objs->where('chua_xuat_ve', true);
        }

        return $this->sendResponse($objs->get(), "DatVe retrieved successfully");
    }

    public function nove(Request $request)
    {
        $den_ngay = date('Y-m-d');
        if (!empty($request->den_ngay))
            $den_ngay = $request->den_ngay;
        $objs = DatVe::whereNull('ngay_thanh_toan')
            ->orWhere('ngay_thanh_toan', '>', $den_ngay);

        if (!$request->user()->admin)
            $objs = $objs->where('username', $request->user()->username);

        return $this->sendResponse($objs->get(), "NoVe retrieved successfully");
    }

    public function chuabay(Request $request)
    {
        $den_ngay = date('Y-m-d H:i:s');
        if (!empty($request->den_ngay))
            $den_ngay = $request->den_ngay;
        $objs = DatVe::where('ngay_gio_di', ">", $den_ngay)
            ->orWhere('ngay_gio_ve', '>', $den_ngay);

        if (!$request->user()->admin)
            $objs = $objs->where('username', $request->user()->username);

        return $this->sendResponse($objs->get(), "ChuaBay retrieved successfully");
    }

    public function hangbay()
    {
        $objs = DatVe::all()->pluck('hang_bay');

        return $this->sendResponse($objs, "HangBay retrieved successfully");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $obj = DatVe::create($data);
        $obj->username = $request->user()->username;
        $obj->save();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function themtext(Request $request)
    {
        $text = $request->text;
        $lines = explode("\n",  $text);
        $data = [];
        //TODO: Xử lý text
        //
        if (strpos($text, "Bamboo Airways") !== false)
            $data = ThemText::parse_bamboo($lines, $request);
        // else if (strpos($text, "Các chuyến bay của bạn") !== false)
        //     parseJetsMail();
        // else if (strpos($text, "VIETNAM AIRLINES") !== false)
        //     parseVNMail();
        // else if (memoEdit1 . Lines[0] . Trim() . Length == 8 || strpos($text, "Thông tin chuyến bay") !== false || strpos($text, "Flight Information") !== false)
        //     parseVJ();
        // else if (memoEdit1 . Lines[1] . Contains("1.1"))
        //     parseVN();
        // else if (strpos($text, "Chuyến bay đi") !== false)
        //     parseJetsChuaXuat();
        // else if (strpos($text, "Jetstar") !== false)
        //     // Tương tự Jets Mail ở trên  ????
        //     parseJetsMoi();         // Theo mẫu ngày 03/02/2020
        // else
        //     parseJets();

        if (count($data) > 0)
            return $this->sendResponse($data, "Thêm mới thành công " . count($data) . ' mục');
        else return $this->sendError("Không xử lý được");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DatVe  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = DatVe::find($id);
        $model->fill($data);
        $model->save();
        $model->refresh();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Update multiple resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DatVe  $model
     * @return \Illuminate\Http\Response
     */
    public function updates(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $cnt = count($objs);
            foreach ($objs as $id) {
                $model = DatVe::find($id);
                if (!empty($request['hang_bay'])) $model->hang_bay = $request['hang_bay'];
                if (!empty($request['id_tai_khoan_mua'])) $model->id_tai_khoan_mua = $request['id_tai_khoan_mua'];
                if (!empty($request['id_khach_hang'])) $model->id_khach_hang = $request['id_khach_hang'];

                if ($request['xuat_ve'] == 1) $model->chua_xuat_ve = false;
                else if ($request['xuat_ve'] == -1) $model->chua_xuat_ve = true;

                if (!empty($request['tong_tien']) && $request['tong_tien'] > 0)
                    $model->tong_tien = $request['tong_tien'];
                if (!empty($request['tong_tien_thu_khach']) && $request['tong_tien_thu_khach'] > 0)
                    $model->tong_tien_thu_khach = $request['tong_tien_thu_khach'];

                $model->save();
            }

            return $this->sendResponse('', "Cập nhật thành công $cnt mục. Tải lại trang để thấy thay đổi");
        }
        return $this->sendError('Không sửa được', []);
    }

    public function codeve(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $code = "";
            $vnbb = DatVe::whereIn('id', $objs)->whereIn('hang_bay', ['VN', 'BB'])->get()->groupBy('ma_giu_cho');
            $khac = DatVe::whereIn('id', $objs)->whereNotIn('hang_bay', ['VN', 'BB'])->get()->groupBy('so_ve');

            foreach ($khac as $sove => $values) {
                $tmp = "";
                $ve = $values[0];
                if ($ve->hang_bay == "VJ")
                    $tmp = "Bay Viejetair  code $sove, ";
                else if ($ve->hang_bay == "Jets")
                    $tmp = "Bay Jetstar  code $sove, ";
                else $tmp = "Bay $ve->hang_bay  code $sove, ";
                $tien = 0;
                foreach ($values as $ve1) {
                    $tmp .= $ve1->ten_khach . ", ";
                    $tien += $ve1->tong_tien_thu_khach;
                }
                $sb = SanBay::where('ma_san_bay', $ve->sb_di)->first();
                $sb1 = SanBay::where('ma_san_bay', $ve->sb_di1)->first();
                if ($sb != null && $sb1 != null) {
                    $di = new DateTime($ve->ngay_gio_di);
                    $tmp .= "$sb->ten_san_bay - $sb1->ten_san_bay, ngay " . $di->format("d-m") . ", chuyen $ve->cb_di, luc " . $di->format("H\hi") . ". ";
                }
                if ($ve->ngay_gio_ve != null) {
                    $sb = SanBay::where('ma_san_bay', $ve->sb_ve)->first();
                    $sb1 = SanBay::where('ma_san_bay', $ve->sb_ve1)->first();
                    if ($sb != null && $sb1 != null) {
                        $di = new DateTime($ve->ngay_gio_ve);
                        $tmp .= "$sb->ten_san_bay - $sb1->ten_san_bay, ngay " . $di->format("d-m") . ", chuyen $ve->cb_ve, luc " . $di->format("H\hi") . ". ";
                    }
                }
                $tmp .= "Gia " . number_format($tien, 0, '', '.') . "đ. Quy khach co mat o san bay truoc 90 phut so voi gio bay de lam thu tuc.\r\n\r\n";
                $code .= $tmp;
            }

            foreach ($vnbb as $mgc => $values) {
                $tmp = "";
                $ve = $values[0];
                if ($ve->hang_bay == "VN")
                    $tmp = "Bay Vietnamairline  code $mgc, ";
                else if ($ve->hang_bay == "BB")
                    $tmp = "Bay Bamboo  code $mgc, ";

                $tien = 0;
                $sove = '';
                foreach ($values as $ve1) {
                    $tmp .= $ve1->ten_khach . ", ";
                    $sove .= $ve1->so_ve . ', ';
                    $tien += $ve1->tong_tien_thu_khach;
                }
                $sb = SanBay::where('ma_san_bay', $ve->sb_di)->first();
                $sb1 = SanBay::where('ma_san_bay', $ve->sb_di1)->first();
                if ($sb != null && $sb1 != null) {
                    $di = new DateTime($ve->ngay_gio_di);
                    $tmp .= "$sb->ten_san_bay - $sb1->ten_san_bay, ngay " . $di->format("d-m") . ", chuyen $ve->cb_di, luc " . $di->format("H\hi") . ". ";
                }
                if ($ve->ngay_gio_ve != null) {
                    $sb = SanBay::where('ma_san_bay', $ve->sb_ve)->first();
                    $sb1 = SanBay::where('ma_san_bay', $ve->sb_ve1)->first();
                    if ($sb != null && $sb1 != null) {
                        $di = new DateTime($ve->ngay_gio_ve);
                        $tmp .= "$sb->ten_san_bay - $sb1->ten_san_bay, ngay " . $di->format("d-m") . ", chuyen $ve->cb_ve, luc " . $di->format("H\hi") . ". ";
                    }
                }
                $tmp .= "So ve " . $sove;
                $tmp .= "Gia " . number_format($tien, 0, '', '.') . "đ. Quy khach co mat o san bay truoc 90 phut so voi gio bay de lam thu tuc.\r\n\r\n";
                $code .= $tmp;
            }
            return $this->sendResponse($code, 'CodeVe generated successfully');
        }

        return $this->sendError('Lỗi', []);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DatVe  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DatVe::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công đặt vé");
    }

    /**
     * Remove multiple resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deletes(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $cnt = count($objs);
            DatVe::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }
}

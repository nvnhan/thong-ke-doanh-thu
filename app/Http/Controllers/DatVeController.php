<?php

namespace App\Http\Controllers;

use App\DatVe;
use App\Helpers\ThemFile;
use App\Helpers\ThemMail;
use App\Helpers\ThemText;
use App\SanBay;
use App\User;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        else if (empty($request->dd))
            $objs = DatVe::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);
        else $objs = DatVe::query();        // Co Dinh Danh thi ko xet tu ngay den ngay

        // Lọc theosân bay
        if ($request->sb) {
            $sbqt = SanBay::where('phan_loai', '!=', 'Việt Nam')->pluck('ma_san_bay');
            if ($request->sb == 'qt')
                $objs = $objs->where(fn ($query) => $query->whereIn('sb_di', $sbqt)
                    ->orWhereIn('sb_di1', $sbqt)
                    ->orWhereIn('sb_ve', $sbqt)
                    ->orWhereIn('sb_ve1', $sbqt));
            else if ($request->sb == 'qn')
                $objs = $objs->whereNotIn('sb_di', $sbqt)
                    ->whereNotIn('sb_di1', $sbqt)
                    ->whereNotIn('sb_ve', $sbqt)
                    ->whereNotIn('sb_ve1', $sbqt);
        }

        if ($request->xv) {
            if ($request->xv == 1) $objs = $objs->where('chua_xuat_ve', false);
            else if ($request->xv == -1) $objs = $objs->where('chua_xuat_ve', true);
        }

        if ($request->dd)
            $objs = $objs->where('dinh_danh', $request->dd);

        if ($request->q)
            $objs = $objs->where(fn ($query) => $query
                ->where('ma_giu_cho', 'LIKE', "%$request->q%")
                ->orWhere('so_ve', 'LIKE', "%$request->q%")
                ->orWhere('ten_khach', 'LIKE', "%$request->q%"));

        return $this->sendResponse($objs->with(['khach_hang', 'tai_khoan_mua', 'phi_hanh_ly', 'thu_chi_chi_tiets'])->get(), "DatVe retrieved successfully");
    }

    public function nove(Request $request)
    {
        $den_ngay = date('Y-m-d');
        if (!empty($request->den_ngay))
            $den_ngay = $request->den_ngay;

        $objs = DatVe::where(fn ($query) => $query
            ->whereNull('ngay_thanh_toan')
            ->orWhere('ngay_thanh_toan', '>', $den_ngay));

        return $this->sendResponse($objs->with(['khach_hang', 'tai_khoan_mua', 'phi_hanh_ly', 'thu_chi_chi_tiets'])->get(), "NoVe retrieved successfully");
    }

    public function chuabay(Request $request)
    {
        $den_ngay = date('Y-m-d H:i:s');
        if (!empty($request->den_ngay))
            $den_ngay = $request->den_ngay;
            
        $objs = DatVe::where(fn ($query) => $query
            ->where('ngay_gio_di', ">", $den_ngay)
            ->orWhere('ngay_gio_ve', '>', $den_ngay));

        return $this->sendResponse($objs->with(['khach_hang', 'tai_khoan_mua', 'phi_hanh_ly', 'thu_chi_chi_tiets'])->get(), "ChuaBay retrieved successfully");
    }

    public function hangbay()
    {
        $objs = DatVe::whereNotNull('hang_bay')->select('hang_bay')->distinct()->pluck('hang_bay');

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
        try {
            $data = $request->all();
            $obj = DatVe::create($data);
            $obj->username = $request->user()->username;
            $obj->save();
            $obj->refresh();
            return $this->sendResponse($obj, "Thêm mới thành công");
        } catch (\Exception $e) {
            return $this->sendError("Error");
        }
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
        $dinh_danh = $request->user()->id . '.' . time();
        // return ThemText::parse_vn($lines, $request);
        //TODO: Xử lý text các phần còn lại
        //
        if (strpos($text, "Bamboo Airways") !== false)
            $data = ThemText::parse_bamboo($lines, $request, $dinh_danh);
        // else if (strpos($text, "Các chuyến bay của bạn") !== false)
        //     parseJetsMail();
        else if (strpos($text, "VIETNAM AIRLINES") !== false)
            $data = ThemText::parse_vn_mail($lines, $request, $dinh_danh);
        else if (strlen(trim($lines[0])) === 8 || strpos($text, "Thông tin chuyến bay") !== false || strpos($text, "Flight Information") !== false)
            $data = ThemText::parse_vj($lines, $request, $dinh_danh);
        else if (count($lines) > 1 && strpos($lines[1], '1.1') !== false)
            $data = ThemText::parse_vn($lines, $request, $dinh_danh);
        // else if (strpos($text, "Chuyến bay đi") !== false)
        //     parseJetsChuaXuat();
        // else if (strpos($text, "Jetstar") !== false)
        //     // Tương tự Jets Mail ở trên  ????
        //     parseJetsMoi();         // Theo mẫu ngày 03/02/2020
        // else
        //     parseJets();

        if (count($data) > 0)
            return $this->sendResponse($dinh_danh, "Thêm mới thành công " . count($data) . ' mục');
        else return $this->sendError("Không xử lý được");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function themfile(Request $request)
    {
        $cnt = 0;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $ext = strtolower($file->getClientOriginalExtension());
            $dinh_danh = $file->getClientOriginalName() . time();
            $file->storeAs('upload', "$dinh_danh.$ext"); // Upload file to storage/app/upload

            if ($ext === 'xls' || $ext === 'xlsx')
                $cnt = ThemFile::parse_excel($request, $dinh_danh, $ext);
            else if ($ext === 'html' || $ext === 'htm')
                $cnt = ThemFile::parse_html($request, $dinh_danh, $ext);

            Storage::delete("upload/$dinh_danh.$ext");
        }

        if ($cnt > 0)
            return $this->sendResponse($dinh_danh, "Thêm mới thành công $cnt mục");
        else return $this->sendError("Không xử lý được");
    }

    /**
     */
    public function getmail(Request $request)
    {
        $user_id = $request->user()->id;        // ~ auth()->user()->id
        $disk = Storage::disk('local');
        $file = "gmail/tokens/gmail-json-$user_id.json";

        // Just only login in API, 
        // Get User ID with API for GMAIL Client

        if ($disk->exists($file)) {
            $data = ThemMail::get_all_mail($request);
            return $this->sendResponse($data, "Gmail retrieved successfully");
        } else
            return $this->sendError("Bạn chưa thực hiện xác thực Gmail", []);
    }

    /**
     */
    public function themmail(Request $request)
    {
        $objs = explode('|', $request['mails']);
        if (\is_array($objs)) {
            $cnt = 0;
            $dinh_danh = $request->user()->id . '.' . time();
            foreach ($objs as $id) {
                $body = ThemMail::get_mail_body($id);
                // return $body;
                // return ThemMail::parse_jets($body, $request, $dinh_danh);

                if (strpos($body, "Bamboo Airways") !== false)
                    $cnt += count(ThemMail::parse_bb($body, $request, $dinh_danh));
                else if (strpos($body, "VIETNAM AIRLINES") !== false)
                    $cnt += count(ThemMail::parse_vn($body, $request, $dinh_danh));
                else if (strpos($body, "vietjetair.com") !== false)
                    $cnt += count(ThemMail::parse_vj($body, $request, $dinh_danh));
                else
                    $cnt += count(ThemMail::parse_jets($body, $request, $dinh_danh));
            }

            if ($cnt > 0)
                return $this->sendResponse($dinh_danh, "Thêm mới thành công $cnt mục");
        }

        return $this->sendError("Không xử lý được");
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
            $result = array();
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
                $model->refresh();
                $result[] = $model;
            }

            return $this->sendResponse($result, "Cập nhật thành công $cnt mục");
        }
        return $this->sendError('Không sửa được', []);
    }

    public function codeve(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (\is_array($objs)) {
            $code = "";
            $vnbb = DatVe::findMany($objs)->whereIn('hang_bay', ['VN', 'BB'])->groupBy('ma_giu_cho');
            $khac = DatVe::findMany($objs)->whereNotIn('hang_bay', ['VN', 'BB'])->groupBy('so_ve');

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
        if ($request['objects']) {
            $objs = explode('|', $request['objects']);
            if (\is_array($objs)) {
                $cnt = count($objs);
                DatVe::destroy($objs);
                return $this->sendResponse('', "Xóa thành công $cnt mục");
            }
        } else if ($request['dd']) {
            $objs = DatVe::where('dinh_danh', $request['dd'])->delete();
            return $this->sendResponse('', "Đã loại bỏ dữ liệu");
        }

        return $this->sendError('Không xóa được', []);
    }
}

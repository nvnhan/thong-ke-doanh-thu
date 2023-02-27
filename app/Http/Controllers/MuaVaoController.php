<?php

namespace App\Http\Controllers;

use App\Helpers\BaoCaoHelper;
use App\MuaVao;
use App\TaiKhoan;
use App\Tour;
use App\TourChiTiet;
use App\User;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;

class MuaVaoController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = MuaVao::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else if (!empty($request->hoa_don))
            $objs = MuaVao::where('so_hoa_don', $request->hoa_don);
        else
            $objs = MuaVao::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        return $this->sendResponse($objs->with(['hang_hoa', 'hang_hoa.tai_khoan', 'thu_chi_chi_tiets'])->get(), "MuaVao retrieved successfully");
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
        $obj = MuaVao::create($data);
        $obj->username = $request->user()->username;
        if (empty($request->so_hoa_don)) {
            $hoa_don = MuaVao::max('so_hoa_don') ?? 0;
            $obj->so_hoa_don = $hoa_don + 1;
        }
        $obj->save();
        $obj->refresh();
        return $this->sendResponse($obj, "Thêm mới thành công");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MuaVao  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = MuaVao::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MuaVao  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MuaVao::find($id)->delete();
        return $this->sendResponse('', "Xóa thành công khách hàng");
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
            MuaVao::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }

    public function hoadon(Request $request, $u, $id)
    {
        $user = User::find($u);
        $objs = MuaVao::withoutGlobalScopes()->allowUser($user)->where('so_hoa_don', $id)->get();
        if (count($objs) >= 1) {
            $nha_cung_cap = TaiKhoan::where('id', $objs[0]->hang_hoa->tai_khoan->id)->get()[0];
            // ->with(['thu_chi_dens', 'thu_chi_dis', 'dat_ves', 'ban_ra_hoa_dois', 'visas', 'hang_hoas'])
            // ->get()[0];

            // Lấy các tour chi tiết và mua vào của user hiện tại
            // $tours = Tour::pluck('id');
            // $tour_chi_tiets = TourChiTiet::whereIn('id_tour', $tours)->get();
            // $mua_vaos = MuaVao::all();

            // $ngayTruoc = date('Y-m-d', strtotime($mua_vaos[0]->ngay_thang . ' - 1 days'));
            $dau_ky = 0; //BaoCaoHelper::TongThuTK($nha_cung_cap, $ngayTruoc) - BaoCaoHelper::TongChiTK($nha_cung_cap, $tour_chi_tiets, $mua_vaos, $ngayTruoc);

            return view('hoa-don.mua-vao', compact('user', 'objs', 'nha_cung_cap', 'dau_ky'));
        } else return redirect('/');
    }

    public function xuathoadon(Request $request)
    {
        $hoa_don = $request['hoa_don'];
        if (empty($hoa_don))
            return;

        $user = $request->user();
        // Prepare Excel File
        $file = storage_path('app/reports') . "/hoa-don-nhap-hang.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);

        // Get data from SQL
        $mua_vaos = MuaVao::where('so_hoa_don', $hoa_don)->with('hang_hoa')->get();
        $nhaCungCap = TaiKhoan::where('id', $mua_vaos[0]->hang_hoa->tai_khoan->id)
            ->with(['thu_chi_dens', 'thu_chi_dis', 'dat_ves', 'ban_ra_hoa_dois', 'visas', 'hang_hoas'])
            ->get()[0];

        $sheet->setCellValue("A1", $user->ct_ten);
        $sheet->setCellValue("A2", "Địa chỉ: " . $user->ct_dia_chi);
        $sheet->setCellValue("A3", "Hotline: " . $user->ct_sdt);
        $sheet->setCellValue("A4", "STK: " . $user->ct_mst);
        $sheet->setCellValue("A7", "Số HĐ: " . str_pad($mua_vaos[0]->so_hoa_don, 4, '0', STR_PAD_LEFT));
        $ngay = new DateTime($mua_vaos[0]->ngay_thang);
        $sheet->setCellValue("A8", "Ngày " . $ngay->format('d') . " tháng " . $ngay->format('m') . " năm " . $ngay->format('Y'));
        $sheet->setCellValue("B9", "$nhaCungCap->mo_ta ($nhaCungCap->ky_hieu)");
        $sheet->setCellValue("B10", $nhaCungCap->sdt);
        $sheet->setCellValue("B11", $nhaCungCap->dia_chi);

        $rowIndex = 14;
        if (count($mua_vaos) >= 1) {
            $sheet->insertNewRowBefore($rowIndex + 1, count($mua_vaos));
            $sheet->removeRow($rowIndex + 1, 3);
        }

        $sum = 0;
        foreach ($mua_vaos as $index => $mv) {
            $sheet->setCellValue("A" . $rowIndex, $index + 1);            // STT
            $sheet->setCellValue("B" . $rowIndex, $mv->hang_hoa->ten_hang ?? '');      // 
            $sheet->setCellValue("C" . $rowIndex, $mv->so_luong ?? '');      // 
            $sheet->setCellValue("D" . $rowIndex, $mv->don_gia ?? '');      // 
            $sheet->setCellValue("E" . $rowIndex, $mv->thanh_tien ?? '');      // 
            $sheet->setCellValue("F" . $rowIndex, $mv->ghi_chu ?? '');      // 
            $sum += $mv->thanh_tien ?? 0;
            $rowIndex++;
        }

        // Lấy các tour chi tiết và mua vào của user hiện tại
        $tours = Tour::pluck('id');
        $tour_chi_tiets = TourChiTiet::whereIn('id_tour', $tours)->get();
        $mua_vaos = MuaVao::all();

        $ngayTruoc = date('Y-m-d', strtotime($mua_vaos[0]->ngay_thang . ' - 1 days'));
        $dau_ky = BaoCaoHelper::TongThuTK($nhaCungCap, $ngayTruoc) - BaoCaoHelper::TongChiTK($nhaCungCap, $tour_chi_tiets, $mua_vaos, $ngayTruoc);
        $rowIndex += 1;
        $sheet->setCellValue("E" . $rowIndex, $dau_ky);
        $rowIndex += 1;
        $sheet->setCellValue("E" . $rowIndex, $sum);
        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }
}

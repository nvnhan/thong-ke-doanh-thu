<?php

namespace App\Http\Controllers;

use App\BanRa;
use App\Helpers\BaoCaoHelper;
use App\KhachHang;
use App\User;
use DateTime;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;

class BanRaController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request->bat_dau) && !empty($request->ket_thuc))
            $objs = BanRa::whereBetween('ngay_thang', [$request->bat_dau, $request->ket_thuc]);
        else if (!empty($request->hoa_don))
            $objs = BanRa::where('so_hoa_don', $request->hoa_don);
        else
            $objs = BanRa::whereBetween('ngay_thang', [date('Y-m-01'), date('Y-m-t')]);

        return $this->sendResponse($objs->with(['hang_hoa', 'khach_hang', 'hang_hoa.tai_khoan', 'tai_khoan_doi_tra',  'thu_chi_chi_tiets'])->get(), "BanRa retrieved successfully");
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
        $obj = BanRa::create($data);
        $obj->username = $request->user()->username;
        if (empty($request->so_hoa_don)) {
            $hoa_don = BanRa::max('so_hoa_don') ?? 0;
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
     * @param  \App\BanRa  $model
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $model = BanRa::find($id);
        $model->fill($data);
        $model->save();
        return $this->sendResponse($model, "Cập nhật thành công");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BanRa  $model
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        BanRa::find($id)->delete();
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
            BanRa::destroy($objs);
            return $this->sendResponse('', "Xóa thành công $cnt mục");
        }

        return $this->sendError('Không xóa được', []);
    }

    public function hoadon(Request $request, $u, $id)
    {
        $user = User::find($u);
        $objs = BanRa::withoutGlobalScopes()->allowUser($user)->where('so_hoa_don', $id)->get();
        if (count($objs) >= 1) {
            $khach_hang = KhachHang::withoutGlobalScopes()->where('id', $objs[0]->id_khach_hang)->get()[0];
            // ->with(['thu_chi_dens', 'thu_chi_dis', 'dat_ves', 'ban_ra_hoa_dois', 'visas', 'hang_hoas'])
            // ->get()[0];

            // Lấy các tour chi tiết và mua vào của user hiện tại
            // $tours = Tour::pluck('id');
            // $tour_chi_tiets = TourChiTiet::whereIn('id_tour', $tours)->get();
            // $mua_vaos = MuaVao::all();

            // $ngayTruoc = date('Y-m-d', strtotime($mua_vaos[0]->ngay_thang . ' - 1 days'));
            $dau_ky = 0; //BaoCaoHelper::TongThuTK($khach_hang, $ngayTruoc) - BaoCaoHelper::TongChiTK($khach_hang, $tour_chi_tiets, $mua_vaos, $ngayTruoc);

            return view('hoa-don.ban-ra', compact('user', 'objs', 'khach_hang', 'dau_ky'));
        } else return redirect('/');
    }

    public function xuathoadon(Request $request)
    {
        $hoa_don = $request['hoa_don'];
        if (empty($hoa_don))
            return;

        $user = $request->user();
        // Prepare Excel File
        $file = storage_path('app/reports') . "/hoa-don-ban-hang.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);

        // Get data from SQL
        $ban_ras = BanRa::where('so_hoa_don', $hoa_don)->with(['hang_hoa', 'khach_hang'])->get();
        $khach_hang = KhachHang::where('id', $ban_ras[0]->id_khach_hang)
            ->with(['thu_chis', 'dat_ves', 'ban_ras', 'tours', 'visas'])
            ->get()[0];

        $sheet->setCellValue("A1", $user->ct_ten);
        $sheet->setCellValue("A2", "Địa chỉ: " . $user->ct_dia_chi);
        $sheet->setCellValue("A3", "Hotline: " . $user->ct_sdt);
        $sheet->setCellValue("A4", "STK: " . $user->ct_mst);
        $sheet->setCellValue("A7", "Số HĐ: " . str_pad($ban_ras[0]->so_hoa_don, 4, '0', STR_PAD_LEFT));
        $ngay = new DateTime($ban_ras[0]->ngay_thang);
        $sheet->setCellValue("A8", "Ngày " . $ngay->format('d') . " tháng " . $ngay->format('m') . " năm " . $ngay->format('Y'));
        $sheet->setCellValue("B9", "$khach_hang->ho_ten");
        $sheet->setCellValue("B10", $khach_hang->sdt);
        $sheet->setCellValue("B11", $khach_hang->dia_chi);

        $rowIndex = 14;
        if (count($ban_ras) >= 1) {
            $sheet->insertNewRowBefore($rowIndex + 1, count($ban_ras));
            $sheet->removeRow($rowIndex + 1, 3);
        }

        $sum = 0;
        foreach ($ban_ras as $index => $br) {
            $sheet->setCellValue("A" . $rowIndex, $index + 1);            // STT
            $sheet->setCellValue("B" . $rowIndex, $br->hang_hoa->ten_hang ?? '');      // 
            $sheet->setCellValue("C" . $rowIndex, $br->so_luong ?? '');      // 
            $sheet->setCellValue("D" . $rowIndex, $br->don_gia_ban ?? '');      // 
            $sheet->setCellValue("E" . $rowIndex, $br->thanh_tien_ban ?? '');      // 
            $sum += $br->thanh_tien_ban ?? 0;
            $rowIndex++;
        }

        $ngayTruoc = date('Y-m-d', strtotime($ban_ras[0]->ngay_thang . ' - 1 days'));
        $dau_ky = $khach_hang->so_du_ky_truoc + BaoCaoHelper::TinhTongThanhToanBanRa($khach_hang, $ngayTruoc) - BaoCaoHelper::TinhTongGiaoDichBanRa($khach_hang, $ngayTruoc);
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

<?php

namespace App\Helpers;

use App\BanRa;
use App\DatVe;
use Carbon\Carbon;
use DateInterval;
use DatePeriod;
use DateTime;
use PhpOffice\PhpSpreadsheet\IOFactory;
use stdClass;
use App\Helpers\Util;
use App\KhachHang;
use App\MuaVao;
use App\TaiKhoan;
use App\Tour;
use App\TourChiTiet;
use App\Visa;
use Illuminate\Http\Request;

class Report
{
    /**
     * Trích xuất Tour & Tour chi tiết
     */
    public static function export_tour(Request $request)
    {
        $objs = explode('|', $request['objects']);
        if (!\is_array($objs))
            return;

        // Prepare Excel File
        $file = storage_path('app/reports') . "/trich-xuat-tour.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);

        // Get number rows of tour and tour chi tiet
        $tours = Tour::whereIn('id', $objs)->orderBy('ngay_thang')->get();
        $row_count = 0;
        foreach ($tours as $tour) {
            $row_count++;
            $row_count += $tour->tour_chi_tiets()->count();
        }
        $sheet->insertNewRowBefore(6, $row_count);
        $sheet->removeRow(4, 3);
        $row_index = 4;
        // Fill in the excel file
        foreach ($tours as $index => $tour) {
            // Set style for cells: Font bold, background is #dcf0dc
            BaoCaoTongHop::set_cell_style($sheet, "A$row_index");
            BaoCaoTongHop::set_cell_style($sheet, "B$row_index");
            BaoCaoTongHop::set_cell_style($sheet, "C$row_index");

            $sheet->setCellValue("A$row_index", $index + 1);        // STT
            $sheet->setCellValue("B$row_index", (new DateTime($tour->ngay_thang))->format('d/m/Y'));
            $sheet->setCellValue("C$row_index", $tour->ma_tour . ' - ' . $tour->ten_tour);
            $sheet->setCellValue("D$row_index", $tour->phan_loai);
            $sheet->setCellValue("E$row_index", (new DateTime($tour->bat_dau))->format('d/m/Y') . ' → ' . (new DateTime($tour->ket_thuc))->format('d/m/Y'));

            $sheet->setCellValue("F$row_index", $tour->so_luong);
            $sheet->setCellValue("G$row_index", $tour->gia_tour);
            $sheet->setCellValue("H$row_index", $tour->gia_ban);
            $sheet->setCellValue("I$row_index", $tour->lai);
            $sheet->setCellValue("J$row_index", $tour->ten_khach_hang);

            $sheet->setCellValue("K$row_index", $tour->da_thanh_toan);
            $sheet->setCellValue("L$row_index", $tour->tinh_trang);
            $sheet->setCellValue("M$row_index", $tour->username);
            $sheet->setCellValue("N$row_index", $tour->ghi_chu);

            $row_index++;

            // Fill in all tour chi tiet
            $tour_chi_tiets = $tour->tour_chi_tiets()->get();
            foreach ($tour_chi_tiets as $index1 => $tour_chi_tiet) {
                $sheet->setCellValue("A$row_index", ($index + 1) . '.' . ($index1 + 1));        // STT
                $sheet->setCellValue("B$row_index", (new DateTime($tour_chi_tiet->ngay_thang))->format('d/m/Y'));
                $sheet->setCellValue("C$row_index", $tour_chi_tiet->ma_hang . ' - ' . $tour_chi_tiet->ten_hang . "\nNCC: " . $tour_chi_tiet->nha_cung_cap);
                $sheet->setCellValue("D$row_index", $tour_chi_tiet->phan_loai);
                $sheet->setCellValue("E$row_index", (new DateTime($tour_chi_tiet->bat_dau))->format('d/m/Y') . ' → ' . (new DateTime($tour_chi_tiet->ket_thuc))->format('d/m/Y'));

                $sheet->setCellValue("F$row_index", $tour_chi_tiet->so_luong);
                $sheet->setCellValue("G$row_index", $tour_chi_tiet->don_gia);

                $sheet->setCellValue("K$row_index", $tour_chi_tiet->da_thanh_toan);
                $sheet->setCellValue("N$row_index", $tour_chi_tiet->ghi_chu);
                $row_index++;
            }
        }

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }

    /**
     * Chi tiết đối soát tài khoản
     * 
     * @param TaiKhoan $taiKhoan Tài khoản
     * @param string $tu_ngay
     * @param string $den_ngay
     * 
     * @return Array Array of data
     */
    public static function doi_soat_tai_khoan(TaiKhoan $taiKhoan, string $tu_ngay, string $den_ngay)
    {
        $data = [];
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod(new DateTime($tu_ngay), $interval, new DateTime($den_ngay));

        foreach ($period as $dt) {
            $val = new stdClass;
            $val->thu_vao = [];
            $val->chi_ra = [];
            $tmp = $dt->format('d/m/Y');
            $data[$tmp] = $val;
        }
        // Tài khoản thu vào: chỉ từ thu chi
        $thuVao = $taiKhoan->thu_chi_dens()->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($thuVao as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = $tc->hang_muc . ' - ' . $tc->tai_khoan_di;
                $val->so_tien = $tc->so_tien;
                $data[$nt]->thu_vao[] = $val;
            }
        }

        // Các mục chi ra của tài khoản
        $q = $taiKhoan->thu_chi_dis()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = $tc->hang_muc . ' - ' . $tc->tai_khoan_den;
                $val->so_tien = $tc->so_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->dat_ves()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Đặt vé " . $tc->so_ve . ' - ' . $tc->ma_khach_hang;
                $val->so_tien = $tc->tong_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->ban_ra_hoa_dois()->whereBetween('ngay_thanh_toan_hoan_doi', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thanh_toan_hoan_doi)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Hoàn đổi " . $tc->ma_hang . ' - ' . $tc->ma_khach_hang;
                $val->so_tien = $tc->thanh_tien_ban;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $idHH = $taiKhoan->hang_hoas()->pluck('id')->toArray();
        $idTour = Tour::all()->pluck('id')->toArray();
        $q = TourChiTiet::whereIn('id_tour', $idTour)->whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])
            ->get()
            ->groupBy(function ($ob) {
                return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
            });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Tour chi tiết " . $tc->ma_tour . ' - ' . $tc->ma_hang;
                $val->so_tien = $tc->thanh_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = $taiKhoan->visas()->wherebetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Visa " . $tc->ma_visa;
                $val->so_tien = $tc->gia_mua;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        $q = MuaVao::whereIn('id_hang_hoa', $idHH)->whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get()->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        foreach ($q as $nt => $items) {
            foreach ($items as $tc) {
                $val = new stdClass;
                $val->hang_muc = "Mua vào " . $tc->ma_hang;
                $val->so_tien = $tc->thanh_tien;
                $data[$nt]->chi_ra[] = $val;
            }
        }

        return $data;
    }

    /**
     * Công nợ chi tiết
     */
    public static function maucongno(Request $request, string $tu_ngay = "", string $den_ngay = "", $dat_ve = [], KhachHang $khach_hang = null)
    {
        $user = $request->user();
        $thu_chi = [];
        $tours = [];
        $visas = [];
        $ban_ras = [];
        // Prepare Excel File
        $file = storage_path('app/reports') . "/cong-no.xlsx";
        $reader = IOFactory::createReader("Xlsx");
        $spreadSheet = $reader->load($file);
        $sheet = $spreadSheet->getSheet(0);
        // Infomation 
        $sheet->setCellValue("A1", $user->ct_ten);
        $sheet->setCellValue("A2", $user->ct_dia_chi);
        $sheet->setCellValue("A3", "Tel: " . $user->ct_sdt . " / Fax: " . $user->ct_fax);
        $sheet->setCellValue("A4", "Email: " . $user->ct_email);
        // Dates
        if (empty($tu_ngay) || empty($den_ngay)) {
            $tu_ngay = date('Y-m-01');
            $den_ngay = date('Y-m-d');
        }
        $sheet->setCellValue("G3", "From date: " . (new DateTime($tu_ngay))->format('d/m/Y'));
        $sheet->setCellValue("G4", "To date: " . (new DateTime($den_ngay))->format('d/m/Y'));

        // Chỉ có khách hàng === Xuất phát từ Công nợ chi tiết ==> Tính toàn bộ theo khách hàng
        if ($dat_ve == []) {
            // Đặt vé phát sinh trong khoảng thời gian của khách hàng tương ứng
            $den_ngay = date('Y-m-d', strtotime($den_ngay . ' +1 days'));
            $dat_ve = $khach_hang->dat_ves->whereBetween('ngay_thang', [$tu_ngay, $den_ngay]);
            // All thu chi of this Customer
            $thu_chi = $khach_hang->thu_chis->whereBetween('ngay_thang', [$tu_ngay, $den_ngay]);

            $tours = $khach_hang->tours->whereBetween('ngay_thang', [$tu_ngay, $den_ngay]);
            $visas = $khach_hang->visas->whereBetween('ngay_thang', [$tu_ngay, $den_ngay]);
            $ban_ras = $khach_hang->ban_ras->whereBetween('ngay_thang', [$tu_ngay, $den_ngay]);
        } else if ($khach_hang == null)
            $khach_hang = $dat_ve[0]->khach_hang->load(['dat_ves', 'thu_chis', 'ban_ras', 'visas', 'tours']);

        $data = [];
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod(new DateTime($tu_ngay), $interval, new DateTime($den_ngay));
        foreach ($period as $dt) {
            $tmp = $dt->format('d/m/Y');
            $data[$tmp] = [];
        }

        $sno = 0;
        $sco = 0;
        $row_count = 0;
        $dat_ve = $dat_ve->groupBy(function ($ob) {
            return Carbon::parse($ob->ngay_thang)->format('d/m/Y');
        });
        // Each day
        foreach ($dat_ve as $ngay => $ves) {
            $tmp = $ves->groupBy('so_ve');
            // Each So Ve
            foreach ($tmp as $sove => $ves1) {
                $obj = new stdClass;
                $obj->ngay_thang = $ngay;
                $obj->chung_tu = $sove;
                $obj->no = $ves1->sum('tong_tien_thu_khach');
                $obj->noi_dung = BaoCaoHelper::TinhNoiDungXuatCongNo($ves1);
                $obj->dich_vu = $ves1->sum('lai');
                $obj->tong_tien = $ves1->sum('tong_tien');
                $obj->loai_tuoi = $ves1[0]->ten_loai_tuoi;
                //TODO: Tai Khoan "CO" la Tong Tien da thu trong khoang thoi gian???
                $obj->co = 0;
                // Chua xu ly Ngay thanh toan tron Dat Ve
                $sno += $obj->no;
                $data[$ngay][] = $obj;
                $row_count++;
            }
        }
        foreach ($thu_chi as $tc) {
            $ngay = (new DateTime($tc->ngay_thang))->format('d/m/Y');
            $obj = new stdClass;
            $obj->ngay_thang = $ngay;
            $obj->noi_dung = "$tc->tai_khoan_di => $tc->tai_khoan_den - $tc->hang_muc";
            $obj->co = $tc->so_tien;

            $sco += $obj->co;
            $data[$ngay][] = $obj;
            $row_count++;
        }
        foreach ($tours as $tc) {
            $ngay = (new DateTime($tc->ngay_thang))->format('d/m/Y');
            $obj = new stdClass;
            $obj->ngay_thang = $ngay;
            $obj->chung_tu = $tc->ma_tour;
            $obj->no = $tc->tong_tien_ban;
            $obj->noi_dung = "$tc->ten_tour | $tc->phan_loai";

            $sno += $obj->no;
            $data[$ngay][] = $obj;
            $row_count++;
        }
        foreach ($visas as $tc) {
            $ngay = (new DateTime($tc->ngay_thang))->format('d/m/Y');
            $obj = new stdClass;
            $obj->ngay_thang = $ngay;
            $obj->chung_tu = $tc->ma_visa;
            $obj->no = $tc->gia_ban;
            $obj->noi_dung = "$tc->quoc_gia | $tc->phan_loai";

            $sno += $obj->no;
            $data[$ngay][] = $obj;
            $row_count++;
        }
        foreach ($ban_ras as $tc) {
            $ngay = (new DateTime($tc->ngay_thang))->format('d/m/Y');
            $obj = new stdClass;
            $obj->ngay_thang = $ngay;
            $obj->chung_tu = $tc->ma_hang;
            $obj->no = $tc->thanh_tien_ban;
            $obj->noi_dung = "$tc->phan_loai | $tc->ten_hang | $tc->so_luong | $tc->don_gia_ban";

            $sno += $obj->no;
            $data[$ngay][] = $obj;
            $row_count++;
        }

        // Fill Customer Info
        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));
        $no_dau_ky = 0;
        if ($khach_hang != null) {
            $sheet->setCellValue("A7", "Kính gửi (To):    $khach_hang->ho_ten");
            $sheet->setCellValue("A8", "Tên giao dịch (Name):   $khach_hang->ho_ten - Tel: $khach_hang->sdt - Email: $khach_hang->email");
            $no_dau_ky = $khach_hang->so_du_ky_truoc
                + BaoCaoHelper::TinhTongThanhToanBanRa($khach_hang, $ngayTruoc)
                - BaoCaoHelper::TinhTongGiaoDichBanRa($khach_hang, $ngayTruoc);
            $sheet->setCellValue("M8", $no_dau_ky);
        }
        // No Cuoi Ky
        $sheet->setCellValue("M17", $no_dau_ky + $sco - $sno);

        if ($row_count > 0)
            $sheet->insertNewRowBefore(15, $row_count);
        $sheet->removeRow(13, 2);
        $row_index = 13;
        foreach ($data as $ngay => $values) {
            foreach ($values as $value) {
                $sheet->setCellValue("A$row_index", $row_index - 12);
                $sheet->setCellValue("B$row_index", $ngay);
                $sheet->setCellValue("C$row_index", optional($value)->chung_tu);
                $sheet->setCellValue("E$row_index", $value->noi_dung);

                $sheet->setCellValue("G$row_index", optional($value)->loai_tuoi);
                $sheet->setCellValue("H$row_index", optional($value)->tong_tien);
                $sheet->setCellValue("I$row_index", optional($value)->dich_vu);

                $sheet->setCellValue("L$row_index", optional($value)->no);
                $sheet->setCellValue("M$row_index", optional($value)->co);
                $no_dau_ky += optional($value)->co - optional($value)->no;
                $sheet->setCellValue("N$row_index", $no_dau_ky);
                $row_index++;
            }
        }
        $sheet->setCellValue("E$row_index", "Tổng cộng");
        $sheet->setCellValue("L$row_index", $sno);
        $sheet->setCellValue("M$row_index", $sco);

        //set the header first, so the result will be treated as an xlsx file.
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //make it an attachment so we can define filename
        header('Content-Disposition: attachment;filename="result.xlsx"');
        $writer = IOFactory::createWriter($spreadSheet, "Xlsx");
        // Write file to output
        $writer->save('php://output');
    }

    /** 
     * Tính muavao, banra
     */
    public static function tinh_cong_no(Request $request, &$muavao, &$banra)
    {
        $user = $request->user();
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));

        $khachHang = KhachHang::where(fn ($query) => $query->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay))
            ->with(['thu_chis', 'dat_ves', 'ban_ras', 'tours', 'visas'])
            ->get();
        foreach ($khachHang as $kh) {
            $tmp = new stdClass;
            $tmp->id = $kh->id;
            $tmp->phan_loai = $kh->phan_loai;
            $tmp->khach_hang = $kh->ma_khach_hang . ' - ' . $kh->ho_ten;

            $phan_loai = strtoupper($tmp->phan_loai);
            if ($phan_loai != "THU CHI NGOàI") {
                $tmp->dau_ky = $kh->so_du_ky_truoc + BaoCaoHelper::TinhTongThanhToanBanRa($kh, $ngayTruoc) - BaoCaoHelper::TinhTongGiaoDichBanRa($kh, $ngayTruoc);
                $tmp->thanh_toan = BaoCaoHelper::TinhTongThanhToanBanRa($kh, $den_ngay, $tu_ngay);
                $tmp->giao_dich = BaoCaoHelper::TinhTongGiaoDichBanRa($kh, $den_ngay, $tu_ngay);
                $tmp->cuoi_ky = $tmp->dau_ky + $tmp->thanh_toan - $tmp->giao_dich;
            } else {
                $tmp->dau_ky = 0;
                $tmp->thanh_toan = BaoCaoHelper::TinhTongThanhToanBanRa($kh, $den_ngay, $tu_ngay);
                $tmp->giao_dich = 0;
                $tmp->cuoi_ky = 0;
            }

            $banra[] = $tmp;
        }

        $nhaCungCap = TaiKhoan::ofUser($user)->whereLoai(1)
            ->with(['thu_chi_dens', 'thu_chi_dis', 'dat_ves', 'ban_ra_hoa_dois', 'visas', 'hang_hoas'])
            ->get();

        // Lấy các tour chi tiết và mua vào của user hiện tại
        $tours = Tour::pluck('id');
        $tour_chi_tiets = TourChiTiet::whereIn('id_tour', $tours)->get();
        $mua_vaos = MuaVao::all();

        foreach ($nhaCungCap as $ncc) {
            $tmp = new stdClass;
            $tmp->id = $ncc->id;
            $tmp->tai_khoan = $ncc->ky_hieu . ' - ' . $ncc->mo_ta;

            $tmp->dau_ky = BaoCaoHelper::TongThuTK($ncc, $ngayTruoc) - BaoCaoHelper::TongChiTK($ncc, $tour_chi_tiets, $mua_vaos, $ngayTruoc);
            $tmp->thanh_toan = BaoCaoHelper::TongThuTK($ncc, $den_ngay, $tu_ngay);
            $tmp->giao_dich = BaoCaoHelper::TongChiTK($ncc, $tour_chi_tiets, $mua_vaos, $den_ngay, $tu_ngay);
            $tmp->cuoi_ky = $tmp->dau_ky + $tmp->thanh_toan - $tmp->giao_dich;

            $muavao[] = $tmp;
        }
        // Tính NƠI KHÁC..............
        $idNhaCungCap = $nhaCungCap->pluck('id')->toArray();
        $gdKhacF1 = DatVe::where('ngay_thang', '>=', $tu_ngay)->where('ngay_thang', '<=', $den_ngay)
            ->where(fn ($query) => $query->whereNull('id_tai_khoan_mua')->orWhereNotIn('id_tai_khoan_mua', $idNhaCungCap))
            ->sum('tong_tien');
        $muavao[] = (object)[
            'id' => -1,
            'tai_khoan' => "Nơi khác",
            'dau_ky' => 0,
            'thanh_toan' => 0,
            'cuoi_ky' => 0,
            'giao_dich' => round($gdKhacF1)
        ];
    }

    /**
     * Tổng hợp tài khoản
     *
     * @param  mixed $request
     * @param  mixed $format_price
     * @return array
     */
    public static function tinh_tai_khoan(Request $request, $format_price = true)
    {
        $user = $request->user();
        $tu_ngay =  date('Y-m-01');
        $den_ngay = date('Y-m-t');
        $result = [];

        if (!empty($request->bat_dau) && !empty($request->ket_thuc)) {
            $tu_ngay = substr($request->bat_dau, 0, 10);
            $den_ngay = substr($request->ket_thuc, 0, 10);
        }
        // Ngân hàng và nhà cung cấp
        $taiKhoan = TaiKhoan::ofUser($user)
            ->where('loai', '!=', '-1')
            ->where(function ($q) use ($den_ngay) {
                return $q->whereNull('ngay_tao')->orWhere('ngay_tao', "<=", $den_ngay);
            })
            ->orderBy('loai')
            ->with(['thu_chi_dens', 'thu_chi_dis', 'dat_ves', 'ban_ra_hoa_dois', 'visas', 'hang_hoas'])
            ->get();

        // Lấy các tour chi tiết và mua vào của user hiện tại
        $tours = Tour::pluck('id');
        $tour_chi_tiets = TourChiTiet::whereIn('id_tour', $tours)->get();
        $mua_vaos = MuaVao::all();

        $begin = new DateTime($tu_ngay);
        $end = new DateTime($den_ngay);
        $end->modify('+1 day');
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod($begin, $interval, $end);

        $ngayTruoc = date('Y-m-d', strtotime($tu_ngay . ' - 1 days'));
        $sum = 0;
        // Thêm các tài khoản
        foreach ($taiKhoan as $tk) {
            $tmp = new stdClass;
            $tmp1 = new stdClass;       // Thêm 2 hàng 1 lúc
            $tmp->id = $tk->id;
            $tmp1->id = $tk->id . 'a';
            $tmp->tai_khoan = $tk->ky_hieu;

            $duCuoiKy = BaoCaoHelper::TongThuTK($tk, $den_ngay) - BaoCaoHelper::TongChiTK($tk, $tour_chi_tiets, $mua_vaos, $den_ngay);
            $sum += $duCuoiKy;
            $dau_ky = BaoCaoHelper::TongThuTK($tk, $ngayTruoc) - BaoCaoHelper::TongChiTK($tk, $tour_chi_tiets, $mua_vaos, $ngayTruoc);
            if ($format_price) {
                $tmp->dau_ky = Util::VNDFormater($dau_ky);      // Đầu kỳ
                $tmp1->tai_khoan = Util::VNDFormater($duCuoiKy);
            } else {
                $tmp->dau_ky = $dau_ky;      // Đầu kỳ
                $tmp1->tai_khoan = $duCuoiKy;
            }
            $tmp1->dau_ky = '';
            $tmp->thu_chi = "THU";
            $tmp1->thu_chi = "CHI";

            $coDuLieu = false;
            // Thêm các cột tương ứng với giá trị thu theo từng ngày
            foreach ($period as $dt) {
                $t = $dt->format('d/m/y');  // Format ngày tháng hiển thị web
                $i = $dt->format("Y-m-d");  // Format ngày tháng SQL

                //TODO: 1 hàm xử lý toàn bộ => nhóm dữ liệu theo ngày giống thông tin vé bên Dashboard
                if ($format_price) {
                    $tmp->$t = Util::VNDFormater(BaoCaoHelper::TongThuTK($tk, $i, $i));
                    $tmp1->$t = Util::VNDFormater(BaoCaoHelper::TongChiTK($tk, $tour_chi_tiets, $mua_vaos, $i, $i));
                } else {
                    $tmp->$t = BaoCaoHelper::TongThuTK($tk, $i, $i);
                    $tmp1->$t = BaoCaoHelper::TongChiTK($tk, $tour_chi_tiets, $mua_vaos, $i, $i);
                }
                $coDuLieu = ($tmp->$t != '0' || $tmp1->$t != '0');
            }
            if ($tmp->dau_ky != '0' || $tmp1->tai_khoan != '0' || $coDuLieu) {
                $result[] = $tmp;
                $result[] = $tmp1;
            }
        }
        // Dư Nợ của khách hàng
        $duNo = BaoCaoHelper::TinhDuNo($den_ngay);
        $sum -= $duNo;
        $tmp = new stdClass;
        $tmp->id = -2;
        $tmp->tai_khoan = "DƯ - NỢ";
        $tmp->dau_ky = $format_price ? Util::VNDFormater($duNo) : $duNo;
        $result[] = $tmp;

        $datVe = DatVe::whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();
        $banRa = BanRa::whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();
        $tour = Tour::whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();
        $visa = Visa::whereBetween('ngay_thang', [$tu_ngay, $den_ngay])->get();

        // Thêm Lãi
        $lai = BaoCaoHelper::TinhLai($datVe, $banRa, $tour, $visa, $tu_ngay, $den_ngay);
        $tmp = new stdClass;
        $tmp->id = -1;
        $tmp->tai_khoan = "LÃI";
        $tmp->dau_ky = $format_price ? Util::VNDFormater($lai) : $lai;

        // Lãi từng ngày
        foreach ($period as $dt) {
            $t = $dt->format('d/m/y');
            $i = $dt->format("Y-m-d");
            $lai = BaoCaoHelper::TinhLai($datVe, $banRa, $tour, $visa, $i, $i);
            $tmp->$t = $format_price ? Util::VNDFormater($lai) : $lai;
        }
        $result[] = $tmp;

        // Thêm tồn kho
        if ($user->ban_hang) {
            $tonKho = BaoCaoHelper::TinhTonKho($den_ngay);
            $sum += $tonKho;
            $tmp = new stdClass;
            $tmp->id = -4;
            $tmp->tai_khoan = "TỒN KHO";
            $tmp->dau_ky = $format_price ? Util::VNDFormater($tonKho) : $tonKho;
            $result[] = $tmp;
        }

        // Thêm tổng cộng
        $tmp = new stdClass;
        $tmp->id = -3;
        $tmp->tai_khoan = "TỔNG CỘNG";
        $tmp->dau_ky = $format_price ? Util::VNDFormater($sum) : $sum;
        $result[] = $tmp;

        return $result;
    }
}

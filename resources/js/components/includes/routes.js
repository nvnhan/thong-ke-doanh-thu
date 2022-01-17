import React, { lazy } from "react";
import * as menus from "../../constants/SideMenus";

import TrangChu from "../../pages/TrangChu";
import NotFound from "../../pages/NotFound";

const ThuChi = lazy(() => import("../../pages/ThuChi/ThuChi"));
const ThemFileThuChi = lazy(() => import("../../pages/ThuChi/ThemFile"));
const ThuChiChiTiet = lazy(() => import("../../pages/ThuChi/ThuChiChiTiet"));

const DatVe = lazy(() => import("../../pages/VeMayBay/DatVe"));
const ThemText = lazy(() => import("../../pages/VeMayBay/ThemText"));
const ThemFile = lazy(() => import("../../pages/VeMayBay/ThemFile"));
const ThemMail = lazy(() => import("../../pages/VeMayBay/ThemMail"));

const NoVe = lazy(() => import("../../pages/VeMayBay/NoVe"));
const ChuaBay = lazy(() => import("../../pages/VeMayBay/ChuaBay"));
const SanBay = lazy(() => import("../../pages/VeMayBay/SanBay"));
const ThuePhi = lazy(() => import("../../pages/VeMayBay/ThuePhi"));
const PhiHanhLy = lazy(() => import("../../pages/VeMayBay/PhiHanhLy"));

const Tour = lazy(() => import("../../pages/TourVisa/Tour"));
const TourChiTiet = lazy(() => import("../../pages/TourVisa/TourChiTiet"));
const Visa = lazy(() => import("../../pages/TourVisa/Visa"));

const MuaVao = lazy(() => import("../../pages/BanHang/MuaVao"));
const BanRa = lazy(() => import("../../pages/BanHang/BanRa"));
const HoanDoi = lazy(() => import("../../pages/BanHang/HoanDoi"));
const TonKho = lazy(() => import("../../pages/BanHang/TonKho"));
const TongHop = lazy(() => import("../../pages/BanHang/TongHop"));

const TongHopTaiKhoan = lazy(() =>
    import("../../pages/BaoCao/TongHopTaiKhoan")
);
const TongHopCongNo = lazy(() => import("../../pages/BaoCao/TongHopCongNo"));
const CongNoChiTiet = lazy(() => import("../../pages/BaoCao/CongNoChiTiet"));
const DoiSoatTaiKhoan = lazy(() =>
    import("../../pages/BaoCao/DoiSoatTaiKhoan")
);
const BaoCaoTongHop = lazy(() => import("../../pages/BaoCao/BaoCaoTongHop"));

const TaiKhoan = lazy(() => import("../../pages/ThongTin/TaiKhoan"));
const NhaCungCap = lazy(() => import("../../pages/ThongTin/NhaCungCap"));
const KhachHang = lazy(() => import("../../pages/ThongTin/KhachHang"));
const HangHoa = lazy(() => import("../../pages/ThongTin/HangHoa"));

const Profile = lazy(() => import("../../pages/Account/Profile"));
const Password = lazy(() => import("../../pages/Account/Password"));

const NhanVien = lazy(() => import("../../pages/QuanTri/NhanVien"));
const CaiDat = lazy(() => import("../../pages/QuanTri/CaiDat"));

const routes = [
    {
        path: "/",
        exact: true,
        title: "Tổng quan",
        menu: menus.HOME,
        component: <TrangChu />
    },
    {
        path: "/thu-chi",
        exact: true,
        title: "Thu chi",
        menu: menus.THU_CHI,
        component: <ThuChi />,
        role: "chuc_nang"
    },
    {
        path: "/thu-chi/them-file",
        exact: false,
        title: "Thêm Thu chi từ Excel",
        menu: "",
        component: <ThemFileThuChi />,
        role: "chuc_nang"
    },
    {
        path: "/thu-chi-chi-tiet",
        exact: false,
        title: "Thu chi chi tiết",
        menu: "",
        component: <ThuChiChiTiet />,
        role: "chuc_nang"
    },
    {
        path: "/dat-ve",
        exact: true,
        title: "Đặt vé",
        menu: menus.VMB_DAT_VE,
        component: <DatVe />,
        role: "chuc_nang"
    },
    {
        path: "/dat-ve/them-text",
        exact: false,
        title: "Thêm từ kết quả đặt vé",
        menu: "",
        component: <ThemText />,
        role: "chuc_nang"
    },
    {
        path: "/dat-ve/them-file",
        exact: false,
        title: "Thêm Đặt vé từ file",
        menu: "",
        component: <ThemFile />,
        role: "chuc_nang"
    },
    {
        path: "/dat-ve/them-mail",
        exact: false,
        title: "Thêm Đặt vé từ mail",
        menu: "",
        component: <ThemMail />,
        role: "chuc_nang"
    },
    {
        path: "/no-ve",
        exact: false,
        title: "Nợ vé",
        menu: menus.VMB_NO_VE,
        component: <NoVe />,
        role: "chuc_nang"
    },
    {
        path: "/chua-bay",
        exact: false,
        title: "Chưa bay",
        menu: menus.VMB_CHUA_BAY,
        component: <ChuaBay />,
        role: "chuc_nang"
    },
    {
        path: "/san-bay",
        exact: false,
        title: "Sân bay",
        menu: menus.VMB_SAN_BAY,
        component: <SanBay />,
        role: "admin"
    },
    {
        path: "/thue-phi",
        exact: false,
        title: "Thuế phí",
        menu: menus.VMB_THUE_PHI,
        component: <ThuePhi />,
        role: "admin"
    },
    {
        path: "/phi-hanh-ly",
        exact: false,
        title: "Phí hành lý",
        menu: menus.VMB_HANH_LY,
        component: <PhiHanhLy />,
        role: "admin"
    },
    {
        path: "/tour",
        exact: false,
        title: "Tour - Combo",
        menu: menus.TV_TOUR,
        component: <Tour />,
        role: "tour_visa"
    },
    {
        path: "/tour-chi-tiet",
        exact: false,
        title: "Tour chi tiết",
        menu: "",
        component: <TourChiTiet />,
        role: "tour_visa"
    },
    {
        path: "/visa",
        exact: false,
        title: "Visa",
        menu: menus.TV_VISA,
        component: <Visa />,
        role: "tour_visa"
    },
    {
        path: "/mua-vao",
        exact: false,
        title: "Mua vào",
        menu: menus.BH_MUA_VAO,
        component: <MuaVao />,
        role: "ban_hang"
    },
    {
        path: "/ban-ra",
        exact: false,
        title: "Bán ra",
        menu: menus.BH_BAN_RA,
        component: <BanRa />,
        role: "ban_hang"
    },
    {
        path: "/hoan-doi",
        exact: false,
        title: "Hoàn đổi",
        menu: menus.BH_HOAN_DOI,
        component: <HoanDoi />,
        role: "ban_hang"
    },
    {
        path: "/ton-kho",
        exact: false,
        title: "Tồn kho",
        menu: menus.BH_TON_KHO,
        component: <TonKho />,
        role: "ban_hang"
    },
    {
        path: "/tong-hop-hang",
        exact: false,
        title: "Tổng hợp hàng",
        menu: menus.BH_TONG_HOP,
        component: <TongHop />,
        role: "ban_hang"
    },
    {
        path: "/tong-hop-tai-khoan",
        exact: false,
        title: "Tổng hợp tài khoản",
        menu: menus.BC_TONG_HOP_TAI_KHOAN,
        component: <TongHopTaiKhoan />,
        role: "chuc_nang"
    },
    {
        path: "/tong-hop-cong-no",
        exact: false,
        title: "Tổng hợp công nợ",
        menu: menus.BC_TONG_HOP_CONG_NO,
        component: <TongHopCongNo />,
        role: "chuc_nang"
    },
    {
        path: "/cong-no-chi-tiet",
        exact: false,
        title: "Công nợ chi tiết",
        menu: menus.BC_CONG_NO_CHI_TIET,
        component: <CongNoChiTiet />,
        role: "chuc_nang"
    },
    {
        path: "/doi-soat-tai-khoan",
        exact: false,
        title: "Đối soát tài khoản",
        menu: menus.BC_DOI_SOAT_TAI_KHOAN,
        component: <DoiSoatTaiKhoan />,
        role: "chuc_nang"
    },
    {
        path: "/bao-cao-tong-hop",
        exact: false,
        title: "Báo cáo tổng hợp",
        menu: menus.BC_BAO_CAO_TONG_HOP,
        component: <BaoCaoTongHop />,
        role: "chuc_nang"
    },
    {
        path: "/tai-khoan",
        exact: false,
        title: "Tài khoản",
        menu: menus.TT_TAI_KHOAN,
        component: <TaiKhoan />,
        role: "quan_ly"
    },
    {
        path: "/nha-cung-cap",
        exact: false,
        title: "Nhà cung cấp",
        menu: menus.TT_NHA_CUNG_CAP,
        component: <NhaCungCap />,
        role: "quan_ly"
    },
    {
        path: "/khach-hang",
        exact: false,
        title: "Khách hàng",
        menu: menus.TT_KHACH_HANG,
        component: <KhachHang />,
        role: "chuc_nang"
    },
    {
        path: "/hang-hoa",
        exact: false,
        title: "Hàng hóa",
        menu: menus.TT_HANG_HOA,
        component: <HangHoa />,
        role: "ban_hang"
    },
    {
        path: "/nhan-vien",
        exact: false,
        title: "Nhân viên",
        menu: menus.QT_USER,
        component: <NhanVien />,
        role: "quan_tri"
    },
    {
        path: "/cai-dat",
        exact: false,
        title: "Cài đặt",
        menu: menus.QT_CAI_DAT,
        component: <CaiDat />,
        role: "admin"
    },
    {
        path: "/cai-dat-ca-nhan",
        exact: false,
        title: "Cài đặt cá nhân",
        menu: "",
        component: <Profile />
    },
    {
        path: "/doi-mat-khau",
        exact: false,
        title: "Đổi mật khẩu",
        menu: "",
        component: <Password />
    },
    {
        path: "/",
        exact: false,
        title: "Lỗi 404!",
        menu: "",
        component: <NotFound />
    }
];

export default routes;

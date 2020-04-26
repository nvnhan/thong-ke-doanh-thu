import React, { lazy } from "react";
import * as menus from "../../constants/SideMenus";

import TrangChu from "../../pages/TrangChu";
import NotFound from "../../pages/NotFound";

const ThuChi = lazy(() => import("../../pages/ThuChi/ThuChi"));
const ThuChiChiTiet = lazy(() => import("../../pages/ThuChi/ThuChiChiTiet"));

const DatVe = lazy(() => import("../../pages/VeMayBay/DatVe"));
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

const TaiKhoan = lazy(() => import("../../pages/ThongTin/TaiKhoan"));
const NhaCungCap = lazy(() => import("../../pages/ThongTin/NhaCungCap"));
const KhachHang = lazy(() => import("../../pages/ThongTin/KhachHang"));
const HangHoa = lazy(() => import("../../pages/ThongTin/HangHoa"));

const Profile = lazy(() => import("../../pages/Account/Profile"));
const Password = lazy(() => import("../../pages/Account/Password"));

const NhanVien = lazy(() => import("../../pages/QuanTri/NhanVien"));

const routes = [
    {
        path: "/",
        exact: true,
        title: "Trang chủ",
        menu: menus.HOME,
        component: <TrangChu />
    },
    {
        path: "/thu-chi",
        exact: false,
        title: "Thu chi",
        menu: menus.THU_CHI,
        component: <ThuChi />
    },
    {
        path: "/thu-chi-chi-tiet",
        exact: false,
        title: "Thu chi chi tiết",
        menu: "",
        component: <ThuChiChiTiet />
    },
    {
        path: "/dat-ve",
        exact: false,
        title: "Đặt vé",
        menu: menus.VMB_DAT_VE,
        component: <DatVe />
    },
    {
        path: "/no-ve",
        exact: false,
        title: "Nợ vé",
        menu: menus.VMB_NO_VE,
        component: <NoVe />
    },
    {
        path: "/chua-bay",
        exact: false,
        title: "Chưa bay",
        menu: menus.VMB_CHUA_BAY,
        component: <ChuaBay />
    },
    {
        path: "/san-bay",
        exact: false,
        title: "Sân bay",
        menu: menus.VMB_SAN_BAY,
        component: <SanBay />
    },
    {
        path: "/thue-phi",
        exact: false,
        title: "Thuế phí",
        menu: menus.VMB_THUE_PHI,
        component: <ThuePhi />
    },
    {
        path: "/phi-hanh-ly",
        exact: false,
        title: "Phí hành lý",
        menu: menus.VMB_HANH_LY,
        component: <PhiHanhLy />
    },
    {
        path: "/tour",
        exact: false,
        title: "Quản lý Tour",
        menu: menus.TV_TOUR,
        component: <Tour />
    },
    {
        path: "/tour-chi-tiet",
        exact: false,
        title: "Tour chi tiết",
        menu: "",
        component: <TourChiTiet />
    },
    {
        path: "/visa",
        exact: false,
        title: "Visa",
        menu: menus.TV_VISA,
        component: <Visa />
    },
    {
        path: "/mua-vao",
        exact: false,
        title: "Mua vào",
        menu: menus.BH_MUA_VAO,
        component: <MuaVao />
    },
    {
        path: "/ban-ra",
        exact: false,
        title: "Bán ra",
        menu: menus.BH_BAN_RA,
        component: <BanRa />
    },
    {
        path: "/hoan-doi",
        exact: false,
        title: "Hoàn đổi",
        menu: menus.BH_HOAN_DOI,
        component: <HoanDoi />
    },
    {
        path: "/ton-kho",
        exact: false,
        title: "Tồn kho",
        menu: menus.BH_TON_KHO,
        component: <TonKho />
    },
    {
        path: "/tong-hop-hang",
        exact: false,
        title: "Tổng hợp hàng",
        menu: menus.BH_TONG_HOP,
        component: <TongHop />
    },
    {
        path: "/tong-hop-tai-khoan",
        exact: false,
        title: "Tổng hợp tài khoản",
        menu: menus.BC_TONG_HOP_TAI_KHOAN,
        component: <TongHopTaiKhoan />
    },
    {
        path: "/tong-hop-cong-no",
        exact: false,
        title: "Tổng hợp công nợ",
        menu: menus.BC_TONG_HOP_CONG_NO,
        component: <TongHopCongNo />
    },
    {
        path: "/cong-no-chi-tiet",
        exact: false,
        title: "Công nợ chi tiết",
        menu: menus.BC_CONG_NO_CHI_TIET,
        component: <CongNoChiTiet />
    },
    {
        path: "/doi-soat-tai-khoan",
        exact: false,
        title: "Đối soát tài khoản",
        menu: menus.BC_DOI_SOAT_TAI_KHOAN,
        component: <DoiSoatTaiKhoan />
    },
    {
        path: "/tai-khoan",
        exact: false,
        title: "Tài khoản",
        menu: menus.TT_TAI_KHOAN,
        component: <TaiKhoan />
    },
    {
        path: "/nha-cung-cap",
        exact: false,
        title: "Nhà cung cấp",
        menu: menus.TT_NHA_CUNG_CAP,
        component: <NhaCungCap />
    },
    {
        path: "/khach-hang",
        exact: false,
        title: "Khách hàng",
        menu: menus.TT_KHACH_HANG,
        component: <KhachHang />
    },
    {
        path: "/hang-hoa",
        exact: false,
        title: "Hàng hóa",
        menu: menus.TT_HANG_HOA,
        component: <HangHoa />
    },
    {
        path: "/nhan-vien",
        exact: false,
        title: "Nhân viên",
        menu: menus.QT_USER,
        component: <NhanVien />
    },
    {
        path: "/thong-tin-ca-nhan",
        exact: false,
        title: "Thông tin cá nhân",
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

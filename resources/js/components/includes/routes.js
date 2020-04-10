import React, { lazy } from "react";
import * as menus from "../../constants/SideMenus";

const TrangChu = lazy(() => import("../../pages/TrangChu"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const DatVe = lazy(() => import("../../pages/VeMayBay/DatVe"));
const SanBay = lazy(() => import("../../pages/VeMayBay/SanBay"));
const ThuePhi = lazy(() => import("../../pages/VeMayBay/ThuePhi"));
const PhiHanhLy = lazy(() => import("../../pages/VeMayBay/PhiHanhLy"));

const Tour = lazy(() => import("../../pages/TourVisa/Tour"));
const TourChiTiet = lazy(() => import("../../pages/TourVisa/TourChiTiet"));
const Visa = lazy(() => import("../../pages/TourVisa/Visa"));

const MuaVao = lazy(() => import("../../pages/BanHang/MuaVao"));
const BanRa = lazy(() => import("../../pages/BanHang/BanRa"));

const TaiKhoan = lazy(() => import("../../pages/ThongTin/TaiKhoan"));
const NhaCungCap = lazy(() => import("../../pages/ThongTin/NhaCungCap"));
const KhachHang = lazy(() => import("../../pages/ThongTin/KhachHang"));
const HangHoa = lazy(() => import("../../pages/ThongTin/HangHoa"));

const Profile = lazy(() => import("../../pages/Account/Profile"));
const Password = lazy(() => import("../../pages/Account/Password"));

const routes = [
    {
        path: "/",
        exact: true,
        title: "Trang chủ",
        menu: menus.HOME,
        component: <TrangChu />
    },
    {
        path: "/dat-ve",
        exact: false,
        title: "Đặt vé",
        menu: menus.VMB_DAT_VE,
        component: <DatVe />
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
        menu: menus.TV_TOUR_CHI_TIET,
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

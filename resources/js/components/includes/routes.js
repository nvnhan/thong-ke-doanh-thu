import React, { lazy } from "react";
import * as menus from "../../constants/SideMenus";

const TrangChu = lazy(() => import("../../pages/TrangChu"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const DatVe = lazy(() => import("../../pages/VeMayBay/DatVe"));
const SanBay = lazy(() => import("../../pages/VeMayBay/SanBay"));
const ThuePhi = lazy(() => import("../../pages/VeMayBay/ThuePhi"));
const PhiHanhLy = lazy(() => import("../../pages/VeMayBay/PhiHanhLy"));

const TaiKhoan = lazy(() => import("../../pages/ThongTin/TaiKhoan"));
const KhachHang = lazy(() => import("../../pages/ThongTin/KhachHang"));

const Profile = lazy(() => import("../../pages/Account/Profile"));
const Password = lazy(() => import("../../pages/Account/Password"));

const routes = [
    {
        path: "/",
        exact: true,
        title: "Thống kê doanh thu",
        menu: menus.HOME,
        component: <TrangChu />,
    },
    {
        path: "/dat-ve",
        exact: false,
        title: "Đặt vé",
        menu: menus.VMB_DAT_VE,
        component: <DatVe />,
    },
    {
        path: "/san-bay",
        exact: false,
        title: "Sân bay",
        menu: menus.VMB_SAN_BAY,
        component: <SanBay />,
    },
    {
        path: "/thue-phi",
        exact: false,
        title: "Thuế phí",
        menu: menus.VMB_THUE_PHI,
        component: <ThuePhi />,
    },
    {
        path: "/phi-hanh-ly",
        exact: false,
        title: "Phí hành lý",
        menu: menus.VMB_HANH_LY,
        component: <PhiHanhLy />,
    },
    {
        path: "/tai-khoan",
        exact: false,
        title: "Tài khoản",
        menu: menus.TT_TAI_KHOAN,
        component: <TaiKhoan />,
    },
    {
        path: "/khach-hang",
        exact: false,
        title: "Khách hàng",
        menu: menus.TT_KHACH_HANG,
        component: <KhachHang />,
    },
    {
        path: "/thong-tin-ca-nhan",
        exact: false,
        title: "Thông tin cá nhân",
        menu: "",
        component: <Profile />,
    },
    {
        path: "/doi-mat-khau",
        exact: false,
        title: "Đổi mật khẩu",
        menu: "",
        component: <Password />,
    },
    {
        path: "/",
        exact: false,
        title: "Lỗi 404!",
        menu: "",
        component: <NotFound />,
    },
];

export default routes;

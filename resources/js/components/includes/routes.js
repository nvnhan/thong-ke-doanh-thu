import React, { lazy } from 'react'
const TrangChu = lazy(() => import("../../pages/TrangChu"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const DatVe = lazy(() => import("../../pages/VeMayBay/DatVe"));
const SanBay = lazy(() => import("../../pages/VeMayBay/SanBay"));
const ThuePhi = lazy(() => import("../../pages/VeMayBay/ThuePhi"));
const PhiHanhLy = lazy(() => import("../../pages/VeMayBay/PhiHanhLy"));

const TaiKhoan = lazy(() => import("../../pages/ThongTin/TaiKhoan"));
const KhachHang = lazy(() => import("../../pages/ThongTin/KhachHang"));

const routes = [
    {
        path: "/",
        exact: true,
        component: <TrangChu />,
    },
    {
        path: "/dat-ve",
        exact: false,
        component: <DatVe />,
    },
    {
        path: "/san-bay",
        exact: false,
        component: <SanBay />,
    },
    {
        path: "/thue-phi",
        exact: false,
        component: <ThuePhi />,
    },
    {
        path: "/phi-hanh-ly",
        exact: false,
        component: <PhiHanhLy />,
    },
    {
        path: "/tai-khoan",
        exact: false,
        component: <TaiKhoan />,
    },
    {
        path: "/khach-hang",
        exact: false,
        component: <KhachHang />,
    },
    {
        path: "/",
        exact: false,
        component: <NotFound />,
    },
];

export default routes;
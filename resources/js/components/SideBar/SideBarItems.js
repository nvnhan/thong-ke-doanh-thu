import React from "react";
import {
    BarsOutlined,
    WalletOutlined,
    BookOutlined,
    PieChartOutlined,
    DashboardOutlined,
    CaretRightOutlined,
    SettingOutlined,
    AppstoreOutlined,
    CarOutlined,
    GlobalOutlined,
    ShoppingCartOutlined,
    ExportOutlined,
    ImportOutlined,
    RollbackOutlined,
    DatabaseOutlined
} from "@ant-design/icons";

import * as SideMenus from "../../constants/SideMenus";

const items = [
    {
        key: SideMenus.HOME,
        href: "/",
        icon: <DashboardOutlined />,
        title: "Tổng quan"
    },
    {
        key: SideMenus.THU_CHI,
        href: "/thu-chi",
        icon: <WalletOutlined />,
        title: "Thu chi"
    },
    {
        key: "SUB_VMB",
        icon: <BookOutlined />,
        title: "Vé máy bay",
        childs: [
            {
                key: SideMenus.VMB_DAT_VE,
                href: "/dat-ve",
                icon: <PieChartOutlined />,
                title: "Đặt vé"
            },
            {
                key: SideMenus.VMB_SAN_BAY,
                href: "/san-bay",
                icon: <CaretRightOutlined />,
                title: "Sân bay"
            },
            {
                key: SideMenus.VMB_THUE_PHI,
                href: "/thue-phi",
                icon: <CaretRightOutlined />,
                title: "Thuế phí"
            },
            {
                key: SideMenus.VMB_HANH_LY,
                href: "/phi-hanh-ly",
                icon: <CaretRightOutlined />,
                title: "Phí hành lý"
            }
        ]
    },
    {
        key: "SUB_TV",
        icon: <AppstoreOutlined />,
        title: "Tour - Visa",
        childs: [
            {
                key: SideMenus.TV_TOUR,
                href: "/tour",
                icon: <CarOutlined />,
                title: "Quản lý Tour"
            },
            {
                key: SideMenus.TV_VISA,
                href: "/visa",
                icon: <GlobalOutlined />,
                title: "Visa"
            }
        ]
    },
    {
        key: "SUB_BH",
        icon: <ShoppingCartOutlined />,
        title: "Bán hàng",
        childs: [
            {
                key: SideMenus.BH_MUA_VAO,
                href: "/mua-vao",
                icon: <ImportOutlined />,
                title: "Mua vào"
            },
            {
                key: SideMenus.BH_BAN_RA,
                href: "/ban-ra",
                icon: <ExportOutlined />,
                title: "Bán ra"
            },
            {
                key: SideMenus.BH_HOAN_DOI,
                href: "/hoan-doi",
                icon: <RollbackOutlined />,
                title: "Hoàn đổi"
            },
            {
                key: SideMenus.BH_TON_KHO,
                href: "/ton-kho",
                icon: <DatabaseOutlined />,
                title: "Tồn kho"
            }
        ]
    },
    {
        key: "SUB_TT",
        icon: <BarsOutlined />,
        title: "Thông tin chung",
        childs: [
            {
                key: SideMenus.TT_TAI_KHOAN,
                href: "/tai-khoan",
                icon: <CaretRightOutlined />,
                title: "Tài khoản"
            },
            {
                key: SideMenus.TT_NHA_CUNG_CAP,
                href: "/nha-cung-cap",
                icon: <CaretRightOutlined />,
                title: "Nhà cung cấp"
            },
            {
                key: SideMenus.TT_KHACH_HANG,
                href: "/khach-hang",
                icon: <CaretRightOutlined />,
                title: "Khách hàng"
            },
            {
                key: SideMenus.TT_HANG_HOA,
                href: "/hang-hoa",
                icon: <CaretRightOutlined />,
                title: "Hàng hóa"
            }
        ]
    },
    {
        key: "",
        href: "/cai-dat",
        admin: true,
        icon: <SettingOutlined />,
        title: "Cài đặt"
    }
];

export default items;

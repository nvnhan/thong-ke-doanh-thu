import React from "react";
import {
    ToolOutlined,
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
    DatabaseOutlined,
    CalculatorOutlined,
    TeamOutlined,
    FundOutlined
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
                key: SideMenus.VMB_NO_VE,
                href: "/no-ve",
                icon: <PieChartOutlined />,
                title: "Nợ vé"
            },
            {
                key: SideMenus.VMB_CHUA_BAY,
                href: "/chua-bay",
                icon: <PieChartOutlined />,
                title: "Chưa bay"
            },
            {
                key: "divider",
                admin: true
            },
            {
                key: SideMenus.VMB_SAN_BAY,
                href: "/san-bay",
                admin: true,
                icon: <CaretRightOutlined />,
                title: "Sân bay"
            },
            {
                key: SideMenus.VMB_THUE_PHI,
                href: "/thue-phi",
                admin: true,
                icon: <CaretRightOutlined />,
                title: "Thuế phí"
            },
            {
                key: SideMenus.VMB_HANH_LY,
                href: "/phi-hanh-ly",
                admin: true,
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
            },
            {
                key: SideMenus.BH_TONG_HOP,
                href: "/tong-hop-hang",
                icon: <CalculatorOutlined />,
                title: "Tổng hợp hàng"
            }
        ]
    },
    {
        key: "SUB_BC",
        icon: <FundOutlined />,
        title: "Báo cáo",
        childs: [
            {
                key: SideMenus.BC_TONG_HOP_TAI_KHOAN,
                href: "/tong-hop-tai-khoan",
                icon: <CaretRightOutlined />,
                title: "TH tài khoản"
            },
            {
                key: SideMenus.BC_CONG_NO_CHI_TIET,
                href: "/cong-no-chi-tiet",
                icon: <CaretRightOutlined />,
                title: "Công nợ chi tiết"
            },
            {
                key: SideMenus.BC_TONG_HOP_CONG_NO,
                href: "/tong-hop-cong-no",
                icon: <CaretRightOutlined />,
                title: "TH công nợ"
            },
            {
                key: SideMenus.BC_DOI_SOAT_TAI_KHOAN,
                href: "/doi-soat-tai-khoan",
                icon: <CaretRightOutlined />,
                title: "Đối soát tài khoản"
            }
        ]
    },
    {
        key: "divider"
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
        key: "SUB_QT",
        icon: <ToolOutlined />,
        title: "Quản trị",
        admin: true,
        childs: [
            {
                key: SideMenus.QT_USER,
                href: "/nhan-vien",
                icon: <TeamOutlined />,
                title: "Nhân viên"
            },
            {
                key: SideMenus.QT_CAI_DAT,
                href: "/cai-dat",
                icon: <SettingOutlined />,
                title: "Cài đặt"
            }
        ]
    }
];

export default items;

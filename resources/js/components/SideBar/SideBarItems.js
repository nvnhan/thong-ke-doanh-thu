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
        title: "Thu chi",
        role: "chuc_nang"
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
                title: "Đặt vé",
                role: "chuc_nang"
            },
            {
                key: SideMenus.VMB_NO_VE,
                href: "/no-ve",
                icon: <PieChartOutlined />,
                title: "Nợ vé",
                role: "chuc_nang"
            },
            {
                key: SideMenus.VMB_CHUA_BAY,
                href: "/chua-bay",
                icon: <PieChartOutlined />,
                title: "Chưa bay",
                role: "chuc_nang"
            },
            {
                key: "divider",
                role: "admin"
            },
            {
                key: SideMenus.VMB_SAN_BAY,
                href: "/san-bay",
                icon: <CaretRightOutlined />,
                title: "Sân bay",
                role: "admin"
            },
            {
                key: SideMenus.VMB_THUE_PHI,
                href: "/thue-phi",
                icon: <CaretRightOutlined />,
                title: "Thuế phí",
                role: "admin"
            },
            {
                key: SideMenus.VMB_HANH_LY,
                href: "/phi-hanh-ly",
                icon: <CaretRightOutlined />,
                title: "Phí hành lý",
                role: "admin"
            }
        ]
    },
    {
        key: "SUB_TV",
        icon: <AppstoreOutlined />,
        title: "Tour - Visa",
        role: "tour_visa",
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
        role: "ban_hang",
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
                key: "divider"
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
        key: "SUB_BC",
        icon: <FundOutlined />,
        title: "Báo cáo",
        role: "chuc_nang",
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
            },
            {
                key: SideMenus.BC_BAO_CAO_TONG_HOP,
                href: "/bao-cao-tong-hop",
                icon: <CaretRightOutlined />,
                title: "Báo cáo tổng hợp"
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
        role: "chuc_nang",
        childs: [
            {
                key: SideMenus.TT_TAI_KHOAN,
                href: "/tai-khoan",
                icon: <CaretRightOutlined />,
                title: "Tài khoản",
                role: "quan_ly"
            },
            {
                key: SideMenus.TT_NHA_CUNG_CAP,
                href: "/nha-cung-cap",
                icon: <CaretRightOutlined />,
                title: "Nhà cung cấp",
                role: "quan_ly"
            },
            {
                key: SideMenus.TT_KHACH_HANG,
                href: "/khach-hang",
                icon: <CaretRightOutlined />,
                title: "Khách hàng"
            }
        ]
    },
    {
        key: "SUB_QT",
        icon: <ToolOutlined />,
        title: "Quản trị",
        role: "quan_tri",
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
                title: "Cài đặt",
                role: "admin"
            }
        ]
    }
];

export default items;

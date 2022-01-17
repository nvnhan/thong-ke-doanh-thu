import AppstoreOutlined from "@ant-design/icons/AppstoreOutlined";
import BarsOutlined from "@ant-design/icons/BarsOutlined";
import BookOutlined from "@ant-design/icons/BookOutlined";
import DashboardOutlined from "@ant-design/icons/DashboardOutlined";
import FundOutlined from "@ant-design/icons/FundOutlined";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
import ToolOutlined from "@ant-design/icons/ToolOutlined";
import WalletOutlined from "@ant-design/icons/WalletOutlined";
import React from "react";
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
                title: "Đặt vé",
                role: "chuc_nang"
            },
            {
                key: SideMenus.VMB_NO_VE,
                href: "/no-ve",
                title: "Nợ vé",
                role: "chuc_nang"
            },
            {
                key: SideMenus.VMB_CHUA_BAY,
                href: "/chua-bay",
                title: "Chưa bay",
                role: "chuc_nang"
            },
            {
                key: SideMenus.VMB_SAN_BAY,
                href: "/san-bay",
                title: "Sân bay",
                role: "admin"
            },
            {
                key: SideMenus.VMB_THUE_PHI,
                href: "/thue-phi",
                title: "Thuế phí",
                role: "admin"
            },
            {
                key: SideMenus.VMB_HANH_LY,
                href: "/phi-hanh-ly",
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
                title: "Tour - Combo"
            },
            {
                key: SideMenus.TV_VISA,
                href: "/visa",
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
                title: "Mua vào"
            },
            {
                key: SideMenus.BH_BAN_RA,
                href: "/ban-ra",
                title: "Bán ra"
            },
            {
                key: SideMenus.BH_HOAN_DOI,
                href: "/hoan-doi",
                title: "Hoàn đổi"
            },
            {
                key: SideMenus.BH_TON_KHO,
                href: "/ton-kho",
                title: "Tồn kho"
            },
            {
                key: SideMenus.BH_TONG_HOP,
                href: "/tong-hop-hang",
                title: "Tổng hợp hàng"
            },
            {
                key: SideMenus.TT_HANG_HOA,
                href: "/hang-hoa",
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
                title: "TH tài khoản"
            },
            {
                key: SideMenus.BC_CONG_NO_CHI_TIET,
                href: "/cong-no-chi-tiet",
                title: "Công nợ chi tiết"
            },
            {
                key: SideMenus.BC_TONG_HOP_CONG_NO,
                href: "/tong-hop-cong-no",
                title: "TH công nợ"
            },
            {
                key: SideMenus.BC_DOI_SOAT_TAI_KHOAN,
                href: "/doi-soat-tai-khoan",
                title: "Đối soát tài khoản"
            },
            {
                key: SideMenus.BC_BAO_CAO_TONG_HOP,
                href: "/bao-cao-tong-hop",
                title: "Báo cáo tổng hợp"
            }
        ]
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
                title: "Tài khoản",
                role: "quan_ly"
            },
            {
                key: SideMenus.TT_NHA_CUNG_CAP,
                href: "/nha-cung-cap",
                title: "Nhà cung cấp",
                role: "quan_ly"
            },
            {
                key: SideMenus.TT_KHACH_HANG,
                href: "/khach-hang",
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
                title: "Nhân viên"
            },
            {
                key: SideMenus.QT_CAI_DAT,
                href: "/cai-dat",
                title: "Cài đặt",
                role: "admin"
            }
        ]
    }
];

export default items;

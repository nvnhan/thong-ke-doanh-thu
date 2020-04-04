import React from "react";
import {
    BarsOutlined,
    DesktopOutlined,
    PieChartOutlined,
    DashboardOutlined,
    CaretRightOutlined
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
        icon: <DashboardOutlined />,
        title: "Thu chi"
    },
    {
        key: "SUB_VMB",
        icon: <BarsOutlined />,
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
        key: "SUB_TT",
        icon: <BarsOutlined />,
        title: "Thông tin chung",
        childs: [
            {
                key: "2",
                href: "/tai-khoan",
                icon: <CaretRightOutlined />,
                title: "Tài khoản"
            },
            {
                key: "3",
                href: "/nha-cung-cap",
                icon: <CaretRightOutlined />,
                title: "Nhà cung cấp"
            },
            {
                key: "4",
                href: "/khach-hang",
                icon: <CaretRightOutlined />,
                title: "Khách hàng"
            },
            {
                key: "5",
                href: "/hang-hoa",
                icon: <CaretRightOutlined />,
                title: "Hàng hóa"
            }
        ]
    }
];

export default items;

import React from 'react'
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
        key: SideMenus.DAT_VE,
        href: "/dat-ve",
        icon: <PieChartOutlined />,
        title: "Đặt vé"
    },
    {
        key: "SUB_DM",
        icon: <BarsOutlined />,
        title: "Danh mục",
        childs: [
            {
                key: SideMenus.DM_SAN_BAY,
                href: "/san-bay",
                icon: <CaretRightOutlined />,
                title: "Sân bay"
            },
            {
                key: "3",
                href: "/tai-khoan",
                icon: <CaretRightOutlined />,
                title: "Tài khoản"
            },
            {
                key: "4",
                href: "/khach-hang",
                icon: <CaretRightOutlined />,
                title: "Khách hàng"
            }
        ]
    }
];

export default items;
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Layout, Menu } from "antd";
import {
    BarsOutlined,
    DesktopOutlined,
    PieChartOutlined,
    DashboardOutlined,
    CaretRightOutlined
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

import * as SideMenus from "../../constants/SideMenus";
import MenuItem from "antd/lib/menu/MenuItem";

class SideBar extends PureComponent {
    genLinkMenuItem = item => {
        return (
            <Menu.Item key={item.key}>
                <Link to={item.href}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </Menu.Item>
        );
    };

    genSiderMenu = items => {
        return items.map(item => {
            if (item.childs) {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                {item.icon}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {item.childs.map(subItem =>
                            this.genLinkMenuItem(subItem)
                        )}
                    </SubMenu>
                );
            } else {
                return this.genLinkMenuItem(item);
            }
        });
    };

    render() {
        const { menuActive } = this.props;
        const selectedSubMenu = "SUB_" + menuActive.split("_")[0];

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

        return (
            <Sider
                style={{
                    minHeight: "100vh"
                }}
                breakpoint="md"
                collapsedWidth="0"
                collapsible
            >
                <div className="logo">
                    <img src="/img/logo.png" /> TKDT
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[menuActive]}
                    defaultOpenKeys={[selectedSubMenu]}
                >
                    {this.genSiderMenu(items)}
                </Menu>
            </Sider>
        );
    }
}
/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => ({
    menuActive: state.menuActive
});

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps)(SideBar);

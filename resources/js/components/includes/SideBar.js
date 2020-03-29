import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Layout, Menu } from "antd";
import {
    BarsOutlined,
    DesktopOutlined,
    PieChartOutlined,
    DashboardOutlined
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

import * as SideMenus from "../../constants/SideMenus";

class SideBar extends React.Component {
    componentDidMount() {
        console.log(this.props.menuActive)
    }
    
    render() {
        return (
            <Sider
                style={{
                    height: "100vh"
                }}
                breakpoint="md"
                collapsedWidth="0"
                collapsible
            >
                <div className="logo">LOGO</div>
                <Menu
                    theme="dark"
                    selectedKeys={this.props.menuActive}
                    mode="inline"
                >
                    <Menu.Item key={SideMenus.HOME}>
                        <Link to="/">
                            <DashboardOutlined />
                            Tổng quan
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={SideMenus.DAT_VE}>
                        <Link to="/dat-ve">
                            <PieChartOutlined />
                            <span>Đặt vé</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <BarsOutlined />
                                <span>Danh mục</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">Tài khoản</Menu.Item>
                        <Menu.Item key="4">Khách hàng</Menu.Item>
                        <Menu.Item key="5">Sân bay</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {
        menuActive: state.menuActive
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps)(SideBar);

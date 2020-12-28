import Layout from "antd/lib/layout/index";
import Menu from "antd/lib/menu/index";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import items from "./SideBarItems";
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends PureComponent {
    genLinkMenuItem = (item, index) => {
        if (item.role && this.props.authUser[item.role] !== true) return "";
        if (item.key === "divider") return <Menu.Divider key={index} />;
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
        return items.map((item, index) => {
            if (item.role && this.props.authUser[item.role] !== true) return "";
            if (item.childs) {
                // Has childs
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
                        {item.childs.map((subItem, index) =>
                            this.genLinkMenuItem(subItem, index)
                        )}
                    </SubMenu>
                );
            } else {
                return this.genLinkMenuItem(item, index);
            }
        });
    };

    render() {
        const { menuActive } = this.props;      // From redux
        const selectedSubMenu = "SUB_" + menuActive.split("_")[0];

        return (
            <Sider breakpoint="lg" collapsedWidth="0" collapsible>
                <div className="logo">
                    <img src="/images/logo.png" /> TIENVE.NET
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
    menuActive: state.menuActive,
    authUser: state.authUser
});

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps)(SideBar);

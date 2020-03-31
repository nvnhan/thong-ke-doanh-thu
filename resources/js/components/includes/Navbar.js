import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header } = Layout;

export class Navbar extends PureComponent {
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Menu key="user" mode="horizontal" style={{ float: "right" }}>
                    <SubMenu
                        title={
                            <div>
                                <span style={{ color: "#999", marginRight: 4 }}>
                                    Chào
                                </span>
                                <span>XXXX</span>
                                <Avatar
                                    style={{ marginLeft: 8, background: 'chocolate' }}
                                    icon={<UserOutlined />}
                                />
                            </div>
                        }
                    >
                        <Menu.Item key="SignOut">Đăng xuất</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

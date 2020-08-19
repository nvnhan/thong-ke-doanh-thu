import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Drawer, Menu, PageHeader } from "antd";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
const { SubMenu } = Menu;

class MyHeader extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            drawerVisible: false
        };
    }

    showDrawer = () => {
        this.setState({
            drawerVisible: true
        });
    };

    onClose = () => {
        this.setState({
            drawerVisible: false
        });
    };

    getDrawerTitle = () => {
        return (
            <span>
                <UserOutlined />
                &nbsp;
                {this.props.authUser.ho_ten}
            </span>
        );
    };

    onLogout = () => {
        this.props.onLogout();
    };

    render() {
        return (
            <PageHeader
                className="my-header"
                onBack={() => window.history.back()}
                title={this.props.title}
                extra={
                    <React.Fragment>
                        <Menu
                            className="menu-account"
                            mode="horizontal"
                            selectable={false}
                        >
                            <SubMenu
                                className="nav-user"
                                title={
                                    <React.Fragment>
                                        <span
                                            style={{
                                                color: "#999",
                                                marginRight: 4
                                            }}
                                        >
                                            Chào
                                        </span>
                                        {this.props.authUser.ho_ten}
                                        <Avatar
                                            style={{
                                                marginLeft: 8,
                                                background: "chocolate",
                                                float: "none"
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </React.Fragment>
                                }
                            >
                                <Menu.Item>
                                    <span>
                                        Số ngày đăng nhập còn lại:{" "}
                                        {
                                            this.props.authUser
                                                .ngay_dang_nhap_con_lai
                                        }
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="profile">
                                    <Link to="/cai-dat-ca-nhan">
                                        Cài đặt cá nhân
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="password">
                                    <Link to="/doi-mat-khau">Đổi mật khẩu</Link>
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item
                                    key="SignOut"
                                    className="color-danger"
                                    onClick={this.onLogout}
                                >
                                    Đăng xuất
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Button
                            className="btn-drawer"
                            type="link"
                            icon={<MenuOutlined />}
                            onClick={this.showDrawer}
                        ></Button>
                        <Drawer
                            className="drawer-account"
                            title={this.getDrawerTitle()}
                            placement="right"
                            onClose={this.onClose}
                            visible={this.state.drawerVisible}
                        >
                            <Menu
                                mode="inline"
                                selectable={false}
                                onClick={this.onClose}
                            >
                                <Menu.Item>
                                    <span>
                                        Số ngày đăng nhập còn lại:{" "}
                                        {
                                            this.props.authUser
                                                .ngay_dang_nhap_con_lai
                                        }
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="profile">
                                    <Link to="/cai-dat-ca-nhan">
                                        Cài đặt cá nhân
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="password">
                                    <Link to="/doi-mat-khau">Đổi mật khẩu</Link>
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item
                                    key="SignOut"
                                    className="color-danger"
                                    onClick={this.onLogout}
                                >
                                    Đăng xuất
                                </Menu.Item>
                            </Menu>
                        </Drawer>
                    </React.Fragment>
                }
            />
        );
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {
        title: state.pageTitle,
        authUser: state.authUser
    };
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogout: () => {
            dispatch(actions.logout());
        }
    };
};
/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(MyHeader);

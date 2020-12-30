import MenuOutlined from "@ant-design/icons/MenuOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import Avatar from "antd/lib/avatar/index";
import Button from "antd/lib/button/index";
import Drawer from "antd/lib/drawer/index";
import Menu from "antd/lib/menu/index";
import PageHeader from "antd/lib/page-header/index";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

const { SubMenu } = Menu;

const MyHeader = memo(props => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const dispatch = useDispatch();

    const title = useSelector(state => state.pageTitle);
    const authUser = useSelector(state => state.authUser);
    const logout = () => dispatch(actions.logout());

    const showDrawer = () => setDrawerVisible(true);
    const onClose = () => setDrawerVisible(false);

    const getDrawerTitle = () => (
        <span>
            <UserOutlined />
            &nbsp;
            {authUser.ho_ten}
        </span>
    );

    return (
        <PageHeader
            className="my-header"
            onBack={() => window.history.back()}
            title={title}
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
                                    {authUser.ho_ten}
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
                                <span>Vai trò: {authUser.quyen}</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>
                                    Số ngày đăng nhập còn lại:{" "}
                                    {authUser.ngay_dang_nhap_con_lai}
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
                                onClick={logout}
                            >
                                Đăng xuất
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                    <Button
                        className="btn-drawer"
                        type="link"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                    ></Button>
                    <Drawer
                        className="drawer-account"
                        title={getDrawerTitle()}
                        placement="right"
                        onClose={onClose}
                        visible={drawerVisible}
                    >
                        <Menu
                            mode="inline"
                            selectable={false}
                            onClick={onClose}
                        >
                            <Menu.Item>
                                <span>Vai trò: {authUser.quyen}</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>
                                    Số ngày đăng nhập còn lại:{" "}
                                    {authUser.ngay_dang_nhap_con_lai}
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
                                onClick={logout}
                            >
                                Đăng xuất
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                </React.Fragment>
            }
        />
    );
});

export default MyHeader;

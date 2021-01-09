import UserOutlined from "@ant-design/icons/UserOutlined";
import MenuFoldOutlined from "@ant-design/icons/MenuFoldOutlined";
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import Button from "antd/lib/button/index";
import Dropdown from "antd/lib/dropdown/index";
import Menu from "antd/lib/menu/index";
import PageHeader from "antd/lib/page-header/index";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

const MyHeader = memo(props => {
    const dispatch = useDispatch();

    const title = useSelector(state => state.pageTitle);
    const authUser = useSelector(state => state.authUser);
    const sideBarCollapsed = useSelector(state => state.sideBar.collapsed);

    const logout = () => dispatch(actions.logout());

    const onBack = () => dispatch(actions.collapseSidebar(!sideBarCollapsed));

    const menu = () => (
        <Menu>
            <Menu.Item>
                <span className="muted-text">Vai trò: {authUser.quyen}</span>
            </Menu.Item>
            <Menu.Item>
                <span className="muted-text">
                    Số ngày đăng nhập còn lại: {authUser.ngay_dang_nhap_con_lai}
                </span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="profile">
                <Link to="/cai-dat-ca-nhan">Cài đặt cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="password">
                <Link to="/doi-mat-khau">Đổi mật khẩu</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="SignOut" className="color-danger" onClick={logout}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );

    const DropdownMenu = () => (
        <Dropdown key="more" overlay={menu()}>
            <Button className="btn-user">
                <span className="user-text">Chào {authUser.ho_ten} </span>
                <UserOutlined className="user-logo" />
            </Button>
        </Dropdown>
    );

    return (
        <PageHeader
            className="my-header"
            onBack={onBack}
            backIcon={
                sideBarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
            title={title}
            extra={<DropdownMenu />}
        />
    );
});

export default MyHeader;

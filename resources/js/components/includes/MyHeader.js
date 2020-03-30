import React, { PureComponent } from "react";
import { PageHeader, Menu, Dropdown, Avatar } from "antd";
import { connect } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

class MyHeader extends PureComponent {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1">Cấu hình</Menu.Item>
                <Menu.Item key="2">Phân quyền</Menu.Item>
                <Menu.Item key="4">Cài đặt</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">Đăng xuất</Menu.Item>
            </Menu>
        );
        return (
            <div>
                <PageHeader
                    style={{ background: "#fff" }}
                    onBack={() => window.history.back()}
                    title={this.props.title}
                    extra={
                        <Dropdown overlay={menu}>
                            <Avatar icon={<UserOutlined />} />
                        </Dropdown>
                    }
                />
            </div>
        );
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {
        title: state.pageTitle
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps)(MyHeader);

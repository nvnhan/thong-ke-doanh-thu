import React, { PureComponent } from "react";
import { PageHeader, Menu, Avatar } from "antd";
import { connect } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
import * as actions from "../../actions";

class MyHeader extends PureComponent {
    onLogout = () => {
        this.props.onLogout();
    };

    render() {
        return (
            <div>
                <PageHeader
                    style={{
                        background: "white",
                        paddingBottom: 0,
                        minWidth: "320px",
                    }}
                    onBack={() => window.history.back()}
                    title={this.props.title}
                    extra={
                        <Menu key="user" mode="horizontal">
                            <SubMenu
                                className="nav-user"
                                title={
                                    <div>
                                        <span
                                            style={{
                                                color: "#999",
                                                marginRight: 4,
                                            }}
                                        >
                                            Chào
                                        </span>
                                        <span>
                                            {this.props.authUser.ho_ten}
                                        </span>
                                        <Avatar
                                            style={{
                                                marginLeft: 8,
                                                background: "chocolate",
                                                float: "none",
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                    </div>
                                }
                            >
                                <Menu.Item
                                    key="SignOut"
                                    onClick={this.onLogout}
                                >
                                    Đăng xuất
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
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
const mapStatetoProps = (state) => {
    return {
        title: state.pageTitle,
        authUser: state.authUser,
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
        },
    };
};
/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(MyHeader);

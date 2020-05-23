import { Layout, message } from "antd";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Login from "../pages/Account/Login";
import Content from "./includes/Content";
import Loader from "./includes/Loader";
import MyFooter from "./includes/MyFooter";
import MyHeader from "./includes/MyHeader";
import SideBar from "./SideBar";

class MainContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        // Get token from localStorage
        let token = localStorage.token;
        if (token !== undefined) {
            // Setup default config for axios
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            // Check it in server
            axios
                .get(`/api/get-user`)
                .then(response => {
                    if (response.data.success) {
                        const { data } = response.data;
                        this.props.onSetAuth({
                            username: data.username,
                            hoTen: data.ho_ten,
                            isAdmin: data.admin
                        });
                    } else {
                        localStorage.removeItem("token");
                        message.warn(response.data.message);
                    }
                })
                .catch(error => {
                    if (error.response.status === "401") {
                        message.warn(
                            "Phiên đăng nhập đã kết thúc. Vui lòng đăng nhập lại"
                        );
                        this.props.onLogout();
                    } else console.log(error);
                })
                .then(() => {
                    this.setState({ isLoading: false });
                });
        } else this.setState({ isLoading: false }); // Chuyển tới Login page
    }

    isAuthenticate = () => {
        return this.props.authUser.username !== "";
    };

    render() {
        const { isLoading } = this.state;
        if (isLoading) return <Loader />;
        if (this.isAuthenticate())
            return (
                <Layout>
                    <SideBar />
                    <Layout>
                        <MyHeader />
                        <Content />
                        {/* <MyFooter /> */}
                    </Layout>
                </Layout>
            );
        else return <Login />;
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {
        authUser: state.authUser
    };
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSetAuth: auth => {
            dispatch(actions.setAuth(auth));
        },
        onLogout: () => {
            dispatch(actions.logout());
        }
    };
};
/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(MainContainer);

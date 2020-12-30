import Layout from "antd/lib/layout/index";
import message from "antd/lib/message/index";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Login from "../pages/Account/Login";
import Content from "./includes/Content";
import Loader from "./includes/Loader";
import MyHeader from "./includes/MyHeader";
import SideBar from "./SideBar";

const MainContainer = props => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
                        // Add a response interceptor
                        axios.interceptors.response.use(null, error => {
                            if (error.response.status === 401) {
                                // Unauthorized
                                message.warn(
                                    "Phiên đăng nhập đã kết thúc. Vui lòng đăng nhập lại"
                                );
                                setTimeout(() => props.onLogout(), 2000);
                            }
                            return Promise.reject(error);
                        });
                        props.onSetAuth(response.data.data);
                    } else {
                        localStorage.removeItem("token");
                        message.warn(response.data.message);
                    }
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        // Unauthorized
                        message.warn(
                            "Phiên đăng nhập đã kết thúc. Vui lòng đăng nhập lại"
                        );
                        setTimeout(() => this.props.onLogout(), 2000);
                    } else console.log(error);
                })
                .then(() => setIsLoading(false));
        } else setIsLoading(false); // Chuyển tới Login page
    }, []);

    const isAuthenticate = () => props.authUser.username !== "";

    if (isLoading) return <Loader />;
    if (isAuthenticate())
        return (
            <Layout>
                <SideBar />
                <Layout>
                    <MyHeader />
                    <Content />
                </Layout>
            </Layout>
        );
    else return <Login />;
};

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

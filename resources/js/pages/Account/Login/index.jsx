import Card from "antd/lib/card/index";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import "./login.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = props => {
    const [login, setLogin] = useState(true);

    useEffect(() => {
        props.onChangeTitle("Đăng nhập");
    }, []);

    const onChangeForm = () => setLogin(!login);

    /**
     * Hàm render
     */
    return (
        <Card className="card-login" title={<img src="/images/intro.png" />}>
            {login ? (
                <LoginForm
                    onSetAuth={props.onSetAuth}
                    onRegister={onChangeForm}
                />
            ) : (
                <RegisterForm onLogin={onChangeForm} />
            )}
        </Card>
    );
};

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {};
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeTitle: title => {
            dispatch(actions.changeTitle(title));
        },
        onSetAuth: auth => {
            dispatch(actions.setAuth(auth));
        }
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(Login);

import Card from "antd/lib/card/index";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../actions";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = props => {
    const [login, setLogin] = useState(true);
    const dispatch = useDispatch();

    const changeTitle = title => dispatch(actions.changeTitle(title));
    const setAuth = auth => dispatch(actions.setAuth(auth));

    useEffect(() => {
        changeTitle("Đăng nhập");
    }, []);

    const onChangeForm = () => setLogin(!login);

    /**
     * Hàm render
     */
    return (
        <Card className="card-login" title={<img src="/images/intro.png" />}>
            {login ? (
                <LoginForm onSetAuth={setAuth} onRegister={onChangeForm} />
            ) : (
                <RegisterForm onLogin={onChangeForm} />
            )}
        </Card>
    );
};

export default Login;

import { Card } from "antd";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import "./login.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            login: true
        };
    }

    componentDidMount() {
        this.props.onChangeTitle("Đăng nhập | Thống kê doanh thu");
    }

    onChangeForm = () => {
        const { login } = this.state
        this.setState({login : !login });
    }
    

    /**
     * Hàm render
     */
    render() {
        const { login } = this.state;
        return (
            <Card className="card-login" title={<img src="/img/intro.png" />}>
                {login ? (
                    <LoginForm onSetAuth={this.props.onSetAuth} onRegister={this.onChangeForm} />
                ) : (
                    <RegisterForm onLogin={this.onChangeForm} />
                )}
            </Card>
        );
    }
}

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

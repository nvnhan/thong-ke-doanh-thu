import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../actions";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            formSubmiting: false,
        };
        this.formRef = React.createRef();
    }

    componentDidMount() {
        this.props.onChangeTitle("Đăng nhập");
    }

    onFinish = () => {
        this.setState({ formSubmiting: true });
        const values = this.formRef.current.getFieldsValue();
        axios
            .post(`/api/login`, values)
            .then((response) => {
                if (response.data.success) {
                    const { data } = response.data;
                    this.props.onSetAuth({
                        username: data.username,
                        ho_ten: data.ho_ten,
                        token: data.token,
                    });
                    localStorage.setItem('token', data.token);
                    message.info(response.data.message);
                } else {
                    message.warn(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        this.setState({ formSubmiting: false });
    };

    /**
     * Hàm render
     */
    render() {
        return (
            <Card className="card-login" title={<img src="/img/intro.png" />}>
                <Form
                    ref={this.formRef}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Nhập tên đăng nhập!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Tên đăng nhập"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Nhập mật khẩu!",
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Ghi nhớ</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Quên mật khẩu?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            loading={this.state.formSubmiting}
                        >
                            Đăng nhập
                        </Button>
                        Hoặc <a href="">đăng ký tài khoản!</a>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = (state) => {
    return {};
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeTitle: (title) => {
            dispatch(actions.changeTitle(title));
        },
        onSetAuth: (auth) => {
            dispatch(actions.setAuth(auth));
        },
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(Login);

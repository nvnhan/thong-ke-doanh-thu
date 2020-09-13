import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
    const [form] = Form.useForm();
    const [formSubmiting, setSubmiting] = useState(false);

    const onFinish = () => {
        setSubmiting(true);
        const values = form.getFieldsValue();

        axios
            .post(`/api/login`, values)
            .then(response => {
                if (response.data.success) {
                    const { data } = response.data;

                    localStorage.setItem("token", data.token);
                    message.success(response.data.message);

                    // Setup default config for axios
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + data.token;
                    // Add a response interceptor
                    axios.interceptors.response.use(null, error => {
                        if (error.response.status === 401) {
                            message.warn(
                                "Phiên đăng nhập đã kết thúc. Vui lòng đăng nhập lại"
                            );
                            // this.props.onLogout();
                        }
                        return Promise.reject(error);
                    });

                    props.onSetAuth(data);
                } else message.warn(response.data.message);
            })
            .catch(error => console.log(error));
        setSubmiting(false);
    };

    const contactAdmin = () => {
        message.info("Liên hệ quản trị viên hệ thống");
    };

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Nhập tên đăng nhập!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Tên đăng nhập"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Nhập mật khẩu!"
                    }
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Mật khẩu"
                />
            </Form.Item>
            <Form.Item>
                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Ghi nhớ</Checkbox>
                </Form.Item> */}

                <Link
                    className="login-form-forgot"
                    onClick={contactAdmin}
                    to=""
                >
                    Quên mật khẩu?
                </Link>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={formSubmiting}
                >
                    Đăng nhập
                </Button>
                {/* Hoặc{" "}
                <Link onClick={() => props.onRegister()} to="">
                    đăng ký tài khoản!
                </Link> */}
            </Form.Item>
        </Form>
    );
}

LoginForm.propTypes = {
    onSetAuth: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired
};

export default LoginForm;

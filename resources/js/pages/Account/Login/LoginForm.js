import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

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
                    props.onSetAuth({
                        username: data.username,
                        hoTen: data.ho_ten,
                        isAdmin: data.admin
                    });
                    localStorage.setItem("token", data.token);
                    // Setup default config for axios
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + data.token;
                    message.success(response.data.message);
                } else {
                    message.warn(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
            });
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
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Ghi nhớ</Checkbox>
                </Form.Item>

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
                Hoặc{" "}
                <Link onClick={() => props.onRegister()} to="">
                    đăng ký tài khoản!
                </Link>
            </Form.Item>
        </Form>
    );
}

LoginForm.propTypes = {
    onSetAuth: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired
};

export default LoginForm;

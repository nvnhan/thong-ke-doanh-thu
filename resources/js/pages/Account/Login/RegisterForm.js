import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

function RegisterForm(props) {
    const [form] = Form.useForm();
    const [formSubmiting, setSubmiting] = useState(false);

    const onFinish = () => {
        setSubmiting(true);
        const values = form.getFieldsValue();
        axios
            .post(`/api/register`, values)
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    form.resetFields();
                    onLogin();
                } else {
                    message.warn(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
            });
        setSubmiting(false);
    };

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
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
                    placeholder="Tên đăng nhập (*)"
                />
            </Form.Item>
            <Form.Item
                name="ho_ten"
                rules={[
                    {
                        required: true,
                        message: "Nhập họ tên!"
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Họ và tên (*)"
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
                    placeholder="Mật khẩu (*)"
                />
            </Form.Item>
            <Form.Item
                name="password_confirmation"
                rules={[
                    {
                        required: true,
                        message: "Nhập mật khẩu!"
                    }
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Nhập lại mật khẩu (*)"
                />
            </Form.Item>
            <Form.Item name="sdt">
                <Input placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item name="dia_chi">
                <Input placeholder="Địa chỉ" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={formSubmiting}
                >
                    Đăng ký
                </Button>
                Đã có tài khoản?{" "}
                <Link onClick={() => props.onLogin()} to="">
                    đăng nhập ngay!
                </Link>
            </Form.Item>
        </Form>
    );
}

RegisterForm.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default RegisterForm;

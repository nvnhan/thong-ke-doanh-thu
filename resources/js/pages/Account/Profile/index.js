import { Button, Form, Input, message, Modal } from "antd";
import React, { useState } from "react";

const Profile = React.memo(props => {
    const [form] = Form.useForm();
    const [formLogin] = Form.useForm();
    const [user, setUser] = useState(() => {
        // Check it in server
        axios
            .get(`/api/get-user`)
            .then(response => {
                if (response.data.success) {
                    const { data } = response.data;
                    setUser(data);
                    form.setFieldsValue(data);
                } else message.warn(response.data.message);
            })
            .catch(error => console.log(error));
        return {};
    });
    const [modalVisible, setModalVisible] = useState(false);

    const onFinish = () => {
        let values = form.getFieldValue();
        axios
            .put(`/api/profile`, values)
            .then(response => {
                if (response.data.success)
                    message.success(response.data.message);
                else message.warn(response.data.message);
            })
            .catch(error => console.log(error));
    };

    const handleOk = () => {
        formLogin
            .validateFields()
            .then(
                ({ username, password }) =>
                    (window.location.href =
                        "/oauth/login?username=" +
                        username +
                        "&password=" +
                        password)
            )
            .catch(info => console.log("Validate Failed: ", info));
    };

    const handleCancel = () => setModalVisible(false);

    const onAuthenticate = () => setModalVisible(true);

    return (
        <>
            <div className="list-form">
                <div className="sm-container">
                    <Form
                        form={form}
                        onFinish={onFinish}
                        labelCol={{
                            span: 8
                        }}
                        wrapperCol={{
                            span: 16
                        }}
                    >
                        <Form.Item
                            name="username"
                            label="Tên đăng nhập"
                            rules={[
                                {
                                    required: true,
                                    message: "Nhập đầy đủ thông tin!"
                                }
                            ]}
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="ho_ten"
                            label="Họ tên"
                            rules={[
                                {
                                    required: true,
                                    message: "Nhập đầy đủ thông tin!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="sdt" label="Số điện thoại">
                            <Input />
                        </Form.Item>
                        <Form.Item name="dia_chi" label="Địa chỉ">
                            <Input />
                        </Form.Item>
                        {/* <Form.Item name="gmail_client" label="Gmail Client ID">
                            <Input />
                        </Form.Item>
                        <Form.Item name="gmail_secret" label="Secret key">
                            <Input />
                        </Form.Item> */}
                        <Form.Item
                            wrapperCol={{
                                span: 16,
                                offset: 8
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>{" "}
                            &nbsp;
                            <Button onClick={onAuthenticate}>
                                Xác thực Gmail
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <Modal
                title="Xác nhận tài khoản"
                onCancel={handleCancel}
                onOk={handleOk}
                visible={modalVisible}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Đồng ý
                    </Button>
                ]}
            >
                <Form
                    form={formLogin}
                    labelCol={{ span: 8 }}
                    wrapperCol={{
                        span: 16
                    }}
                    initialValues={{
                        username: user.username
                    }}
                >
                    <Form.Item
                        name="username"
                        label="Tên đăng nhập"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
});

export default Profile;

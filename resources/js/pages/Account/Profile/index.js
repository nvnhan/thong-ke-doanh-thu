import { Button, Form, Input, message, Modal, Row, Col } from "antd";
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
                    <Row
                        gutter={[12, 12]}
                        style={{
                            borderBottom: "1px solid rgba(0,0,0,.1)",
                            margin: "0 0 12px"
                        }}
                    >
                        <Col span={12}>
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
                        </Col>
                        <Col span={12}>
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
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="dai_ly"
                                label="Đại lý"
                                rules={[
                                    {
                                        required: true,
                                        message: "Nhập đầy đủ thông tin!"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="sdt" label="Số điện thoại">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="email" label="Email">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24} md={12}>
                            <Form.Item name="dia_chi" label="Địa chỉ">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row
                        gutter={[12, 12]}
                        style={{
                            borderBottom: "1px solid rgba(0,0,0,.1)",
                            margin: "0 0 12px"
                        }}
                    >
                        <Col span={12}>
                            <Form.Item name="ct_ten" label="Tên công ty">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="ct_mst" label="Mã số thuế">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="ct_sdt" label="Số điện thoại">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="ct_fax" label="FAX">
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={24} md={12}>
                            <Form.Item name="ct_email" label="Email công ty">
                                <Input type="email" />
                            </Form.Item>
                        </Col>
                        <Col span={24} md={12}>
                            <Form.Item
                                name="ct_dia_chi"
                                label="Địa chỉ công ty"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={[12, 12]}>
                        <Col span={24} md={12}>
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
                        </Col>
                    </Row>
                </Form>
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

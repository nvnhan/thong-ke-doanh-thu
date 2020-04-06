import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, message, Button, Input } from "antd";

const Profile = React.memo((props) => {
    const [form] = Form.useForm();

    useEffect(() => {
        // Check it in server
        axios
            .get(`/api/get-user`)
            .then((response) => {
                if (response.data.success) {
                    const { data } = response.data;
                    form.setFieldsValue(data);
                } else {
                    message.warn(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onFinish = () => {
        let values = form.getFieldValue();
        axios
            .put(`/api/profile`, values)
            .then((response) => {
                if (response.data.success) {
                    message.success(response.data.message);
                } else {
                    message.warn(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="sm-container">
            <Form
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    rules={[
                        {
                            required: true,
                            message: "Nhập đầy đủ thông tin!",
                        },
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
                            message: "Nhập đầy đủ thông tin!",
                        },
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
                <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
})

export default Profile;

import { Button, Form, Input, message } from "antd";
import React from "react";

const Password = React.memo(props => {
    const [form] = Form.useForm();

    const onFinish = () => {
        let values = form.getFieldValue();
        axios
            .put(`/api/password`, values)
            .then(response => {
                if (response.data.success)
                    message.success(response.data.message);
                else message.warn(response.data.message);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="list-form">
            <div className="sm-container">
                <Form
                    form={form}
                    onFinish={onFinish}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                >
                    <Form.Item
                        name="old_pass"
                        label="Mật khẩu hiện tại"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu mới"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="password_confirmation"
                        label="Nhập lại mật khẩu mới"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
});

export default Password;

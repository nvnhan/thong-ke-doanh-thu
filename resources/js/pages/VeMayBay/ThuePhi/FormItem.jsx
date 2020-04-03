import React, { Component } from "react";
import { Form, Select, Input, InputNumber } from "antd";
const { Option } = Select;

export default class form extends Component {
    render() {
        return (
            <div>
                <Form.Item
                    name="loai_phi"
                    label="Loại phí"
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
                    name="muc_phi"
                    label="Mức phí"
                    rules={[
                        {
                            required: true,
                            message: "Nhập đầy đủ thông tin!"
                        }
                    ]}
                >
                    <InputNumber
                        style={{ width: "100%" }}
                        min={1000}
                        step={1000}
                        formatter={value =>
                            `${value}₫`.replace(/(?=(\d{3})+(?!\d))\B/g, ",")
                        }
                        parser={value => value.replace(/\₫\s?|(,*)/g, "")}
                    />
                </Form.Item>
                <Form.Item name="ghi_chu" label="Ghi chú">
                    <Input />
                </Form.Item>
            </div>
        );
    }
}

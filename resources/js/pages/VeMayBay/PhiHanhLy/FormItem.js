import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
const { Option } = Select;

const form = React.memo(() => {
    return (
        <div>
            <Form.Item
                name="hanh_ly"
                label="Hành lý"
                rules={[{ required: true, message: "Nhập đầy đủ thông tin!" }]}
            >
                <Input />
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
            <Form.Item name="hang_bay" label="Hãng bay">
                <Select allowClear>
                    <Option value="VN">VN</Option>
                    <Option value="VJ">VJ</Option>
                    <Option value="Jets">Jets</Option>
                    <Option value="BB">BB</Option>
                </Select>
            </Form.Item>
            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </div>
    );
});

export default form;

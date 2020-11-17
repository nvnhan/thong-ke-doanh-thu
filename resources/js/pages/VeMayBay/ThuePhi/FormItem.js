import { Form, Input, InputNumber } from "antd";
import React from "react";
import { inputFormat, inputParse } from "../../../utils";

export default function form() {
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
                    formatter={inputFormat}
                    parser={inputParse}
                />
            </Form.Item>
            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </div>
    );
}

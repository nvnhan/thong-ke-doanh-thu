import Form from "antd/lib/form/index";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
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

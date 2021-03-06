import Form from "antd/lib/form/index";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Select from "antd/lib/select/index";
import React from "react";
import { inputFormat, inputParse } from "../../../utils";
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
                    formatter={inputFormat}
                    parser={inputParse}
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

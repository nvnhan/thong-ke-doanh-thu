import React from "react";
import { Form, Input, Checkbox, Select } from "antd";

const { Option } = Select;

function form() {
    return (
        <div>
            <Form.Item
                name="ma_san_bay"
                label="Mã sân bay"
                rules={[{ required: true, message: "Nhập đầy đủ thông tin!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="ten_san_bay"
                label="Tên sân bay"
                rules={[
                    {
                        required: true,
                        message: "Nhập đầy đủ thông tin!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="phan_loai" label="Khu vực">
                <Select allowClear>
                    <Option value="Châu Âu">Châu Âu</Option>
                    <Option value="Châu Úc">Châu Úc</Option>
                    <Option value="Đông Bắc Á">Đông Bắc Á</Option>
                    <Option value="Đông Dương">Đông Dương</Option>
                    <Option value="Đông Nam Á">Đông Nam Á</Option>
                    <Option value="Hoa Kỳ">Hoa Kỳ</Option>
                    <Option value="Việt Nam">Việt Nam</Option>
                </Select>
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 6, span: 18 }}
                name="loai_a"
                valuePropName="checked"
            >
                <Checkbox>Sân bay loại A</Checkbox>
            </Form.Item>
        </div>
    );
}

export default form;

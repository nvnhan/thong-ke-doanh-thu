import { Form, Input, InputNumber } from "antd";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { inputFormat, inputParse } from "../../../utils";

function form() {
    return (
        <div>
            <Form.Item
                name="ky_hieu"
                label="Ký hiệu"
                rules={[{ required: true, message: "Nhập đầy đủ thông tin!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="mo_ta"
                label="Tên tài khoản"
                rules={[{ required: true, message: "Nhập đầy đủ thông tin!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="so_du_ky_truoc" label="Số dư ban đầu">
                <InputNumber
                    style={{ width: "100%" }}
                    step={1000}
                    formatter={inputFormat}
                    parser={inputParse}
                />
            </Form.Item>
            <Form.Item name="ngay_tao" label="Ngày tạo">
                <MyDatePicker
                    style={{ width: "100%" }}
                    locale={locale}
                    format="DD/MM/YYYY"
                />
            </Form.Item>
            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </div>
    );
}

export default form;

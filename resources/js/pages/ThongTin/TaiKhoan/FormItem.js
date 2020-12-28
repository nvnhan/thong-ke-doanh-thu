import Form from "antd/lib/form/index";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
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
                <MyDatePicker format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </div>
    );
}

export default form;

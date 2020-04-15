import { Checkbox, Form, Input } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";

function form() {
    return (
        <div>
            <Form.Item name="username" label="Tên tài khoản">
                <Input disabled />
            </Form.Item>
            <Form.Item
                name="ho_ten"
                label="Họ tên"
                rules={[{ required: true, message: "Nhập đầy đủ thông tin!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="sdt" label="SĐT">
                <Input />
            </Form.Item>
            <Form.Item name="dia_chi" label="Địa chỉ">
                <Input />
            </Form.Item>
            <Form.Item name="ngay_het_han" label="Ngày hết hạn">
                <MyDatePicker
                    style={{ width: "100%" }}
                    locale={locale}
                    format="DD/MM/YYYY"
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{ sm: { offset: 8, span: 16 } }}
                name="admin"
                valuePropName="checked"
            >
                <Checkbox>Admin</Checkbox>
            </Form.Item>
            <Form.Item
                wrapperCol={{ sm: { offset: 8, span: 16 } }}
                name="actived"
                valuePropName="checked"
            >
                <Checkbox>Hoạt động</Checkbox>
            </Form.Item>
        </div>
    );
}

export default form;

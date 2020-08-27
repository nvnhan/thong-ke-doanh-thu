import { Checkbox, Col, Form, Input, InputNumber, Row, Select } from "antd";
import React from "react";
const { Option } = Select;

const form = ({ phanQuyen = false, banHang = false, tourVisa = false }) => {
    const getRoleDetail = () => {
        return (
            <>
                <Option value={0}>Nhân viên</Option>
                <Option value={1}>Đại lý</Option>
                <Option value={9}>Quảntrị</Option>
            </>
        );
    };

    return (
        <Row gutter={[5, 5]}>
            <Col span={12}>
                <Form.Item
                    name="username"
                    label="Tài khoản (ko sửa)"
                    rules={[
                        { required: true, message: "Nhập đầy đủ thông tin!" }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="ho_ten"
                    label="Họ tên"
                    rules={[
                        { required: true, message: "Nhập đầy đủ thông tin!" }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="dai_ly"
                    label="Đại lý"
                    rules={[
                        { required: true, message: "Nhập đầy đủ thông tin!" }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="sdt" label="SĐT">
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="dia_chi" label="Địa chỉ">
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="so_ngay_dang_nhap"
                    label="Số ngày ĐN"
                >
                    <InputNumber
                        step={1}
                        min={0}
                        max={9999}
                        style={{ width: "100%" }}
                    />
                </Form.Item>
            </Col>
            {tourVisa && (
                <Col span={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="tour_visa"
                        valuePropName="checked"
                    >
                        <Checkbox>Tour - Visa</Checkbox>
                    </Form.Item>
                </Col>
            )}

            {banHang && (
                <Col span={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="ban_hang"
                        valuePropName="checked"
                    >
                        <Checkbox>Bán hàng</Checkbox>
                    </Form.Item>
                </Col>
            )}
            {phanQuyen && (
                <Col span={12}>
                    <Form.Item name="phan_quyen" label="Phân quyền">
                        <Select>{getRoleDetail()}</Select>
                    </Form.Item>
                </Col>
            )}
            <Col span={12}>
                <Form.Item
                    wrapperCol={{ sm: { offset: 8, span: 16 } }}
                    name="actived"
                    valuePropName="checked"
                >
                    <Checkbox>Hoạt động</Checkbox>
                </Form.Item>
            </Col>
        </Row>
    );
};

export default form;

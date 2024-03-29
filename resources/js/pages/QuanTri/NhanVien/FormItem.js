import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Select from "antd/lib/select/index";
import React from "react";
const { Option } = Select;

const form = ({
    quanTri = false,
    datVe = false,
    banHang = false,
    tourVisa = false,
    extension = false
}) => {
    const getRoleDetail = () => {
        return (
            <>
                <Option value={0}>Nhân viên</Option>
                <Option value={1}>Quản lý đại lý</Option>
                {quanTri && (
                    <>
                        <Option value={2}>Chủ đại lý</Option>
                        <Option value={9}>Quản trị hệ thống</Option>
                    </>
                )}
            </>
        );
    };

    return (
        <Row gutter={[5, 5]}>
            <Col span={12}>
                <Form.Item
                    name="username"
                    label="Tài khoản"
                    tooltip="Không thể thay đổi sau khi thêm mới"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/^[a-z0-9\._]+$/g),
                            message:
                                "Tài khoản bao gồm chữ cái thường, số, ký tự . và _"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="phan_quyen" label="Phân quyền">
                    <Select>{getRoleDetail()}</Select>
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
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            message: "Không đúng định dạng E-mail!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="so_ngay_dang_nhap" label="Số ngày ĐN">
                    <InputNumber
                        step={1}
                        min={0}
                        max={9999}
                        style={{ width: "100%" }}
                    />
                </Form.Item>
            </Col>
            {datVe && (
                <Col span={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="dat_ve"
                        valuePropName="checked"
                    >
                        <Checkbox>Chức năng Đặt vé</Checkbox>
                    </Form.Item>
                </Col>
            )}

            {tourVisa && (
                <Col span={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="tour_visa"
                        valuePropName="checked"
                    >
                        <Checkbox>Chức năng Tour - Visa</Checkbox>
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
                        <Checkbox>Chức năng Bán hàng</Checkbox>
                    </Form.Item>
                </Col>
            )}

            {extension && (
                <Col span={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="extension"
                        valuePropName="checked"
                    >
                        <Checkbox>Tool đặt vé</Checkbox>
                    </Form.Item>
                </Col>
            )}
            <Col span={12}>
                <Form.Item
                    wrapperCol={{ sm: { offset: 8, span: 16 } }}
                    name="actived"
                    valuePropName="checked"
                >
                    <Checkbox>Kích hoạt tài khoản</Checkbox>
                </Form.Item>
            </Col>
        </Row>
    );
};

export default form;

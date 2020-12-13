import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import MyRangePicker from "../../../components/ListForm/MyRangePicker";

const form = React.memo(props => {
    return (
        <>
            <Row gutter={[5, 5]}>
                <Col>
                    <span>Xử lý file Excel</span>
                </Col>
            </Row>
            <Row
                gutter={[5, 5]}
                style={{
                    borderBottom: "1px solid rgba(0,0,0,.07)",
                    marginBottom: "12px"
                }}
            >
                <Col span={12} md={6}>
                    <Form.Item name="cot_ngay_thang" label="Cột ngày tháng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ngan_hang" label="Cột ngân hàng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_thu_chi" label="Cột thu chi">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_khach_hang" label="Cột khách hàng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_so_tien" label="Cột số tiền">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_noi_dung" label="Cột nội dung">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="xu_ly_tu_hang" label="Xử lý từ hàng">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[5, 5]}>
                <Col span={24} md={12}>
                    <Form.Item
                        name="thoiGian"
                        label="Thời gian"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <MyRangePicker />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[5, 5]}>
                <Col span={12} md={6}>
                    <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
                        <Button htmlType="submit" type="primary">
                            Xử lý
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
});

export default form;

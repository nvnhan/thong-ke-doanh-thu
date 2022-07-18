import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import Input from "antd/lib/input/index";
import React from "react";

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
                    <Form.Item name="cot_ma_hang" label="Cột mã hàng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ten_hang" label="Cột tên hàng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_nha_cung_cap" label="Cột nhà cung cấp">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_phan_loai" label="Cột phân loại">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_don_vi" label="Cột đơn vị tính">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_don_gia" label="Cột đơn giá">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ghi_chu" label="Cột ghi chú">
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

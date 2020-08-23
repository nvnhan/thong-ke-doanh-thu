import { Button, Col, Form, Input, InputNumber, message, Row } from "antd";
import React, { useEffect } from "react";

const index = props => {
    const [form] = Form.useForm();

    useEffect(() => {
        // Check it in server
        axios
            .get(`/api/cai-dat`)
            .then(response => {
                if (response.data.success)
                    form.setFieldsValue(response.data.data);
                else message.warn(response.data.message);
            })
            .catch(error => console.log(error));
    }, []);

    const onFinish = () => {
        let values = form.getFieldsValue();
        axios
            .put(`/api/cai-dat`, values)
            .then(response => {
                if (response.data.success)
                    message.success(response.data.message);
                else message.warn(response.data.message);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="list-form">
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
            >
                <Row
                    gutter={[12, 12]}
                    style={{
                        borderBottom: "1px solid rgba(0,0,0,.1)",
                        margin: "0 0 12px"
                    }}
                >
                    <Col span={24} md={12}>
                        <Form.Item name="cb_dai_han" label="Chuyến bay dài HAN">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item name="cb_dai_sgn" label="Chuyến bay dài SGN">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item name="sb_giam_phi" label="SB giảm phí">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item name="phi_giam" label="Phí giảm">
                            <InputNumber
                                style={{ width: "100%" }}
                                min={1000}
                                step={1000}
                                formatter={value =>
                                    `${value}₫`.replace(
                                        /(?=(\d{3})+(?!\d))\B/g,
                                        ","
                                    )
                                }
                                parser={value =>
                                    value.replace(/\₫\s?|(,*)/g, "")
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item
                            name="so_ve_vn_mac_dinh"
                            label="Số vé VN mặc định"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row
                    gutter={[12, 12]}
                    style={{
                        borderBottom: "1px solid rgba(0,0,0,.1)",
                        margin: "0 0 12px"
                    }}
                >
                    <Col span={24} md={12}>
                        <Form.Item name="client_id" label="Client ID">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item name="client_secret" label="Client Secret">
                            <Input />
                        </Form.Item>
                    </Col>
                    {/* <Col span={24} md={12}>
                        <Form.Item
                            name="dang_nhap_toi_da"
                            label="Số ngày đăng nhập tối đa"
                        >
                            <InputNumber
                                step={1}
                                min={1}
                                max={999}
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Col> */}
                </Row>

                <Row gutter={[12, 12]}>
                    <Col span={24} md={12}>
                        <Form.Item wrapperCol={{ md: { span: 16, offset: 8 } }}>
                            <Button htmlType="submit" type="primary">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default React.memo(index);

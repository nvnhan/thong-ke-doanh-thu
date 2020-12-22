import { Button, Col, Form, Row } from "antd";
import moment from "moment";
import React, { memo, useEffect, useState } from "react";
import MyRangePicker from "../../components/ListForm/MyRangePicker";
import { parseValues } from "../../utils";
import DoanhSo from "./DoanhSo";
import SoDuTaiKhoan from "./SoDuTaiKhoan";
import ThongTinDatVe from "./ThongTinDatVe";
import ThongTinVe from "./ThongTinVe";

const TrangChu = memo(props => {
    const [form] = Form.useForm();
    const [data, setData] = useState({
        datve: [],
        ds_nam: [],
        thongtinve: [],
        sodu: [],
        tong: ""
    });

    useEffect(() => {
        form.setFieldsValue({
            thoiGian: [moment().startOf("month"), moment().endOf("month")]
        });
        retrieveData();
    }, []);

    const retrieveData = (values = {}) => {
        axios
            .get("/api/trang-chu", { params: parseValues(values) })
            .then(response => {
                if (response.data.success) {
                    let da = response.data.data.thongtinve.reduce(
                        (a, b) => [
                            ...a,
                            {
                                hang_muc: b.hang_muc,
                                type: "Quốc nội",
                                value: b.quoc_noi
                            },
                            {
                                hang_muc: b.hang_muc,
                                type: "Quốc tế",
                                value: b.quoc_te
                            }
                        ],
                        []
                    );
                    response.data.data.thongtinve = da;
                    setData(response.data.data);
                }
            })
            .catch(error => console.log(error));
    };

    const onFinish = () => {
        const values = form.getFieldsValue();
        retrieveData(values);
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <div className="chart-card">
                        <ThongTinDatVe data={data} />
                    </div>
                </Col>

                <Col span={24} md={12}>
                    <div className="chart-card">
                        <ThongTinVe data={data} />
                    </div>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <div className="chart-card">
                        <h4>Số dư tài khoản (Tổng cộng {data.tong})</h4>
                        <SoDuTaiKhoan data={data} />
                    </div>
                </Col>

                <Col span={24} md={12}>
                    <div className="chart-card">
                        <DoanhSo data={data} />
                    </div>
                </Col>
            </Row>

            <Form
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Row gutter={[16, 16]}>
                    <Col span={24} md={16} lg={12} xl={9}>
                        <Form.Item
                            name="thoiGian"
                            label="Thời gian"
                            labelCol={{ span: 4, xl: 6 }}
                            wrapperCol={{ span: 20, xl: 18 }}
                        >
                            <MyRangePicker />
                        </Form.Item>
                    </Col>
                    <Col span={12} md={8} lg={6} xl={5}>
                        <Button htmlType="submit">Lọc</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
});

export default TrangChu;

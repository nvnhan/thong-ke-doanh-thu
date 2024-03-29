import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyRangePicker from "../../components/Controls/MyRangePicker";
import { parseValues } from "../../utils";
import DoanhSo from "./DoanhSo";
import SoDuTaiKhoan from "./SoDuTaiKhoan";
import ThongTinDatVe from "./ThongTinDatVe";
import ThongTinVe from "./ThongTinVe";

const TrangChu = memo(props => {
    const [form] = Form.useForm();
    const authUser = useSelector(state => state.authUser);
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
            .then(
                response => response.data.success && setData(response.data.data)
            )
            .catch(error => console.log(error));
    };

    const onFinish = () => {
        const values = form.getFieldsValue();
        retrieveData(values);
    };

    return (
        <>
            {authUser.dat_ve && (
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
            )}

            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <div className="chart-card">
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
                className="form-footer"
            >
                <Row gutter={[16, 16]}>
                    <Col span={18} md={12} lg={9}>
                        <Form.Item
                            name="thoiGian"
                            label="Thời gian"
                            labelCol={{ span: 4, xl: 6 }}
                            wrapperCol={{ span: 20, xl: 18 }}
                        >
                            <MyRangePicker />
                        </Form.Item>
                    </Col>
                    <Col span={6} md={4} lg={3}>
                        <Button htmlType="submit">Lọc</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
});

export default TrangChu;

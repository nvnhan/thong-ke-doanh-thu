import { FilterOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Row } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React, { useEffect } from "react";
import { parseValues } from "../../utils";
import "./FilterBox.scss";
const { RangePicker } = DatePicker;

const FilterBox = React.memo(props => {
    const { onFilter, tuNgayDenNgay, otherFilter, filterInitialValue } = props;
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            ...filterInitialValue,
            thoiGian: [moment().startOf("month"), moment().endOf("month")]
        });
    }, []);

    const onFinish = () => {
        let values = form.getFieldsValue();
        if (values.hasOwnProperty("thoiGian")) {
            values = Object.assign(values, {
                bat_dau: values.thoiGian[0],
                ket_thuc: values.thoiGian[1]
            });
            delete values.thoiGian;
        }
        onFilter(parseValues(values));
    };

    return (
        <div className="filter-box">
            <Form form={form} onFinish={onFinish}>
                <Row gutter={[5, 5]}>
                    {tuNgayDenNgay && (
                        <Col span={24} md={16} lg={8} xl={7}>
                            <Form.Item name="thoiGian" label="Thời gian">
                                <RangePicker
                                    locale={locale}
                                    style={{ width: "100%" }}
                                    ranges={{
                                        "Hôm nay": [moment(), moment()],
                                        "Tuần này": [
                                            moment().startOf("week"),
                                            moment().endOf("week")
                                        ],
                                        "Tháng này": [
                                            moment().startOf("month"),
                                            moment().endOf("month")
                                        ]
                                    }}
                                    format="DD/MM/YYYY"
                                    // bordered={false}
                                    placeholder={["Từ ngày", "đến ngày"]}
                                />
                            </Form.Item>
                        </Col>
                    )}
                    {!_.isEmpty(otherFilter) &&
                        otherFilter.map(filter => (
                            <Col
                                span={12}
                                md={8}
                                lg={6}
                                xl={5}
                                key={filter.name}
                            >
                                <Form.Item
                                    name={filter.name}
                                    label={filter.label}
                                >
                                    {filter.render}
                                </Form.Item>
                            </Col>
                        ))}
                    <Col span={12} md={8} lg={6} xl={5}>
                        <Button htmlType="submit">
                            <FilterOutlined />
                            Lọc
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
});

export default FilterBox;

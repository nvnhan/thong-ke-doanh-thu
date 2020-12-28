import { FilterOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { parseValues } from "../../utils";
import "./FilterBox.scss";
import MyRangePicker from "./MyRangePicker";
import isEmpty from "lodash/isEmpty";

const FilterBox = React.memo(props => {
    const { onFilter, tuNgayDenNgay, otherFilter, filterInitialValue } = props;
    const [form] = Form.useForm();
    const [expandFilter, setExpandFilter] = useState(false);

    useEffect(() => {
        form.setFieldsValue({
            ...filterInitialValue,
            thoiGian: [moment().startOf("month"), moment().endOf("month")]
        });
    }, []);

    const onFinish = () => {
        let values = form.getFieldsValue();
        onFilter(parseValues(values));
    };

    return (
        <div className="filter-box">
            <Form
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Row gutter={[5, 5]}>
                    {tuNgayDenNgay && (
                        <Col span={24} md={16} lg={12} xl={9}>
                            <Form.Item
                                name="thoiGian"
                                label="Thời gian"
                                labelCol={{ span: 4, xl: 6 }}
                                wrapperCol={{ span: 20, xl: 18 }}
                            >
                                <MyRangePicker allowClear={false} />
                            </Form.Item>
                        </Col>
                    )}
                    {!isEmpty(otherFilter) &&
                        expandFilter &&
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
                        {!isEmpty(otherFilter) && (
                            <Button
                                onClick={() => setExpandFilter(!expandFilter)}
                                type="dashed"
                            >
                                {expandFilter ? (
                                    <MinusOutlined />
                                ) : (
                                    <PlusOutlined />
                                )}
                            </Button>
                        )}
                        &nbsp;
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

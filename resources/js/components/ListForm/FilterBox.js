import FilterOutlined from "@ant-design/icons/FilterOutlined";
import MinusOutlined from "@ant-design/icons/MinusOutlined";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import isEmpty from "lodash/isEmpty";
import React, { useEffect, useState } from "react";
import { parseValues } from "../../utils";
import MyRangePicker from "../Controls/MyRangePicker";

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

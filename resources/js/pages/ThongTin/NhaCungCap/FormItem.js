import AutoComplete from "antd/lib/auto-complete/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React from "react";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import { inputFormat, inputParse } from "../../../utils";

const form = React.memo(props => {
    const phanLoai = props.phanLoai || [];
    const options = phanLoai.map(pl => ({ value: pl }));

    return (
        <React.Fragment>
            <Row gutter={[5, 5]}>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="ky_hieu"
                        label="Ký hiệu"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="mo_ta"
                        label="Tên NCC"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="phan_loai"
                        label="Phân loại"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <AutoComplete
                            options={options}
                            filterOption={(inputValue, option) =>
                                option.value
                                    .toUpperCase()
                                    .indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                </Col>

                <Col span={12} md={8} sm={12}>
                    <Form.Item name="sdt" label="SĐT">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="email" label="Email">
                        <Input type="email" />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="dia_chi" label="Địa chỉ">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="mst" label="Mã số thuế">
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12} md={8} sm={12}>
                    <Form.Item name="so_du_ky_truoc" label="Số dư đầu">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="phi_vn" label="Phí VN">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="phi_vj" label="Phí VJ">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="phi_jets" label="Phí Jets">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="phi_bb" label="Phí BB">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>

                <Col span={24} md={8} sm={12}>
                    <Form.Item name="ngay_tao" label="Ngày tạo">
                        <MyDatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="ghi_chu" label="Ghi chú">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

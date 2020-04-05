import React from "react";
import { Form, Select, Input, InputNumber, Row, Col, AutoComplete } from "antd";
const { Option } = Select;
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import locale from "antd/es/date-picker/locale/vi_VN";

const form = React.memo((props) => {
    const { phanLoai } = props;
    if (!phanLoai) phanLoai = [];
    const options = phanLoai.map((pl) => ({ value: pl }));
    return (
        <div>
            <Row gutter={[5, 5]}>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="ma_khach_hang"
                        label="Mã KH"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="ho_ten"
                        label="Họ tên"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!",
                            },
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
                                message: "Nhập đầy đủ thông tin!",
                            },
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
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="mst" label="Mã số thuế">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="sdt" label="SĐT">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="email" label="Email">
                        <Input type="email" />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="dia_chi" label="Địa chỉ">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="ma_dai_ly" label="Mã đại lý">
                        <Input placeholder="Các mã cách nhau bằng dấu ," />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="so_du_ky_truoc" label="Số dư đầu">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={(value) =>
                                `${value}₫`.replace(
                                    /(?=(\d{3})+(?!\d))\B/g,
                                    ","
                                )
                            }
                            parser={(value) => value.replace(/\₫\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="phi_vn" label="Phí VN">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={(value) =>
                                `${value}₫`.replace(
                                    /(?=(\d{3})+(?!\d))\B/g,
                                    ","
                                )
                            }
                            parser={(value) => value.replace(/\₫\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="phi_vj" label="Phí VJ">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={(value) =>
                                `${value}₫`.replace(
                                    /(?=(\d{3})+(?!\d))\B/g,
                                    ","
                                )
                            }
                            parser={(value) => value.replace(/\₫\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="phi_jets" label="Phí Jets">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={(value) =>
                                `${value}₫`.replace(
                                    /(?=(\d{3})+(?!\d))\B/g,
                                    ","
                                )
                            }
                            parser={(value) => value.replace(/\₫\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="phi_bb" label="Phí BB">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={(value) =>
                                `${value}₫`.replace(
                                    /(?=(\d{3})+(?!\d))\B/g,
                                    ","
                                )
                            }
                            parser={(value) => value.replace(/\₫\s?|(,*)/g, "")}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="ngay_nhac" label="Ngày nhắc">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="HH:mm DD/MM/YYYY"
                            showTime
                            showSecond={false}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="ghi_chu" label="Ghi chú">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </div>
    );
});

export default form;

import { AutoComplete, Col, Form, Input, InputNumber, Row, Select } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { inputFormat, inputParse } from "../../../utils";
const { Option, OptGroup } = Select;
import groupBy from "lodash/groupBy";

const form = React.memo(props => {
    const phanLoai = props.phanLoai || [];
    const options = phanLoai.map(pl => ({ value: pl }));

    const nhaCungCap = props.nhaCungCap || [];
    /**
     * [
     *      ['xxx', [{}, {}, {}],
     *      ['yyyyy', [{}, {}, {}, {}, {}]]
     * ]
     */
    const groupNhaCungCap = Object.entries(groupBy(nhaCungCap, "phan_loai"));
    const getNhaCungCapDetail = () =>
        groupNhaCungCap.map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ky_hieu}
                    </Option>
                ))}
            </OptGroup>
        ));

    const khachHang = props.khachHang || [];
    const groupKhachHang = Object.entries(groupBy(khachHang, "phan_loai"));
    const getKhachHangDetail = () =>
        groupKhachHang.map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ma_khach_hang}
                    </Option>
                ))}
            </OptGroup>
        ));

    return (
        <React.Fragment>
            <Row gutter={[5, 5]}>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="ngay_thang"
                        label="Ngày tháng"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        name="ma_visa"
                        label="Mã Visa"
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
                <Col span={12} md={8} sm={12}>
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
                    <Form.Item name="quoc_gia" label="Quốc gia">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="id_nha_cung_cap" label="Nhà CC">
                        <Select
                            showSearch
                            allowClear
                            placeholder="Chọn nhà cung cấp"
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                        >
                            {getNhaCungCapDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="ngay_mua" label="Ngày mua">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <Select
                            showSearch
                            allowClear
                            placeholder="Chọn khách hàng"
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                        >
                            {getKhachHangDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="ngay_tra_khach" label="Ngày trả">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item
                        name="gia_mua"
                        label="Giá mua"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item
                        name="gia_ban"
                        label="Giá bán"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={16}>
                    <Form.Item
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        name="ghi_chu"
                        label="Ghi chú"
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

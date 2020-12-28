import AutoComplete from "antd/lib/auto-complete/index";
import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Select from "antd/lib/select/index";
import groupBy from "lodash/groupBy";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { inputFormat, inputParse } from "../../../utils";
const { Option, OptGroup } = Select;

const form = React.memo(props => {
    const phanLoai = props.phanLoai || [];
    const options = phanLoai.map(pl => ({ value: pl }));

    const khachHang = props.khachHang || [];
    /**
     * [
     *      ['xxx', [{}, {}, {}],
     *      ['yyyyy', [{}, {}, {}, {}, {}]]
     * ]
     */
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
                <Col span={12} md={8} sm={12}>
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
                        <MyDatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item
                        name="ma_tour"
                        label="Mã Tour"
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
                        name="ten_tour"
                        label="Tên Tour"
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
                    <Form.Item name="bat_dau" label="Bắt đầu">
                        <MyDatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="ket_thuc" label="Kết thúc">
                        <MyDatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item
                        name="so_luong"
                        label="Số lượng"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            min={1}
                            step={1}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="gia_ban" label="Giá bán">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <Select
                            showSearch
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
                <Col span={24} md={16} sm={12}>
                    <Form.Item
                        labelCol={{ md: 4, span: 8 }}
                        wrapperCol={{ md: 20, span: 16 }}
                        name="ghi_chu"
                        label="Ghi chú"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8} sm={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="hoan_thanh"
                        valuePropName="checked"
                    >
                        <Checkbox>Đã hoàn thành</Checkbox>
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

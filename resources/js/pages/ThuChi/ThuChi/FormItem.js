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
    const { khachHang, taiKhoan } = props.danhMuc;

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

    const groupTaiKhoan = Object.entries(groupBy(taiKhoan, "phan_loai"));
    const getTaiKhoanDetail = () =>
        groupTaiKhoan.map(clist => (
            <OptGroup label={clist[0] || "Tài khoản ngân hàng"} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ky_hieu}
                    </Option>
                ))}
            </OptGroup>
        ));

    const nganHang = taiKhoan.filter(item => item.loai === 0);
    const getNganHangDetail = () =>
        nganHang.map(nh => (
            <Option key={nh.id} value={nh.id}>
                {nh.ky_hieu}
            </Option>
        ));

    return (
        <Row gutter={[5, 5]}>
            <Col span={12}>
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
            <Col span={12}>
                <Form.Item
                    name="hang_muc"
                    label="Nội dung"
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
            <Col span={12}>
                <Form.Item name="so_tien" label="Số tiền">
                    <InputNumber
                        style={{ width: "100%" }}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="id_tai_khoan_di" label="Tài khoản chi">
                    <Select
                        showSearch
                        allowClear
                        placeholder="Chọn tài khoản"
                        filterOption={(input, option) => {
                            if (!option.children) return false;
                            return (
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            );
                        }}
                    >
                        {getNganHangDetail()}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="id_tai_khoan_den"
                    label="Nơi nhận"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: "Nhập đầy đủ thông tin!"
                    //     }
                    // ]}
                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Chọn tài khoản / nhà cung cấp"
                        filterOption={(input, option) => {
                            if (!option.children) return false;
                            return (
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            );
                        }}
                    >
                        {getTaiKhoanDetail()}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
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
        </Row>
    );
});

export default form;

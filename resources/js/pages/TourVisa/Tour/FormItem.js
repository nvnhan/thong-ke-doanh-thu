import AutoComplete from "antd/lib/auto-complete/index";
import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import { getKhachHangDetail } from "../../../utils/formatFormData";

const form = React.memo(props => {
    const dispatch = useDispatch();
    const khachHang = useSelector(state => state.khachHang.list);
    const khachHangStatus = useSelector(state => state.khachHang.status);

    const phanLoai = props.phanLoai || [];
    const options = phanLoai.map(pl => ({ value: pl }));

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
    }, []);

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
                        <MySelect
                            placeholder="Chọn khách hàng"
                            options={getKhachHangDetail(khachHang)}
                            onChange={null}
                        />
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

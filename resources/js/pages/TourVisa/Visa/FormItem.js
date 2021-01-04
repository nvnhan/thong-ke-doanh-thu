import AutoComplete from "antd/lib/auto-complete/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getKhachHangDetail,
    getTaiKhoanDetail
} from "../../../utils/formatFormData";

const form = React.memo(props => {
    const phanLoai = props.phanLoai || [];
    const options = phanLoai.map(pl => ({ value: pl }));

    const dispatch = useDispatch();
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);

    const nhaCungCap = taiKhoan.filter(item => item.loai === 1);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

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
                        <MyDatePicker format="DD/MM/YYYY" />
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
                        <MySelect
                            placeholder="Chọn nhà cung cấp"
                            options={getTaiKhoanDetail(nhaCungCap)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="ngay_mua" label="Ngày mua">
                        <MyDatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <MySelect
                            placeholder="Chọn khách hàng"
                            options={getKhachHangDetail(khachHang)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={8} sm={12}>
                    <Form.Item name="ngay_tra_khach" label="Ngày trả">
                        <MyDatePicker format="DD/MM/YYYY" />
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

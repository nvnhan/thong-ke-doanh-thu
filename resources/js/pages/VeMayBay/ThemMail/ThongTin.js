import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import InputNumber from "antd/lib/input-number/index";
import Select from "antd/lib/select/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getKhachHangDetail,
    getTaiKhoanDetail
} from "../../../utils/formatFormData";

const ThongTin = props => {
    const dispatch = useDispatch();
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

    return (
        <>
            <Col span={24} md={12}>
                <Form.Item
                    name="id_tai_khoan_mua"
                    label="Nơi mua"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <MySelect
                        placeholder="Chọn tài khoản / nhà cung cấp"
                        options={getTaiKhoanDetail(taiKhoan)}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
            <Col span={24} md={12}>
                <Form.Item
                    name="id_khach_hang"
                    label="Khách hàng"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <MySelect
                        placeholder="Chọn khách hàng"
                        options={getKhachHangDetail(khachHang)}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item name="gia_net" label="Giá net">
                    <InputNumber
                        style={{ width: "100%" }}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item name="tong_tien" label="Tổng tiền">
                    <InputNumber
                        style={{ width: "100%" }}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item name="tong_tien_thu_khach" label="Thu khách">
                    <InputNumber
                        style={{ width: "100%" }}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item
                    wrapperCol={{ sm: { offset: 8, span: 16 } }}
                    name="chung_code"
                    valuePropName="checked"
                >
                    <Checkbox>Chung code?</Checkbox>
                </Form.Item>
            </Col>
        </>
    );
};

export default React.memo(ThongTin);

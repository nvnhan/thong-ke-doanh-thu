import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Select from "antd/lib/select/index";
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
const { Option } = Select;

const form = React.memo(props => {
    const dispatch = useDispatch();
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

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
                    <MySelect
                        placeholder="Chọn tài khoản"
                        options={getNganHangDetail()}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="id_tai_khoan_den" label="Nơi nhận">
                    <MySelect
                        placeholder="Chọn tài khoản / nhà cung cấp"
                        options={getTaiKhoanDetail(taiKhoan)}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="id_khach_hang" label="Khách hàng">
                    <MySelect
                        placeholder="Chọn khách hàng"
                        options={getKhachHangDetail(khachHang)}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
        </Row>
    );
});

export default form;

import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MyRangePicker from "../../../components/Controls/MyRangePicker";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getKhachHangDetail,
    getTaiKhoanDetail
} from "../../../utils/formatFormData";

const form = React.memo(props => {
    const dispatch = useDispatch();
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

    return (
        <>
            <Row gutter={[5, 5]}>
                <Col>
                    <span>Xử lý file Excel</span>
                </Col>
            </Row>
            <Row
                gutter={[5, 5]}
                style={{
                    borderBottom: "1px solid rgba(0,0,0,.07)",
                    marginBottom: "12px"
                }}
            >
                <Col span={12} md={6}>
                    <Form.Item name="cot_so_ve" label="Cột số vé">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ma_giu_cho" label="Cột mã giữ chỗ">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ten_khach" label="Cột tên khách">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_loai_tuoi" label="Cột loại tuổi">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ngay_thang" label="Cột ngày tháng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_hanh_trinh" label="Cột hành trình">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ngay_bay" label="Cột ngày bay">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_ma_dai_ly" label="Cột mã đại lý">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_hoa_hong" label="Cột hoa hồng">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_so_tien" label="Cột số tiền">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cot_thu_khach" label="Cột thu khách">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="xu_ly_tu_hang" label="Xử lý từ hàng">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[5, 5]}>
                <Col span={24} md={12}>
                    <Form.Item
                        name="thoiGian"
                        label="Thời gian"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <MyRangePicker
                            placeholder={["Nhập từ ngày", "đến ngày"]}
                            allowClear
                        />
                    </Form.Item>
                </Col>
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
                        label="Khách hàng MĐ"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <MySelect
                            placeholder="Khách hàng mặc định"
                            options={getKhachHangDetail(khachHang)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="phi_thu_khach" label="Phí thu khách">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="khong_tinh_phi" label="Ko tính phí">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                {/* <Col span={12} md={6}>
                    <Form.Item name="ngay_thanh_toan" label="Ngày thanh toán">
                        <MyDatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                </Col> */}
            </Row>
            <Row gutter={[5, 5]}>
                <Col span={12} md={6}>
                    <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
                        <Button htmlType="submit" type="primary">
                            Xử lý
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
});

export default form;

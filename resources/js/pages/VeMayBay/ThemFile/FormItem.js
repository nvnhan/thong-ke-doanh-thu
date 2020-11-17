import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Row,
    Select
} from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React from "react";
import { inputFormat, inputParse } from "../../../utils";
const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;

const form = React.memo(props => {
    const { taiKhoan, khachHang } = props.danhMuc;

    const getKhachHangDetail = () =>
        Object.entries(_.groupBy(khachHang, "phan_loai")).map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ma_khach_hang}
                    </Option>
                ))}
            </OptGroup>
        ));

    const getTaiKhoanDetail = () =>
        Object.entries(_.groupBy(taiKhoan, "phan_loai")).map(clist => (
            <OptGroup label={clist[0] || "Tài khoản ngân hàng"} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ky_hieu}
                    </Option>
                ))}
            </OptGroup>
        ));

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
                        <RangePicker
                            locale={locale}
                            style={{ width: "100%" }}
                            ranges={{
                                "Hôm nay": [
                                    moment().startOf("day"),
                                    moment().endOf("day")
                                ],
                                "Tuần này": [
                                    moment().startOf("week"),
                                    moment().endOf("week")
                                ],
                                "Tháng này": [
                                    moment().startOf("month"),
                                    moment().endOf("month")
                                ]
                            }}
                            format="DD/MM/YYYY"
                            placeholder={["Nhập từ ngày", "đến ngày"]}
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
                <Col span={24} md={12}>
                    <Form.Item
                        name="id_khach_hang"
                        label="Khách hàng MĐ"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <Select
                            showSearch
                            allowClear
                            placeholder="Khách hàng mặc định"
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
                <Col span={12} md={6}>
                    <Form.Item name="phi_thu_khach" label="Phí thu khách">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
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
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                {/* <Col span={12} md={6}>
                    <Form.Item name="ngay_thanh_toan" label="Ngày thanh toán">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
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

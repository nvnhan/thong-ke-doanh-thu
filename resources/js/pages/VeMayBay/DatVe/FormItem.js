import {
    AutoComplete,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select
} from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import React, { useEffect } from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { inputFormat, inputParse, vndFormater } from "../../../utils";

const { Option, OptGroup } = Select;

const form = React.memo(props => {
    const { sanBay, phiHanhLy, taiKhoan, khachHang, hangBay } = props.danhMuc;
    let time = null;

    useEffect(() => {
        return () => {
            if (time) clearTimeout(time);
        };
    }, []);

    const hbOptions = hangBay.map(pl => ({ value: pl }));

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

    const getSanBayDetail = () =>
        Object.entries(_.groupBy(sanBay, "phan_loai")).map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.ma_san_bay} key={ncc.id}>
                        {ncc.ten_san_bay}
                    </Option>
                ))}
            </OptGroup>
        ));

    const getPhiHanhLyDetail = () =>
        phiHanhLy.map(ncc => (
            <Option value={ncc.id} key={ncc.id}>
                {ncc.hanh_ly + " - " + vndFormater.format(ncc.muc_phi)}
            </Option>
        ));

    const onChange = (value, type = "") => {
        props.onChangeValue({ value, type });
    };

    const onChangeDebounce = (value, type = "") => {
        if (time !== null) clearTimeout(time);
        time = setTimeout(() => onChange({ value, type }), 500);
    };

    return (
        <React.Fragment>
            <Row
                gutter={[5, 5]}
                style={{
                    borderBottom: "1px solid rgba(0,0,0,.1)",
                    marginBottom: "12px"
                }}
            >
                <Col span={12} md={6}>
                    <Form.Item
                        name="ngay_thang"
                        label="Ngày mua"
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
                <Col span={12} md={6}>
                    <Form.Item name="ma_giu_cho" label="Mã giữ chỗ">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item
                        name="so_ve"
                        label="Số vé"
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
                <Col span={12} md={6}>
                    <Form.Item
                        name="hang_bay"
                        label="Hãng bay"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <AutoComplete
                            options={hbOptions}
                            filterOption={(inputValue, option) =>
                                (option.value || "")
                                    .toUpperCase()
                                    .indexOf(inputValue.toUpperCase()) !== -1
                            }
                            onBlur={value => onChange(value, "hb")}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item
                        name="ten_khach"
                        label="Tên khách"
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
                <Col span={12} md={6}>
                    <Form.Item
                        name="loai_tuoi"
                        label="Loại tuổi"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Select onChange={value => onChange(value, "lt")}>
                            <Option value={0}>Người lớn</Option>
                            <Option value={1}>Trẻ em</Option>
                            <Option value={2}>Em bé</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="id_tai_khoan_mua" label="Nơi mua">
                        <Select
                            showSearch
                            allowClear
                            placeholder="Chọn nơi mua"
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={value => onChange(value, "tk")}
                        >
                            {getTaiKhoanDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
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
                <Col span={12} md={6}>
                    <Form.Item name="ngay_nhac_lich" label="Nhắc lịch bay">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="HH:mm DD/MM/YYYY"
                            placeholder="(Không nhắc)"
                            showTime
                            showSeconds={false}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="canh_bao_xuat_ve" label="Báo xuất vé">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="HH:mm DD/MM/YYYY"
                            placeholder="(Không cảnh báo)"
                            showTime
                            showSeconds={false}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="chua_xuat_ve"
                        valuePropName="checked"
                    >
                        <Checkbox>Chưa xuất vé</Checkbox>
                    </Form.Item>
                </Col>
            </Row>

            <Row
                gutter={[5, 5]}
                style={{
                    borderBottom: "1px solid rgba(0,0,0,.1)",
                    marginBottom: "12px"
                }}
            >
                <Col span={12} md={6}>
                    <Form.Item
                        name="ngay_gio_di"
                        label="Ngày giờ đi"
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
                            format="HH:mm DD/MM/YYYY"
                            showTime
                            showSeconds={false}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cb_di" label="CB đi">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="sb_di" label="HT chặng đi">
                        <Select
                            showSearch
                            allowClear
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={value => onChange(value, "sb")}
                        >
                            {getSanBayDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="sb_di1" label="=====>" colon={false}>
                        <Select
                            showSearch
                            allowClear
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={value => onChange(value, "sb")}
                        >
                            {getSanBayDetail()}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={12} md={6}>
                    <Form.Item name="ngay_gio_ve" label="Ngày giờ về">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="HH:mm DD/MM/YYYY"
                            showTime
                            showSeconds={false}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="cb_ve" label="CB về">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="sb_ve" label="HT chặng về">
                        <Select
                            showSearch
                            allowClear
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={value => onChange(value, "sb")}
                        >
                            {getSanBayDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="sb_ve1" label="=====>" colon={false}>
                        <Select
                            showSearch
                            allowClear
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={value => onChange(value, "sb")}
                        >
                            {getSanBayDetail()}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row
                gutter={[5, 5]}
                style={{
                    borderBottom: "1px solid rgba(0,0,0,.1)",
                    marginBottom: "12px"
                }}
            >
                <Col span={12} md={6}>
                    <Form.Item name="gia_net" label="Giá net">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="vat" label="VAT">
                        <InputNumber
                            style={{ width: "100%" }}
                            formatter={inputFormat}
                            disabled
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="phi_san_bay" label="Phí soi chiếu">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="phu_phi_san_bay" label="Phí quản trị">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="phu_phi" label="Nơi mua thu">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="hoa_hong" label="Hoa hồng">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="id_phi_hanh_ly" label="Hành lý">
                        <Select
                            showSearch
                            allowClear
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={value => onChange(value, "hl")}
                        >
                            {getPhiHanhLyDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="hanh_ly" label="Phí hành lý">
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[5, 5]}>
                <Col span={12} md={6}>
                    <Form.Item
                        name="tong_tien"
                        label="Tổng tiền"
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
                <Col span={12} md={6}>
                    <Form.Item
                        name="tong_tien_thu_khach"
                        label="Thu khách"
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
                <Col span={24} md={12}>
                    <Form.Item
                        name="ghi_chu"
                        label="Ghi chú"
                        labelCol={{ sm: { span: 4 } }}
                        wrapperCol={{ sm: { span: 20 } }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

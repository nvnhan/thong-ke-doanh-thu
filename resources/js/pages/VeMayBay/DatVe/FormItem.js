import AutoComplete from "antd/lib/auto-complete/index";
import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Select from "antd/lib/select/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHangBayList } from "../../../actions/actHangBay";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import { fetchPhiHanhLyList } from "../../../actions/actPhiHanhLy";
import { fetchSanBayList } from "../../../actions/actSanBay";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import { fetchThuePhiList } from "../../../actions/actThuePhi";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getKhachHangDetail,
    getPhiHanhLyDetail,
    getSanBayDetail,
    getTaiKhoanDetail,
    hbOptions
} from "../../../utils/formatFormData";

const { Option } = Select;

const form = React.memo(props => {
    const dispatch = useDispatch();

    const sanBayStatus = useSelector(state => state.sanBay.status);
    const phiHanhLyStatus = useSelector(state => state.phiHanhLy.status);
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);
    const hangBayStatus = useSelector(state => state.hangBay.status);
    const thuePhiStatus = useSelector(state => state.thuePhi.status);

    const sanBay = useSelector(state => state.sanBay.list);
    const phiHanhLy = useSelector(state => state.phiHanhLy.list);
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const hangBay = useSelector(state => state.hangBay.list);

    let time = null;

    useEffect(() => {
        retrieveData();
        return () => {
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        sanBayStatus === "idle" && dispatch(fetchSanBayList());
        phiHanhLyStatus === "idle" && dispatch(fetchPhiHanhLyList());
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
        hangBayStatus === "idle" && dispatch(fetchHangBayList());
        thuePhiStatus === "idle" && dispatch(fetchThuePhiList());
    };

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
                        <MyDatePicker format="DD/MM/YYYY" />
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
                            options={hbOptions(hangBay)}
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
                        <MySelect
                            placeholder="Chọn nơi mua"
                            options={getTaiKhoanDetail(taiKhoan)}
                            onChange={value => onChange(value, "tk")}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <MySelect
                            placeholder="Chọn khách hàng"
                            options={getKhachHangDetail(khachHang)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="ngay_nhac_lich" label="Nhắc lịch bay">
                        <MyDatePicker
                            format="DD/MM/YYYY"
                            placeholder="(Không nhắc)"
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="canh_bao_xuat_ve" label="Báo xuất vé">
                        <MyDatePicker
                            format="DD/MM/YYYY"
                            placeholder="(Không cảnh báo)"
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item
                        wrapperCol={{
                            sm: {
                                offset: 8,
                                span: 16
                            }
                        }}
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
                        <MySelect
                            placeholder="Chọn sân bay"
                            options={getSanBayDetail(sanBay)}
                            onChange={value => onChange(value, "sb")}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="sb_di1" label="=====>" colon={false}>
                        <MySelect
                            placeholder="Chọn sân bay"
                            options={getSanBayDetail(sanBay)}
                            onChange={value => onChange(value, "sb")}
                        />
                    </Form.Item>
                </Col>

                <Col span={12} md={6}>
                    <Form.Item name="ngay_gio_ve" label="Ngày giờ về">
                        <MyDatePicker
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
                        <MySelect
                            placeholder="Chọn sân bay"
                            options={getSanBayDetail(sanBay)}
                            onChange={value => onChange(value, "sb")}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="sb_ve1" label="=====>" colon={false}>
                        <MySelect
                            placeholder="Chọn sân bay"
                            options={getSanBayDetail(sanBay)}
                            onChange={value => onChange(value, "sb")}
                        />
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
                            style={{
                                width: "100%"
                            }}
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
                            style={{
                                width: "100%"
                            }}
                            formatter={inputFormat}
                            disabled
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="phi_san_bay" label="Phí soi chiếu">
                        <InputNumber
                            style={{
                                width: "100%"
                            }}
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
                            style={{
                                width: "100%"
                            }}
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
                            style={{
                                width: "100%"
                            }}
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
                            style={{
                                width: "100%"
                            }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                            onChange={onChangeDebounce}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="id_phi_hanh_ly" label="Hành lý">
                        <MySelect
                            placeholder="Chọn loại hành lý"
                            options={getPhiHanhLyDetail(phiHanhLy)}
                            onChange={value => onChange(value, "hl")}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="hanh_ly" label="Phí hành lý">
                        <InputNumber
                            style={{
                                width: "100%"
                            }}
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
                            style={{
                                width: "100%"
                            }}
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
                            style={{
                                width: "100%"
                            }}
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
                        labelCol={{
                            sm: { span: 4 }
                        }}
                        wrapperCol={{
                            sm: { span: 20 }
                        }}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

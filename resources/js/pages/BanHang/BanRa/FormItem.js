import Checkbox from "antd/lib/checkbox";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHangHoaList } from "../../../actions/actHangHoa";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getHangHoaDetail,
    getKhachHangDetail
} from "../../../utils/formatFormData";

const form = React.memo(props => {
    const dispatch = useDispatch();
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const hangHoaStatus = useSelector(state => state.hangHoa.status);
    const khachHang = useSelector(state => state.khachHang.list);
    const hangHoa = useSelector(state => state.hangHoa.list);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        hangHoaStatus === "idle" && dispatch(fetchHangHoaList());
    }, []);
    /**
     * When change select Hang Hoa => Call trigger change FormValue in TourChiTiet => ListForm => FormEdit
     */
    const onChange = idHH => {
        const hh = hangHoa.filter(item => item.id === idHH)[0];
        if (hh) props.onChangeValue(hh.don_gia);
    };

    return (
        <React.Fragment>
            <Row gutter={[5, 5]}>
                <Col span={24}>
                    <Form.Item
                        name="so_hoa_don"
                        label="Số hóa đơn"
                        labelCol={{ sm: { span: 4 } }}
                        wrapperCol={{ sm: { span: 20 } }}
                    >
                        <Input
                            placeholder="Tự động thêm vào hóa đơn bán hàng"
                            disabled
                        />
                    </Form.Item>
                </Col>
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
                        <MyDatePicker
                            format="DD/MM/YYYY"
                            disabled={props.hoaDon !== undefined}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="id_hang_hoa"
                        label="Hàng hóa"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <MySelect
                            placeholder="Chọn hàng hóa"
                            options={getHangHoaDetail(hangHoa)}
                            onChange={onChange}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="don_gia_mua"
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
                <Col span={12}>
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
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="don_gia_ban"
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
                <Col span={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <MySelect
                            placeholder="Chọn khách hàng"
                            options={getKhachHangDetail(khachHang)}
                            onChange={null}
                            disabled={props.hoaDon !== undefined}
                        />
                    </Form.Item>
                </Col>
                {/* <Col span={12}>
                    <Form.Item name="ngay_hoan_doi" label="Hoàn đổi">
                        <MyDatePicker
                            format="DD/MM/YYYY"
                            placeholder="(không hoàn đổi)"
                            allowClear
                        />
                    </Form.Item>
                </Col> */}
                <Col span={24}>
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

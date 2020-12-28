import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Select from "antd/lib/select/index";
import groupBy from "lodash/groupBy";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { inputFormat, inputParse, vndFormater } from "../../../utils";

const { Option, OptGroup } = Select;

const form = React.memo(props => {
    const khachHang = props.khachHang || [];
    /**
     * [
     *      ['xxx', [{}, {}, {}],
     *      ['yyyyy', [{}, {}, {}, {}, {}]]
     * ]
     */
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
    const hangHoa = props.hangHoa || [];
    const groupHangHoa = Object.entries(groupBy(hangHoa, "nha_cung_cap"));
    const getHangHoaDetail = () =>
        groupHangHoa.map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(hh => (
                    <Option value={hh.id} key={hh.id}>
                        {hh.phan_loai +
                            " - " +
                            hh.ma_hang +
                            " (" +
                            vndFormater.format(hh.don_gia) +
                            ")"}
                    </Option>
                ))}
            </OptGroup>
        ));

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
                <Col span={24} sm={12}>
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
                <Col span={12} sm={12}>
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
                        <Select
                            showSearch
                            placeholder="Chọn hàng hóa"
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                            onChange={onChange}
                        >
                            {getHangHoaDetail()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} sm={12}>
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
                <Col span={12} sm={12}>
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
                <Col span={12} sm={12}>
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
                <Col span={12} sm={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <Select
                            showSearch
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
                <Col span={12} sm={12}>
                    <Form.Item name="ngay_hoan_doi" label="Hoàn đổi">
                        <MyDatePicker
                            format="DD/MM/YYYY"
                            placeholder="(không hoàn đổi)"
                        />
                    </Form.Item>
                </Col>
                <Col span={24} sm={12}>
                    <Form.Item name="ghi_chu" label="Ghi chú">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

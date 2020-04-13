import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { vndFormater } from "../../../utils";
const { Option, OptGroup } = Select;

const form = React.memo(props => {
    const hangHoa = props.hangHoa || [];
    /**
     * [
     *      ['xxx', [{}, {}, {}],
     *      ['yyyyy', [{}, {}, {}, {}, {}]]
     * ]
     */
    const groupHangHoa = Object.entries(_.groupBy(hangHoa, "nha_cung_cap"));
    const getHangHoaDetail = () =>
        groupHangHoa.map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(hh => (
                    <Option value={hh.id} key={hh.id}>
                        {hh.phan_loai} - {hh.ma_hang} (
                        {vndFormater.format(hh.don_gia)})
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
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="id_hang_hoa"
                        label="Hạng mục"
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
                <Col span={12}>
                    <Form.Item
                        name="don_gia"
                        label="Đơn giá"
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
                            formatter={value =>
                                `${value}₫`.replace(
                                    /(?=(\d{3})+(?!\d))\B/g,
                                    ","
                                )
                            }
                            parser={value => value.replace(/\₫\s?|(,*)/g, "")}
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
                            parser={value => value.replace(/\₫\s?|\.(,*)/g, "")}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="bat_dau" label="Bắt đầu">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="ket_thuc" label="Kết thúc">
                        <MyDatePicker
                            style={{ width: "100%" }}
                            locale={locale}
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        labelCol={{ md: 4, span: 8 }}
                        wrapperCol={{ md: 20, span: 16 }}
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

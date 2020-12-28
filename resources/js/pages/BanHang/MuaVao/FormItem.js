import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { inputFormat, inputParse, vndFormater } from "../../../utils";
const { Option, OptGroup } = Select;
import groupBy from "lodash/groupBy";

const form = React.memo(props => {
    const hangHoa = props.hangHoa || [];
    /**
     * [
     *      ['xxx', [{}, {}, {}],
     *      ['yyyyy', [{}, {}, {}, {}, {}]]
     * ]
     */
    const groupHangHoa = Object.entries(groupBy(hangHoa, "nha_cung_cap"));
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
                    formatter={inputFormat}
                    parser={inputParse}
                />
            </Form.Item>
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
                    parser={inputParse}
                />
            </Form.Item>
            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </React.Fragment>
    );
});

export default form;

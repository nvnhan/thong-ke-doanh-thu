import Form from "antd/lib/form/index";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHangHoaList } from "../../../actions/actHangHoa";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import { getHangHoaDetail } from "../../../utils/formatFormData";

const form = React.memo(props => {
    const dispatch = useDispatch();
    const hangHoa = useSelector(state => state.hangHoa.list);
    const hangHoaStatus = useSelector(state => state.hangHoa.status);

    useEffect(() => {
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

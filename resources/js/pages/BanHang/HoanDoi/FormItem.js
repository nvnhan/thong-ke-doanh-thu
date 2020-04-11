import { Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
const { Option } = Select;

const form = React.memo(props => {
    const taiKhoan = props.taiKhoan || [];
    const getTaiKhoanDetail = () =>
        taiKhoan.map(tk => (
            <Option value={tk.id} key={tk.id}>
                {tk.ky_hieu} - {tk.mo_ta}
            </Option>
        ));

    return (
        <React.Fragment>
            <Form.Item
                name="ngay_hoan_doi"
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
            <Form.Item name="ngay_thanh_toan_hoan_doi" label="Thanh toán">
                <MyDatePicker
                    style={{ width: "100%" }}
                    locale={locale}
                    format="DD/MM/YYYY"
                />
            </Form.Item>
            <Form.Item name="id_tai_khoan_tra_hoan_doi" label="TK trả">
                <Select placeholder="Chọn tài khoản">
                    {getTaiKhoanDetail()}
                </Select>
            </Form.Item>

            <Form.Item name="ngay_hoan_doi_xong" label="Hoàn đổi xong">
                <MyDatePicker
                    style={{ width: "100%" }}
                    locale={locale}
                    format="DD/MM/YYYY"
                />
            </Form.Item>

            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </React.Fragment>
    );
});

export default form;

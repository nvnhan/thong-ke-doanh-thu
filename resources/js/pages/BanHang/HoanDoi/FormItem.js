import Form from "antd/lib/form/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MyDatePicker from "../../../components/Controls/MyDatePicker";
import MySelect from "../../../components/Controls/MySelect";
import { getTaiKhoanDetail } from "../../../utils/formatFormData";

const form = React.memo(props => {
    const dispatch = useDispatch();
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);
    const taiKhoan = useSelector(state => state.taiKhoan.list);

    useEffect(() => {
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

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
                <MyDatePicker format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item name="ngay_thanh_toan_hoan_doi" label="Thanh toán">
                <MyDatePicker format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item name="id_tai_khoan_tra_hoan_doi" label="TK trả">
                <MySelect
                    placeholder="Chọn tài khoản"
                    options={getTaiKhoanDetail(taiKhoan)}
                    onChange={null}
                />
            </Form.Item>

            <Form.Item name="ngay_hoan_doi_xong" label="Hoàn đổi xong">
                <MyDatePicker format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item name="ghi_chu" label="Ghi chú">
                <Input />
            </Form.Item>
        </React.Fragment>
    );
});

export default form;

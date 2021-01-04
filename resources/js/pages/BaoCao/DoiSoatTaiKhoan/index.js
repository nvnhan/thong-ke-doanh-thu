import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MyRangePicker from "../../../components/Controls/MyRangePicker";
import MySelect from "../../../components/Controls/MySelect";
import { parseValues } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
import { getTaiKhoanDetail } from "../../../utils/formatFormData";

const index = props => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);

    useEffect(() => {
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

    const onFinish = () => {
        let values = form.getFieldsValue();
        downloadApi(
            "/api/doi-soat-tai-khoan",
            parseValues(values),
            "doi-soat-tai-khoan.xlsx"
        );
    };

    return (
        <div className="list-form">
            <div className="sm-container">
                <Form
                    form={form}
                    initialValues={{
                        thoiGian: [
                            moment().startOf("month"),
                            moment().endOf("month")
                        ]
                    }}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="thoiGian"
                        label="Thời gian"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <MyRangePicker />
                    </Form.Item>
                    <Form.Item
                        name="id_tai_khoan"
                        label="Tài khoản"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <MySelect
                            placeholder="Chọn tài khoản / nhà cung cấp"
                            options={getTaiKhoanDetail(taiKhoan)}
                            onChange={null}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ md: { span: 16, offset: 8 } }}>
                        <Button htmlType="submit" type="primary">
                            <FileExcelOutlined /> Xuất danh sách
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default React.memo(index);

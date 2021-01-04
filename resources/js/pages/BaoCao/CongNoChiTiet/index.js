import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import MyRangePicker from "../../../components/Controls/MyRangePicker";
import MySelect from "../../../components/Controls/MySelect";
import { parseValues } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
import { getKhachHangDetail } from "../../../utils/formatFormData";

const index = props => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const khachHang = useSelector(state => state.khachHang.list);
    const khachHangStatus = useSelector(state => state.khachHang.status);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
    }, []);

    const onFinish = () => {
        let values = form.getFieldsValue();
        downloadApi(
            "/api/cong-no-chi-tiet",
            parseValues(values),
            "cong-no-chi-tiet.xlsx"
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
                        name="id_khach_hang"
                        label="Khách hàng"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <MySelect
                            placeholder="Chọn khách hàng"
                            options={getKhachHangDetail(khachHang)}
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

import { FileExcelOutlined } from "@ant-design/icons";
import { Button, Form, Select } from "antd";
import React, { useState } from "react";
import MyRangePicker from "../../../components/ListForm/MyRangePicker";
import { parseValues } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
const { Option, OptGroup } = Select;
import groupBy from "lodash/groupBy";

const index = props => {
    const [form] = Form.useForm();

    const [taiKhoan, setTaiKhoan] = useState(() => {
        axios
            .get("/api/tai-khoan/all")
            .then(response => {
                if (response.data.success) setTaiKhoan(response.data.data);
            })
            .catch(error => console.log(error));
    });

    const onFinish = () => {
        let values = form.getFieldsValue();
        downloadApi(
            "/api/doi-soat-tai-khoan",
            parseValues(values),
            "doi-soat-tai-khoan.xlsx"
        );
    };

    const getTaiKhoanDetail = () =>
        Object.entries(groupBy(taiKhoan, "phan_loai")).map(clist => (
            <OptGroup label={clist[0] || "Tài khoản ngân hàng"} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ky_hieu}
                    </Option>
                ))}
            </OptGroup>
        ));

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
                        <Select
                            showSearch
                            placeholder="Chọn tài khoản / nhà cung cấp"
                            filterOption={(input, option) => {
                                if (!option.children) return false;
                                return (
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                );
                            }}
                        >
                            {getTaiKhoanDetail()}
                        </Select>
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

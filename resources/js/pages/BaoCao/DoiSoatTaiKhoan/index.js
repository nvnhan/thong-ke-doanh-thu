import { FileExcelOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Select } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React, { useState } from "react";
import { downloadApi } from "../../../utils/downloadFile";
import { parseValues } from "../../../utils";
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;

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
        if (values.hasOwnProperty("thoiGian")) {
            values = Object.assign(values, {
                bat_dau: values.thoiGian[0],
                ket_thuc: values.thoiGian[1]
            });
            delete values.thoiGian;
        }
        downloadApi(
            "/api/doi-soat-tai-khoan",
            parseValues(values),
            "doi-soat-tai-khoan.xlsx"
        );
    };

    const getTaiKhoanDetail = () =>
        Object.entries(_.groupBy(taiKhoan, "phan_loai")).map(clist => (
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
                        <RangePicker
                            allowClear={false}
                            locale={locale}
                            style={{ width: "100%" }}
                            ranges={{
                                "Hôm nay": [
                                    moment().startOf("day"),
                                    moment().endOf("day")
                                ],
                                "Tuần này": [
                                    moment().startOf("week"),
                                    moment().endOf("week")
                                ],
                                "Tháng này": [
                                    moment().startOf("month"),
                                    moment().endOf("month")
                                ]
                            }}
                            format="DD/MM/YYYY"
                            placeholder={["Từ ngày", "đến ngày"]}
                        />
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

import { FileExcelOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Select } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React, { useState } from "react";
import { downloadApi } from "../../../utils/downloadFile";
import { parseValues } from "../../../utils";
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;

const index = props => {
    const [form] = Form.useForm();

    const getKhachHang = (bat_dau = null, ket_thuc = null, all = false) => {
        axios
            .get("/api/khach-hang/all")
            .then(response => {
                if (response.data.success) setKhachHang(response.data.data);
            })
            .catch(error => console.log(error));
    };

    const [khachHang, setKhachHang] = useState(() => {
        getKhachHang();
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
            "/api/cong-no-chi-tiet",
            parseValues(values),
            "cong-no-chi-tiet.xlsx"
        );
    };

    const getKhachHangDetail = () =>
        Object.entries(_.groupBy(khachHang, "phan_loai")).map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ma_khach_hang}
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
                            locale={locale}
                            style={{ width: "100%" }}
                            ranges={{
                                "Hôm nay": [moment(), moment()],
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
                    {/* <Form.Item
                        wrapperCol={{ md: { span: 16, offset: 8 } }}
                        name="all"
                        valuePropName="checked"
                    >
                        <Checkbox>Tất cả khách hàng</Checkbox>
                    </Form.Item> */}
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

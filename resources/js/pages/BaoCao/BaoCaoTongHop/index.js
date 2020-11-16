import { FileExcelOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React from "react";
import { parseValues } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
const { RangePicker } = DatePicker;

const index = props => {
    const [form] = Form.useForm();

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
            "/api/bao-cao-tong-hop",
            parseValues(values),
            "bao-cao-tong-hop.xlsx"
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

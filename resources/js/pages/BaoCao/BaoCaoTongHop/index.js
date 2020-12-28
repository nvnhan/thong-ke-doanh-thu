import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import { Button, Form } from "antd";
import React from "react";
import MyRangePicker from "../../../components/ListForm/MyRangePicker";
import { parseValues } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";

const index = props => {
    const [form] = Form.useForm();

    const onFinish = () => {
        let values = form.getFieldsValue();
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
                        <MyRangePicker />
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

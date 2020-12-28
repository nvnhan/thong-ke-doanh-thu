import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import { Button, Form, Select } from "antd";
import groupBy from "lodash/groupBy";
import React, { useState } from "react";
import MyRangePicker from "../../../components/ListForm/MyRangePicker";
import { parseValues } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
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
        downloadApi(
            "/api/cong-no-chi-tiet",
            parseValues(values),
            "cong-no-chi-tiet.xlsx"
        );
    };

    const getKhachHangDetail = () =>
        Object.entries(groupBy(khachHang, "phan_loai")).map(clist => (
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

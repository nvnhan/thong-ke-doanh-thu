import UploadOutlined from "@ant-design/icons/UploadOutlined";
import { Button, Col, Form, message, Modal, Progress, Row, Upload } from "antd";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { parseValues } from "../../../utils";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [columns, setColumns] = useState(() => {
        // Get data from localStorage
        let cols = {};
        const cot = localStorage.getItem("cot_thu_chi");
        if (cot !== undefined) Object.assign(cols, JSON.parse(cot));
        //
        return cols;
    });
    const [fileList, setFileList] = useState([]);

    /**
     * Lưu thông tin cột vào localStorage
     */
    const saveColumns = cols => {
        delete cols.thoiGian;
        delete cols.file;
        localStorage.setItem("cot_thu_chi", JSON.stringify(cols));
    };

    const showWaiting = () => {
        Modal.info({
            title: "Thông báo",
            centered: true,
            icon: null,
            okButtonProps: { hidden: true },
            content: (
                <div style={{ textAlign: "center" }}>
                    <Progress
                        percent={100}
                        status="active"
                        showInfo={false}
                        strokeColor="#6dc3a6"
                    />
                    <span>Đang xử lý dữ liệu...</span>
                    <br />
                    <small>
                        <i>(Không thể hủy cho đến khi tiến trình kết thúc!)</i>
                    </small>
                </div>
            )
        });
    };

    const getFormData = values => {
        values = parseValues(values, "YYYY-MM-DD");

        const data = new FormData();
        data.append("file", fileList[0]);

        delete values.file;
        for (let key in values)
            if (values[key] !== undefined) data.append(key, values[key]);
        return data;
    };

    const onFinish = () => {
        if (fileList.length === 0) {
            message.warn("Chưa chọn file");
            return;
        }
        showWaiting();
        const values = form.getFieldsValue();
        saveColumns({ ...values });
        const data = getFormData(values);

        // Truyền lên server
        axios
            .post(`/api/thu-chi/them-file`, data, {
                headers: {
                    "Content-Type":
                        "multipart/form-data; charset=utf-8; boundary=" +
                        Math.random()
                            .toString()
                            .substr(2)
                }
            })
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    props.history.push({
                        pathname: "/thu-chi",
                        dd: response.data.data
                    });
                } else message.error(response.data.message);
            })
            .catch(error => console.log(error))
            .then(() => Modal.destroyAll());
    };

    const onRemove = file => setFileList([]);

    const beforeUpload = file => {
        setFileList([file]);
        return false;
    };

    return (
        <div className="list-form" style={{ padding: "16px 12px" }}>
            <Form
                form={form}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                onFinish={onFinish}
                initialValues={columns}
            >
                <Row
                    gutter={[5, 5]}
                    style={{
                        borderBottom: "1px solid rgba(0,0,0,.07)",
                        marginBottom: "12px"
                    }}
                >
                    <Col span={24} md={18}>
                        <Form.Item
                            labelCol={{ md: 4 }}
                            wrapperCol={{ md: 20 }}
                            name="file"
                            label="Chọn file"
                        >
                            <Upload
                                accept=".xls,.xlsx"
                                beforeUpload={beforeUpload}
                                onRemove={onRemove}
                                fileList={fileList}
                            >
                                <Button>
                                    <UploadOutlined /> Tải lên
                                </Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <FormItem />
            </Form>
        </div>
    );
};

export default React.memo(withRouter(index));

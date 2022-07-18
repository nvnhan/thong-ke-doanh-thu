import UploadOutlined from "@ant-design/icons/UploadOutlined";
import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import message from "antd/lib/message/index";
import Modal from "antd/lib/modal/index";
import Upload from "antd/lib/upload/index";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import showWaiting from "../../../../components/Includes/ShowWaiting";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [columns, setColumns] = useState(() => {
        // Get data from localStorage
        let cols = {};
        const cot = localStorage.getItem("cot_hang_hoa");
        if (cot !== undefined) Object.assign(cols, JSON.parse(cot));
        //
        return cols;
    });
    const [fileList, setFileList] = useState([]);

    /**
     * Lưu thông tin cột vào localStorage
     */
    const saveColumns = cols => {
        delete cols.file;
        localStorage.setItem("cot_hang_hoa", JSON.stringify(cols));
    };

    const getFormData = values => {
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
            .post(`/api/hang-hoa/them-file`, data, {
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
                        pathname: "/hang-hoa",
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

import UploadOutlined from "@ant-design/icons/UploadOutlined";
import AutoComplete from "antd/lib/auto-complete/index";
import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import message from "antd/lib/message/index";
import Modal from "antd/lib/modal/index";
import Upload from "antd/lib/upload/index";
import React, { useState } from "react";
import showWaiting from "../../../components/Includes/ShowWaiting";
import { parseValues } from "../../../utils";
import ModalPreviewDatVe from "../ModalPreviewDatVe";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();

    const [columns, setColumns] = useState(() => {
        // Get data from localStorage
        let cols = {
            phi_thu_khach: 0,
            khong_tinh_phi: 0
        };
        const cot = localStorage.getItem("cot_excel");
        if (cot !== undefined) Object.assign(cols, JSON.parse(cot));
        //
        return cols;
    });
    const [fileList, setFileList] = useState([]);
    const [modalDatVe, setModalDatVe] = useState({
        visible: false,
        datve: ""
    });

    /**
     * Lưu thông tin cột vào localStorage
     */
    const saveColumns = cols => {
        delete cols.thoiGian;
        delete cols.id_tai_khoan_mua;
        delete cols.id_khach_hang;
        delete cols.phi_thu_khach;
        delete cols.khong_tinh_phi;
        delete cols.ngay_thanh_toan;
        delete cols.file;
        localStorage.setItem("cot_excel", JSON.stringify(cols));
    };

    const getFormData = values => {
        delete values.file;
        values = parseValues(values);

        const data = new FormData();
        data.append("file", fileList[0]);

        for (let key in values)
            values[key] !== undefined && data.append(key, values[key]);
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
            .post(`/api/dat-ve/them-file`, data, {
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
                    setModalDatVe({ visible: true, datve: response.data.data });
                } else message.error(response.data.message);
            })
            .catch(error => console.log(error))
            .then(() => Modal.destroyAll());
    };

    /**
     * Cancel Modal preview
     */
    const handleCancel = () =>
        setModalDatVe({ visible: false, datve: "" }) && setFileList([]);

    /**
     * Remove selected file
     */
    const onRemove = () => setFileList([]);

    const beforeUpload = file => {
        setFileList([file]);
        return false;
    };

    const hbOptions = ["VN", "VJ", "Jets", "BB"].map(pl => ({ value: pl }));

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
                    <Col span={12} md={6}>
                        <Form.Item name="hang_bay" label="HB mặc định">
                            <AutoComplete
                                options={hbOptions}
                                filterOption={(inputValue, option) =>
                                    option.value
                                        .toUpperCase()
                                        .indexOf(inputValue.toUpperCase()) !==
                                    -1
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24} md={18}>
                        <Form.Item
                            labelCol={{ md: 4 }}
                            wrapperCol={{ md: 20 }}
                            name="file"
                            label="Tập tin"
                        >
                            <Upload
                                accept=".xls,.xlsx,.htm,.html"
                                beforeUpload={beforeUpload}
                                onRemove={onRemove}
                                fileList={fileList}
                            >
                                <Button>
                                    <UploadOutlined /> Chọn file tải lên
                                </Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <FormItem />
            </Form>
            <ModalPreviewDatVe
                ddDatVe={modalDatVe.datve}
                handleCancel={handleCancel}
                modalVisible={modalDatVe.visible}
            />
        </div>
    );
};

export default React.memo(index);

import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Form, message, Modal, Progress, Row, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useMergeState } from "../../../utils";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [state, setState] = useMergeState({
        taiKhoan: [],
        khachHang: []
    });
    const [columns, setColumns] = useState(() => {
        // Get data from localStorage
        let cols = {
            tong_tien_thu_khach: 0,
            khong_tinh_phi: 0
        };
        const cot = localStorage.getItem("cot_excel");
        if (cot !== undefined) Object.assign(cols, JSON.parse(cot));
        //
        return cols;
    });
    const [fileList, setFileList] = useState([]);
    let isComponentMounted = false;
    let time = null;

    useEffect(() => {
        isComponentMounted = true;
        retrieveData();
        return () => {
            // When Unmount component
            isComponentMounted = false;
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        const promise1 = axios.get("/api/tai-khoan/all");
        const promise2 = axios.get("/api/khach-hang/all");
        console.log("Retrieving Danh Muc");
        Promise.all([promise1, promise2])
            .then(response => {
                if (isComponentMounted)
                    if (response[0].data.success && response[1].data.success) {
                        setState({
                            taiKhoan: response[0].data.data,
                            khachHang: response[1].data.data
                        });
                        console.log("Retrieved Danh Muc Succcessfully");
                    } else time = setTimeout(retrieveData, 2000);
            })
            .catch(error => {
                console.log(error);
                time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
            });
    };

    /**
     * Lưu thông tin cột vào localStorage
     */
    const saveColumns = cols => {
        delete cols.thoiGian;
        delete cols.id_tai_khoan_mua;
        delete cols.id_khach_hang;
        delete cols.tong_tien_thu_khach;
        delete cols.khong_tinh_phi;
        delete cols.ngay_thanh_toan;
        localStorage.setItem("cot_excel", JSON.stringify(cols));
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
        if (
            values.hasOwnProperty("thoiGian") &&
            values.thoiGian !== undefined
        ) {
            Object.assign(values, {
                bat_dau: values.thoiGian[0],
                ket_thuc: values.thoiGian[1]
            });
        }
        const data = new FormData();
        data.append("file", fileList[0]);

        delete values.thoiGian;
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
        console.log("onFinish -> values", values)

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
                    props.history.push({
                        pathname: "/dat-ve",
                        dd: response.data.data
                    });
                } else message.error(response.data.message);
            })
            .catch(error => console.log(error))
            .then(() => Modal.destroyAll());
    };

    const onRemove = file => {
        setFileList([]);
    };

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
                    <Col span={24}>
                        <Form.Item
                            labelCol={{ span: 3 }}
                            wrapperCol={{ span: 21 }}
                            name="file"
                            label="Chọn file"
                        >
                            <Upload
                                accept=".xls,.xlsx,.htm,.html"
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
                <FormItem danhMuc={state} />
            </Form>
        </div>
    );
};

export default React.memo(withRouter(index));

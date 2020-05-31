import { Form, message, Modal, Progress } from "antd";
import moment from "moment";
import React from "react";
import { withRouter } from "react-router-dom";
import { useMergeState } from "../../../utils";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [state, setState] = useMergeState({
        email: [],
        selectedRowKeys: []
    });
    const { selectedRowKeys } = state;

    const showWaiting = (des = "Đang xử lý dữ liệu...") => {
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
                    <span>{des}</span>
                    <br />
                    <small>
                        <i>(Không thể hủy cho đến khi tiến trình kết thúc!)</i>
                    </small>
                </div>
            )
        });
    };

    const getFormData = values => {
        if (values.hasOwnProperty("thoiGian") && !_.isEmpty(values.thoiGian)) {
            Object.assign(values, {
                bat_dau: values.thoiGian[0].format("YYYY-MM-DD HH:mm:ss"),
                ket_thuc: values.thoiGian[1].format("YYYY-MM-DD HH:mm:ss")
            });
        }
        delete values.thoiGian;
        return values;
    };

    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    const onFinish = () => {
        if (selectedRowKeys.length === 0) {
            message.warning("Chưa chọn email");
            return;
        }

        showWaiting();
        const values = form.getFieldsValue();
        const data = getFormData(values);
        Object.assign(data, { mails: selectedRowKeys.join("|") });
        console.log("onFinish -> data", data);

        // Truyền lên server
        axios
            .post(`/api/dat-ve/them-mail`, data)
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    props.history.push({
                        pathname: "/dat-ve",
                        dd: response.data.data
                    });
                } else message.error(response.data.message);
            })
            .catch(error => {
                console.log(error);
                message.error("Có lỗi xảy ra");
            })
            .then(() => Modal.destroyAll());
    };

    const onGetEmail = () => {
        showWaiting("Đang lấy thông tin email...");
        const values = form.getFieldsValue();
        const data = getFormData(values);

        // Get Email from GMAIL
        axios
            .post(`/api/dat-ve/get-mail`, data)
            .then(response => {
                if (response.data.success)
                    setState({
                        email: response.data.data,
                        selectedRowKeys: []
                    });
                else message.error(response.data.message);
            })
            .catch(error => {
                message.error("Có lỗi xảy ra");
                console.log(error);
                setState({ email: [], selectedRowKeys: [] });
            })
            .then(() => Modal.destroyAll());
    };

    return (
        <div className="list-form" style={{ padding: "16px 12px" }}>
            <Form
                form={form}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                onFinish={onFinish}
                initialValues={{
                    thoiGian: [
                        moment().startOf("week"),
                        moment().endOf("week")
                    ],
                    gioi_han: 20,
                    gia_net: 0,
                    tong_tien: 0,
                    tong_tien_thu_khach: 0
                }}
            >
                <FormItem
                    danhMuc={state}
                    onChangeSelect={onChangeSelect}
                    onGetEmail={onGetEmail}
                />
            </Form>
        </div>
    );
};

export default React.memo(withRouter(index));

import { Form, message, Modal } from "antd";
import moment from "moment";
import React from "react";
import { withRouter } from "react-router-dom";
import showWaiting from "../../../components/Includes/ShowWaiting";
import { parseValues, useMergeState } from "../../../utils";
import ModalPreviewDatVe from "../ModalPreviewDatVe";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [state, setState] = useMergeState({
        mails: [],
        selectedRowKeys: [],
        modalVisible: false,
        ddDatVe: ""
    });
    const { selectedRowKeys, ddDatVe, modalVisible } = state;

    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    const onFinish = () => {
        if (selectedRowKeys.length === 0) {
            message.warning("Chưa chọn email");
            return;
        }

        showWaiting();
        const values = form.getFieldsValue();
        const data = parseValues(values);
        Object.assign(data, {
            mails: selectedRowKeys.join("|")
        });
        console.log("onFinish -> data", data);

        // Truyền lên server
        axios
            .post(`/api/dat-ve/them-mail`, data)
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    setState({
                        modalVisible: true,
                        ddDatVe: response.data.data,
                        selectedRowKeys: []
                    });
                } else message.error(response.data.message);
            })
            .catch(error => {
                console.log(error);
                message.error("Có lỗi xảy ra");
            })
            .then(() => Modal.destroyAll());
    };

    /**
     * Cancel Modal preview
     */
    const handleCancel = () => setState({ modalVisible: false, ddDatVe: "" });

    const onGetEmail = () => {
        showWaiting("Đang lấy thông tin email...");
        const values = form.getFieldsValue();
        const data = parseValues(values);

        // Get Email from GMAIL
        axios
            .post(`/api/dat-ve/get-mail`, data)
            .then(response => {
                if (response.data.success)
                    setState({
                        mails: response.data.data,
                        selectedRowKeys: []
                    });
                else message.error(response.data.message);
            })
            .catch(error => {
                message.error("Có lỗi xảy ra");
                console.log(error);
                setState({
                    mails: [],
                    selectedRowKeys: []
                });
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
            <ModalPreviewDatVe
                ddDatVe={ddDatVe}
                handleCancel={handleCancel}
                modalVisible={modalVisible}
            />
        </div>
    );
};

export default React.memo(withRouter(index));

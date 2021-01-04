import Form from "antd/lib/form/index";
import message from "antd/lib/message/index";
import Modal from "antd/lib/modal/index";
import React, { useState } from "react";
import showWaiting from "../../../components/Includes/ShowWaiting";
import ModalPreviewDatVe from "../ModalPreviewDatVe";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [modalDatVe, setModalDatVe] = useState({
        visible: false,
        datve: ""
    });

    const onFinish = () => {
        showWaiting();
        const data = form.getFieldsValue();

        // Truyền lên server
        axios
            .put(`/api/dat-ve/them-text`, data)
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
    const handleCancel = () => setModalDatVe({ visible: false, datve: "" });

    return (
        <div className="list-form" style={{ padding: "16px 12px" }}>
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                initialValues={{
                    gia_net: 0,
                    tong_tien: 0,
                    tong_tien_thu_khach: 0
                }}
            >
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

import React from "react";
import { Modal, Form, Button } from "antd";
import FormEdit from "./FormEdit";
import { parseValues } from "../../utils";

const ModalConfirm = React.memo(props => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(value => props.handleOk(parseValues(value)))
            .catch(info => console.log("Validate Failed: ", info));
    };
    return (
        <Modal
            width={props.modalWidth}
            visible={props.modalVisible}
            title="Chi tiết"
            onOk={handleOk}
            onCancel={props.handleCancel}
            footer={[
                <Button key="back" onClick={props.handleCancel}>
                    Hủy
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={props.formSubmiting}
                    onClick={handleOk}
                >
                    Đồng ý
                </Button>
            ]}
        >
            <FormEdit
                form={form}
                formInitialValues={props.formInitialValues}
                currentRecord={props.currentRecord}
                formTemplate={props.formTemplate}
            />
        </Modal>
    );
});
export default ModalConfirm;

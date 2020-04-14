import { Button, Modal } from "antd";
import React from "react";
import { parseValues } from "../../utils";
import FormEdit from "./FormEdit";

const ModalConfirm = React.memo(props => {
    const { form } = props;
    
    const handleOk = () => {
        form.validateFields()
            .then(value => props.handleOk(parseValues(value)))
            .catch(info => console.log("Validate Failed: ", info));
    };

    return (
        <Modal
            width={props.modalWidth}
            visible={props.modalVisible}
            title={props.currentRecord !== undefined ? "Chỉnh sửa" : "Thêm mới"}
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
            <FormEdit {...props} form={form} />
        </Modal>
    );
});
export default ModalConfirm;

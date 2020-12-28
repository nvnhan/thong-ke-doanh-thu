import Button from "antd/lib/button/index";
import Modal from "antd/lib/modal/index";
import Switch from "antd/lib/switch/index";
import React, { useState } from "react";
import { parseValues } from "../../utils";
import FormEdit from "./FormEdit";

const ModalConfirm = React.memo(props => {
    const { form } = props;
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [insertMore, setInsertMore] = useState(false);

    const handleOk = () => {
        setFormSubmitting(true);
        form.validateFields()
            .then(value => {
                props.handleOk(parseValues(value), () =>
                    setFormSubmitting(false)
                );
                if (insertMore) {
                    // Nếu form thêm mới thì reset field để thêm record mới
                    if (props.currentRecord === undefined) form.resetFields();
                } else props.handleCancel();
            })
            .catch(info => console.log("Validate Failed: ", info));
    };

    const onChange = checked => setInsertMore(checked);

    return (
        <Modal
            width={props.modalWidth}
            visible={props.modalVisible}
            title={props.currentRecord !== undefined ? "Chỉnh sửa" : "Thêm mới"}
            onOk={handleOk}
            onCancel={props.handleCancel}
            footer={[
                <React.Fragment key="insert-more">
                    <Switch
                        size="small"
                        checked={insertMore}
                        onChange={onChange}
                    />
                    &nbsp;Thêm nữa
                </React.Fragment>,
                <Button key="back" onClick={props.handleCancel}>
                    Hủy
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={formSubmitting}
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

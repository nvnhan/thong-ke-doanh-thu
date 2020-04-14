import { Form } from "antd";
import React, { useLayoutEffect } from "react";

const FormEdit = React.memo(props => {
    const {
        form,
        formInitialValues,
        currentRecord,
        setFormValues,
        formTemplate,
        modalVisible
    } = props;

    useLayoutEffect(() => {
        if (modalVisible) {
            // Khi chọn select từ FormItem
            if (setFormValues !== undefined) form.setFieldsValue(setFormValues);
            // Khi mở modal render record khác
            else if (currentRecord !== undefined)
                form.setFieldsValue(currentRecord);
        }
        // tắt mdoal đi thì reset lại
        else {
            form.resetFields();
            if (
                setFormValues !== undefined &&
                setFormValues.resetFields !== undefined
            )
                setFormValues.resetFields();
        }
    }); // Always run while render

    return (
        <Form
            form={form}
            initialValues={formInitialValues}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            {formTemplate}
        </Form>
    );
});

export default FormEdit;

import React, { useLayoutEffect } from "react";
import { Form } from "antd";

const FormEdit = React.memo(props => {
    const {
        form,
        formInitialValues,
        currentRecord,
        setFormValues,
        formTemplate
    } = props;

    useLayoutEffect(() => {
        // Khi chọn select từ FormItem
        if (setFormValues !== undefined) form.setFieldsValue(setFormValues);
        // Khi mở modal render record khác
        else if (currentRecord !== undefined)
            form.setFieldsValue(currentRecord);
        // Khi thêm mới
        else form.resetFields();
    }); // Always run while render

    return (
        <Form
            form={form}
            initialValues={formInitialValues}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
        >
            {formTemplate}
        </Form>
    );
});

export default FormEdit;

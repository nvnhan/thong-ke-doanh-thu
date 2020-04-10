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
        if (currentRecord !== undefined) form.setFieldsValue(currentRecord);
        else form.resetFields();
        if (setFormValues !== undefined) form.setFieldsValue(setFormValues);
    }); // Alway run while each render

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

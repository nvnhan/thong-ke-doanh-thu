import React, { useLayoutEffect } from "react";
import { Form } from "antd";

const FormEdit = React.memo((props) => {
    useLayoutEffect(() => {
        if (props.currentRecord !== undefined)
            props.form.setFieldsValue(props.currentRecord);
        else props.form.resetFields();
    });

    return (
        <Form
            form={props.form}
            initialValues={props.formInitialValues}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
        >
            {props.formTemplate}
        </Form>
    );
});

export default FormEdit;

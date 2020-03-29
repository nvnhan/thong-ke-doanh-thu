import React, { PureComponent } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

class Edit extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        const { match } = this.props;

        console.log(this.props.match.params.id);
        axios.get(`/api/posts/${match.params.id}`).then(response => {
            this.setState({
                data: response.data
            });
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { form, history, match } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                axios
                    .post(`/api/posts/${match.params.id}`, values)
                    .then(response => {
                        alert("thanh cong");
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const { data } = this.state;

        return (
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
                onSubmit={this.handleSubmit}
            >
                <Form.Item label="Tên bài viết">
                    {getFieldDecorator("title", {
                        rules: [
                            {
                                required: true,
                                message: "Vui lòng nhập tên bài viết!"
                            }
                        ],
                        initialValue: data.title
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Nội dung">
                    {getFieldDecorator("content", {
                        initialValue: data.content,
                        rules: [
                            {
                                required: true,
                                message: "Vui lòng nhập nội dung bài viết!"
                            }
                        ]
                    })(<TextArea rows={6} />)}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Sửa
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedEdit = Form.create({ name: "editForm" })(Edit);

export default WrappedEdit;

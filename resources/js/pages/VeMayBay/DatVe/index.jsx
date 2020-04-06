import { Button, List } from "antd";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class ListPost extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    deletePost = id => {
        // axios
        //     .post(`/api/posts/delete/${id}`)
        //     .then(response => {
        //         alert("Xoa thanh cong");
        //         this.setState({
        //             data: response.data
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    render() {
        const { data } = this.state;

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description={item.content}
                        />
                        <Link to={`edit/${item.id}`}>
                            <Button type="primary">Chỉnh sửa</Button>
                        </Link>
                        <Button
                            type="danger"
                            onClick={() => this.deletePost(item.id)}
                        >
                            Xóa
                        </Button>
                    </List.Item>
                )}
            />
        );
    }
}

export default ListPost;
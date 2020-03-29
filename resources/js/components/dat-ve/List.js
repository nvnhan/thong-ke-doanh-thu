import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, List } from "antd";
import axios from "axios";
import * as actions from '../../actions'
import * as menus from '../../constants/SideMenus'

class ListPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // axios.get("/api/posts").then(response => {
        //     this.setState({
        //         data: response.data
        //     });
        // });
        this.props.onChangeMenu(menus.DAT_VE);
        this.props.onChangeTitle("Đặt vé");
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

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
	return {
		
	};
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
	return {
		onChangeMenu: menu => {
			dispatch(actions.changeMenu(menu));
        },
        onChangeTitle: title => {
            dispatch(actions.changeTitle(title));
        }
	};
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(ListPosts);

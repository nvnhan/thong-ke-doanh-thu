import React, { Component } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NotFound extends Component {
    componentDidMount() {
        this.props.onChangeMenu('');
        this.props.onChangeTitle("Lỗi 404");
    }
    
    render() {
        return (
            <Result
                status="404"
                title="404 - Not found!"
                subTitle="Rất tiếc, trang không tồn tại"
                extra={
                    <Button type="primary">
                        <Link to="/">Trang chủ</Link>
                    </Button>
                }
            />
        );
    }
}


/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {};
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
export default connect(mapStatetoProps, mapDispatchToProps)(NotFound);

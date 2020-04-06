import { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Container extends PureComponent {
    componentDidMount() {
        const { menu, title } = this.props;
        if (menu !== undefined) this.props.onChangeMenu(menu);
        this.props.onChangeTitle(title);
    }

    render() {
        const { component } = this.props;
        return component;
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = (state) => ({});
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeMenu: (menu) => {
            dispatch(actions.changeMenu(menu));
        },
        onChangeTitle: (title) => {
            dispatch(actions.changeTitle(title));
        },
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(Container);

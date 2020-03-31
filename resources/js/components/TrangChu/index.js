import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import * as menus from "../../constants/SideMenus";

class TrangChu extends PureComponent {
    componentDidMount() {
        this.props.onChangeMenu(menus.HOME);
        this.props.onChangeTitle("Thống kê doanh thu");
    }

    render() {
        return <div>TRANG CHỦ</div>;
    }
}

const mapStateToProps = state => ({});

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

export default connect(mapStateToProps, mapDispatchToProps)(TrangChu);

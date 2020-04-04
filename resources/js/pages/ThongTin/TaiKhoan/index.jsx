import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as menus from "../../../constants/SideMenus";
import ListForm from "../../../components/Includes/ListForm";
import FormItem from "./FormItem";

class List extends PureComponent {
    componentDidMount() {
        this.props.onChangeMenu(menus.TT_TAI_KHOAN);
        this.props.onChangeTitle("Tài khoản");
    }

    /**
     * Hàm render
     */
    render() {
        const columns = [
            {
                title: "Ký hiệu",
                dataIndex: "ky_hieu",
                optFind: true,
            },
            {
                title: "Tên tài khoản",
                dataIndex: "mo_ta",
                optFind: true,
            },
            {
                title: "Số dư ban đầu",
                dataIndex: "so_du_ky_truoc",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
            },
            {
                title: "Ngày tạo",
                dataIndex: "ngay_tao"
            },
            {
                title: "Ghi chú",
                dataIndex: "ghi_chu",
                ellipsis: true,
            },
        ];

        return (
            <ListForm
                url="tai-khoan"
                columns={columns}
                selectable={true}
                insertable={true}
                editable={true}
                deleteable={true}
                primaryKey="id"
                tableSize={{ x: 600 }}
                formTemplate={<FormItem />}
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
export default connect(mapStatetoProps, mapDispatchToProps)(List);

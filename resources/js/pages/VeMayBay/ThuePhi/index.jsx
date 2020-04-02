import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as menus from "../../../constants/SideMenus";
import ListForm from "../../../components/Includes/ListForm";
import { Checkbox } from "antd";

class List extends PureComponent {
    componentDidMount() {
        this.props.onChangeMenu(menus.VMB_THUE_PHI);
        this.props.onChangeTitle("Thuế phí");
    }

    /**
     * Hàm render
     */
    render() {
        const columns = [
            {
                title: "Loại phí",
                dataIndex: "loai_phi",
                optFind: true
            },
            {
                title: "Mức phí",
                dataIndex: "muc_phi",
                render: number =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND"
                    }).format(number)
            },
            {
                title: "Ghi chú",
                dataIndex: "ghi_chu",
                ellipsis: true
            }
        ];

        return (
            <ListForm
                url="thue-phi"
                columns={columns}
                selectable={false}
                addNew={false}
                editable={true}
                deleteable={false}
                primaryKey="loai_phi"
                formTemplate={<div>Sửa thuế phí</div>}
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

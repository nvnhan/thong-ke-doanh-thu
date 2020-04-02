import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as menus from "../../../constants/SideMenus";
import ListForm from "../../Includes/ListForm";
import { Checkbox } from "antd";

class List extends PureComponent {
    componentDidMount() {
        this.props.onChangeMenu(menus.VMB_HANH_LY);
        this.props.onChangeTitle("Hành lý");
    }

    /**
     * Hàm render
     */
    render() {
        const columns = [
            {
                title: "Loại hành lý",
                dataIndex: "hanh_ly",
                optFind: true
            },
            {
                title: "Hãng bay",
                dataIndex: "hang_bay",
                optFind: true
            },
            {
                title: "Mức phí",
                dataIndex: "phi",
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
                url="phi-hanh-ly"
                columns={columns}
                selectable={true}
                addNew={true}
                editable={true}
                deleteable={true}
                primaryKey="hanh_ly"
                scroll={{x : 600}}
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

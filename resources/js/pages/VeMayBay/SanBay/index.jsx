import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as menus from "../../../constants/SideMenus";
import ListForm from "../../../components/Includes/ListForm";
import { Checkbox } from "antd";
import FormItem from "./FormItem";

class List extends PureComponent {
    componentDidMount() {
        this.props.onChangeMenu(menus.VMB_SAN_BAY);
        this.props.onChangeTitle("Sân bay");
    }

    /**
     * Hàm render
     */
    render() {
        const columns = [
            {
                title: "Mã sân bay",
                dataIndex: "ma_san_bay",
                optFind: true
            },
            {
                title: "Tên sân bay",
                dataIndex: "ten_san_bay",
                optFind: true
            },
            {
                title: "Khu vực",
                dataIndex: "phan_loai",
                optFilter: true,
            },
            {
                title: "Sân bay loại A",
                dataIndex: "loai_a",
                render: bol => <Checkbox checked={bol} />
            }
        ];

        return (
            <ListForm
                url="san-bay"
                columns={columns}
                selectable={true}
                insertable={true}
                editable={true}
                deleteable={true}
                primaryKey="id"
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

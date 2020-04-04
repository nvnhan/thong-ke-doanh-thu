import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as menus from "../../../constants/SideMenus";
import ListForm from "../../../components/Includes/ListForm";
import FormItem from "./FormItem";

class List extends PureComponent {
    componentDidMount() {
        this.props.onChangeMenu(menus.TT_KHACH_HANG);
        this.props.onChangeTitle("Khách hàng");
    }

    /**
     * Hàm render
     */
    render() {
        const columns = [
            {
                title: "Mã khách hàng",
                dataIndex: "ma_khach_hang",
                width: 120,
                optFind: true,
                fixed: "left",
            },
            {
                title: "Họ tên",
                dataIndex: "ho_ten",
                width: 120,
                optFind: true,
            },
            {
                title: "Phân loại",
                dataIndex: "phan_loai",
                width: 120,
                optFilter: true,
            },
            {
                title: "MST",
                dataIndex: "mst",
                width: 120,
            },
            {
                title: "SĐT",
                dataIndex: "sdt",
                width: 120,
            },
            {
                title: "Email",
                dataIndex: "email",
                width: 120,
            },
            {
                title: "Địa chỉ",
                dataIndex: "dia_chi",
                ellipsis: true,
                width: 120,
            },
            {
                title: "Mã đại lý",
                dataIndex: "ma_dai_ly",
                ellipsis: true,
                width: 120,
            },
            {
                title: "Số dư ban đầu",
                dataIndex: "so_du_ky_truoc",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
                width: 120,
            },
            {
                title: "Số tiền thu dư",
                dataIndex: "so_tien_thu_du",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
                width: 120,
            },
            {
                title: "Phí VN",
                dataIndex: "phi_vn",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
                width: 120,
            },
            {
                title: "Phí VJ",
                dataIndex: "phi_vj",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
                width: 120,
            },
            {
                title: "Phí Jets",
                dataIndex: "phi_jets",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
                width: 120,
            },
            {
                title: "Phí BB",
                dataIndex: "phi_bb",
                render: (number) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(number),
                width: 120,
            },
            {
                title: "Ngày nhắc",
                dataIndex: "ngay_nhac",
                width: 120,
            },
            {
                title: "Ngày tạo",
                dataIndex: "ngay_tao",
                width: 120,
            },
            {
                title: "Ghi chú",
                dataIndex: "ghi_chu",
                width: 150,
                ellipsis: true,
            },
        ];

        return (
            <ListForm
                url="khach-hang"
                columns={columns}
                modalWidth="1100px"
                selectable={true}
                insertable={true}
                editable={true}
                deleteable={true}
                primaryKey="id"
                tableSize={{ x: 1000 }}
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

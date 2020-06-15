import { Checkbox } from "antd";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

class List extends PureComponent {
    render() {
        const columns = [
            {
                title: "Tài khoản",
                dataIndex: "username",
                optFind: true,
                width: 90
            },
            {
                title: "Họ tên",
                dataIndex: "ho_ten",
                optFind: true,
                width: 110
            },
            {
                title: "SĐT",
                dataIndex: "sdt",
                width: 90
            },
            {
                title: "Email",
                dataIndex: "email",
                ellipsis: true,
                width: 90
            },
            {
                title: "Địa chỉ",
                dataIndex: "dia_chi",
                ellipsis: true,
                width: 120
            },
            {
                title: "Ngày hết hạn",
                dataIndex: "ngay_het_han",
                width: 90
            },
            {
                title: "Quyền",
                dataIndex: "quyen",
                optFilter: true,
                width: 90
            },
            {
                title: "Tour - Visa",
                dataIndex: "tour_visa",
                render: bol => <Checkbox checked={bol} />,
                width: 75
            },
            {
                title: "Bán hàng",
                dataIndex: "ban_hang",
                render: bol => <Checkbox checked={bol} />,
                width: 75
            },
            {
                title: "Hoạt động",
                dataIndex: "actived",
                render: bol => <Checkbox checked={bol} />,
                width: 75
            },
            {
                title: "Ngày tạo",
                dataIndex: "created_at",
                width: 80
            }
        ];

        return (
            <ListForm
                url="nhan-vien"
                selectable={false}
                columns={columns}
                tableSize={{ x: 1100 }}
                modalWidth={800}
                formTemplate={
                    <FormItem phanQuyen={this.props.authUser.admin} />
                }
                formInitialValues={{ phan_quyen: 0, actived: true }}
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
        authUser: state.authUser
    };
};
/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, null)(List);

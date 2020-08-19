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
                title: "Đại lý",
                dataIndex: "dai_ly",
                ellipsis: true,
                width: 110
            },
            {
                title: "SĐT",
                dataIndex: "sdt",
                width: 90
            },
            {
                title: "Địa chỉ",
                dataIndex: "dia_chi",
                ellipsis: true,
                width: 120
            },
            {
                title: "Phân quyền",
                dataIndex: "quyen",
                optFilter: true,
                width: 80
            },
            {
                title: "Tour - Visa",
                dataIndex: "tour_visa",
                render: bol => <Checkbox checked={bol} />,
                width: 70
            },
            {
                title: "Bán hàng",
                dataIndex: "ban_hang",
                render: bol => <Checkbox checked={bol} />,
                width: 70
            },
            {
                title: "Hoạt động",
                dataIndex: "actived",
                render: bol => <Checkbox checked={bol} />,
                width: 70
            }
        ];

        const expandedRowRender = record => (
            <ul style={{ margin: 0 }}>
                <li>Ngày đăng nhập cuối: {record.ngay_dang_nhap}</li>
                <li>Tổng số ngày đăng nhập: {record.so_ngay_dang_nhap}</li>
                <li>Ngày tạo tài khoản: {record.created_at}</li>
            </ul>
        );

        return (
            <ListForm
                url="nhan-vien"
                selectable={false}
                columns={columns}
                tableSize={{ x: 1100 }}
                modalWidth={800}
                formTemplate={
                    <FormItem
                        phanQuyen={this.props.authUser.admin}
                        banHang={
                            this.props.authUser.admin ||
                            this.props.authUser.ban_hang
                        }
                        tourVisa={
                            this.props.authUser.admin ||
                            this.props.authUser.tour_visa
                        }
                    />
                }
                expandedRowRender={expandedRowRender}
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

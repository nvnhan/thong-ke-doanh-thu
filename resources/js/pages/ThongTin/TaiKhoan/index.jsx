import React, { PureComponent } from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

class List extends PureComponent {
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

export default List;
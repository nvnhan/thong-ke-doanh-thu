import { Checkbox } from "antd";
import React from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(() => {
    const columns = [
        {
            title: "Tên tài khoản",
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
            width: 100
        },
        {
            title: "Địa chỉ",
            dataIndex: "dia_chi",
            width: 130
        },
        {
            title: "Ngày hết hạn",
            dataIndex: "ngay_het_han",
            width: 100
        },
        {
            title: "Admin",
            dataIndex: "admin",
            render: bol => <Checkbox checked={bol} />,
            width: 80
        },
        {
            title: "Hoạt động",
            dataIndex: "actived",
            render: bol => <Checkbox checked={bol} />,
            width: 80
        },
        {
            title: "Ngày tạo",
            dataIndex: "created_at",
            width: 100
        }
    ];

    return (
        <ListForm
            url="nhan-vien"
            insertable={false}
            selectable={false}
            columns={columns}
            tableSize={{ x: 800 }}
            formTemplate={<FormItem />}
        />
    );
});

export default List;

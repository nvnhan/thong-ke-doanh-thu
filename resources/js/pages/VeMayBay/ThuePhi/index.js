import React from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(() => {
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
            insertable={false}
            deleteable={false}
            formTemplate={<FormItem />}
        />
    );
});

export default List;

import React from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";
import { vndFormater } from "../../../utils";

const List = React.memo(() => {
    const columns = [
        {
            title: "Loại hành lý",
            dataIndex: "hanh_ly",
            optFind: true,
            width: 100
        },
        {
            title: "Hãng bay",
            dataIndex: "hang_bay",
            optFilter: true,
            width: 80
        },
        {
            title: "Mức phí",
            dataIndex: "muc_phi",
            render: number => vndFormater.format(number),
            width: 80
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 100
        }
    ];

    return (
        <ListForm
            url="phi-hanh-ly"
            columns={columns}
            tableSize={{ x: 600 }}
            formTemplate={<FormItem />}
            formInitialValues={{ muc_phi: 100000 }}
        />
    );
});

export default List;

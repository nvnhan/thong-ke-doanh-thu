import { Checkbox } from "antd";
import React from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(() => {
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
            optFilter: true
        },
        {
            title: "Sân bay loại A",
            dataIndex: "loai_a",
            render: bol => <Checkbox checked={bol} />
        }
    ];

    return (
        <ListForm url="san-bay" columns={columns} formTemplate={<FormItem />} />
    );
});

export default List;

import { Checkbox } from "antd";
import React from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(() => {
    const columns = [
        {
            title: "Mã sân bay",
            dataIndex: "ma_san_bay",
            optFind: true,
            width: 100
        },
        {
            title: "Tên sân bay",
            dataIndex: "ten_san_bay",
            optFind: true,
            width: 140
        },
        {
            title: "Khu vực",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 110
        },
        {
            title: "Sân bay loại A",
            dataIndex: "loai_a",
            render: bol => <Checkbox checked={bol} />,
            width: 90
        }
    ];

    return (
        <ListForm url="san-bay" columns={columns} formTemplate={<FormItem />} />
    );
});

export default List;

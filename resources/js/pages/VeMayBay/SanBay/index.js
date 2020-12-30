import Checkbox from "antd/lib/checkbox/index";
import React from "react";
import { useDispatch } from "react-redux";
import { setSanBayList } from "../../../actions";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(() => {
    const dispatch = useDispatch();

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

    // Update store when change data
    const onChangeData = data => dispatch(setSanBayList(data));

    return (
        <ListForm
            url="san-bay"
            columns={columns}
            formTemplate={<FormItem />}
            onChangeData={onChangeData}
        />
    );
});

export default List;

import React from "react";
import DataTable from "../../../components/ListForm/DataTable";
import { vndFormater } from "../../../utils";

const form = React.memo(props => {
    const doiTuong = props.doiTuong || [];
    const { selectedRowKeys, onChangeSelect } = props;

    const myColumns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_thang",
            width: 90
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            width: 90
        },
        {
            title: "Nội dung",
            dataIndex: "noi_dung",
            width: 250,
            optFind: true
        },
        {
            title: "Số tiền",
            dataIndex: "so_tien",
            render: number => vndFormater.format(number),
            width: 110
        }
    ];

    return (
        <DataTable
            selectedRowKeys={selectedRowKeys}
            onChangeSelect={onChangeSelect}
            data={doiTuong}
            columns={myColumns}
            primaryKey="id"
            selectable
            tableSize={{ x: 400 }}
        />
    );
});

export default form;

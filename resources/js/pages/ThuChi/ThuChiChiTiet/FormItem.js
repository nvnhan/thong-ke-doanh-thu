import Table from "antd/lib/table/index";
import React from "react";
import { vndFormater } from "../../../utils";

const form = React.memo(props => {
    const doiTuong = props.doiTuong || [];
    const { selectedRowKeys, onChangeSelect } = props;

    const rowSelection = {
        selectedRowKeys,
        onChange: onChangeSelect,
        hideDefaultSelections: true,
        columnWidth: 43,
        selections: [
            {
                key: "invert_all",
                text: "Bỏ chọn tất cả",
                onSelect: () => onChangeSelect([])
            }
        ]
    };

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
            width: 250
        },
        {
            title: "Số tiền",
            dataIndex: "so_tien",
            render: number => vndFormater.format(number),
            width: 110
        }
    ];

    return (
        <Table
            rowSelection={rowSelection}
            dataSource={doiTuong}
            columns={myColumns}
            rowKey={row => row["id"]}
        />
    );
});

export default form;

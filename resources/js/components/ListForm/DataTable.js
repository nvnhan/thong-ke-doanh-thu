import React, { Component } from "react";
import { Table } from "antd";

const DataTable = React.memo((props) => {
    const { selectedRowKeys } = props;

    let scroll = props.tableSize;
    if (!scroll) scroll = { x: 500 };

    const rowSelection = {
        selectedRowKeys,
        onChange: props.onChangeSelect,
    };
    return (
        <Table
            dataSource={props.data}
            columns={props.columns}
            loading={props.isLoading}
            rowKey={(row) => row[props.primaryKey]}
            rowSelection={props.selectable ? rowSelection : null}
            locale={{
                filterConfirm: "Lọc",
                filterReset: "Hủy",
                emptyText: "Không có dữ liệu",
            }}
            scroll={props.scroll}
        />
    );
});

export default DataTable;

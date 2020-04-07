import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined
} from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";

const DataTable = React.memo(props => {
    const {
        selectedRowKeys,
        data,
        isLoading,
        columns,
        selectable,
        editable,
        deleteable,
        primaryKey,
        tableSize,
        onDelete,
        handleEdit,
        onChangeSelect
    } = props;
    const [myColumns, setMyColumns] = useState([]);
    let searchText = "";
    let searchedColumn = "";
    let searchInput;

    useEffect(() => {
        if (!_.isEmpty(data)) setMyColumns(calColumns());
    }, [isLoading]); // Chỉ chạy khi data thay đổi

    /**
     * Tính các cột cần thiết
     */
    const calColumns = () => {
        let cols = columns.map(column => getColumn(column, data));
        if (editable || deleteable) cols.push(addActionColumn());
        return cols;
    };
    /**
     * Thêm cột chức năng cho table
     */
    const addActionColumn = otherActions => ({
        title: "",
        key: "action",
        fixed: "right",
        align: "center",
        width: 100,
        render: (text, record) => (
            <React.Fragment>
                {editable ? (
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                        title="Chỉnh sửa"
                    ></Button>
                ) : (
                    ""
                )}
                {deleteable ? (
                    <Button
                        onClick={() => onDelete(record[primaryKey])}
                        danger
                        type="link"
                        icon={<DeleteOutlined />}
                        title="Xóa"
                    ></Button>
                ) : (
                    ""
                )}
                {!_.isEmpty(otherActions)
                    ? otherActions.map(act => (
                          <Button
                              onClick={() => act.onClick(record)}
                              type="link"
                              icon={act.icon}
                              title={act.title}
                              color={act.color}
                          ></Button>
                      ))
                    : ""}
            </React.Fragment>
        )
    });

    /**
     * Create column for ant's table
     */
    const getColumn = (column, data) => {
        if (column.optFilter) {
            // Lọc dữ liệu và mô tả các cột dữ liệu
            const objs = [...new Set(data.map(x => x[column.dataIndex]))];
            let filters = objs.map(el => {
                return {
                    text: el,
                    value: el
                };
            });
            Object.assign(column, {
                filters,
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) =>
                    record[column.dataIndex].indexOf(value) === 0
            });
        } else if (column.optFind) {
            Object.assign(column, {
                ...getColumnSearchProps(column.dataIndex)
            });
        }
        return column;
    };

    /**
     * Thao tác tìm kiếm trên cột
     */
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder="Tìm kiếm..."
                    value={selectedKeys[0]}
                    onChange={e =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        width: 188,
                        marginBottom: 8,
                        display: "block"
                    }}
                />
                <Button
                    type="primary"
                    onClick={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    icon={<SearchOutlined />}
                    size="small"
                    style={{
                        width: 90,
                        marginRight: 8
                    }}
                >
                    Tìm
                </Button>
                <Button
                    onClick={() => handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Hủy
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            )
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        searchedColumn = dataIndex;
        searchText = selectedKeys[0];
    };

    const handleReset = clearFilters => {
        clearFilters();
        searchedColumn = "";
        searchText = "";
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onChangeSelect
    };

    return (
        <Table
            dataSource={data}
            columns={myColumns}
            loading={isLoading}
            rowKey={row => row[props.primaryKey]}
            rowSelection={selectable ? rowSelection : null}
            locale={{
                filterConfirm: "Lọc",
                filterReset: "Hủy",
                emptyText: "Không có dữ liệu"
            }}
            scroll={tableSize}
        />
    );
});

export default DataTable;

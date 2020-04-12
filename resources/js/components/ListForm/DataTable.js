import {
    DeleteOutlined,
    EditOutlined,
    MenuOutlined,
    SearchOutlined
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Table } from "antd";
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
        onChangeSelect,
        otherActions,
        expandedRowRender,
        renderFooter,
        renderSummary,
    } = props;
    const [myColumns, setMyColumns] = useState([]);
    let searchText = "";
    let searchedColumn = "";
    let searchInput;

    // Chỉ chạy khi load lại data từ List Form:
    // + mở form (cho dù có dữ liệu hay ko)
    // + set filter
    // Ko áp dụng khi thêm mới hoặc chỉnh sửa data => Phần Lọc dữ liệu cột KHÔNG ĐƯỢC TÍNH LẠI
    useEffect(() => {
        // if (!_.isEmpty(data))
        setMyColumns(calColumns());
    }, [isLoading]);

    /**
     * Tính các cột cần thiết
     */
    const calColumns = () => {
        let cols = columns.map(column => getColumn(column, data));
        if (editable || deleteable || !_.isEmpty(otherActions))
            cols.push(addActionColumn());
        return cols;
    };

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
     * Thêm cột chức năng cho table
     */
    const addActionColumn = () => ({
        title: "",
        key: "action",
        fixed: "right",
        align: "center",
        width: 72,
        render: (text, record) => (
            <Dropdown overlay={layAction(record)}>
                <Button>
                    <MenuOutlined />
                </Button>
            </Dropdown>
        )
    });

    const layAction = record => (
        <Menu>
            {!_.isEmpty(otherActions) &&
                otherActions.map(act => (
                    <Menu.Item
                        key={act.key}
                        onClick={() => act.onClick(record)}
                        style={{
                            color: act.color
                        }}
                    >
                        {act.icon} {act.title}
                    </Menu.Item>
                ))}
            {editable && (
                <Menu.Item
                    key="edit"
                    onClick={() => handleEdit(record)}
                    className="color-link"
                >
                    <EditOutlined /> Chỉnh sửa
                </Menu.Item>
            )}
            {deleteable && (
                <Menu.Item
                    key="delete"
                    onClick={() => onDelete(record[primaryKey])}
                    className="color-danger"
                >
                    <DeleteOutlined /> Xóa
                </Menu.Item>
            )}
        </Menu>
    );

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
        onChange: onChangeSelect,
        hideDefaultSelections: true,
        columnWidth: 50,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
                key: "invert_all",
                text: "Bỏ chọn tất cả",
                onSelect: () => onChangeSelect([])
            }
        ]
    };

    const getExpanded = () => {
        if (expandedRowRender)
            return {
                expandedRowRender: record => expandedRowRender(record)
            };
        return null;
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
                emptyText: "Không có dữ liệu",
                cancelSort: "CLick để Bỏ sắp xếp",
                triggerAsc: "Click để Sắp xếp tăng dần",
                triggerDesc: "Click để Sắp xếp giảm dần",
                selectionAll: "Chọn tất cả dữ liệu",
                selectInvert: "Đảo chọn trang hiện tại"
            }}
            scroll={tableSize}
            expandable={getExpanded()}
            footer={renderFooter ? () => renderFooter(data) : undefined}
            summary={renderSummary ? () => renderSummary(data) : undefined}
        />
    );
});

export default DataTable;

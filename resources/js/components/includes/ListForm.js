import React, { PureComponent } from "react";
import axios from "axios";
import { Table, Input, Button, Modal } from "antd";
import Highlighter from "react-highlight-words";
import {
    SearchOutlined,
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined
} from "@ant-design/icons";
const { confirm } = Modal;

class ListForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            searchText: "",
            searchedColumn: "",
            modalVisible: false,
            formSubmiting: false,
            selectedRowKeys: [],
            currentRecord: undefined
        };
        this.isComponentMounted = false;
    }

    componentDidMount() {
        this.isComponentMounted = true;
        const { url } = this.props;

        axios.get("/api/" + url).then(response => {
            if (this.isComponentMounted && response.data.success)
                this.setState({
                    data: response.data.data,
                    isLoading: false
                });
        });
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    /**
     * Thao tác tìm kiếm trên cột
     */
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder="Tìm kiếm..."
                    value={selectedKeys[0]}
                    onChange={e =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        this.handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{ width: 188, marginBottom: 8, display: "block" }}
                />
                <Button
                    type="primary"
                    onClick={() =>
                        this.handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Tìm
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Hủy
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <SearchOutlined
                style={{ color: filtered ? "#1890ff" : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            )
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: "", selectedRowKeys: [] });
    };

    /**
     * Show modal Thêm mới, Sửa
     */
    showModal = () => {
        this.setState({
            modalVisible: true
        });
        //TODO: Render current record
    };

    handleOk = () => {
        this.setState({ formSubmiting: true });
        //TODO: Submit form
        setTimeout(() => {
            this.setState({ formSubmiting: false, modalVisible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ modalVisible: false });
    };

    onAddNew = () => {
        this.setState({ currentRecord: undefined });
        this.showModal();
    };

    onEdit = record => {
        this.setState({ currentRecord: record });
        this.showModal();
    };

    onDelete = id => {
        confirm({
            title: "Bạn muốn xóa mục này?",
            icon: <ExclamationCircleOutlined />,
            content: "Thao tác không thể khôi phục",
            okText: "Đồng ý",
            okType: "danger",
            cancelText: "Không",
            onOk() {
                //TODO: Submit delete
                console.log("List -> id", id);
            }
        });
        // axios
        //     .post(`/api/posts/delete/${id}`)
        //     .then(response => {
        //         alert("Xoa thanh cong");
        //         this.setState({
        //             data: response.data
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    onMultiDelete = () => {
        const { selectedRowKeys } = this.state;
        confirm({
            title: "Bạn muốn xóa những mục này?",
            icon: <ExclamationCircleOutlined />,
            content: "Tất cả " + selectedRowKeys.length + " mục",
            okText: "Đồng ý",
            okType: "danger",
            cancelText: "Không",
            onOk() {
                //TODO: Submit multi delete
                console.log(
                    "List -> onMultiDelete -> selectedRowKeys",
                    selectedRowKeys
                );
            }
        });
    };

    getColumn = (column, data) => {
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
                    record.phan_loai.indexOf(value) === 0
            });
        }
        if (column.optFind) {
            Object.assign(column, {
                ...this.getColumnSearchProps(column.dataIndex)
            });
        }
        return column;
    };

    /**
     * Hàm render
     */
    render() {
        const {
            data,
            isLoading,
            modalVisible,
            formSubmiting,
            selectedRowKeys
        } = this.state;
        const {
            selectable,
            addNew,
            editable,
            deleteable,
            columns,
            primaryKey,
            formTemplate
        } = this.props;
        let scroll = this.props.scroll;
        if (!scroll) scroll = { x: 500 };

        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys => this.setState({ selectedRowKeys })
        };

        const col = columns.map(column => this.getColumn(column, data));
        if (editable || deleteable)
            col.push({
                title: "",
                key: "action",
                fixed: "right",
                align: "center",
                render: (text, record) => (
                    <span>
                        {editable ? (
                            <Button
                                type="link"
                                icon={<EditOutlined />}
                                onClick={() => this.onEdit(record)}
                            ></Button>
                        ) : (
                            ""
                        )}
                        {deleteable ? (
                            <Button
                                onClick={() =>
                                    this.onDelete(record[primaryKey])
                                }
                                danger
                                type="link"
                                icon={<DeleteOutlined />}
                            ></Button>
                        ) : (
                            ""
                        )}
                    </span>
                )
            });

        return (
            <div>
                {addNew ? (
                    <Button
                        type="primary"
                        onClick={this.onAddNew}
                        style={{ margin: 10 }}
                    >
                        Thêm mới
                    </Button>
                ) : (
                    ""
                )}
                {selectable && deleteable ? (
                    <div style={{ display: "inline" }}>
                        {selectedRowKeys.length > 0 ? (
                            <Button
                                type="danger"
                                onClick={this.onMultiDelete}
                                style={{ margin: 10, marginLeft: 0 }}
                            >
                                Xóa {selectedRowKeys.length} mục đã chọn
                            </Button>
                        ) : (
                            ""
                        )}
                        <Button
                            type="link"
                            onClick={() => {
                                this.setState({
                                    selectedRowKeys: data.map(
                                        item => item[primaryKey]
                                    )
                                });
                            }}
                            style={{ margin: 10, marginLeft: 0 }}
                        >
                            Chọn tất cả
                        </Button>
                        <Button
                            type="link"
                            danger
                            onClick={() => {
                                this.setState({
                                    selectedRowKeys: []
                                });
                            }}
                            style={{ margin: 10, marginLeft: 0 }}
                        >
                            Bỏ chọn tất cả
                        </Button>
                    </div>
                ) : (
                    ""
                )}

                <Table
                    dataSource={data}
                    columns={col}
                    loading={isLoading}
                    rowKey={row => row[primaryKey]}
                    rowSelection={selectable ? rowSelection : null}
                    locale={{
                        filterConfirm: "Lọc",
                        filterReset: "Hủy",
                        emptyText: "Không có dữ liệu"
                    }}
                    scroll={scroll}
                />

                <Modal
                    visible={modalVisible}
                    title="Chi tiết"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Hủy
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            loading={formSubmiting}
                            onClick={this.handleOk}
                        >
                            Đồng ý
                        </Button>
                    ]}
                >
                    {formTemplate}
                </Modal>
            </div>
        );
    }
}

export default ListForm;

import React, { PureComponent } from "react";
import axios from "axios";
import { Table, Input, Button, Modal, Form, message } from "antd";
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
            selectedRowKeys: []
        };
        this.isComponentMounted = false;
        this.formRef = React.createRef();
        this.currentRecord = undefined;
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
     * Check liệu dữ liệu người dùng sửa có thay đổi gì ko?
     */
    isChangeData = (record, data) => {
        let key1 = Object.keys(record);
        let key2 = Object.keys(data);
        let isChanged = false;
        for (const k of key1) {
            if (key2.indexOf(k) >= 0 && record[k] !== data[k]) {
                isChanged = true;
                break;
            }
        }
        return isChanged;
    };

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
        console.log(
            "ListForm -> showModal -> this.formRef.current",
            this.formRef.current
        );
        if (this.formRef && this.formRef.current) {
            this.formRef.current.resetFields();
            if (this.currentRecord !== undefined)
                this.formRef.current.setFieldsValue(this.currentRecord);
        }
        this.setState({
            modalVisible: true
        });
        //TODO: Show field immidate
    };

    handleOk = () => {
        this.formRef.current
            .validateFields()
            .then(value => {
                this.setState({ formSubmiting: true });
                // Thêm mới
                if (this.currentRecord === undefined) {
                    this.onAdd(value);
                } else if (this.isChangeData(this.currentRecord, value)) {
                    // Chỉnh sửa
                    this.onUpdate(value);
                }
                // Tắt loading & modal
                this.setState({ formSubmiting: false, modalVisible: false });
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleCancel = () => {
        this.setState({ modalVisible: false });
    };

    onAdd = value => {
        const { url } = this.props;
        axios
            .post(`/api/${url}`, value)
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        data: [...this.state.data, response.data.data] // Thêm object vào list lấy từ state
                    });
                    message.info(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    onUpdate = value => {
        const { url, primaryKey } = this.props;
        const { data } = this.state;
        axios
            .put(`/api/${url}/${this.currentRecord[primaryKey]}`, value)
            .then(response => {
                if (response.data.success) {
                    let newData = [];
                    Object.assign(
                        newData,
                        data.map(el =>
                            el[primaryKey] === this.currentRecord[primaryKey]
                                ? response.data.data
                                : el
                        )
                    );
                    this.setState({
                        data: newData
                    });
                    message.info(response.data.message);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Xử lý sự kiện
     */
    handleAddNew = () => {
        this.currentRecord = undefined;
        this.showModal();
    };

    handleEdit = record => {
        this.currentRecord = record;
        this.showModal();
    };

    /**
     * Handle sự kiện xóa
     */
    onDelete = id => {
        const { url, primaryKey } = this.props;
        const { data } = this.state;
        confirm({
            title: "Bạn muốn xóa mục này?",
            icon: <ExclamationCircleOutlined />,
            content: "Thao tác không thể khôi phục",
            okText: "Đồng ý",
            okType: "danger",
            cancelText: "Không",
            onOk: () => {
                axios
                    .delete(`/api/${url}/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            this.setState({
                                data: data.filter(
                                    item => item[primaryKey] !== id
                                )
                            });
                            message.info(response.data.message);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };

    onMultiDelete = () => {
        const { selectedRowKeys, data } = this.state;
        const { url, primaryKey } = this.props;
        confirm({
            title: "Bạn muốn xóa những mục này?",
            icon: <ExclamationCircleOutlined />,
            content: "Tất cả " + selectedRowKeys.length + " mục",
            okText: "Đồng ý",
            okType: "danger",
            cancelText: "Không",
            onOk: () => {
                axios
                    .delete(`/api/${url}/deletes`, {
                        params: { objects: selectedRowKeys.join("|") }
                    })
                    .then(response => {
                        if (response.data.success) {
                            this.setState({
                                data: data.filter(
                                    item =>
                                        selectedRowKeys.indexOf(
                                            item[primaryKey]
                                        ) === -1
                                ),
                                selectedRowKeys: []
                            });
                            message.info(response.data.message);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };

    /**
     * Create column for ant's table
     */
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
            insertable,
            editable,
            deleteable,
            columns,
            primaryKey,
            formTemplate,
            formInitialValues
        } = this.props;
        let scroll = this.props.tableSize;
        if (!scroll) scroll = { x: 500 };

        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys => this.setState({ selectedRowKeys })
        };

        let col = columns.map(column => this.getColumn(column, data));
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
                                onClick={() => this.handleEdit(record)}
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
                {insertable ? (
                    <Button
                        type="primary"
                        onClick={this.handleAddNew}
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
                    <Form
                        ref={this.formRef}
                        initialValues={formInitialValues}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        {formTemplate}
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default ListForm;

import React, { PureComponent } from "react";
import axios from "axios";
import { Input, Button, Modal, message } from "antd";
import Highlighter from "react-highlight-words";
import {
    SearchOutlined,
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
const { confirm } = Modal;
import moment from "moment";
import ToolsButton from "./ToolsButton";
import DataTable from "./DataTable";
import ModalConfirm from "./ModalConfirm";

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
            currentRecord: undefined,
        };
        this.columns = [];
        this.isComponentMounted = false;
    }

    componentDidMount() {
        this.isComponentMounted = true;
        const { url, columns } = this.props;

        axios
            .get("/api/" + url)
            .then((response) => {
                if (this.isComponentMounted && response.data.success) {
                    /**
                     * Tính các cột cần thiết
                     * Chạy 1 lần duy nhất
                     */
                    this.columns = columns.map((column) =>
                        this.getColumn(column, response.data.data)
                    );
                    this.columns.push(this.addColumn());
                    this.setState({
                        data: response.data.data,
                        isLoading: false,
                    });
                    if (this.props.onChangeData)
                        this.props.onChangeData(response.data.data);
                }
            })
            .catch((error) => console.log(error));
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    addColumn = () => {
        const { editable, deleteable, primaryKey } = this.props;
        if (editable || deleteable)
            return {
                title: "",
                key: "action",
                fixed: "right",
                align: "center",
                width: 100,
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
                ),
            };
        return {};
    };

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
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node) => {
                        this.searchInput = node;
                    }}
                    placeholder="Tìm kiếm..."
                    value={selectedKeys[0]}
                    onChange={(e) =>
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
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{ color: filtered ? "#1890ff" : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: "", selectedRowKeys: [] });
    };

    /**
     * Show modal Thêm mới, Sửa
     */
    handleOk = (values) => {
        const { currentRecord } = this.state;
        this.setState({ formSubmiting: true });
        // Parse các ô ngày tháng
        for (let [key, value] of Object.entries(values)) {
            if (value !== null && value !== undefined)
                if (typeof value === "object")
                    values[key] = value.format("YYYY-MM-DD HH:mm:ss");
                else if (
                    typeof value === "string" &&
                    value.match(/(.*?):(.*?)\/(.*?)\//g)
                )
                    values[key] = moment(value, "HH:mm DD/MM/YYYY").format(
                        "YYYY-MM-DD HH:mm:ss"
                    );
        }
        // Thêm mới
        if (currentRecord === undefined) {
            this.onAdd(values);
        } else if (this.isChangeData(currentRecord, values)) {
            // Chỉnh sửa
            this.onUpdate(values);
        }
        // Tắt loading & modal
        this.setState({
            formSubmiting: false,
            modalVisible: false,
        });
    };

    handleCancel = () => {
        this.setState({ modalVisible: false });
    };

    /**
     * Xử lý sự kiện
     */
    handleAddNew = () => {
        this.setState({
            currentRecord: undefined,
            modalVisible: true,
        });
    };

    handleEdit = (record) => {
        this.setState({
            modalVisible: true,
            currentRecord: record,
        });
    };

    handleSelectAll = () => {
        const { primaryKey } = this.props;
        const { data } = this.state;
        this.setState({
            selectedRowKeys: data.map((item) => item[primaryKey]),
        });
    };

    handleClearSelected = () => {
        this.setState({
            selectedRowKeys: [],
        });
    };

    handleSelectRow = (selectedRowKeys) => this.setState({ selectedRowKeys });

    onAdd = (value) => {
        const { url } = this.props;
        axios
            .post(`/api/${url}`, value)
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        data: [...this.state.data, response.data.data], // Thêm object vào list lấy từ state
                    });
                    message.info(response.data.message);
                    if (this.props.onChangeData)
                        this.props.onChangeData(this.state.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    onUpdate = (value) => {
        const { url, primaryKey } = this.props;
        const { data, currentRecord } = this.state;
        axios
            .put(`/api/${url}/${currentRecord[primaryKey]}`, value)
            .then((response) => {
                if (response.data.success) {
                    let newData = [];
                    Object.assign(
                        newData,
                        data.map((el) =>
                            el[primaryKey] === currentRecord[primaryKey]
                                ? response.data.data
                                : el
                        )
                    );
                    this.setState({
                        data: newData,
                    });
                    if (this.props.onChangeData) this.props.onChangeData(data);
                    message.info(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    /**
     * Handle sự kiện xóa
     */
    onDelete = (id) => {
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
                    .then((response) => {
                        if (response.data.success) {
                            this.setState({
                                data: data.filter(
                                    (item) => item[primaryKey] !== id
                                ),
                            });
                            message.info(response.data.message);
                            if (this.props.onChangeData)
                                this.props.onChangeData(this.state.data);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
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
                        params: { objects: selectedRowKeys.join("|") },
                    })
                    .then((response) => {
                        if (response.data.success) {
                            this.setState({
                                data: data.filter(
                                    (item) =>
                                        selectedRowKeys.indexOf(
                                            item[primaryKey]
                                        ) === -1
                                ),
                                selectedRowKeys: [],
                            });
                            if (this.props.onChangeData)
                                this.props.onChangeData(this.state.data);
                            message.info(response.data.message);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        });
    };

    /**
     * Create column for ant's table
     */
    getColumn = (column, data) => {
        if (column.optFilter) {
            // Lọc dữ liệu và mô tả các cột dữ liệu
            const objs = [...new Set(data.map((x) => x[column.dataIndex]))];
            let filters = objs.map((el) => {
                return {
                    text: el,
                    value: el,
                };
            });
            Object.assign(column, {
                filters,
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) =>
                    record[dataIndex].indexOf(value) === 0,
            });
        }
        if (column.optFind) {
            Object.assign(column, {
                ...this.getColumnSearchProps(column.dataIndex),
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
            selectedRowKeys,
            currentRecord,
        } = this.state;
        const {
            selectable,
            insertable,
            deleteable,
            primaryKey,
            formTemplate,
            formInitialValues,
            tableSize,
            modalWidth,
        } = this.props;

        return (
            <div>
                <ToolsButton
                    insertable={insertable}
                    selectable={selectable}
                    deleteable={deleteable}
                    handleAddNew={this.handleAddNew}
                    onMultiDelete={this.onMultiDelete}
                    selectedRowKeys={selectedRowKeys}
                    handleSelectAll={this.handleSelectAll}
                    handleClearSelected={this.handleClearSelected}
                />
                <DataTable
                    data={data}
                    columns={this.columns}
                    isLoading={isLoading}
                    primaryKey={primaryKey}
                    selectable={selectable}
                    selectedRowKeys={selectedRowKeys}
                    onChangeSelect={this.handleSelectRow}
                    scroll={tableSize}
                />
                <ModalConfirm
                    modalVisible={modalVisible}
                    modalWidth={modalWidth}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    formSubmiting={formSubmiting}
                    currentRecord={currentRecord}
                    formInitialValues={formInitialValues}
                    formTemplate={formTemplate}
                />
            </div>
        );
    }
}

export default ListForm;

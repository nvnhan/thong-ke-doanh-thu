import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../../actions";
import * as menus from "../../../constants/SideMenus";
import { Table, Checkbox, Input, Button, Modal } from "antd";
import Highlighter from "react-highlight-words";
import {
    SearchOutlined,
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined
} from "@ant-design/icons";
const { confirm } = Modal;

class List extends PureComponent {
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
        this.props.onChangeMenu(menus.VMB_SAN_BAY);
        this.props.onChangeTitle("Sân bay");

        axios.get("/api/san-bay").then(response => {
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
        const rowSelection = {
            selectedRowKeys,
            onChange: selectedRowKeys => this.setState({ selectedRowKeys })
        };

        // Lọc dữ liệu và mô tả các cột dữ liệu
        const phan_loai = [...new Set(data.map(x => x.phan_loai))];
        let filters = phan_loai.map(el => {
            return {
                text: el,
                value: el
            };
        });
        const columns = [
            {
                title: "Mã sân bay",
                dataIndex: "ma_san_bay",
                key: "msb",
                ...this.getColumnSearchProps("ma_san_bay")
            },
            {
                title: "Tên sân bay",
                dataIndex: "ten_san_bay",
                key: "tsb",
                ...this.getColumnSearchProps("ten_san_bay")
            },
            {
                title: "Khu vực",
                dataIndex: "phan_loai",
                key: "pl",
                filters,
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) =>
                    record.phan_loai.indexOf(value) === 0
            },
            {
                title: "Sân bay loại A",
                dataIndex: "loai_a",
                key: "la",
                render: text => <Checkbox checked={text === 1} />
            },
            {
                title: "Chức năng",
                key: "action",
                render: (text, record) => (
                    <span>
                        <Button
                            type="link"
                            icon={<EditOutlined />}
                            onClick={() => this.onEdit(record)}
                        ></Button>
                        <Button
                            onClick={() => this.onDelete(record.ma_san_bay)}
                            danger
                            type="link"
                            icon={<DeleteOutlined />}
                        ></Button>
                    </span>
                )
            }
        ];

        return (
            <div>
                <Button
                    type="primary"
                    onClick={this.onAddNew}
                    style={{ margin: 10 }}
                >
                    Thêm mới
                </Button>
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
                            selectedRowKeys: data.map(item => item.ma_san_bay)
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

                <Table
                    dataSource={data}
                    columns={columns}
                    loading={isLoading}
                    rowKey={row => row.ma_san_bay}
                    rowSelection={rowSelection}
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
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */
const mapStatetoProps = state => {
    return {};
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeMenu: menu => {
            dispatch(actions.changeMenu(menu));
        },
        onChangeTitle: title => {
            dispatch(actions.changeTitle(title));
        }
    };
};

/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */
export default connect(mapStatetoProps, mapDispatchToProps)(List);

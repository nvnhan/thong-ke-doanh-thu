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
import ListForm from "../../Includes/ListForm";
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
            currentRecord: undefined
        };
        this.isComponentMounted = false;
    }

    componentDidMount() {
        this.isComponentMounted = true;
        this.props.onChangeMenu(menus.VMB_THUE_PHI);
        this.props.onChangeTitle("Thuế phí");

        axios.get("/api/thue-phi").then(response => {
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
        this.setState({ searchText: "" });
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

    onEdit = record => {
        this.setState({ currentRecord: record });
        this.showModal();
    };

    /**
     * Hàm render
     */
    render() {
        const {
            data,
            isLoading,
            modalVisible,
            formSubmiting
        } = this.state;

        const columns = [
            {
                title: "Loại thuế",
                dataIndex: "loai_phi",
                key: "lp",
                ...this.getColumnSearchProps("loai_phi")
            },
            {
                title: "Mức phí",
                dataIndex: "muc_phi",
                key: "muc_phi",
                render: number =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND"
                    }).format(number)
            },
            {
                title: "Ghi chú",
                dataIndex: "ghi_chu",
                key: "ghi_chu"
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
                    </span>
                )
            }
        ];
        return (
            <div>
                <Table
                    dataSource={data}
                    columns={columns}
                    loading={isLoading}
                    rowKey={row => row.id}
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

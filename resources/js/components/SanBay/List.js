import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../actions";
import * as menus from "../../constants/SideMenus";
import { Table, Checkbox } from "antd";
import { Input, Button } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

class List extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            searchText: "",
            searchedColumn: ""
        };
        this.isComponentMounted = false;
    }

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

    componentDidMount() {
        this.isComponentMounted = true;
        this.props.onChangeMenu(menus.DM_SAN_BAY);
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

    deletePost = id => {
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

    render() {
        const { data, isLoading } = this.state;

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
            }
        ];
        return (
            <Table
                dataSource={data}
                columns={columns}
                loading={isLoading}
                rowKey={row => row.ma_san_bay}
            />
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

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { message, Modal } from "antd";
import moment from "moment";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import DataTable from "./DataTable";
import ModalConfirm from "./ModalConfirm";
import ToolsButton from "./ToolsButton";
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
        this.columns = [];
        this.isComponentMounted = false;
    }

    componentDidMount() {
        this.isComponentMounted = true;
        const { url } = this.props;

        axios
            .get("/api/" + url)
            .then(response => {
                if (this.isComponentMounted && response.data.success) {
                    this.setState({
                        data: response.data.data,
                        isLoading: false
                    });
                    if (this.props.onChangeData)
                        //  Tính lại AutoComplete (nhúng trong Modal form) cho 1 số form
                        this.props.onChangeData(response.data.data);
                }
            })
            .catch(error => console.log(error));
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
     * Show modal Thêm mới, Sửa
     */
    handleOk = values => {
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
            modalVisible: false
        });
    };

    handleCancel = () => {
        this.setState({ modalVisible: false });
    };

    /**
     * Xử lý sự kiện người dùng
     */
    handleAddNew = () => {
        this.setState({
            currentRecord: undefined,
            modalVisible: true
        });
    };

    handleEdit = record => {
        this.setState({
            modalVisible: true,
            currentRecord: record
        });
    };

    handleSelectAll = () => {
        const { primaryKey } = this.props;
        const { data } = this.state;
        this.setState({
            selectedRowKeys: data.map(item => item[primaryKey])
        });
    };

    handleClearSelected = () => {
        this.setState({
            selectedRowKeys: []
        });
    };

    /**
     * Thực thi các sự kiện
     */
    onChangeSelect = selectedRowKeys => this.setState({ selectedRowKeys });

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
                    if (this.props.onChangeData)
                        this.props.onChangeData(this.state.data);
                }
            })
            .catch(error => console.log(error));
    };

    onUpdate = value => {
        const { url, primaryKey } = this.props;
        const { data, currentRecord } = this.state;
        axios
            .put(`/api/${url}/${currentRecord[primaryKey]}`, value)
            .then(response => {
                if (response.data.success) {
                    let newData = [];
                    Object.assign(
                        newData,
                        data.map(el =>
                            el[primaryKey] === currentRecord[primaryKey]
                                ? response.data.data
                                : el
                        )
                    );
                    this.setState({
                        data: newData
                    });
                    if (this.props.onChangeData) this.props.onChangeData(data);
                    message.info(response.data.message);
                }
            })
            .catch(error => console.log(error));
    };

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
                            if (this.props.onChangeData)
                                this.props.onChangeData(this.state.data);
                        }
                    })
                    .catch(error => console.log(error));
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
                            if (this.props.onChangeData)
                                this.props.onChangeData(this.state.data);
                            message.info(response.data.message);
                        }
                    })
                    .catch(error => console.log(error));
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
            selectedRowKeys,
            currentRecord
        } = this.state;
        const {
            columns,
            selectable,
            insertable,
            editable,
            deleteable,
            primaryKey,
            formTemplate,
            formInitialValues,
            tableSize,
            modalWidth
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
                    columns={columns}
                    isLoading={isLoading}
                    primaryKey={primaryKey}
                    selectable={selectable}
                    editable={editable}
                    selectedRowKeys={selectedRowKeys}
                    onChangeSelect={this.onChangeSelect}
                    scroll={tableSize}
                    handleEdit={this.handleEdit}
                    onDelete={this.onDelete}
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

ListForm.propTypes = {
    url: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    formTemplate: PropTypes.node.isRequired,
    onChangeData: PropTypes.func,
    selectable: PropTypes.bool,
    insertable: PropTypes.bool,
    editable: PropTypes.bool,
    deleteable: PropTypes.bool,
    primaryKey: PropTypes.string,
    tableSize: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    modalWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    formInitialValues: PropTypes.object,
    otherActions: PropTypes.object,
    otherButtons: PropTypes.object
};
// Specifies the default values for props:
ListForm.defaultProps = {
    selectable: true,
    insertable: true,
    editable: true,
    deleteable: true,
    primaryKey: "id",
    tableSize: {
        x: 500
    }
};

export default ListForm;

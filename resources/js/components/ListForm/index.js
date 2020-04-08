import { ExclamationCircleOutlined } from "@ant-design/icons";
import { message, Modal } from "antd";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import ModalConfirm from "./ModalConfirm";
import ToolsButton from "./ToolsButton";
const { confirm } = Modal;

function useMergeState(initialState) {
    const [state, setState] = useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState));
    return [state, setMergedState];
}

function queryString(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

const ListForm = props => {
    const [state, setState] = useMergeState({
        data: [],
        isLoading: true,
        modalVisible: false,
        formSubmiting: false,
        selectedRowKeys: [],
        currentRecord: undefined
    });

    const {
        url,
        onChangeData,
        columns,
        selectable,
        insertable,
        editable,
        deleteable,
        primaryKey,
        formTemplate,
        formInitialValues,
        tableSize,
        modalWidth,
        otherActions,
        expandedRowRender,
        filter
    } = props;
    const {
        data,
        isLoading,
        modalVisible,
        formSubmiting,
        selectedRowKeys,
        currentRecord
    } = state;

    let isComponentMounted = false;

    useEffect(() => {
        isComponentMounted = true;
        // Không Có filter hoặc có filter và đã load xong
        if (filter === undefined || !_.isEmpty(filter)) {
            // Set lại data và loading cho các Component con
            setState({ data: [], isLoading: true });
            axios
                .get("/api/" + url + "?" + queryString(filter))
                .then(response => {
                    if (isComponentMounted && response.data.success) {
                        setState({
                            data: response.data.data,
                            isLoading: false
                        });
                        //  Tính lại AutoComplete (nhúng trong Modal form) cho 1 số form
                        if (onChangeData) onChangeData(response.data.data);
                    }
                })
                .catch(error => console.log(error));
        }
        return () => {
            isComponentMounted = false;
        };
    }, [filter]); // Chỉ chạy 1 lần khi mount component

    /**
     * Check liệu dữ liệu người dùng sửa có thay đổi gì ko?
     */
    const isChangeData = (record, data) => {
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
     * Xử lý dữ liệu (ngày tháng) từ form nhập vào
     */
    const parseValues = values => {
        for (let [key, value] of Object.entries(values)) {
            if (value !== null && value !== undefined)
                if (typeof value === "object")
                    // Convert từ moment (from DatePicker) về dạng string để backend xử lý
                    values[key] = value.format("YYYY-MM-DD HH:mm:ss");
                else if (typeof value === "string")
                    if (value.match(/(.*?):(.*?)\/(.*?)\//g))
                        values[key] = moment(value, "HH:mm DD/MM/YYYY").format(
                            "YYYY-MM-DD HH:mm:ss"
                        );
                    else if (value.match(/(.*?)\/(.*?)\//g))
                        values[key] = moment(value, "DD/MM/YYYY").format(
                            "YYYY-MM-DD HH:mm:ss"
                        );
        }
        return values;
    };

    /**
     * Show modal Thêm mới, Sửa
     */
    const handleOk = values => {
        setState({ formSubmiting: true });
        values = parseValues(values);
        // Thêm mới
        if (currentRecord === undefined) {
            onAdd(values);
        } else if (isChangeData(currentRecord, values)) {
            // Chỉnh sửa
            onUpdate(values);
        }
        // Tắt loading & modal
        setState({
            formSubmiting: false,
            modalVisible: false
        });
    };

    const handleCancel = () => {
        setState({ modalVisible: false });
    };

    /**
     * Xử lý sự kiện người dùng
     */
    const handleAddNew = () => {
        setState({
            currentRecord: undefined,
            modalVisible: true
        });
    };

    const handleEdit = record => {
        setState({
            modalVisible: true,
            currentRecord: record
        });
    };

    const handleSelectAll = () => {
        setState({
            selectedRowKeys: data.map(item => item[primaryKey])
        });
    };

    const handleClearSelected = () => {
        setState({
            selectedRowKeys: []
        });
    };

    /**
     * Thực thi các sự kiện
     */
    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    const onAdd = value => {
        axios
            .post(`/api/${url}`, value)
            .then(response => {
                if (response.data.success) {
                    setState({
                        data: [...data, response.data.data] // Thêm object vào list lấy từ state
                    });
                    message.info(response.data.message);
                    if (onChangeData) onChangeData(data);
                }
            })
            .catch(error => console.log(error));
    };

    const onUpdate = value => {
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
                    setState({
                        data: newData
                    });
                    if (onChangeData) onChangeData(data);
                    message.info(response.data.message);
                }
            })
            .catch(error => console.log(error));
    };

    const onDelete = id => {
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
                            setState({
                                data: data.filter(
                                    item => item[primaryKey] !== id
                                )
                            });
                            message.info(response.data.message);
                            if (onChangeData) onChangeData(data);
                        }
                    })
                    .catch(error => console.log(error));
            }
        });
    };

    const onMultiDelete = () => {
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
                        params: {
                            objects: selectedRowKeys.join("|")
                        }
                    })
                    .then(response => {
                        if (response.data.success) {
                            setState({
                                data: data.filter(
                                    item =>
                                        selectedRowKeys.indexOf(
                                            item[primaryKey]
                                        ) === -1
                                ),
                                selectedRowKeys: []
                            });
                            if (onChangeData) onChangeData(data);
                            message.info(response.data.message);
                        }
                    })
                    .catch(error => console.log(error));
            }
        });
    };

    return (
        <React.Fragment>
            <ToolsButton
                insertable={insertable}
                selectable={selectable}
                deleteable={deleteable}
                handleAddNew={handleAddNew}
                onMultiDelete={onMultiDelete}
                selectedRowKeys={selectedRowKeys}
                handleSelectAll={handleSelectAll}
                handleClearSelected={handleClearSelected}
            />
            <DataTable
                data={data}
                columns={columns}
                isLoading={isLoading}
                primaryKey={primaryKey}
                selectable={selectable}
                editable={editable}
                deleteable={deleteable}
                selectedRowKeys={selectedRowKeys}
                onChangeSelect={onChangeSelect}
                tableSize={tableSize}
                handleEdit={handleEdit}
                onDelete={onDelete}
                otherActions={otherActions}
                expandedRowRender={expandedRowRender}
            />
            <ModalConfirm
                modalVisible={modalVisible}
                modalWidth={modalWidth}
                handleOk={handleOk}
                handleCancel={handleCancel}
                formSubmiting={formSubmiting}
                currentRecord={currentRecord}
                formInitialValues={formInitialValues}
                formTemplate={formTemplate}
            />
        </React.Fragment>
    );
};

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
    otherActions: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            icon: PropTypes.node,
            title: PropTypes.string,
            color: PropTypes.string
        })
    ),
    otherButtons: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            icon: PropTypes.node,
            title: PropTypes.string,
            color: PropTypes.string
        })
    ),
    expandedRowRender: PropTypes.func,
    filter: PropTypes.object
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

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Form, message, Modal } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useImperativeHandle, useState } from "react";
import { isChangeData, queryString, useMergeState } from "../../utils";
import DataTable from "./DataTable";
import FilterBox from "./FilterBox";
import ModalConfirm from "./ModalConfirm";
import ToolsButton from "./ToolsButton";
const { confirm } = Modal;

const ListForm = props => {
    const [form] = Form.useForm();
    const {
        url,
        onChangeData,
        primaryKey,
        filter,
        filterBox,
        otherParams
    } = props;
    const [state, setState] = useMergeState({
        data: [],
        isLoading: true,
        modalVisible: false,
        formSubmiting: false,
        selectedRowKeys: [],
        currentRecord: undefined
    });
    const {
        data,
        isLoading,
        modalVisible,
        formSubmiting,
        selectedRowKeys,
        currentRecord
    } = state;
    const [ownFilter, setOwnFilter] = useState(filter);
    let isComponentMounted = false;
    // Final filter: Filter <= props, OwnFilter <= FilterBox
    const finalFilter = filter !== undefined ? filter : ownFilter;

    useEffect(() => {
        isComponentMounted = true;
        // Không Có filter hoặc có filter và đã load xong
        if (finalFilter === undefined || !_.isEmpty(finalFilter)) {
            console.log("Load data from server in ListForm");
            // Set lại data và loading cho các Component con
            setState({ data: [], isLoading: true });

            axios
                .get("/api/" + url + "?" + queryString(finalFilter))
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
            // When Unmount component
            isComponentMounted = false;
        };
    }, [JSON.stringify(finalFilter)]); // Chỉ chạy 1 lần khi mount đến khi filter hoặc ownFilter thay đổi

    /**
     * Create trigger for calling functions from other component
     */
    useImperativeHandle(props.ree, () => ({
        triggerAddNew: () => {
            handleAddNew();
        },
        getFormInstance: () => {
            return form;
        }
    }));

    /**
     * Show modal Thêm mới, Sửa
     */
    const handleOk = values => {
        setState({ formSubmiting: true });
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

    /**
     * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
     */
    const handleFilterBox = newFilter => {
        if (isChangeData(ownFilter, newFilter)) setOwnFilter(newFilter);
    };

    /**
     * Thực thi các sự kiện
     */
    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    const onAdd = value => {
        if (otherParams !== undefined)
            value = Object.assign(value, otherParams);
        axios
            .post(`/api/${url}`, { ...value, otherParams })
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
            {filterBox && <FilterBox {...props} onFilter={handleFilterBox} />}
            <ToolsButton
                {...props}
                data={data}
                selectedRowKeys={selectedRowKeys}
                handleAddNew={handleAddNew}
                onMultiDelete={onMultiDelete}
            />
            <DataTable
                {...props}
                data={data}
                isLoading={isLoading}
                selectedRowKeys={selectedRowKeys}
                onChangeSelect={onChangeSelect}
                handleEdit={handleEdit}
                onDelete={onDelete}
            />
            {props.formTemplate !== undefined && (
                <ModalConfirm
                    {...props}
                    form={form}
                    modalVisible={modalVisible}
                    formSubmiting={formSubmiting}
                    currentRecord={currentRecord}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            )}
        </React.Fragment>
    );
};

ListForm.propTypes = {
    url: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    formTemplate: PropTypes.node,
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
            isGroup: PropTypes.bool.isRequired,
            color: PropTypes.string,
        })
    ),
    expandedRowRender: PropTypes.func,
    filter: PropTypes.object,
    filterBox: PropTypes.bool,
    tuNgayDenNgay: PropTypes.bool,
    otherFilter: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            render: PropTypes.node.isRequired
        })
    ),
    filterInitialValue: PropTypes.object,
    otherParams: PropTypes.object,
    renderFooter: PropTypes.func,
    renderSummary: PropTypes.func,
    setFormValues: PropTypes.object
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
    },
    filterBox: false,
    tuNgayDenNgay: true
};

export default React.memo(ListForm);

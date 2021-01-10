import ExclamationCircleOutlined from "@ant-design/icons/ExclamationCircleOutlined";
import Form from "antd/lib/form/index";
import message from "antd/lib/message/index";
import Modal from "antd/lib/modal/index";
import isEmpty from "lodash/isEmpty";
import unionBy from "lodash/unionBy";
import PropTypes from "prop-types";
import React, { useEffect, useImperativeHandle, useState } from "react";
import { isChangeData, queryString, useMergeState } from "../../utils";
import DataTable from "./DataTable";
import FilterBox from "./FilterBox";
import ModalConfirm from "./ModalConfirm";
import ToolsButton from "./ToolsButton";

const { confirm } = Modal;

/**
 * Form base for other components
 *
 * @param {*} props
 * @returns
 */
const ListForm = props => {
    //#region  Khai báo biến
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
        modalDeleteVisible: false,
        selectedRowKeys: [],
        currentRecord: undefined
    });
    const {
        data,
        isLoading,
        modalVisible,
        modalDeleteVisible,
        selectedRowKeys,
        currentRecord
    } = state;
    // Filter của filter-box
    const [ownFilter, setOwnFilter] = useState(filter);

    let isComponentMounted = false;
    // Final filter: Filter <= props, OwnFilter <= FilterBox
    const finalFilter = filter || ownFilter;
    //#endregion

    //#region  Sự kiện, hooks
    useEffect(() => {
        isComponentMounted = true;
        // Không Có filter hoặc có filter và đã load xong
        if (finalFilter === undefined || !isEmpty(finalFilter))
            fetchData(finalFilter);
        return () => {
            // When Unmount component
            isComponentMounted = false;
        };
    }, [JSON.stringify(finalFilter)]); // Chỉ chạy 1 lần khi mount đến khi filter hoặc ownFilter thay đổi

    /**
     * Create trigger for calling functions from other component
     */
    useImperativeHandle(props.ree, () => ({
        /**
         * Gọi sự kiện thêm mới từ form khác
         */
        triggerAddNew: () => handleAddNew(),
        /**
         * Kích hoạt chức năng thêm hoặc chỉnh sửa 1 hoặc nhiều hàng
         */
        triggerUpdate: response => doInsertRow(response),
        /**
         * Trả form instance về form khác (form cha)
         */
        getFormInstance: () => form
    }));
    //#endregion

    //#region  Triggers from components
    /**
     * Show modal Thêm mới, Sửa
     */
    const handleOk = (values, callback = null) => {
        if (currentRecord === undefined) {
            onAdd(values, callback); // Thêm mới
        } else if (isChangeData(values, currentRecord)) {
            onUpdate(values, callback); // Chỉnh sửa
        }
    };

    const handleCancel = () =>
        setState({
            modalVisible: false,
            modalDeleteVisible: false,
            currentRecord: undefined
        });
    /**
     * Xử lý sự kiện người dùng
     */
    const handleAddNew = () =>
        setState({
            currentRecord: undefined,
            modalVisible: true
        });

    const handleEdit = record =>
        setState({
            modalVisible: true,
            currentRecord: record
        });

    /**
     * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
     */
    const handleFilterBox = newFilter =>
        isChangeData(ownFilter, newFilter) && setOwnFilter(newFilter);

    const handleDelete = record =>
        setState({
            modalDeleteVisible: true,
            currentRecord: record
        });

    //#endregion

    //#region  Thực thi các sự kiện
    const fetchData = query => {
        console.log("♦ Load data from server in ListForm, query: ", query);
        // Set lại data và loading cho các Component con
        setState({ data: [], isLoading: true });

        axios
            .get(`/api/${url}?` + queryString(query))
            .then(response => {
                if (isComponentMounted && response.data.success) {
                    //  Tính lại AutoComplete (nhúng trong Modal form) & columns cho 1 số form
                    onChangeData && onChangeData(response.data.data);
                    setState({
                        data: response.data.data,
                        isLoading: false
                    });
                }
            })
            .catch(error => console.log(error));
    };

    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    const doInsertRow = (response, callback = null) => {
        if (response.data.success) {
            // Thêm object vào list lấy từ state
            const newData = unionBy(response.data.data, data, primaryKey);
            setState({
                data: newData
            });
            message.info(response.data.message);
            callback && callback(); // Callback from ModalConfirm to change loading button state
            onChangeData && onChangeData(newData); // Callback from main form to recalc data
        } else message.error(response.data.message);
    };

    const onAdd = (value, callback) => {
        if (otherParams !== undefined)
            value = Object.assign(value, otherParams);
        axios
            .post(`/api/${url}`, value)
            .then(response => doInsertRow(response, callback))
            .catch(error => console.log(error));
    };

    const onUpdate = (value, callback) => {
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
                    message.info(response.data.message);
                    callback && callback(); // Callback from ModalConfirm to change loading button state
                    onChangeData && onChangeData(newData); // Callback from main form to recalc data
                }
            })
            .catch(error => console.log(error));
    };

    const onDelete = () => {
        currentRecord !== undefined &&
            axios
                .delete(`/api/${url}/${currentRecord["id"]}`)
                .then(response => {
                    if (response.data.success) {
                        const newData = data.filter(
                            item => item[primaryKey] !== currentRecord["id"]
                        );
                        setState({
                            data: newData,
                            modalDeleteVisible: false,
                            currentRecord: undefined
                        });
                        message.info(response.data.message);
                        if (onChangeData) onChangeData(newData);
                    }
                })
                .catch(error => console.log(error));
    };

    const onMultiDelete = () => {
        console.log("before delete", state);
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
                            const newData = data.filter(
                                item =>
                                    selectedRowKeys.indexOf(
                                        item[primaryKey]
                                    ) === -1
                            );
                            setState({
                                data: newData,
                                selectedRowKeys: []
                            });
                            if (onChangeData) onChangeData(newData);
                            message.info(response.data.message);
                        }
                    })
                    .catch(error => console.log(error));
            }
        });
    };
    //#endregion

    return (
        <div className="list-form">
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
                handleDelete={handleDelete}
            />
            {props.formTemplate !== undefined && (
                <ModalConfirm
                    {...props}
                    form={form}
                    modalVisible={modalVisible}
                    currentRecord={currentRecord}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            )}
            <Modal
                visible={modalDeleteVisible}
                onOk={onDelete}
                onCancel={handleCancel}
                title="Bạn muốn xóa mục này?"
                okText="Xóa"
                cancelText="Hủy"
                okType="danger"
            >
                <p>Lưu ý: Thao tác không thể hoàn tác</p>
            </Modal>
        </div>
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
            onClick: PropTypes.func,
            icon: PropTypes.node,
            title: PropTypes.string,
            childs: PropTypes.array,
            selectRequired: PropTypes.bool
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

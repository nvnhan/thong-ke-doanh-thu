import UserAddOutlined from "@ant-design/icons/UserAddOutlined";
import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import message from "antd/lib/message/index";
import Modal from "antd/lib/modal/index";
import isEmpty from "lodash/isEmpty";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { useMergeState, vndFormater } from "../../../utils";
import columns from "./columns";
import expandedRow from "./expandedRow";
import FormItem from "./FormItem";
import otherButtons from "./otherButtons";
import otherFilters from "./otherFilters";
import tinhPhi from "./tinhPhi";
import UpdateLayout from "./UpdateLayout";

const List = props => {
    const dinh_danh = props.location.dd;
    const [formValue, setFormValue] = useState(undefined);

    const [update, setUpdate] = useMergeState({
        selectedKeys: [],
        modalVisible: false
    });
    const { selectedKeys, modalVisible } = update;
    const [updateForm] = Form.useForm();

    const childRef = useRef();

    const sanBay = useSelector(state => state.sanBay.list);
    const phiHanhLy = useSelector(state => state.phiHanhLy.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const thuePhi = useSelector(state => state.thuePhi.list);

    /**
     * Callback from FormItem, trigger when select Hang Hoa
     * => Change setFormValues to ListForm => FormEdit
     */
    const handleFormValue = props => {
        const record = tinhPhi({
            state: {
                phiHanhLy,
                taiKhoan,
                sanBay,
                thuePhi
            },
            ...childRef.current.getFormInstance().getFieldsValue(),
            ...props
        });
        Object.assign(record, {
            resetFields: () => setFormValue(undefined)
        });
        setFormValue(record);
    };

    /**
     * Trigger "Add new" action with addition params
     */
    const onClickRow = record => {
        // Thêm hành khách từ record
        childRef.current.triggerAddNew();
        const newRecord = Object.assign(
            { ...record },
            {
                ten_khach: "",
                resetFields: () => setFormValue(undefined)
            }
        );
        setFormValue(newRecord);
    };

    const dvAction = [
        {
            key: "them-hanh-khach",
            onClick: onClickRow,
            title: "Thêm hành khách",
            icon: <UserAddOutlined />,
            color: "#4bab92" // Primary color
        }
    ];

    const renderSummary = data => {
        if (!isEmpty(data)) {
            const sumObj = { tong_tien: 0, tong_tien_thu_khach: 0 };
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                sumObj.tong_tien += element.tong_tien;
                sumObj.tong_tien_thu_khach += element.tong_tien_thu_khach;
            }
            return (
                <>
                    <tr>
                        <th colSpan={11}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.tong_tien)}</td>
                        <td>
                            {vndFormater.format(sumObj.tong_tien_thu_khach)}
                        </td>
                        <td>
                            {vndFormater.format(
                                sumObj.tong_tien_thu_khach - sumObj.tong_tien
                            )}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };
    ///////////////////////////////////////////////////////////////////
    /**
     * Show modal cập nhật
     */
    const showUpdates = (data, selectedRowKeys) =>
        setUpdate({
            selectedKeys: selectedRowKeys,
            modalVisible: true
        });

    /**
     * Thực hiện Cập nhật
     */
    const handleOk = () => {
        if (isEmpty(selectedKeys)) return;
        updateForm
            .validateFields()
            .then(values => {
                // Update
                Object.assign(values, {
                    objects: selectedKeys.join("|")
                });
                axios
                    .put(`/api/dat-ve/updates`, values)
                    .then(response => {
                        childRef.current.triggerUpdate(response);
                        // Tắt loading & modal
                        handleCancel();
                        updateForm.resetFields();
                    })
                    .catch(error => console.log(error));
            })
            .catch(info => console.log("Validate Failed: ", info));
    };

    const handleCancel = () =>
        setUpdate({
            selectedKeys: [],
            modalVisible: false
        });

    return (
        <React.Fragment>
            {dinh_danh !== undefined && (
                <div
                    style={{ padding: "16px 20px 0", backgroundColor: "#fff" }}
                >
                    <b>Dữ liệu xử lý được:</b>
                </div>
            )}
            <ListForm
                ree={childRef}
                url="dat-ve"
                filter={dinh_danh && { dd: dinh_danh }}
                filterBox={dinh_danh === undefined}
                otherFilter={otherFilters}
                filterInitialValue={{ sb: "", xv: "" }}
                insertable={dinh_danh === undefined}
                columns={columns}
                tableSize={{ x: 1500 }}
                modalWidth="1200px"
                formTemplate={<FormItem onChangeValue={handleFormValue} />}
                formInitialValues={{
                    ngay_thang: moment().format("DD/MM/YYYY"),
                    loai_tuoi: 0,
                    gia_net: 0,
                    tong_tien: 0,
                    tong_tien_thu_khach: 0,
                    hoa_hong: 0,
                    phi_san_bay: 0,
                    phu_phi_san_bay: 0,
                    hanh_ly: 0,
                    phu_phi: 0
                }}
                otherActions={dvAction}
                otherButtons={otherButtons({
                    showUpdates,
                    history: props.history
                })}
                expandedRowRender={expandedRow}
                renderSummary={renderSummary}
                setFormValues={formValue}
            />
            <Modal
                width="800px"
                title="Cập nhật thông tin"
                onCancel={handleCancel}
                onOk={handleOk}
                visible={modalVisible}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Đồng ý
                    </Button>
                ]}
            >
                <Form
                    form={updateForm}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{
                        tong_tien: 0,
                        tong_tien_thu_khach: 0
                    }}
                >
                    <UpdateLayout />
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default React.memo(withRouter(List));

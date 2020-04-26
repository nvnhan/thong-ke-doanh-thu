import { UserAddOutlined } from "@ant-design/icons";
import { Button, Form, message, Modal } from "antd";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import ListForm from "../../../components/ListForm";
import { useMergeState, vndFormater } from "../../../utils";
import columns from "./columns";
import FormItem from "./FormItem";
import otherButtons from "./otherButtons";
import otherFilters from "./otherFilters";
import tinhPhi from "./tinhPhi";
import UpdateLayout from "./UpdateLayout";
import expandedRow from "./expandedRow";

const List = props => {
    const [formValue, setFormValue] = useState(undefined);
    const [update, setUpdate] = useMergeState({
        selectedKeys: [],
        modalVisible: false
    });
    const { selectedKeys, modalVisible } = update;
    const [updateForm] = Form.useForm();

    const [state, setState] = useMergeState({
        sanBay: [],
        thuePhi: [],
        phiHanhLy: [],
        taiKhoan: [],
        khachHang: [],
        hangBay: []
    });
    const childRef = useRef();
    let isComponentMounted = false;
    let time = null;

    useEffect(() => {
        isComponentMounted = true;
        retrieveData();
        return () => {
            // When Unmount component
            isComponentMounted = false;
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        const promise1 = axios.get("/api/san-bay");
        const promise2 = axios.get("/api/thue-phi/all");
        const promise3 = axios.get("/api/phi-hanh-ly/all");
        const promise4 = axios.get("/api/tai-khoan/all");
        const promise5 = axios.get("/api/khach-hang/all");
        const promise6 = axios.get("/api/dat-ve/hang-bay");
        console.log("Retrieving Danh Muc");
        Promise.all([
            promise1,
            promise2,
            promise3,
            promise4,
            promise5,
            promise6
        ])
            .then(response => {
                if (isComponentMounted)
                    if (
                        response[0].data.success &&
                        response[1].data.success &&
                        response[2].data.success &&
                        response[3].data.success &&
                        response[4].data.success &&
                        response[5].data.success
                    ) {
                        setState({
                            sanBay: response[0].data.data,
                            thuePhi: response[1].data.data,
                            phiHanhLy: response[2].data.data,
                            taiKhoan: response[3].data.data,
                            khachHang: response[4].data.data,
                            hangBay: [
                                ...new Set([
                                    ...response[5].data.data,
                                    "VN",
                                    "VJ",
                                    "Jets",
                                    "BB"
                                ])
                            ]
                        });
                        console.log("Retrieved Danh Muc Succcessfully");
                    } else time = setTimeout(retrieveData, 2000);
            })
            .catch(error => {
                console.log(error);
                time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
            });
    };

    /**
     * Callback from FormItem, trigger when select Hang Hoa
     * => Change setFormValues to ListForm => FormEdit
     */
    const handleFormValue = props => {
        const record = tinhPhi({
            state,
            ...childRef.current.getFormInstance().getFieldsValue(),
            ...props
        });
        Object.assign(record, { resetFields: () => setFormValue(undefined) });
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
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    tong_tien: previousValue.tong_tien + currentValue.tong_tien,
                    tong_tien_thu_khach:
                        previousValue.tong_tien_thu_khach +
                        currentValue.tong_tien_thu_khach
                };
            });
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
    const showUpdates = (data, selectedRowKeys) => {
        setUpdate({ selectedKeys: selectedRowKeys, modalVisible: true });
    };

    /**
     * Thực hiện Cập nhật
     */
    const handleOk = () => {
        if (_.isEmpty(selectedKeys)) return;
        updateForm
            .validateFields()
            .then(values => {
                // Update
                Object.assign(values, { objects: selectedKeys.join("|") });
                axios
                    .put(`/api/dat-ve/updates`, values)
                    .then(response => {
                        if (response.data.success) {
                            // Set lại data cho ListForm ????
                            // Ko thì thôi
                            message.info(response.data.message);
                            // Tắt loading & modal
                            handleCancel();
                            updateForm.resetFields();
                        }
                    })
                    .catch(error => console.log(error));
            })
            .catch(info => console.log("Validate Failed: ", info));
    };

    const handleCancel = () => {
        setUpdate({ selectedKeys: [], modalVisible: false });
    };

    return (
        <React.Fragment>
            <ListForm
                ree={childRef}
                url="dat-ve"
                filterBox
                otherFilter={otherFilters}
                filterInitialValue={{ sb: "", xv: "" }}
                columns={columns}
                tableSize={{ x: 1800 }}
                modalWidth="1200px"
                formTemplate={
                    <FormItem danhMuc={state} onChangeValue={handleFormValue} />
                }
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
                otherButtons={otherButtons(showUpdates)}
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
                    initialValues={{ tong_tien: 0, tong_tien_thu_khach: 0 }}
                >
                    <UpdateLayout danhMuc={state} />
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default React.memo(List);

import { Form, Modal, Progress } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useMergeState } from "../../../utils";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [state, setState] = useMergeState({
        taiKhoan: [],
        khachHang: [],
        email: [],
        selectedRowKeys: []
    });
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
        const promise1 = axios.get("/api/tai-khoan/all");
        const promise2 = axios.get("/api/khach-hang/all");
        console.log("Retrieving Danh Muc");
        Promise.all([promise1, promise2])
            .then(response => {
                if (isComponentMounted)
                    if (response[0].data.success && response[1].data.success) {
                        setState({
                            taiKhoan: response[0].data.data,
                            khachHang: response[1].data.data
                        });
                        console.log("Retrieved Danh Muc Succcessfully");
                    } else time = setTimeout(retrieveData, 2000);
            })
            .catch(error => {
                console.log(error);
                time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
            });
    };

    const showWaiting = (des = "Đang xử lý dữ liệu...") => {
        Modal.info({
            title: "Thông báo",
            centered: true,
            icon: null,
            okButtonProps: { hidden: true },
            content: (
                <div style={{ textAlign: "center" }}>
                    <Progress
                        percent={100}
                        status="active"
                        showInfo={false}
                        strokeColor="#6dc3a6"
                    />
                    <span>{des}</span>
                    <br />
                    <small>
                        <i>(Không thể hủy cho đến khi tiến trình kết thúc!)</i>
                    </small>
                </div>
            )
        });
    };

    const getFormData = values => {
        if (values.hasOwnProperty("thoiGian") && !_.isEmpty(values.thoiGian)) {
            Object.assign(values, {
                bat_dau: values.thoiGian[0].format("YYYY-MM-DD"),
                ket_thuc: values.thoiGian[1].format("YYYY-MM-DD")
            });
        }
        delete values.thoiGian;
        return values;
    };

    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    const onFinish = () => {
        showWaiting();
        const values = form.getFieldsValue();
        const data = getFormData(values);
        //TODO: Get selected email from table

        // Truyền lên server
        axios
            .post(`/api/dat-ve/them-mail`, data)
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    props.history.push({
                        pathname: "/dat-ve",
                        dd: response.data.data
                    });
                } else message.error(response.data.message);
            })
            .catch(error => console.log(error))
            .then(() => Modal.destroyAll());
    };

    const onGetEmail = () => {
        showWaiting("Đang lấy thông tin email...");
        const values = form.getFieldsValue();
        const data = getFormData(values);
        // Get Email from GMAIL
        axios
            .post(`/api/dat-ve/get-mail`, data)
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    setState({ email: response.data.data });
                } else message.error(response.data.message);
            })
            .catch(error => console.log(error))
            .then(() => Modal.destroyAll());
    };

    return (
        <div className="list-form" style={{ padding: "16px 12px" }}>
            <Form
                form={form}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                onFinish={onFinish}
                initialValues={{
                    thoiGian: [
                        moment().startOf("week"),
                        moment().endOf("week")
                    ],
                    gioi_han: 20,
                    gia_net: 0,
                    tong_tien: 0,
                    tong_tien_thu_khach: 0
                }}
            >
                <FormItem
                    danhMuc={state}
                    onChangeSelect={onChangeSelect}
                    onGetEmail={onGetEmail}
                />
            </Form>
        </div>
    );
};

export default React.memo(withRouter(index));

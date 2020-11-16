import { Form, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import showWaiting from "../../../components/Includes/ShowWaiting";
import { useMergeState } from "../../../utils";
import ModalPreviewDatVe from "../ModalPreviewDatVe";
import FormItem from "./FormItem";

const index = props => {
    const [form] = Form.useForm();
    const [state, setState] = useMergeState({
        taiKhoan: [],
        khachHang: []
    });
    const [modalDatVe, setModalDatVe] = useState({
        visible: false,
        datve: ""
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

    const onFinish = () => {
        showWaiting();
        const data = form.getFieldsValue();

        // Truyền lên server
        axios
            .post(`/api/dat-ve/them-text`, data, {
                headers: {
                    "Content-Type":
                        "multipart/form-data; charset=utf-8; boundary=" +
                        Math.random()
                            .toString()
                            .substr(2)
                }
            })
            .then(response => {
                if (response.data.success) {
                    message.success(response.data.message);
                    setModalDatVe({ visible: true, datve: response.data.data });
                } else message.error(response.data.message);
            })
            .catch(error => console.log(error))
            .then(() => Modal.destroyAll());
    };

    /**
     * Cancel Modal preview
     */
    const handleCancel = () => setModalDatVe({ visible: false, datve: "" });

    return (
        <div className="list-form" style={{ padding: "16px 12px" }}>
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                initialValues={{
                    gia_net: 0,
                    tong_tien: 0,
                    tong_tien_thu_khach: 0
                }}
            >
                <FormItem danhMuc={state} />
            </Form>
            <ModalPreviewDatVe
                ddDatVe={modalDatVe.datve}
                handleCancel={handleCancel}
                modalVisible={modalDatVe.visible}
            />
        </div>
    );
};

export default React.memo(index);

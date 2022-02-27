import RetweetOutlined from "@ant-design/icons/RetweetOutlined";
import Button from "antd/lib/button/index";
import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Input from "antd/lib/input/index";
import Modal from "antd/lib/modal/index";
import message from "antd/lib/message/index";
import Tag from "antd/lib/tag/index";
import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = memo(props => {
    const authUser = useSelector(state => state.authUser);
    const [formReset] = Form.useForm();
    const [update, setUpdate] = useState({
        id: -1,
        modalVisible: false
    });

    const columns = [
        {
            title: "Tài khoản",
            dataIndex: "username",
            optFind: true,
            width: 90
        },
        {
            title: "Họ tên",
            dataIndex: "ho_ten",
            optFind: true,
            width: 110
        },
        {
            title: "Đại lý",
            dataIndex: "dai_ly",
            ellipsis: true,
            width: 110
        },
        {
            title: "SĐT",
            dataIndex: "sdt",
            width: 90
        },
        {
            title: "Địa chỉ",
            dataIndex: "dia_chi",
            ellipsis: true,
            width: 120
        },
        {
            title: "Phân quyền",
            dataIndex: "quyen",
            optFilter: true,
            width: 80
            // render: text => {
            //     let color = "";
            //     switch (text) {
            //         case "Nhân viên":
            //             color = "gray";
            //             break;
            //         case "Quản lý đại lý":
            //             color = "green";
            //             break;
            //         case "Chủ đại lý":
            //             color = "geekblue";
            //             break;
            //         default:
            //             color = "volcano";
            //             break;
            //     }

            //     return <b color={color}>{text}</b>;
            // }
        },
        {
            title: "Chức năng",
            key: "tags",
            dataIndex: "tags",
            width: 90,
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 8 ? "geekblue" : "green";
                        tag === "Tool" && (color = "volcano");

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toLowerCase()}
                            </Tag>
                        );
                    })}
                </>
            )
        },
        // {
        //     title: "Tour - Visa",
        //     dataIndex: "tour_visa",
        //     render: bol => <Checkbox checked={bol} />,
        //     width: 70
        // },
        // {
        //     title: "Bán hàng",
        //     dataIndex: "ban_hang",
        //     render: bol => <Checkbox checked={bol} />,
        //     width: 70
        // },
        // {
        //     title: "Extension",
        //     dataIndex: "extension",
        //     render: bol => <Checkbox checked={bol} />,
        //     width: 70
        // },
        {
            title: "Hoạt động",
            dataIndex: "actived",
            render: bol => <Checkbox checked={bol} />,
            width: 70
        },
        {
            title: "Ngày tạo",
            dataIndex: "created_at",
            width: 80
        }
    ];

    const onClickRow = selectedKey => {
        formReset.setFieldsValue({ pass: "123" });
        setUpdate({ id: selectedKey.id, modalVisible: true });
    };

    const otherAction = [
        {
            key: "resetPassword",
            onClick: onClickRow,
            title: "Đặt lại mật khẩu",
            icon: <RetweetOutlined />,
            color: "#4bab92" // Primary color
        }
    ];

    const handleOk = () => {
        formReset.validateFields().then(values =>
            axios
                .put(`/api/reset/` + update.id, values)
                .then(response => {
                    if (response.data.success) {
                        message.success(response.data.message);
                        setUpdate({ id: -1, modalVisible: false });
                    } else message.warn(response.data.message);
                })
                .catch(error => console.log(error))
        );
    };

    const handleCancel = () => setUpdate({ id: -1, modalVisible: false });

    return (
        <>
            <ListForm
                url="nhan-vien"
                selectable={false}
                columns={columns}
                tableSize={{ x: 1100 }}
                modalWidth={800}
                formTemplate={
                    <FormItem
                        quanTri={authUser.admin}
                        banHang={authUser.admin || authUser.ban_hang}
                        tourVisa={authUser.admin || authUser.tour_visa}
                        extension={authUser.admin || authUser.extension}
                    />
                }
                otherActions={authUser.admin ? otherAction : []}
                formInitialValues={{
                    phan_quyen: 0,
                    actived: true,
                    so_ngay_dang_nhap: 10
                }}
            />
            <Modal
                title="Khôi phục mật khẩu cho user"
                onCancel={handleCancel}
                onOk={handleOk}
                visible={update.modalVisible}
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
                    form={formReset}
                    labelCol={{ span: 8 }}
                    wrapperCol={{
                        span: 16
                    }}
                >
                    <Form.Item
                        name="pass"
                        label="Mật khẩu mới"
                        extra="Đặt lại mật khẩu mặc định là '123'"
                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item>
                        <span>Xác nhận quyền quản trị viên</span>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu của bạn"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
});

export default List;

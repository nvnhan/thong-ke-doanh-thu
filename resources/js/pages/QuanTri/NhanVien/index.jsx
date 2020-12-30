import Checkbox from "antd/lib/checkbox/index";
import Tag from "antd/lib/tag/index";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = memo(props => {
    const authUser = useSelector(state => state.authUser);

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
            width: 85,
            render: text => {
                let color = "";
                switch (text) {
                    case "Nhân viên":
                        color = "gray";
                        break;
                    case "Quản lý đại lý":
                        color = "green";
                        break;
                    case "Chủ đại lý":
                        color = "geekblue";
                        break;
                    default:
                        color = "volcano";
                        break;
                }

                return <Tag color={color}>{text.toUpperCase()}</Tag>;
            }
        },
        {
            title: "Tour - Visa",
            dataIndex: "tour_visa",
            render: bol => <Checkbox checked={bol} />,
            width: 70
        },
        {
            title: "Bán hàng",
            dataIndex: "ban_hang",
            render: bol => <Checkbox checked={bol} />,
            width: 70
        },
        {
            title: "Hoạt động",
            dataIndex: "actived",
            render: bol => <Checkbox checked={bol} />,
            width: 70
        }
    ];

    // const expandedRowRender = record => (
    //     <ul style={{ margin: 0 }}>
    //         <li>Ngày đăng nhập cuối: {record.ngay_dang_nhap}</li>
    //         <li>Số ngày đăng nhập còn lại: {record.so_ngay_dang_nhap}</li>
    //         <li>Ngày tạo tài khoản: {record.created_at}</li>
    //     </ul>
    // );

    return (
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
                />
            }
            // expandedRowRender={expandedRowRender}
            formInitialValues={{
                phan_quyen: 0,
                actived: true,
                so_ngay_dang_nhap: 10
            }}
        />
    );
});

export default List;

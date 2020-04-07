import React, { useState } from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";
import {AppstoreAddOutlined
} from "@ant-design/icons";

const List = React.memo(() => {
    const [phanLoai, setPhanLoai] = useState([]);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        let phanLoai = [...new Set(data.map(x => x.phan_loai))];
        setPhanLoai(phanLoai);
    };

    const onClickRow = record => {
        console.log("record", record)        
    }

    const columns = [
        {
            title: "Ký hiệu",
            dataIndex: "ky_hieu",
            optFind: true,
            width: 140
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "mo_ta",
            optFind: true,
            width: 170
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            width: 120,
            optFilter: true
        },
        {
            title: "SĐT",
            dataIndex: "sdt",
            width: 120
        },
        {
            title: "Email",
            dataIndex: "email",
            width: 120
        },
        {
            title: "Địa chỉ",
            dataIndex: "dia_chi",
            ellipsis: true,
            width: 120
        },
        {
            title: "MST",
            dataIndex: "mst",
            width: 120
        },
        {
            title: "Số dư ban đầu",
            dataIndex: "so_du_ky_truoc",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Phí VN",
            dataIndex: "phi_vn",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Phí VJ",
            dataIndex: "phi_vj",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Phí Jets",
            dataIndex: "phi_jets",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Phí BB",
            dataIndex: "phi_bb",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Ngày tạo",
            dataIndex: "ngay_tao",
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        }
    ];

    const hangHoaAction = [
        {
            key: "dsHangHoa",
            onClick: onClickRow,
            title: "Danh sách hàng hóa",
            icon: <AppstoreAddOutlined />,
            color: "#52c41a" // Success color
        }
    ];

    return (
        <ListForm
            url="nha-cung-cap"
            columns={columns}
            tableSize={{ x: 1200 }}
            modalWidth="1100px"
            formTemplate={<FormItem phanLoai={phanLoai} />}
            formInitialValues={{
                so_du_ky_truoc: 0,
                phi_vn: 0,
                phi_vj: 0,
                phi_jets: 0,
                phi_bb: 0
            }} 
            otherActions={hangHoaAction}
            onChangeData={onChangeData}
        />
    );
});

export default List;

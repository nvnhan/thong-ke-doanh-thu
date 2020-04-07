import React, { useState } from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(() => {
    const [phanLoai, setPhanLoai] = useState([]);

    const onChangeData = data => {
        let phanLoai = [...new Set(data.map(x => x.phan_loai))];
        setPhanLoai(phanLoai);
    };

    const columns = [
        {
            title: "Mã khách hàng",
            dataIndex: "ma_khach_hang",
            width: 120,
            optFind: true
        },
        {
            title: "Họ tên",
            dataIndex: "ho_ten",
            width: 120,
            optFind: true
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            width: 120,
            optFilter: true
        },
        {
            title: "MST",
            dataIndex: "mst",
            width: 120
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
            title: "Mã đại lý",
            dataIndex: "ma_dai_ly",
            ellipsis: true,
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
            title: "Số tiền thu dư",
            dataIndex: "so_tien_thu_du",
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
            title: "Ngày nhắc",
            dataIndex: "ngay_nhac",
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
            width: 150,
            ellipsis: true
        }
    ];

    return (
        <ListForm
            url="khach-hang"
            columns={columns}
            modalWidth="1100px"
            tableSize={{ x: 1000 }}
            formTemplate={<FormItem phanLoai={phanLoai} />}
            onChangeData={onChangeData}
        />
    );
});

export default List;
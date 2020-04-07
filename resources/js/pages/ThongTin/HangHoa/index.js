import React, { useState, useEffect } from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo((props) => {
    const [phanLoai, setPhanLoai] = useState([]);
    const [nhaCungCap, setNhaCungCap] = useState([]);

    useEffect(() => {
        axios
            .get("/api/nha-cung-cap")
            .then(response => {
                if (response.data.success) setNhaCungCap(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        let phanLoai = [...new Set(data.map(x => x.phan_loai))];
        setPhanLoai(phanLoai);
    };

    const columns = [
        {
            title: "Mã hàng",
            dataIndex: "ma_hang",
            optFind: true,
            width: 120
        },
        {
            title: "Tên hàng",
            dataIndex: "ten_hang",
            optFind: true,
            width: 150
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "nha_cung_cap",
            optFilter: true,
            width: 150
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 120
        },
        {
            title: "Đơn vị",
            dataIndex: "don_vi",
            width: 120
        },
        {
            title: "Đơn giá",
            dataIndex: "don_gia",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        },
        {
            title: "Người tạo",
            dataIndex: "username",
            width: 120
        }
    ];

    return (
        <ListForm
            url="hang-hoa"
            columns={columns}
            tableSize={{ x: 800 }}
            modalWidth="800px"
            onChangeData={onChangeData}
            formTemplate={
                <FormItem phanLoai={phanLoai} nhaCungCap={nhaCungCap} />
            }
            formInitialValues={{ don_gia: 0 }}
        />
    );
});

export default List;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKhachHangList } from "../../../actions/actKhachHang";
import ListForm from "../../../components/ListForm";
import { unionDataBy, vndFormater } from "../../../utils";
import FormItem from "./FormItem";

const List = React.memo(() => {
    const dispatch = useDispatch();
    const khachHangList = useSelector(state => state.khachHang.list);
    const [phanLoai, setPhanLoai] = useState([]);

    const onChangeData = data => {
        dispatch(setKhachHangList(unionDataBy(khachHangList, data)));
        let phanLoai = [
            "Thu Chi ngoài",
            ...new Set([...data.map(x => x.phan_loai)])
        ];
        setPhanLoai(phanLoai);
    };

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>Phí thu VN: {vndFormater.format(record.phi_vn)}</li>
            <li>Phí thu VJ: {vndFormater.format(record.phi_vj)}</li>
            <li>Phí thu Jets: {vndFormater.format(record.phi_jets)}</li>
            <li>Phí thu BB: {vndFormater.format(record.phi_bb)}</li>
            <li>Ngày tạo: {record.ngay_tao}</li>
            <li>Ghi chú: {record.ghi_chu}</li>
        </ul>
    );

    const columns = [
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            width: 120,
            optFilter: true
        },
        {
            title: "Mã KH",
            dataIndex: "ma_khach_hang",
            width: 120,
            optFind: true
        },
        {
            title: "Họ tên",
            dataIndex: "ho_ten",
            width: 150,
            optFind: true
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
            width: 150
        },
        {
            title: "Địa chỉ",
            dataIndex: "dia_chi",
            ellipsis: true,
            width: 170
        },
        {
            title: "Mã đại lý",
            dataIndex: "ma_dai_ly",
            ellipsis: true,
            width: 150
        },
        {
            title: "Số dư ban đầu",
            dataIndex: "so_du_ky_truoc",
            render: number => vndFormater.format(number),
            width: 120
        },
        {
            title: "Số tiền thu dư",
            dataIndex: "so_tien_thu_du",
            render: number => vndFormater.format(number),
            width: 120
        },
        // {
        //     title: "Phí VN",
        //     dataIndex: "phi_vn",
        //     render: number =>
        //         new Intl.NumberFormat("vi-VN", {
        //             style: "currency",
        //             currency: "VND"
        //         }).format(number),
        //     width: 120
        // },
        // {
        //     title: "Phí VJ",
        //     dataIndex: "phi_vj",
        //     render: number =>
        //         new Intl.NumberFormat("vi-VN", {
        //             style: "currency",
        //             currency: "VND"
        //         }).format(number),
        //     width: 120
        // },
        // {
        //     title: "Phí Jets",
        //     dataIndex: "phi_jets",
        //     render: number =>
        //         new Intl.NumberFormat("vi-VN", {
        //             style: "currency",
        //             currency: "VND"
        //         }).format(number),
        //     width: 120
        // },
        // {
        //     title: "Phí BB",
        //     dataIndex: "phi_bb",
        //     render: number =>
        //         new Intl.NumberFormat("vi-VN", {
        //             style: "currency",
        //             currency: "VND"
        //         }).format(number),
        //     width: 120
        // },
        // {
        //     title: "Ngày nhắc",
        //     dataIndex: "ngay_nhac",
        //     width: 120
        // },
        {
            title: "Ngày tạo",
            dataIndex: "ngay_tao",
            width: 100
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            width: 170,
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
            formInitialValues={{
                ngay_tao: moment().format("DD/MM/YYYY"),
                so_du_ky_truoc: 0,
                phi_vn: 0,
                phi_vj: 0,
                phi_jets: 0,
                phi_bb: 0
            }}
            onChangeData={onChangeData}
            // expandedRowRender={expandedRowRender}
        />
    );
});

export default List;

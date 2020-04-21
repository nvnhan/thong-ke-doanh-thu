import moment from "moment";
import React, { useEffect, useState } from "react";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import FormItem from "./FormItem";
import exportDS from "../../../utils/exportBanRa";

const List = React.memo(props => {
    const [taiKhoan, setTaiKhoan] = useState([]);

    useEffect(() => {
        axios
            .get("/api/tai-khoan")
            .then(response => {
                if (response.data.success) setTaiKhoan(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Mã hàng: {record.ma_hang}. Tên hàng: {record.ten_hang}. Phân
                loại: {record.phan_loai}. Nhà cung cấp: {record.nha_cung_cap}
            </li>
            <li>
                Đơn giá mua: {vndFormater.format(record.don_gia_mua)}. Thành
                tiền mua: {vndFormater.format(record.thanh_tien_mua)}. Số lượng:{" "}
                {record.so_luong}
            </li>
            <li>
                Đơn giá bán: {vndFormater.format(record.don_gia_ban)}. Thành
                tiền bán: {vndFormater.format(record.thanh_tien_ban)}. Lãi:{" "}
                {vndFormater.format(record.lai)}
            </li>
            <li>Ghi chú: {record.ghi_chu}</li>
            <li>Người tạo: {record.username}</li>
        </ul>
    );

    const columns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_hoan_doi",
            width: 120,
            sorter: (a, b) =>
                moment(a.ngay_hoan_doi, "DD/MM/YYYY").unix() -
                moment(b.ngay_hoan_doi, "DD/MM/YYYY").unix()
        },
        {
            title: "Mã hàng",
            dataIndex: "ma_hang",
            optFind: true,
            width: 130
        },
        {
            title: "Tên hàng",
            dataIndex: "ten_hang",
            optFind: true,
            width: 160
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong",
            width: 90
        },
        {
            title: "Tổng tiền bán",
            dataIndex: "thanh_tien_ban",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_ban - b.thanh_tien_ban,
            width: 120
        },
        {
            title: "Khách hàng",
            dataIndex: "ma_khach_hang",
            optFilter: true,
            width: 120
        },
        {
            title: "TT hoàn đổi",
            dataIndex: "ngay_thanh_toan_hoan_doi",
            width: 120
        },
        {
            title: "TK trả hoàn đổi",
            dataIndex: "tai_khoan_tra_hoan_doi",
            width: 120,
            optFilter: true
        },
        {
            title: "Hoàn đổi xong",
            dataIndex: "ngay_hoan_doi xong",
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        }
    ];

    const otherButtons = [
        {
            key: "export",
            onClick: (data, selectedRowKeys) =>
                exportDS(data, selectedRowKeys, "hoan-doi.xlsx"),
            title: "Xuất danh sách ra Excel"
        }
    ];

    return (
        <ListForm
            url="hoan-doi"
            filterBox
            insertable={false}
            deleteable={false}
            columns={columns}
            tableSize={{ x: 1200 }}
            formTemplate={<FormItem taiKhoan={taiKhoan} />}
            expandedRowRender={expandedRowRender}
            otherButtons={otherButtons}
        />
    );
});

export default List;

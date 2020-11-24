import moment from "moment";
import React from "react";
import { vndFormater } from "../../../utils";

const columns = [
    {
        title: "Ngày tháng",
        dataIndex: "ngay_thang",
        width: 90,
        sorter: (a, b) =>
            moment(a.ngay_thang, "DD/MM/YYYY").unix() -
            moment(b.ngay_thang, "DD/MM/YYYY").unix()
    },
    {
        title: "Mã giữ chỗ",
        dataIndex: "ma_giu_cho",
        optFind: true,
        width: 80
    },
    {
        title: "Số vé",
        dataIndex: "so_ve",
        width: 130,
        optFind: true
    },
    {
        title: "Hãng bay",
        dataIndex: "hang_bay",
        width: 65,
        optFilter: true
    },
    {
        title: "Tên khách",
        dataIndex: "ten_khach",
        width: 140,
        optFind: true
    },
    {
        title: "TG đi",
        dataIndex: "ngay_gio_di",
        width: 120,
        sorter: (a, b) =>
            moment(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() -
            moment(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix(),
        render: text => {
            let date = moment(text, "HH:mm DD/MM/YYYY");
            let diff = moment().diff(date, "days");
            if (moment().diff(date) < 0 && diff == 0)
                return <span style={{ color: "red" }}>{text}</span>;
            else if (diff == -1)
                return <span style={{ color: "#dbde00" }}>{text}</span>;
            else return text;
        }
    },
    {
        title: "Chặng đi",
        dataIndex: "chang_di",
        width: 85
    },
    {
        title: "TG về",
        dataIndex: "ngay_gio_ve",
        width: 120,
        sorter: (a, b) =>
            moment(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() -
            moment(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix()
    },
    {
        title: "Chặng về",
        dataIndex: "chang_ve",
        width: 85
    },
    {
        title: "Tổng tiền",
        dataIndex: "tong_tien",
        render: number => vndFormater.format(number),
        sorter: (a, b) => a.tong_tien - b.tong_tien,
        width: 110
    },
    {
        title: "Thu khách",
        dataIndex: "tong_tien_thu_khach",
        render: number => vndFormater.format(number),
        sorter: (a, b) => a.tong_tien_thu_khach - b.tong_tien_thu_khach,
        width: 110
    },
    {
        title: "Lãi",
        dataIndex: "lai",
        render: number => vndFormater.format(number),
        sorter: (a, b) => a.lai - b.lai,
        width: 110
    },
    {
        title: "Nơi mua",
        dataIndex: "noi_mua",
        width: 110,
        optFilter: true
    },
    {
        title: "Khách hàng",
        dataIndex: "ma_khach_hang",
        width: 110,
        optFilter: true
    },
    {
        title: "Thanh toán",
        dataIndex: "ngay_thanh_toan",
        width: 90
    }
];

export default columns;

import moment from "moment";
import { vndFormater } from "../../../utils";

const columns = [
    {
        title: "Ngày tháng",
        dataIndex: "ngay_thang",
        width: 110,
        sorter: (a, b) =>
            moment(a.ngay_thang, "DD/MM/YYYY").unix() -
            moment(b.ngay_thang, "DD/MM/YYYY").unix()
    },
    {
        title: "Mã giữ chỗ",
        dataIndex: "ma_giu_cho",
        optFind: true,
        width: 90
    },
    {
        title: "Số vé",
        dataIndex: "so_ve",
        width: 140,
        optFind: true
    },
    {
        title: "Hãng bay",
        dataIndex: "hang_bay",
        width: 80,
        optFilter: true
    },
    {
        title: "Tên khách",
        dataIndex: "ten_khach",
        width: 130,
        optFind: true
    },
    {
        title: "TG đi",
        dataIndex: "ngay_gio_di",
        width: 110,
        sorter: (a, b) =>
            moment(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() -
            moment(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix()
    },
    {
        title: "Chặng đi",
        dataIndex: "chang_di",
        width: 100
    },
    {
        title: "TG về",
        dataIndex: "ngay_gio_ve",
        width: 110,
        sorter: (a, b) =>
            moment(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() -
            moment(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix()
    },
    {
        title: "Chặng về",
        dataIndex: "chang_ve",
        width: 100
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
        width: 110
    },
    {
        title: "Người nhập",
        dataIndex: "username",
        width: 90,
        optFilter: true
    }
];

export default columns;

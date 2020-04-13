import moment from "moment";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [phanLoai, setPhanLoai] = useState([]);
    const [state, setState] = useState({
        nhaCungCap: [],
        khachHang: []
    });
    const { nhaCungCap, khachHang } = state;

    useEffect(() => {
        // Chuyển từ Component khác tới. Cụ thể ở đây là từ Nhà cung cấp
        const promise1 = axios.get("/api/nha-cung-cap/all");
        const promise2 = axios.get("/api/khach-hang/all");

        Promise.all([promise1, promise2]).then(response => {
            if (response[0].data.success && response[1].data.success)
                setState({
                    nhaCungCap: response[0].data.data,
                    khachHang: response[1].data.data
                });
        });
    }, []);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        //TODO: With filtered HangHoa => Phan Loai Has less than normal
        let phanLoai = [...new Set(data.map(x => x.phan_loai))];
        setPhanLoai(phanLoai);
    };

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Giá mua: {vndFormater.format(record.gia_mua)}. Ngày lấy nơi mua:{" "}
                {record.ngay_mua}
            </li>
            <li>
                Giá bán: {vndFormater.format(record.gia_ban)}. Ngày trả khách:{" "}
                {record.ngay_tra_khach}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
            <li>Tình trạng: {record.tinh_trang}</li>
            <li>Ghi chú: {record.ghi_chu}</li>
            <li>Người tạo: {record.username}</li>
        </ul>
    );

    const columns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_thang",
            width: 120,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
        },
        {
            title: "Mã Visa",
            dataIndex: "ma_visa",
            optFind: true,
            width: 150
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 120
        },
        {
            title: "Quốc gia",
            dataIndex: "quoc_gia",
            optFind: true,
            width: 120
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "nha_cung_cap",
            optFilter: true,
            width: 150
        },
        {
            title: "Khách hàng",
            dataIndex: "ten_khach_hang",
            optFilter: true,
            width: 150
        },
        {
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            width: 120,
            sorter: (a, b) => a.lai - b.lai
        },
        {
            title: "Tình trạng",
            dataIndex: "tinh_trang",
            width: 120,
            optFilter: true
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        }
    ];

    return (
        <ListForm
            url="visa"
            filterBox
            columns={columns}
            tableSize={{ x: 800 }}
            modalWidth="1100px"
            formTemplate={
                <FormItem
                    phanLoai={phanLoai}
                    nhaCungCap={nhaCungCap}
                    khachHang={khachHang}
                />
            }
            formInitialValues={{
                gia_mua: 0,
                gia_ban: 0,
                ngay_thang: moment().format("DD/MM/YYYY")
            }}
            onChangeData={onChangeData}
            expandedRowRender={expandedRowRender}
        />
    );
});

export default withRouter(List);

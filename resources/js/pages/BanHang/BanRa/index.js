import moment from "moment";
import React, { useEffect, useState } from "react";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [state, setState] = useState({
        hangHoa: [],
        khachHang: []
    });
    const { hangHoa, khachHang } = state;
    const [formValue, setFormValue] = useState(undefined);

    useEffect(() => {
        const promise1 = axios.get("/api/hang-hoa");
        const promise2 = axios.get("/api/khach-hang");

        Promise.all([promise1, promise2]).then(response => {
            if (response[0].data.success && response[1].data.success)
                setState({
                    hangHoa: response[0].data.data,
                    khachHang: response[1].data.data
                });
        });
    }, []);

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Mã hàng: {record.ma_hang}. Tên hàng: {record.ten_hang}. Phân
                loại: {record.phan_loai}. Nhà cung cấp: {record.nha_cung_cap}
            </li>
            <li>
                Đơn giá mua: {vndFormater.format(record.don_gia_mua)}. Thành
                tiền mua: {vndFormater.format(record.thanh_tien_mua)}
            </li>
            <li>
                Đơn giá bán: {vndFormater.format(record.don_gia_ban)}. Thành
                tiền bán: {vndFormater.format(record.thanh_tien_ban)}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
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
            title: "Mã hàng",
            dataIndex: "ma_hang",
            optFind: true,
            width: 140
        },
        {
            title: "Tên hàng",
            dataIndex: "ten_hang",
            optFind: true,
            width: 170
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong",
            width: 120
        },
        {
            title: "TT bán",
            dataIndex: "thanh_tien_ban",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_ban - b.thanh_tien_ban,
            width: 120
        },
        {
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.lai - b.lai,
            width: 120
        },
        {
            title: "Khách hàng",
            dataIndex: "ma_khach_hang",
            optFilter: true,
            width: 120
        },
        {
            title: "Thanh toán",
            dataIndex: "ngay_thanh_toan",
            width: 120
        },
        {
            title: "Hoàn đổi",
            dataIndex: "ngay_hoan_doi",
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 170
        }
    ];

    const renderSummary = data => {
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    lai: previousValue.lai + currentValue.lai,
                    thanh_tien_ban:
                        previousValue.thanh_tien_ban +
                        currentValue.thanh_tien_ban
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={6}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.thanh_tien_ban)}</td>
                        <td>{vndFormater.format(sumObj.lai)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };

    /**
     * Callback from FOrmItem, trigger when select Hang Hoa
     * => Change setFormValues to ListForm => FormEdit
     */
    const handleFormValue = don_gia => {
        setFormValue({
            don_gia_mua: don_gia,
            don_gia_ban: don_gia
        });
    };

    return (
        <ListForm
            url="ban-ra"
            filterBox
            columns={columns}
            tableSize={{ x: 1000 }}
            modalWidth="800px"
            formTemplate={
                <FormItem
                    hangHoa={hangHoa}
                    khachHang={khachHang}
                    onChangeValue={handleFormValue}
                />
            }
            formInitialValues={{
                so_luong: 1,
                don_gia_mua: 0,
                don_gia_ban: 0,
                ngay_thang: moment().format("DD/MM/YYYY")
            }}
            expandedRowRender={expandedRowRender}
            setFormValues={formValue}
            renderSummary={renderSummary}
        />
    );
});

export default List;

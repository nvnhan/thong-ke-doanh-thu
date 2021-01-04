import isEmpty from "lodash/isEmpty";
import React, { useState } from "react";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import exportToExcel from "../../../utils/exportToExcel";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [phanLoai, setPhanLoai] = useState([]);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        //TODO: With filtered HangHoa => Phan Loai Has less than normal
        let phanLoai = [...new Set(data.map(x => x.phan_loai))];
        setPhanLoai(phanLoai);
    };

    const renderSummary = data => {
        if (!isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    lai: previousValue.lai + currentValue.lai
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={6}>Tổng cộng</th>
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
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            width: 120,
            sorter: (a, b) => a.lai - b.lai
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

    const exportDS = (data, selectedRowKeys) => {
        const filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
        const newData = filtered.map((p, index) => {
            const t = { stt: index + 1, ...p };
            delete t["id"];
            delete t["id_khach_hang"];
            delete t["id_nha_cung_cap"];
            delete t["id_nha_cung_cap"];
            return t;
        });

        const dataExport = [
            {
                stt: "STT",
                ngay_thang: "Ngày tháng",
                phan_loai: "Phân loại",
                ma_visa: "Mã Visa",
                quoc_gia: "Quốc gia",
                nha_cung_cap: "Nhà cung cấp",
                ngay_mua: "Ngày mua",
                gia_mua: "Giá mua",
                ngay_tra_khach: "Ngày trả khách",
                gia_ban: "Giá bán",
                lai: "Lãi",
                ten_khach_hang: "Khách hàng",
                da_thanh_toan: "Đã thanh toán",
                ngay_thanh_toan: "Ngày thanh toán",
                chua_thanh_toan: "Còn lại",
                tinh_trang: "Tình trạng",
                ghi_chu: "Ghi chú",
                username: "Người nhập"
            },
            ...newData
        ];
        exportToExcel(dataExport, "visa.xlsx");
    };

    const otherButtons = [
        {
            key: "export",
            onClick: exportDS,
            title: "Xuất danh sách ra Excel"
        }
    ];

    return (
        <ListForm
            url="visa"
            filterBox
            columns={columns}
            tableSize={{ x: 800 }}
            modalWidth="1100px"
            formTemplate={<FormItem phanLoai={phanLoai} />}
            formInitialValues={{
                gia_mua: 0,
                gia_ban: 0,
                ngay_thang: moment().format("DD/MM/YYYY")
            }}
            onChangeData={onChangeData}
            expandedRowRender={expandedRowRender}
            renderSummary={renderSummary}
            otherButtons={otherButtons}
        />
    );
});

export default List;

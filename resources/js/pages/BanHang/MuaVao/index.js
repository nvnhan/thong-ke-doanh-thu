import isEmpty from "lodash/isEmpty";
import React, { useState } from "react";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import exportToExcel from "../../../utils/exportToExcel";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [formValue, setFormValue] = useState(undefined);

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Mã hàng: {record.ma_hang}. Tên hàng: {record.ten_hang}. Phân
                loại: {record.phan_loai}. Nhà cung cấp: {record.nha_cung_cap}
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
            width: 120
        },
        {
            title: "Tên hàng",
            dataIndex: "ten_hang",
            optFind: true,
            width: 140
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "nha_cung_cap",
            width: 140,
            optFilter: true
        },
        {
            title: "Giá mua",
            dataIndex: "don_gia",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.don_gia - b.don_gia,
            width: 120
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong",
            width: 120
        },
        {
            title: "Thành tiền",
            dataIndex: "thanh_tien",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien - b.thanh_tien,
            width: 120
        },
        {
            title: "Thanh toán",
            dataIndex: "ngay_thanh_toan",
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
        if (!isEmpty(data)) {
            let thanh_tien = 0;
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                thanh_tien += element.thanh_tien;
            }
            return (
                <>
                    <tr>
                        <th colSpan={8}>Tổng cộng</th>
                        <td>{vndFormater.format(thanh_tien)}</td>
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
    const handleFormValue = don_gia =>
        setFormValue({
            don_gia,
            resetFields: () => setFormValue(undefined)
        });

    const exportDS = (data, selectedRowKeys) => {
        const filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
        const newData = filtered.map((p, index) => {
            const t = { stt: index + 1, ...p };
            delete t["id"];
            delete t["id_hang_hoa"];
            return t;
        });

        const dataExport = [
            {
                stt: "STT",
                ngay_thang: "Ngày tháng",
                ma_hang: "Mã hàng",
                ten_hang: "Tên hàng",
                phan_loai: "Phân loại",
                nha_cung_cap: "Nhà cung cấp",
                so_luong: "Số lượng",
                don_gia: "Đơn giá",
                thanh_tien: "Thành tiền",
                da_thanh_toan: "Đã thanh toán",
                ngay_thanh_toan: "Ngày thanh toán",
                chua_thanh_toan: "Còn lại",
                ghi_chu: "Ghi chú",
                username: "Người nhập"
            },
            ...newData
        ];
        exportToExcel(dataExport, "mua-vao.xlsx");
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
            url="mua-vao"
            filterBox
            columns={columns}
            tableSize={{ x: 800 }}
            formTemplate={<FormItem onChangeValue={handleFormValue} />}
            formInitialValues={{
                so_luong: 1,
                ngay_thang: moment().format("DD/MM/YYYY")
            }}
            expandedRowRender={expandedRowRender}
            setFormValues={formValue}
            renderSummary={renderSummary}
            otherButtons={otherButtons}
        />
    );
});

export default List;

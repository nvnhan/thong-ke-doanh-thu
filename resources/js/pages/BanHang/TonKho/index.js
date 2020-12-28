import React from "react";
import ListForm from "../../../components/ListForm";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { vndFormater } from "../../../utils";
import isEmpty from "lodash/isEmpty";
import exportToExcel from "../../../utils/exportToExcel";

const List = React.memo(props => {
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
            width: 140
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 140
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "nha_cung_cap",
            width: 140,
            optFilter: true
        },
        {
            title: "Đơn giá hiện tại",
            dataIndex: "don_gia",
            render: number => vndFormater.format(number),
            // sorter: (a, b) => a.don_gia - b.don_gia,
            width: 120
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong_ton_kho",
            width: 120
        },
        {
            title: "Thành tiền",
            dataIndex: "thanh_tien_ton_kho",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_ton_kho - b.thanh_tien_ton_kho,
            width: 120
        }
    ];

    const renderSummary = data => {
        if (!isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    thanh_tien_ton_kho:
                        previousValue.thanh_tien_ton_kho +
                        currentValue.thanh_tien_ton_kho
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={6}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.thanh_tien_ton_kho)}</td>
                    </tr>
                </>
            );
        }
    };

    const getOtherFilter = () => {
        return [
            {
                name: "den_ngay",
                label: "Đến ngày",
                render: <MyDatePicker format="DD/MM/YYYY" />
            }
        ];
    };

    const exportDS = (data, selectedKeys) => {
        const newData = data.map((p, index) => {
            const t = { stt: index + 1, ...p };
            delete t["id"];
            delete t["id_tai_khoan"];
            delete t["created_at"];
            delete t["updated_at"];
            delete t["updated_at"];
            delete t["ghi_chu"];
            delete t["username"];
            return t;
        });

        const dataExport = [
            {
                stt: "STT",
                ma_hang: "Mã hàng",
                ten_hang: "Tên hàng",
                phan_loai: "Phân loại",
                don_vi: "Đơn vị tính",
                don_gia: "Đơn giá",
                nha_cung_cap: "Nhà cung cấp",
                so_luong_ton_kho: "Số lượng tồn kho",
                thanh_tien_ton_kho: "Thành tiền tồn kho"
            },
            ...newData
        ];
        exportToExcel(dataExport, "ton-kho.xlsx");
    };

    const otherButtons = [
        {
            key: "export",
            onClick: exportDS,
            title: "Xuất danh sách ra Excel",
            selectRequired: false
        }
    ];

    return (
        <ListForm
            url="ton-kho"
            filterBox
            tuNgayDenNgay={false}
            otherFilter={getOtherFilter()}
            filterInitialValue={{ den_ngay: moment().format("DD/MM/YYYY") }}
            columns={columns}
            insertable={false}
            selectable={false}
            editable={false}
            deleteable={false}
            tableSize={{ x: 800 }}
            renderSummary={renderSummary}
            otherButtons={otherButtons}
        />
    );
});

export default List;

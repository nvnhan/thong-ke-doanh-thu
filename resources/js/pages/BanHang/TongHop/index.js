import React from "react";
import ListForm from "../../../components/ListForm";
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
            width: 150
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
        // {
        //     title: "Đơn giá hiện tại",
        //     dataIndex: "don_gia",
        //     render: number => vndFormater.format(number),
        //     // sorter: (a, b) => a.don_gia - b.don_gia,
        //     width: 110
        // },
        {
            title: "SL mua vào",
            dataIndex: "so_luong_mua_vao",
            width: 110
        },
        {
            title: "TT mua vào",
            dataIndex: "thanh_tien_mua_vao",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_mua_vao - b.thanh_tien_mua_vao,
            width: 120
        },
        {
            title: "SL bán ra",
            dataIndex: "so_luong_ban_ra",
            width: 110
        },
        {
            title: "TT bán ra",
            dataIndex: "thanh_tien_ban_ra",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_ban_ra - b.thanh_tien_ban_ra,
            width: 120
        },
        {
            title: "SL hoàn đổi",
            dataIndex: "so_luong_hoan_doi",
            width: 110
        },
        {
            title: "TT hoàn đổi",
            dataIndex: "thanh_tien_hoan_doi",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_hoan_doi - b.thanh_tien_hoan_doi,
            width: 120
        },
        {
            title: "SL tồn kho",
            dataIndex: "so_luong_ton_kho",
            width: 110
        },
        {
            title: "TT tồn kho",
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
                    thanh_tien_mua_vao:
                        previousValue.thanh_tien_mua_vao +
                        currentValue.thanh_tien_mua_vao,
                    thanh_tien_ban_ra:
                        previousValue.thanh_tien_ban_ra +
                        currentValue.thanh_tien_ban_ra,
                    thanh_tien_hoan_doi:
                        previousValue.thanh_tien_hoan_doi +
                        currentValue.thanh_tien_hoan_doi,
                    thanh_tien_ton_kho:
                        previousValue.thanh_tien_ton_kho +
                        currentValue.thanh_tien_ton_kho
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={5}>Tổng cộng</th>
                        <td colSpan={2}>
                            {vndFormater.format(sumObj.thanh_tien_mua_vao)}
                        </td>
                        <td colSpan={2}>
                            {vndFormater.format(sumObj.thanh_tien_ban_ra)}
                        </td>
                        <td colSpan={2}>
                            {vndFormater.format(sumObj.thanh_tien_hoan_doi)}
                        </td>
                        <td colSpan={2}>
                            {vndFormater.format(sumObj.thanh_tien_ton_kho)}
                        </td>
                    </tr>
                </>
            );
        }
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
                so_luong_mua_vao: "Số lượng mua vào",
                thanh_tien_mua_vao: "Thành tiền mua vào",
                so_luong_ban_ra: "Số lượng bán ra",
                thanh_tien_ban_ra: "Thành tiền bán ra",
                so_luong_hoan_doi: "Số lượng hoàn đổi",
                thanh_tien_hoan_doi: "Thành tiền hoàn đổi",
                so_luong_ton_kho: "Số lượng tồn kho",
                thanh_tien_ton_kho: "Thành tiền tồn kho"
            },
            ...newData
        ];
        exportToExcel(dataExport, "tong-hop-ban-hang.xlsx");
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
            url="tong-hop-hang"
            filterBox
            columns={columns}
            insertable={false}
            selectable={false}
            editable={false}
            deleteable={false}
            tableSize={{ x: 1300 }}
            renderSummary={renderSummary}
            otherButtons={otherButtons}
        />
    );
});

export default List;

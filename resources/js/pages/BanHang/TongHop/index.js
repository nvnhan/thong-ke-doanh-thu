import React from "react";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";

const List = React.memo(props => {
    const columns = [
        {
            title: "Mã hàng",
            dataIndex: "ma_hang",
            optFind: true,
            width: 110
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
            width: 110
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
            width: 110
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
            width: 110
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
            width: 110
        }
    ];

    const renderFooter = data => {
        if (!_.isEmpty(data)) {
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
                "Tổng tiền mua vào: " +
                vndFormater.format(sumObj.thanh_tien_mua_vao) +
                ". Bán ra: " +
                vndFormater.format(sumObj.thanh_tien_ban_ra) +
                ". Hoàn đổi: " +
                vndFormater.format(sumObj.thanh_tien_hoan_doi) +
                ". Tồn kho: " +
                vndFormater.format(sumObj.thanh_tien_ton_kho)
            );
        }
    };

    return (
        <ListForm
            url="tong-hop-hang"
            filterBox
            columns={columns}
            insertable={false}
            selectable={false}
            editable={false}
            deleteable={false}
            tableSize={{ x: 1200 }}
            renderFooter={renderFooter}
        />
    );
});

export default List;

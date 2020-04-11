import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React from "react";
import ListForm from "../../../components/ListForm";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { vndFormater } from "../../../utils";

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
            dataIndex: "so_luong",
            width: 120
        },
        {
            title: "Thành tiền",
            dataIndex: "thanh_tien",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien - b.thanh_tien,
            width: 120
        }
    ];

    const renderFooter = data => {
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    thanh_tien:
                        previousValue.thanh_tien + currentValue.thanh_tien
                };
            });
            return "Tổng tiền: " + vndFormater.format(sumObj.thanh_tien);
        }
    };

    const getOtherFilter = () => {
        return [
            {
                name: "den_ngay",
                label: "Tính đến ngày",
                render: (
                    <MyDatePicker
                        style={{ width: "100%" }}
                        locale={locale}
                        format="DD/MM/YYYY"
                    />
                )
            }
        ];
    };

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
            // renderFooter={renderFooter}
        />
    );
});

export default List;

import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React from "react";
import ListForm from "../../../components/ListForm";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { vndFormater } from "../../../utils";
import exportDS from "../../../utils/exportDatVe";

const List = React.memo(props => {
    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Chuyến bay đi: {record.cb_di}. Chuyến bay về: {record.cb_ve}
            </li>
            <li>Loại tuổi: {record.ten_loai_tuoi}</li>
            <li>
                Giá net: {vndFormater.format(record.gia_net)}. Phí soi chiếu, an
                ninh: {vndFormater.format(record.phi_san_bay)}. Phí quản trị:{" "}
                {vndFormater.format(record.phu_phi_san_bay)}
            </li>
            <li>
                VAT: {vndFormater.format(record.vat)}. Phụ phí:{" "}
                {vndFormater.format(record.phu_phi)}
            </li>
            <li>
                Hành lý: {vndFormater.format(record.hanh_ly)}. Loại hành lý:{" "}
                {record.loai_hanh_ly}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
            {record.chua_xuat_ve ? (
                <li>Cảnh báo xuất vé: {record.canh_bao_xuat_ve}</li>
            ) : (
                <li>✔ Đã xuất vé</li>
            )}
            {!_.isEmpty(record.ngay_nhac_lich) && (
                <li>Nhắc lịch bay: {record.ngay_nhac_lich}</li>
            )}
            <li>Ghi chú: {record.ghi_chu}</li>
            <li>Người tạo: {record.username}</li>
        </ul>
    );

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

    const getOtherFilter = () => {
        return [
            {
                name: "den_ngay",
                label: "Tính đến",
                render: (
                    <MyDatePicker
                        style={{
                            width: "100%"
                        }}
                        locale={locale}
                        format="HH:mm DD/MM/YYYY"
                    />
                )
            }
        ];
    };

    const renderSummary = data => {
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    tong_tien: previousValue.tong_tien + currentValue.tong_tien,
                    tong_tien_thu_khach:
                        previousValue.tong_tien_thu_khach +
                        currentValue.tong_tien_thu_khach
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={11}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.tong_tien)}</td>
                        <td>
                            {vndFormater.format(sumObj.tong_tien_thu_khach)}
                        </td>
                        <td>
                            {vndFormater.format(
                                sumObj.tong_tien_thu_khach - sumObj.tong_tien
                            )}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };

    const otherButtons = [
        {
            key: "export",
            onClick: (data, selectedRowKeys) =>
                exportDS(data, selectedRowKeys, "chua-bay.xlsx"),
            title: "Xuất danh sách ra Excel",
            selectRequired: false
        }
    ];

    return (
        <ListForm
            url="chua-bay"
            insertable={false}
            selectable={false}
            editable={false}
            deleteable={false}
            filterBox
            tuNgayDenNgay={false}
            otherFilter={getOtherFilter()}
            filterInitialValue={{
                den_ngay: moment().format("HH:mm DD/MM/YYYY")
            }}
            columns={columns}
            tableSize={{ x: 1800 }}
            otherButtons={otherButtons}
            expandedRowRender={expandedRowRender}
            renderSummary={renderSummary}
        />
    );
});

export default List;

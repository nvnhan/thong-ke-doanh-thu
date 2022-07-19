import AppstoreAddOutlined from "@ant-design/icons/AppstoreAddOutlined";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import exportToExcel from "../../../utils/exportToExcel";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const dinh_danh = props.location.dd;

    /**
     * Redirect to Tour Chi Tiet with addition params
     */
    const onClickRow = record => {
        const pathname = `/thu-chi-chi-tiet`;
        props.history.push({ pathname, tc: record });
    };

    const thuChiAction = [
        {
            key: "dsThuChiChiTiet",
            onClick: onClickRow,
            title: "Thu chi chi tiết",
            icon: <AppstoreAddOutlined />,
            color: "#4bab92" // Primary color
        }
    ];

    const exportDS = (data, selectedRowKeys) => {
        const filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
        const newData = filtered.map((p, index) => ({
            stt: index + 1,
            ngay_thang: p.ngay_thang,
            hang_muc: p.hang_muc,
            so_tien: p.so_tien,
            con_du: p.con_du,
            tai_khoan_di: p.tai_khoan_di,
            tai_khoan_den: p.tai_khoan_den,
            ten_khach_hang: p.ten_khach_hang,
            username: p.username
        }));
        const dataExport = [
            {
                stt: "STT",
                ngay_thang: "Ngày tháng",
                hang_muc: "Nội dung",
                so_tien: "Số tiền",
                con_du: "Còn dư",
                tai_khoan_di: "Tài khoản đi",
                tai_khoan_den: "Nơi nhận",
                ten_khach_hang: "Khách hàng",
                username: "Người nhập"
            },
            ...newData
        ];
        exportToExcel(dataExport, "thu-chi.xlsx");
    };

    const otherButtons = [
        {
            key: "them-tu-file",
            onClick: () =>
                props.history.push({ pathname: "/thu-chi/them-file" }),
            title: "Thêm từ file",
            selectRequired: false
        },
        {
            key: "export",
            onClick: exportDS,
            title: "Xuất danh sách ra Excel"
        }
    ];

    const renderSummary = data => {
        if (!isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    so_tien: previousValue.so_tien + currentValue.so_tien,
                    con_du: previousValue.con_du + currentValue.con_du
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={3}>Tổng cộng</th>
                        <td align="right">
                            {vndFormater.format(sumObj.so_tien)}
                        </td>
                        <td align="right">
                            {vndFormater.format(sumObj.con_du)}
                        </td>
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
            title: "Nội dung",
            dataIndex: "hang_muc",
            optFind: true,
            width: 200
        },
        {
            title: "Số tiền",
            dataIndex: "so_tien",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.so_tien - b.so_tien,
            width: 120,
            align: "right"
        },
        {
            title: "Còn dư",
            dataIndex: "con_du",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.con_du - b.con_du,
            width: 120,
            align: "right"
        },
        {
            title: "TK chi",
            dataIndex: "tai_khoan_di",
            width: 120,
            optFilter: true
        },
        {
            title: "Nơi nhận",
            dataIndex: "tai_khoan_den",
            width: 120,
            optFilter: true
        },
        {
            title: "Khách hàng",
            dataIndex: "ten_khach_hang",
            width: 120,
            optFilter: true
        },
        {
            title: "Người nhập",
            dataIndex: "username",
            width: 90,
            optFilter: true
        }
    ];

    return (
        <>
            {dinh_danh !== undefined && (
                <div
                    style={{ padding: "16px 20px 0", backgroundColor: "#fff" }}
                >
                    <b>Dữ liệu xử lý được:</b>
                </div>
            )}
            <ListForm
                url="thu-chi"
                filter={dinh_danh && { dd: dinh_danh }}
                filterBox={dinh_danh === undefined}
                insertable={dinh_danh === undefined}
                columns={columns}
                tableSize={{ x: 1000 }}
                modalWidth="800px"
                formTemplate={<FormItem />}
                formInitialValues={{
                    so_tien: 100000,
                    ngay_thang: moment().format("DD/MM/YYYY")
                }}
                otherButtons={otherButtons}
                otherActions={thuChiAction}
                renderSummary={renderSummary}
            />
        </>
    );
});

export default withRouter(List);

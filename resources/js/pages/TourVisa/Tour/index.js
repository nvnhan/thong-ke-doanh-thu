import AppstoreAddOutlined from "@ant-design/icons/AppstoreAddOutlined";
import isEmpty from "lodash/isEmpty";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import exportToExcel from "../../../utils/exportToExcel";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [phanLoai, setPhanLoai] = useState([]);
    const [khachHang, setKhachHang] = useState([]);

    useEffect(() => {
        axios
            .get("/api/khach-hang/all")
            .then(response => {
                if (response.data.success) setKhachHang(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        // Set là tập hợp, mỗi phần tử là duy nhất, input là Array
        let phanLoai = [
            ...new Set([
                ...data.map(x => x.phan_loai),
                "Tour quốc nội",
                "Vé máy bay"
            ])
        ];
        setPhanLoai(phanLoai);
    };

    const renderSummary = data => {
        if (!isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    gia_tour: previousValue.gia_tour + currentValue.gia_tour,
                    gia_ban: previousValue.gia_ban + currentValue.gia_ban,
                    lai: previousValue.lai + currentValue.lai
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={6}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.gia_tour)}</td>
                        <td>{vndFormater.format(sumObj.gia_ban)}</td>
                        <td>{vndFormater.format(sumObj.lai)}</td>
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
                Bắt đầu: {record.bat_dau}. Kết thúc: {record.ket_thuc}
            </li>
            <li>
                Giá tour: {vndFormater.format(record.gia_tour)}. Số lượng:{" "}
                {record.so_luong}
            </li>
            <li>
                Giá bán: {vndFormater.format(record.gia_ban)}. Tổng tiền bán:{" "}
                {vndFormater.format(record.tong_tien_ban)}
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
            title: "Mã tour",
            dataIndex: "ma_tour",
            optFind: true,
            width: 140
        },
        {
            title: "Tên tour",
            dataIndex: "ten_tour",
            width: 170,
            optFind: true
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            width: 140,
            optFilter: true
        },
        {
            title: "Giá tour",
            dataIndex: "gia_tour",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.gia_tour - b.gia_tour,
            width: 120
        },
        {
            title: "Giá bán",
            dataIndex: "gia_ban",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.gia_ban - b.gia_ban,
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
            dataIndex: "ten_khach_hang",
            width: 120,
            optFilter: true
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
            width: 170
        }
    ];

    /**
     * Redirect to Tour Chi Tiet with addition params
     */
    const onClickRow = record => {
        const pathname = `/tour-chi-tiet`;
        props.history.push({
            pathname,
            tour: record
        });
    };

    const tourAction = [
        {
            key: "dsTourChiTiet",
            onClick: onClickRow,
            title: "Tour chi tiết",
            icon: <AppstoreAddOutlined />,
            color: "#4bab92" // Primary color
        }
    ];

    const exportDS = (data, selectedRowKeys) => {
        const filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
        const newData = filtered.map((p, index) => {
            const t = { stt: index + 1, ...p };
            delete t["id"];
            delete t["id_khach_hang"];
            return t;
        });

        const dataExport = [
            {
                stt: "STT",
                ngay_thang: "Ngày tháng",
                ma_tour: "Mã tour",
                ten_tour: "Tên tour",
                phan_loai: "Phân loại",
                bat_dau: "Bắt đầu",
                ket_thuc: "Kết thúc",
                so_luong: "Số lượng",
                gia_tour: "Giá tour",
                gia_ban: "Giá bán",
                tong_tien_ban: "Tổng tiền bán",
                lai: "Lãi",
                ten_khach_hang: "Khách hàng",
                da_thanh_toan: "Đã thanh toán",
                ngay_thanh_toan: "Ngày thanh toán",
                chua_thanh_toan: "Còn lại",
                hoan_thanh: "Hoàn thành",
                tinh_trang: "Tình trạng",
                ghi_chu: "Ghi chú",
                username: "Người nhập"
            },
            ...newData
        ];
        exportToExcel(dataExport, "tour.xlsx");
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
            url="tour"
            filterBox
            columns={columns}
            tableSize={{ x: 1200 }}
            modalWidth="1100px"
            formTemplate={
                <FormItem phanLoai={phanLoai} khachHang={khachHang} />
            }
            formInitialValues={{
                so_luong: 1,
                ngay_thang: moment().format("DD/MM/YYYY"),
                gia_ban: 0
            }}
            otherActions={tourAction}
            onChangeData={onChangeData}
            expandedRowRender={expandedRowRender}
            renderSummary={renderSummary}
            otherButtons={otherButtons}
        />
    );
});

export default withRouter(List);

import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import ContainerOutlined from "@ant-design/icons/ContainerOutlined";
import Button from "antd/lib/button";
import isEmpty from "lodash/isEmpty";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
import exportDS from "../../../utils/exportBanRa";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [formValue, setFormValue] = useState(undefined);
    const [record, setRecord] = useState(undefined);

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
            title: "Số hóa đơn",
            dataIndex: "so_hoa_don",
            width: 100,
            align: "center",
            optFind: true,
            onCell: record => ({
                onClick: () => setRecord(record),
                style: { cursor: "pointer" }
            })
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
            width: 200
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong",
            width: 80,
            align: "center"
        },
        {
            title: "TT bán",
            dataIndex: "thanh_tien_ban",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien_ban - b.thanh_tien_ban,
            width: 120,
            align: "right"
        },
        {
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.lai - b.lai,
            width: 120,
            align: "right"
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
            width: 120,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
        },
        // {
        //     title: "Hoàn đổi",
        //     dataIndex: "ngay_hoan_doi",
        //     width: 120,
        //     sorter: (a, b) =>
        //         moment(a.ngay_thang, "DD/MM/YYYY").unix() -
        //         moment(b.ngay_thang, "DD/MM/YYYY").unix()
        // },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 170
        }
    ];

    const renderSummary = data => {
        if (!isEmpty(data)) {
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
                        <th colSpan={7}>Tổng cộng</th>
                        <td align="right">
                            {vndFormater.format(sumObj.thanh_tien_ban)}
                        </td>
                        <td align="right">{vndFormater.format(sumObj.lai)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        {/* <td></td> */}
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
            don_gia_ban: don_gia,
            resetFields: () => setFormValue(undefined)
        });
    };

    const xemHoaDon = (data, selectedRowKeys) => {
        const u = localStorage.getItem("id");
        const newWindow = window.open(
            window.location.origin +
                `/ban-ra/hoa-don/${u}/${record.so_hoa_don}`,
            "_blank",
            "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
    };

    const otherButtons = [
        {
            key: "hoa_don",
            title: "Xuất hóa đơn",
            hide: !record || !record.so_hoa_don,
            selectRequired: false,
            icon: <ContainerOutlined />,
            childs: [
                {
                    key: "hd_view",
                    title: "Xem trực tiếp",
                    selectRequired: false,
                    onClick: xemHoaDon
                },
                {
                    key: "hd_export",
                    title: "Xuất file Excel",
                    selectRequired: false,
                    onClick: () =>
                        downloadApi(
                            "/api/ban-ra/xuat-hoa-don",
                            { hoa_don: record.so_hoa_don },
                            `Hóa đơn bán hàng ${record.so_hoa_don}.xlsx`
                        )
                }
            ]
        },
        {
            key: "export",
            onClick: (data, selectedRowKeys) =>
                exportDS(data, selectedRowKeys, "ban-ra.xlsx"),
            title: "Xuất danh sách ra Excel"
        }
    ];

    const onChangeData = (data, newData) => {
        if (newData && newData[0].so_hoa_don) setRecord(newData[0]);
    };

    return (
        <>
            {record?.so_hoa_don && (
                <div
                    style={{ padding: "16px 20px 0", backgroundColor: "#fff" }}
                >
                    <Button
                        onClick={() => setRecord(undefined)}
                        icon={<ArrowLeftOutlined />}
                        type="link"
                    />{" "}
                    <b>Hóa đơn bán hàng số: {record.so_hoa_don}</b>
                </div>
            )}
            <ListForm
                url="ban-ra"
                filterBox={!record?.so_hoa_don}
                columns={columns}
                tableSize={{ x: 900 }}
                modalWidth={800}
                filter={
                    record?.so_hoa_don
                        ? { hoa_don: record.so_hoa_don }
                        : undefined
                }
                formTemplate={
                    <FormItem
                        onChangeValue={handleFormValue}
                        hoaDon={record?.so_hoa_don}
                    />
                }
                otherParams={
                    record ? { so_hoa_don: record.so_hoa_don } : undefined
                }
                formInitialValues={{
                    so_luong: 1,
                    ngay_thang: record
                        ? record.ngay_thang
                        : moment().format("DD/MM/YYYY"),
                    id_khach_hang: record?.id_khach_hang,
                    so_hoa_don: record?.so_hoa_don
                }}
                expandedRowRender={expandedRowRender}
                setFormValues={formValue}
                renderSummary={renderSummary}
                otherButtons={otherButtons}
                onChangeData={onChangeData}
            />
        </>
    );
});

export default withRouter(List);

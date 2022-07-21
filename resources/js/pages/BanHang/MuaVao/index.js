import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import ContainerOutlined from "@ant-design/icons/ContainerOutlined";
import Button from "antd/lib/button";
import isEmpty from "lodash/isEmpty";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import { downloadApi } from "../../../utils/downloadFile";
import exportToExcel from "../../../utils/exportToExcel";
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
            width: 120,
            align: "right"
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong",
            width: 80,
            align: "center"
        },
        {
            title: "Thành tiền",
            dataIndex: "thanh_tien",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.thanh_tien - b.thanh_tien,
            width: 120,
            align: "right"
        },
        {
            title: "Thanh toán",
            dataIndex: "ngay_thanh_toan",
            width: 120,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
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
                        <th colSpan={9}>Tổng cộng</th>
                        <td align="right">{vndFormater.format(thanh_tien)}</td>
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
                so_hoa_don: "Số hóa đơn",
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
            key: "hoa_don",
            title: "Xuất hóa đơn",
            hide: !record || !record.so_hoa_don,
            selectRequired: false,
            icon: <ContainerOutlined />,
            childs: [
                {
                    key: "hd_view",
                    title: "Xem trực tiếp",
                    selectRequired: false
                },
                {
                    key: "hd_export",
                    title: "Xuất file Excel",
                    selectRequired: false,
                    onClick: () =>
                        downloadApi(
                            "/api/mua-vao/xuat-hoa-don",
                            { hoa_don: record.so_hoa_don },
                            `Hóa đơn nhập hàng ${record.so_hoa_don}.xlsx`
                        )
                }
            ]
        },
        {
            key: "export",
            onClick: exportDS,
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
                    <b>Hóa đơn nhập hàng số: {record.so_hoa_don}</b>
                </div>
            )}
            <ListForm
                url="mua-vao"
                filterBox={!record?.so_hoa_don}
                columns={columns}
                tableSize={{ x: 800 }}
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

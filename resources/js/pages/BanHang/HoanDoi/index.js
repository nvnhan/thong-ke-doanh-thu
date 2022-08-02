import React, { useState } from "react";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import exportDS from "../../../utils/exportBanRa";
import FormItem from "./FormItem";
import Button from "antd/lib/button";
import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";

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
                tiền mua: {vndFormater.format(record.thanh_tien_mua)}. Số lượng:{" "}
                {record.so_luong}
            </li>
            {/* <li>
                Đơn giá bán: {vndFormater.format(record.don_gia_ban)}. Thành
                tiền bán: {vndFormater.format(record.thanh_tien_ban)}. Lãi:{" "}
                {vndFormater.format(record.lai)}
            </li> */}
            <li>Ghi chú: {record.ghi_chu}</li>
            <li>Người tạo: {record.username}</li>
        </ul>
    );

    const columns = [
        {
            title: "Ngày hoàn đổi",
            dataIndex: "ngay_hoan_doi",
            width: 120,
            sorter: (a, b) =>
                moment(a.ngay_hoan_doi, "DD/MM/YYYY").unix() -
                moment(b.ngay_hoan_doi, "DD/MM/YYYY").unix()
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
            width: 130
        },
        {
            title: "Tên hàng",
            dataIndex: "ten_hang",
            optFind: true,
            width: 160
        },
        {
            title: "Số lượng",
            dataIndex: "so_luong",
            width: 90
        },
        // {
        //     title: "Tổng tiền bán",
        //     dataIndex: "thanh_tien_ban",
        //     render: number => vndFormater.format(number),
        //     sorter: (a, b) => a.thanh_tien_ban - b.thanh_tien_ban,
        //     width: 120
        // },
        {
            title: "Khách hàng",
            dataIndex: "ma_khach_hang",
            optFilter: true,
            width: 120
        },
        // {
        //     title: "Thanh toán",
        //     dataIndex: "ngay_thanh_toan_hoan_doi",
        //     width: 120
        // },
        // {
        //     title: "TK trả hoàn đổi",
        //     dataIndex: "tai_khoan_tra_hoan_doi",
        //     width: 120,
        //     optFilter: true
        // },
        {
            title: "Hoàn đổi xong",
            dataIndex: "ngay_hoan_doi_xong",
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        }
    ];

    const otherButtons = [
        {
            key: "export",
            onClick: (data, selectedRowKeys) =>
                exportDS(data, selectedRowKeys, "hoan-doi.xlsx"),
            title: "Xuất danh sách ra Excel"
        }
    ];

    // const renderSummary = data => {
    //     if (!isEmpty(data)) {
    //         const sumObj = data.reduce((previousValue, currentValue) => {
    //             return {
    //                 lai: previousValue.lai + currentValue.lai,
    //                 thanh_tien_ban:
    //                     previousValue.thanh_tien_ban +
    //                     currentValue.thanh_tien_ban
    //             };
    //         });
    //         return (
    //             <>
    //                 <tr>
    //                     <th colSpan={7}>Tổng cộng</th>
    //                     <td align="right">
    //                         {vndFormater.format(sumObj.thanh_tien_ban)}
    //                     </td>
    //                     <td align="right">{vndFormater.format(sumObj.lai)}</td>
    //                     <td></td>
    //                     <td></td>
    //                     <td></td>
    //                     <td></td>
    //                     <td></td>
    //                 </tr>
    //             </>
    //         );
    //     }
    // };

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
                    <b>Hóa đơn hoàn đổi số: {record.so_hoa_don}</b>
                </div>
            )}
            <ListForm
                url="hoan-doi"
                filterBox={!record?.so_hoa_don}
                columns={columns}
                tableSize={{ x: 1200 }}
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
                formInitialValues={{
                    so_luong: 1,
                    ngay_hoan_doi: moment().format("DD/MM/YYYY"),
                    id_khach_hang: record?.id_khach_hang,
                    so_hoa_don: record?.so_hoa_don
                }}
                otherParams={
                    record ? { so_hoa_don: record.so_hoa_don } : undefined
                }
                expandedRowRender={expandedRowRender}
                otherButtons={otherButtons}
                setFormValues={formValue}
                onChangeData={onChangeData}
                // renderSummary={renderSummary}
            />
        </>
    );
});

export default List;

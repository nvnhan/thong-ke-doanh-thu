import { Input, Modal } from "antd";
import React from "react";
import { downloadApi as createReport } from "../../../utils/downloadFile";
import exportDS from "../../../utils/exportDatVe";

const downloadApi = (url, selectedRowKeys, fileName, type = "") => {
    createReport(
        url,
        {
            objects: selectedRowKeys.join("|"),
            type
        },
        fileName
    );
};

/**
 * Tạo code vé
 */
const codeVe = (data, selectedRowKeys) => {
    axios
        .get(`/api/dat-ve/code-ve`, {
            params: {
                objects: selectedRowKeys.join("|")
            }
        })
        .then(response => {
            if (response.data.success) {
                Modal.info({
                    title: "Code vé",
                    content: (
                        <Input.TextArea rows={12} value={response.data.data} />
                    ),
                    width: "800px",
                    onOk() {}
                });
            }
        })
        .catch(error => console.log(error));
};

/**
 * Tạo mặt vé điện tử
 */
const veDienTu = (data, selectedRowKeys) =>
    downloadApi("/api/dat-ve/mau-ve", selectedRowKeys, "mat-ve-dien-tu.xlsx");
/**
 * Thông tin lấy hóa đơn
 */
const layHoaDon = (data, selectedRowKeys, type) =>
    downloadApi(
        "/api/dat-ve/lay-hoa-don",
        selectedRowKeys,
        "thong-tin-lay-hoa-don.xlsx",
        type
    );
/**
 * Bảng kê hóa đơn
 */
const bangKeHoaDon = (data, selectedRowKeys) =>
    downloadApi("/api/dat-ve/bang-ke", selectedRowKeys, "bang-ke-hoa-don.xlsx");
/**
 * Mẫu xuất công nợ
 */
const congNo = (data, selectedRowKeys) =>
    downloadApi(
        "/api/dat-ve/cong-no",
        selectedRowKeys,
        "mau-xuat-cong-no.xlsx"
    );

const otherButtons = props => [
    {
        key: "add-other",
        title: "Thêm",
        selectRequired: false,
        childs: [
            {
                key: "them-tu-ket-qua",
                onClick: () =>
                    props.history.push({ pathname: "/dat-ve/them-text" }),
                title: "Thêm từ kết quả đặt vé",
                selectRequired: false
            },
            {
                key: "them-tu-mail",
                onClick: () =>
                    props.history.push({ pathname: "/dat-ve/them-mail" }),
                title: "Thêm từ email",
                selectRequired: false
            },
            {
                key: "them-tu-file",
                onClick: () =>
                    props.history.push({ pathname: "/dat-ve/them-file" }),
                title: "Thêm từ file",
                selectRequired: false
            }
        ]
    },
    {
        key: "updates",
        onClick: props.showUpdates,
        title: "Cập nhật thông tin"
    },
    {
        key: "trichxuat",
        title: "Trích xuất",
        childs: [
            {
                key: "codeve",
                onClick: codeVe,
                title: "Tạo mẫu code vé"
            },
            {
                key: "vedientu",
                onClick: veDienTu,
                title: "Tạo mặt vé điện tử"
            },
            {
                key: "export",
                onClick: (data, selectedRowKeys) =>
                    exportDS(data, selectedRowKeys, "dat-ve.xlsx"),
                title: "Xuất danh sách ra Excel"
            },
            {
                key: "layhoadon",
                title: "Thông tin lấy hóa đơn",
                childs: [
                    {
                        key: "hoadonmuavao",
                        onClick: (data, selectedRowKeys) =>
                            layHoaDon(data, selectedRowKeys, 1),
                        title: "Xuất theo giá mua vào"
                    },
                    {
                        key: "hoadonbanra",
                        onClick: (data, selectedRowKeys) =>
                            layHoaDon(data, selectedRowKeys, 2),
                        title: "Xuất theo giá bán ra"
                    },
                    {
                        key: "hoadontunhap",
                        onClick: (data, selectedRowKeys) =>
                            layHoaDon(data, selectedRowKeys, 0),
                        title: "Tự nhập giá"
                    }
                ]
            },
            {
                key: "bangkehoadon",
                onClick: bangKeHoaDon,
                title: "Bảng kê hóa đơn"
            },
            {
                key: "xuatcongno",
                onClick: congNo,
                title: "Mẫu xuất công nợ"
            }
        ]
    }
];

export default otherButtons;

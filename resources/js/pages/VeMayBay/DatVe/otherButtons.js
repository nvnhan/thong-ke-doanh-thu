import { FileExcelOutlined, FileTextOutlined } from "@ant-design/icons";
import { Input, Modal, Progress } from "antd";
import React from "react";
import downloadFile from "../../../utils/downloadFile";
import exportDS from "../../../utils/exportDatVe";

const downloadApi = (url, selectedRowKeys, fileName) => {
    Modal.info({
        title: "Thông báo",
        centered: true,
        icon: null,
        content: (
            <div style={{ textAlign: "center" }}>
                <Progress
                    percent={100}
                    status="active"
                    showInfo={false}
                    strokeColor="#6dc3a6"
                />
                <span>Đang tạo báo cáo...</span>
            </div>
        )
    });
    axios
        .get(url, {
            params: {
                objects: selectedRowKeys.join("|")
            },
            responseType: "blob" // important
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            downloadFile(url, fileName);
        })
        .catch(error => console.log(error))
        .then(() => Modal.destroyAll());
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
const layHoaDon = (data, selectedRowKeys) =>
    downloadApi(
        "/api/dat-ve/lay-hoa-don",
        selectedRowKeys,
        "thong-tin-lay-hoa-don.xlsx"
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

const themTuKetQua = () => {};

const themTuMail = () => {};

const themTuFile = () => {};

const otherButtons = showUpdates => [
    {
        key: "add-other",
        title: "Thêm",
        selectRequired: false,
        childs: [
            {
                key: "them-tu-ket-qua",
                onClick: themTuKetQua,
                title: "Thêm từ kết quả đặt vé",
                selectRequired: false
            },
            {
                key: "them-tu-mail",
                onClick: themTuMail,
                title: "Thêm từ email",
                selectRequired: false
            },
            {
                key: "them-tu-file",
                onClick: themTuFile,
                title: "Thêm từ file",
                selectRequired: false
            }
        ]
    },
    {
        key: "updates",
        onClick: showUpdates,
        title: "Cập nhật thông tin"
    },
    {
        key: "trichxuat",
        title: "Trích xuất",
        childs: [
            {
                key: "codeve",
                onClick: codeVe,
                title: "Tạo mẫu code vé",
                icon: <FileTextOutlined />
            },
            {
                key: "vedientu",
                onClick: veDienTu,
                title: "Tạo mặt vé điện tử",
                icon: <FileTextOutlined />
            },
            {
                key: "export",
                onClick: (data, selectedRowKeys) =>
                    exportDS(data, selectedRowKeys, "dat-ve.xlsx"),
                title: "Xuất danh sách ra Excel",
                icon: <FileExcelOutlined />,
                color: "#4bab92"
            },
            {
                key: "layhoadon",
                onClick: layHoaDon,
                title: "Thông tin lấy hóa đơn",
                icon: <FileExcelOutlined />,
                color: "#4bab92"
            },
            {
                key: "bangkehoadon",
                onClick: bangKeHoaDon,
                title: "Bảng kê hóa đơn",
                icon: <FileExcelOutlined />,
                color: "#4bab92"
            },
            {
                key: "xuatcongno",
                onClick: congNo,
                title: "Mẫu xuất công nợ",
                icon: <FileExcelOutlined />,
                color: "#4bab92"
            }
        ]
    }
];

export default otherButtons;

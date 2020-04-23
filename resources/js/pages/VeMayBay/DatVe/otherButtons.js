import { FileExcelOutlined, FileTextOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import React from "react";
import exportDS from "../../../utils/exportDatVe";

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

const veDienTu = (data, selectedRowKeys) => {};

const layHoaDon = (data, selectedRowKeys) => {};

const banKeHoaDon = (data, selectedRowKeys) => {};

const congNo = (data, selectedRowKeys) => {};

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
                onClick: banKeHoaDon,
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

export default React.memo(otherButtons);

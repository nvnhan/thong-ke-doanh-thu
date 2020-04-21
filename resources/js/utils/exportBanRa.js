import exportToExcel from "./exportToExcel";

const exportDS = (data, selectedRowKeys, name) => {
    const filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
    const newData = filtered.map((p, index) => {
        const t = { stt: index + 1, ...p };
        delete t["id"];
        delete t["id_hang_hoa"];
        delete t["id_khach_hang"];
        delete t["id_tai_khoan_tra_hoan_doi"];
        return t;
    });

    const dataExport = [
        {
            stt: "STT",
            ngay_thang: "Ngày tháng",
            ma_hang: "Mã hàng",
            ten_hang: "Tên hàng",
            phan_loai: "Phân loại",
            nha_cung_cap: "Nhà cung cấp",
            so_luong: "Số lượng",
            don_gia_mua: "Đơn giá mua",
            don_gia_ban: "Đơn giá bán",
            thanh_tien_mua: "Thành tiền mua",
            thanh_tien_ban: "Thành tiền bán",
            lai: "Lãi",
            ma_khach_hang: "Khách hàng",
            da_thanh_toan: "Đã thanh toán",
            ngay_thanh_toan: "Ngày thanh toán",
            chua_thanh_toan: "Còn lại",
            ngay_hoan_doi: "Ngày hoàn đổi",
            ngay_thanh_toan_hoan_doi: "Ngày thanh toán hoàn đổi",
            ngay_hoan_doi_xong: "Ngày hoàn đổi xong",
            tai_khoan_tra_hoan_doi: "Tài khoản trả hoàn đổi",
            ghi_chu: "Ghi chú",
            username: "Người nhập"
        },
        ...newData
    ];
    exportToExcel(dataExport, name);
};

export default exportDS;
import exportToExcel from "./exportToExcel";

/**
 * Xuất ra Excel
 */
const exportDS = (data, selectedRowKeys, name) => {
    let filtered = data;
    if (selectedRowKeys.length > 0)
        filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
    const newData = filtered.map((p, index) => {
        const t = { stt: index + 1, ...p };
        delete t["id"];
        delete t["loai_tuoi"];
        delete t["id_phi_hanh_ly"];
        delete t["id_tai_khoan_mua"];
        delete t["id_khach_hang"];
        delete t["chang_di"];
        delete t["chang_ve"];
        return t;
    });
    const dataExport = [
        {
            stt: "STT",
            ngay_thang: "Ngày tháng",
            ma_giu_cho: "Mã giữ chỗ",
            so_ve: "Số vé",
            hang_bay: "Hãng bay",
            ten_khach: "Tên khách",
            ten_loai_tuoi: "Loại tuổi",
            ngay_gio_di: "Thời gian đi",
            cb_di: "Chuyến bay đi",
            sb_di: "Sân bay đi",
            sb_di1: "Sân bay đi 1",
            ngay_gio_ve: "Thời gian về",
            cb_ve: "Chuyến bay về",
            sb_ve: "Sân bay về",
            sb_ve1: "Sân bay về 1",
            gia_net: "Giá net",
            vat: "VAT",
            phi_san_bay: "Phí soi chiếu, an ninh",
            phu_phi_san_bay: "Phí quản trị hệ thống",
            phu_phi: "Phí nơi mua thu",
            loai_hanh_ly: "Hành lý",
            hanh_ly: "Phí hành lý",
            hoa_hong: "Hoa hồng",
            tong_tien: "Tổng tiền",
            tong_tien_thu_khach: "Thu khách",
            lai: "Lãi",
            noi_mua: "Nơi mua",
            ma_khach_hang: "Khách hàng",
            da_thanh_toan: "Đã thanh toán",
            ngay_thanh_toan: "Ngày thanh toán",
            chua_thanh_toan: "Còn lại",
            chua_xuat_ve: "Chưa xuất vé",
            canh_bao_xuat_ve: "Cảnh báo xuất vé",
            ngay_nhac_lich: "Ngày nhắc lịch bay",
            username: "Người nhập",
            ghi_chu: "Ghi chú"
        },
        ...newData
    ];
    exportToExcel(dataExport, name);
};

export default exportDS;

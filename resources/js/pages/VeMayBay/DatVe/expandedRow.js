import { vndFormater } from "../../../utils";
import React from "react";

const expandedRow = record => (
    <ul style={{ margin: 0 }}>
        <li>
            Chuyến bay đi: {record.cb_di}. Chuyến bay về: {record.cb_ve}
        </li>
        <li>Loại tuổi: {record.ten_loai_tuoi}</li>
        <li>
            Giá net: {vndFormater.format(record.gia_net)}. Phí soi chiếu, an
            ninh: {vndFormater.format(record.phi_san_bay)}. Phí quản trị:{" "}
            {vndFormater.format(record.phu_phi_san_bay)}
        </li>
        <li>
            VAT: {vndFormater.format(record.vat)}. Phụ phí:{" "}
            {vndFormater.format(record.phu_phi)}
        </li>
        <li>
            Hành lý: {vndFormater.format(record.hanh_ly)}. Loại hành lý:{" "}
            {record.loai_hanh_ly}
        </li>
        <li>
            Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
            thanh toán: {record.ngay_thanh_toan}
        </li>
        {record.chua_xuat_ve ? (
            <li>Cảnh báo xuất vé: {record.canh_bao_xuat_ve}</li>
        ) : (
            <li>✔ Đã xuất vé</li>
        )}
        {!_.isEmpty(record.ngay_nhac_lich) && (
            <li>Nhắc lịch bay: {record.ngay_nhac_lich}</li>
        )}
        <li>Ghi chú: {record.ghi_chu}</li>
        <li>Người tạo: {record.username}</li>
    </ul>
);

export default expandedRow;

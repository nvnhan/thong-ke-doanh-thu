const tinhPhi = (state, childRef, value, type) => {
    const { phiHanhLy, taiKhoan } = state;
    let {
        id_tai_khoan_mua,
        hang_bay,
        loai_tuoi,
        sb_di,
        sb_di1,
        sb_ve,
        sb_ve1,
        phu_phi,
        vat,
        gia_net,
        hanh_ly,
        tong_tien,
        phi_san_bay,
        phu_phi_san_bay,
        hoa_hong
    } = childRef.current.getFormInstance().getFieldsValue();
    console.log("Tinh Phu Phi & Tinh Gia, Tinh Phi");

    // VAT
    vat = gia_net / 10;
    let record = { vat };
    // Chọn hành lý
    if (type === "hl") {
        const hl = phiHanhLy.filter(item => item.id === value)[0];
        if (hl) {
            hanh_ly = hl.muc_phi;
            Object.assign(record, { hanh_ly });
        }
    }
    // Tính phí nơi mua thu
    if (type === "hb" || type === "tk" || type === "sb") {
        const tk = taiKhoan.filter(item => item.id === id_tai_khoan_mua)[0];

        if (tk) {
            switch (hang_bay) {
                case "VN":
                    phu_phi = tk.phi_vn || 0;
                case "VJ":
                    phu_phi = tk.phi_vj || 0;
                case "Jets":
                    phu_phi = tk.phi_jets || 0;
                case "BB":
                    phu_phi = tk.phi_bb || 0;
            }
            if (!_.isEmpty(sb_ve)) phu_phi *= 2;
            Object.assign(record, { phu_phi });
        }
    }
    // Tính phí quản trị, phí soi chiếu: Phí sân bay, Phụ phí sân bay
    if (type === "hb" || type === "lt" || type === "sb") {
        // Em bé
        if (loai_tuoi === 2) phi_san_bay = phu_phi_san_bay = 0;
        else {
            // Phi sân bay: Phí soi chiếu, an ninh => chỉ tính với sân bay 1 lúc khởi hành
            phi_san_bay =
                tinhPhiSB(state, sb_di, hang_bay, loai_tuoi) +
                tinhPhiSB(state, sb_ve, hang_bay, loai_tuoi);
            phu_phi_san_bay =
                tinhPhuPhiSB(state, sb_di, sb_di1, hang_bay) +
                tinhPhuPhiSB(state, sb_ve, sb_ve1, hang_bay);
        }
        Object.assign(record, { phi_san_bay, phu_phi_san_bay });
    }
    //  Tính giá: Tổng tiền
    if (gia_net !== null && gia_net !== 0) {
        tong_tien =
            gia_net +
            vat +
            (phi_san_bay || 0) +
            (phu_phi_san_bay || 0) +
            (hanh_ly || 0) +
            (phu_phi || 0) -
            (hoa_hong || 0);
        Object.assign(record, { tong_tien });
    }

    Object.assign(record, { resetFields: () => setFormValue(undefined) });
    return record;
};

export default tinhPhi;

/**
 * Tính phí soi chiếu, an ninh
 */
const tinhPhiSB = (state, san_bay, hang_bay, loai_tuoi) => {
    const { sanBay, thuePhi } = state;
    if (hang_bay === undefined || hang_bay === "") return 0;

    const sb = sanBay.filter(item => item.ma_san_bay === san_bay)[0];
    let thue = [...thuePhi];
    hang_bay = hang_bay.toLowerCase();
    if (sb !== undefined) {
        if (sb.loai_a)
            thue = thue.filter(item => item.loai_phi.indexOf("nhóm A") > 0);
        else thue = thue.filter(item => item.loai_phi.indexOf("nhóm B") > 0);

        if (loai_tuoi === 0)
            thue = thue.filter(item => item.loai_phi.indexOf("Người lớn") > 0);
        else if (loai_tuoi === 1)
            thue = thue.filter(item => item.loai_phi.indexOf("Trẻ em") > 0);
        else return 0;

        thue = thue.filter(
            item => item.loai_phi.toLowerCase().indexOf(hang_bay) > 0
        );
        if (!_.isEmpty(thue)) return thue[0].muc_phi;
    }
    return 0;
};

/**
 * Tính phí quản trị
 */
const tinhPhuPhiSB = (state, san_bay, san_bay1, hang_bay) => {
    const { thuePhi } = state;
    if (san_bay === undefined || san_bay === null || san_bay === "") return 0;
    if (hang_bay === undefined || hang_bay === null || hang_bay === "")
        return 0;

    let thue = [...thuePhi];
    thue = thue.filter(item => item.loai_phi.indexOf("quản trị") > 0);
    hang_bay = hang_bay.toLowerCase();
    thue = thue.filter(
        item => item.loai_phi.toLowerCase().indexOf(hang_bay) > 0
    );
    //TODO: Với VN còn loại SB dài, ngắn
    if (!_.isEmpty(thue)) return thue[0].muc_phi;
    return 0;
};

import Select from "antd/lib/select/index";
import groupBy from "lodash/groupBy";
import React from "react";
import { vndFormater } from ".";
const { Option, OptGroup } = Select;

export const getKhachHangDetail = khachHangList =>
    Object.entries(groupBy(khachHangList, "phan_loai")).map(clist => (
        <OptGroup label={clist[0]} key={clist[0]}>
            {clist[1].map(ncc => (
                <Option value={ncc.id} key={ncc.id}>
                    {ncc.ma_khach_hang}
                </Option>
            ))}
        </OptGroup>
    ));

export const hbOptions = hangBayList => hangBayList.map(pl => ({ value: pl }));

export const getTaiKhoanDetail = taiKhoanList =>
    Object.entries(groupBy(taiKhoanList, "phan_loai")).map(clist => (
        <OptGroup label={clist[0] || "Tài khoản ngân hàng"} key={clist[0]}>
            {clist[1].map(ncc => (
                <Option value={ncc.id} key={ncc.id}>
                    {ncc.ky_hieu}
                </Option>
            ))}
        </OptGroup>
    ));

export const getSanBayDetail = sanBayList =>
    Object.entries(groupBy(sanBayList, "phan_loai")).map(clist => (
        <OptGroup label={clist[0]} key={clist[0]}>
            {clist[1].map(ncc => (
                <Option value={ncc.ma_san_bay} key={ncc.id}>
                    {ncc.ten_san_bay}
                </Option>
            ))}
        </OptGroup>
    ));

export const getPhiHanhLyDetail = phiHanhLyList =>
    phiHanhLyList.map(ncc => (
        <Option value={ncc.id} key={ncc.id}>
            {ncc.hanh_ly + " - " + vndFormater.format(ncc.muc_phi)}
        </Option>
    ));

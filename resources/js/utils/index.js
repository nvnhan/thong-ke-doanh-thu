import moment from "moment";
import { useState } from "react";

/**
 * useState mới, dùng tương đương (MERGE) state của Class component
 */
export const useMergeState = initialState => {
    const [state, setState] = useState(initialState);
    const setMergedState = newState =>
        setState(prevState => Object.assign({}, prevState, newState));
    return [state, setMergedState];
};

/**
 * Ghép object thành queryString
 */
export const queryString = obj => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            if (obj[p] === undefined) obj[p] = "";
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

/**
 * Xử lý dữ liệu (ngày tháng) từ form nhập vào
 */
export const parseValues = (values, format = "YYYY-MM-DD HH:mm:ss") => {
    values = parseTimePeriod(values);
    for (let [key, value] of Object.entries(values)) {
        if (value !== null && value !== undefined)
            if (typeof value === "object")
                // Convert từ moment (from DatePicker) về dạng string để backend xử lý
                values[key] = value.format(format);
            else if (typeof value === "string")
                if (value.match(/(.*?):(.*?)\/(.*?)\//g))
                    values[key] = moment(value, "HH:mm DD/MM/YYYY").format(
                        format
                    );
                else if (value.match(/(.*?)\/(.*?)\//g))
                    values[key] = moment(value, "DD/MM/YYYY").format(format);
    }
    return values;
};

/**
 * Check liệu dữ liệu người dùng sửa có thay đổi gì ko?
 */
export const isChangeData = (record, data) => {
    if (record === undefined || data === undefined) return true;
    let isChanged = false;
    for (var k in record) {
        if (
            record.hasOwnProperty(k) &&
            data.hasOwnProperty(k) &&
            record[k] !== data[k]
        ) {
            isChanged = true;
            break;
        }
    }
    return isChanged;
};

export const vndFormater = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
});

export const inputFormat = value =>
    `${value}₫`.replace(/(?=(\d{3})+(?!\d))\B/g, ",");

export const inputParse = value => value.replace(/\₫\s?|(,*)/g, "");

export const parseTimePeriod = values => {
    if (values.hasOwnProperty("thoiGian")) {
        if (!_.isEmpty(values.thoiGian))
            Object.assign(values, {
                bat_dau: values.thoiGian[0],
                ket_thuc: values.thoiGian[1]
            });
        delete values.thoiGian;
    }
    return values;
};

export const momentRange = () => ({
    "Hôm nay": [moment().startOf("day"), moment().endOf("day")],
    "Tuần này": [moment().startOf("week"), moment().endOf("week")],
    "Tháng này": [moment().startOf("month"), moment().endOf("month")]
});

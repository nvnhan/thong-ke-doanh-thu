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
export const parseValues = values => {
    for (let [key, value] of Object.entries(values)) {
        if (value !== null && value !== undefined)
            if (typeof value === "object")
                // Convert từ moment (from DatePicker) về dạng string để backend xử lý
                values[key] = value.format("YYYY-MM-DD HH:mm:ss");
            else if (typeof value === "string")
                if (value.match(/(.*?):(.*?)\/(.*?)\//g))
                    values[key] = moment(value, "HH:mm DD/MM/YYYY").format(
                        "YYYY-MM-DD HH:mm:ss"
                    );
                else if (value.match(/(.*?)\/(.*?)\//g))
                    values[key] = moment(value, "DD/MM/YYYY").format(
                        "YYYY-MM-DD HH:mm:ss"
                    );
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

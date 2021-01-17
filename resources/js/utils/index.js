import isEmpty from "lodash/isEmpty";
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
 * Chuyển datetime về dạng lưu ở SQL
 */
export const convertToSQLDateTime = value => {
    const format = "YYYY-MM-DD HH:mm:ss";
    if (typeof value === "string")
        if (value.match(/(.*?):(.*?)\/(.*?)\//g))
            value = moment(value, "HH:mm DD/MM/YYYY").format(format);
        else if (value.match(/(.*?)\/(.*?)\//g))
            value = moment(value, "DD/MM/YYYY").format(format);
    return value;
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
            else values[key] = convertToSQLDateTime(value);
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
        if (record.hasOwnProperty(k) && data.hasOwnProperty(k)) {
            const tmp = convertToSQLDateTime(data[k]);

            if (record[k] !== tmp) {
                isChanged = true;
                break;
            }
        }
    }
    return isChanged;
};

export const vndFormater = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
});

/**
 * Number to currency format
 * @param {*} value
 */
export const inputFormat = value =>
    `${value}`.replace(/(?=(\d{3})+(?!\d))\B/g, ",");

/**
 * Input value to number
 * @param {*} value
 */
export const inputParse = value => value.replace(/\₫\s?|(,*)/g, "");

/**
 * Thêm bắt đầu và kết thúc từ thoiGian (from RangePicker)
 * @param {*} values
 */
export const parseTimePeriod = values => {
    if (values.hasOwnProperty("thoiGian")) {
        if (!isEmpty(values.thoiGian))
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

export const unionDataBy = (target, source, key = "id") => {
    const newData = Array.isArray(source) ? source : [source];
    const targetLength = target.length;

    for (let index = 0; index < newData.length; index++) {
        const element = newData[index];
        let existingElement = false;

        // Duyệt các phần tử của mảng cũ
        for (let j = 0; j < targetLength; j++) {
            const element1 = target[j];
            // Nếu trùng key
            if (element[key] === element1[key]) {
                existingElement = true;
                target[j] = element; // Thì cập nhật phần tử
                break;
            }
        }
        if (!existingElement) target.push(element); //  Thêm mới
    }
    return target;
};

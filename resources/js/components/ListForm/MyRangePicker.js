import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";
import { momentRange } from "../../utils";
const { RangePicker } = DatePicker;

const MyRangePicker = props => (
    <RangePicker
        allowClear={false}
        locale={locale}
        style={{ width: "100%" }}
        ranges={momentRange()}
        format="DD/MM/YYYY"
        placeholder={["Nhập từ ngày", "đến ngày"]}
        {...props}
    />
);

export default MyRangePicker;

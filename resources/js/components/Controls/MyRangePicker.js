import DatePicker from "antd/lib/date-picker/index";
import React from "react";
import { momentRange } from "../../utils";
const { RangePicker } = DatePicker;
import locale from "antd/es/date-picker/locale/vi_VN";

const MyRangePicker = props => (
    <RangePicker
        allowClear={false}
        style={{ width: "100%" }}
        ranges={momentRange()}
        locale={locale}
        format="DD/MM/YYYY"
        placeholder={["Nhập từ ngày", "đến ngày"]}
        {...props}
    />
);

export default MyRangePicker;

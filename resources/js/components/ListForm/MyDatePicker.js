import DatePicker from "antd/lib/date-picker/index";
import locale from "antd/es/date-picker/locale/vi_VN";
import React from "react";

const MyDatePicker = props => {
    if (props.value && typeof props.value == "string") {
        let objMoment = moment(props.value, props.format);
        return (
            <DatePicker
                allowClear={false}
                locale={locale}
                style={{ width: "100%" }}
                {...props}
                value={objMoment}
            />
        );
    } else
        return (
            <DatePicker
                allowClear={false}
                locale={locale}
                style={{ width: "100%" }}
                {...props}
            />
        );
};

export default MyDatePicker;

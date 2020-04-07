import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const MyDatePicker = (props) => {
    if (props.value && typeof props.value == "string") {
        let objMoment = moment(props.value, props.format);
        return <DatePicker {...props} value={objMoment} />;
    } else return <DatePicker {...props} />;
};

export default MyDatePicker;

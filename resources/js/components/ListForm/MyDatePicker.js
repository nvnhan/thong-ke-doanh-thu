import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const MyDatePicker = (props) => {
    if (props.value && typeof props.value == "string") {
        let objMoment = moment(props.value, "HH:mm DD/MM/YYYY");
        return <DatePicker {...props} value={objMoment} />;
    } else return <DatePicker {...props} />;
};

export default MyDatePicker;

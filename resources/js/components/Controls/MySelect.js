import Select from "antd/lib/select";
import React from "react";

const MySelect = React.memo(props => (
    <Select
        showSearch
        allowClear
        filterOption={(input, option) => {
            if (!option.children) return false;
            return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }}
        placeholder={props.placeholder}
        onChange={props.onChange}
    >
        {props.options}
    </Select>
));

export default MySelect;

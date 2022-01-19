import Select from "antd/lib/select";
import React from "react";

const MySelect = React.memo(props => (
    <Select
        showSearch
        allowClear
        filterOption={(input, option) => {
            if (!option.children) return false;
            let child = Array.isArray(option.children)
                ? option.children.join("")
                : option.children;
            return child.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
    >
        {props.options}
    </Select>
));

export default MySelect;

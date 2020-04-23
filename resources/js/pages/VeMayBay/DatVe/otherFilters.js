import { Select } from "antd";
import React from "react";
const { Option } = Select;

const filters = [
    {
        name: "sb",
        label: "Sân bay",
        render: (
            <Select>
                <Option value="">Tất cả</Option>
                <Option value="qn">Quốc nội</Option>
                <Option value="qt">Quốc tế</Option>
            </Select>
        )
    },
    {
        name: "xv",
        label: "Xuất vé",
        render: (
            <Select>
                <Option value="">Tất cả</Option>
                <Option value="1">Đã xuất vé</Option>
                <Option value="-1">Chưa xuất vé</Option>
            </Select>
        )
    }
];

export default React.memo(filters);

import { Column } from "@ant-design/charts";
import React, { memo } from "react";

const ThongTinVe = memo(props => {
    const { data } = props;

    const ttVeConfig = {
        data: data.thongtinve,
        isStack: true,
        xField: "hang_muc",
        yField: "value",
        seriesField: "type",
        label: {
            position: "middle",
            formatter: val => (val.value > 0 ? val.value : "")
        },
        legend: {
            position: "top-left"
        },
        color: ["#4bab92", "#AB4B64"]
    };

    return <Column {...ttVeConfig} />;
});

export default ThongTinVe;

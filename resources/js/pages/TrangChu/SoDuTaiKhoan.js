import { Column } from "@ant-design/charts";
import React, { memo } from "react";

const SoDuTaiKhoan = memo(props => {
    const { data } = props;

    const soDuConfig = {
        data: data.sodu,
        xField: "hang_muc",
        yField: "gia_tri",
        label: {
            position: "top",
            style: {
                fill: "#000000",
                opacity: 0.6
            }
        },
        color: "#4bab92",
        meta: {
            gia_tri: { alias: "Số dư" }
        },
        yAxis: {
            label: {
                formatter: val => val + "m"
            }
        },
        slider: {
            start: 0,
            end: 0.5
        }
    };
    return <Column {...soDuConfig} />;
});

export default SoDuTaiKhoan;

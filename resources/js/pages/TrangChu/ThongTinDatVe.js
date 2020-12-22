import { DualAxes } from "@ant-design/charts";
import React, { memo } from "react";

const ThongTinDatVe = memo(props => {
    const { data } = props;

    const datVeConfig = {
        data: [data.datve, data.datve],
        xField: "thang",
        yField: ["dat_ve", "thanh_toan"],
        geometryOptions: [
            {
                geometry: "column",
                color: "#4bab92",
                label: {
                    position: "top",
                    style: {
                        fill: "#000000",
                        opacity: 0.6
                    },
                    formatter: val => (val.dat_ve > 0 ? val.dat_ve : "")
                }
            },
            {
                geometry: "line",
                color: "#AB4B64",
                smooth: true,
                lineStyle: { lineWidth: 3 }
            }
        ],
        meta: {
            dat_ve: { alias: "Lượng đặt vé" },
            thanh_toan: { alias: "Thanh toán" }
        }
    };

    return <DualAxes {...datVeConfig} />;
});

export default ThongTinDatVe;

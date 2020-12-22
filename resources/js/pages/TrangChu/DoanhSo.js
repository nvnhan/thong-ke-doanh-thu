import { DualAxes } from "@ant-design/charts";
import { Radio } from "antd";
import React, { memo, useState } from "react";

const DoanhSo = memo(props => {
    const { data } = props;
    const [doanhSo, setDoanhSo] = useState("thang");

    const onChange = e => setDoanhSo(e.target.value);

    const dSoNamConfig = {
        data:
            doanhSo === "thang"
                ? [data.datve, data.datve]
                : [data.ds_nam, data.ds_nam],
        xField: "thang",
        yField: ["thu_khach", "lai"],
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
                    formatter: val => (val.thu_khach > 0 ? val.thu_khach : "")
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
            thu_khach: { alias: "Doanh số" },
            lai: { alias: "Lợi nhuận" }
        },
        yAxis: {
            thu_khach: {
                label: {
                    formatter: val =>
                        doanhSo === "thang" ? val + "k" : val + "m"
                }
            },
            lai: {
                label: {
                    formatter: val =>
                        doanhSo === "thang" ? val + "k" : val + "m"
                }
            }
        }
    };

    return (
        <>
            <DualAxes {...dSoNamConfig} />

            <Radio.Group
                buttonStyle="solid"
                onChange={onChange}
                value={doanhSo}
            >
                <Radio.Button value="thang">Theo ngày</Radio.Button>
                <Radio.Button value="nam">Theo tháng</Radio.Button>
            </Radio.Group>
        </>
    );
});

export default DoanhSo;

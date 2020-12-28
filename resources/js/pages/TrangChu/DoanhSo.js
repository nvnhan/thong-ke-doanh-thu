import { DualAxes } from "@ant-design/charts";
import Radio from "antd/lib/radio/index";
import isEmpty from "lodash/isEmpty";
import React, { memo, useState } from "react";

const DoanhSo = memo(props => {
    const { data } = props;
    const [doanhSo, setDoanhSo] = useState("thang");

    const onChange = e => setDoanhSo(e.target.value);

    const maxDatVe = !isEmpty(data.datve)
        ? Math.max(...data.datve.map(o => o.thu_khach))
        : 0;
    const maxNam = !isEmpty(data.ds_nam)
        ? Math.max(...data.ds_nam.map(o => o.thu_khach))
        : 0;

    const minDatVe = !isEmpty(data.datve)
        ? Math.min(...data.datve.map(o => o.thu_khach))
        : 0;
    const minNam = !isEmpty(data.ds_nam)
        ? Math.min(...data.ds_nam.map(o => o.thu_khach))
        : 0;

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
                min: doanhSo === "thang" ? minDatVe : minNam,
                label: {
                    formatter: val => val + (doanhSo === "thang" ? "k" : "m")
                }
            },
            lai: {
                max: doanhSo === "thang" ? maxDatVe : maxNam,
                label: {
                    autoHide: true,
                    formatter: val => ""
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

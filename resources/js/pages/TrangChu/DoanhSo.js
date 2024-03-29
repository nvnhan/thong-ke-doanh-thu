import Radio from "antd/lib/radio/index";
import Chart from "react-apexcharts";
import React, { memo, useState } from "react";

const DoanhSo = memo(props => {
    const { data } = props;
    const [doanhSo, setDoanhSo] = useState("datve");
    const [phamVi, setPhamVi] = useState("tong");

    const onChange = e => setDoanhSo(e.target.value);
    const onChangePhamVi = e => setPhamVi(e.target.value);

    const options = {
        chart: {
            id: "doanh-so"
        },
        title: {
            text: "Doanh số - Lợi nhuận",
            align: "left",
            style: {
                fontSize: "14px",
                fontWeight: "bold"
            }
        },
        plotOptions: {
            bar: {
                columnWidth: "50%"
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    xaxis: {
                        tickAmount: 5
                    }
                }
            }
        ],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [0, 4]
        },
        fill: {
            opacity: [0.85, 0.25],
            type: ["solid", "gradient"],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        yaxis: {
            tickAmount: 5
        },
        xaxis: {
            type: "category",
            categories:
                doanhSo === "datve"
                    ? data.datve.ngay_thangs
                    : data.ds_nam.thangs,
            labels: {
                rotate: 0,
                hideOverlappingLabels: true,
                showDuplicates: false
            },
            tickPlacement: "on",
            tooltip: {
                enabled: false
            }
        },
        tooltip: {
            y: {
                formatter: val =>
                    val < 1000
                        ? val + " nghìn"
                        : Math.round(val / 100) / 10 + " triệu"
            }
        }
    };

    const series = [
        {
            name: "Doanh số",
            type: "column",
            data: data[doanhSo][phamVi]?.thu_khachs || [],
            color: "#4bab92"
        },
        {
            name: "Lợi nhuận",
            type: "area",
            data: data[doanhSo][phamVi]?.lais || [],
            color: "#AB4B64"
        }
    ];

    return (
        <>
            <Chart
                options={options}
                series={series}
                type="area"
                height="350px"
            />

            <Radio.Group
                onChange={onChangePhamVi}
                value={phamVi}
                style={{ marginBottom: "10px" }}
            >
                <Radio value="tong">Tổng</Radio>
                <Radio value="ve">Đặt vé</Radio>
                <Radio value="khac">Khác</Radio>
            </Radio.Group>

            <Radio.Group
                buttonStyle="solid"
                onChange={onChange}
                value={doanhSo}
            >
                <Radio.Button value="datve">Theo ngày</Radio.Button>
                <Radio.Button value="ds_nam">Theo tháng</Radio.Button>
            </Radio.Group>
        </>
    );
});

export default DoanhSo;

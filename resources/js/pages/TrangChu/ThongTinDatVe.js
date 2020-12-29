import React, { memo } from "react";
import Chart from "react-apexcharts";

const ThongTinDatVe = memo(props => {
    const { data } = props;

    const options = {
        chart: {
            id: "thong-tin-dat-ve"
        },
        title: {
            text: "Thông tin đặt vé",
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
            width: [3, 0]
        },
        fill: {
            opacity: [0.25, 0.85],
            type: ["gradient", "solid"],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        markers: {
            size: 4,
            strokeWidth: 2,
            fillOpacity: 0,
            strokeOpacity: 0,
            hover: {
                size: 6
            }
        },
        yaxis: {
            tickAmount: 5
        },
        xaxis: {
            type: "category",
            categories: data.datve.ngay_thangs,
            labels: {
                rotate: 0,
                hideOverlappingLabels: true,
                showDuplicates: false
            },
            tickPlacement: "on",
            tooltip: {
                enabled: false
            }
        }
    };
    const series = [
        {
            name: "Thanh toán",
            type: "area",
            data: data.datve.thanh_toans || [],
            color: "#AB4B64"
        },
        {
            name: "Đặt vé",
            type: "column",
            data: data.datve.dat_ves || [],
            color: "#4bab92"
        }
    ];

    return (
        <Chart options={options} series={series} type="area" height="350px" />
    );
});

export default ThongTinDatVe;

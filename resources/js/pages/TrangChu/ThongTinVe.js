import Chart from "react-apexcharts";
import React, { memo } from "react";

const ThongTinVe = memo(props => {
    const { data } = props;

    const options = {
        chart: {
            id: "thong-tin-ve",
            stacked: true
        },
        title: {
            text: "Thông tin vé",
            align: "left",
            style: {
                fontSize: "14px",
                fontWeight: "bold"
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "65%"
            }
        },
        legend: {
            position: "right",
            offsetY: 40
        },
        xaxis: {
            categories: data.thongtinve.hang_muc || []
        },
        tooltip: {
            y: {
                formatter: val => val + " vé"
            }
        }
    };

    const series = [
        {
            name: "Quốc nội",
            data: data.thongtinve.quoc_noi || [],
            color: "#4bab92"
        },
        {
            name: "Quốc tế",
            data: data.thongtinve.quoc_te || [],
            color: "#AB4B64"
        }
    ];

    return (
        <Chart options={options} series={series} type="bar" height="350px" />
    );
});

export default ThongTinVe;

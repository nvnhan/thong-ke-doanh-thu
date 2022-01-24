import Chart from "react-apexcharts";
import React, { memo } from "react";

const SoDuTaiKhoan = memo(props => {
    const { data } = props;

    const options = {
        chart: {
            id: "so-du"
        },
        title: {
            text: "Số dư tài khoản",
            align: "left",
            style: {
                fontSize: "14px",
                fontWeight: "bold"
            }
        },
        subtitle: {
            text: "Tổng cộng " + data.tong + "đ",
            align: "left",
            margin: 10,
            style: {
                fontSize: "12px"
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    dataLabels: {
                        enabled: false
                    },
                    xaxis: {
                        tickAmount: 5
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top"
                },
                horizontal: false,
                columnWidth: "50%"
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: "10px",
                fontWeight: "normal",
                colors: ["#777"]
            }
        },
        xaxis: {
            categories: data.sodu.hang_muc || []
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
            name: "Số dư",
            data: data.sodu.gia_tri || [],
            color: "#4bab92"
        }
    ];

    return (
        <Chart options={options} series={series} type="bar" height="350px" />
    );
});

export default SoDuTaiKhoan;

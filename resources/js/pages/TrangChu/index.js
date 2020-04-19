import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col } from "antd";

const TrangChu = React.memo(props => {
    const [data, setData] = useState({
        datve: [],
        thongtinve: []
    });

    useEffect(() => {
        axios
            .get("/api/trang-chu")
            .then(response => {
                if (response.data.success) setData(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    const monthChartData = {
        labels: data.datve.ngay_thangs,
        datasets: [
            {
                label: "Thanh toán",
                fill: false,
                borderColor: "#4bab92",
                backgroundColor: "#4bab92",
                type: "line",
                data: data.datve.thanh_toans
            },
            {
                label: "Đặt vé",
                backgroundColor: "#AB4B64",
                data: data.datve.dat_ves
            }
        ]
    };

    const ttveChartData = {
        labels: data.thongtinve.hang_muc,
        datasets: [
            {
                label: "Quốc nội",
                stack: "Stack 0",
                backgroundColor: "#4bab92",
                barPercentage: 0.5,
                data: data.thongtinve.quoc_noi
            },
            {
                label: "Quốc tế",
                stack: "Stack 0",
                backgroundColor: "#AB4B64",
                barPercentage: 0.5,
                data: data.thongtinve.quoc_te
            }
        ]
    };

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <div className="chart-card">
                        <Bar
                            width={400}
                            height={250}
                            data={monthChartData}
                            options={{
                                legend: { position: "bottom" },
                                title: {
                                    display: true,
                                    text:
                                        "Số lượng vé đặt / vé thanh toán trong tháng",
                                    fontSize: 14
                                },
                                tooltips: {
                                    mode: "index",
                                    intersect: false
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            gridLines: {
                                                display: true,
                                                drawBorder: true,
                                                drawOnChartArea: false
                                            }
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            gridLines: {
                                                display: true,
                                                drawBorder: true,
                                                drawOnChartArea: false
                                            },
                                            ticks: {
                                                stepSize: 1
                                            }
                                        }
                                    ]
                                }
                            }}
                        />
                    </div>
                </Col>

                <Col span={24} md={12}>
                    <div className="chart-card">
                        <Bar
                            width={400}
                            height={250}
                            data={ttveChartData}
                            options={{
                                legend: { position: "bottom" },
                                title: {
                                    display: true,
                                    text: "Thông tin vé trong tháng",
                                    fontSize: 14
                                },
                                tooltips: {
                                    mode: "index",
                                    intersect: false
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            gridLines: {
                                                display: true,
                                                drawBorder: true,
                                                drawOnChartArea: false
                                            }
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            stacked: true,
                                            gridLines: {
                                                display: true,
                                                drawBorder: true,
                                                drawOnChartArea: false
                                            },
                                            ticks: {
                                                stepSize: 1
                                            }
                                        }
                                    ]
                                }
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default TrangChu;

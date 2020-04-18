import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Col } from "antd";

const TrangChu = React.memo(props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("/api/trang-chu")
            .then(response => {
                if (response.data.success) setData(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    const monthChartData = {
        labels: data.ngay_thangs,
        datasets: [
            {
                label: "Thanh toán",
                fill: false,
                borderColor: "#4bab92",
                backgroundColor: "#4bab92",
                type: "line",
                data: data.thanh_toans
            },
            {
                label: "Đặt vé",
                backgroundColor: "#AB4B64",
                // [
                //     "#fe938c",
                //     "#e6b89c",
                //     "#ead2ac",
                //     "#9cafb7",
                //     "#4281a4"
                // ],
                barPercentage: 0.8,
                minBarLength: 3,
                data: data.dat_ves
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
            </Row>
        </React.Fragment>
    );
});

export default TrangChu;

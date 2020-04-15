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
                label: "Lượng đặt vé",
                order: 2,
                backgroundColor: [
                    "#fe938c",
                    "#e6b89c",
                    "#ead2ac",
                    "#9cafb7",
                    "#4281a4"
                ],
                data: data.dat_ves
            },
            {
                label: "Lượng thanh toán",
                order: 1,
                fill: false,
                borderColor: "#4bab92",
                backgroundColor: "#4bab92",
                type: "line",
                data: data.thanh_toans
            }
        ]
    };

    return (
        <React.Fragment>
            <Row gutter={[10, 10]}>
                <Col span={24} md={12}>
                    <Bar
                        data={monthChartData}
                        options={{
                            aspectRatio: 1,
                            legend: { display: false },
                            title: {
                                display: true,
                                text:
                                    "Số lượng đặt vé / thanh toán theo ngày trong tháng"
                            },
                            tooltips: {
                                mode: "index",
                                intersect: false
                            }
                        }}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default TrangChu;

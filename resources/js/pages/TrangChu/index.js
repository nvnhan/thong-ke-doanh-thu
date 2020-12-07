import { Button, Col, DatePicker, Form, Row } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { parseValues } from "../../utils";
const { RangePicker } = DatePicker;

const TrangChu = React.memo(props => {
    const [form] = Form.useForm();
    const [data, setData] = useState({
        datve: [],
        thongtinve: [],
        sodu: [],
        tong: ""
    });

    useEffect(() => {
        form.setFieldsValue({
            thoiGian: [moment().startOf("month"), moment().endOf("month")]
        });
        axios
            .get("/api/trang-chu")
            .then(response => {
                if (response.data.success) setData(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    const onFinish = () => {
        let values = form.getFieldsValue();
        if (values.hasOwnProperty("thoiGian")) {
            values = Object.assign(values, {
                bat_dau: values.thoiGian[0],
                ket_thuc: values.thoiGian[1]
            });
            delete values.thoiGian;
        }
        axios
            .get("/api/trang-chu", { params: parseValues(values) })
            .then(response => {
                if (response.data.success) setData(response.data.data);
            })
            .catch(error => console.log(error));
    };

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

    const tkChartData = {
        labels: data.sodu.hang_muc,
        datasets: [
            {
                label: "Số dư",
                stack: "Stack 0",
                backgroundColor: "#4bab92",
                barPercentage: 0.5,
                data: data.sodu.gia_tri
            }
        ]
    };

    return (
        <>
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
                                    text: "Số lượng vé đặt / vé thanh toán",
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
                                    text: "Thông tin vé",
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

            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <div className="chart-card">
                        <Bar
                            width={700}
                            height={300}
                            data={tkChartData}
                            options={{
                                legend: { display: false },
                                title: {
                                    display: true,
                                    text:
                                        "Số dư tài khoản (Tổng cộng " +
                                        data.tong +
                                        "₫)",
                                    fontSize: 14
                                },
                                hover: {
                                    animationDuration: 0
                                },
                                animation: {
                                    duration: 1,
                                    onComplete: function() {
                                        var chartInstance = this.chart,
                                            ctx = chartInstance.ctx;
                                        ctx.font = Chart.helpers.fontString(
                                            Chart.defaults.global
                                                .defaultFontSize,
                                            Chart.defaults.global
                                                .defaultFontStyle,
                                            Chart.defaults.global
                                                .defaultFontFamily
                                        );
                                        ctx.textAlign = "center";
                                        ctx.textBaseline = "bottom";

                                        this.data.datasets.forEach(function(
                                            dataset,
                                            i
                                        ) {
                                            var meta = chartInstance.controller.getDatasetMeta(
                                                i
                                            );
                                            meta.data.forEach(function(
                                                bar,
                                                index
                                            ) {
                                                var data = dataset.data[index];
                                                ctx.fillText(
                                                    data + "k",
                                                    bar._model.x,
                                                    bar._model.y - 5
                                                );
                                            });
                                        });
                                    }
                                }
                            }}
                        />
                    </div>
                </Col>
            </Row>

            <Form
                form={form}
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            >
                <Row gutter={[16, 16]}>
                    <Col span={24} md={16} lg={12} xl={9}>
                        <Form.Item
                            name="thoiGian"
                            label="Thời gian"
                            labelCol={{ span: 4, xl: 6 }}
                            wrapperCol={{ span: 20, xl: 18 }}
                        >
                            <RangePicker
                                allowClear={false}
                                locale={locale}
                                style={{ width: "100%" }}
                                ranges={{
                                    "Hôm nay": [
                                        moment().startOf("day"),
                                        moment().endOf("day")
                                    ],
                                    "Tuần này": [
                                        moment().startOf("week"),
                                        moment().endOf("week")
                                    ],
                                    "Tháng này": [
                                        moment().startOf("month"),
                                        moment().endOf("month")
                                    ]
                                }}
                                format="DD/MM/YYYY"
                                placeholder={["Từ ngày", "đến ngày"]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12} md={8} lg={6} xl={5}>
                        <Button htmlType="submit">Lọc</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
});

export default TrangChu;

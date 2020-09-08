import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { vndFormater } from "../../utils";

const ModalPreviewDatVe = props => {
    const { ddDatVe, handleCancel, modalVisible } = props;
    const [dataDatVe, setDataDatVe] = useState({
        isLoading: true,
        data: []
    });

    useEffect(() => {
        ddDatVe !== "" &&
            axios
                .get("/api/dat-ve?dd=" + ddDatVe)
                .then(
                    response =>
                        response.data.success &&
                        setDataDatVe({
                            isLoading: false,
                            data: response.data.data
                        })
                )
                .catch(error => console.log(error));
    }, [ddDatVe]);

    const handleOk = () => {
        props.history.push({
            pathname: "/dat-ve",
            dd: ddDatVe
        });
    };

    const myColumns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_thang",
            width: 90
        },
        {
            title: "Mã giữ chỗ",
            dataIndex: "ma_giu_cho",
            width: 80
        },
        {
            title: "Số vé",
            dataIndex: "so_ve",
            width: 130
        },
        {
            title: "Hãng bay",
            dataIndex: "hang_bay",
            width: 65
        },
        {
            title: "Tên khách",
            dataIndex: "ten_khach",
            width: 140
        },
        {
            title: "TG đi",
            dataIndex: "ngay_gio_di",
            width: 120
        },
        {
            title: "Chặng đi",
            dataIndex: "chang_di",
            width: 85
        },
        {
            title: "TG về",
            dataIndex: "ngay_gio_ve",
            width: 120
        },
        {
            title: "Chặng về",
            dataIndex: "chang_ve",
            width: 85
        },
        {
            title: "Tổng tiền",
            dataIndex: "tong_tien",
            render: number => vndFormater.format(number),
            width: 110
        },
        {
            title: "Thu khách",
            dataIndex: "tong_tien_thu_khach",
            render: number => vndFormater.format(number),
            width: 110
        }
    ];

    return (
        <Modal
            width="1000px"
            visible={modalVisible}
            title="Dữ liệu xử lý được"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Xử lý tiếp
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    Xem chi tiết
                </Button>
            ]}
        >
            <Table
                dataSource={dataDatVe.data}
                columns={myColumns}
                loading={dataDatVe.isLoading}
                rowKey={row => row["id"]}
                scroll={{ x: 800 }}
            />
        </Modal>
    );
};
export default React.memo(withRouter(ModalPreviewDatVe));

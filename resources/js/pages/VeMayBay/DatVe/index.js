import { AppstoreAddOutlined } from "@ant-design/icons";
import { Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import FormItem from "./FormItem";

const { Option } = Select;

const List = React.memo(props => {
    // const [phanLoai, setPhanLoai] = useState([]);
    // const [khachHang, setKhachHang] = useState([]);

    useEffect(() => {
        // const promise1 = axios.get("/api/nha-cung-cap");
        // const promise2 = axios.get("/api/khach-hang");

        // Promise.all([promise1, promise2]).then(response => {
        //     if (response[0].data.success && response[1].data.success)
        //         setState({
        //             nhaCungCap: response[0].data.data,
        //             khachHang: response[1].data.data
        //         });
        // });
    }, []);

    /**
     * Redirect to Tour Chi Tiet with addition params
     */
    const onClickRow = record => {
        const pathname = `/tour-chi-tiet`;
        props.history.push({ pathname, tour: record });
    };

    const dvAction = [
        {
            key: "dsTourChiTiet",
            onClick: onClickRow,
            title: "Thêm hành khách",
            icon: <AppstoreAddOutlined />,
            color: "#52c41a" // Success color
        }
    ];

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            {/* <li>
                Bắt đầu: {record.bat_dau}. Kết thúc: {record.ket_thuc}
            </li>
            <li>
                Giá tour: {vndFormater.format(record.gia_tour)}. Số lượng:{" "}
                {record.so_luong}
            </li>
            <li>
                Giá bán: {vndFormater.format(record.gia_ban)}. Tổng tiền bán:{" "}
                {vndFormater.format(record.tong_tien_ban)}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
            <li>Tình trạng: {record.tinh_trang}</li> */}
            <li>Ghi chú: {record.ghi_chu}</li>
            <li>Người tạo: {record.username}</li>
        </ul>
    );

    const columns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_thang",
            width: 120,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
        },
        {
            title: "Mã tour",
            dataIndex: "ma_tour",
            optFind: true,
            width: 140
        },
        {
            title: "Tên tour",
            dataIndex: "ten_tour",
            width: 170,
            optFind: true
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            width: 140,
            optFilter: true
        },
        {
            title: "Giá tour",
            dataIndex: "gia_tour",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.gia_tour - b.gia_tour,
            width: 120
        },
        {
            title: "Giá bán",
            dataIndex: "gia_ban",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.gia_ban - b.gia_ban,
            width: 120
        },
        {
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.lai - b.lai,
            width: 120
        },
        {
            title: "Khách hàng",
            dataIndex: "ten_khach_hang",
            width: 120,
            optFilter: true
        },
        {
            title: "Tình trạng",
            dataIndex: "tinh_trang",
            width: 120,
            optFilter: true
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 170
        }
    ];

    const getOtherFilter = () => {
        return [
            {
                name: "san_bay",
                label: "Sân bay",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        <Option value="quoc_noi">Quốc nội</Option>
                        <Option value="quoc_te">Quốc tế</Option>
                    </Select>
                )
            },
            {
                name: "hang_bay",
                label: "Hãng bay",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        <Option value="vn">VietNam Airline</Option>
                        <Option value="vj">VietJet</Option>
                        <Option value="jets">Jetstar</Option>
                        <Option value="bb">Bamboo</Option>
                        <Option value="khac">Khác</Option>
                        {/* Render tên các hãng khác....... */}
                    </Select>
                )
            },
            {
                name: "user",
                label: "Người nhập",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        
                        {/* Render danh sách user....... */}
                    </Select>
                )
            }
        ];
    };

    return (
        <ListForm
            url="dat-ve"
            filterBox
            otherFilter={getOtherFilter()}
            filterInitialValue={{ san_bay: "", hang_bay: "", user: "" }}
            columns={columns}
            tableSize={{ x: 1200 }}
            modalWidth="1100px"
            formTemplate={<FormItem />}
            formInitialValues={{
                so_luong: 1,
                ngay_thang: moment().format("DD/MM/YYYY")
            }}
            otherActions={dvAction}
            expandedRowRender={expandedRowRender}
        />
    );
});

export default withRouter(List);

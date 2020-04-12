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
        //TODO: Get all Hãng bay & username đổ vào filterbox
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
            color: "#4bab92" // Primary color
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
            width: 110,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
        },
        {
            title: "Mã giữ chỗ",
            dataIndex: "ma_giu_cho",
            optFind: true,
            width: 90
        },
        {
            title: "Số vé",
            dataIndex: "so_ve",
            width: 140,
            optFind: true
        },
        {
            title: "Hãng bay",
            dataIndex: "hang_bay",
            width: 75,
            optFilter: true
        },
        {
            title: "Tên khách",
            dataIndex: "ten_khach",
            width: 140,
            optFind: true
        },
        {
            title: "TG đi",
            dataIndex: "ngay_gio_di",
            width: 110,
            sorter: (a, b) =>
                moment(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() -
                moment(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix()
        },
        {
            title: "Chặng đi",
            dataIndex: "chang_di",
            width: 100
        },
        {
            title: "TG về",
            dataIndex: "ngay_gio_ve",
            width: 110,
            sorter: (a, b) =>
                moment(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() -
                moment(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix()
        },
        {
            title: "Chặng về",
            dataIndex: "chang_ve",
            width: 100
        },
        {
            title: "Tổng tiền",
            dataIndex: "tong_tien",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.tong_tien - b.tong_tien,
            width: 110
        },
        {
            title: "Thu khách",
            dataIndex: "tong_tien_thu_khach",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.tong_tien_thu_khach - b.tong_tien_thu_khach,
            width: 110
        },
        {
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.lai - b.lai,
            width: 110
        },
        {
            title: "Nơi mua",
            dataIndex: "noi_mua",
            width: 110,
            optFilter: true
        },
        {
            title: "Khách hàng",
            dataIndex: "ten_khach_hang",
            width: 110,
            optFilter: true
        },
        {
            title: "Thanh toán",
            dataIndex: "ngay_thanh_toan",
            width: 110
        },
        {
            title: "Người nhập",
            dataIndex: "username",
            width: 100,
            optFilter: true
        },
    ];

    const getOtherFilter = () => {
        return [
            {
                name: "sb",
                label: "Sân bay",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        <Option value="quoc_noi">Quốc nội</Option>
                        <Option value="quoc_te">Quốc tế</Option>
                    </Select>
                )
            },
            // {
            //     name: "hb",
            //     label: "Hãng bay",
            //     render: (
            //         <Select>
            //             <Option value="">Tất cả</Option>
            //             <Option value="VN">VietNam Airline</Option>
            //             <Option value="VJ">VietJet</Option>
            //             <Option value="Jets">Jetstar</Option>
            //             <Option value="BB">Bamboo</Option>
            //             <Option value="khac">Khác</Option>
            //             {/* Render tên các hãng khác....... */}
            //         </Select>
            //     )
            // },
            // {
            //     name: "user",
            //     label: "Người nhập",
            //     render: (
            //         <Select>
            //             <Option value="">Tất cả</Option>

            //             {/* Render danh sách user....... */}
            //         </Select>
            //     )
            // }
        ];
    };

    return (
        <ListForm
            url="dat-ve"
            filterBox
            otherFilter={getOtherFilter()}
            filterInitialValue={{ san_bay: "", hang_bay: "", user: "" }}
            columns={columns}
            tableSize={{ x: 1100 }}
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

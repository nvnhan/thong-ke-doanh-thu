import { UserAddOutlined } from "@ant-design/icons";
import { Select } from "antd";
import moment from "moment";
import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { useMergeState, vndFormater } from "../../../utils";
import FormItem from "./FormItem";
const { Option } = Select;

const List = React.memo(props => {
    const [formValue, setFormValue] = useState(undefined);
    const [state, setState] = useMergeState({
        sanBay: [],
        thuePhi: [],
        phiHanhLy: [],
        taiKhoan: [],
        khachHang: [],
        hangBay: []
    });
    const childRef = useRef();
    const time = null;

    useEffect(() => {
        retrieveData();
        return () => {
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        const promise1 = axios.get("/api/san-bay");
        const promise2 = axios.get("/api/thue-phi");
        const promise3 = axios.get("/api/phi-hanh-ly");
        const promise4 = axios.get("/api/tai-khoan/all");
        const promise5 = axios.get("/api/khach-hang");
        const promise6 = axios.get("/api/dat-ve/hang-bay");
        console.log("Retrieving Danh Muc");
        Promise.all([
            promise1,
            promise2,
            promise3,
            promise4,
            promise5,
            promise6
        ])
            .then(response => {
                if (
                    response[0].data.success &&
                    response[1].data.success &&
                    response[2].data.success &&
                    response[3].data.success &&
                    response[4].data.success &&
                    response[5].data.success
                ) {
                    setState({
                        sanBay: response[0].data.data,
                        thuePhi: response[1].data.data,
                        phiHanhLy: response[2].data.data,
                        taiKhoan: response[3].data.data,
                        khachHang: response[4].data.data,
                        hangBay: [
                            ...new Set([
                                ...response[5].data.data,
                                "VN",
                                "VJ",
                                "Jets",
                                "BB"
                            ])
                        ]
                    });
                    console.log("Retrieved Danh Muc Succcessfully");
                } else setTimeout(retrieveData, 2000);
            })
            .catch(error => {
                console.log(error);
                time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
            });
    };

    /**
     * Callback from FormItem, trigger when select Hang Hoa
     * => Change setFormValues to ListForm => FormEdit
     */
    const handleFormValue = don_gia => {
        // Tinh Phu Phi & Tinh Gia, Tinh Phi
        // setFormValue({
        //     don_gia
        // });
    };

    /**
     * Trigger "Add new" action with addition params
     */
    const onClickRow = record => {
        // Thêm hành khách từ record
        childRef.current.triggerAddNew();
        const newRecord = Object.assign({ ...record }, { ten_khach: "" });
        setFormValue(newRecord);
    };

    const dvAction = [
        {
            key: "them-hanh-khach",
            onClick: onClickRow,
            title: "Thêm hành khách",
            icon: <UserAddOutlined />,
            color: "#4bab92" // Primary color
        }
    ];

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Chuyến bay đi: {record.cb_di}. Chuyến bay về: {record.cb_ve}
            </li>
            <li>Loại tuổi: {record.ten_loai_tuoi}</li>
            <li>
                Giá net: {vndFormater.format(record.gia_net)}. Phí soi chiếu, an
                ninh: {vndFormater.format(record.phi_san_bay)}. Phí quản trị:{" "}
                {vndFormater.format(record.phu_phi_san_bay)}
            </li>
            <li>
                VAT: {vndFormater.format(record.vat)}. Phụ phí:{" "}
                {vndFormater.format(record.phu_phi)}
            </li>
            <li>
                Hành lý: {vndFormater.format(record.hanh_ly)}. Loại hành lý:{" "}
                {record.loai_hanh_ly}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
            {record.chua_xuat_ve ? (
                <li>Cảnh báo xuất vé: {record.canh_bao_xuat_ve}</li>
            ) : (
                <li>✔ Đã xuất vé</li>
            )}
            {!_.isEmpty(record.ngay_nhac_lich) && (
                <li>Nhắc lịch bay: {record.ngay_nhac_lich}</li>
            )}
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
            width: 80,
            optFilter: true
        },
        {
            title: "Tên khách",
            dataIndex: "ten_khach",
            width: 130,
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
            width: 90,
            optFilter: true
        }
    ];

    const getOtherFilter = () => {
        return [
            {
                name: "sb",
                label: "Sân bay",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        <Option value="qn">Quốc nội</Option>
                        <Option value="qt">Quốc tế</Option>
                    </Select>
                )
            }
        ];
    };

    const renderSummary = data => {
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    tong_tien: previousValue.tong_tien + currentValue.tong_tien,
                    tong_tien_thu_khach:
                        previousValue.tong_tien_thu_khach +
                        currentValue.tong_tien_thu_khach
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={11}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.tong_tien)}</td>
                        <td>
                            {vndFormater.format(sumObj.tong_tien_thu_khach)}
                        </td>
                        <td>
                            {vndFormater.format(
                                sumObj.tong_tien_thu_khach - sumObj.tong_tien
                            )}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };

    return (
        <ListForm
            ree={childRef}
            url="dat-ve"
            filterBox
            otherFilter={getOtherFilter()}
            filterInitialValue={{ sb: "" }}
            columns={columns}
            tableSize={{ x: 1400 }}
            modalWidth="1200px"
            formTemplate={
                <FormItem danhMuc={state} onChangeValue={handleFormValue} />
            }
            formInitialValues={{
                ngay_thang: moment().format("DD/MM/YYYY"),
                loai_tuoi: 0,
                gia_net: 0,
                tong_tien: 0,
                tong_tien_thu_khach: 0,
                hoa_hong: 0,
                phi_san_bay: 0,
                phu_phi_san_bay: 0,
                hanh_ly: 0,
                phu_phi: 0
            }}
            otherActions={dvAction}
            expandedRowRender={expandedRowRender}
            renderSummary={renderSummary}
            setFormValues={formValue}
        />
    );
});

export default withRouter(List);

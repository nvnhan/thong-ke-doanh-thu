import moment from "moment";
import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";
import { vndFormater } from "../../../utils";

const List = React.memo(props => {
    const tour = props.location.tour;
    const [hangHoa, setHangHoa] = useState([]);
    const [formValue, setFormValue] = useState(undefined);

    if (tour === undefined) return <Redirect to="/" />;

    useEffect(() => {
        // Chuyển từ Component khác tới. Cụ thể ở đây là từ Tour
        if (tour !== undefined)
            axios
                .get("/api/hang-hoa/all")
                .then(response => {
                    if (response.data.success) setHangHoa(response.data.data);
                })
                .catch(error => console.log(error));
    }, []);

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Bắt đầu: {record.bat_dau}. Kết thúc: {record.ket_thuc}
            </li>
            <li>
                Mã hàng: {record.ma_hang}. Tên hàng: {record.ten_hang}.
            </li>
            <li>
                Đơn giá: {vndFormater.format(record.don_gia)}. Số lượng:{" "}
                {record.so_luong}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
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
            title: "Phân loại",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 120
        },
        {
            title: "Mã hàng",
            dataIndex: "ma_hang",
            optFind: true,
            width: 120
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "nha_cung_cap",
            optFilter: true,
            width: 150
        },
        {
            title: "Thành tiền",
            dataIndex: "thanh_tien",
            render: number => vndFormater.format(number),
            width: 120,
            sorter: (a, b) => a.thanh_tien - b.thanh_tien
        },
        {
            title: "Thanh toán",
            dataIndex: "ngay_thanh_toan",
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        }
    ];

    const renderSummary = data => {
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    thanh_tien:
                        previousValue.thanh_tien + currentValue.thanh_tien
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={6}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.thanh_tien)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };

    /**
     * Callback from FOrmItem, trigger when select Hang Hoa
     * => Change setFormValues to ListForm => FormEdit
     */
    const handleFormValue = don_gia => {
        setFormValue({
            don_gia
        });
    };

    return (
        <React.Fragment>
            <div className="filter-box">
                Tour:{" "}
                <b>
                    {tour.ma_tour} ({tour.ten_tour})
                </b>
                . Ngày bắt đầu: {tour.bat_dau}, kết thúc: {tour.ket_thuc}
            </div>
            <ListForm
                url="tour-chi-tiet"
                filter={{ tour: tour.id }}
                otherParams={{ id_tour: tour.id }}
                columns={columns}
                modalWidth="800px"
                formTemplate={
                    <FormItem
                        hangHoa={hangHoa}
                        onChangeValue={handleFormValue}
                    />
                }
                formInitialValues={{
                    so_luong: 1,
                    ngay_thang: moment().format("DD/MM/YYYY"),
                    bat_dau: tour.bat_dau,
                    ket_thuc: tour.ket_thuc
                }}
                expandedRowRender={expandedRowRender}
                renderSummary={renderSummary}
                setFormValues={formValue}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

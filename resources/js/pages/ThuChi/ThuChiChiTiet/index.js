import moment from "moment";
import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";
import { vndFormater } from "../../../utils";

const List = React.memo(props => {
    const tc = props.location.tc;

    if (tc === undefined) return <Redirect to="/" />;

    useEffect(() => {
        // Chuyển từ Component khác tới. Cụ thể ở đây là từ Thu Chi
        // if (tc !== undefined)
        //     axios
        //         .get("/api/hang-hoa/all")
        //         .then(response => {
        //             if (response.data.success) setHangHoa(response.data.data);
        //         })
        //         .catch(error => console.log(error));
    }, []);

    const expandedRowRender = record => (
        <p style={{ margin: 0 }}>{record.chi_tiet}</p>
    );

    const columns = [
        {
            title: "Loại đối tượng",
            dataIndex: "loai_doi_tuong",
            width: 120
        },
        {
            title: "Số tiền",
            dataIndex: "so_tien",
            render: number => vndFormater.format(number),
            width: 120,
            sorter: (a, b) => a.so_tien - b.so_tien
        },
        {
            title: "Chi tiết",
            dataIndex: "chi_tiet",
            ellipsis: true,
            width: 250
        }
    ];

    const renderSummary = data => {
        if (!_.isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    so_tien: previousValue.so_tien + currentValue.so_tien
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={2}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.so_tien)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };

    return (
        <React.Fragment>
            <div className="filter-box">
                Thu chi: <i>{tc.hang_muc}</i>. Ngày tháng: {tc.ngay_thang}, số
                tiền <b>{vndFormater.format(tc.so_tien)}</b>.<br />
                Lọc theo tài khoản chi: <b>{tc.tai_khoan_di}</b>, nơi nhận:{" "}
                <b>{tc.tai_khoan_den}</b>, khách hàng:{" "}
                <b>{tc.ten_khach_hang}</b>
            </div>
            <ListForm
                url="thu-chi-chi-tiet"
                filter={{ tc: tc.id }}
                otherParams={{ id_thu_chi: tc.id }}
                editable={false}
                columns={columns}
                modalWidth="800px"
                formTemplate={<FormItem />}
                expandedRowRender={expandedRowRender}
                renderSummary={renderSummary}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

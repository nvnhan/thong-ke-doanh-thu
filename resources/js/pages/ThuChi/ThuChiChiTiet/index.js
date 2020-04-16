import React, { useEffect, useRef, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { vndFormater } from "../../../utils";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [state, setState] = useState({
        thuChi: props.location.tc,
        doiTuong: []
    });
    const { thuChi, doiTuong } = state;
    const [formValue, setFormValue] = useState(undefined);
    const tongCong = useRef(0);

    if (thuChi === undefined) return <Redirect to="/" />;
    const toiDa =
        thuChi.id_khach_hang !== null
            ? thuChi.so_du_khach_hang
            : thuChi.so_tien - tongCong.current;
    let time = null;

    useEffect(() => {
        // retrieveData();
        return () => {
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        const promise1 = axios.get("/api/thu-chi/" + thuChi.id);
        const promise2 = axios.get(
            "/api/thu-chi-chi-tiet/doi-tuong?tc=" + thuChi.id
        );
        console.log("Retrieving Danh Muc");
        Promise.all([promise1, promise2])
            .then(response => {
                if (response[0].data.success && response[1].data.success) {
                    setState({
                        thuChi: response[0].data.data,
                        doiTuong: response[1].data.data
                    });
                    console.log("Retrieved Danh Muc Succcessfully");
                } else time = setTimeout(retrieveData, 2000);
            })
            .catch(error => {
                console.log(error);
                time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
            });
    };

    /**
     * Callback from ListForm to reload Thu Chi from server
     */
    const onChangeData = data => {
        tongCong.current = 0; // Để tính lại tong cong, trừ trường hợp ko còn record nào
        retrieveData();
    };

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
            tongCong.current = sumObj.so_tien;
            return (
                <>
                    <tr>
                        <th colSpan={3}>Tổng cộng</th>
                        <td>
                            <span
                                style={
                                    tongCong.current >= toiDa
                                        ? {
                                              color: "red"
                                          }
                                        : {}
                                }
                            >
                                {vndFormater.format(tongCong.current)}
                            </span>
                        </td>
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
    const handleFormValue = so_tien => {
        if (so_tien > toiDa) so_tien = toiDa;
        setFormValue({
            so_tien,
            resetFields: () => setFormValue(undefined)
        });
    };

    return (
        <React.Fragment>
            <div className="filter-box">
                Thu chi: <i>{thuChi.hang_muc}</i>. Ngày tháng:{" "}
                {thuChi.ngay_thang}, số tiền{" "}
                <b>{vndFormater.format(thuChi.so_tien)}</b>
                .<br />
                Lọc các đối tượng theo:{" "}
                <b>
                    {thuChi.id_khach_hang !== null
                        ? "Khách hàng: " +
                          thuChi.ten_khach_hang +
                          ", số dư: " +
                          vndFormater.format(thuChi.so_du_khach_hang)
                        : "Tài khoản chi: " + thuChi.tai_khoan_di}
                </b>
                , nơi nhận: <b>{thuChi.tai_khoan_den}</b>
                <br />
                Giới hạn chi: <b color="red">{vndFormater.format(toiDa)}</b>
            </div>
            <ListForm
                url="thu-chi-chi-tiet"
                filter={{ tc: thuChi.id }}
                otherParams={{
                    id_thu_chi: thuChi.id
                }}
                insertable={toiDa > 0}
                editable={false}
                columns={columns}
                modalWidth="800px"
                formTemplate={
                    <FormItem
                        onChangeValue={handleFormValue}
                        doiTuong={doiTuong}
                        toiDa={toiDa}
                    />
                }
                formInitialValues={{
                    so_tien: 0
                }}
                expandedRowRender={expandedRowRender}
                renderSummary={renderSummary}
                setFormValues={formValue}
                onChangeData={onChangeData}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

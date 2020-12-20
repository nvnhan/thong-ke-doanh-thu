import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { useMergeState, vndFormater } from "../../../utils";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const [state, setState] = useMergeState({
        thuChi: props.location.tc,
        doiTuong: [],
        toiDa: 0,
        selectedRowKeys: []
    });
    const { thuChi, doiTuong, toiDa, selectedRowKeys } = state;

    if (thuChi === undefined) return <Redirect to="/" />;

    let time = null;

    useEffect(() => {
        // Cleanup function
        return () => {
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = data => {
        const promise1 = axios.get("/api/thu-chi/" + thuChi.id);
        const promise2 = axios.get(
            "/api/thu-chi-chi-tiet/doi-tuong?tc=" + thuChi.id
        );
        console.log("Retrieving Danh Muc");
        Promise.all([promise1, promise2])
            .then(response => {
                if (response[0].data.success && response[1].data.success) {
                    const tc = response[0].data.data;
                    // Tổng cộng số tiền đã chi
                    let tien = 0;
                    if (!_.isEmpty(data)) {
                        const sumObj = data.reduce(
                            (previousValue, currentValue) => {
                                return {
                                    so_tien:
                                        previousValue.so_tien +
                                        currentValue.so_tien
                                };
                            }
                        );
                        tien = sumObj.so_tien;
                    }
                    // Số dư khách hàng chính là kết quả cuối cùng sau khi đã trừ đi tổng số tiền đã chi
                    // do vậy ko phải trừ đi sumObj nữa
                    const td =
                        tc.id_khach_hang !== null
                            ? tc.so_du_khach_hang
                            : tc.so_tien - tien;
                    setState({
                        thuChi: tc,
                        doiTuong: response[1].data.data,
                        toiDa: td,
                        selectedRowKeys: []
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
    const onChangeData = data => retrieveData(data);

    const expandedRowRender = record => {
        const lines = record.chi_tiet.split(" | ");
        return (
            <ul style={{ margin: 0 }}>
                {lines.map((line, key) => (
                    <li key={key}>{line}</li>
                ))}
            </ul>
        );
    };

    const columns = [
        {
            title: "Loại đối tượng",
            dataIndex: "loai_doi_tuong",
            width: 80
        },
        {
            title: "Số tiền",
            dataIndex: "so_tien",
            render: number => vndFormater.format(number),
            width: 110,
            sorter: (a, b) => a.so_tien - b.so_tien
        },
        {
            title: "Chi tiết",
            dataIndex: "chi_tiet",
            ellipsis: true,
            width: 300
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
                        <th colSpan={3}>Tổng cộng</th>
                        <td>
                            <span style={toiDa <= 0 ? { color: "red" } : {}}>
                                {vndFormater.format(sumObj.so_tien)}
                            </span>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </>
            );
        }
    };

    const getDetail = () => {
        if (thuChi.id_khach_hang !== null)
            return (
                <span>
                    Khách hàng: <b>{thuChi.ten_khach_hang}</b>, số dư:{" "}
                    <b>{vndFormater.format(thuChi.so_du_khach_hang)}</b>
                </span>
            );
        else
            return (
                <span>
                    Tài khoản chi: <b>{thuChi.tai_khoan_di}</b>
                </span>
            );
    };

    const onChangeSelect = selectedRowKeys => setState({ selectedRowKeys });

    return (
        <React.Fragment>
            <div className="filter-box">
                Ngày tháng: {thuChi.ngay_thang}. Thu chi:{" "}
                <i>{thuChi.hang_muc}</i>. Số tiền:{" "}
                <b>{vndFormater.format(thuChi.so_tien)}</b>
                <br />
                Nơi nhận: <b>{thuChi.tai_khoan_den}</b>. Lọc các đối tượng theo:{" "}
                {getDetail()}
                <br />
                Giới hạn chi còn lại:{" "}
                <b style={{ color: "red" }}>{vndFormater.format(toiDa)}</b>
            </div>
            <ListForm
                url="thu-chi-chi-tiet"
                filter={{ tc: thuChi.id }}
                otherParams={{
                    id_thu_chi: thuChi.id,
                    doi_tuong: selectedRowKeys.join("|")
                }}
                insertable={toiDa > 0}
                editable={false}
                columns={columns}
                modalWidth="800px"
                formTemplate={
                    <FormItem
                        doiTuong={doiTuong}
                        selectedRowKeys={selectedRowKeys}
                        onChangeSelect={onChangeSelect}
                    />
                }
                expandedRowRender={expandedRowRender}
                renderSummary={renderSummary}
                onChangeData={onChangeData}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

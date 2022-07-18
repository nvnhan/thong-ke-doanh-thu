import Button from "antd/lib/button/index";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { setHangHoaList } from "../../../actions/actHangHoa";
import ListForm from "../../../components/ListForm";
import { unionDataBy } from "../../../utils";
import FormItem from "./FormItem";
import exportToExcel from "../../../utils/exportToExcel";

const List = React.memo(props => {
    const dispatch = useDispatch();
    const hangHoaList = useSelector(state => state.hangHoa.list);

    const [phanLoai, setPhanLoai] = useState([]);
    const [ncc, setNcc] = useState(props.location.ncc);
    const dinh_danh = props.location.dd;

    const onClickAll = () => setNcc(undefined);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        dispatch(setHangHoaList(unionDataBy(hangHoaList, data)));
        let phanLoai = [...new Set(data.map(x => x.phan_loai))];
        setPhanLoai(phanLoai);
    };

    const columns = [
        {
            title: "Mã hàng",
            dataIndex: "ma_hang",
            optFind: true,
            width: 120
        },
        {
            title: "Tên hàng",
            dataIndex: "ten_hang",
            optFind: true,
            width: 150
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "nha_cung_cap",
            optFilter: true,
            width: 150
        },
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 120
        },
        {
            title: "Đơn vị",
            dataIndex: "don_vi",
            width: 120
        },
        {
            title: "Đơn giá",
            dataIndex: "don_gia",
            render: number =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(number),
            width: 120
        },
        {
            title: "Ghi chú",
            dataIndex: "ghi_chu",
            ellipsis: true,
            width: 150
        }
        // {
        //     title: "Người tạo",
        //     dataIndex: "username",
        //     width: 120
        // }
    ];

    const getNhaCungCapDetail = () => (
        <div className="filter-box">
            Nhà cung cấp:{" "}
            <b>
                {ncc.ky_hieu} ({ncc.mo_ta})
            </b>
            <Button type="link" onClick={onClickAll}>
                (Tất cả hàng hóa)
            </Button>
        </div>
    );

    const exportDS = (data, selectedRowKeys) => {
        const filtered = data.filter(p => selectedRowKeys.indexOf(p.id) !== -1);
        const newData = filtered.map((p, index) => ({
            stt: index + 1,
            ma_hang: p.ma_hang,
            ten_hang: p.ten_hang,
            nha_cung_cap: p.nha_cung_cap,
            phan_loai: p.phan_loai,
            don_vi: p.don_vi,
            don_gia: p.don_gia,
            ghi_chu: p.ghi_chu,
            username: p.username
        }));
        const dataExport = [
            {
                stt: "STT",
                ma_hang: "Mã hàng",
                ten_hang: "Tên hàng",
                nha_cung_cap: "Nhà cung cấp",
                phan_loai: "Phân loại",
                don_vi: "Đơn vị tính",
                don_gia: "Đơn giá",
                ghi_chu: "Ghi chú",
                username: "Người nhập"
            },
            ...newData
        ];
        exportToExcel(dataExport, "hang-hoa.xlsx");
    };

    const otherButtons = [
        {
            key: "them-tu-file",
            onClick: () =>
                props.history.push({ pathname: "/hang-hoa/them-file" }),
            title: "Thêm từ file",
            selectRequired: false
        },
        {
            key: "export",
            onClick: exportDS,
            title: "Xuất danh sách ra Excel"
        }
    ];

    return (
        <React.Fragment>
            {ncc !== undefined && getNhaCungCapDetail()}
            {dinh_danh !== undefined && (
                <div
                    style={{ padding: "16px 20px 0", backgroundColor: "#fff" }}
                >
                    <b>Dữ liệu xử lý được:</b>
                </div>
            )}
            <ListForm
                url="hang-hoa"
                filter={
                    ncc !== undefined
                        ? { ncc: ncc.id }
                        : dinh_danh
                        ? { dd: dinh_danh }
                        : undefined
                }
                columns={columns}
                insertable={dinh_danh === undefined}
                tableSize={{ x: 800 }}
                modalWidth="800px"
                otherButtons={otherButtons}
                onChangeData={onChangeData}
                formTemplate={<FormItem phanLoai={phanLoai} nhaCungCap={ncc} />}
                formInitialValues={{ don_gia: 0 }}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

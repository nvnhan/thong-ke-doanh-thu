import Button from "antd/lib/button/index";
import unionBy from "lodash/unionBy";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { setHangHoaList } from "../../../actions/actHangHoa";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

const List = React.memo(props => {
    const dispatch = useDispatch();
    const hangHoaList = useSelector(state => state.hangHoa.list);

    const [phanLoai, setPhanLoai] = useState([]);
    const [ncc, setNcc] = useState(props.location.ncc);

    const onClickAll = () => setNcc(undefined);

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        dispatch(setHangHoaList(unionBy(data, hangHoaList, "id")));
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

    return (
        <React.Fragment>
            {ncc !== undefined && getNhaCungCapDetail()}
            <ListForm
                url="hang-hoa"
                filter={ncc !== undefined ? { ncc: ncc.id } : undefined}
                columns={columns}
                tableSize={{ x: 800 }}
                modalWidth="800px"
                onChangeData={onChangeData}
                formTemplate={<FormItem phanLoai={phanLoai} nhaCungCap={ncc} />}
                formInitialValues={{ don_gia: 0 }}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

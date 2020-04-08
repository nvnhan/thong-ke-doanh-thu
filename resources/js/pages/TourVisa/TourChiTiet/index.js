import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";
import { Button } from "antd";

const List = React.memo(props => {
    const [phanLoai, setPhanLoai] = useState([]);
    const [location, setLocation] = useState(props.location.state);
    const [state, setState] = useState({
        nhaCungCap: [],
        filter: {},
        ncc: -1
    });
    const { nhaCungCap, filter } = state;

    useEffect(() => {
        // Chuyển từ Component khác tới. Cụ thể ở đây là từ Nhà cung cấp
        let ncc = -1;
        if (location !== undefined) ncc = location.ncc;
        axios
            .get(`/api/nha-cung-cap?ncc=${ncc}`)
            .then(response => {
                if (response.data.success)
                    setState({
                        nhaCungCap: response.data.data,
                        filter: { ncc: ncc },
                        ncc
                    });
            })
            .catch(error => console.log(error));
    }, [location]);

    const onClickAll = () => {
        setLocation(undefined);
    };

    /**
     * Callback from ListForm to get PhanLoai from data
     */
    const onChangeData = data => {
        //TODO: With filtered HangHoa => Phan Loai Has less than normal
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
        },
        {
            title: "Người tạo",
            dataIndex: "username",
            width: 120
        }
    ];

    return (
        <React.Fragment>
            {state.ncc !== -1 ? (
                <div className="filter-box">
                    <b>Nhà cung cấp: </b>
                    {nhaCungCap[0].ky_hieu} - {nhaCungCap[0].mo_ta}
                    <Button type="link" onClick={onClickAll}>
                        (Tất cả hàng hóa)
                    </Button>
                </div>
            ) : (
                ""
            )}
            <ListForm
                url="hang-hoa"
                filter={filter}
                columns={columns}
                tableSize={{ x: 800 }}
                modalWidth="800px"
                onChangeData={onChangeData}
                formTemplate={
                    <FormItem phanLoai={phanLoai} nhaCungCap={nhaCungCap} />
                }
                formInitialValues={{ don_gia: 0 }}
            />
        </React.Fragment>
    );
});

export default withRouter(List);

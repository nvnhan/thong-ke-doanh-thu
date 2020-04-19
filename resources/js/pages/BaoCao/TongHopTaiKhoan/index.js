import { Select } from "antd";
import React, { useEffect, useState } from "react";
import ListForm from "../../../components/ListForm";
const { Option } = Select;

const List = React.memo(props => {
    const [trangThai, setTrangThai] = useState({
        columns: [],
        tableSize: 1000
    });
    const { columns, tableSize } = trangThai;

    const [nhanVien, setNhanVien] = useState([]);

    useEffect(() => {
        axios
            .get("/api/nhan-vien/all")
            .then(response => {
                if (response.data.success) setNhanVien(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    /**
     * Callback from ListForm to reload Thu Chi from server
     */
    const onChangeData = data => {
        if (_.isEmpty(data)) return;
        const entry = data[0];
        let cols = [];
        let size = 0;
        for (let key in entry) {
            size += 110;
            if (key === "tai_khoan")
                cols.push({
                    title: "Tài khoản",
                    dataIndex: key,
                    width: 120,
                    fixed: "left",
                    optFind: true
                });
            else if (key === "dau_ky")
                cols.push({
                    title: "Đầu / Cuối kỳ",
                    dataIndex: key,
                    // render: text => {
                    //     if (text !== undefined && text !== null && text.indexOf(" | ") > 0) {
                    //         let a = text.split(" | ");
                    //         return (
                    //             <span>
                    //                 {a[0]}
                    //                 <br />
                    //                 {a[1]}
                    //             </span>
                    //         );
                    //     }
                    //     return text;
                    // },
                    width: 100
                });
            else if (key === "thu_chi")
                cols.push({
                    title: "",
                    dataIndex: key,
                    width: 80
                });
            else if (key !== "id")
                cols.push({
                    title: key,
                    dataIndex: key,
                    // render: text => {
                    //     if (text !== undefined && text !== null && text.indexOf(" | ") > 0) {
                    //         let a = text.split(" | ");
                    //         return (
                    //             <span>
                    //                 {a[0]}
                    //                 <br />
                    //                 {a[1]}
                    //             </span>
                    //         );
                    //     }
                    //     return text;
                    // },
                    width: 100
                });
        }
        setTrangThai({
            columns: cols,
            tableSize: size
        });
    };

    const getOtherFilter = () => {
        return [
            {
                name: "user",
                label: "Nhân viên",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        {nhanVien.map(nv => (
                            <Option key={nv.username} value={nv.username}>
                                {nv.username + " - " + nv.ho_ten}
                            </Option>
                        ))}
                    </Select>
                )
            }
        ];
    };

    const exportDS = (data, selectedKeys) => {
        //TODO: Xuất Excel
    };

    const otherButtons = [
        {
            key: "export",
            onClick: exportDS,
            title: "Xuất danh sách ra Excel",
            selectRequired: false
        }
    ];

    return (
        <ListForm
            url="tong-hop-tai-khoan"
            insertable={false}
            selectable={false}
            editable={false}
            deleteable={false}
            selectable={false}
            filterBox
            otherFilter={getOtherFilter()}
            filterInitialValue={{ user: "" }}
            columns={columns}
            tableSize={{ x: tableSize }}
            otherButtons={otherButtons}
            onChangeData={onChangeData}
        />
    );
});

export default List;

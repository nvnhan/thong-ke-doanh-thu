import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";
import ListForm from "../../../components/ListForm";
import exportToExcel from "../../../utils/exportToExcel";

const List = React.memo(props => {
    const [trangThai, setTrangThai] = useState({
        columns: [],
        tableSize: 1000
    });
    const { columns, tableSize } = trangThai;

    /**
     * Callback from ListForm to reload Thu Chi from server
     */
    const onChangeData = data => {
        if (isEmpty(data)) return;
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
                    title: "Đầu kỳ",
                    dataIndex: key,
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
                    width: 100
                });
        }
        setTrangThai({
            columns: cols,
            tableSize: size
        });
    };

    const exportDS = (data, selectedKeys) => {
        const newData = data.map((p, index) => {
            const t = { stt: index + 1, ...p };
            delete t["id"];
            return t;
        });
        exportToExcel(newData, "tong-hop-tai-khoan.xlsx", false);
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
            columns={columns}
            tableSize={{ x: tableSize }}
            otherButtons={otherButtons}
            onChangeData={onChangeData}
        />
    );
});

export default List;

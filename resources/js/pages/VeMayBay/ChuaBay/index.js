import locale from "antd/es/date-picker/locale/vi_VN";
import moment from "moment";
import React from "react";
import ListForm from "../../../components/ListForm";
import MyDatePicker from "../../../components/ListForm/MyDatePicker";
import { vndFormater } from "../../../utils";
import exportDS from "../../../utils/exportDatVe";
import columns from "../DatVe/columns";
import isEmpty from "lodash/isEmpty";
import expandedRow from "../DatVe/expandedRow";

const List = React.memo(props => {
    const getOtherFilter = () => {
        return [
            {
                name: "den_ngay",
                label: "Tính đến",
                render: (
                    <MyDatePicker
                        style={{
                            width: "100%"
                        }}
                        locale={locale}
                        format="HH:mm DD/MM/YYYY"
                        allowClear={false}
                    />
                )
            }
        ];
    };

    const renderSummary = data => {
        if (!isEmpty(data)) {
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
                        <th colSpan={10}>Tổng cộng</th>
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
                    </tr>
                </>
            );
        }
    };

    const otherButtons = [
        {
            key: "export",
            onClick: (data, selectedRowKeys) =>
                exportDS(data, selectedRowKeys, "chua-bay.xlsx"),
            title: "Xuất danh sách ra Excel",
            selectRequired: false
        }
    ];

    return (
        <ListForm
            url="chua-bay"
            insertable={false}
            selectable={false}
            editable={false}
            deleteable={false}
            filterBox
            tuNgayDenNgay={false}
            otherFilter={getOtherFilter()}
            filterInitialValue={{
                den_ngay: moment().format("HH:mm DD/MM/YYYY")
            }}
            columns={columns}
            tableSize={{ x: 1800 }}
            otherButtons={otherButtons}
            expandedRowRender={expandedRow}
            renderSummary={renderSummary}
        />
    );
});

export default List;

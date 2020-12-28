import React, { useEffect, useState } from "react";
import {
    isChangeData,
    queryString,
    useMergeState,
    vndFormater
} from "../../../utils";
import DataTable from "../../../components/ListForm/DataTable";
import FilterBox from "../../../components/ListForm/FilterBox";
import ToolsButton from "../../../components/ListForm/ToolsButton";
import { Tabs } from "antd";
import isEmpty from "lodash/isEmpty";
import { ExportMultiSheet } from "../../../utils/exportToExcel";

const List = props => {
    const [state, setState] = useMergeState({
        data: {
            muavao: [],
            banra: []
        },
        isLoading: true
    });
    const { data, isLoading } = state;
    const [ownFilter, setOwnFilter] = useState(undefined);
    let isComponentMounted = false;

    useEffect(() => {
        isComponentMounted = true;
        // Không Có filter hoặc có filter và đã load xong
        if (ownFilter === undefined || !isEmpty(ownFilter)) {
            // Set lại data và loading cho các Component con
            setState({ data: [], isLoading: true });

            axios
                .get("/api/tong-hop-cong-no?" + queryString(ownFilter))
                .then(response => {
                    if (isComponentMounted && response.data.success) {
                        setState({
                            data: response.data.data,
                            isLoading: false
                        });
                    }
                })
                .catch(error => console.log(error));
        }
        return () => {
            // When Unmount component
            isComponentMounted = false;
        };
    }, [JSON.stringify(ownFilter)]); // Chỉ chạy 1 lần khi mount đến khi ownFilter thay đổi

    /**
     * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
     */
    const handleFilterBox = newFilter => {
        // Thay đổi filter => Load lại dữ liệu
        if (isChangeData(ownFilter, newFilter)) setOwnFilter(newFilter);
    };

    const renderSummaryBanRa = data => {
        if (!isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    dau_ky: previousValue.dau_ky + currentValue.dau_ky,
                    cuoi_ky: previousValue.cuoi_ky + currentValue.cuoi_ky,
                    giao_dich: previousValue.giao_dich + currentValue.giao_dich,
                    thanh_toan:
                        previousValue.thanh_toan + currentValue.thanh_toan
                };
            });
            return (
                <>
                    <tr>
                        <th colSpan={2}>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.dau_ky)}</td>
                        <td>{vndFormater.format(sumObj.cuoi_ky)}</td>
                        <td>{vndFormater.format(sumObj.thanh_toan)}</td>
                        <td>{vndFormater.format(sumObj.giao_dich)}</td>
                    </tr>
                </>
            );
        }
    };

    const renderSummaryMuaVao = data => {
        if (!isEmpty(data)) {
            const sumObj = data.reduce((previousValue, currentValue) => {
                return {
                    dau_ky: previousValue.dau_ky + currentValue.dau_ky,
                    cuoi_ky: previousValue.cuoi_ky + currentValue.cuoi_ky,
                    giao_dich: previousValue.giao_dich + currentValue.giao_dich,
                    thanh_toan:
                        previousValue.thanh_toan + currentValue.thanh_toan
                };
            });
            return (
                <>
                    <tr>
                        <th>Tổng cộng</th>
                        <td>{vndFormater.format(sumObj.dau_ky)}</td>
                        <td>{vndFormater.format(sumObj.cuoi_ky)}</td>
                        <td>{vndFormater.format(sumObj.thanh_toan)}</td>
                        <td>{vndFormater.format(sumObj.giao_dich)}</td>
                    </tr>
                </>
            );
        }
    };

    const exportDS = () => {
        const banra = data.banra.map((p, ind) => ({
            stt: ind + 1,
            phan_loai: p.phan_loai,
            khach_hang: p.khach_hang,
            dau_ky: p.dau_ky,
            cuoi_ky: p.cuoi_ky,
            thanh_toan: p.thanh_toan,
            giao_dich: p.giao_dich
        }));
        const dataExportBanRa = [
            {
                stt: "STT",
                phan_loai: "Phân loại",
                khach_hang: "Khách hàng",
                dau_ky: "Dư - Nợ đầu kỳ",
                cuoi_ky: "Dư - Nợ cuối kỳ",
                thanh_toan: "Số tiền thanh toán",
                giao_dich: "Số tiền giao dịch"
            },
            ...banra
        ];
        const muavao = data.muavao.map((p, ind) => ({
            stt: ind + 1,
            tai_khoan: p.tai_khoan,
            dau_ky: p.dau_ky,
            cuoi_ky: p.cuoi_ky,
            thanh_toan: p.thanh_toan,
            giao_dich: p.giao_dich
        }));
        const dataExportMuaVao = [
            {
                stt: "STT",
                tai_khoan: "Tài khoản",
                dau_ky: "Dư - Nợ đầu kỳ",
                cuoi_ky: "Dư - Nợ cuối kỳ",
                thanh_toan: "Số tiền thanh toán",
                giao_dich: "Số tiền giao dịch"
            },
            ...muavao
        ];
        const dataExport = {
            "Tổng hợp bán ra": dataExportBanRa,
            "Tổng hợp mua vào": dataExportMuaVao
        };
        ExportMultiSheet(dataExport, "tong-hop-cong-no.xlsx");
    };

    const otherButtons = [
        {
            key: "export",
            onClick: exportDS,
            title: "Xuất danh sách ra Excel",
            selectRequired: false
        }
    ];

    const columnsBanRa = [
        {
            title: "Phân loại",
            dataIndex: "phan_loai",
            optFilter: true,
            width: 100
        },
        {
            title: "Khách hàng",
            dataIndex: "khach_hang",
            optFind: true,
            width: 170
        },
        {
            title: "Dư - Nợ đầu kỳ",
            dataIndex: "dau_ky",
            render: number => vndFormater.format(number),
            width: 100
        },
        {
            title: "Dư - Nợ cuối kỳ",
            dataIndex: "cuoi_ky",
            render: number => vndFormater.format(number),
            width: 100
        },
        {
            title: "Số tiền thanh toán",
            dataIndex: "thanh_toan",
            render: number => vndFormater.format(number),
            width: 100
        },
        {
            title: "Tổng tiền giao dịch",
            dataIndex: "giao_dich",
            render: number => vndFormater.format(number),
            width: 100
        }
    ];

    const columnsMuaVao = [
        {
            title: "Tài khoản",
            dataIndex: "tai_khoan",
            optFind: true,
            width: 180
        },
        {
            title: "Dư - Nợ đầu kỳ",
            dataIndex: "dau_ky",
            render: number => vndFormater.format(number),
            width: 100
        },
        {
            title: "Dư - Nợ cuối kỳ",
            dataIndex: "cuoi_ky",
            render: number => vndFormater.format(number),
            width: 100
        },
        {
            title: "Số tiền thanh toán",
            dataIndex: "thanh_toan",
            render: number => vndFormater.format(number),
            width: 100
        },
        {
            title: "Tổng tiền giao dịch",
            dataIndex: "giao_dich",
            render: number => vndFormater.format(number),
            width: 100
        }
    ];

    return (
        <div className="list-form">
            <FilterBox filterBox tuNgayDenNgay onFilter={handleFilterBox} />
            <ToolsButton
                insertable={false}
                deleteable={false}
                selectable={false}
                otherButtons={otherButtons}
            />
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tổng hợp bán ra" key={1}>
                    <DataTable
                        tableSize={{ x: 800 }}
                        data={data.banra}
                        columns={columnsBanRa}
                        isLoading={isLoading}
                        deleteable={false}
                        selectable={false}
                        editable={false}
                        primaryKey="id"
                        renderSummary={renderSummaryBanRa}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tổng hợp mua vào" key={2}>
                    <DataTable
                        tableSize={{ x: 800 }}
                        data={data.muavao}
                        columns={columnsMuaVao}
                        isLoading={isLoading}
                        deleteable={false}
                        selectable={false}
                        editable={false}
                        primaryKey="id"
                        renderSummary={renderSummaryMuaVao}
                    />
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default React.memo(List);

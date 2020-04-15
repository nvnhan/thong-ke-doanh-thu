import {
    FileExcelOutlined,
    FileTextOutlined,
    UserAddOutlined
} from "@ant-design/icons";
import { Button, Form, Select, message, Modal, Input } from "antd";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import ListForm from "../../../components/ListForm";
import { useMergeState, vndFormater } from "../../../utils";
import FormItem from "./FormItem";
import UpdateLayout from "./UpdateLayout";
const { Option } = Select;

const List = React.memo(props => {
    const [formValue, setFormValue] = useState(undefined);
    const [update, setUpdate] = useMergeState({
        selectedKeys: [],
        modalVisible: false
    });
    const { selectedKeys, modalVisible } = update;
    const [updateForm] = Form.useForm();

    const [state, setState] = useMergeState({
        sanBay: [],
        thuePhi: [],
        phiHanhLy: [],
        taiKhoan: [],
        khachHang: [],
        hangBay: []
    });
    const { phiHanhLy, taiKhoan, sanBay, thuePhi } = state;
    const childRef = useRef();
    let time = null;

    useEffect(() => {
        retrieveData();
        return () => {
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        const promise1 = axios.get("/api/san-bay");
        const promise2 = axios.get("/api/thue-phi/all");
        const promise3 = axios.get("/api/phi-hanh-ly/all");
        const promise4 = axios.get("/api/tai-khoan/all");
        const promise5 = axios.get("/api/khach-hang/all");
        const promise6 = axios.get("/api/dat-ve/hang-bay");
        console.log("Retrieving Danh Muc");
        Promise.all([
            promise1,
            promise2,
            promise3,
            promise4,
            promise5,
            promise6
        ])
            .then(response => {
                if (
                    response[0].data.success &&
                    response[1].data.success &&
                    response[2].data.success &&
                    response[3].data.success &&
                    response[4].data.success &&
                    response[5].data.success
                ) {
                    setState({
                        sanBay: response[0].data.data,
                        thuePhi: response[1].data.data,
                        phiHanhLy: response[2].data.data,
                        taiKhoan: response[3].data.data,
                        khachHang: response[4].data.data,
                        hangBay: [
                            ...new Set([
                                ...response[5].data.data,
                                "VN",
                                "VJ",
                                "Jets",
                                "BB"
                            ])
                        ]
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
     * Callback from FormItem, trigger when select Hang Hoa
     * => Change setFormValues to ListForm => FormEdit
     */
    const handleFormValue = (value, type) => {
        let {
            id_tai_khoan_mua,
            hang_bay,
            loai_tuoi,
            sb_di,
            sb_di1,
            sb_ve,
            sb_ve1,
            phu_phi,
            vat,
            gia_net,
            hanh_ly,
            tong_tien,
            phi_san_bay,
            phu_phi_san_bay,
            hoa_hong
        } = childRef.current.getFormInstance().getFieldsValue();
        console.log("Tinh Phu Phi & Tinh Gia, Tinh Phi");

        // VAT
        vat = gia_net / 10;
        let record = { vat };
        // Chọn hành lý
        if (type === "hl") {
            const hl = phiHanhLy.filter(item => item.id === value)[0];
            if (hl) {
                hanh_ly = hl.muc_phi;
                Object.assign(record, { hanh_ly });
            }
        }
        // Tính phí nơi mua thu
        if (type === "hb" || type === "tk" || type === "sb") {
            const tk = taiKhoan.filter(item => item.id === id_tai_khoan_mua)[0];

            if (tk) {
                switch (hang_bay) {
                    case "VN":
                        phu_phi = tk.phi_vn || 0;
                    case "VJ":
                        phu_phi = tk.phi_vj || 0;
                    case "Jets":
                        phu_phi = tk.phi_jets || 0;
                    case "BB":
                        phu_phi = tk.phi_bb || 0;
                }
                if (!_.isEmpty(sb_ve)) phu_phi *= 2;
                Object.assign(record, { phu_phi });
            }
        }
        // Tính phí quản trị, phí soi chiếu: Phí sân bay, Phụ phí sân bay
        if (type === "hb" || type === "lt" || type === "sb") {
            // Em bé
            if (loai_tuoi === 2) phi_san_bay = phu_phi_san_bay = 0;
            else {
                // Phi sân bay: Phí soi chiếu, an ninh => chỉ tính với sân bay 1 lúc khởi hành
                phi_san_bay =
                    tinhPhiSB(sb_di, hang_bay, loai_tuoi) +
                    tinhPhiSB(sb_ve, hang_bay, loai_tuoi);
                phu_phi_san_bay =
                    tinhPhuPhiSB(sb_di, sb_di1, hang_bay) +
                    tinhPhuPhiSB(sb_ve, sb_ve1, hang_bay);
            }
            Object.assign(record, { phi_san_bay, phu_phi_san_bay });
        }
        //  Tính giá: Tổng tiền
        if (gia_net !== null && gia_net !== 0) {
            tong_tien =
                gia_net +
                vat +
                (phi_san_bay || 0) +
                (phu_phi_san_bay || 0) +
                (hanh_ly || 0) +
                (phu_phi || 0) -
                (hoa_hong || 0);
            Object.assign(record, { tong_tien });
        }

        Object.assign(record, { resetFields: () => setFormValue(undefined) });
        setFormValue(record);
    };

    /**
     * Tính phí soi chiếu, an ninh
     */
    const tinhPhiSB = (san_bay, hang_bay, loai_tuoi) => {
        if (hang_bay === undefined || hang_bay === "") return 0;
        const sb = sanBay.filter(item => item.ma_san_bay === san_bay)[0];
        let thue = [...thuePhi];
        hang_bay = hang_bay.toLowerCase();
        if (sb !== undefined) {
            if (sb.loai_a)
                thue = thue.filter(item => item.loai_phi.indexOf("nhóm A") > 0);
            else
                thue = thue.filter(item => item.loai_phi.indexOf("nhóm B") > 0);

            if (loai_tuoi === 0)
                thue = thue.filter(
                    item => item.loai_phi.indexOf("Người lớn") > 0
                );
            else if (loai_tuoi === 1)
                thue = thue.filter(item => item.loai_phi.indexOf("Trẻ em") > 0);
            else return 0;

            thue = thue.filter(
                item => item.loai_phi.toLowerCase().indexOf(hang_bay) > 0
            );
            if (!_.isEmpty(thue)) return thue[0].muc_phi;
        }
        return 0;
    };
    /**
     * Tính phí quản trị
     */
    const tinhPhuPhiSB = (san_bay, san_bay1, hang_bay) => {
        if (san_bay === null || san_bay === "") return 0;
        if (hang_bay === undefined || hang_bay === "") return 0;
        let thue = [...thuePhi];
        thue = thue.filter(item => item.loai_phi.indexOf("quản trị") > 0);
        hang_bay = hang_bay.toLowerCase();
        thue = thue.filter(
            item => item.loai_phi.toLowerCase().indexOf(hang_bay) > 0
        );
        //TODO: Với VN còn loại SB dài, ngắn
        if (!_.isEmpty(thue)) return thue[0].muc_phi;
        return 0;
    };

    /**
     * Trigger "Add new" action with addition params
     */
    const onClickRow = record => {
        // Thêm hành khách từ record
        childRef.current.triggerAddNew();
        const newRecord = Object.assign(
            { ...record },
            {
                ten_khach: "",
                resetFields: () => setFormValue(undefined)
            }
        );
        setFormValue(newRecord);
    };

    const dvAction = [
        {
            key: "them-hanh-khach",
            onClick: onClickRow,
            title: "Thêm hành khách",
            icon: <UserAddOutlined />,
            color: "#4bab92" // Primary color
        }
    ];

    const expandedRowRender = record => (
        <ul style={{ margin: 0 }}>
            <li>
                Chuyến bay đi: {record.cb_di}. Chuyến bay về: {record.cb_ve}
            </li>
            <li>Loại tuổi: {record.ten_loai_tuoi}</li>
            <li>
                Giá net: {vndFormater.format(record.gia_net)}. Phí soi chiếu, an
                ninh: {vndFormater.format(record.phi_san_bay)}. Phí quản trị:{" "}
                {vndFormater.format(record.phu_phi_san_bay)}
            </li>
            <li>
                VAT: {vndFormater.format(record.vat)}. Phụ phí:{" "}
                {vndFormater.format(record.phu_phi)}
            </li>
            <li>
                Hành lý: {vndFormater.format(record.hanh_ly)}. Loại hành lý:{" "}
                {record.loai_hanh_ly}
            </li>
            <li>
                Đã thanh toán: {vndFormater.format(record.da_thanh_toan)}. Ngày
                thanh toán: {record.ngay_thanh_toan}
            </li>
            {record.chua_xuat_ve ? (
                <li>Cảnh báo xuất vé: {record.canh_bao_xuat_ve}</li>
            ) : (
                <li>✔ Đã xuất vé</li>
            )}
            {!_.isEmpty(record.ngay_nhac_lich) && (
                <li>Nhắc lịch bay: {record.ngay_nhac_lich}</li>
            )}
            <li>Ghi chú: {record.ghi_chu}</li>
            <li>Người tạo: {record.username}</li>
        </ul>
    );

    const columns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_thang",
            width: 110,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
        },
        {
            title: "Mã giữ chỗ",
            dataIndex: "ma_giu_cho",
            optFind: true,
            width: 90
        },
        {
            title: "Số vé",
            dataIndex: "so_ve",
            width: 140,
            optFind: true
        },
        {
            title: "Hãng bay",
            dataIndex: "hang_bay",
            width: 80,
            optFilter: true
        },
        {
            title: "Tên khách",
            dataIndex: "ten_khach",
            width: 130,
            optFind: true
        },
        {
            title: "TG đi",
            dataIndex: "ngay_gio_di",
            width: 110,
            sorter: (a, b) =>
                moment(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() -
                moment(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix()
        },
        {
            title: "Chặng đi",
            dataIndex: "chang_di",
            width: 100
        },
        {
            title: "TG về",
            dataIndex: "ngay_gio_ve",
            width: 110,
            sorter: (a, b) =>
                moment(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() -
                moment(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix()
        },
        {
            title: "Chặng về",
            dataIndex: "chang_ve",
            width: 100
        },
        {
            title: "Tổng tiền",
            dataIndex: "tong_tien",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.tong_tien - b.tong_tien,
            width: 110
        },
        {
            title: "Thu khách",
            dataIndex: "tong_tien_thu_khach",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.tong_tien_thu_khach - b.tong_tien_thu_khach,
            width: 110
        },
        {
            title: "Lãi",
            dataIndex: "lai",
            render: number => vndFormater.format(number),
            sorter: (a, b) => a.lai - b.lai,
            width: 110
        },
        {
            title: "Nơi mua",
            dataIndex: "noi_mua",
            width: 110,
            optFilter: true
        },
        {
            title: "Khách hàng",
            dataIndex: "ten_khach_hang",
            width: 110,
            optFilter: true
        },
        {
            title: "Thanh toán",
            dataIndex: "ngay_thanh_toan",
            width: 110
        },
        {
            title: "Người nhập",
            dataIndex: "username",
            width: 90,
            optFilter: true
        }
    ];

    const getOtherFilter = () => {
        return [
            {
                name: "sb",
                label: "Sân bay",
                render: (
                    <Select>
                        <Option value="">Tất cả</Option>
                        <Option value="qn">Quốc nội</Option>
                        <Option value="qt">Quốc tế</Option>
                    </Select>
                )
            }
        ];
    };

    const renderSummary = data => {
        if (!_.isEmpty(data)) {
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
                        <th colSpan={11}>Tổng cộng</th>
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
                        <td></td>
                    </tr>
                </>
            );
        }
    };
    ///////////////////////////////////////////////////////////////////
    /**
     * Show modal cập nhật
     */
    const showUpdates = (data, selectedRowKeys) => {
        setUpdate({ selectedKeys: selectedRowKeys, modalVisible: true });
    };

    /**
     * Thực hiện Cập nhật
     */
    const handleOk = () => {
        if (_.isEmpty(selectedKeys)) return;
        updateForm
            .validateFields()
            .then(values => {
                // Update
                Object.assign(values, { objects: selectedKeys.join("|") });
                axios
                    .put(`/api/dat-ve/updates`, values)
                    .then(response => {
                        if (response.data.success) {
                            // Set lại data cho ListForm ????
                            // Ko thì thôi
                            message.info(response.data.message);
                            // Tắt loading & modal
                            handleCancel();
                            updateForm.resetFields();
                        }
                    })
                    .catch(error => console.log(error));
            })
            .catch(info => console.log("Validate Failed: ", info));
    };

    const handleCancel = () => {
        setUpdate({ selectedKeys: [], modalVisible: false });
    };

    /**
     * Tạo code vé
     */
    const codeVe = (data, selectedRowKeys) => {
        axios
            .get(`/api/dat-ve/code-ve`, {
                params: {
                    objects: selectedRowKeys.join("|")
                }
            })
            .then(response => {
                if (response.data.success) {
                    Modal.info({
                        title: "Code vé",
                        content: (
                            <Input.TextArea
                                rows={12}
                                value={response.data.data}
                            />
                        ),
                        width: "800px",
                        onOk() {}
                    });
                }
            })
            .catch(error => console.log(error));
    };

    const veDienTu = (data, selectedRowKeys) => {};

    const exportDS = (data, selectedRowKeys) => {};

    const layHoaDon = (data, selectedRowKeys) => {};

    const banKeHoaDon = (data, selectedRowKeys) => {};

    const congNo = (data, selectedRowKeys) => {};

    const otherButtons = [
        {
            key: "updates",
            onClick: showUpdates,
            title: "Cập nhật thông tin"
        },
        {
            key: "trichxuat",
            title: "Trích xuất",
            childs: [
                {
                    key: "codeve",
                    onClick: codeVe,
                    title: "Tạo mẫu code vé",
                    icon: <FileTextOutlined />
                },
                {
                    key: "vedientu",
                    onClick: veDienTu,
                    title: "Tạo mặt vé điện tử",
                    icon: <FileTextOutlined />
                },
                {
                    key: "export",
                    onClick: exportDS,
                    title: "Xuất danh sách ra Excel",
                    icon: <FileExcelOutlined />,
                    color: "#4bab92"
                },
                {
                    key: "layhoadon",
                    onClick: layHoaDon,
                    title: "Thông tin lấy hóa đơn",
                    icon: <FileExcelOutlined />,
                    color: "#4bab92"
                },
                {
                    key: "bangkehoadon",
                    onClick: banKeHoaDon,
                    title: "Bảng kê hóa đơn",
                    icon: <FileExcelOutlined />,
                    color: "#4bab92"
                },
                {
                    key: "xuatcongno",
                    onClick: congNo,
                    title: "Mẫu xuất công nợ",
                    icon: <FileExcelOutlined />,
                    color: "#4bab92"
                }
            ]
        }
    ];

    return (
        <React.Fragment>
            <ListForm
                ree={childRef}
                url="dat-ve"
                filterBox
                otherFilter={getOtherFilter()}
                filterInitialValue={{ sb: "" }}
                columns={columns}
                tableSize={{ x: 1400 }}
                modalWidth="1200px"
                formTemplate={
                    <FormItem danhMuc={state} onChangeValue={handleFormValue} />
                }
                formInitialValues={{
                    ngay_thang: moment().format("DD/MM/YYYY"),
                    loai_tuoi: 0,
                    gia_net: 0,
                    tong_tien: 0,
                    tong_tien_thu_khach: 0,
                    hoa_hong: 0,
                    phi_san_bay: 0,
                    phu_phi_san_bay: 0,
                    hanh_ly: 0,
                    phu_phi: 0
                }}
                otherActions={dvAction}
                otherButtons={otherButtons}
                expandedRowRender={expandedRowRender}
                renderSummary={renderSummary}
                setFormValues={formValue}
            />
            <Modal
                width="800px"
                title="Cập nhật thông tin"
                onCancel={handleCancel}
                onOk={handleOk}
                visible={modalVisible}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Đồng ý
                    </Button>
                ]}
            >
                <Form
                    form={updateForm}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ tong_tien: 0, tong_tien_thu_khach: 0 }}
                >
                    <UpdateLayout danhMuc={state} />
                </Form>
            </Modal>
        </React.Fragment>
    );
});

export default withRouter(List);

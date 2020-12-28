import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import InputNumber from "antd/lib/input-number/index";
import Select from "antd/lib/select/index";
import groupBy from "lodash/groupBy";
import React, { useEffect } from "react";
import { inputFormat, inputParse, useMergeState } from "../../../utils";
const { OptGroup, Option } = Select;

const ThongTin = props => {
    const [state, setState] = useMergeState({
        taiKhoan: [],
        khachHang: []
    });
    const { taiKhoan, khachHang } = state;
    let isComponentMounted = false;
    let time = null;

    useEffect(() => {
        isComponentMounted = true;
        retrieveData();
        return () => {
            // When Unmount component
            isComponentMounted = false;
            if (time) clearTimeout(time);
        };
    }, []);

    /**
     * Retriving data from server
     * If has error, auto recall after 1 second
     */
    const retrieveData = () => {
        const promise1 = axios.get("/api/tai-khoan/all");
        const promise2 = axios.get("/api/khach-hang/all");
        console.log("Retrieving Danh Muc in ThongTin");
        Promise.all([promise1, promise2])
            .then(response => {
                if (isComponentMounted)
                    if (response[0].data.success && response[1].data.success) {
                        setState({
                            taiKhoan: response[0].data.data,
                            khachHang: response[1].data.data
                        });
                        console.log("Retrieved Danh Muc Succcessfully");
                    } else time = setTimeout(retrieveData, 2000);
            })
            .catch(error => {
                console.log(error);
                time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
            });
    };

    const getKhachHangDetail = () =>
        Object.entries(groupBy(khachHang, "phan_loai")).map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ma_khach_hang}
                    </Option>
                ))}
            </OptGroup>
        ));

    const getTaiKhoanDetail = () =>
        Object.entries(groupBy(taiKhoan, "phan_loai")).map(clist => (
            <OptGroup label={clist[0] || "Tài khoản ngân hàng"} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ky_hieu}
                    </Option>
                ))}
            </OptGroup>
        ));

    return (
        <>
            <Col span={24} md={12}>
                <Form.Item
                    name="id_tai_khoan_mua"
                    label="Nơi mua"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Chọn tài khoản / nhà cung cấp"
                        filterOption={(input, option) => {
                            if (!option.children) return false;
                            return (
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            );
                        }}
                    >
                        {getTaiKhoanDetail()}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={24} md={12}>
                <Form.Item
                    name="id_khach_hang"
                    label="Khách hàng"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Chọn khách hàng"
                        filterOption={(input, option) => {
                            if (!option.children) return false;
                            return (
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            );
                        }}
                    >
                        {getKhachHangDetail()}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item name="gia_net" label="Giá net">
                    <InputNumber
                        style={{ width: "100%" }}
                        min={0}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item name="tong_tien" label="Tổng tiền">
                    <InputNumber
                        style={{ width: "100%" }}
                        min={0}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item name="tong_tien_thu_khach" label="Thu khách">
                    <InputNumber
                        style={{ width: "100%" }}
                        min={0}
                        step={1000}
                        formatter={inputFormat}
                        parser={inputParse}
                    />
                </Form.Item>
            </Col>
            <Col span={12} md={6}>
                <Form.Item
                    wrapperCol={{ sm: { offset: 8, span: 16 } }}
                    name="chung_code"
                    valuePropName="checked"
                >
                    <Checkbox>Chung code?</Checkbox>
                </Form.Item>
            </Col>
        </>
    );
};

export default React.memo(ThongTin);

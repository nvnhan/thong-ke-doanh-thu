import AutoComplete from "antd/lib/auto-complete/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHangHoaList } from "../../../actions/actHangHoa";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import { getTaiKhoanDetail } from "../../../utils/formatFormData";

const form = React.memo(props => {
    const ncc = props.nhaCungCap;
    const dispatch = useDispatch();
    const phanLoai = props.phanLoai || [];
    const options = phanLoai.map(pl => ({ value: pl }));

    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);
    const hangHoaStatus = useSelector(state => state.hangHoa.status);

    const nhaCungCap =
        ncc !== undefined ? [...ncc] : taiKhoan.filter(i => i.loai === 1);

    useEffect(() => {
        if (ncc === undefined) {
            taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
            hangHoaStatus === "idle" && dispatch(fetchHangHoaList());
        }
    }, [ncc]);

    return (
        <React.Fragment>
            <Row gutter={[5, 5]}>
                <Col span={24} md={12}>
                    <Form.Item
                        name="ma_hang"
                        label="Mã hàng"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item
                        name="ten_hang"
                        label="Tên hàng"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item
                        name="id_tai_khoan"
                        label="Nhà CC"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <MySelect
                            placeholder="Chọn nhà cung cấp"
                            options={getTaiKhoanDetail(nhaCungCap)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item
                        name="phan_loai"
                        label="Phân loại"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <AutoComplete
                            options={options}
                            filterOption={(inputValue, option) =>
                                option.value
                                    .toUpperCase()
                                    .indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item name="don_vi" label="Đơn vị">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item
                        name="don_gia"
                        label="Đơn giá"
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        labelCol={{ md: 4, span: 8 }}
                        wrapperCol={{ md: 20, span: 16 }}
                        name="ghi_chu"
                        label="Ghi chú"
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </React.Fragment>
    );
});

export default form;

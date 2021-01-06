import Button from "antd/lib/button/index";
import Checkbox from "antd/lib/checkbox/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKhachHangList } from "../../../actions/actKhachHang";
import { fetchTaiKhoanList } from "../../../actions/actTaiKhoan";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getKhachHangDetail,
    getTaiKhoanDetail
} from "../../../utils/formatFormData";

const form = React.memo(props => {
    const dispatch = useDispatch();
    const khachHangStatus = useSelector(state => state.khachHang.status);
    const taiKhoanStatus = useSelector(state => state.taiKhoan.status);
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);

    useEffect(() => {
        khachHangStatus === "idle" && dispatch(fetchKhachHangList());
        taiKhoanStatus === "idle" && dispatch(fetchTaiKhoanList());
    }, []);

    return (
        <>
            <Row gutter={[5, 5]}>
                <Col span={24}>
                    <Form.Item
                        name="text"
                        wrapperCol={{ span: 24 }}
                        rules={[
                            {
                                required: true,
                                message: "Nhập đầy đủ thông tin!"
                            }
                        ]}
                    >
                        <Input.TextArea
                            rows={15}
                            placeholder="Kết quả đặt vé (thường bắt đầu bằng số vé/mã giữ chỗ)..."
                        />
                    </Form.Item>
                </Col>
                {/* <Col span={12}>
                <Form.Item
                    name="hang_bay"
                    label="Hãng bay"
                    rules={[
                        {
                            required: true,
                            message: "Nhập đầy đủ thông tin!"
                        }
                    ]}
                >
                    <AutoComplete
                        options={hbOptions}
                        filterOption={(inputValue, option) =>
                            option.value
                                .toUpperCase()
                                .indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Form.Item>
            </Col> */}
                <Col span={12}>
                    <Form.Item name="id_tai_khoan_mua" label="Nơi mua">
                        <MySelect
                            placeholder="Chọn nơi mua"
                            options={getTaiKhoanDetail(taiKhoan)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <MySelect
                            placeholder="Chọn khách hàng"
                            options={getKhachHangDetail(khachHang)}
                            onChange={null}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="gia_net" label="Giá net">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="tong_tien" label="Tổng tiền">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="tong_tien_thu_khach" label="Thu khách">
                        <InputNumber
                            style={{ width: "100%" }}
                            step={1000}
                            formatter={inputFormat}
                            parser={inputParse}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        wrapperCol={{ sm: { offset: 8, span: 16 } }}
                        name="chung_code"
                        valuePropName="checked"
                    >
                        <Checkbox>Chung code?</Checkbox>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[5, 5]}>
                <Col span={24} md={12}>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit" type="primary">
                            Xử lý
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
});

export default form;

import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select
} from "antd";
import React from "react";
import { inputFormat, inputParse } from "../../../utils";
const { Option, OptGroup } = Select;

const form = React.memo(props => {
    const { taiKhoan, khachHang, hangBay } = props.danhMuc;

    // const hbOptions = hangBay.map(pl => ({ value: pl }));

    const getKhachHangDetail = () =>
        Object.entries(_.groupBy(khachHang, "phan_loai")).map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(ncc => (
                    <Option value={ncc.id} key={ncc.id}>
                        {ncc.ma_khach_hang}
                    </Option>
                ))}
            </OptGroup>
        ));

    const getTaiKhoanDetail = () =>
        Object.entries(_.groupBy(taiKhoan, "phan_loai")).map(clist => (
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
                        <Select
                            allowClear
                            showSearch
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
                <Col span={12}>
                    <Form.Item name="id_khach_hang" label="Khách hàng">
                        <Select
                            allowClear
                            showSearch
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
                <Col span={12}>
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
                <Col span={12}>
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
                <Col span={12}>
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

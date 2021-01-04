import AutoComplete from "antd/lib/auto-complete/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Select from "antd/lib/select/index";
import React from "react";
import { useSelector } from "react-redux";
import MySelect from "../../../components/Controls/MySelect";
import { inputFormat, inputParse } from "../../../utils";
import {
    getKhachHangDetail,
    getTaiKhoanDetail,
    hbOptions
} from "../../../utils/formatFormData";
const { Option } = Select;

const form = React.memo(props => {
    const khachHang = useSelector(state => state.khachHang.list);
    const taiKhoan = useSelector(state => state.taiKhoan.list);
    const hangBay = useSelector(state => state.hangBay.list);

    return (
        <Row gutter={[5, 5]}>
            <Col span={12}>
                <Form.Item name="hang_bay" label="Hãng bay">
                    <AutoComplete
                        options={hbOptions(hangBay)}
                        filterOption={(inputValue, option) =>
                            option.value
                                .toUpperCase()
                                .indexOf(inputValue.toUpperCase()) !== -1
                        }
                        placeholder="(Không thay đổi)"
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="id_tai_khoan_mua" label="Nơi mua">
                    <MySelect
                        placeholder="(Không thay đổi)"
                        options={getTaiKhoanDetail(taiKhoan)}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="id_khach_hang" label="Khách hàng">
                    <MySelect
                        placeholder="(Không thay đổi)"
                        options={getKhachHangDetail(khachHang)}
                        onChange={null}
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="xuat_ve" label="Xuất vé">
                    <Select allowClear placeholder="(Không thay đổi)">
                        <Option value="1">Đã xuất vé</Option>
                        <Option value="-1">Chưa xuất</Option>
                    </Select>
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
        </Row>
    );
});

export default form;

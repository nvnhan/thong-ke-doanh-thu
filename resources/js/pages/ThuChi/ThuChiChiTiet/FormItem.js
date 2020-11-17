import { Form, InputNumber, Select } from "antd";
import React from "react";
import { inputFormat, inputParse } from "../../../utils";
const { Option, OptGroup } = Select;

const form = React.memo(props => {
    const doiTuong = props.doiTuong || [];
    const groupDoiTuong = Object.entries(_.groupBy(doiTuong, "phan_loai"));
    const getDoiTuongDetail = () =>
        groupDoiTuong.map(clist => (
            <OptGroup label={clist[0]} key={clist[0]}>
                {clist[1].map(hh => (
                    <Option value={hh.id} key={hh.id}>
                        {hh.noi_dung}
                    </Option>
                ))}
            </OptGroup>
        ));

    /**
     * When change select Hang Hoa => Call trigger change FormValue in TourChiTiet => ListForm => FormEdit
     */
    const onChange = idHH => {
        const hh = doiTuong.filter(item => item.id === idHH)[0];
        if (hh) props.onChangeValue(hh.so_tien);
    };

    return (
        <React.Fragment>
            <Form.Item
                name="doi_tuong"
                label="Đối tượng"
                rules={[
                    {
                        required: true,
                        message: "Nhập đầy đủ thông tin!"
                    }
                ]}
            >
                <Select
                    showSearch
                    placeholder="Chọn đối tượng thu chi"
                    filterOption={(input, option) => {
                        if (!option.children) return false;
                        return (
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        );
                    }}
                    onChange={onChange}
                >
                    {getDoiTuongDetail()}
                </Select>
            </Form.Item>
            <Form.Item
                name="so_tien"
                label="Số tiền"
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
                    max={props.toiDa}
                    step={1000}
                    formatter={inputFormat}
                    parser={inputParse}
                />
            </Form.Item>
        </React.Fragment>
    );
});

export default form;

import Button from "antd/lib/button/index";
import Form from "antd/lib/form/index";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import InputNumber from "antd/lib/input-number/index";
import Input from "antd/lib/input/index";
import Table from "antd/lib/table/index";
import React from "react";
import MyRangePicker from "../../../components/ListForm/MyRangePicker";
import ThongTin from "./ThongTin";

const form = React.memo(props => {
    const { mails, selectedRowKeys } = props.danhMuc;
    const { onChangeSelect } = props;

    const rowSelection = {
        selectedRowKeys,
        onChange: onChangeSelect,
        hideDefaultSelections: true,
        columnWidth: 43,
        selections: [
            {
                key: "invert_all",
                text: "Bỏ chọn tất cả",
                onSelect: () => onChangeSelect([])
            }
        ]
    };

    const columns = [
        {
            title: "Ngày tháng",
            dataIndex: "ngay_thang",
            width: 100,
            sorter: (a, b) =>
                moment(a.ngay_thang, "DD/MM/YYYY").unix() -
                moment(b.ngay_thang, "DD/MM/YYYY").unix()
        },
        {
            title: "Người gửi",
            dataIndex: "nguoi_gui",
            width: 150
        },
        {
            title: "Chủ đề",
            dataIndex: "email",
            width: 450,
            ellipsis: true
        }
    ];

    return (
        <>
            <Row
                gutter={[10, 10]}
                style={{
                    marginBottom: "25px"
                }}
            >
                <Col span={24} md={12}>
                    <Form.Item
                        name="thoiGian"
                        label="Thời gian"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                    >
                        <MyRangePicker
                            placeholder={["Email nhận từ ngày", "đến ngày"]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="tu_khoa" label="Từ khóa">
                        <Input placeholder="Từ khóa tìm kiếm..." />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item name="gioi_han" label="Giới hạn">
                        <InputNumber
                            min={10}
                            max={100}
                            step={1}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
                <Col span={12} md={6}>
                    <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
                        <Button
                            type="default"
                            onClick={() => props.onGetEmail()}
                        >
                            Đọc Email
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Table
                        dataSource={mails}
                        columns={columns}
                        rowKey={row => row["id"]}
                        rowSelection={rowSelection}
                        locale={{
                            filterConfirm: "Lọc",
                            filterReset: "Hủy",
                            emptyText: "Không có dữ liệu",
                            cancelSort: "CLick để Bỏ sắp xếp",
                            triggerAsc: "Click để Sắp xếp tăng dần",
                            triggerDesc: "Click để Sắp xếp giảm dần",
                            selectionAll: "Chọn tất cả dữ liệu",
                            selectInvert: "Đảo chọn trang hiện tại"
                        }}
                    />
                </Col>
            </Row>

            <Row gutter={[10, 10]}>
                <ThongTin />
            </Row>

            <Row gutter={[10, 10]}>
                <Col span={12} md={6}>
                    <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
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

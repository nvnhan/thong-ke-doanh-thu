import React, { PureComponent } from "react";
import ListForm from "../../../components/ListForm";
import FormItem from "./FormItem";

class List extends PureComponent {
    /**
     * Hàm render
     */
    render() {
        const columns = [
            {
                title: "Loại hành lý",
                dataIndex: "hanh_ly",
                optFind: true
            },
            {
                title: "Mức phí",
                dataIndex: "muc_phi",
                render: number =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND"
                    }).format(number)
            },
            {
                title: "Hãng bay",
                dataIndex: "hang_bay",
                optFind: true
            },
            {
                title: "Ghi chú",
                dataIndex: "ghi_chu",
                ellipsis: true
            }
        ];

        return (
            <ListForm
                url="phi-hanh-ly"
                columns={columns}
                selectable={true}
                insertable={true}
                editable={true}
                deleteable={true}
                primaryKey="id"
                tableSize={{ x: 600 }}
                formTemplate={<FormItem />}
                formInitialValues={{ phi : 100000 }}
            />
        );
    }
}

export default List;
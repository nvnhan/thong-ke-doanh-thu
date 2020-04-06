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
                title: "Loại phí",
                dataIndex: "loai_phi",
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
                title: "Ghi chú",
                dataIndex: "ghi_chu",
                ellipsis: true
            }
        ];

        return (
            <ListForm
                url="thue-phi"
                columns={columns}
                selectable={false}
                insertable={false}
                editable={true}
                deleteable={false}
                primaryKey="id"
                formTemplate={<FormItem />}
            />
        );
    }
}

export default List;
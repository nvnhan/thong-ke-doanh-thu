import React from "react";
import { Spin } from "antd";

export default function Loader(props) {
    let s = "Đang tải dữ liệu";
    if (props.tip) s = props.tip;
    return (
        <div className="loading-screen">
            <Spin tip={s} />
        </div>
    );
}

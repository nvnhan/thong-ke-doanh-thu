import React from "react";
import Spin from "antd/lib/spin/index";

export default function Loader(props) {
    let s = "Đang tải dữ liệu ứng dụng...";
    if (props.tip) s = props.tip;
    return (
        <div className="loading-wrapper">
            <Spin tip={s} />
        </div>
    );
}

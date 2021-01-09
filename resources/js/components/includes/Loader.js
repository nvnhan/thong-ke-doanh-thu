import React from "react";
import Spin from "antd/lib/spin/index";

const Loader = React.memo(props => {
    const s = props.tip || "Đang tải dữ liệu ứng dụng...";
    return (
        <div className="loading-wrapper">
            <Spin tip={s} />
        </div>
    );
});

export default Loader;

import { Modal, Progress } from "antd";
import React from 'react'

const showWaiting = (s = "Đang xử lý dữ liệu...") => {
    Modal.info({
        title: "Thông báo",
        centered: true,
        icon: null,
        okButtonProps: { hidden: true },
        content: (
            <div style={{ textAlign: "center" }}>
                <Progress
                    percent={100}
                    status="active"
                    showInfo={false}
                    strokeColor="#6dc3a6"
                />
                <span>{s}</span>
                <br />
                <small>
                    <i>(Vui lòng chờ đến khi tiến trình kết thúc!)</i>
                </small>
            </div>
        )
    });
};

export default showWaiting;
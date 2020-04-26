import { Modal, Progress } from "antd";
import React from "react";

/**
 * Download file từ url
 * const url = window.URL.createObjectURL(new Blob([response.data]));
 *
 * @param {*} url
 * @param {*} name
 */
const downloadFile = (url, name) => {
    let a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();

    window.URL.revokeObjectURL(url);
};

/**
 * Tạo và download file từ url
 */
export const downloadApi = (url, params, fileName) => {
    Modal.info({
        title: "Thông báo",
        centered: true,
        icon: null,
        content: (
            <div style={{ textAlign: "center" }}>
                <Progress
                    percent={100}
                    status="active"
                    showInfo={false}
                    strokeColor="#6dc3a6"
                />
                <span>Đang tạo báo cáo...</span>
            </div>
        )
    });
    axios
        .get(url, {
            params,
            responseType: "blob" // important
        })
        .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            downloadFile(url, fileName);
        })
        .catch(error => console.log(error))
        .then(() => Modal.destroyAll());
};

export default downloadFile;

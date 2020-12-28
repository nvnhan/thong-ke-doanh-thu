import Modal from "antd/lib/modal/index";
import showWaiting from "../components/Includes/ShowWaiting";

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
    showWaiting("Đang tạo báo cáo...");

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

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

export default downloadFile;

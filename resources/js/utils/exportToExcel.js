import XLSX from "xlsx";

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();

    this.SheetNames = [];

    this.Sheets = {};
}

const download = (url, name) => {
    let a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();

    window.URL.revokeObjectURL(url);
};

function s2ab(s) {
    const buf = new ArrayBuffer(s.length);

    const view = new Uint8Array(buf);

    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;

    return buf;
}

export default (data, filename, skipHeader = true) => {
    const wb = new Workbook();
    const ws = XLSX.utils.json_to_sheet(data, { skipHeader });

    wb.SheetNames.push("Export");
    wb.Sheets["Export"] = ws;

    const wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "binary",
        Props: {
            Author: "NVN",
            Company: "TKDT"
        }
    });

    let url = window.URL.createObjectURL(
        new Blob([s2ab(wbout)], { type: "application/octet-stream" })
    );

    download(url, filename || "report.xlsx");
};

export const ExportMultiSheet = (data, filename) => {
    const wb = new Workbook();
    for (const [key, value] of Object.entries(data)) {
        const ws = XLSX.utils.json_to_sheet(value, { skipHeader: true });

        wb.SheetNames.push(key);
        wb.Sheets[key] = ws;
    }

    const wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "binary",
        Props: {
            Author: "NVN",
            Company: "TKDT"
        }
    });

    let url = window.URL.createObjectURL(
        new Blob([s2ab(wbout)], { type: "application/octet-stream" })
    );

    download(url, filename || "report.xlsx");
};

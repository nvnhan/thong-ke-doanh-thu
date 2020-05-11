(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/pages/BaoCao/TongHopCongNo/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/BaoCao/TongHopCongNo/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _components_ListForm_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm/DataTable */ "./resources/js/components/ListForm/DataTable.js");
/* harmony import */ var _components_ListForm_FilterBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/FilterBox */ "./resources/js/components/ListForm/FilterBox.js");
/* harmony import */ var _components_ListForm_ToolsButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ListForm/ToolsButton */ "./resources/js/components/ListForm/ToolsButton.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_exportToExcel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/exportToExcel */ "./resources/js/utils/exportToExcel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var List = function List(props) {
  var _useMergeState = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["useMergeState"])({
    data: {
      muavao: [],
      banra: []
    },
    isLoading: true
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var data = state.data,
      isLoading = state.isLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      ownFilter = _useState2[0],
      setOwnFilter = _useState2[1];

  var isComponentMounted = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isComponentMounted = true; // Không Có filter hoặc có filter và đã load xong

    if (ownFilter === undefined || !_.isEmpty(ownFilter)) {
      // Set lại data và loading cho các Component con
      setState({
        data: [],
        isLoading: true
      });
      axios.get("/api/tong-hop-cong-no?" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["queryString"])(ownFilter)).then(function (response) {
        if (isComponentMounted && response.data.success) {
          setState({
            data: response.data.data,
            isLoading: false
          });
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    }

    return function () {
      // When Unmount component
      isComponentMounted = false;
    };
  }, [JSON.stringify(ownFilter)]); // Chỉ chạy 1 lần khi mount đến khi ownFilter thay đổi

  /**
   * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
   */

  var handleFilterBox = function handleFilterBox(newFilter) {
    // Thay đổi filter => Load lại dữ liệu
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isChangeData"])(ownFilter, newFilter)) setOwnFilter(newFilter);
  };

  var renderSummaryBanRa = function renderSummaryBanRa(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          dau_ky: previousValue.dau_ky + currentValue.dau_ky,
          cuoi_ky: previousValue.cuoi_ky + currentValue.cuoi_ky,
          giao_dich: previousValue.giao_dich + currentValue.giao_dich,
          thanh_toan: previousValue.thanh_toan + currentValue.thanh_toan
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: 2
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.dau_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.cuoi_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.thanh_toan)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.giao_dich))));
    }
  };

  var renderSummaryMuaVao = function renderSummaryMuaVao(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          dau_ky: previousValue.dau_ky + currentValue.dau_ky,
          cuoi_ky: previousValue.cuoi_ky + currentValue.cuoi_ky,
          giao_dich: previousValue.giao_dich + currentValue.giao_dich,
          thanh_toan: previousValue.thanh_toan + currentValue.thanh_toan
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.dau_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.cuoi_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.thanh_toan)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.giao_dich))));
    }
  };

  var exportDS = function exportDS() {
    var banra = data.banra.map(function (p, ind) {
      return {
        stt: ind + 1,
        phan_loai: p.phan_loai,
        khach_hang: p.khach_hang,
        dau_ky: p.dau_ky,
        cuoi_ky: p.cuoi_ky,
        thanh_toan: p.thanh_toan,
        giao_dich: p.giao_dich
      };
    });
    var dataExportBanRa = [{
      stt: "STT",
      phan_loai: "Phân loại",
      khach_hang: "Khách hàng",
      dau_ky: "Dư - Nợ đầu kỳ",
      cuoi_ky: "Dư - Nợ cuối kỳ",
      thanh_toan: "Số tiền thanh toán",
      giao_dich: "Số tiền giao dịch"
    }].concat(_toConsumableArray(banra));
    var muavao = data.muavao.map(function (p, ind) {
      return {
        stt: ind + 1,
        tai_khoan: p.tai_khoan,
        dau_ky: p.dau_ky,
        cuoi_ky: p.cuoi_ky,
        thanh_toan: p.thanh_toan,
        giao_dich: p.giao_dich
      };
    });
    var dataExportMuaVao = [{
      stt: "STT",
      tai_khoan: "Tài khoản",
      dau_ky: "Dư - Nợ đầu kỳ",
      cuoi_ky: "Dư - Nợ cuối kỳ",
      thanh_toan: "Số tiền thanh toán",
      giao_dich: "Số tiền giao dịch"
    }].concat(_toConsumableArray(muavao));
    var dataExport = {
      "Tổng hợp bán ra": dataExportBanRa,
      "Tổng hợp mua vào": dataExportMuaVao
    };
    Object(_utils_exportToExcel__WEBPACK_IMPORTED_MODULE_6__["ExportMultiSheet"])(dataExport, "tong-hop-cong-no.xlsx");
  };

  var otherButtons = [{
    key: "export",
    onClick: exportDS,
    title: "Xuất danh sách ra Excel",
    selectRequired: false
  }];
  var columnsBanRa = [{
    title: "Phân loại",
    dataIndex: "phan_loai",
    optFilter: true,
    width: 100
  }, {
    title: "Khách hàng",
    dataIndex: "khach_hang",
    optFind: true,
    width: 170
  }, {
    title: "Dư - Nợ đầu kỳ",
    dataIndex: "dau_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Dư - Nợ cuối kỳ",
    dataIndex: "cuoi_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Số tiền thanh toán",
    dataIndex: "thanh_toan",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Tổng tiền giao dịch",
    dataIndex: "giao_dich",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }];
  var columnsMuaVao = [{
    title: "Tài khoản",
    dataIndex: "tai_khoan",
    optFind: true,
    width: 180
  }, {
    title: "Dư - Nợ đầu kỳ",
    dataIndex: "dau_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Dư - Nợ cuối kỳ",
    dataIndex: "cuoi_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Số tiền thanh toán",
    dataIndex: "thanh_toan",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Tổng tiền giao dịch",
    dataIndex: "giao_dich",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_FilterBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filterBox: true,
    tuNgayDenNgay: true,
    onFilter: handleFilterBox
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_ToolsButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    insertable: false,
    deleteable: false,
    selectable: false,
    otherButtons: otherButtons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    defaultActiveKey: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"].TabPane, {
    tab: "T\u1ED5ng h\u1EE3p b\xE1n ra",
    key: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableSize: {
      x: 800
    },
    data: data.banra,
    columns: columnsBanRa,
    isLoading: isLoading,
    deleteable: false,
    selectable: false,
    editable: false,
    primaryKey: "id",
    renderSummary: renderSummaryBanRa
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"].TabPane, {
    tab: "T\u1ED5ng h\u1EE3p mua v\xE0o",
    key: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableSize: {
      x: 800
    },
    data: data.muavao,
    columns: columnsMuaVao,
    isLoading: isLoading,
    deleteable: false,
    selectable: false,
    editable: false,
    primaryKey: "id",
    renderSummary: renderSummaryMuaVao
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(List));

/***/ }),

/***/ "./resources/js/utils/downloadFile.js":
/*!********************************************!*\
  !*** ./resources/js/utils/downloadFile.js ***!
  \********************************************/
/*! exports provided: downloadApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadApi", function() { return downloadApi; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Download file từ url
 * const url = window.URL.createObjectURL(new Blob([response.data]));
 *
 * @param {*} url
 * @param {*} name
 */

var downloadFile = function downloadFile(url, name) {
  var a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  window.URL.revokeObjectURL(url);
};
/**
 * Tạo và download file từ url
 */


var downloadApi = function downloadApi(url, params, fileName) {
  antd__WEBPACK_IMPORTED_MODULE_0__["Modal"].info({
    title: "Thông báo",
    centered: true,
    icon: null,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Progress"], {
      percent: 100,
      status: "active",
      showInfo: false,
      strokeColor: "#6dc3a6"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u0110ang t\u1EA1o b\xE1o c\xE1o..."))
  });
  axios.get(url, {
    params: params,
    responseType: "blob" // important

  }).then(function (response) {
    var url = window.URL.createObjectURL(new Blob([response.data]));
    downloadFile(url, fileName);
  })["catch"](function (error) {
    return console.log(error);
  }).then(function () {
    return antd__WEBPACK_IMPORTED_MODULE_0__["Modal"].destroyAll();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (downloadFile);

/***/ }),

/***/ "./resources/js/utils/exportToExcel.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/exportToExcel.js ***!
  \*********************************************/
/*! exports provided: ExportMultiSheet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportMultiSheet", function() { return ExportMultiSheet; });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _downloadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloadFile */ "./resources/js/utils/downloadFile.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);

  for (var i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff;
  }

  return buf;
}
/**
 * Xuất dữ liệu ra Excel
 *
 * @param {*} data
 * @param {*} filename
 * @param {boolean} [skipHeader=true]
 */


var ExportData = function ExportData(data, filename) {
  var skipHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var wb = new Workbook();
  var ws = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.json_to_sheet(data, {
    skipHeader: skipHeader
  });
  wb.SheetNames.push("Export");
  wb.Sheets["Export"] = ws;
  var wbout = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.write(wb, {
    bookType: "xlsx",
    bookSST: true,
    type: "binary",
    Props: {
      Author: "NVN",
      Company: "tienve.net"
    }
  });
  var url = window.URL.createObjectURL(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }));
  Object(_downloadFile__WEBPACK_IMPORTED_MODULE_1__["default"])(url, filename || "report.xlsx");
};

var ExportMultiSheet = function ExportMultiSheet(data, filename) {
  var wb = new Workbook();

  for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var ws = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.json_to_sheet(value, {
      skipHeader: true
    });
    wb.SheetNames.push(key);
    wb.Sheets[key] = ws;
  }

  var wbout = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.write(wb, {
    bookType: "xlsx",
    bookSST: true,
    type: "binary",
    Props: {
      Author: "NVN",
      Company: "tienve.net"
    }
  });
  var url = window.URL.createObjectURL(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }));
  Object(_downloadFile__WEBPACK_IMPORTED_MODULE_1__["default"])(url, filename || "report.xlsx");
};
/* harmony default export */ __webpack_exports__["default"] = (ExportData);

/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
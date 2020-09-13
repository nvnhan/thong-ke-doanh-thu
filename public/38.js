(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./resources/js/components/ListForm/MyDatePicker.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/ListForm/MyDatePicker.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var MyDatePicker = function MyDatePicker(props) {
  if (props.value && typeof props.value == "string") {
    var objMoment = moment__WEBPACK_IMPORTED_MODULE_2___default()(props.value, props.format);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], _extends({}, props, {
      value: objMoment
    }));
  } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], props);
};

/* harmony default export */ __webpack_exports__["default"] = (MyDatePicker);

/***/ }),

/***/ "./resources/js/components/ListForm/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/ListForm/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\components\\ListForm\\index.js: Unexpected token, expected \",\" (216:32)\n\n\u001b[0m \u001b[90m 214 | \u001b[39m                            setState({\u001b[0m\n\u001b[0m \u001b[90m 215 | \u001b[39m                                data\u001b[33m:\u001b[39m newData\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 216 | \u001b[39m                                selectedRowKeys\u001b[33m:\u001b[39m []\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 217 | \u001b[39m                            })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 218 | \u001b[39m                            message\u001b[33m.\u001b[39minfo(response\u001b[33m.\u001b[39mdata\u001b[33m.\u001b[39mmessage)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 219 | \u001b[39m                            \u001b[36mif\u001b[39m (onChangeData) onChangeData(newData)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Object.unexpected (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8757:16)\n    at Object.expect (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8743:28)\n    at Object.parseObj (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10365:14)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9995:28)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4614:20)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9582:21)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9452:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9425:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9380:21)\n    at Object.parseExprListItem (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10718:18)\n    at Object.parseCallExpressionArguments (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9790:22)\n    at Object.parseSubscript (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9696:31)\n    at Object.parseSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9625:19)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9608:17)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9582:21)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9452:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9425:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9380:21)\n    at Object.parseExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9332:23)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11210:23)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseBlock (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11626:10)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11157:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseIfStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11433:28)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11126:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseBlock (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11626:10)");

/***/ }),

/***/ "./resources/js/pages/VeMayBay/DatVe/columns.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/VeMayBay/DatVe/columns.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");



var columns = [{
  title: "Ngày tháng",
  dataIndex: "ngay_thang",
  width: 90,
  sorter: function sorter(a, b) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(a.ngay_thang, "DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_0___default()(b.ngay_thang, "DD/MM/YYYY").unix();
  }
}, {
  title: "Mã giữ chỗ",
  dataIndex: "ma_giu_cho",
  optFind: true,
  width: 80
}, {
  title: "Số vé",
  dataIndex: "so_ve",
  width: 130,
  optFind: true
}, {
  title: "Hãng bay",
  dataIndex: "hang_bay",
  width: 65,
  optFilter: true
}, {
  title: "Tên khách",
  dataIndex: "ten_khach",
  width: 140,
  optFind: true
}, {
  title: "TG đi",
  dataIndex: "ngay_gio_di",
  width: 120,
  sorter: function sorter(a, b) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_0___default()(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix();
  }
}, {
  title: "Chặng đi",
  dataIndex: "chang_di",
  width: 85
}, {
  title: "TG về",
  dataIndex: "ngay_gio_ve",
  width: 120,
  sorter: function sorter(a, b) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_0___default()(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix();
  }
}, {
  title: "Chặng về",
  dataIndex: "chang_ve",
  width: 85
}, {
  title: "Tổng tiền",
  dataIndex: "tong_tien",
  render: function render(number) {
    return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
  },
  sorter: function sorter(a, b) {
    return a.tong_tien - b.tong_tien;
  },
  width: 110
}, {
  title: "Thu khách",
  dataIndex: "tong_tien_thu_khach",
  render: function render(number) {
    return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
  },
  sorter: function sorter(a, b) {
    return a.tong_tien_thu_khach - b.tong_tien_thu_khach;
  },
  width: 110
}, {
  title: "Lãi",
  dataIndex: "lai",
  render: function render(number) {
    return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
  },
  sorter: function sorter(a, b) {
    return a.lai - b.lai;
  },
  width: 110
}, {
  title: "Nơi mua",
  dataIndex: "noi_mua",
  width: 110,
  optFilter: true
}, {
  title: "Khách hàng",
  dataIndex: "ma_khach_hang",
  width: 110,
  optFilter: true
}, {
  title: "Thanh toán",
  dataIndex: "ngay_thanh_toan",
  width: 90
}];
/* harmony default export */ __webpack_exports__["default"] = (columns);

/***/ }),

/***/ "./resources/js/pages/VeMayBay/DatVe/expandedRow.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/VeMayBay/DatVe/expandedRow.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var expandedRow = function expandedRow(record) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Chuy\u1EBFn bay \u0111i: ", record.cb_di, ". Chuy\u1EBFn bay v\u1EC1: ", record.cb_ve), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Lo\u1EA1i tu\u1ED5i: ", record.ten_loai_tuoi), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Gi\xE1 net: ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.gia_net), ". Ph\xED soi chi\u1EBFu, an ninh: ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.phi_san_bay), ". Ph\xED qu\u1EA3n tr\u1ECB:", " ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.phu_phi_san_bay)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "VAT: ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.vat), ". Ph\u1EE5 ph\xED:", " ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.phu_phi)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ph\xED h\xE0nh l\xFD: ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.hanh_ly), ". Lo\u1EA1i h\xE0nh l\xFD:", " ", record.loai_hanh_ly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\xE3 thanh to\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_0__["vndFormater"].format(record.da_thanh_toan), ". Ng\xE0y thanh to\xE1n xong: ", record.ngay_thanh_toan), record.chua_xuat_ve ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "C\u1EA3nh b\xE1o xu\u1EA5t v\xE9: ", record.canh_bao_xuat_ve) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u2714 \u0110\xE3 xu\u1EA5t v\xE9"), !_.isEmpty(record.ngay_nhac_lich) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Nh\u1EAFc l\u1ECBch bay: ", record.ngay_nhac_lich), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
};

/* harmony default export */ __webpack_exports__["default"] = (expandedRow);

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

/***/ "./resources/js/utils/exportDatVe.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/exportDatVe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exportToExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exportToExcel */ "./resources/js/utils/exportToExcel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Xuất ra Excel
 */

var exportDS = function exportDS(data, selectedRowKeys, name) {
  var filtered = data;
  if (selectedRowKeys.length > 0) filtered = data.filter(function (p) {
    return selectedRowKeys.indexOf(p.id) !== -1;
  });
  var newData = filtered.map(function (p, index) {
    var t = _objectSpread({
      stt: index + 1
    }, p);

    delete t["id"];
    delete t["loai_tuoi"];
    delete t["id_phi_hanh_ly"];
    delete t["id_tai_khoan_mua"];
    delete t["id_khach_hang"];
    delete t["chang_di"];
    delete t["chang_ve"];
    return t;
  });
  var dataExport = [{
    stt: "STT",
    ngay_thang: "Ngày tháng",
    ma_giu_cho: "Mã giữ chỗ",
    so_ve: "Số vé",
    hang_bay: "Hãng bay",
    ten_khach: "Tên khách",
    ten_loai_tuoi: "Loại tuổi",
    ngay_gio_di: "Thời gian đi",
    cb_di: "Chuyến bay đi",
    sb_di: "Sân bay đi",
    sb_di1: "Sân bay đi 1",
    ngay_gio_ve: "Thời gian về",
    cb_ve: "Chuyến bay về",
    sb_ve: "Sân bay về",
    sb_ve1: "Sân bay về 1",
    gia_net: "Giá net",
    vat: "VAT",
    phi_san_bay: "Phí soi chiếu, an ninh",
    phu_phi_san_bay: "Phí quản trị hệ thống",
    phu_phi: "Phí nơi mua thu",
    loai_hanh_ly: "Hành lý",
    hanh_ly: "Phí hành lý",
    hoa_hong: "Hoa hồng",
    tong_tien: "Tổng tiền",
    tong_tien_thu_khach: "Thu khách",
    lai: "Lãi",
    noi_mua: "Nơi mua",
    ma_khach_hang: "Khách hàng",
    da_thanh_toan: "Đã thanh toán",
    ngay_thanh_toan: "Ngày thanh toán",
    chua_thanh_toan: "Còn lại",
    chua_xuat_ve: "Chưa xuất vé",
    canh_bao_xuat_ve: "Cảnh báo xuất vé",
    ngay_nhac_lich: "Ngày nhắc lịch bay",
    username: "Người nhập",
    ghi_chu: "Ghi chú"
  }].concat(_toConsumableArray(newData));
  Object(_exportToExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(dataExport, name);
};

/* harmony default export */ __webpack_exports__["default"] = (exportDS);

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
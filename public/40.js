(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./resources/js/pages/BanHang/TongHop/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/BanHang/TongHop/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _utils_exportToExcel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/exportToExcel */ "./resources/js/utils/exportToExcel.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var List = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var columns = [{
    title: "Mã hàng",
    dataIndex: "ma_hang",
    optFind: true,
    width: 120
  }, {
    title: "Tên hàng",
    dataIndex: "ten_hang",
    optFind: true,
    width: 150
  }, {
    title: "Phân loại",
    dataIndex: "phan_loai",
    optFilter: true,
    width: 140
  }, {
    title: "Nhà cung cấp",
    dataIndex: "nha_cung_cap",
    width: 140,
    optFilter: true
  }, // {
  //     title: "Đơn giá hiện tại",
  //     dataIndex: "don_gia",
  //     render: number => vndFormater.format(number),
  //     // sorter: (a, b) => a.don_gia - b.don_gia,
  //     width: 110
  // },
  {
    title: "SL mua vào",
    dataIndex: "so_luong_mua_vao",
    width: 110
  }, {
    title: "TT mua vào",
    dataIndex: "thanh_tien_mua_vao",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_mua_vao - b.thanh_tien_mua_vao;
    },
    width: 120
  }, {
    title: "SL bán ra",
    dataIndex: "so_luong_ban_ra",
    width: 110
  }, {
    title: "TT bán ra",
    dataIndex: "thanh_tien_ban_ra",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ban_ra - b.thanh_tien_ban_ra;
    },
    width: 120
  }, {
    title: "SL hoàn đổi",
    dataIndex: "so_luong_hoan_doi",
    width: 110
  }, {
    title: "TT hoàn đổi",
    dataIndex: "thanh_tien_hoan_doi",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_hoan_doi - b.thanh_tien_hoan_doi;
    },
    width: 120
  }, {
    title: "SL tồn kho",
    dataIndex: "so_luong_ton_kho",
    width: 110
  }, {
    title: "TT tồn kho",
    dataIndex: "thanh_tien_ton_kho",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ton_kho - b.thanh_tien_ton_kho;
    },
    width: 120
  }];

  var renderSummary = function renderSummary(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          thanh_tien_mua_vao: previousValue.thanh_tien_mua_vao + currentValue.thanh_tien_mua_vao,
          thanh_tien_ban_ra: previousValue.thanh_tien_ban_ra + currentValue.thanh_tien_ban_ra,
          thanh_tien_hoan_doi: previousValue.thanh_tien_hoan_doi + currentValue.thanh_tien_hoan_doi,
          thanh_tien_ton_kho: previousValue.thanh_tien_ton_kho + currentValue.thanh_tien_ton_kho
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: 5
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: 2
      }, _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_mua_vao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: 2
      }, _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_ban_ra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: 2
      }, _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_hoan_doi)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: 2
      }, _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_ton_kho))));
    }
  };

  var exportDS = function exportDS(data, selectedKeys) {
    var newData = data.map(function (p, index) {
      var t = _objectSpread({
        stt: index + 1
      }, p);

      delete t["id"];
      delete t["id_tai_khoan"];
      delete t["created_at"];
      delete t["updated_at"];
      delete t["updated_at"];
      delete t["ghi_chu"];
      delete t["username"];
      return t;
    });
    var dataExport = [{
      stt: "STT",
      ma_hang: "Mã hàng",
      ten_hang: "Tên hàng",
      phan_loai: "Phân loại",
      don_vi: "Đơn vị tính",
      don_gia: "Đơn giá",
      nha_cung_cap: "Nhà cung cấp",
      so_luong_mua_vao: "Số lượng mua vào",
      thanh_tien_mua_vao: "Thành tiền mua vào",
      so_luong_ban_ra: "Số lượng bán ra",
      thanh_tien_ban_ra: "Thành tiền bán ra",
      so_luong_hoan_doi: "Số lượng hoàn đổi",
      thanh_tien_hoan_doi: "Thành tiền hoàn đổi",
      so_luong_ton_kho: "Số lượng tồn kho",
      thanh_tien_ton_kho: "Thành tiền tồn kho"
    }].concat(_toConsumableArray(newData));
    Object(_utils_exportToExcel__WEBPACK_IMPORTED_MODULE_3__["default"])(dataExport, "tong-hop-ban-hang.xlsx");
  };

  var otherButtons = [{
    key: "export",
    onClick: exportDS,
    title: "Xuất danh sách ra Excel",
    selectRequired: false
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "tong-hop-hang",
    filterBox: true,
    columns: columns,
    insertable: false,
    selectable: false,
    editable: false,
    deleteable: false,
    tableSize: {
      x: 1300
    },
    renderSummary: renderSummary,
    otherButtons: otherButtons
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./resources/js/utils/exportToExcel.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/exportToExcel.js ***!
  \*********************************************/
/*! exports provided: ExportMultiSheet, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\utils\\exportToExcel.js: Only one default export allowed per module. (80:0)\n\n\u001b[0m \u001b[90m 78 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 79 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mExportMultiSheet\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 80 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mExportData\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Object.checkDuplicateExports (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12405:12)\n    at Object.checkExport (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12340:14)\n    at Object.parseExport (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12186:12)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11185:27)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseTopLevel (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11012:10)\n    at Object.parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12637:10)\n    at parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12688:38)\n    at parser (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:254:32)\n    at D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:216:11)");

/***/ })

}]);
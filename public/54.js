(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./resources/js/pages/BanHang/HoanDoi/FormItem.js":
/*!********************************************************!*\
  !*** ./resources/js/pages/BanHang/HoanDoi/FormItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/MyDatePicker */ "./resources/js/components/ListForm/MyDatePicker.js");




var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option;
var form = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var taiKhoan = props.taiKhoan || [];

  var getTaiKhoanDetail = function getTaiKhoanDetail() {
    return taiKhoan.map(function (tk) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
        value: tk.id,
        key: tk.id
      }, tk.ky_hieu);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_hoan_doi",
    label: "Ng\xE0y th\xE1ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_thanh_toan_hoan_doi",
    label: "Thanh to\xE1n"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_tai_khoan_tra_hoan_doi",
    label: "TK tr\u1EA3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    placeholder: "Ch\u1ECDn t\xE0i kho\u1EA3n"
  }, getTaiKhoanDetail())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_hoan_doi_xong",
    label: "Ho\xE0n \u0111\u1ED5i xong"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/BanHang/HoanDoi/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/BanHang/HoanDoi/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/BanHang/HoanDoi/FormItem.js");
/* harmony import */ var _utils_exportBanRa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/exportBanRa */ "./resources/js/utils/exportBanRa.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var List = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      taiKhoan = _useState2[0],
      setTaiKhoan = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios.get("/api/tai-khoan").then(function (response) {
      if (response.data.success) setTaiKhoan(response.data.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "M\xE3 h\xE0ng: ", record.ma_hang, ". T\xEAn h\xE0ng: ", record.ten_hang, ". Ph\xE2n lo\u1EA1i: ", record.phan_loai, ". Nh\xE0 cung c\u1EA5p: ", record.nha_cung_cap), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\u01A1n gi\xE1 mua: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.don_gia_mua), ". Th\xE0nh ti\u1EC1n mua: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.thanh_tien_mua), ". S\u1ED1 l\u01B0\u1EE3ng:", " ", record.so_luong), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\u01A1n gi\xE1 b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.don_gia_ban), ". Th\xE0nh ti\u1EC1n b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.thanh_tien_ban), ". L\xE3i:", " ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.lai)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
  };

  var columns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_hoan_doi",
    width: 120,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(a.ngay_hoan_doi, "DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_0___default()(b.ngay_hoan_doi, "DD/MM/YYYY").unix();
    }
  }, {
    title: "Mã hàng",
    dataIndex: "ma_hang",
    optFind: true,
    width: 130
  }, {
    title: "Tên hàng",
    dataIndex: "ten_hang",
    optFind: true,
    width: 160
  }, {
    title: "Số lượng",
    dataIndex: "so_luong",
    width: 90
  }, {
    title: "Tổng tiền bán",
    dataIndex: "thanh_tien_ban",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ban - b.thanh_tien_ban;
    },
    width: 120
  }, {
    title: "Khách hàng",
    dataIndex: "ma_khach_hang",
    optFilter: true,
    width: 120
  }, {
    title: "TT hoàn đổi",
    dataIndex: "ngay_thanh_toan_hoan_doi",
    width: 120
  }, {
    title: "TK trả hoàn đổi",
    dataIndex: "tai_khoan_tra_hoan_doi",
    width: 120,
    optFilter: true
  }, {
    title: "Hoàn đổi xong",
    dataIndex: "ngay_hoan_doi xong",
    width: 120
  }, {
    title: "Ghi chú",
    dataIndex: "ghi_chu",
    ellipsis: true,
    width: 150
  }];
  var otherButtons = [{
    key: "export",
    onClick: function onClick(data, selectedRowKeys) {
      return Object(_utils_exportBanRa__WEBPACK_IMPORTED_MODULE_5__["default"])(data, selectedRowKeys, "hoan-doi.xlsx");
    },
    title: "Xuất danh sách ra Excel"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "hoan-doi",
    filterBox: true,
    insertable: false,
    deleteable: false,
    columns: columns,
    tableSize: {
      x: 1200
    },
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      taiKhoan: taiKhoan
    }),
    expandedRowRender: expandedRowRender,
    otherButtons: otherButtons
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
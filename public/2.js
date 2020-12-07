(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/components/Includes/ShowWaiting.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Includes/ShowWaiting.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var showWaiting = function showWaiting() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Đang xử lý dữ liệu...";
  antd__WEBPACK_IMPORTED_MODULE_0__["Modal"].info({
    title: "Thông báo",
    centered: true,
    icon: null,
    okButtonProps: {
      hidden: true
    },
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Progress"], {
      percent: 100,
      status: "active",
      showInfo: false,
      strokeColor: "#6dc3a6"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, s), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "(Vui l\xF2ng ch\u1EDD \u0111\u1EBFn khi ti\u1EBFn tr\xECnh k\u1EBFt th\xFAc!)")))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showWaiting);

/***/ }),

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

/***/ "./resources/js/pages/BanHang/BanRa/FormItem.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/BanHang/BanRa/FormItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/MyDatePicker */ "./resources/js/components/ListForm/MyDatePicker.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");





var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var form = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var khachHang = props.khachHang || [];
  /**
   * [
   *      ['xxx', [{}, {}, {}],
   *      ['yyyyy', [{}, {}, {}, {}, {}]]
   * ]
   */

  var groupKhachHang = Object.entries(_.groupBy(khachHang, "phan_loai"));

  var getKhachHangDetail = function getKhachHangDetail() {
    return groupKhachHang.map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ma_khach_hang);
      }));
    });
  };

  var hangHoa = props.hangHoa || [];
  var groupHangHoa = Object.entries(_.groupBy(hangHoa, "nha_cung_cap"));

  var getHangHoaDetail = function getHangHoaDetail() {
    return groupHangHoa.map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (hh) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          value: hh.id,
          key: hh.id
        }, hh.phan_loai + " - " + hh.ma_hang + " (" + _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(hh.don_gia) + ")");
      }));
    });
  };
  /**
   * When change select Hang Hoa => Call trigger change FormValue in TourChiTiet => ListForm => FormEdit
   */


  var onChange = function onChange(idHH) {
    var hh = hangHoa.filter(function (item) {
      return item.id === idHH;
    })[0];
    if (hh) props.onChangeValue(hh.don_gia);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_thang",
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_hang_hoa",
    label: "H\xE0ng h\xF3a",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    placeholder: "Ch\u1ECDn h\xE0ng h\xF3a",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: onChange
  }, getHangHoaDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "don_gia_mua",
    label: "Gi\xE1 mua",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 0,
    step: 1000,
    formatter: _utils__WEBPACK_IMPORTED_MODULE_4__["inputFormat"],
    parser: _utils__WEBPACK_IMPORTED_MODULE_4__["inputParse"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "so_luong",
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 1,
    step: 1
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "don_gia_ban",
    label: "Gi\xE1 b\xE1n",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 0,
    step: 1000,
    formatter: _utils__WEBPACK_IMPORTED_MODULE_4__["inputFormat"],
    parser: _utils__WEBPACK_IMPORTED_MODULE_4__["inputParse"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_khach_hang",
    label: "Kh\xE1ch h\xE0ng"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    placeholder: "Ch\u1ECDn kh\xE1ch h\xE0ng",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getKhachHangDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_hoan_doi",
    label: "Ho\xE0n \u0111\u1ED5i"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY",
    placeholder: "(kh\xF4ng ho\xE0n \u0111\u1ED5i)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/BanHang/BanRa/index.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/BanHang/BanRa/index.js ***!
  \***************************************************/
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
/* harmony import */ var _utils_exportBanRa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/exportBanRa */ "./resources/js/utils/exportBanRa.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/BanHang/BanRa/FormItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var List = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    hangHoa: [],
    khachHang: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var hangHoa = state.hangHoa,
      khachHang = state.khachHang;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      formValue = _useState4[0],
      setFormValue = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var promise1 = axios.get("/api/hang-hoa/all");
    var promise2 = axios.get("/api/khach-hang/all");
    Promise.all([promise1, promise2]).then(function (response) {
      if (response[0].data.success && response[1].data.success) setState({
        hangHoa: response[0].data.data,
        khachHang: response[1].data.data
      });
    });
  }, []);

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "M\xE3 h\xE0ng: ", record.ma_hang, ". T\xEAn h\xE0ng: ", record.ten_hang, ". Ph\xE2n lo\u1EA1i: ", record.phan_loai, ". Nh\xE0 cung c\u1EA5p: ", record.nha_cung_cap), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\u01A1n gi\xE1 mua: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.don_gia_mua), ". Th\xE0nh ti\u1EC1n mua: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.thanh_tien_mua)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\u01A1n gi\xE1 b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.don_gia_ban), ". Th\xE0nh ti\u1EC1n b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.thanh_tien_ban)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\xE3 thanh to\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(record.da_thanh_toan), ". Ng\xE0y thanh to\xE1n: ", record.ngay_thanh_toan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
  };

  var columns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_thang",
    width: 120,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(a.ngay_thang, "DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_0___default()(b.ngay_thang, "DD/MM/YYYY").unix();
    }
  }, {
    title: "Mã hàng",
    dataIndex: "ma_hang",
    optFind: true,
    width: 140
  }, {
    title: "Tên hàng",
    dataIndex: "ten_hang",
    optFind: true,
    width: 170
  }, {
    title: "Số lượng",
    dataIndex: "so_luong",
    width: 120
  }, {
    title: "TT bán",
    dataIndex: "thanh_tien_ban",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ban - b.thanh_tien_ban;
    },
    width: 120
  }, {
    title: "Lãi",
    dataIndex: "lai",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.lai - b.lai;
    },
    width: 120
  }, {
    title: "Khách hàng",
    dataIndex: "ma_khach_hang",
    optFilter: true,
    width: 120
  }, {
    title: "Thanh toán",
    dataIndex: "ngay_thanh_toan",
    width: 120
  }, {
    title: "Hoàn đổi",
    dataIndex: "ngay_hoan_doi",
    width: 120
  }, {
    title: "Ghi chú",
    dataIndex: "ghi_chu",
    ellipsis: true,
    width: 170
  }];

  var renderSummary = function renderSummary(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          lai: previousValue.lai + currentValue.lai,
          thanh_tien_ban: previousValue.thanh_tien_ban + currentValue.thanh_tien_ban
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        colSpan: 6
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(sumObj.thanh_tien_ban)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(sumObj.lai)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null)));
    }
  };
  /**
   * Callback from FOrmItem, trigger when select Hang Hoa
   * => Change setFormValues to ListForm => FormEdit
   */


  var handleFormValue = function handleFormValue(don_gia) {
    setFormValue({
      don_gia_mua: don_gia,
      don_gia_ban: don_gia,
      resetFields: function resetFields() {
        return setFormValue(undefined);
      }
    });
  };

  var otherButtons = [{
    key: "export",
    onClick: function onClick(data, selectedRowKeys) {
      return Object(_utils_exportBanRa__WEBPACK_IMPORTED_MODULE_4__["default"])(data, selectedRowKeys, "ban-ra.xlsx");
    },
    title: "Xuất danh sách ra Excel"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "ban-ra",
    filterBox: true,
    columns: columns,
    tableSize: {
      x: 1000
    },
    modalWidth: "800px",
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      hangHoa: hangHoa,
      khachHang: khachHang,
      onChangeValue: handleFormValue
    }),
    formInitialValues: {
      so_luong: 1,
      don_gia_mua: 0,
      don_gia_ban: 0,
      ngay_thang: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY")
    },
    expandedRowRender: expandedRowRender,
    setFormValues: formValue,
    renderSummary: renderSummary,
    otherButtons: otherButtons
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

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
/* harmony import */ var _components_Includes_ShowWaiting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Includes/ShowWaiting */ "./resources/js/components/Includes/ShowWaiting.js");


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
  Object(_components_Includes_ShowWaiting__WEBPACK_IMPORTED_MODULE_1__["default"])("Đang tạo báo cáo...");
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

/***/ "./resources/js/utils/exportBanRa.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/exportBanRa.js ***!
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



var exportDS = function exportDS(data, selectedRowKeys, name) {
  var filtered = data.filter(function (p) {
    return selectedRowKeys.indexOf(p.id) !== -1;
  });
  var newData = filtered.map(function (p, index) {
    var t = _objectSpread({
      stt: index + 1
    }, p);

    delete t["id"];
    delete t["id_hang_hoa"];
    delete t["id_khach_hang"];
    delete t["id_tai_khoan_tra_hoan_doi"];
    return t;
  });
  var dataExport = [{
    stt: "STT",
    ngay_thang: "Ngày tháng",
    ma_hang: "Mã hàng",
    ten_hang: "Tên hàng",
    phan_loai: "Phân loại",
    nha_cung_cap: "Nhà cung cấp",
    so_luong: "Số lượng",
    don_gia_mua: "Đơn giá mua",
    don_gia_ban: "Đơn giá bán",
    thanh_tien_mua: "Thành tiền mua",
    thanh_tien_ban: "Thành tiền bán",
    lai: "Lãi",
    ma_khach_hang: "Khách hàng",
    da_thanh_toan: "Đã thanh toán",
    ngay_thanh_toan: "Ngày thanh toán",
    chua_thanh_toan: "Còn lại",
    ngay_hoan_doi: "Ngày hoàn đổi",
    ngay_thanh_toan_hoan_doi: "Ngày thanh toán hoàn đổi",
    ngay_hoan_doi_xong: "Ngày hoàn đổi xong",
    tai_khoan_tra_hoan_doi: "Tài khoản trả hoàn đổi",
    ghi_chu: "Ghi chú",
    username: "Người nhập"
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
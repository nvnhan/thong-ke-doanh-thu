(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/antd/es/date-picker/locale/vi_VN.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/vi_VN.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_picker_es_locale_vi_VN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-picker/es/locale/vi_VN */ "./node_modules/rc-picker/es/locale/vi_VN.js");
/* harmony import */ var _time_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../time-picker/locale/vi_VN */ "./node_modules/antd/es/time-picker/locale/vi_VN.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Chọn thời điểm',
    rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc']
  }, rc_picker_es_locale_vi_VN__WEBPACK_IMPORTED_MODULE_0__["default"]),
  timePickerLocale: _extends({}, _time_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/vi_VN.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/vi_VN.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: 'Chọn thời gian'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/vi_VN.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/vi_VN.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'vi_VN',
  today: 'Hôm nay',
  now: 'Bây giờ',
  backToToday: 'Trở về hôm nay',
  ok: 'Ok',
  clear: 'Xóa',
  month: 'Tháng',
  year: 'Năm',
  timeSelect: 'Chọn thời gian',
  dateSelect: 'Chọn ngày',
  weekSelect: 'Chọn tuần',
  monthSelect: 'Chọn tháng',
  yearSelect: 'Chọn năm',
  decadeSelect: 'Chọn thập kỷ',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Tháng trước (PageUp)',
  nextMonth: 'Tháng sau (PageDown)',
  previousYear: 'Năm trước (Control + left)',
  nextYear: 'Năm sau (Control + right)',
  previousDecade: 'Thập kỷ trước',
  nextDecade: 'Thập kỷ sau',
  previousCentury: 'Thế kỷ trước',
  nextCentury: 'Thế kỷ sau'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

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
        }, hh.phan_loai, " - ", hh.ma_hang, " (", _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(hh.don_gia), ")");
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
    span: 24,
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
    span: 24,
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
    formatter: function formatter(value) {
      return "".concat(value, "\u20AB").replace(/(?=(\d{3})+(?!\d))\B/g, ",");
    },
    parser: function parser(value) {
      return value.replace(/\₫\s?|(,*)/g, "");
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
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
    step: 1,
    parser: function parser(value) {
      return value.replace(/\₫\s?|\.(,*)/g, "");
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
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
    formatter: function formatter(value) {
      return "".concat(value, "\u20AB").replace(/(?=(\d{3})+(?!\d))\B/g, ",");
    },
    parser: function parser(value) {
      return value.replace(/\₫\s?|(,*)/g, "");
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
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
    span: 24,
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
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
    var promise1 = axios.get("/api/hang-hoa");
    var promise2 = axios.get("/api/khach-hang");
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "M\xE3 h\xE0ng: ", record.ma_hang, ". T\xEAn h\xE0ng: ", record.ten_hang, ". Ph\xE2n lo\u1EA1i: ", record.phan_loai, ". Nh\xE0 cung c\u1EA5p: ", record.nha_cung_cap), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\u01A1n gi\xE1 mua: ", _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(record.don_gia_mua), ". Th\xE0nh ti\u1EC1n mua: ", _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(record.thanh_tien_mua)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\u01A1n gi\xE1 b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(record.don_gia_ban), ". Th\xE0nh ti\u1EC1n b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(record.thanh_tien_ban)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "\u0110\xE3 thanh to\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(record.da_thanh_toan), ". Ng\xE0y thanh to\xE1n: ", record.ngay_thanh_toan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
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
      return _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ban - b.thanh_tien_ban;
    },
    width: 120
  }, {
    title: "Lãi",
    dataIndex: "lai",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(number);
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

  var renderFooter = function renderFooter(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          thanh_tien_mua: previousValue.thanh_tien_mua + currentValue.thanh_tien_mua,
          thanh_tien_ban: previousValue.thanh_tien_ban + currentValue.thanh_tien_ban
        };
      });
      return "Tổng tiền mua: " + _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(sumObj.thanh_tien_mua) + ". Tổng tiền bán: " + _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(sumObj.thanh_tien_ban) + ". Tổng lãi: " + _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(sumObj.thanh_tien_ban - sumObj.thanh_tien_mua);
    }
  };
  /**
   * Callback from FOrmItem, trigger when select Hang Hoa
   * => Change setFormValues to ListForm => FormEdit
   */


  var handleFormValue = function handleFormValue(don_gia) {
    setFormValue({
      don_gia_mua: don_gia,
      don_gia_ban: don_gia
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "ban-ra",
    filterBox: true,
    columns: columns,
    tableSize: {
      x: 1200
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
    renderFooter: renderFooter
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(List));

/***/ })

}]);
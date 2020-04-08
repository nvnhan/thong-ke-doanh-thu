(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./resources/js/components/ListForm/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/ListForm/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\components\\ListForm\\index.js: Unexpected token (317:4)\n\n\u001b[0m \u001b[90m 315 | \u001b[39m    filterBox\u001b[33m:\u001b[39m \u001b[33mPropTypes\u001b[39m\u001b[33m.\u001b[39mbool\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 316 | \u001b[39m    tuNgayDenNgay\u001b[33m:\u001b[39m \u001b[33mPropTypes\u001b[39m\u001b[33m.\u001b[39mbool\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 317 | \u001b[39m    \u001b[33m:\u001b[39m \u001b[33mPropTypes\u001b[39m\u001b[33m.\u001b[39mbool\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 318 | \u001b[39m    otherFilter\u001b[33m:\u001b[39m \u001b[33mPropTypes\u001b[39m\u001b[33m.\u001b[39marrayOf(\u001b[0m\n\u001b[0m \u001b[90m 319 | \u001b[39m        \u001b[33mPropTypes\u001b[39m\u001b[33m.\u001b[39mshape({\u001b[0m\n\u001b[0m \u001b[90m 320 | \u001b[39m            name\u001b[33m:\u001b[39m \u001b[33mPropTypes\u001b[39m\u001b[33m.\u001b[39mstring\u001b[33m.\u001b[39misRequired\u001b[33m,\u001b[39m\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Object.unexpected (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8757:16)\n    at Object.parseIdentifierName (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10748:18)\n    at Object.parseIdentifier (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10726:23)\n    at Object.parseMaybePrivateName (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10079:19)\n    at Object.parsePropertyName (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10550:126)\n    at Object.parseObjectMember (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10451:10)\n    at Object.parseObj (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10374:25)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9995:28)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4614:20)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9582:21)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9452:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9425:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9380:21)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9412:25)\n    at Object.parseExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9332:23)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11210:23)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseTopLevel (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11012:10)\n    at Object.parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12637:10)\n    at parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12688:38)\n    at parser (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:254:32)\n    at D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:266:13");

/***/ }),

/***/ "./resources/js/pages/ThongTin/KhachHang/FormItem.js":
/*!***********************************************************!*\
  !*** ./resources/js/pages/ThongTin/KhachHang/FormItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/MyDatePicker */ "./resources/js/components/ListForm/MyDatePicker.js");




var form = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var phanLoai = props.phanLoai || [];
  var options = phanLoai.map(function (pl) {
    return {
      value: pl
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ma_khach_hang",
    label: "M\xE3 KH",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ho_ten",
    label: "H\u1ECD t\xEAn",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phan_loai",
    label: "Ph\xE2n lo\u1EA1i",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    options: options,
    filterOption: function filterOption(inputValue, option) {
      return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "mst",
    label: "M\xE3 s\u1ED1 thu\u1EBF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "sdt",
    label: "S\u0110T"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "email",
    label: "Email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    type: "email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "dia_chi",
    label: "\u0110\u1ECBa ch\u1EC9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ma_dai_ly",
    label: "M\xE3 \u0111\u1EA1i l\xFD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "C\xE1c m\xE3 c\xE1ch nhau b\u1EB1ng d\u1EA5u ,"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "so_du_ky_truoc",
    label: "S\u1ED1 d\u01B0 \u0111\u1EA7u"
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phi_vn",
    label: "Ph\xED VN"
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phi_vj",
    label: "Ph\xED VJ"
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phi_jets",
    label: "Ph\xED Jets"
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phi_bb",
    label: "Ph\xED BB"
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_nhac",
    label: "Ng\xE0y nh\u1EAFc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "HH:mm DD/MM/YYYY",
    showTime: true,
    showSecond: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/ThongTin/KhachHang/index.js":
/*!********************************************************!*\
  !*** ./resources/js/pages/ThongTin/KhachHang/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/ThongTin/KhachHang/FormItem.js");
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




var List = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      phanLoai = _useState2[0],
      setPhanLoai = _useState2[1];

  var formater = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  });

  var onChangeData = function onChangeData(data) {
    var phanLoai = _toConsumableArray(new Set(data.map(function (x) {
      return x.phan_loai;
    })));

    setPhanLoai(phanLoai);
  };

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ph\xED thu VN: ", formater.format(record.phi_vn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ph\xED thu VJ: ", formater.format(record.phi_vj)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ph\xED thu Jets: ", formater.format(record.phi_jets)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ph\xED thu BB: ", formater.format(record.phi_bb)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ng\xE0y t\u1EA1o: ", record.ngay_tao), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu));
  };

  var columns = [{
    title: "Mã khách hàng",
    dataIndex: "ma_khach_hang",
    width: 120,
    optFind: true
  }, {
    title: "Họ tên",
    dataIndex: "ho_ten",
    width: 150,
    optFind: true
  }, {
    title: "Phân loại",
    dataIndex: "phan_loai",
    width: 120,
    optFilter: true
  }, {
    title: "MST",
    dataIndex: "mst",
    width: 120
  }, {
    title: "SĐT",
    dataIndex: "sdt",
    width: 120
  }, {
    title: "Email",
    dataIndex: "email",
    width: 150
  }, {
    title: "Địa chỉ",
    dataIndex: "dia_chi",
    ellipsis: true,
    width: 170
  }, {
    title: "Mã đại lý",
    dataIndex: "ma_dai_ly",
    ellipsis: true,
    width: 150
  }, {
    title: "Số dư ban đầu",
    dataIndex: "so_du_ky_truoc",
    render: function render(number) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(number);
    },
    width: 120
  }, {
    title: "Số tiền thu dư",
    dataIndex: "so_tien_thu_du",
    render: function render(number) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(number);
    },
    width: 120
  }, // {
  //     title: "Phí VN",
  //     dataIndex: "phi_vn",
  //     render: number =>
  //         new Intl.NumberFormat("vi-VN", {
  //             style: "currency",
  //             currency: "VND"
  //         }).format(number),
  //     width: 120
  // },
  // {
  //     title: "Phí VJ",
  //     dataIndex: "phi_vj",
  //     render: number =>
  //         new Intl.NumberFormat("vi-VN", {
  //             style: "currency",
  //             currency: "VND"
  //         }).format(number),
  //     width: 120
  // },
  // {
  //     title: "Phí Jets",
  //     dataIndex: "phi_jets",
  //     render: number =>
  //         new Intl.NumberFormat("vi-VN", {
  //             style: "currency",
  //             currency: "VND"
  //         }).format(number),
  //     width: 120
  // },
  // {
  //     title: "Phí BB",
  //     dataIndex: "phi_bb",
  //     render: number =>
  //         new Intl.NumberFormat("vi-VN", {
  //             style: "currency",
  //             currency: "VND"
  //         }).format(number),
  //     width: 120
  // },
  {
    title: "Ngày nhắc",
    dataIndex: "ngay_nhac",
    width: 120
  }, // {
  //     title: "Ngày tạo",
  //     dataIndex: "ngay_tao",
  //     width: 120
  // },
  {
    title: "Ghi chú",
    dataIndex: "ghi_chu",
    width: 170,
    ellipsis: true
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "khach-hang",
    columns: columns,
    modalWidth: "1100px",
    tableSize: {
      x: 1000
    },
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      phanLoai: phanLoai
    }),
    formInitialValues: {
      so_du_ky_truoc: 0,
      phi_vn: 0,
      phi_vj: 0,
      phi_jets: 0,
      phi_bb: 0
    },
    onChangeData: onChangeData,
    expandedRowRender: expandedRowRender
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
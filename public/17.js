(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./resources/js/pages/TourVisa/TourChiTiet/FormItem.js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/TourVisa/TourChiTiet/FormItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/MyDatePicker */ "./resources/js/components/ListForm/MyDatePicker.js");




var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var form = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var phanLoai = props.phanLoai || [];
  var options = phanLoai.map(function (pl) {
    return {
      value: pl
    };
  });
  var nhaCungCap = props.nhaCungCap || [];
  /**
   * [
   *      ['xxx', [{}, {}, {}],
   *      ['yyyyy', [{}, {}, {}, {}, {}]]
   * ]
   */

  var groupNhaCungCap = Object.entries(_.groupBy(nhaCungCap, "phan_loai"));

  var getNhaCungCapDetail = function getNhaCungCapDetail() {
    return groupNhaCungCap.map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ky_hieu);
      }));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ma_hang",
    label: "M\xE3 h\xE0ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ten_hang",
    label: "T\xEAn h\xE0ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_tai_khoan",
    label: "Nh\xE0 CC",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    placeholder: "Ch\u1ECDn nh\xE0 cung c\u1EA5p",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getNhaCungCapDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
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
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "don_vi",
    label: "\u0110\u01A1n v\u1ECB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "don_gia",
    label: "\u0110\u01A1n gi\xE1",
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
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    labelCol: {
      md: 3,
      span: 6
    },
    wrapperCol: {
      md: 21,
      span: 18
    },
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/TourVisa/TourChiTiet/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/TourVisa/TourChiTiet/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/TourVisa/TourChiTiet/FormItem.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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






var List = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      phanLoai = _useState2[0],
      setPhanLoai = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.location.state),
      _useState4 = _slicedToArray(_useState3, 2),
      location = _useState4[0],
      setLocation = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nhaCungCap: [],
    filter: {},
    ncc: -1
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var nhaCungCap = state.nhaCungCap,
      filter = state.filter;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Chuyển từ Component khác tới. Cụ thể ở đây là từ Nhà cung cấp
    var ncc = -1;
    if (location !== undefined) ncc = location.ncc;
    axios.get("/api/nha-cung-cap?ncc=".concat(ncc)).then(function (response) {
      if (response.data.success) setState({
        nhaCungCap: response.data.data,
        filter: {
          ncc: ncc
        },
        ncc: ncc
      });
    })["catch"](function (error) {
      return console.log(error);
    });
  }, [location]);

  var onClickAll = function onClickAll() {
    setLocation(undefined);
  };
  /**
   * Callback from ListForm to get PhanLoai from data
   */


  var onChangeData = function onChangeData(data) {
    //TODO: With filtered HangHoa => Phan Loai Has less than normal
    var phanLoai = _toConsumableArray(new Set(data.map(function (x) {
      return x.phan_loai;
    })));

    setPhanLoai(phanLoai);
  };

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
    title: "Nhà cung cấp",
    dataIndex: "nha_cung_cap",
    optFilter: true,
    width: 150
  }, {
    title: "Phân loại",
    dataIndex: "phan_loai",
    optFilter: true,
    width: 120
  }, {
    title: "Đơn vị",
    dataIndex: "don_vi",
    width: 120
  }, {
    title: "Đơn giá",
    dataIndex: "don_gia",
    render: function render(number) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(number);
    },
    width: 120
  }, {
    title: "Ghi chú",
    dataIndex: "ghi_chu",
    ellipsis: true,
    width: 150
  }, {
    title: "Người tạo",
    dataIndex: "username",
    width: 120
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, state.ncc !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Nh\xE0 cung c\u1EA5p: "), nhaCungCap[0].ky_hieu, " - ", nhaCungCap[0].mo_ta, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    onClick: onClickAll
  }, "(T\u1EA5t c\u1EA3 h\xE0ng h\xF3a)")) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "hang-hoa",
    filter: filter,
    columns: columns,
    tableSize: {
      x: 800
    },
    modalWidth: "800px",
    onChangeData: onChangeData,
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      phanLoai: phanLoai,
      nhaCungCap: nhaCungCap
    }),
    formInitialValues: {
      don_gia: 0
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(List));

/***/ })

}]);
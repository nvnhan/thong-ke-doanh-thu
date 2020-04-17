(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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

/***/ "./resources/js/pages/VeMayBay/DatVe/FormItem.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/VeMayBay/DatVe/FormItem.js ***!
  \*******************************************************/
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
  var _props$danhMuc = props.danhMuc,
      sanBay = _props$danhMuc.sanBay,
      phiHanhLy = _props$danhMuc.phiHanhLy,
      taiKhoan = _props$danhMuc.taiKhoan,
      khachHang = _props$danhMuc.khachHang,
      hangBay = _props$danhMuc.hangBay;
  var time = null;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      if (time) clearTimeout(time);
    };
  }, []);
  var hbOptions = hangBay.map(function (pl) {
    return {
      value: pl
    };
  });

  var getKhachHangDetail = function getKhachHangDetail() {
    return Object.entries(_.groupBy(khachHang, "phan_loai")).map(function (clist) {
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

  var getTaiKhoanDetail = function getTaiKhoanDetail() {
    return Object.entries(_.groupBy(taiKhoan, "phan_loai")).map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptGroup, {
        label: clist[0] || "Tài khoản ngân hàng",
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ky_hieu);
      }));
    });
  };

  var getSanBayDetail = function getSanBayDetail() {
    return Object.entries(_.groupBy(sanBay, "phan_loai")).map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          value: ncc.ma_san_bay,
          key: ncc.id
        }, ncc.ten_san_bay);
      }));
    });
  };

  var getPhiHanhLyDetail = function getPhiHanhLyDetail() {
    return phiHanhLy.map(function (ncc) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
        value: ncc.id,
        key: ncc.id
      }, ncc.hanh_ly + " - " + _utils__WEBPACK_IMPORTED_MODULE_4__["vndFormater"].format(ncc.muc_phi));
    });
  };

  var _onChange = function onChange(value) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    console.log("FormItem onChange -> value, type", value, type);
    props.onChangeValue(value, type);
  };

  var onChangeDebounce = function onChangeDebounce(value) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (time !== null) clearTimeout(time);
    time = setTimeout(function () {
      return _onChange(value, type);
    }, 500);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5],
    style: {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_thang",
    label: "Ng\xE0y mua",
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
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ma_giu_cho",
    label: "M\xE3 gi\u1EEF ch\u1ED7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "so_ve",
    label: "S\u1ED1 v\xE9",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "hang_bay",
    label: "H\xE3ng bay",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    options: hbOptions,
    filterOption: function filterOption(inputValue, option) {
      return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    },
    onBlur: function onBlur(value) {
      return _onChange(value, "hb");
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ten_khach",
    label: "T\xEAn kh\xE1ch",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "loai_tuoi",
    label: "Lo\u1EA1i tu\u1ED5i",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    onChange: function onChange(value) {
      return _onChange(value, "lt");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    value: 0
  }, "Ng\u01B0\u1EDDi l\u1EDBn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    value: 1
  }, "Tr\u1EBB em"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    value: 2
  }, "Em b\xE9")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_tai_khoan_mua",
    label: "N\u01A1i mua"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    placeholder: "Ch\u1ECDn n\u01A1i mua",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: function onChange(value) {
      return _onChange(value, "tk");
    }
  }, getTaiKhoanDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
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
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_nhac_lich",
    label: "Nh\u1EAFc l\u1ECBch bay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "HH:mm DD/MM/YYYY",
    placeholder: "(Kh\xF4ng nh\u1EAFc)",
    showTime: true,
    showSeconds: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "canh_bao_xuat_ve",
    label: "B\xE1o xu\u1EA5t v\xE9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "HH:mm DD/MM/YYYY",
    placeholder: "(Kh\xF4ng c\u1EA3nh b\xE1o)",
    showTime: true,
    showSeconds: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    wrapperCol: {
      sm: {
        offset: 8,
        span: 16
      }
    },
    name: "chua_xuat_ve",
    valuePropName: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], null, "Ch\u01B0a xu\u1EA5t v\xE9")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5],
    style: {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_gio_di",
    label: "Ng\xE0y gi\u1EDD \u0111i",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "HH:mm DD/MM/YYYY",
    showTime: true,
    showSeconds: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cb_di",
    label: "CB \u0111i"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "sb_di",
    label: "HT ch\u1EB7ng \u0111i"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: function onChange(value) {
      return _onChange(value, "sb");
    }
  }, getSanBayDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "sb_di1",
    label: "=====>",
    colon: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: function onChange(value) {
      return _onChange(value, "sb");
    }
  }, getSanBayDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_gio_ve",
    label: "Ng\xE0y gi\u1EDD v\u1EC1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "HH:mm DD/MM/YYYY",
    showTime: true,
    showSeconds: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cb_ve",
    label: "CB v\u1EC1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "sb_ve",
    label: "HT ch\u1EB7ng v\u1EC1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: function onChange(value) {
      return _onChange(value, "sb");
    }
  }, getSanBayDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "sb_ve1",
    label: "=====>",
    colon: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: function onChange(value) {
      return _onChange(value, "sb");
    }
  }, getSanBayDetail())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5],
    style: {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "gia_net",
    label: "Gi\xE1 net"
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
    },
    onChange: onChangeDebounce
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "vat",
    label: "VAT"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    formatter: function formatter(value) {
      return "".concat(value, "\u20AB").replace(/(?=(\d{3})+(?!\d))\B/g, ",");
    },
    disabled: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phi_san_bay",
    label: "Ph\xED soi chi\u1EBFu"
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
    },
    onChange: onChangeDebounce
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phu_phi_san_bay",
    label: "Ph\xED qu\u1EA3n tr\u1ECB"
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
    },
    onChange: onChangeDebounce
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phu_phi",
    label: "N\u01A1i mua thu"
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
    },
    onChange: onChangeDebounce
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "hoa_hong",
    label: "Hoa h\u1ED3ng"
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
    },
    onChange: onChangeDebounce
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_phi_hanh_ly",
    label: "H\xE0nh l\xFD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: function onChange(value) {
      return _onChange(value, "hl");
    }
  }, getPhiHanhLyDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "hanh_ly",
    label: "Ph\xED h\xE0nh l\xFD"
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
    },
    onChange: onChangeDebounce
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "tong_tien",
    label: "T\u1ED5ng ti\u1EC1n",
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
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "tong_tien_thu_khach",
    label: "Thu kh\xE1ch",
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
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ghi_chu",
    label: "Ghi ch\xFA",
    labelCol: {
      sm: {
        span: 4
      }
    },
    wrapperCol: {
      sm: {
        span: 20
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/VeMayBay/DatVe/UpdateLayout.js":
/*!***********************************************************!*\
  !*** ./resources/js/pages/VeMayBay/DatVe/UpdateLayout.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var form = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var _props$danhMuc = props.danhMuc,
      taiKhoan = _props$danhMuc.taiKhoan,
      khachHang = _props$danhMuc.khachHang,
      hangBay = _props$danhMuc.hangBay;
  var hbOptions = hangBay.map(function (pl) {
    return {
      value: pl
    };
  });

  var getKhachHangDetail = function getKhachHangDetail() {
    return Object.entries(_.groupBy(khachHang, "phan_loai")).map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ma_khach_hang);
      }));
    });
  };

  var getTaiKhoanDetail = function getTaiKhoanDetail() {
    return Object.entries(_.groupBy(taiKhoan, "phan_loai")).map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptGroup, {
        label: clist[0] || "Tài khoản ngân hàng",
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ky_hieu);
      }));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "hang_bay",
    label: "H\xE3ng bay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    options: hbOptions,
    filterOption: function filterOption(inputValue, option) {
      return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    },
    placeholder: "(Kh\xF4ng thay \u0111\u1ED5i)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_tai_khoan_mua",
    label: "N\u01A1i mua"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    allowClear: true,
    showSearch: true,
    placeholder: "(Kh\xF4ng thay \u0111\u1ED5i)",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getTaiKhoanDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_khach_hang",
    label: "Kh\xE1ch h\xE0ng"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    allowClear: true,
    showSearch: true,
    placeholder: "(Kh\xF4ng thay \u0111\u1ED5i)",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getKhachHangDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "xuat_ve",
    label: "Xu\u1EA5t v\xE9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    allowClear: true,
    placeholder: "(Kh\xF4ng thay \u0111\u1ED5i)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    value: "1"
  }, "\u0110\xE3 xu\u1EA5t v\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    value: "-1"
  }, "Ch\u01B0a xu\u1EA5t")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "tong_tien",
    label: "T\u1ED5ng ti\u1EC1n"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "tong_tien_thu_khach",
    label: "Thu kh\xE1ch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
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
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/VeMayBay/DatVe/index.js":
/*!****************************************************!*\
  !*** ./resources/js/pages/VeMayBay/DatVe/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/VeMayBay/DatVe/FormItem.js");
/* harmony import */ var _UpdateLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UpdateLayout */ "./resources/js/pages/VeMayBay/DatVe/UpdateLayout.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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










var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
var List = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      formValue = _useState2[0],
      setFormValue = _useState2[1];

  var _useMergeState = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["useMergeState"])({
    selectedKeys: [],
    modalVisible: false
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      update = _useMergeState2[0],
      setUpdate = _useMergeState2[1];

  var selectedKeys = update.selectedKeys,
      modalVisible = update.modalVisible;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      updateForm = _Form$useForm2[0];

  var _useMergeState3 = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["useMergeState"])({
    sanBay: [],
    thuePhi: [],
    phiHanhLy: [],
    taiKhoan: [],
    khachHang: [],
    hangBay: []
  }),
      _useMergeState4 = _slicedToArray(_useMergeState3, 2),
      state = _useMergeState4[0],
      setState = _useMergeState4[1];

  var phiHanhLy = state.phiHanhLy,
      taiKhoan = state.taiKhoan,
      sanBay = state.sanBay,
      thuePhi = state.thuePhi;
  var childRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var time = null;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    retrieveData();
    return function () {
      if (time) clearTimeout(time);
    };
  }, []);
  /**
   * Retriving data from server
   * If has error, auto recall after 1 second
   */

  var retrieveData = function retrieveData() {
    var promise1 = axios.get("/api/san-bay");
    var promise2 = axios.get("/api/thue-phi/all");
    var promise3 = axios.get("/api/phi-hanh-ly/all");
    var promise4 = axios.get("/api/tai-khoan/all");
    var promise5 = axios.get("/api/khach-hang/all");
    var promise6 = axios.get("/api/dat-ve/hang-bay");
    console.log("Retrieving Danh Muc");
    Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(function (response) {
      if (response[0].data.success && response[1].data.success && response[2].data.success && response[3].data.success && response[4].data.success && response[5].data.success) {
        setState({
          sanBay: response[0].data.data,
          thuePhi: response[1].data.data,
          phiHanhLy: response[2].data.data,
          taiKhoan: response[3].data.data,
          khachHang: response[4].data.data,
          hangBay: _toConsumableArray(new Set([].concat(_toConsumableArray(response[5].data.data), ["VN", "VJ", "Jets", "BB"])))
        });
        console.log("Retrieved Danh Muc Succcessfully");
      } else time = setTimeout(retrieveData, 2000);
    })["catch"](function (error) {
      console.log(error);
      time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
    });
  };
  /**
   * Callback from FormItem, trigger when select Hang Hoa
   * => Change setFormValues to ListForm => FormEdit
   */


  var handleFormValue = function handleFormValue(value, type) {
    var _childRef$current$get = childRef.current.getFormInstance().getFieldsValue(),
        id_tai_khoan_mua = _childRef$current$get.id_tai_khoan_mua,
        hang_bay = _childRef$current$get.hang_bay,
        loai_tuoi = _childRef$current$get.loai_tuoi,
        sb_di = _childRef$current$get.sb_di,
        sb_di1 = _childRef$current$get.sb_di1,
        sb_ve = _childRef$current$get.sb_ve,
        sb_ve1 = _childRef$current$get.sb_ve1,
        phu_phi = _childRef$current$get.phu_phi,
        vat = _childRef$current$get.vat,
        gia_net = _childRef$current$get.gia_net,
        hanh_ly = _childRef$current$get.hanh_ly,
        tong_tien = _childRef$current$get.tong_tien,
        phi_san_bay = _childRef$current$get.phi_san_bay,
        phu_phi_san_bay = _childRef$current$get.phu_phi_san_bay,
        hoa_hong = _childRef$current$get.hoa_hong;

    console.log("Tinh Phu Phi & Tinh Gia, Tinh Phi"); // VAT

    vat = gia_net / 10;
    var record = {
      vat: vat
    }; // Chọn hành lý

    if (type === "hl") {
      var hl = phiHanhLy.filter(function (item) {
        return item.id === value;
      })[0];

      if (hl) {
        hanh_ly = hl.muc_phi;
        Object.assign(record, {
          hanh_ly: hanh_ly
        });
      }
    } // Tính phí nơi mua thu


    if (type === "hb" || type === "tk" || type === "sb") {
      var tk = taiKhoan.filter(function (item) {
        return item.id === id_tai_khoan_mua;
      })[0];

      if (tk) {
        switch (hang_bay) {
          case "VN":
            phu_phi = tk.phi_vn || 0;

          case "VJ":
            phu_phi = tk.phi_vj || 0;

          case "Jets":
            phu_phi = tk.phi_jets || 0;

          case "BB":
            phu_phi = tk.phi_bb || 0;
        }

        if (!_.isEmpty(sb_ve)) phu_phi *= 2;
        Object.assign(record, {
          phu_phi: phu_phi
        });
      }
    } // Tính phí quản trị, phí soi chiếu: Phí sân bay, Phụ phí sân bay


    if (type === "hb" || type === "lt" || type === "sb") {
      // Em bé
      if (loai_tuoi === 2) phi_san_bay = phu_phi_san_bay = 0;else {
        // Phi sân bay: Phí soi chiếu, an ninh => chỉ tính với sân bay 1 lúc khởi hành
        phi_san_bay = tinhPhiSB(sb_di, hang_bay, loai_tuoi) + tinhPhiSB(sb_ve, hang_bay, loai_tuoi);
        phu_phi_san_bay = tinhPhuPhiSB(sb_di, sb_di1, hang_bay) + tinhPhuPhiSB(sb_ve, sb_ve1, hang_bay);
      }
      Object.assign(record, {
        phi_san_bay: phi_san_bay,
        phu_phi_san_bay: phu_phi_san_bay
      });
    } //  Tính giá: Tổng tiền


    if (gia_net !== null && gia_net !== 0) {
      tong_tien = gia_net + vat + (phi_san_bay || 0) + (phu_phi_san_bay || 0) + (hanh_ly || 0) + (phu_phi || 0) - (hoa_hong || 0);
      Object.assign(record, {
        tong_tien: tong_tien
      });
    }

    Object.assign(record, {
      resetFields: function resetFields() {
        return setFormValue(undefined);
      }
    });
    setFormValue(record);
  };
  /**
   * Tính phí soi chiếu, an ninh
   */


  var tinhPhiSB = function tinhPhiSB(san_bay, hang_bay, loai_tuoi) {
    if (hang_bay === undefined || hang_bay === "") return 0;
    var sb = sanBay.filter(function (item) {
      return item.ma_san_bay === san_bay;
    })[0];

    var thue = _toConsumableArray(thuePhi);

    hang_bay = hang_bay.toLowerCase();

    if (sb !== undefined) {
      if (sb.loai_a) thue = thue.filter(function (item) {
        return item.loai_phi.indexOf("nhóm A") > 0;
      });else thue = thue.filter(function (item) {
        return item.loai_phi.indexOf("nhóm B") > 0;
      });
      if (loai_tuoi === 0) thue = thue.filter(function (item) {
        return item.loai_phi.indexOf("Người lớn") > 0;
      });else if (loai_tuoi === 1) thue = thue.filter(function (item) {
        return item.loai_phi.indexOf("Trẻ em") > 0;
      });else return 0;
      thue = thue.filter(function (item) {
        return item.loai_phi.toLowerCase().indexOf(hang_bay) > 0;
      });
      if (!_.isEmpty(thue)) return thue[0].muc_phi;
    }

    return 0;
  };
  /**
   * Tính phí quản trị
   */


  var tinhPhuPhiSB = function tinhPhuPhiSB(san_bay, san_bay1, hang_bay) {
    if (san_bay === undefined || san_bay === null || san_bay === "") return 0;
    if (hang_bay === undefined || hang_bay === null || hang_bay === "") return 0;

    var thue = _toConsumableArray(thuePhi);

    thue = thue.filter(function (item) {
      return item.loai_phi.indexOf("quản trị") > 0;
    });
    hang_bay = hang_bay.toLowerCase();
    thue = thue.filter(function (item) {
      return item.loai_phi.toLowerCase().indexOf(hang_bay) > 0;
    }); //TODO: Với VN còn loại SB dài, ngắn

    if (!_.isEmpty(thue)) return thue[0].muc_phi;
    return 0;
  };
  /**
   * Trigger "Add new" action with addition params
   */


  var onClickRow = function onClickRow(record) {
    // Thêm hành khách từ record
    childRef.current.triggerAddNew();
    var newRecord = Object.assign(_objectSpread({}, record), {
      ten_khach: "",
      resetFields: function resetFields() {
        return setFormValue(undefined);
      }
    });
    setFormValue(newRecord);
  };

  var dvAction = [{
    key: "them-hanh-khach",
    onClick: onClickRow,
    title: "Thêm hành khách",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["UserAddOutlined"], null),
    color: "#4bab92" // Primary color

  }];

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Chuy\u1EBFn bay \u0111i: ", record.cb_di, ". Chuy\u1EBFn bay v\u1EC1: ", record.cb_ve), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Lo\u1EA1i tu\u1ED5i: ", record.ten_loai_tuoi), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Gi\xE1 net: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.gia_net), ". Ph\xED soi chi\u1EBFu, an ninh: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.phi_san_bay), ". Ph\xED qu\u1EA3n tr\u1ECB:", " ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.phu_phi_san_bay)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "VAT: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.vat), ". Ph\u1EE5 ph\xED:", " ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.phu_phi)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "H\xE0nh l\xFD: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.hanh_ly), ". Lo\u1EA1i h\xE0nh l\xFD:", " ", record.loai_hanh_ly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "\u0110\xE3 thanh to\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.da_thanh_toan), ". Ng\xE0y thanh to\xE1n: ", record.ngay_thanh_toan), record.chua_xuat_ve ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "C\u1EA3nh b\xE1o xu\u1EA5t v\xE9: ", record.canh_bao_xuat_ve) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "\u2714 \u0110\xE3 xu\u1EA5t v\xE9"), !_.isEmpty(record.ngay_nhac_lich) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Nh\u1EAFc l\u1ECBch bay: ", record.ngay_nhac_lich), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
  };

  var columns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_thang",
    width: 110,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(a.ngay_thang, "DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_2___default()(b.ngay_thang, "DD/MM/YYYY").unix();
    }
  }, {
    title: "Mã giữ chỗ",
    dataIndex: "ma_giu_cho",
    optFind: true,
    width: 90
  }, {
    title: "Số vé",
    dataIndex: "so_ve",
    width: 140,
    optFind: true
  }, {
    title: "Hãng bay",
    dataIndex: "hang_bay",
    width: 80,
    optFilter: true
  }, {
    title: "Tên khách",
    dataIndex: "ten_khach",
    width: 130,
    optFind: true
  }, {
    title: "TG đi",
    dataIndex: "ngay_gio_di",
    width: 110,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_2___default()(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix();
    }
  }, {
    title: "Chặng đi",
    dataIndex: "chang_di",
    width: 100
  }, {
    title: "TG về",
    dataIndex: "ngay_gio_ve",
    width: 110,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_2___default()(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix();
    }
  }, {
    title: "Chặng về",
    dataIndex: "chang_ve",
    width: 100
  }, {
    title: "Tổng tiền",
    dataIndex: "tong_tien",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.tong_tien - b.tong_tien;
    },
    width: 110
  }, {
    title: "Thu khách",
    dataIndex: "tong_tien_thu_khach",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.tong_tien_thu_khach - b.tong_tien_thu_khach;
    },
    width: 110
  }, {
    title: "Lãi",
    dataIndex: "lai",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(number);
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
    dataIndex: "ten_khach_hang",
    width: 110,
    optFilter: true
  }, {
    title: "Thanh toán",
    dataIndex: "ngay_thanh_toan",
    width: 110
  }, {
    title: "Người nhập",
    dataIndex: "username",
    width: 90,
    optFilter: true
  }];

  var getOtherFilter = function getOtherFilter() {
    return [{
      name: "sb",
      label: "Sân bay",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: ""
      }, "T\u1EA5t c\u1EA3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: "qn"
      }, "Qu\u1ED1c n\u1ED9i"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: "qt"
      }, "Qu\u1ED1c t\u1EBF"))
    }, {
      name: "xv",
      label: "Xuất vé",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: ""
      }, "T\u1EA5t c\u1EA3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: "1"
      }, "\u0110\xE3 xu\u1EA5t v\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: "-1"
      }, "Ch\u01B0a xu\u1EA5t v\xE9"))
    }];
  };

  var renderSummary = function renderSummary(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          tong_tien: previousValue.tong_tien + currentValue.tong_tien,
          tong_tien_thu_khach: previousValue.tong_tien_thu_khach + currentValue.tong_tien_thu_khach
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", {
        colSpan: 11
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(sumObj.tong_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(sumObj.tong_tien_thu_khach)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(sumObj.tong_tien_thu_khach - sumObj.tong_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null)));
    }
  }; ///////////////////////////////////////////////////////////////////

  /**
   * Show modal cập nhật
   */


  var showUpdates = function showUpdates(data, selectedRowKeys) {
    setUpdate({
      selectedKeys: selectedRowKeys,
      modalVisible: true
    });
  };
  /**
   * Thực hiện Cập nhật
   */


  var handleOk = function handleOk() {
    if (_.isEmpty(selectedKeys)) return;
    updateForm.validateFields().then(function (values) {
      // Update
      Object.assign(values, {
        objects: selectedKeys.join("|")
      });
      axios.put("/api/dat-ve/updates", values).then(function (response) {
        if (response.data.success) {
          // Set lại data cho ListForm ????
          // Ko thì thôi
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message); // Tắt loading & modal

          handleCancel();
          updateForm.resetFields();
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    })["catch"](function (info) {
      return console.log("Validate Failed: ", info);
    });
  };

  var handleCancel = function handleCancel() {
    setUpdate({
      selectedKeys: [],
      modalVisible: false
    });
  };
  /**
   * Tạo code vé
   */


  var codeVe = function codeVe(data, selectedRowKeys) {
    axios.get("/api/dat-ve/code-ve", {
      params: {
        objects: selectedRowKeys.join("|")
      }
    }).then(function (response) {
      if (response.data.success) {
        antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].info({
          title: "Code vé",
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
            rows: 12,
            value: response.data.data
          }),
          width: "800px",
          onOk: function onOk() {}
        });
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var veDienTu = function veDienTu(data, selectedRowKeys) {};

  var exportDS = function exportDS(data, selectedRowKeys) {};

  var layHoaDon = function layHoaDon(data, selectedRowKeys) {};

  var banKeHoaDon = function banKeHoaDon(data, selectedRowKeys) {};

  var congNo = function congNo(data, selectedRowKeys) {};

  var otherButtons = [{
    key: "updates",
    onClick: showUpdates,
    title: "Cập nhật thông tin"
  }, {
    key: "trichxuat",
    title: "Trích xuất",
    childs: [{
      key: "codeve",
      onClick: codeVe,
      title: "Tạo mẫu code vé",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileTextOutlined"], null)
    }, {
      key: "vedientu",
      onClick: veDienTu,
      title: "Tạo mặt vé điện tử",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileTextOutlined"], null)
    }, {
      key: "export",
      onClick: exportDS,
      title: "Xuất danh sách ra Excel",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileExcelOutlined"], null),
      color: "#4bab92"
    }, {
      key: "layhoadon",
      onClick: layHoaDon,
      title: "Thông tin lấy hóa đơn",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileExcelOutlined"], null),
      color: "#4bab92"
    }, {
      key: "bangkehoadon",
      onClick: banKeHoaDon,
      title: "Bảng kê hóa đơn",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileExcelOutlined"], null),
      color: "#4bab92"
    }, {
      key: "xuatcongno",
      onClick: congNo,
      title: "Mẫu xuất công nợ",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileExcelOutlined"], null),
      color: "#4bab92"
    }]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ree: childRef,
    url: "dat-ve",
    filterBox: true,
    otherFilter: getOtherFilter(),
    filterInitialValue: {
      sb: "",
      xv: ""
    },
    columns: columns,
    tableSize: {
      x: 1800
    },
    modalWidth: "1200px",
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      danhMuc: state,
      onChangeValue: handleFormValue
    }),
    formInitialValues: {
      ngay_thang: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY"),
      loai_tuoi: 0,
      gia_net: 0,
      tong_tien: 0,
      tong_tien_thu_khach: 0,
      hoa_hong: 0,
      phi_san_bay: 0,
      phu_phi_san_bay: 0,
      hanh_ly: 0,
      phu_phi: 0
    },
    otherActions: dvAction,
    otherButtons: otherButtons,
    expandedRowRender: expandedRowRender,
    renderSummary: renderSummary,
    setFormValues: formValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    width: "800px",
    title: "C\u1EADp nh\u1EADt th\xF4ng tin",
    onCancel: handleCancel,
    onOk: handleOk,
    visible: modalVisible,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "back",
      onClick: handleCancel
    }, "H\u1EE7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "submit",
      type: "primary",
      onClick: handleOk
    }, "\u0110\u1ED3ng \xFD")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: updateForm,
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      tong_tien: 0,
      tong_tien_thu_khach: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_UpdateLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    danhMuc: state
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(List));

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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




var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var form = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var phanLoai = props.phanLoai || [];
  var options = phanLoai.map(function (pl) {
    return {
      value: pl
    };
  });
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ma_tour",
    label: "M\xE3 Tour",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ten_tour",
    label: "T\xEAn Tour",
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
    name: "bat_dau",
    label: "B\u1EAFt \u0111\u1EA7u"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ket_thuc",
    label: "K\u1EBFt th\xFAc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
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
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "gia_ban",
    label: "Gi\xE1 b\xE1n"
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
    md: 16,
    sm: 12
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    wrapperCol: {
      sm: {
        offset: 6,
        span: 18
      }
    },
    name: "hoan_thanh",
    valuePropName: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], null, "\u0110\xE3 ho\xE0n th\xE0nh")))));
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








var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
var List = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  // const [phanLoai, setPhanLoai] = useState([]);
  // const [khachHang, setKhachHang] = useState([]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {//TODO: Get all Hãng bay & username đổ vào filterbox
    // const promise1 = axios.get("/api/nha-cung-cap");
    // const promise2 = axios.get("/api/khach-hang");
    // Promise.all([promise1, promise2]).then(response => {
    //     if (response[0].data.success && response[1].data.success)
    //         setState({
    //             nhaCungCap: response[0].data.data,
    //             khachHang: response[1].data.data
    //         });
    // });
  }, []);
  /**
   * Redirect to Tour Chi Tiet with addition params
   */

  var onClickRow = function onClickRow(record) {
    var pathname = "/tour-chi-tiet";
    props.history.push({
      pathname: pathname,
      tour: record
    });
  };

  var dvAction = [{
    key: "dsTourChiTiet",
    onClick: onClickRow,
    title: "Thêm hành khách",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreAddOutlined"], null),
    color: "#4bab92" // Primary color

  }];

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
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
    width: 75,
    optFilter: true
  }, {
    title: "Tên khách",
    dataIndex: "ten_khach",
    width: 140,
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
    width: 100,
    optFilter: true
  }];

  var getOtherFilter = function getOtherFilter() {
    return [{
      name: "sb",
      label: "Sân bay",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: ""
      }, "T\u1EA5t c\u1EA3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: "quoc_noi"
      }, "Qu\u1ED1c n\u1ED9i"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
        value: "quoc_te"
      }, "Qu\u1ED1c t\u1EBF"))
    } // {
    //     name: "hb",
    //     label: "Hãng bay",
    //     render: (
    //         <Select>
    //             <Option value="">Tất cả</Option>
    //             <Option value="VN">VietNam Airline</Option>
    //             <Option value="VJ">VietJet</Option>
    //             <Option value="Jets">Jetstar</Option>
    //             <Option value="BB">Bamboo</Option>
    //             <Option value="khac">Khác</Option>
    //             {/* Render tên các hãng khác....... */}
    //         </Select>
    //     )
    // },
    // {
    //     name: "user",
    //     label: "Người nhập",
    //     render: (
    //         <Select>
    //             <Option value="">Tất cả</Option>
    //             {/* Render danh sách user....... */}
    //         </Select>
    //     )
    // }
    ];
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: "dat-ve",
    filterBox: true,
    otherFilter: getOtherFilter(),
    filterInitialValue: {
      san_bay: "",
      hang_bay: "",
      user: ""
    },
    columns: columns,
    tableSize: {
      x: 1100
    },
    modalWidth: "1100px",
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_7__["default"], null),
    formInitialValues: {
      so_luong: 1,
      ngay_thang: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY")
    },
    otherActions: dvAction,
    expandedRowRender: expandedRowRender
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(List));

/***/ })

}]);
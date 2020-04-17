(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "./resources/js/pages/VeMayBay/NoVe/index.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/VeMayBay/NoVe/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ListForm/MyDatePicker */ "./resources/js/components/ListForm/MyDatePicker.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");






var List = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Chuy\u1EBFn bay \u0111i: ", record.cb_di, ". Chuy\u1EBFn bay v\u1EC1: ", record.cb_ve), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Lo\u1EA1i tu\u1ED5i: ", record.ten_loai_tuoi), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Gi\xE1 net: ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.gia_net), ". Ph\xED soi chi\u1EBFu, an ninh: ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.phi_san_bay), ". Ph\xED qu\u1EA3n tr\u1ECB:", " ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.phu_phi_san_bay)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "VAT: ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.vat), ". Ph\u1EE5 ph\xED:", " ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.phu_phi)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "H\xE0nh l\xFD: ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.hanh_ly), ". Lo\u1EA1i h\xE0nh l\xFD:", " ", record.loai_hanh_ly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "\u0110\xE3 thanh to\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(record.da_thanh_toan), ". Ng\xE0y thanh to\xE1n: ", record.ngay_thanh_toan), record.chua_xuat_ve ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "C\u1EA3nh b\xE1o xu\u1EA5t v\xE9: ", record.canh_bao_xuat_ve) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "\u2714 \u0110\xE3 xu\u1EA5t v\xE9"), !_.isEmpty(record.ngay_nhac_lich) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Nh\u1EAFc l\u1ECBch bay: ", record.ngay_nhac_lich), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
  };

  var columns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_thang",
    width: 110,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(a.ngay_thang, "DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_1___default()(b.ngay_thang, "DD/MM/YYYY").unix();
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
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(a.ngay_gio_di, "HH:mm DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_1___default()(b.ngay_gio_di, "HH:mm DD/MM/YYYY").unix();
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
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(a.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_1___default()(b.ngay_gio_ve, "HH:mm DD/MM/YYYY").unix();
    }
  }, {
    title: "Chặng về",
    dataIndex: "chang_ve",
    width: 100
  }, {
    title: "Tổng tiền",
    dataIndex: "tong_tien",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.tong_tien - b.tong_tien;
    },
    width: 110
  }, {
    title: "Thu khách",
    dataIndex: "tong_tien_thu_khach",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.tong_tien_thu_khach - b.tong_tien_thu_khach;
    },
    width: 110
  }, {
    title: "Lãi",
    dataIndex: "lai",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(number);
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
    title: "Người nhập",
    dataIndex: "username",
    width: 90,
    optFilter: true
  }];

  var getOtherFilter = function getOtherFilter() {
    return [{
      name: "den_ngay",
      label: "Tính đến",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          width: "100%"
        },
        locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_0__["default"],
        format: "DD/MM/YYYY"
      })
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
        colSpan: 11
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.tong_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.tong_tien_thu_khach)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.tong_tien_thu_khach - sumObj.tong_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null)));
    }
  };

  var exportDS = function exportDS(data, selectedKeys) {};

  var otherButtons = [{
    key: "export",
    onClick: exportDS,
    title: "Xuất danh sách ra Excel"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "no-ve",
    insertable: false,
    selectable: true,
    editable: false,
    deleteable: false,
    filterBox: true,
    tuNgayDenNgay: false,
    otherFilter: getOtherFilter(),
    filterInitialValue: {
      den_ngay: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY")
    },
    columns: columns,
    tableSize: {
      x: 1700
    },
    otherButtons: otherButtons,
    expandedRowRender: expandedRowRender,
    renderSummary: renderSummary
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
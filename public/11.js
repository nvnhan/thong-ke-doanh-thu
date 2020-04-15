(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./resources/js/pages/BanHang/TonKho/index.js":
/*!****************************************************!*\
  !*** ./resources/js/pages/BanHang/TonKho/index.js ***!
  \****************************************************/
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
  var columns = [{
    title: "Mã hàng",
    dataIndex: "ma_hang",
    optFind: true,
    width: 120
  }, {
    title: "Tên hàng",
    dataIndex: "ten_hang",
    optFind: true,
    width: 140
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
  }, {
    title: "Đơn giá hiện tại",
    dataIndex: "don_gia",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(number);
    },
    // sorter: (a, b) => a.don_gia - b.don_gia,
    width: 120
  }, {
    title: "Số lượng",
    dataIndex: "so_luong_ton_kho",
    width: 120
  }, {
    title: "Thành tiền",
    dataIndex: "thanh_tien_ton_kho",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(number);
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
          thanh_tien_ton_kho: previousValue.thanh_tien_ton_kho + currentValue.thanh_tien_ton_kho
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
        colSpan: 6
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.thanh_tien_ton_kho))));
    }
  };

  var getOtherFilter = function getOtherFilter() {
    return [{
      name: "den_ngay",
      label: "Tính đến ngày",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          width: "100%"
        },
        locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_0__["default"],
        format: "DD/MM/YYYY"
      })
    }];
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "ton-kho",
    filterBox: true,
    tuNgayDenNgay: false,
    otherFilter: getOtherFilter(),
    filterInitialValue: {
      den_ngay: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY")
    },
    columns: columns,
    insertable: false,
    selectable: false,
    editable: false,
    deleteable: false,
    tableSize: {
      x: 800
    },
    renderSummary: renderSummary
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
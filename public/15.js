(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/pages/ThongTin/TaiKhoan/FormItem.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/ThongTin/TaiKhoan/FormItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



function form() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "ky_hieu",
    label: "K\xFD hi\u1EC7u",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "mo_ta",
    label: "T\xEAn t\xE0i kho\u1EA3n",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "so_du_ky_truoc",
    label: "S\u1ED1 d\u01B0 ban \u0111\u1EA7u"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/ThongTin/TaiKhoan/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/ThongTin/TaiKhoan/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/ThongTin/TaiKhoan/FormItem.js");



var List = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function () {
  var columns = [{
    title: "Ký hiệu",
    dataIndex: "ky_hieu",
    optFind: true
  }, {
    title: "Tên tài khoản",
    dataIndex: "mo_ta",
    optFind: true
  }, {
    title: "Số dư ban đầu",
    dataIndex: "so_du_ky_truoc",
    render: function render(number) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(number);
    }
  }, {
    title: "Ngày tạo",
    dataIndex: "ngay_tao"
  }, {
    title: "Ghi chú",
    dataIndex: "ghi_chu",
    ellipsis: true
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "tai-khoan",
    columns: columns,
    tableSize: {
      x: 600
    },
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_2__["default"], null),
    formInitialValues: {
      so_du_ky_truoc: 0
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
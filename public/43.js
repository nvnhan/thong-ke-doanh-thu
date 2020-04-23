(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./resources/js/pages/VeMayBay/ChuaBay/index.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/VeMayBay/ChuaBay/index.js ***!
  \******************************************************/
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
/* harmony import */ var _utils_exportDatVe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/exportDatVe */ "./resources/js/utils/exportDatVe.js");
/* harmony import */ var _DatVe_columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DatVe/columns */ "./resources/js/pages/VeMayBay/DatVe/columns.js");
/* harmony import */ var _DatVe_expandedRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DatVe/expandedRow */ "./resources/js/pages/VeMayBay/DatVe/expandedRow.js");









var List = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var getOtherFilter = function getOtherFilter() {
    return [{
      name: "den_ngay",
      label: "Tính đến",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          width: "100%"
        },
        locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_0__["default"],
        format: "HH:mm DD/MM/YYYY"
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
        colSpan: 10
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.tong_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.tong_tien_thu_khach)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_5__["vndFormater"].format(sumObj.tong_tien_thu_khach - sumObj.tong_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null)));
    }
  };

  var otherButtons = [{
    key: "export",
    onClick: function onClick(data, selectedRowKeys) {
      return Object(_utils_exportDatVe__WEBPACK_IMPORTED_MODULE_6__["default"])(data, selectedRowKeys, "chua-bay.xlsx");
    },
    title: "Xuất danh sách ra Excel",
    selectRequired: false
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "chua-bay",
    insertable: false,
    selectable: false,
    editable: false,
    deleteable: false,
    filterBox: true,
    tuNgayDenNgay: false,
    otherFilter: getOtherFilter(),
    filterInitialValue: {
      den_ngay: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("HH:mm DD/MM/YYYY")
    },
    columns: _DatVe_columns__WEBPACK_IMPORTED_MODULE_7__["default"],
    tableSize: {
      x: 1800
    },
    otherButtons: otherButtons,
    expandedRowRender: _DatVe_expandedRow__WEBPACK_IMPORTED_MODULE_8__["default"],
    renderSummary: renderSummary
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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
/* harmony import */ var _utils_exportDatVe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/exportDatVe */ "./resources/js/utils/exportDatVe.js");







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
    dataIndex: "ma_khach_hang",
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

  var otherButtons = [{
    key: "export",
    onClick: function onClick(data, selectedRowKeys) {
      return Object(_utils_exportDatVe__WEBPACK_IMPORTED_MODULE_6__["default"])(data, selectedRowKeys, "no-ve.xlsx");
    },
    title: "Xuất danh sách ra Excel",
    selectRequired: false
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "no-ve",
    insertable: false,
    selectable: false,
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

/***/ }),

/***/ "./resources/js/utils/exportDatVe.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/exportDatVe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\utils\\exportDatVe.js: Identifier 'filtered' has already been declared (8:10)\n\n\u001b[0m \u001b[90m  6 | \u001b[39m\u001b[36mconst\u001b[39m exportDS \u001b[33m=\u001b[39m (data\u001b[33m,\u001b[39m selectedRowKeys\u001b[33m,\u001b[39m name) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m  7 | \u001b[39m    let filtered \u001b[33m=\u001b[39m data\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 | \u001b[39m    \u001b[36mconst\u001b[39m filtered \u001b[33m=\u001b[39m data\u001b[33m.\u001b[39mfilter(p \u001b[33m=>\u001b[39m selectedRowKeys\u001b[33m.\u001b[39mindexOf(p\u001b[33m.\u001b[39mid) \u001b[33m!==\u001b[39m \u001b[33m-\u001b[39m\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m    \u001b[36mconst\u001b[39m newData \u001b[33m=\u001b[39m filtered\u001b[33m.\u001b[39mmap((p\u001b[33m,\u001b[39m index) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m        \u001b[36mconst\u001b[39m t \u001b[33m=\u001b[39m { stt\u001b[33m:\u001b[39m index \u001b[33m+\u001b[39m \u001b[35m1\u001b[39m\u001b[33m,\u001b[39m \u001b[33m...\u001b[39mp }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m        \u001b[36mdelete\u001b[39m t[\u001b[32m\"id\"\u001b[39m]\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at ScopeHandler.checkRedeclarationInScope (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4769:12)\n    at ScopeHandler.declareName (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4735:12)\n    at Object.checkLVal (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9207:22)\n    at Object.parseVarId (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11762:10)\n    at Object.parseVar (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11737:12)\n    at Object.parseVarStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11549:10)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11148:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseBlock (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11626:10)\n    at Object.parseFunctionBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10634:24)\n    at Object.parseArrowExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10603:10)\n    at Object.parseParenAndDistinguishExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10221:12)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9947:21)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4614:20)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9582:21)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9452:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9425:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9380:21)\n    at Object.parseVar (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11740:26)\n    at Object.parseVarStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11549:10)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11148:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseTopLevel (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11012:10)\n    at Object.parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12637:10)\n    at parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12688:38)\n    at parser (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)");

/***/ })

}]);
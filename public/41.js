(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./resources/js/pages/BaoCao/TongHopCongNo/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/BaoCao/TongHopCongNo/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _components_ListForm_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm/DataTable */ "./resources/js/components/ListForm/DataTable.js");
/* harmony import */ var _components_ListForm_FilterBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/FilterBox */ "./resources/js/components/ListForm/FilterBox.js");
/* harmony import */ var _components_ListForm_ToolsButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ListForm/ToolsButton */ "./resources/js/components/ListForm/ToolsButton.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_exportToExcel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/exportToExcel */ "./resources/js/utils/exportToExcel.js");
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









var List = function List(props) {
  var _useMergeState = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["useMergeState"])({
    data: {
      muavao: [],
      banra: []
    },
    isLoading: true
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var data = state.data,
      isLoading = state.isLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      ownFilter = _useState2[0],
      setOwnFilter = _useState2[1];

  var isComponentMounted = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isComponentMounted = true; // Không Có filter hoặc có filter và đã load xong

    if (ownFilter === undefined || !_.isEmpty(ownFilter)) {
      // Set lại data và loading cho các Component con
      setState({
        data: [],
        isLoading: true
      });
      axios.get("/api/tong-hop-cong-no?" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["queryString"])(ownFilter)).then(function (response) {
        if (isComponentMounted && response.data.success) {
          setState({
            data: response.data.data,
            isLoading: false
          });
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    }

    return function () {
      // When Unmount component
      isComponentMounted = false;
    };
  }, [JSON.stringify(ownFilter)]); // Chỉ chạy 1 lần khi mount đến khi ownFilter thay đổi

  /**
   * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
   */

  var handleFilterBox = function handleFilterBox(newFilter) {
    // Thay đổi filter => Load lại dữ liệu
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isChangeData"])(ownFilter, newFilter)) setOwnFilter(newFilter);
  };

  var renderSummaryBanRa = function renderSummaryBanRa(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          dau_ky: previousValue.dau_ky + currentValue.dau_ky,
          cuoi_ky: previousValue.cuoi_ky + currentValue.cuoi_ky,
          giao_dich: previousValue.giao_dich + currentValue.giao_dich,
          thanh_toan: previousValue.thanh_toan + currentValue.thanh_toan
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: 2
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.dau_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.cuoi_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.thanh_toan)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.giao_dich))));
    }
  };

  var renderSummaryMuaVao = function renderSummaryMuaVao(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          dau_ky: previousValue.dau_ky + currentValue.dau_ky,
          cuoi_ky: previousValue.cuoi_ky + currentValue.cuoi_ky,
          giao_dich: previousValue.giao_dich + currentValue.giao_dich,
          thanh_toan: previousValue.thanh_toan + currentValue.thanh_toan
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.dau_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.cuoi_ky)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.thanh_toan)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(sumObj.giao_dich))));
    }
  };

  var exportDS = function exportDS() {
    var banra = data.banra.map(function (p, ind) {
      return {
        stt: ind + 1,
        phan_loai: p.phan_loai,
        khach_hang: p.khach_hang,
        dau_ky: p.dau_ky,
        cuoi_ky: p.cuoi_ky,
        thanh_toan: p.thanh_toan,
        giao_dich: p.giao_dich
      };
    });
    var dataExportBanRa = [{
      stt: "STT",
      phan_loai: "Phân loại",
      khach_hang: "Khách hàng",
      dau_ky: "Dư - Nợ đầu kỳ",
      cuoi_ky: "Dư - Nợ cuối kỳ",
      thanh_toan: "Số tiền thanh toán",
      giao_dich: "Số tiền giao dịch"
    }].concat(_toConsumableArray(banra));
    var muavao = data.muavao.map(function (p, ind) {
      return {
        stt: ind + 1,
        tai_khoan: p.tai_khoan,
        dau_ky: p.dau_ky,
        cuoi_ky: p.cuoi_ky,
        thanh_toan: p.thanh_toan,
        giao_dich: p.giao_dich
      };
    });
    var dataExportMuaVao = [{
      stt: "STT",
      tai_khoan: "Tài khoản",
      dau_ky: "Dư - Nợ đầu kỳ",
      cuoi_ky: "Dư - Nợ cuối kỳ",
      thanh_toan: "Số tiền thanh toán",
      giao_dich: "Số tiền giao dịch"
    }].concat(_toConsumableArray(muavao));
    var dataExport = {
      "Tổng hợp bán ra": dataExportBanRa,
      "Tổng hợp mua vào": dataExportMuaVao
    };
    Object(_utils_exportToExcel__WEBPACK_IMPORTED_MODULE_6__["ExportMultiSheet"])(dataExport, "tong-hop-cong-no.xlsx");
  };

  var otherButtons = [{
    key: "export",
    onClick: exportDS,
    title: "Xuất danh sách ra Excel",
    selectRequired: false
  }];
  var columnsBanRa = [{
    title: "Phân loại",
    dataIndex: "phan_loai",
    optFilter: true,
    width: 100
  }, {
    title: "Khách hàng",
    dataIndex: "khach_hang",
    optFind: true,
    width: 170
  }, {
    title: "Dư - Nợ đầu kỳ",
    dataIndex: "dau_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Dư - Nợ cuối kỳ",
    dataIndex: "cuoi_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Số tiền thanh toán",
    dataIndex: "thanh_toan",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Tổng tiền giao dịch",
    dataIndex: "giao_dich",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }];
  var columnsMuaVao = [{
    title: "Tài khoản",
    dataIndex: "tai_khoan",
    optFind: true,
    width: 180
  }, {
    title: "Dư - Nợ đầu kỳ",
    dataIndex: "dau_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Dư - Nợ cuối kỳ",
    dataIndex: "cuoi_ky",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Số tiền thanh toán",
    dataIndex: "thanh_toan",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }, {
    title: "Tổng tiền giao dịch",
    dataIndex: "giao_dich",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_1__["vndFormater"].format(number);
    },
    width: 100
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_FilterBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filterBox: true,
    tuNgayDenNgay: true,
    onFilter: handleFilterBox
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_ToolsButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    insertable: false,
    deleteable: false,
    selectable: false,
    otherButtons: otherButtons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    defaultActiveKey: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"].TabPane, {
    tab: "T\u1ED5ng h\u1EE3p b\xE1n ra",
    key: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableSize: {
      x: 800
    },
    data: data.banra,
    columns: columnsBanRa,
    isLoading: isLoading,
    deleteable: false,
    selectable: false,
    editable: false,
    primaryKey: "id",
    renderSummary: renderSummaryBanRa
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Tabs"].TabPane, {
    tab: "T\u1ED5ng h\u1EE3p mua v\xE0o",
    key: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableSize: {
      x: 800
    },
    data: data.muavao,
    columns: columnsMuaVao,
    isLoading: isLoading,
    deleteable: false,
    selectable: false,
    editable: false,
    primaryKey: "id",
    renderSummary: renderSummaryMuaVao
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(List));

/***/ }),

/***/ "./resources/js/utils/exportToExcel.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/exportToExcel.js ***!
  \*********************************************/
/*! exports provided: ExportMultiSheet, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\utils\\exportToExcel.js: Only one default export allowed per module. (80:0)\n\n\u001b[0m \u001b[90m 78 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 79 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mExportMultiSheet\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 80 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33mExportData\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Object.checkDuplicateExports (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12405:12)\n    at Object.checkExport (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12340:14)\n    at Object.parseExport (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12186:12)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11185:27)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseTopLevel (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11012:10)\n    at Object.parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12637:10)\n    at parse (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:12688:38)\n    at parser (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:254:32)\n    at D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\gensync\\index.js:216:11)");

/***/ })

}]);
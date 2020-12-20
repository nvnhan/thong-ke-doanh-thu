(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/js/pages/ThuChi/ThuChiChiTiet/FormItem.js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/ThuChi/ThuChiChiTiet/FormItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");



var form = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var doiTuong = props.doiTuong || [];
  var selectedRowKeys = props.selectedRowKeys,
      onChangeSelect = props.onChangeSelect;
  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onChangeSelect,
    hideDefaultSelections: true,
    columnWidth: 43,
    selections: [{
      key: "invert_all",
      text: "Bỏ chọn tất cả",
      onSelect: function onSelect() {
        return onChangeSelect([]);
      }
    }]
  };
  var myColumns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_thang",
    width: 90
  }, {
    title: "Phân loại",
    dataIndex: "phan_loai",
    width: 90
  }, {
    title: "Nội dung",
    dataIndex: "noi_dung",
    width: 250
  }, {
    title: "Số tiền",
    dataIndex: "so_tien",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    width: 110
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Table"], {
    rowSelection: rowSelection,
    dataSource: doiTuong,
    columns: myColumns,
    rowKey: function rowKey(row) {
      return row["id"];
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/ThuChi/ThuChiChiTiet/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/ThuChi/ThuChiChiTiet/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/ThuChi/ThuChiChiTiet/FormItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var List = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _useMergeState = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useMergeState"])({
    thuChi: props.location.tc,
    doiTuong: [],
    toiDa: 0,
    selectedRowKeys: []
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var thuChi = state.thuChi,
      doiTuong = state.doiTuong,
      toiDa = state.toiDa,
      selectedRowKeys = state.selectedRowKeys;
  if (thuChi === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  });
  var time = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Cleanup function
    return function () {
      if (time) clearTimeout(time);
    };
  }, []);
  /**
   * Retriving data from server
   * If has error, auto recall after 1 second
   */

  var retrieveData = function retrieveData(data) {
    var promise1 = axios.get("/api/thu-chi/" + thuChi.id);
    var promise2 = axios.get("/api/thu-chi-chi-tiet/doi-tuong?tc=" + thuChi.id);
    console.log("Retrieving Danh Muc");
    Promise.all([promise1, promise2]).then(function (response) {
      if (response[0].data.success && response[1].data.success) {
        var tc = response[0].data.data; // Tổng cộng số tiền đã chi

        var tien = 0;

        if (!_.isEmpty(data)) {
          var sumObj = data.reduce(function (previousValue, currentValue) {
            return {
              so_tien: previousValue.so_tien + currentValue.so_tien
            };
          });
          tien = sumObj.so_tien;
        } // Số dư khách hàng chính là kết quả cuối cùng sau khi đã trừ đi tổng số tiền đã chi
        // do vậy ko phải trừ đi sumObj nữa


        var td = tc.id_khach_hang !== null ? tc.so_du_khach_hang : tc.so_tien - tien;
        setState({
          thuChi: tc,
          doiTuong: response[1].data.data,
          toiDa: td,
          selectedRowKeys: []
        });
        console.log("Retrieved Danh Muc Succcessfully");
      } else time = setTimeout(retrieveData, 2000);
    })["catch"](function (error) {
      console.log(error);
      time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
    });
  };
  /**
   * Callback from ListForm to reload Thu Chi from server
   */


  var onChangeData = function onChangeData(data) {
    return retrieveData(data);
  };

  var expandedRowRender = function expandedRowRender(record) {
    var lines = record.chi_tiet.split(" | ");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, lines.map(function (line, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: key
      }, line);
    }));
  };

  var columns = [{
    title: "Loại đối tượng",
    dataIndex: "loai_doi_tuong",
    width: 80
  }, {
    title: "Số tiền",
    dataIndex: "so_tien",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    width: 110,
    sorter: function sorter(a, b) {
      return a.so_tien - b.so_tien;
    }
  }, {
    title: "Chi tiết",
    dataIndex: "chi_tiet",
    ellipsis: true,
    width: 300
  }];

  var renderSummary = function renderSummary(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          so_tien: previousValue.so_tien + currentValue.so_tien
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: 3
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: toiDa <= 0 ? {
          color: "red"
        } : {}
      }, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(sumObj.so_tien))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)));
    }
  };

  var getDetail = function getDetail() {
    if (thuChi.id_khach_hang !== null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Kh\xE1ch h\xE0ng: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, thuChi.ten_khach_hang), ", s\u1ED1 d\u01B0:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(thuChi.so_du_khach_hang)));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "T\xE0i kho\u1EA3n chi: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, thuChi.tai_khoan_di));
  };

  var onChangeSelect = function onChangeSelect(selectedRowKeys) {
    return setState({
      selectedRowKeys: selectedRowKeys
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-box"
  }, "Ng\xE0y th\xE1ng: ", thuChi.ngay_thang, ". Thu chi:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, thuChi.hang_muc), ". S\u1ED1 ti\u1EC1n:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(thuChi.so_tien)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "N\u01A1i nh\u1EADn: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, thuChi.tai_khoan_den), ". L\u1ECDc c\xE1c \u0111\u1ED1i t\u01B0\u1EE3ng theo:", " ", getDetail(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Gi\u1EDBi h\u1EA1n chi c\xF2n l\u1EA1i:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: "red"
    }
  }, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(toiDa))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "thu-chi-chi-tiet",
    filter: {
      tc: thuChi.id
    },
    otherParams: {
      id_thu_chi: thuChi.id,
      doi_tuong: selectedRowKeys.join("|")
    },
    insertable: toiDa > 0,
    editable: false,
    columns: columns,
    modalWidth: "800px",
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      doiTuong: doiTuong,
      selectedRowKeys: selectedRowKeys,
      onChangeSelect: onChangeSelect
    }),
    expandedRowRender: expandedRowRender,
    renderSummary: renderSummary,
    onChangeData: onChangeData
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(List));

/***/ })

}]);
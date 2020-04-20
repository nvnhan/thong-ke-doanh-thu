(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./resources/js/pages/BaoCao/TongHopTaiKhoan/index.js":
/*!************************************************************!*\
  !*** ./resources/js/pages/BaoCao/TongHopTaiKhoan/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option;
var List = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var _React$createElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    columns: [],
    tableSize: 1000
  }),
      _useState2 = _slicedToArray(_useState, 2),
      trangThai = _useState2[0],
      setTrangThai = _useState2[1];

  var columns = trangThai.columns,
      tableSize = trangThai.tableSize;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      nhanVien = _useState4[0],
      setNhanVien = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios.get("/api/nhan-vien/all").then(function (response) {
      if (response.data.success) setNhanVien(response.data.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  /**
   * Callback from ListForm to reload Thu Chi from server
   */

  var onChangeData = function onChangeData(data) {
    if (_.isEmpty(data)) return;
    var entry = data[0];
    var cols = [];
    var size = 0;

    for (var key in entry) {
      size += 110;
      if (key === "tai_khoan") cols.push({
        title: "Tài khoản",
        dataIndex: key,
        width: 120,
        fixed: "left",
        optFind: true
      });else if (key === "dau_ky") cols.push({
        title: "Đầu / Cuối kỳ",
        dataIndex: key,
        // render: text => {
        //     if (text !== undefined && text !== null && text.indexOf(" | ") > 0) {
        //         let a = text.split(" | ");
        //         return (
        //             <span>
        //                 {a[0]}
        //                 <br />
        //                 {a[1]}
        //             </span>
        //         );
        //     }
        //     return text;
        // },
        width: 100
      });else if (key === "thu_chi") cols.push({
        title: "",
        dataIndex: key,
        width: 80
      });else if (key !== "id") cols.push({
        title: key,
        dataIndex: key,
        // render: text => {
        //     if (text !== undefined && text !== null && text.indexOf(" | ") > 0) {
        //         let a = text.split(" | ");
        //         return (
        //             <span>
        //                 {a[0]}
        //                 <br />
        //                 {a[1]}
        //             </span>
        //         );
        //     }
        //     return text;
        // },
        width: 100
      });
    }

    setTrangThai({
      columns: cols,
      tableSize: size
    });
  };

  var getOtherFilter = function getOtherFilter() {
    return [{
      name: "user",
      label: "Nhân viên",
      render: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
        value: ""
      }, "T\u1EA5t c\u1EA3"), nhanVien.map(function (nv) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
          key: nv.username,
          value: nv.username
        }, nv.username + " - " + nv.ho_ten);
      }))
    }];
  };

  var exportDS = function exportDS(data, selectedKeys) {//TODO: Xuất Excel
  };

  var otherButtons = [{
    key: "export",
    onClick: exportDS,
    title: "Xuất danh sách ra Excel",
    selectRequired: false
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], (_React$createElement = {
    url: "tong-hop-tai-khoan",
    insertable: false,
    selectable: false,
    editable: false,
    deleteable: false
  }, _defineProperty(_React$createElement, "selectable", false), _defineProperty(_React$createElement, "filterBox", true), _defineProperty(_React$createElement, "otherFilter", getOtherFilter()), _defineProperty(_React$createElement, "filterInitialValue", {
    user: ""
  }), _defineProperty(_React$createElement, "columns", columns), _defineProperty(_React$createElement, "tableSize", {
    x: tableSize
  }), _defineProperty(_React$createElement, "otherButtons", otherButtons), _defineProperty(_React$createElement, "onChangeData", onChangeData), _React$createElement));
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/components/Includes/ShowWaiting.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Includes/ShowWaiting.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var showWaiting = function showWaiting() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Đang xử lý dữ liệu...";
  antd__WEBPACK_IMPORTED_MODULE_0__["Modal"].info({
    title: "Thông báo",
    centered: true,
    icon: null,
    okButtonProps: {
      hidden: true
    },
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Progress"], {
      percent: 100,
      status: "active",
      showInfo: false,
      strokeColor: "#6dc3a6"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, s), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "(Kh\xF4ng th\u1EC3 h\u1EE7y cho \u0111\u1EBFn khi ti\u1EBFn tr\xECnh k\u1EBFt th\xFAc!)")))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showWaiting);

/***/ }),

/***/ "./resources/js/pages/BaoCao/BaoCaoTongHop/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/BaoCao/BaoCaoTongHop/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _utils_downloadFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/downloadFile */ "./resources/js/utils/downloadFile.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var RangePicker = antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"].RangePicker;

var index = function index(props) {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish() {
    var values = form.getFieldsValue();

    if (values.hasOwnProperty("thoiGian")) {
      values = Object.assign(values, {
        bat_dau: values.thoiGian[0],
        ket_thuc: values.thoiGian[1]
      });
      delete values.thoiGian;
    }

    Object(_utils_downloadFile__WEBPACK_IMPORTED_MODULE_6__["downloadApi"])("/api/bao-cao-tong-hop", Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseValues"])(values), "bao-cao-tong-hop.xlsx");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "list-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "sm-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: form,
    initialValues: {
      thoiGian: [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("month"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("month")]
    },
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    },
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "thoiGian",
    label: "Th\u1EDDi gian",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RangePicker, {
    allowClear: false,
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_2__["default"],
    style: {
      width: "100%"
    },
    ranges: {
      "Hôm nay": [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("day"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("day")],
      "Tuần này": [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("week"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("week")],
      "Tháng này": [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("month"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("month")]
    },
    format: "DD/MM/YYYY",
    placeholder: ["Từ ngày", "đến ngày"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    wrapperCol: {
      md: {
        span: 16,
        offset: 8
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    htmlType: "submit",
    type: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FileExcelOutlined"], null), " Xu\u1EA5t danh s\xE1ch")))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(index));

/***/ }),

/***/ "./resources/js/utils/downloadFile.js":
/*!********************************************!*\
  !*** ./resources/js/utils/downloadFile.js ***!
  \********************************************/
/*! exports provided: downloadApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadApi", function() { return downloadApi; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Includes_ShowWaiting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Includes/ShowWaiting */ "./resources/js/components/Includes/ShowWaiting.js");


/**
 * Download file từ url
 * const url = window.URL.createObjectURL(new Blob([response.data]));
 *
 * @param {*} url
 * @param {*} name
 */

var downloadFile = function downloadFile(url, name) {
  var a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  window.URL.revokeObjectURL(url);
};
/**
 * Tạo và download file từ url
 */


var downloadApi = function downloadApi(url, params, fileName) {
  Object(_components_Includes_ShowWaiting__WEBPACK_IMPORTED_MODULE_1__["default"])("Đang tạo báo cáo...");
  axios.get(url, {
    params: params,
    responseType: "blob" // important

  }).then(function (response) {
    var url = window.URL.createObjectURL(new Blob([response.data]));
    downloadFile(url, fileName);
  })["catch"](function (error) {
    return console.log(error);
  }).then(function () {
    return antd__WEBPACK_IMPORTED_MODULE_0__["Modal"].destroyAll();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (downloadFile);

/***/ })

}]);
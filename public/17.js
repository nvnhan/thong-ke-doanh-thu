(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./resources/js/pages/VeMayBay/ModalPreviewDatVe.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/VeMayBay/ModalPreviewDatVe.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ModalPreviewDatVe = function ModalPreviewDatVe(props) {
  var ddDatVe = props.ddDatVe,
      handleCancel = props.handleCancel,
      modalVisible = props.modalVisible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isLoading: true,
    data: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dataDatVe = _useState2[0],
      setDataDatVe = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    ddDatVe !== "" && axios.get("/api/dat-ve?dd=" + ddDatVe).then(function (response) {
      return response.data.success && setDataDatVe({
        isLoading: false,
        data: response.data.data
      });
    })["catch"](function (error) {
      return console.log(error);
    });
  }, [ddDatVe]);

  var handleOk = function handleOk() {
    props.history.push({
      pathname: "/dat-ve",
      dd: ddDatVe
    });
  };

  var handleAbort = function handleAbort() {
    axios["delete"]("/api/dat-ve/deletes", {
      params: {
        dd: ddDatVe
      }
    }).then(function (response) {
      return response.data.success && antd__WEBPACK_IMPORTED_MODULE_0__["message"].success(response.data.message) && handleCancel();
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var myColumns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_thang",
    width: 90
  }, {
    title: "Mã giữ chỗ",
    dataIndex: "ma_giu_cho",
    width: 80
  }, {
    title: "Số vé",
    dataIndex: "so_ve",
    width: 130
  }, {
    title: "Hãng bay",
    dataIndex: "hang_bay",
    width: 65
  }, {
    title: "Tên khách",
    dataIndex: "ten_khach",
    width: 140
  }, {
    title: "TG đi",
    dataIndex: "ngay_gio_di",
    width: 120
  }, {
    title: "Chặng đi",
    dataIndex: "chang_di",
    width: 85
  }, {
    title: "TG về",
    dataIndex: "ngay_gio_ve",
    width: 120
  }, {
    title: "Chặng về",
    dataIndex: "chang_ve",
    width: 85
  }, {
    title: "Tổng tiền",
    dataIndex: "tong_tien",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    width: 110
  }, {
    title: "Thu khách",
    dataIndex: "tong_tien_thu_khach",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    width: 110
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    width: "1000px",
    visible: modalVisible,
    title: "D\u1EEF li\u1EC7u x\u1EED l\xFD \u0111\u01B0\u1EE3c",
    onOk: handleOk,
    onCancel: handleCancel,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "back",
      onClick: handleCancel
    }, "X\u1EED l\xFD ti\u1EBFp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "cancel",
      type: "danger",
      onClick: handleAbort
    }, "Lo\u1EA1i b\u1ECF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "submit",
      type: "primary",
      onClick: handleOk
    }, "Xem chi ti\u1EBFt")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Table"], {
    dataSource: dataDatVe.data,
    columns: myColumns,
    loading: dataDatVe.isLoading,
    rowKey: function rowKey(row) {
      return row["id"];
    },
    scroll: {
      x: 800
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ModalPreviewDatVe)));

/***/ }),

/***/ "./resources/js/pages/VeMayBay/ThemFile/FormItem.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/VeMayBay/ThemFile/FormItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");





var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var RangePicker = antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"].RangePicker;
var form = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _props$danhMuc = props.danhMuc,
      taiKhoan = _props$danhMuc.taiKhoan,
      khachHang = _props$danhMuc.khachHang;

  var getKhachHangDetail = function getKhachHangDetail() {
    return Object.entries(_.groupBy(khachHang, "phan_loai")).map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ma_khach_hang);
      }));
    });
  };

  var getTaiKhoanDetail = function getTaiKhoanDetail() {
    return Object.entries(_.groupBy(taiKhoan, "phan_loai")).map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OptGroup, {
        label: clist[0] || "Tài khoản ngân hàng",
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ky_hieu);
      }));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "X\u1EED l\xFD file Excel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5],
    style: {
      borderBottom: "1px solid rgba(0,0,0,.07)",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_so_ve",
    label: "C\u1ED9t s\u1ED1 v\xE9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_ma_giu_cho",
    label: "C\u1ED9t m\xE3 gi\u1EEF ch\u1ED7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_ten_khach",
    label: "C\u1ED9t t\xEAn kh\xE1ch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_loai_tuoi",
    label: "C\u1ED9t lo\u1EA1i tu\u1ED5i"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_ngay_thang",
    label: "C\u1ED9t ng\xE0y th\xE1ng"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_hanh_trinh",
    label: "C\u1ED9t h\xE0nh tr\xECnh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_ngay_bay",
    label: "C\u1ED9t ng\xE0y bay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_ma_dai_ly",
    label: "C\u1ED9t m\xE3 \u0111\u1EA1i l\xFD"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_hoa_hong",
    label: "C\u1ED9t hoa h\u1ED3ng"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_so_tien",
    label: "C\u1ED9t s\u1ED1 ti\u1EC1n"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "cot_thu_khach",
    label: "C\u1ED9t thu kh\xE1ch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "xu_ly_tu_hang",
    label: "X\u1EED l\xFD t\u1EEB h\xE0ng"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "thoiGian",
    label: "Th\u1EDDi gian",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RangePicker, {
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    style: {
      width: "100%"
    },
    ranges: {
      "Hôm nay": [moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf("day"), moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf("day")],
      "Tuần này": [moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf("week"), moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf("week")],
      "Tháng này": [moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf("month"), moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf("month")]
    },
    format: "DD/MM/YYYY",
    placeholder: ["Nhập từ ngày", "đến ngày"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_tai_khoan_mua",
    label: "N\u01A1i mua",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    allowClear: true,
    placeholder: "Ch\u1ECDn t\xE0i kho\u1EA3n / nh\xE0 cung c\u1EA5p",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getTaiKhoanDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_khach_hang",
    label: "Kh\xE1ch h\xE0ng M\u0110",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    allowClear: true,
    placeholder: "Kh\xE1ch h\xE0ng m\u1EB7c \u0111\u1ECBnh",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getKhachHangDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phi_thu_khach",
    label: "Ph\xED thu kh\xE1ch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 0,
    step: 1000,
    formatter: _utils__WEBPACK_IMPORTED_MODULE_4__["inputFormat"],
    parser: _utils__WEBPACK_IMPORTED_MODULE_4__["inputParse"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "khong_tinh_phi",
    label: "Ko t\xEDnh ph\xED"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 0,
    step: 1000,
    formatter: _utils__WEBPACK_IMPORTED_MODULE_4__["inputFormat"],
    parser: _utils__WEBPACK_IMPORTED_MODULE_4__["inputParse"]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    wrapperCol: {
      offset: 12,
      span: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    htmlType: "submit",
    type: "primary"
  }, "X\u1EED l\xFD")))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/VeMayBay/ThemFile/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/VeMayBay/ThemFile/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Includes_ShowWaiting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Includes/ShowWaiting */ "./resources/js/components/Includes/ShowWaiting.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _ModalPreviewDatVe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ModalPreviewDatVe */ "./resources/js/pages/VeMayBay/ModalPreviewDatVe.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/VeMayBay/ThemFile/FormItem.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var index = function index(props) {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useMergeState = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useMergeState"])({
    taiKhoan: [],
    khachHang: []
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    // Get data from localStorage
    var cols = {
      phi_thu_khach: 0,
      khong_tinh_phi: 0
    };
    var cot = localStorage.getItem("cot_excel");
    if (cot !== undefined) Object.assign(cols, JSON.parse(cot)); //

    return cols;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fileList = _useState4[0],
      setFileList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    visible: false,
    datve: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      modalDatVe = _useState6[0],
      setModalDatVe = _useState6[1];

  var isComponentMounted = false;
  var time = null;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    isComponentMounted = true;
    retrieveData();
    return function () {
      // When Unmount component
      isComponentMounted = false;
      if (time) clearTimeout(time);
    };
  }, []);
  /**
   * Retriving data from server
   * If has error, auto recall after 1 second
   */

  var retrieveData = function retrieveData() {
    var promise1 = axios.get("/api/tai-khoan/all");
    var promise2 = axios.get("/api/khach-hang/all");
    console.log("Retrieving Danh Muc");
    Promise.all([promise1, promise2]).then(function (response) {
      if (isComponentMounted) if (response[0].data.success && response[1].data.success) {
        setState({
          taiKhoan: response[0].data.data,
          khachHang: response[1].data.data
        });
        console.log("Retrieved Danh Muc Succcessfully");
      } else time = setTimeout(retrieveData, 2000);
    })["catch"](function (error) {
      console.log(error);
      time = setTimeout(retrieveData, 1000); // Nếu lỗi thì sau 1 giây load lại dữ liệu
    });
  };
  /**
   * Lưu thông tin cột vào localStorage
   */


  var saveColumns = function saveColumns(cols) {
    delete cols.thoiGian;
    delete cols.id_tai_khoan_mua;
    delete cols.id_khach_hang;
    delete cols.phi_thu_khach;
    delete cols.khong_tinh_phi;
    delete cols.ngay_thanh_toan;
    delete cols.file;
    localStorage.setItem("cot_excel", JSON.stringify(cols));
  };

  var getFormData = function getFormData(values) {
    if (values.hasOwnProperty("thoiGian") && !_.isEmpty(values.thoiGian)) {
      Object.assign(values, {
        bat_dau: values.thoiGian[0].format("YYYY-MM-DD"),
        ket_thuc: values.thoiGian[1].format("YYYY-MM-DD")
      });
    } // if (
    //     values.hasOwnProperty("ngay_thanh_toan") &&
    //     !_.isEmpty(values.ngay_thanh_toan)
    // ) {
    //     Object.assign(values, {
    //         ngay_thanh_toan: values.ngay_thanh_toan.format("YYYY-MM-DD")
    //     });
    // }


    var data = new FormData();
    data.append("file", fileList[0]);
    delete values.thoiGian;
    delete values.file;

    for (var key in values) {
      if (values[key] !== undefined) data.append(key, values[key]);
    }

    return data;
  };

  var onFinish = function onFinish() {
    if (fileList.length === 0) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].warn("Chưa chọn file");
      return;
    }

    Object(_components_Includes_ShowWaiting__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var values = form.getFieldsValue();
    saveColumns(_objectSpread({}, values));
    var data = getFormData(values); // Truyền lên server

    axios.post("/api/dat-ve/them-file", data, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
      }
    }).then(function (response) {
      if (response.data.success) {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(response.data.message);
        setModalDatVe({
          visible: true,
          datve: response.data.data
        });
      } else antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(response.data.message);
    })["catch"](function (error) {
      return console.log(error);
    }).then(function () {
      return antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].destroyAll();
    });
  };
  /**
   * Cancel Modal preview
   */


  var handleCancel = function handleCancel() {
    return setModalDatVe({
      visible: false,
      datve: ""
    }) && setFileList([]);
  };
  /**
   * Remove selected file
   */


  var onRemove = function onRemove() {
    return setFileList([]);
  };

  var beforeUpload = function beforeUpload(file) {
    setFileList([file]);
    return false;
  };

  var hbOptions = ["VN", "VJ", "Jets", "BB"].map(function (pl) {
    return {
      value: pl
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "list-form",
    style: {
      padding: "16px 12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: form,
    labelCol: {
      span: 12
    },
    wrapperCol: {
      span: 12
    },
    onFinish: onFinish,
    initialValues: columns
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [5, 5],
    style: {
      borderBottom: "1px solid rgba(0,0,0,.07)",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "hang_bay",
    label: "HB m\u1EB7c \u0111\u1ECBnh"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    options: hbOptions,
    filterOption: function filterOption(inputValue, option) {
      return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    md: 18
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    labelCol: {
      md: 4
    },
    wrapperCol: {
      md: 20
    },
    name: "file",
    label: "T\u1EADp tin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    accept: ".xls,.xlsx,.htm,.html",
    beforeUpload: beforeUpload,
    onRemove: onRemove,
    fileList: fileList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["UploadOutlined"], null), " Ch\u1ECDn file t\u1EA3i l\xEAn"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    danhMuc: state
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ModalPreviewDatVe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ddDatVe: modalDatVe.datve,
    handleCancel: handleCancel,
    modalVisible: modalDatVe.visible
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(index));

/***/ })

}]);
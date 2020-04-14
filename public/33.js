(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./resources/js/pages/TourVisa/Tour/FormItem.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/TourVisa/Tour/FormItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/date-picker/locale/vi_VN */ "./node_modules/antd/es/date-picker/locale/vi_VN.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ListForm/MyDatePicker */ "./resources/js/components/ListForm/MyDatePicker.js");




var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var form = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var phanLoai = props.phanLoai || [];
  var options = phanLoai.map(function (pl) {
    return {
      value: pl
    };
  });
  var khachHang = props.khachHang || [];
  /**
   * [
   *      ['xxx', [{}, {}, {}],
   *      ['yyyyy', [{}, {}, {}, {}, {}]]
   * ]
   */

  var groupKhachHang = Object.entries(_.groupBy(khachHang, "phan_loai"));

  var getKhachHangDetail = function getKhachHangDetail() {
    return groupKhachHang.map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (ncc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
          value: ncc.id,
          key: ncc.id
        }, ncc.ma_khach_hang);
      }));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    gutter: [5, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ngay_thang",
    label: "Ng\xE0y th\xE1ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ma_tour",
    label: "M\xE3 Tour",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ten_tour",
    label: "T\xEAn Tour",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "phan_loai",
    label: "Ph\xE2n lo\u1EA1i",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"], {
    options: options,
    filterOption: function filterOption(inputValue, option) {
      return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "bat_dau",
    label: "B\u1EAFt \u0111\u1EA7u"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ket_thuc",
    label: "K\u1EBFt th\xFAc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListForm_MyDatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: "100%"
    },
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "so_luong",
    label: "S\u1ED1 l\u01B0\u1EE3ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 1,
    step: 1,
    parser: function parser(value) {
      return value.replace(/\₫\s?|\.(,*)/g, "");
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 12,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "gia_ban",
    label: "Gi\xE1 b\xE1n"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "id_khach_hang",
    label: "Kh\xE1ch h\xE0ng"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    placeholder: "Ch\u1ECDn kh\xE1ch h\xE0ng",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, getKhachHangDetail()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 16,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    labelCol: {
      md: 4,
      span: 8
    },
    wrapperCol: {
      md: 20,
      span: 16
    },
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 24,
    md: 8,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    wrapperCol: {
      sm: {
        offset: 8,
        span: 16
      }
    },
    name: "hoan_thanh",
    valuePropName: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], null, "\u0110\xE3 ho\xE0n th\xE0nh")))));
});
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/TourVisa/Tour/index.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/TourVisa/Tour/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/TourVisa/Tour/FormItem.js");
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









var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
var List = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      phanLoai = _useState2[0],
      setPhanLoai = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      khachHang = _useState4[0],
      setKhachHang = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    axios.get("/api/khach-hang/all").then(function (response) {
      if (response.data.success) setKhachHang(response.data.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  /**
   * Callback from ListForm to get PhanLoai from data
   */

  var onChangeData = function onChangeData(data) {
    // Set là tập hợp, mỗi phần tử là duy nhất, input là Array
    var phanLoai = _toConsumableArray(new Set([].concat(_toConsumableArray(data.map(function (x) {
      return x.phan_loai;
    })), ["Tour quốc nội", "Vé máy bay"])));

    setPhanLoai(phanLoai);
  };
  /**
   * Redirect to Tour Chi Tiet with addition params
   */


  var onClickRow = function onClickRow(record) {
    var pathname = "/tour-chi-tiet";
    props.history.push({
      pathname: pathname,
      tour: record
    });
  };

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      style: {
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "B\u1EAFt \u0111\u1EA7u: ", record.bat_dau, ". K\u1EBFt th\xFAc: ", record.ket_thuc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Gi\xE1 tour: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.gia_tour), ". S\u1ED1 l\u01B0\u1EE3ng:", " ", record.so_luong), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Gi\xE1 b\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.gia_ban), ". T\u1ED5ng ti\u1EC1n b\xE1n:", " ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.tong_tien_ban)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "\u0110\xE3 thanh to\xE1n: ", _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(record.da_thanh_toan), ". Ng\xE0y thanh to\xE1n: ", record.ngay_thanh_toan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "T\xECnh tr\u1EA1ng: ", record.tinh_trang), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Ghi ch\xFA: ", record.ghi_chu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Ng\u01B0\u1EDDi t\u1EA1o: ", record.username));
  };

  var columns = [{
    title: "Ngày tháng",
    dataIndex: "ngay_thang",
    width: 120,
    sorter: function sorter(a, b) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(a.ngay_thang, "DD/MM/YYYY").unix() - moment__WEBPACK_IMPORTED_MODULE_2___default()(b.ngay_thang, "DD/MM/YYYY").unix();
    }
  }, {
    title: "Mã tour",
    dataIndex: "ma_tour",
    optFind: true,
    width: 140
  }, {
    title: "Tên tour",
    dataIndex: "ten_tour",
    width: 170,
    optFind: true
  }, {
    title: "Phân loại",
    dataIndex: "phan_loai",
    width: 140,
    optFilter: true
  }, {
    title: "Giá tour",
    dataIndex: "gia_tour",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.gia_tour - b.gia_tour;
    },
    width: 120
  }, {
    title: "Giá bán",
    dataIndex: "gia_ban",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.gia_ban - b.gia_ban;
    },
    width: 120
  }, {
    title: "Lãi",
    dataIndex: "lai",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_6__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.lai - b.lai;
    },
    width: 120
  }, {
    title: "Khách hàng",
    dataIndex: "ten_khach_hang",
    width: 120,
    optFilter: true
  }, {
    title: "Tình trạng",
    dataIndex: "tinh_trang",
    width: 120,
    optFilter: true
  }, {
    title: "Ghi chú",
    dataIndex: "ghi_chu",
    ellipsis: true,
    width: 170
  }];
  var tourAction = [{
    key: "dsTourChiTiet",
    onClick: onClickRow,
    title: "Tour chi tiết",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreAddOutlined"], null),
    color: "#4bab92" // Primary color

  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: "tour",
    filterBox: true // otherFilter={getOtherFilter()}
    // filterInitialValue={{ tinh_trang: "" }}
    ,
    columns: columns,
    tableSize: {
      x: 1200
    },
    modalWidth: "1100px",
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      phanLoai: phanLoai,
      khachHang: khachHang
    }),
    formInitialValues: {
      so_luong: 1,
      ngay_thang: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY"),
      gia_ban: 0
    },
    otherActions: tourAction,
    onChangeData: onChangeData,
    expandedRowRender: expandedRowRender
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(List));

/***/ })

}]);
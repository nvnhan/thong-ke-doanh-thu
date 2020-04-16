(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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


var Option = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
    OptGroup = antd__WEBPACK_IMPORTED_MODULE_0__["Select"].OptGroup;
var form = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var doiTuong = props.doiTuong || [];
  var groupDoiTuong = Object.entries(_.groupBy(doiTuong, "phan_loai"));

  var getDoiTuongDetail = function getDoiTuongDetail() {
    return groupDoiTuong.map(function (clist) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptGroup, {
        label: clist[0],
        key: clist[0]
      }, clist[1].map(function (hh) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
          value: hh.id,
          key: hh.id
        }, hh.noi_dung);
      }));
    });
  };
  /**
   * When change select Hang Hoa => Call trigger change FormValue in TourChiTiet => ListForm => FormEdit
   */


  var onChange = function onChange(idHH) {
    var hh = doiTuong.filter(function (item) {
      return item.id === idHH;
    })[0];
    if (hh) props.onChangeValue(hh.so_tien);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "doi_tuong",
    label: "\u0110\u1ED1i t\u01B0\u1EE3ng",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    showSearch: true,
    placeholder: "Ch\u1ECDn \u0111\u1ED1i t\u01B0\u1EE3ng thu chi",
    filterOption: function filterOption(input, option) {
      if (!option.children) return false;
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange: onChange
  }, getDoiTuongDetail())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "so_tien",
    label: "S\u1ED1 ti\u1EC1n",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 0,
    max: props.toiDa,
    step: 1000,
    formatter: function formatter(value) {
      return "".concat(value, "\u20AB").replace(/(?=(\d{3})+(?!\d))\B/g, ",");
    },
    parser: function parser(value) {
      return value.replace(/\₫\s?|(,*)/g, "");
    }
  })));
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    thuChi: props.location.tc,
    doiTuong: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var thuChi = state.thuChi,
      doiTuong = state.doiTuong;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      formValue = _useState4[0],
      setFormValue = _useState4[1];

  var tongCong = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  if (thuChi === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  });
  var toiDa = thuChi.id_khach_hang !== null ? thuChi.so_du_khach_hang : thuChi.so_tien - tongCong.current;
  var time = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // retrieveData();
    return function () {
      if (time) clearTimeout(time);
    };
  }, []);
  /**
   * Retriving data from server
   * If has error, auto recall after 1 second
   */

  var retrieveData = function retrieveData() {
    var promise1 = axios.get("/api/thu-chi/" + thuChi.id);
    var promise2 = axios.get("/api/thu-chi-chi-tiet/doi-tuong?tc=" + thuChi.id);
    console.log("Retrieving Danh Muc");
    Promise.all([promise1, promise2]).then(function (response) {
      if (response[0].data.success && response[1].data.success) {
        setState({
          thuChi: response[0].data.data,
          doiTuong: response[1].data.data
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
    tongCong.current = 0; // Để tính lại tong cong, trừ trường hợp ko còn record nào

    retrieveData();
  };

  var expandedRowRender = function expandedRowRender(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        margin: 0
      }
    }, record.chi_tiet);
  };

  var columns = [{
    title: "Loại đối tượng",
    dataIndex: "loai_doi_tuong",
    width: 120
  }, {
    title: "Số tiền",
    dataIndex: "so_tien",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(number);
    },
    width: 120,
    sorter: function sorter(a, b) {
      return a.so_tien - b.so_tien;
    }
  }, {
    title: "Chi tiết",
    dataIndex: "chi_tiet",
    ellipsis: true,
    width: 250
  }];

  var renderSummary = function renderSummary(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          so_tien: previousValue.so_tien + currentValue.so_tien
        };
      });
      tongCong.current = sumObj.so_tien;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: 3
      }, "T\u1ED5ng c\u1ED9ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: tongCong.current >= toiDa ? {
          color: "red"
        } : {}
      }, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(tongCong.current))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)));
    }
  };
  /**
   * Callback from FOrmItem, trigger when select Hang Hoa
   * => Change setFormValues to ListForm => FormEdit
   */


  var handleFormValue = function handleFormValue(so_tien) {
    if (so_tien > toiDa) so_tien = toiDa;
    setFormValue({
      so_tien: so_tien,
      resetFields: function resetFields() {
        return setFormValue(undefined);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-box"
  }, "Thu chi: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, thuChi.hang_muc), ". Ng\xE0y th\xE1ng:", " ", thuChi.ngay_thang, ", s\u1ED1 ti\u1EC1n", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(thuChi.so_tien)), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "L\u1ECDc c\xE1c \u0111\u1ED1i t\u01B0\u1EE3ng theo:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, thuChi.id_khach_hang !== null ? "Khách hàng: " + thuChi.ten_khach_hang + ", số dư: " + _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(thuChi.so_du_khach_hang) : "Tài khoản chi: " + thuChi.tai_khoan_di), ", n\u01A1i nh\u1EADn: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, thuChi.tai_khoan_den), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Gi\u1EDBi h\u1EA1n chi: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    color: "red"
  }, _utils__WEBPACK_IMPORTED_MODULE_3__["vndFormater"].format(toiDa))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "thu-chi-chi-tiet",
    filter: {
      tc: thuChi.id
    },
    otherParams: {
      id_thu_chi: thuChi.id
    },
    insertable: toiDa > 0,
    editable: false,
    columns: columns,
    modalWidth: "800px",
    formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onChangeValue: handleFormValue,
      doiTuong: doiTuong,
      toiDa: toiDa
    }),
    formInitialValues: {
      so_tien: 0
    },
    expandedRowRender: expandedRowRender,
    renderSummary: renderSummary,
    setFormValues: formValue,
    onChangeData: onChangeData
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(List));

/***/ })

}]);
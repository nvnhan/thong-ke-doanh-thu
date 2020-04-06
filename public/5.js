(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/pages/VeMayBay/SanBay/FormItem.js":
/*!********************************************************!*\
  !*** ./resources/js/pages/VeMayBay/SanBay/FormItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

function form() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "ma_san_bay",
    label: "M\xE3 s\xE2n bay",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "ten_san_bay",
    label: "T\xEAn s\xE2n bay",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "phan_loai",
    label: "Khu v\u1EF1c"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    allowClear: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "Ch\xE2u \xC2u"
  }, "Ch\xE2u \xC2u"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "Ch\xE2u \xDAc"
  }, "Ch\xE2u \xDAc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "\u0110\xF4ng B\u1EAFc \xC1"
  }, "\u0110\xF4ng B\u1EAFc \xC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "\u0110\xF4ng D\u01B0\u01A1ng"
  }, "\u0110\xF4ng D\u01B0\u01A1ng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "\u0110\xF4ng Nam \xC1"
  }, "\u0110\xF4ng Nam \xC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "Hoa K\u1EF3"
  }, "Hoa K\u1EF3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
    value: "Vi\u1EC7t Nam"
  }, "Vi\u1EC7t Nam"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    wrapperCol: {
      offset: 6,
      span: 18
    },
    name: "loai_a",
    valuePropName: "checked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], null, "S\xE2n bay lo\u1EA1i A")));
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/VeMayBay/SanBay/index.jsx":
/*!******************************************************!*\
  !*** ./resources/js/pages/VeMayBay/SanBay/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.jsx");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/VeMayBay/SanBay/FormItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var List = /*#__PURE__*/function (_PureComponent) {
  _inherits(List, _PureComponent);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",

    /**
     * Hàm render
     */
    value: function render() {
      var columns = [{
        title: "Mã sân bay",
        dataIndex: "ma_san_bay",
        optFind: true
      }, {
        title: "Tên sân bay",
        dataIndex: "ten_san_bay",
        optFind: true
      }, {
        title: "Khu vực",
        dataIndex: "phan_loai",
        optFilter: true
      }, {
        title: "Sân bay loại A",
        dataIndex: "loai_a",
        render: function render(bol) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
            checked: bol
          });
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        url: "san-bay",
        columns: columns,
        selectable: true,
        insertable: true,
        editable: true,
        deleteable: true,
        primaryKey: "id",
        formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      });
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/actions/index.js":
/*!***************************************!*\
  !*** ./resources/js/actions/index.js ***!
  \***************************************/
/*! exports provided: changeMenu, changeTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMenu", function() { return changeMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTitle", function() { return changeTitle; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./resources/js/constants/ActionTypes.js");
/* harmony import */ var _constants_SideMenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/SideMenus */ "./resources/js/constants/SideMenus.js");


var changeMenu = function changeMenu() {
  var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_SideMenus__WEBPACK_IMPORTED_MODULE_1__["HOME"];
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_MENU_ACTIVE"],
    menu: menu
  };
};
var changeTitle = function changeTitle(title) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PAGE_TITLE"],
    title: title
  };
};

/***/ }),

/***/ "./resources/js/components/Includes/ListForm.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Includes/ListForm.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\components\\Includes\\ListForm.jsx: Unexpected token, expected \";\" (210:67)\n\n\u001b[0m \u001b[90m 208 | \u001b[39m                    values[key] \u001b[33m=\u001b[39m value\u001b[33m.\u001b[39mformat(\u001b[32m\"YYYY-MM-DD HH:mm:ss\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 209 | \u001b[39m                \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m(\u001b[36mtypeof\u001b[39m value \u001b[33m===\u001b[39m \u001b[32m\"string\"\u001b[39m \u001b[33m&&\u001b[39m value\u001b[33m.\u001b[39mmatch(\u001b[35m/(.*?):(.*?)\\/(.*?)\\//g\u001b[39m))\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 210 | \u001b[39m                    values[key] \u001b[33m=\u001b[39m moment(value\u001b[33m,\u001b[39m \u001b[32m\"HH:mm DD/MM/YYYY\"\u001b[39m)format(\u001b[32m\"YYYY-MM-DD HH:mm:ss\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 211 | \u001b[39m        }\u001b[0m\n\u001b[0m \u001b[90m 212 | \u001b[39m        \u001b[90m// Thêm mới\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 213 | \u001b[39m        \u001b[36mif\u001b[39m (currentRecord \u001b[33m===\u001b[39m undefined) {\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Object.unexpected (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8757:16)\n    at Object.semicolon (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8739:40)\n    at Object.parseExpressionStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11614:10)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11215:19)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseIfStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11433:28)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11126:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseIfStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11434:51)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11126:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseIfStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11433:28)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11126:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseBlock (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11626:10)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11157:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11724:60\n    at Object.withTopicForbiddingContext (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10956:14)\n    at Object.parseForIn (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11724:22)\n    at Object.parseForStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11396:21)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11106:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseBlock (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11626:10)\n    at Object.parseFunctionBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10634:24)\n    at Object.parseArrowExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10603:10)\n    at Object.parseParenAndDistinguishExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10221:12)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9947:21)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4614:20)");

/***/ }),

/***/ "./resources/js/pages/ThongTin/TaiKhoan/FormItem.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/ThongTin/TaiKhoan/FormItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



function form() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "ky_hieu",
    label: "K\xFD hi\u1EC7u",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "mo_ta",
    label: "T\xEAn t\xE0i kho\u1EA3n",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "so_du_ky_truoc",
    label: "S\u1ED1 d\u01B0 ban \u0111\u1EA7u"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "ghi_chu",
    label: "Ghi ch\xFA"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./resources/js/pages/ThongTin/TaiKhoan/index.jsx":
/*!********************************************************!*\
  !*** ./resources/js/pages/ThongTin/TaiKhoan/index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ "./resources/js/actions/index.js");
/* harmony import */ var _constants_SideMenus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/SideMenus */ "./resources/js/constants/SideMenus.js");
/* harmony import */ var _components_Includes_ListForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Includes/ListForm */ "./resources/js/components/Includes/ListForm.jsx");
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/ThongTin/TaiKhoan/FormItem.js");
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onChangeMenu(_constants_SideMenus__WEBPACK_IMPORTED_MODULE_3__["TT_TAI_KHOAN"]);
      this.props.onChangeTitle("Tài khoản");
    }
    /**
     * Hàm render
     */

  }, {
    key: "render",
    value: function render() {
      var columns = [{
        title: "Ký hiệu",
        dataIndex: "ky_hieu",
        optFind: true
      }, {
        title: "Tên tài khoản",
        dataIndex: "mo_ta",
        optFind: true
      }, {
        title: "Số dư ban đầu",
        dataIndex: "so_du_ky_truoc",
        render: function render(number) {
          return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(number);
        }
      }, {
        title: "Ngày tạo",
        dataIndex: "ngay_tao"
      }, {
        title: "Ghi chú",
        dataIndex: "ghi_chu",
        ellipsis: true
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Includes_ListForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        url: "tai-khoan",
        columns: columns,
        selectable: true,
        insertable: true,
        editable: true,
        deleteable: true,
        primaryKey: "id",
        tableSize: {
          x: 600
        },
        formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormItem__WEBPACK_IMPORTED_MODULE_5__["default"], null)
      });
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
/**
 * Store trả state về thông qua connect
 * Connect dùng hàm này để map các state => props cho component
 */


var mapStatetoProps = function mapStatetoProps(state) {
  return {};
};
/**
 * Map dispatch ==> Props
 * Gọi hàm ở  props + biến => dispatch 1 action nào đó
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    onChangeMenu: function onChangeMenu(menu) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__["changeMenu"](menu));
    },
    onChangeTitle: function onChangeTitle(title) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__["changeTitle"](title));
    }
  };
};
/**
 * Connect của react-redux sẽ giao tiếp giữa store và component
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStatetoProps, mapDispatchToProps)(List));

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\resources\\js\\components\\Includes\\ListForm.jsx: Unexpected token (449:20)\n\n\u001b[0m \u001b[90m 447 | \u001b[39m        formRef\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mformRef}\u001b[0m\n\u001b[0m \u001b[90m 448 | \u001b[39m        formInitialValues\u001b[33m=\u001b[39m{formInitialValues}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 449 | \u001b[39m        formTemplate\u001b[33m,\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 450 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 451 | \u001b[39m        )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 452 | \u001b[39m    }\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.raise (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Object.unexpected (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8757:16)\n    at Object.jsxParseIdentifier (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4388:12)\n    at Object.jsxParseNamespacedName (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4398:23)\n    at Object.jsxParseAttribute (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4482:22)\n    at Object.jsxParseOpeningElementAfterName (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4503:28)\n    at Object.jsxParseOpeningElementAt (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4496:17)\n    at Object.jsxParseElementAt (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4528:33)\n    at Object.jsxParseElementAt (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4544:32)\n    at Object.jsxParseElement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4602:17)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4609:19)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9582:21)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9452:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9425:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9380:21)\n    at Object.parseParenAndDistinguishExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10193:28)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9947:21)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:4614:20)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9582:21)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9452:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9425:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9380:21)\n    at Object.parseExpression (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9332:23)\n    at Object.parseReturnStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11448:28)\n    at Object.parseStatementContent (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11129:21)\n    at Object.parseStatement (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Object.parseBlockBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Object.parseBlock (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:11626:10)\n    at Object.parseFunctionBody (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10634:24)\n    at Object.parseFunctionBodyAndFinish (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10617:10)\n    at Object.parseMethod (D:\\xampp\\htdocs\\2020\\thong-ke-doanh-thu\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10579:10)");

/***/ }),

/***/ "./resources/js/pages/VeMayBay/ThuePhi/FormItem.js":
/*!*********************************************************!*\
  !*** ./resources/js/pages/VeMayBay/ThuePhi/FormItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
function form() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "loai_phi",
    label: "Lo\u1EA1i ph\xED",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "muc_phi",
    label: "M\u1EE9c ph\xED",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 1000,
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

/***/ }),

/***/ "./resources/js/pages/VeMayBay/ThuePhi/index.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/pages/VeMayBay/ThuePhi/index.jsx ***!
  \*******************************************************/
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
/* harmony import */ var _FormItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormItem */ "./resources/js/pages/VeMayBay/ThuePhi/FormItem.js");
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
      this.props.onChangeMenu(_constants_SideMenus__WEBPACK_IMPORTED_MODULE_3__["VMB_THUE_PHI"]);
      this.props.onChangeTitle("Thuế phí");
    }
    /**
     * Hàm render
     */

  }, {
    key: "render",
    value: function render() {
      var columns = [{
        title: "Loại phí",
        dataIndex: "loai_phi",
        optFind: true
      }, {
        title: "Mức phí",
        dataIndex: "muc_phi",
        render: function render(number) {
          return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
          }).format(number);
        }
      }, {
        title: "Ghi chú",
        dataIndex: "ghi_chu",
        ellipsis: true
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Includes_ListForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        url: "thue-phi",
        columns: columns,
        selectable: false,
        insertable: false,
        editable: true,
        deleteable: false,
        primaryKey: "id",
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
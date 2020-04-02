(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/pages/VeMayBay/SanBay/test.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/pages/VeMayBay/SanBay/test.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ "./resources/js/actions/index.js");
/* harmony import */ var _constants_SideMenus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/SideMenus */ "./resources/js/constants/SideMenus.js");
/* harmony import */ var _components_Includes_ListForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Includes/ListForm */ "./resources/js/components/Includes/ListForm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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
      this.props.onChangeMenu(_constants_SideMenus__WEBPACK_IMPORTED_MODULE_3__["VMB_SAN_BAY"]);
      this.props.onChangeTitle("Sân bay");
    }
    /**
     * Hàm render
     */

  }, {
    key: "render",
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
        render: function render(text) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
            checked: text === 1
          });
        }
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Includes_ListForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        url: "san-bay",
        columns: columns,
        selectable: true,
        addNew: true,
        editable: true,
        deleteable: true,
        primaryKey: "ma_san_bay",
        formTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "S\u1EEDa s\xE2n bay")
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
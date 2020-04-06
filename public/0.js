(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListForm/ToolsButton.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/js/components/ListForm/ToolsButton.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* Button trong form danh mục */\n.tools-button {\n  padding-left: 5px;\n}\n.tools-button button {\n  margin: 10px 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/ListForm/DataTable.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/ListForm/DataTable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var DataTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var selectedRowKeys = props.selectedRowKeys;
  var scroll = props.tableSize || {
    x: 500
  };
  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: props.onChangeSelect
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dataSource: props.data,
    columns: props.columns,
    loading: props.isLoading,
    rowKey: function rowKey(row) {
      return row[props.primaryKey];
    },
    rowSelection: props.selectable ? rowSelection : null,
    locale: {
      filterConfirm: "Lọc",
      filterReset: "Hủy",
      emptyText: "Không có dữ liệu"
    },
    scroll: scroll
  });
});
/* harmony default export */ __webpack_exports__["default"] = (DataTable);

/***/ }),

/***/ "./resources/js/components/ListForm/FormEdit.js":
/*!******************************************************!*\
  !*** ./resources/js/components/ListForm/FormEdit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var FormEdit = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    if (props.currentRecord !== undefined) props.form.setFieldsValue(props.currentRecord);else props.form.resetFields();
  }); // Alway run while each render

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: props.form,
    initialValues: props.formInitialValues,
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }, props.formTemplate);
});
/* harmony default export */ __webpack_exports__["default"] = (FormEdit);

/***/ }),

/***/ "./resources/js/components/ListForm/ModalConfirm.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/ListForm/ModalConfirm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _FormEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormEdit */ "./resources/js/components/ListForm/FormEdit.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ModalConfirm = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var handleOk = function handleOk() {
    form.validateFields().then(function (value) {
      props.handleOk(value);
    })["catch"](function (info) {
      console.log("Validate Failed: ", info);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    width: props.modalWidth,
    visible: props.modalVisible,
    title: "Chi ti\u1EBFt",
    onOk: handleOk,
    onCancel: props.handleCancel,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "back",
      onClick: props.handleCancel
    }, "H\u1EE7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "submit",
      type: "primary",
      loading: props.formSubmiting,
      onClick: handleOk
    }, "\u0110\u1ED3ng \xFD")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormEdit__WEBPACK_IMPORTED_MODULE_2__["default"], {
    form: form,
    formInitialValues: props.formInitialValues,
    currentRecord: props.currentRecord,
    formTemplate: props.formTemplate
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ModalConfirm);

/***/ }),

/***/ "./resources/js/components/ListForm/ToolsButton.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/ListForm/ToolsButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ToolsButton_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolsButton.scss */ "./resources/js/components/ListForm/ToolsButton.scss");
/* harmony import */ var _ToolsButton_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ToolsButton_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Dùng React.memo để lưu lại Component, ko bị load lại trừ trường hợp cần thiết
 */

var ToolsButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tools-button"
  }, props.insertable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: props.handleAddNew
  }, "Th\xEAm m\u1EDBi") : "", props.selectable && props.deleteable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, props.selectedRowKeys.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "danger",
    onClick: props.onMultiDelete
  }, "X\xF3a ", props.selectedRowKeys.length, " m\u1EE5c \u0111\xE3 ch\u1ECDn") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    onClick: props.handleSelectAll
  }, "Ch\u1ECDn t\u1EA5t c\u1EA3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "link",
    danger: true,
    onClick: props.handleClearSelected
  }, "B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3")) : "");
});
/* harmony default export */ __webpack_exports__["default"] = (ToolsButton);

/***/ }),

/***/ "./resources/js/components/ListForm/ToolsButton.scss":
/*!***********************************************************!*\
  !*** ./resources/js/components/ListForm/ToolsButton.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./ToolsButton.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListForm/ToolsButton.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/ListForm/index.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/ListForm/index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ToolsButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToolsButton */ "./resources/js/components/ListForm/ToolsButton.js");
/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataTable */ "./resources/js/components/ListForm/DataTable.js");
/* harmony import */ var _ModalConfirm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalConfirm */ "./resources/js/components/ListForm/ModalConfirm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var confirm = antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].confirm;






var ListForm = /*#__PURE__*/function (_PureComponent) {
  _inherits(ListForm, _PureComponent);

  var _super = _createSuper(ListForm);

  function ListForm(props) {
    var _this;

    _classCallCheck(this, ListForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addColumn", function () {
      var _this$props = _this.props,
          editable = _this$props.editable,
          deleteable = _this$props.deleteable,
          primaryKey = _this$props.primaryKey;
      if (editable || deleteable) return {
        title: "",
        key: "action",
        fixed: "right",
        align: "center",
        width: 100,
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, editable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "link",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EditOutlined"], null),
            onClick: function onClick() {
              return _this.handleEdit(record);
            }
          }) : "", deleteable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: function onClick() {
              return _this.onDelete(record[primaryKey]);
            },
            danger: true,
            type: "link",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteOutlined"], null)
          }) : "");
        }
      };
      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "isChangeData", function (record, data) {
      var key1 = Object.keys(record);
      var key2 = Object.keys(data);
      var isChanged = false;

      for (var _i = 0, _key = key1; _i < _key.length; _i++) {
        var k = _key[_i];

        if (key2.indexOf(k) >= 0 && record[k] !== data[k]) {
          isChanged = true;
          break;
        }
      }

      return isChanged;
    });

    _defineProperty(_assertThisInitialized(_this), "getColumnSearchProps", function (dataIndex) {
      return {
        filterDropdown: function filterDropdown(_ref) {
          var setSelectedKeys = _ref.setSelectedKeys,
              selectedKeys = _ref.selectedKeys,
              confirm = _ref.confirm,
              clearFilters = _ref.clearFilters;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              padding: 8
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            ref: function ref(node) {
              _this.searchInput = node;
            },
            placeholder: "T\xECm ki\u1EBFm...",
            value: selectedKeys[0],
            onChange: function onChange(e) {
              return setSelectedKeys(e.target.value ? [e.target.value] : []);
            },
            onPressEnter: function onPressEnter() {
              return _this.handleSearch(selectedKeys, confirm, dataIndex);
            },
            style: {
              width: 188,
              marginBottom: 8,
              display: "block"
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "primary",
            onClick: function onClick() {
              return _this.handleSearch(selectedKeys, confirm, dataIndex);
            },
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SearchOutlined"], null),
            size: "small",
            style: {
              width: 90,
              marginRight: 8
            }
          }, "T\xECm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: function onClick() {
              return _this.handleReset(clearFilters);
            },
            size: "small",
            style: {
              width: 90
            }
          }, "H\u1EE7y"));
        },
        filterIcon: function filterIcon(filtered) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SearchOutlined"], {
            style: {
              color: filtered ? "#1890ff" : undefined
            }
          });
        },
        onFilter: function onFilter(value, record) {
          return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
        },
        onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
          if (visible) {
            setTimeout(function () {
              return _this.searchInput.select();
            });
          }
        },
        render: function render(text) {
          return _this.state.searchedColumn === dataIndex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default.a, {
            highlightStyle: {
              backgroundColor: "#ffc069",
              padding: 0
            },
            searchWords: [_this.state.searchText],
            autoEscape: true,
            textToHighlight: text.toString()
          }) : text;
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (selectedKeys, confirm, dataIndex) {
      confirm();

      _this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleReset", function (clearFilters) {
      clearFilters();

      _this.setState({
        searchText: "",
        selectedRowKeys: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOk", function (values) {
      var currentRecord = _this.state.currentRecord;

      _this.setState({
        formSubmiting: true
      }); // Parse các ô ngày tháng


      for (var _i2 = 0, _Object$entries = Object.entries(values); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (value !== null && value !== undefined) if (_typeof(value) === "object") values[key] = value.format("YYYY-MM-DD HH:mm:ss");else if (typeof value === "string" && value.match(/(.*?):(.*?)\/(.*?)\//g)) values[key] = moment__WEBPACK_IMPORTED_MODULE_5___default()(value, "HH:mm DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss");
      } // Thêm mới


      if (currentRecord === undefined) {
        _this.onAdd(values);
      } else if (_this.isChangeData(currentRecord, values)) {
        // Chỉnh sửa
        _this.onUpdate(values);
      } // Tắt loading & modal


      _this.setState({
        formSubmiting: false,
        modalVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        modalVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddNew", function () {
      _this.setState({
        currentRecord: undefined,
        modalVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEdit", function (record) {
      _this.setState({
        modalVisible: true,
        currentRecord: record
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAll", function () {
      var primaryKey = _this.props.primaryKey;
      var data = _this.state.data;

      _this.setState({
        selectedRowKeys: data.map(function (item) {
          return item[primaryKey];
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearSelected", function () {
      _this.setState({
        selectedRowKeys: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectRow", function (selectedRowKeys) {
      return _this.setState({
        selectedRowKeys: selectedRowKeys
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (value) {
      var url = _this.props.url;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/".concat(url), value).then(function (response) {
        if (response.data.success) {
          _this.setState({
            data: [].concat(_toConsumableArray(_this.state.data), [response.data.data]) // Thêm object vào list lấy từ state

          });

          antd__WEBPACK_IMPORTED_MODULE_2__["message"].info(response.data.message);
          if (_this.props.onChangeData) _this.props.onChangeData(_this.state.data);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUpdate", function (value) {
      var _this$props2 = _this.props,
          url = _this$props2.url,
          primaryKey = _this$props2.primaryKey;
      var _this$state = _this.state,
          data = _this$state.data,
          currentRecord = _this$state.currentRecord;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/".concat(url, "/").concat(currentRecord[primaryKey]), value).then(function (response) {
        if (response.data.success) {
          var newData = [];
          Object.assign(newData, data.map(function (el) {
            return el[primaryKey] === currentRecord[primaryKey] ? response.data.data : el;
          }));

          _this.setState({
            data: newData
          });

          if (_this.props.onChangeData) _this.props.onChangeData(data);
          antd__WEBPACK_IMPORTED_MODULE_2__["message"].info(response.data.message);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (id) {
      var _this$props3 = _this.props,
          url = _this$props3.url,
          primaryKey = _this$props3.primaryKey;
      var data = _this.state.data;
      confirm({
        title: "Bạn muốn xóa mục này?",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ExclamationCircleOutlined"], null),
        content: "Thao tác không thể khôi phục",
        okText: "Đồng ý",
        okType: "danger",
        cancelText: "Không",
        onOk: function onOk() {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/".concat(url, "/").concat(id)).then(function (response) {
            if (response.data.success) {
              _this.setState({
                data: data.filter(function (item) {
                  return item[primaryKey] !== id;
                })
              });

              antd__WEBPACK_IMPORTED_MODULE_2__["message"].info(response.data.message);
              if (_this.props.onChangeData) _this.props.onChangeData(_this.state.data);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMultiDelete", function () {
      var _this$state2 = _this.state,
          selectedRowKeys = _this$state2.selectedRowKeys,
          data = _this$state2.data;
      var _this$props4 = _this.props,
          url = _this$props4.url,
          primaryKey = _this$props4.primaryKey;
      confirm({
        title: "Bạn muốn xóa những mục này?",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ExclamationCircleOutlined"], null),
        content: "Tất cả " + selectedRowKeys.length + " mục",
        okText: "Đồng ý",
        okType: "danger",
        cancelText: "Không",
        onOk: function onOk() {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/".concat(url, "/deletes"), {
            params: {
              objects: selectedRowKeys.join("|")
            }
          }).then(function (response) {
            if (response.data.success) {
              _this.setState({
                data: data.filter(function (item) {
                  return selectedRowKeys.indexOf(item[primaryKey]) === -1;
                }),
                selectedRowKeys: []
              });

              if (_this.props.onChangeData) _this.props.onChangeData(_this.state.data);
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].info(response.data.message);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getColumn", function (column, data) {
      if (column.optFilter) {
        // Lọc dữ liệu và mô tả các cột dữ liệu
        var objs = _toConsumableArray(new Set(data.map(function (x) {
          return x[column.dataIndex];
        })));

        var filters = objs.map(function (el) {
          return {
            text: el,
            value: el
          };
        });
        Object.assign(column, {
          filters: filters,
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: function onFilter(value, record) {
            return record[dataIndex].indexOf(value) === 0;
          }
        });
      }

      if (column.optFind) {
        Object.assign(column, _objectSpread({}, _this.getColumnSearchProps(column.dataIndex)));
      }

      return column;
    });

    _this.state = {
      data: [],
      isLoading: true,
      searchText: "",
      searchedColumn: "",
      modalVisible: false,
      formSubmiting: false,
      selectedRowKeys: [],
      currentRecord: undefined
    };
    _this.columns = [];
    _this.isComponentMounted = false;
    return _this;
  }

  _createClass(ListForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isComponentMounted = true;
      var _this$props5 = this.props,
          url = _this$props5.url,
          columns = _this$props5.columns;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/" + url).then(function (response) {
        if (_this2.isComponentMounted && response.data.success) {
          /**
           * Tính các cột cần thiết
           * Chạy 1 lần duy nhất
           */
          _this2.columns = columns.map(function (column) {
            return _this2.getColumn(column, response.data.data);
          });

          _this2.columns.push(_this2.addColumn());

          _this2.setState({
            data: response.data.data,
            isLoading: false
          });

          if (_this2.props.onChangeData) _this2.props.onChangeData(response.data.data);
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isComponentMounted = false;
    }
  }, {
    key: "render",

    /**
     * Hàm render
     */
    value: function render() {
      var _this$state3 = this.state,
          data = _this$state3.data,
          isLoading = _this$state3.isLoading,
          modalVisible = _this$state3.modalVisible,
          formSubmiting = _this$state3.formSubmiting,
          selectedRowKeys = _this$state3.selectedRowKeys,
          currentRecord = _this$state3.currentRecord;
      var _this$props6 = this.props,
          selectable = _this$props6.selectable,
          insertable = _this$props6.insertable,
          deleteable = _this$props6.deleteable,
          primaryKey = _this$props6.primaryKey,
          formTemplate = _this$props6.formTemplate,
          formInitialValues = _this$props6.formInitialValues,
          tableSize = _this$props6.tableSize,
          modalWidth = _this$props6.modalWidth;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToolsButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        insertable: insertable,
        selectable: selectable,
        deleteable: deleteable,
        handleAddNew: this.handleAddNew,
        onMultiDelete: this.onMultiDelete,
        selectedRowKeys: selectedRowKeys,
        handleSelectAll: this.handleSelectAll,
        handleClearSelected: this.handleClearSelected
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: data,
        columns: this.columns,
        isLoading: isLoading,
        primaryKey: primaryKey,
        selectable: selectable,
        selectedRowKeys: selectedRowKeys,
        onChangeSelect: this.handleSelectRow,
        scroll: tableSize
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalConfirm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        modalVisible: modalVisible,
        modalWidth: modalWidth,
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        formSubmiting: formSubmiting,
        currentRecord: currentRecord,
        formInitialValues: formInitialValues,
        formTemplate: formTemplate
      }));
    }
  }]);

  return ListForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

ListForm.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object).isRequired,
  formTemplate: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node.isRequired,
  onChangeData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  insertable: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  deleteable: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  primaryKey: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  tableSize: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number
  }),
  modalWidth: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number]),
  formInitialValues: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
}; // Specifies the default values for props:

ListForm.defaultProps = {
  selectable: true,
  insertable: true,
  editable: true,
  deleteable: true,
  primaryKey: "id",
  tableSize: {
    x: 500
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ListForm);

/***/ })

}]);
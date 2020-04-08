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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var DataTable = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var selectedRowKeys = props.selectedRowKeys,
      data = props.data,
      isLoading = props.isLoading,
      columns = props.columns,
      selectable = props.selectable,
      editable = props.editable,
      deleteable = props.deleteable,
      primaryKey = props.primaryKey,
      tableSize = props.tableSize,
      onDelete = props.onDelete,
      handleEdit = props.handleEdit,
      onChangeSelect = props.onChangeSelect,
      otherActions = props.otherActions,
      _expandedRowRender = props.expandedRowRender;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      myColumns = _useState2[0],
      setMyColumns = _useState2[1];

  var searchText = "";
  var searchedColumn = "";
  var searchInput;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!_.isEmpty(data)) setMyColumns(calColumns());
  }, [isLoading]); // Chỉ chạy khi data thay đổi

  /**
   * Tính các cột cần thiết
   */

  var calColumns = function calColumns() {
    var cols = columns.map(function (column) {
      return getColumn(column, data);
    });
    if (editable || deleteable || !_.isEmpty(otherActions)) cols.push(addActionColumn());
    return cols;
  };

  var layAction = function layAction(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, !_.isEmpty(otherActions) ? otherActions.map(function (act) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: act.key,
        onClick: function onClick() {
          return act.onClick(record);
        },
        style: {
          color: act.color
        }
      }, act.icon, " ", act.title);
    }) : "", editable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "edit",
      onClick: function onClick() {
        return handleEdit(record);
      },
      style: {
        color: "#1890ff"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutlined"], null), " Ch\u1EC9nh s\u1EEDa") : "", deleteable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "delete",
      onClick: function onClick() {
        return onDelete(record[primaryKey]);
      },
      style: {
        color: "#ff4d4f"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DeleteOutlined"], null), " X\xF3a") : "");
  };
  /**
   * Thêm cột chức năng cho table
   */


  var addActionColumn = function addActionColumn() {
    return {
      title: "",
      key: "action",
      fixed: "right",
      align: "center",
      width: 80,
      render: function render(text, record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
          overlay: layAction(record)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MenuOutlined"], null)));
      }
    };
  };
  /**
   * Create column for ant's table
   */


  var getColumn = function getColumn(column, data) {
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
          return record[column.dataIndex].indexOf(value) === 0;
        }
      });
    } else if (column.optFind) {
      Object.assign(column, _objectSpread({}, getColumnSearchProps(column.dataIndex)));
    }

    return column;
  };
  /**
   * Thao tác tìm kiếm trên cột
   */


  var getColumnSearchProps = function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: function filterDropdown(_ref) {
        var setSelectedKeys = _ref.setSelectedKeys,
            selectedKeys = _ref.selectedKeys,
            confirm = _ref.confirm,
            clearFilters = _ref.clearFilters;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            padding: 8
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          ref: function ref(node) {
            searchInput = node;
          },
          placeholder: "T\xECm ki\u1EBFm...",
          value: selectedKeys[0],
          onChange: function onChange(e) {
            return setSelectedKeys(e.target.value ? [e.target.value] : []);
          },
          onPressEnter: function onPressEnter() {
            return handleSearch(selectedKeys, confirm, dataIndex);
          },
          style: {
            width: 188,
            marginBottom: 8,
            display: "block"
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          onClick: function onClick() {
            return handleSearch(selectedKeys, confirm, dataIndex);
          },
          icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["SearchOutlined"], null),
          size: "small",
          style: {
            width: 90,
            marginRight: 8
          }
        }, "T\xECm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: function onClick() {
            return handleReset(clearFilters);
          },
          size: "small",
          style: {
            width: 90
          }
        }, "H\u1EE7y"));
      },
      filterIcon: function filterIcon(filtered) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["SearchOutlined"], {
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
            return searchInput.select();
          });
        }
      },
      render: function render(text) {
        return searchedColumn === dataIndex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default.a, {
          highlightStyle: {
            backgroundColor: "#ffc069",
            padding: 0
          },
          searchWords: [searchText],
          autoEscape: true,
          textToHighlight: text.toString()
        }) : text;
      }
    };
  };

  var handleSearch = function handleSearch(selectedKeys, confirm, dataIndex) {
    confirm();
    searchedColumn = dataIndex;
    searchText = selectedKeys[0];
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    searchedColumn = "";
    searchText = "";
  };

  var rowSelection = {
    selectedRowKeys: selectedRowKeys,
    onChange: onChangeSelect
  };

  var getExpanded = function getExpanded() {
    if (_expandedRowRender) return {
      expandedRowRender: function expandedRowRender(record) {
        return _expandedRowRender(record);
      }
    };
    return null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dataSource: data,
    columns: myColumns,
    loading: isLoading,
    rowKey: function rowKey(row) {
      return row[props.primaryKey];
    },
    rowSelection: selectable ? rowSelection : null,
    locale: {
      filterConfirm: "Lọc",
      filterReset: "Hủy",
      emptyText: "Không có dữ liệu"
    },
    scroll: tableSize,
    expandable: getExpanded()
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

/***/ "./resources/js/components/ListForm/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/ListForm/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataTable */ "./resources/js/components/ListForm/DataTable.js");
/* harmony import */ var _ModalConfirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalConfirm */ "./resources/js/components/ListForm/ModalConfirm.js");
/* harmony import */ var _ToolsButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToolsButton */ "./resources/js/components/ListForm/ToolsButton.js");
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









var confirm = antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm;

function useMergeState(initialState) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setMergedState = function setMergedState(newState) {
    return setState(function (prevState) {
      return Object.assign({}, prevState, newState);
    });
  };

  return [state, setMergedState];
}

function queryString(obj) {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
}

var ListForm = function ListForm(props) {
  var _useMergeState = useMergeState({
    data: [],
    isLoading: true,
    modalVisible: false,
    formSubmiting: false,
    selectedRowKeys: [],
    currentRecord: undefined
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var url = props.url,
      onChangeData = props.onChangeData,
      columns = props.columns,
      selectable = props.selectable,
      insertable = props.insertable,
      editable = props.editable,
      deleteable = props.deleteable,
      primaryKey = props.primaryKey,
      formTemplate = props.formTemplate,
      formInitialValues = props.formInitialValues,
      tableSize = props.tableSize,
      modalWidth = props.modalWidth,
      otherActions = props.otherActions,
      expandedRowRender = props.expandedRowRender,
      filter = props.filter;
  var data = state.data,
      isLoading = state.isLoading,
      modalVisible = state.modalVisible,
      formSubmiting = state.formSubmiting,
      selectedRowKeys = state.selectedRowKeys,
      currentRecord = state.currentRecord;
  var isComponentMounted = false;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    isComponentMounted = true; // Không Có filter hoặc có filter và đã load xong

    if (filter === undefined || !_.isEmpty(filter)) {
      // Set lại data và loading cho các Component con
      setState({
        data: [],
        isLoading: true
      });
      axios.get("/api/" + url + "?" + queryString(filter)).then(function (response) {
        if (isComponentMounted && response.data.success) {
          setState({
            data: response.data.data,
            isLoading: false
          }); //  Tính lại AutoComplete (nhúng trong Modal form) cho 1 số form

          if (onChangeData) onChangeData(response.data.data);
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    }

    return function () {
      isComponentMounted = false;
    };
  }, [filter]); // Chỉ chạy 1 lần khi mount component

  /**
   * Check liệu dữ liệu người dùng sửa có thay đổi gì ko?
   */

  var isChangeData = function isChangeData(record, data) {
    var key1 = Object.keys(record);
    var key2 = Object.keys(data);
    var isChanged = false;

    for (var _i2 = 0, _key = key1; _i2 < _key.length; _i2++) {
      var k = _key[_i2];

      if (key2.indexOf(k) >= 0 && record[k] !== data[k]) {
        isChanged = true;
        break;
      }
    }

    return isChanged;
  };
  /**
   * Show modal Thêm mới, Sửa
   */


  var handleOk = function handleOk(values) {
    setState({
      formSubmiting: true
    }); // Parse các ô ngày tháng

    for (var _i3 = 0, _Object$entries = Object.entries(values); _i3 < _Object$entries.length; _i3++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value !== null && value !== undefined) if (_typeof(value) === "object") // Convert từ moment (from DatePicker) về dạng string để backend xử lý
        values[key] = value.format("YYYY-MM-DD HH:mm:ss");else if (typeof value === "string" && value.match(/(.*?):(.*?)\/(.*?)\//g)) values[key] = moment__WEBPACK_IMPORTED_MODULE_2___default()(value, "HH:mm DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss"); //TODO: Trường hợp chỉ có ngày
    } // Thêm mới


    if (currentRecord === undefined) {
      onAdd(values);
    } else if (isChangeData(currentRecord, values)) {
      // Chỉnh sửa
      onUpdate(values);
    } // Tắt loading & modal


    setState({
      formSubmiting: false,
      modalVisible: false
    });
  };

  var handleCancel = function handleCancel() {
    setState({
      modalVisible: false
    });
  };
  /**
   * Xử lý sự kiện người dùng
   */


  var handleAddNew = function handleAddNew() {
    setState({
      currentRecord: undefined,
      modalVisible: true
    });
  };

  var handleEdit = function handleEdit(record) {
    setState({
      modalVisible: true,
      currentRecord: record
    });
  };

  var handleSelectAll = function handleSelectAll() {
    setState({
      selectedRowKeys: data.map(function (item) {
        return item[primaryKey];
      })
    });
  };

  var handleClearSelected = function handleClearSelected() {
    setState({
      selectedRowKeys: []
    });
  };
  /**
   * Thực thi các sự kiện
   */


  var onChangeSelect = function onChangeSelect(selectedRowKeys) {
    return setState({
      selectedRowKeys: selectedRowKeys
    });
  };

  var onAdd = function onAdd(value) {
    axios.post("/api/".concat(url), value).then(function (response) {
      if (response.data.success) {
        setState({
          data: [].concat(_toConsumableArray(data), [response.data.data]) // Thêm object vào list lấy từ state

        });
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
        if (onChangeData) onChangeData(data);
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var onUpdate = function onUpdate(value) {
    axios.put("/api/".concat(url, "/").concat(currentRecord[primaryKey]), value).then(function (response) {
      if (response.data.success) {
        var newData = [];
        Object.assign(newData, data.map(function (el) {
          return el[primaryKey] === currentRecord[primaryKey] ? response.data.data : el;
        }));
        setState({
          data: newData
        });
        if (onChangeData) onChangeData(data);
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var onDelete = function onDelete(id) {
    confirm({
      title: "Bạn muốn xóa mục này?",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["ExclamationCircleOutlined"], null),
      content: "Thao tác không thể khôi phục",
      okText: "Đồng ý",
      okType: "danger",
      cancelText: "Không",
      onOk: function onOk() {
        axios["delete"]("/api/".concat(url, "/").concat(id)).then(function (response) {
          if (response.data.success) {
            setState({
              data: data.filter(function (item) {
                return item[primaryKey] !== id;
              })
            });
            antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
            if (onChangeData) onChangeData(data);
          }
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    });
  };

  var onMultiDelete = function onMultiDelete() {
    confirm({
      title: "Bạn muốn xóa những mục này?",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["ExclamationCircleOutlined"], null),
      content: "Tất cả " + selectedRowKeys.length + " mục",
      okText: "Đồng ý",
      okType: "danger",
      cancelText: "Không",
      onOk: function onOk() {
        axios["delete"]("/api/".concat(url, "/deletes"), {
          params: {
            objects: selectedRowKeys.join("|")
          }
        }).then(function (response) {
          if (response.data.success) {
            setState({
              data: data.filter(function (item) {
                return selectedRowKeys.indexOf(item[primaryKey]) === -1;
              }),
              selectedRowKeys: []
            });
            if (onChangeData) onChangeData(data);
            antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
          }
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ToolsButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    insertable: insertable,
    selectable: selectable,
    deleteable: deleteable,
    handleAddNew: handleAddNew,
    onMultiDelete: onMultiDelete,
    selectedRowKeys: selectedRowKeys,
    handleSelectAll: handleSelectAll,
    handleClearSelected: handleClearSelected
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    columns: columns,
    isLoading: isLoading,
    primaryKey: primaryKey,
    selectable: selectable,
    editable: editable,
    deleteable: deleteable,
    selectedRowKeys: selectedRowKeys,
    onChangeSelect: onChangeSelect,
    tableSize: tableSize,
    handleEdit: handleEdit,
    onDelete: onDelete,
    otherActions: otherActions,
    expandedRowRender: expandedRowRender
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ModalConfirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    modalVisible: modalVisible,
    modalWidth: modalWidth,
    handleOk: handleOk,
    handleCancel: handleCancel,
    formSubmiting: formSubmiting,
    currentRecord: currentRecord,
    formInitialValues: formInitialValues,
    formTemplate: formTemplate
  }));
};

ListForm.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object).isRequired,
  formTemplate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  onChangeData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  insertable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  deleteable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  primaryKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  tableSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  }),
  modalWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  formInitialValues: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  otherActions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })),
  otherButtons: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })),
  expandedRowRender: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
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
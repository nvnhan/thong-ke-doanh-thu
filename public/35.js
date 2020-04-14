(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListForm/FilterBox.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/ListForm/FilterBox.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Filter Box */\n.filter-box .ant-form-item {\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListForm/ToolsButton.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/ListForm/ToolsButton.scss ***!
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
      _expandedRowRender = props.expandedRowRender,
      renderFooter = props.renderFooter,
      renderSummary = props.renderSummary;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      myColumns = _useState2[0],
      setMyColumns = _useState2[1];

  var searchText = "";
  var searchedColumn = "";
  var searchInput; // Chỉ chạy khi load lại data từ List Form:
  // + mở form (cho dù có dữ liệu hay ko)
  // + set filter
  // Ko áp dụng khi thêm mới hoặc chỉnh sửa data => Phần Lọc dữ liệu cột KHÔNG ĐƯỢC TÍNH LẠI

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // if (!_.isEmpty(data))
    setMyColumns(calColumns());
  }, [isLoading]);
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
   * Thêm cột chức năng cho table
   */


  var addActionColumn = function addActionColumn() {
    return {
      title: "",
      key: "action",
      fixed: "right",
      align: "center",
      width: 72,
      render: function render(text, record) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
          overlay: layAction(record)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MenuOutlined"], null)));
      }
    };
  };

  var layAction = function layAction(record) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, !_.isEmpty(otherActions) && otherActions.map(function (act) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: act.key,
        onClick: function onClick() {
          return act.onClick(record);
        },
        style: {
          color: act.color
        }
      }, act.icon, " ", act.title);
    }), editable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "edit",
      onClick: function onClick() {
        return handleEdit(record);
      },
      className: "color-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutlined"], null), " Ch\u1EC9nh s\u1EEDa"), deleteable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "delete",
      onClick: function onClick() {
        return onDelete(record[primaryKey]);
      },
      className: "color-danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["DeleteOutlined"], null), " X\xF3a"));
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
    onChange: onChangeSelect,
    hideDefaultSelections: true,
    columnWidth: 50,
    selections: [antd__WEBPACK_IMPORTED_MODULE_1__["Table"].SELECTION_ALL, antd__WEBPACK_IMPORTED_MODULE_1__["Table"].SELECTION_INVERT, {
      key: "invert_all",
      text: "Bỏ chọn tất cả",
      onSelect: function onSelect() {
        return onChangeSelect([]);
      }
    }]
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
      emptyText: "Không có dữ liệu",
      cancelSort: "CLick để Bỏ sắp xếp",
      triggerAsc: "Click để Sắp xếp tăng dần",
      triggerDesc: "Click để Sắp xếp giảm dần",
      selectionAll: "Chọn tất cả dữ liệu",
      selectInvert: "Đảo chọn trang hiện tại"
    },
    scroll: tableSize,
    expandable: getExpanded(),
    footer: renderFooter ? function () {
      return renderFooter(data);
    } : undefined,
    summary: renderSummary ? function () {
      return renderSummary(data);
    } : undefined
  });
});
/* harmony default export */ __webpack_exports__["default"] = (DataTable);

/***/ }),

/***/ "./resources/js/components/ListForm/FilterBox.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/ListForm/FilterBox.js ***!
  \*******************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FilterBox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBox.scss */ "./resources/js/components/ListForm/FilterBox.scss");
/* harmony import */ var _FilterBox_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBox_scss__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var RangePicker = antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"].RangePicker;
var FilterBox = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(function (props) {
  var onFilter = props.onFilter,
      tuNgayDenNgay = props.tuNgayDenNgay,
      otherFilter = props.otherFilter,
      filterInitialValue = props.filterInitialValue;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    form.setFieldsValue(_objectSpread({}, filterInitialValue, {
      thoiGian: [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("month"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("month")]
    }));
  }, []);

  var onFinish = function onFinish() {
    var values = form.getFieldsValue();

    if (values.hasOwnProperty("thoiGian")) {
      values = Object.assign(values, {
        bat_dau: values.thoiGian[0],
        ket_thuc: values.thoiGian[1]
      });
      delete values.thoiGian;
    }

    onFilter(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseValues"])(values));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "filter-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: form,
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [5, 5]
  }, tuNgayDenNgay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    md: 16,
    lg: 8,
    xl: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "thoiGian",
    label: "Th\u1EDDi gian"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RangePicker, {
    locale: antd_es_date_picker_locale_vi_VN__WEBPACK_IMPORTED_MODULE_2__["default"],
    style: {
      width: "100%"
    },
    ranges: {
      "Hôm nay": [moment__WEBPACK_IMPORTED_MODULE_3___default()(), moment__WEBPACK_IMPORTED_MODULE_3___default()()],
      "Tuần này": [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("week"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("week")],
      "Tháng này": [moment__WEBPACK_IMPORTED_MODULE_3___default()().startOf("month"), moment__WEBPACK_IMPORTED_MODULE_3___default()().endOf("month")]
    },
    format: "DD/MM/YYYY" // bordered={false}
    ,
    placeholder: ["Từ ngày", "đến ngày"]
  }))), !_.isEmpty(otherFilter) && otherFilter.map(function (filter) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 12,
      md: 8,
      lg: 6,
      xl: 5,
      key: filter.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: filter.name,
      label: filter.label
    }, filter.render));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    md: 8,
    lg: 6,
    xl: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    htmlType: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["FilterOutlined"], null), "L\u1ECDc")))));
});
/* harmony default export */ __webpack_exports__["default"] = (FilterBox);

/***/ }),

/***/ "./resources/js/components/ListForm/FilterBox.scss":
/*!*********************************************************!*\
  !*** ./resources/js/components/ListForm/FilterBox.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./FilterBox.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListForm/FilterBox.scss");

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

/***/ "./resources/js/components/ListForm/FormEdit.js":
/*!******************************************************!*\
  !*** ./resources/js/components/ListForm/FormEdit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var FormEdit = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var form = props.form,
      formInitialValues = props.formInitialValues,
      currentRecord = props.currentRecord,
      setFormValues = props.setFormValues,
      formTemplate = props.formTemplate,
      modalVisible = props.modalVisible;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    if (modalVisible) {
      // Khi chọn select từ FormItem
      if (setFormValues !== undefined) form.setFieldsValue(setFormValues); // Khi mở modal render record khác
      else if (currentRecord !== undefined) form.setFieldsValue(currentRecord);
    } // tắt mdoal đi thì reset lại
    else {
        form.resetFields();
        if (setFormValues !== undefined && setFormValues.resetFields !== undefined) setFormValues.resetFields();
      }
  }); // Always run while render

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    form: form,
    initialValues: formInitialValues,
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  }, formTemplate);
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _FormEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormEdit */ "./resources/js/components/ListForm/FormEdit.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var ModalConfirm = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var form = props.form;

  var handleOk = function handleOk() {
    form.validateFields().then(function (value) {
      return props.handleOk(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValues"])(value));
    })["catch"](function (info) {
      return console.log("Validate Failed: ", info);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    width: props.modalWidth,
    visible: props.modalVisible,
    title: props.currentRecord !== undefined ? "Chỉnh sửa" : "Thêm mới",
    onOk: handleOk,
    onCancel: props.handleCancel,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "back",
      onClick: props.handleCancel
    }, "H\u1EE7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "submit",
      type: "primary",
      loading: props.formSubmiting,
      onClick: handleOk
    }, "\u0110\u1ED3ng \xFD")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormEdit__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    form: form
  })));
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
  }, props.insertable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: props.handleAddNew
  }, "Th\xEAm m\u1EDBi"), props.selectable && props.deleteable && props.selectedRowKeys.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "danger",
    onClick: props.onMultiDelete
  }, "X\xF3a ", props.selectedRowKeys.length, " m\u1EE5c \u0111\xE3 ch\u1ECDn"));
});
/* harmony default export */ __webpack_exports__["default"] = (ToolsButton);

/***/ }),

/***/ "./resources/js/components/ListForm/ToolsButton.scss":
/*!***********************************************************!*\
  !*** ./resources/js/components/ListForm/ToolsButton.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./ToolsButton.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListForm/ToolsButton.scss");

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var _DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataTable */ "./resources/js/components/ListForm/DataTable.js");
/* harmony import */ var _FilterBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBox */ "./resources/js/components/ListForm/FilterBox.js");
/* harmony import */ var _ModalConfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalConfirm */ "./resources/js/components/ListForm/ModalConfirm.js");
/* harmony import */ var _ToolsButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ToolsButton */ "./resources/js/components/ListForm/ToolsButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var confirm = antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm;

var ListForm = function ListForm(props) {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var url = props.url,
      onChangeData = props.onChangeData,
      primaryKey = props.primaryKey,
      filter = props.filter,
      filterBox = props.filterBox,
      otherParams = props.otherParams;

  var _useMergeState = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useMergeState"])({
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

  var data = state.data,
      isLoading = state.isLoading,
      modalVisible = state.modalVisible,
      formSubmiting = state.formSubmiting,
      selectedRowKeys = state.selectedRowKeys,
      currentRecord = state.currentRecord;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(filter),
      _useState2 = _slicedToArray(_useState, 2),
      ownFilter = _useState2[0],
      setOwnFilter = _useState2[1];

  var isComponentMounted = false; // Final filter: Filter <= props, OwnFilter <= FilterBox

  var finalFilter = filter !== undefined ? filter : ownFilter;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    isComponentMounted = true; // Không Có filter hoặc có filter và đã load xong

    if (finalFilter === undefined || !_.isEmpty(finalFilter)) {
      console.log("Load data from server in ListForm"); // Set lại data và loading cho các Component con

      setState({
        data: [],
        isLoading: true
      });
      axios.get("/api/" + url + "?" + Object(_utils__WEBPACK_IMPORTED_MODULE_4__["queryString"])(finalFilter)).then(function (response) {
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
      // When Unmount component
      isComponentMounted = false;
    };
  }, [JSON.stringify(finalFilter)]); // Chỉ chạy 1 lần khi mount đến khi filter hoặc ownFilter thay đổi

  /**
   * Create trigger for calling functions from other component
   */

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(props.ree, function () {
    return {
      triggerAddNew: function triggerAddNew() {
        handleAddNew();
      },
      getFormInstance: function getFormInstance() {
        return form;
      }
    };
  });
  /**
   * Show modal Thêm mới, Sửa
   */

  var handleOk = function handleOk(values) {
    setState({
      formSubmiting: true
    }); // Thêm mới

    if (currentRecord === undefined) {
      onAdd(values);
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isChangeData"])(currentRecord, values)) {
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
  /**
   * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
   */


  var handleFilterBox = function handleFilterBox(newFilter) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isChangeData"])(ownFilter, newFilter)) setOwnFilter(newFilter);
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
    if (otherParams !== undefined) value = Object.assign(value, otherParams);
    axios.post("/api/".concat(url), _objectSpread({}, value, {
      otherParams: otherParams
    })).then(function (response) {
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
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["ExclamationCircleOutlined"], null),
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
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["ExclamationCircleOutlined"], null),
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, filterBox && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FilterBox__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
    onFilter: handleFilterBox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ToolsButton__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, props, {
    selectedRowKeys: selectedRowKeys,
    handleAddNew: handleAddNew,
    onMultiDelete: onMultiDelete
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    data: data,
    isLoading: isLoading,
    selectedRowKeys: selectedRowKeys,
    onChangeSelect: onChangeSelect,
    handleEdit: handleEdit,
    onDelete: onDelete
  })), props.formTemplate !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ModalConfirm__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    form: form,
    modalVisible: modalVisible,
    formSubmiting: formSubmiting,
    currentRecord: currentRecord,
    handleOk: handleOk,
    handleCancel: handleCancel
  })));
};

ListForm.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  formTemplate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  onChangeData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  insertable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  deleteable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  primaryKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  tableSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }),
  modalWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  formInitialValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  otherActions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })),
  otherButtons: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })),
  expandedRowRender: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  filterBox: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  tuNgayDenNgay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  otherFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
  })),
  filterInitialValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  otherParams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  renderFooter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  renderSummary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setFormValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Specifies the default values for props:

ListForm.defaultProps = {
  selectable: true,
  insertable: true,
  editable: true,
  deleteable: true,
  primaryKey: "id",
  tableSize: {
    x: 500
  },
  filterBox: false,
  tuNgayDenNgay: true
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ListForm));

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/*! exports provided: useMergeState, queryString, parseValues, isChangeData, vndFormater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeState", function() { return useMergeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryString", function() { return queryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValues", function() { return parseValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChangeData", function() { return isChangeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vndFormater", function() { return vndFormater; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * useState mới, dùng tương đương (MERGE) state của Class component
 */

var useMergeState = function useMergeState(initialState) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setMergedState = function setMergedState(newState) {
    return setState(function (prevState) {
      return Object.assign({}, prevState, newState);
    });
  };

  return [state, setMergedState];
};
/**
 * Ghép object thành queryString
 */

var queryString = function queryString(obj) {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (obj[p] === undefined) obj[p] = "";
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
};
/**
 * Xử lý dữ liệu (ngày tháng) từ form nhập vào
 */

var parseValues = function parseValues(values) {
  for (var _i2 = 0, _Object$entries = Object.entries(values); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value !== null && value !== undefined) if (_typeof(value) === "object") // Convert từ moment (from DatePicker) về dạng string để backend xử lý
      values[key] = value.format("YYYY-MM-DD HH:mm:ss");else if (typeof value === "string") if (value.match(/(.*?):(.*?)\/(.*?)\//g)) values[key] = moment__WEBPACK_IMPORTED_MODULE_0___default()(value, "HH:mm DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss");else if (value.match(/(.*?)\/(.*?)\//g)) values[key] = moment__WEBPACK_IMPORTED_MODULE_0___default()(value, "DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss");
  }

  return values;
};
/**
 * Check liệu dữ liệu người dùng sửa có thay đổi gì ko?
 */

var isChangeData = function isChangeData(record, data) {
  if (record === undefined || data === undefined) return true;
  var isChanged = false;

  for (var k in record) {
    if (record.hasOwnProperty(k) && data.hasOwnProperty(k) && record[k] !== data[k]) {
      isChanged = true;
      break;
    }
  }

  return isChanged;
};
var vndFormater = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND"
});

/***/ })

}]);
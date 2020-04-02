(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "./resources/js/components/Includes/ListForm.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Includes/ListForm.js ***!
  \******************************************************/
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    _defineProperty(_assertThisInitialized(_this), "showModal", function () {
      _this.setState({
        modalVisible: true
      }); //TODO: Render current record

    });

    _defineProperty(_assertThisInitialized(_this), "handleOk", function () {
      _this.setState({
        formSubmiting: true
      }); //TODO: Submit form


      setTimeout(function () {
        _this.setState({
          formSubmiting: false,
          modalVisible: false
        });
      }, 3000);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        modalVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAddNew", function () {
      _this.setState({
        currentRecord: undefined
      });

      _this.showModal();
    });

    _defineProperty(_assertThisInitialized(_this), "onEdit", function (record) {
      _this.setState({
        currentRecord: record
      });

      _this.showModal();
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (id) {
      confirm({
        title: "Bạn muốn xóa mục này?",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ExclamationCircleOutlined"], null),
        content: "Thao tác không thể khôi phục",
        okText: "Đồng ý",
        okType: "danger",
        cancelText: "Không",
        onOk: function onOk() {
          //TODO: Submit delete
          console.log("List -> id", id);
        }
      }); // axios
      //     .post(`/api/posts/delete/${id}`)
      //     .then(response => {
      //         alert("Xoa thanh cong");
      //         this.setState({
      //             data: response.data
      //         });
      //     })
      //     .catch(error => {
      //         console.log(error);
      //     });
    });

    _defineProperty(_assertThisInitialized(_this), "onMultiDelete", function () {
      var selectedRowKeys = _this.state.selectedRowKeys;
      confirm({
        title: "Bạn muốn xóa những mục này?",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ExclamationCircleOutlined"], null),
        content: "Tất cả " + selectedRowKeys.length + " mục",
        okText: "Đồng ý",
        okType: "danger",
        cancelText: "Không",
        onOk: function onOk() {
          //TODO: Submit multi delete
          console.log("List -> onMultiDelete -> selectedRowKeys", selectedRowKeys);
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
            return record.phan_loai.indexOf(value) === 0;
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
    _this.isComponentMounted = false;
    return _this;
  }

  _createClass(ListForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isComponentMounted = true;
      var url = this.props.url;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/" + url).then(function (response) {
        if (_this2.isComponentMounted && response.data.success) _this2.setState({
          data: response.data.data,
          isLoading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isComponentMounted = false;
    }
    /**
     * Thao tác tìm kiếm trên cột
     */

  }, {
    key: "render",

    /**
     * Hàm render
     */
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          data = _this$state.data,
          isLoading = _this$state.isLoading,
          modalVisible = _this$state.modalVisible,
          formSubmiting = _this$state.formSubmiting,
          selectedRowKeys = _this$state.selectedRowKeys;
      var _this$props = this.props,
          selectable = _this$props.selectable,
          addNew = _this$props.addNew,
          editable = _this$props.editable,
          deleteable = _this$props.deleteable,
          columns = _this$props.columns,
          primaryKey = _this$props.primaryKey,
          formTemplate = _this$props.formTemplate;
      var scroll = this.props.scroll;
      if (!scroll) scroll = {
        x: 500
      };
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys) {
          return _this3.setState({
            selectedRowKeys: selectedRowKeys
          });
        }
      };
      var col = columns.map(function (column) {
        return _this3.getColumn(column, data);
      });
      if (editable || deleteable) col.push({
        title: "",
        key: "action",
        fixed: "right",
        align: "center",
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, editable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "link",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EditOutlined"], null),
            onClick: function onClick() {
              return _this3.onEdit(record);
            }
          }) : "", deleteable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: function onClick() {
              return _this3.onDelete(record[primaryKey]);
            },
            danger: true,
            type: "link",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteOutlined"], null)
          }) : "");
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, addNew ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        onClick: this.onAddNew,
        style: {
          margin: 10
        }
      }, "Th\xEAm m\u1EDBi") : "", selectable && deleteable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "inline"
        }
      }, selectedRowKeys.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        onClick: this.onMultiDelete,
        style: {
          margin: 10,
          marginLeft: 0
        }
      }, "X\xF3a ", selectedRowKeys.length, " m\u1EE5c \u0111\xE3 ch\u1ECDn") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "link",
        onClick: function onClick() {
          _this3.setState({
            selectedRowKeys: data.map(function (item) {
              return item[primaryKey];
            })
          });
        },
        style: {
          margin: 10,
          marginLeft: 0
        }
      }, "Ch\u1ECDn t\u1EA5t c\u1EA3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "link",
        danger: true,
        onClick: function onClick() {
          _this3.setState({
            selectedRowKeys: []
          });
        },
        style: {
          margin: 10,
          marginLeft: 0
        }
      }, "B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3")) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        dataSource: data,
        columns: col,
        loading: isLoading,
        rowKey: function rowKey(row) {
          return row[primaryKey];
        },
        rowSelection: selectable ? rowSelection : null,
        locale: {
          filterConfirm: "Lọc",
          filterReset: "Hủy",
          emptyText: "Không có dữ liệu"
        },
        scroll: scroll
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        visible: modalVisible,
        title: "Chi ti\u1EBFt",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          key: "back",
          onClick: this.handleCancel
        }, "H\u1EE7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          key: "submit",
          type: "primary",
          loading: formSubmiting,
          onClick: this.handleOk
        }, "\u0110\u1ED3ng \xFD")]
      }, formTemplate));
    }
  }]);

  return ListForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ListForm);

/***/ })

}]);
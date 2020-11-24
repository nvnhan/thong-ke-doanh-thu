(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var confirm = antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm;
/**
 * Form base for other components
 *
 * @param {*} props
 * @returns
 */

var ListForm = function ListForm(props) {
  //#region  Khai báo biến
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
    modalDeleteVisible: false,
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
      modalDeleteVisible = state.modalDeleteVisible,
      formSubmiting = state.formSubmiting,
      selectedRowKeys = state.selectedRowKeys,
      currentRecord = state.currentRecord;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(filter),
      _useState2 = _slicedToArray(_useState, 2),
      ownFilter = _useState2[0],
      setOwnFilter = _useState2[1];

  var isComponentMounted = false; // Final filter: Filter <= props, OwnFilter <= FilterBox

  var finalFilter = filter !== undefined ? filter : ownFilter; //#endregion
  //#region  Sự kiện, hooks

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    isComponentMounted = true; // Không Có filter hoặc có filter và đã load xong

    if (finalFilter === undefined || !_.isEmpty(finalFilter)) {
      console.log("Load data from server in ListForm", finalFilter); // Set lại data và loading cho các Component con

      setState({
        data: [],
        isLoading: true
      });
      axios.get("/api/".concat(url, "?") + Object(_utils__WEBPACK_IMPORTED_MODULE_4__["queryString"])(finalFilter)).then(function (response) {
        if (isComponentMounted && response.data.success) {
          //  Tính lại AutoComplete (nhúng trong Modal form) cho 1 số form
          if (onChangeData) onChangeData(response.data.data);
          setState({
            data: response.data.data,
            isLoading: false
          });
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
      /**
       * Gọi sự kiện thêm mới từ form khác
       */
      triggerAddNew: function triggerAddNew() {
        return handleAddNew();
      },

      /**
       * Kích hoạt chức năng thêm 1 hàng mới vào table
       */
      // triggerInsertFromText: response => doInsertRow(response),

      /**
       * Trả form instance về form khác (form cha)
       */
      getFormInstance: function getFormInstance() {
        return form;
      }
    };
  }); //#endregion
  //#region  Triggers from components

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
    return setState({
      modalVisible: false,
      modalDeleteVisible: false,
      currentRecord: undefined
    });
  };
  /**
   * Xử lý sự kiện người dùng
   */


  var handleAddNew = function handleAddNew() {
    return setState({
      currentRecord: undefined,
      modalVisible: true
    });
  };

  var handleEdit = function handleEdit(record) {
    return setState({
      modalVisible: true,
      currentRecord: record
    });
  };
  /**
   * Click Lọc từ filter Box => set lại ownfilter => load lại data từ useEffect
   */


  var handleFilterBox = function handleFilterBox(newFilter) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isChangeData"])(ownFilter, newFilter) && setOwnFilter(newFilter);
  };

  var handleDelete = function handleDelete(record) {
    return setState({
      modalDeleteVisible: true,
      currentRecord: record
    });
  }; //#endregion
  //#region  Thực thi các sự kiện


  var onChangeSelect = function onChangeSelect(selectedRowKeys) {
    return setState({
      selectedRowKeys: selectedRowKeys
    });
  };

  var doInsertRow = function doInsertRow(response) {
    if (response.data.success) {
      var newData = []; // Thêm object vào list lấy từ state

      if (Array.isArray(response.data.data)) newData = [].concat(_toConsumableArray(data), _toConsumableArray(response.data.data));else newData = [].concat(_toConsumableArray(data), [response.data.data]);
      console.log("doInsertRow -> newData: ", newData);
      setState({
        data: newData
      });
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
      if (onChangeData) onChangeData(newData);
    } else antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(response.data.message);
  };

  var onAdd = function onAdd(value) {
    if (otherParams !== undefined) value = Object.assign(value, otherParams);
    axios.post("/api/".concat(url), value).then(function (response) {
      return doInsertRow(response);
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
        if (onChangeData) onChangeData(newData);
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var onDelete = function onDelete() {
    currentRecord !== undefined && axios["delete"]("/api/".concat(url, "/").concat(currentRecord["id"])).then(function (response) {
      if (response.data.success) {
        var newData = data.filter(function (item) {
          return item[primaryKey] !== currentRecord["id"];
        });
        setState({
          data: newData,
          modalDeleteVisible: false,
          currentRecord: undefined
        });
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
        if (onChangeData) onChangeData(newData);
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var onMultiDelete = function onMultiDelete() {
    console.log("before delete", state);
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
            var newData = data.filter(function (item) {
              return selectedRowKeys.indexOf(item[primaryKey]) === -1;
            });
            setState({
              data: newData,
              selectedRowKeys: []
            });
            if (onChangeData) onChangeData(newData);
            antd__WEBPACK_IMPORTED_MODULE_1__["message"].info(response.data.message);
          }
        })["catch"](function (error) {
          return console.log(error);
        });
      }
    });
  }; //#endregion


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "list-form"
  }, filterBox && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FilterBox__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
    onFilter: handleFilterBox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ToolsButton__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, props, {
    data: data,
    selectedRowKeys: selectedRowKeys,
    handleAddNew: handleAddNew,
    onMultiDelete: onMultiDelete
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    data: data,
    isLoading: isLoading,
    selectedRowKeys: selectedRowKeys,
    onChangeSelect: onChangeSelect,
    handleEdit: handleEdit,
    handleDelete: handleDelete
  })), props.formTemplate !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ModalConfirm__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    form: form,
    modalVisible: modalVisible,
    formSubmiting: formSubmiting,
    currentRecord: currentRecord,
    handleOk: handleOk,
    handleCancel: handleCancel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    visible: modalDeleteVisible,
    onOk: onDelete,
    onCancel: handleCancel,
    title: "B\u1EA1n mu\u1ED1n x\xF3a m\u1EE5c n\xE0y?",
    okText: "X\xF3a",
    cancelText: "H\u1EE7y",
    okType: "danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "L\u01B0u \xFD: Thao t\xE1c kh\xF4ng th\u1EC3 ho\xE0n t\xE1c")));
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
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    childs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    selectRequired: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
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

/***/ })

}]);
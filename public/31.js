(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/js/pages/Account/Profile/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/Account/Profile/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Profile = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (props) {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_0__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _Form$useForm3 = antd__WEBPACK_IMPORTED_MODULE_0__["Form"].useForm(),
      _Form$useForm4 = _slicedToArray(_Form$useForm3, 1),
      formLogin = _Form$useForm4[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    // Check it in server
    axios.get("/api/get-user").then(function (response) {
      if (response.data.success) {
        var data = response.data.data;
        setUser(data);
        form.setFieldsValue(data);
      } else antd__WEBPACK_IMPORTED_MODULE_0__["message"].warn(response.data.message);
    })["catch"](function (error) {
      return console.log(error);
    });
    return {};
  }),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalVisible = _useState4[0],
      setModalVisible = _useState4[1];

  var onFinish = function onFinish() {
    var values = form.getFieldValue();
    axios.put("/api/profile", values).then(function (response) {
      if (response.data.success) antd__WEBPACK_IMPORTED_MODULE_0__["message"].success(response.data.message);else antd__WEBPACK_IMPORTED_MODULE_0__["message"].warn(response.data.message);
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var handleOk = function handleOk() {
    formLogin.validateFields().then(function (value) {//TODO: Post form
    })["catch"](function (info) {
      return console.log("Validate Failed: ", info);
    });
  };

  var handleCancel = function handleCancel() {
    return setModalVisible(false);
  };

  var onAuthenticate = function onAuthenticate() {
    var values = form.getFieldValue();
    if (values.gmail_client !== "" && values.gmail_secret !== "") setModalVisible(true);else antd__WEBPACK_IMPORTED_MODULE_0__["message"].warning("Chưa nhập client & secret key");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sm-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    form: form,
    onFinish: onFinish,
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "username",
    label: "T\xEAn \u0111\u0103ng nh\u1EADp",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "ho_ten",
    label: "H\u1ECD t\xEAn",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "sdt",
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "dia_chi",
    label: "\u0110\u1ECBa ch\u1EC9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "gmail_client",
    label: "Gmail Client ID"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "gmail_secret",
    label: "Secret key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    wrapperCol: {
      span: 16,
      offset: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "C\u1EADp nh\u1EADt"), " ", "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onAuthenticate
  }, "X\xE1c th\u1EF1c Gmail"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    title: "X\xE1c nh\u1EADn t\xE0i kho\u1EA3n",
    onCancel: handleCancel,
    onOk: handleOk,
    visible: modalVisible,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "back",
      onClick: handleCancel
    }, "H\u1EE7y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      key: "submit",
      type: "primary",
      onClick: handleOk
    }, "\u0110\u1ED3ng \xFD")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    form: formLogin,
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      username: user.username
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "username",
    label: "T\xEAn \u0111\u0103ng nh\u1EADp",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "password",
    label: "M\u1EADt kh\u1EA9u",
    rules: [{
      required: true,
      message: "Nhập đầy đủ thông tin!"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, null)))));
});
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

}]);
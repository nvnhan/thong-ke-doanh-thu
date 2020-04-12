(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/pages/BanHang/TongHop/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/BanHang/TongHop/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ListForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ListForm */ "./resources/js/components/ListForm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils/index.js");



var List = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var columns = [{
    title: "Mã hàng",
    dataIndex: "ma_hang",
    optFind: true,
    width: 110
  }, {
    title: "Tên hàng",
    dataIndex: "ten_hang",
    optFind: true,
    width: 140
  }, {
    title: "Phân loại",
    dataIndex: "phan_loai",
    optFilter: true,
    width: 140
  }, {
    title: "Nhà cung cấp",
    dataIndex: "nha_cung_cap",
    width: 140,
    optFilter: true
  }, // {
  //     title: "Đơn giá hiện tại",
  //     dataIndex: "don_gia",
  //     render: number => vndFormater.format(number),
  //     // sorter: (a, b) => a.don_gia - b.don_gia,
  //     width: 110
  // },
  {
    title: "SL mua vào",
    dataIndex: "so_luong_mua_vao",
    width: 110
  }, {
    title: "TT mua vào",
    dataIndex: "thanh_tien_mua_vao",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_mua_vao - b.thanh_tien_mua_vao;
    },
    width: 110
  }, {
    title: "SL bán ra",
    dataIndex: "so_luong_ban_ra",
    width: 110
  }, {
    title: "TT bán ra",
    dataIndex: "thanh_tien_ban_ra",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ban_ra - b.thanh_tien_ban_ra;
    },
    width: 110
  }, {
    title: "SL hoàn đổi",
    dataIndex: "so_luong_hoan_doi",
    width: 110
  }, {
    title: "TT hoàn đổi",
    dataIndex: "thanh_tien_hoan_doi",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_hoan_doi - b.thanh_tien_hoan_doi;
    },
    width: 110
  }, {
    title: "SL tồn kho",
    dataIndex: "so_luong_ton_kho",
    width: 110
  }, {
    title: "TT tồn kho",
    dataIndex: "thanh_tien_ton_kho",
    render: function render(number) {
      return _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(number);
    },
    sorter: function sorter(a, b) {
      return a.thanh_tien_ton_kho - b.thanh_tien_ton_kho;
    },
    width: 110
  }];

  var renderFooter = function renderFooter(data) {
    if (!_.isEmpty(data)) {
      var sumObj = data.reduce(function (previousValue, currentValue) {
        return {
          thanh_tien_mua_vao: previousValue.thanh_tien_mua_vao + currentValue.thanh_tien_mua_vao,
          thanh_tien_ban_ra: previousValue.thanh_tien_ban_ra + currentValue.thanh_tien_ban_ra,
          thanh_tien_hoan_doi: previousValue.thanh_tien_hoan_doi + currentValue.thanh_tien_hoan_doi,
          thanh_tien_ton_kho: previousValue.thanh_tien_ton_kho + currentValue.thanh_tien_ton_kho
        };
      });
      return "Tổng tiền mua vào: " + _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_mua_vao) + ". Bán ra: " + _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_ban_ra) + ". Hoàn đổi: " + _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_hoan_doi) + ". Tồn kho: " + _utils__WEBPACK_IMPORTED_MODULE_2__["vndFormater"].format(sumObj.thanh_tien_ton_kho);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ListForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "tong-hop-hang",
    filterBox: true,
    columns: columns,
    insertable: false,
    selectable: false,
    editable: false,
    deleteable: false,
    tableSize: {
      x: 1200
    },
    renderFooter: renderFooter
  });
});
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

}]);
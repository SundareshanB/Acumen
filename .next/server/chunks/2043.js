exports.id = 2043;
exports.ids = [2043];
exports.modules = {

/***/ 2043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9613);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8222);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3750);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7394);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9895);











const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
  table: {// height:"100%"
  },
  paper: {
    width: "650px",
    margin: 5,
    padding: 5,
    border: "1px solid #810000"
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    fontSize: 16,
    color: "#810000",
    padding: 5,
    background: "lightgray",
    fontWeight: 700
  }
});

const BasicTable = props => {
  const classes = useStyles();
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value);
  const {
    0: row,
    1: setRow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.row);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    className: classes.paper,
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.header,
      children: props.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      className: classes.table,
      "aria-label": "simple table",
      size: "small",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          children: row !== undefined && row.length != 0 && row.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            align: "left",
            children: item
          }))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        children: data !== undefined && data.length !== 0 && data.map(key => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          children: props.row.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            align: "left",
            children: key[item]
          }))
        }, key.Stage))
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BasicTable);

/***/ })

};
;
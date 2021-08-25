exports.id = 4414;
exports.ids = [4414];
exports.modules = {

/***/ 4414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1120);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8182);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9895);









const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
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

const Chart = props => {
  const classes = useStyles();
  const {
    row,
    value
  } = props; // option = row (amount)

  const label = [];
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  let color = ["#FED39F", "#FFD57E", "#FE8761", "#AF460F", "#9D2503"];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let temp = [];
    value.map(item => {
      label.push(item[row[0]]);
    });
    row.splice(0, 1);
    row.map((item, index) => {
      let tempdata = [];
      value.map(key => {
        tempdata.push(parseInt(key[item].replace(/,/g, '')));
      });
      let tempobj = {
        label: item,
        data: tempdata,
        backgroundColor: color[index],
        fontColor: color[index],
        borderColor: color[index]
      };
      temp.push(tempobj);
    });
    let obj = {
      labels: label,
      datasets: temp
    };
    setData(obj);
  }, [row]);
  console.log(data);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      className: classes.paper,
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.header,
        children: props.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        className: classes.table,
        "aria-label": "simple table",
        size: "small",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
          data: data
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ })

};
;
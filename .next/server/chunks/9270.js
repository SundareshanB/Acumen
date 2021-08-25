exports.id = 9270;
exports.ids = [9270];
exports.modules = {

/***/ 9270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EnhancedTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9613);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8222);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3750);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7394);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9895);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2230);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3258);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5477);




















function createData(resource, name, qty, wt, cost, percent) {
  return {
    resource,
    name,
    qty,
    wt,
    cost,
    percent
  };
}

const table = [createData("RES_HQS_FIN_001_901", "General Corporate Council", 15000, 1.0, 2, 180, 35.2912), createData("RES_HQS_FIN_006_06", "Mgr audit", 75000, 1.0, 1090, 17.6412), createData("RES_HQS_FIN_006_532", "Sr.Auditor", 65000, 1.0, 945, 15.2912), createData("RES_HQS_FIN_006_9067", "Auditor", 55000, 2.0, 1599, 25.8824), createData("RES_HQS_COH_001_111", "Executive Admin II", 50000, 1.0, 363, 5.8824)];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [{
  id: "resource",
  numeric: false,
  disablePadding: true,
  label: "Resource"
}, {
  id: "name",
  numeric: false,
  disablePadding: false,
  label: "Name"
}, {
  id: "qty",
  numeric: true,
  disablePadding: false,
  label: "Qty"
}, {
  id: "wt",
  numeric: true,
  disablePadding: false,
  label: "Wt"
}, {
  id: "cost",
  numeric: true,
  disablePadding: false,
  label: "Cost"
}, {
  id: "percent",
  numeric: true,
  disablePadding: false,
  label: "Percentage(%)"
}];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        padding: "checkbox"
      }), headCells.map(headCell => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        align: headCell.numeric ? "right" : "center",
        padding: headCell.disablePadding ? "none" : "default",
        sortDirection: orderBy === headCell.id ? order : false,
        children: headCell.label
      }, headCell.id))]
    })
  });
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(theme => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  circular: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 700
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  rowheadercheck: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#810000"
    }
  },
  rowdata: {
    "&.MuiTableRow-root.Mui-selected": {
      backgroundColor: "#eeebdd"
    }
  }
}));
function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("asc");
  const [orderBy, setOrderBy] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("calories");
  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
  const [dense, setDense] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(5);
  const [table, setTable] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  let [temptable, setTemptable] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.account.accountdetails);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.header);
  const driver = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.modal.driver);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (account[0] !== "No data" && account.length !== 0) {
      temptable = [];
      setTable([]);

      if (account[0].driverLink[0] && account[0].driverLink[0].driverAssociation === "Common") {
        axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://[::1]:3000/api/AssignmentProfile/Dest_Common", {
          params: {
            period: state.period,
            refNum: state.account[0].refNum
          }
        }).then(res => setTemptable(res.data)).catch(err => console.log("err"));
      } else {
        axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://[::1]:3000/api/driverQuantity/Dest_Specific", {
          params: {
            period: state.period,
            refNum: state.account[0].refNum
          }
        }).then(res => setTemptable(res.data)).catch(err => console.log("err"));
      }
    } else {
      setTemptable([]);
    }
  }, [account, driver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let temp = [];
    let total = 0;
    temptable.map(item => item.DQ ? total += item.DQ.driverQty * item.DQ.driverWt : total += item.driverQty * item.driverWt);
    temptable.map(item => {
      let obj = {
        resource: item.destRefNum,
        name: item.AH.name,
        qty: item.DQ ? item.DQ.driverQty : item.driverQty,
        wt: item.DQ ? item.DQ.driverWt : item.driverWt,
        cost: (item.CC[0] !== undefined ? item.CC[0].cost * ((item.DQ ? item.DQ.driverQty * item.DQ.driverWt : item.driverQty * item.driverWt) / total * 100) : item.CC.cost * ((item.DQ ? item.DQ.driverQty * item.DQ.driverWt : item.driverQty * item.driverWt) / total * 100)) / 100,
        percent: (item.DQ ? item.DQ.driverQty * item.DQ.driverWt : item.driverQty * item.driverWt) / total * 100
      };
      temp.push(obj);
    });
    setTable([...temp]);
  }, [temptable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_9__/* .Accounttable */ .d)(table));
  }, [table]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = table.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, table.length - page * rowsPerPage);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      className: classes.paper,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
          className: classes.table,
          "aria-labelledby": "tableTitle",
          size: dense ? "small" : "medium",
          "aria-label": "enhanced table",
          stickyHeader: true,
          children: state.account.length !== 0 && (table.length === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                className: classes.circular,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {})
              })
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EnhancedTableHead, {
              classes: classes,
              numSelected: selected.length,
              order: order,
              orderBy: orderBy,
              onSelectAllClick: handleSelectAllClick,
              onRequestSort: handleRequestSort,
              rowCount: table.length
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
              children: [stableSort(table, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return row.length !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                  hover: true,
                  onClick: event => handleClick(event, row.name),
                  role: "checkbox",
                  "aria-checked": isItemSelected,
                  tabIndex: -1,
                  selected: isItemSelected,
                  className: classes.rowdata,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    padding: "checkbox",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
                      className: classes.rowheadercheck,
                      checked: isItemSelected,
                      inputProps: {
                        "aria-labelledby": labelId
                      }
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    align: "center",
                    children: row.resource
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    align: "center",
                    children: row.name
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    align: "right",
                    children: row.qty
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    align: "right",
                    children: row.wt
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    align: "right",
                    children: ["$", row.cost.toFixed(2)]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    align: "right",
                    children: row.percent.toFixed(2)
                  })]
                }, row.name) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {});
              }), emptyRows > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                style: {
                  height: "auto"
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  colSpan: 6
                })
              })]
            })]
          }))
        })
      })
    })
  });
}

/***/ }),

/***/ 2230:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ Accountdetails; },
/* harmony export */   "d": function() { return /* binding */ Accounttable; }
/* harmony export */ });
/* harmony import */ var _Accounttypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4129);

const Accountdetails = data => {
  return {
    type: _Accounttypes__WEBPACK_IMPORTED_MODULE_0__/* .ACCOUNT_DETAILS */ .e,
    payload: data
  };
};
const Accounttable = data => {
  return {
    type: _Accounttypes__WEBPACK_IMPORTED_MODULE_0__/* .ACCOUNT_TABLE */ .v,
    payload: data
  };
};

/***/ }),

/***/ 4129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": function() { return /* binding */ ACCOUNT_DETAILS; },
/* harmony export */   "v": function() { return /* binding */ ACCOUNT_TABLE; }
/* harmony export */ });
const ACCOUNT_DETAILS = "ACCOUNT_DETAILS";
const ACCOUNT_TABLE = "ACCOUNT_TABLE";

/***/ })

};
;
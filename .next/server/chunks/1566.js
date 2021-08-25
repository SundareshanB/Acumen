exports.id = 1566;
exports.ids = [1566];
exports.modules = {

/***/ 1566:
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9613);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8222);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3750);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7394);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9895);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);














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
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
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
  id: 'resource',
  numeric: false,
  disablePadding: true,
  label: 'Resource'
}, {
  id: 'name',
  numeric: false,
  disablePadding: false,
  label: 'Name'
}, {
  id: 'driver',
  numeric: true,
  disablePadding: false,
  label: 'Driver'
}, {
  id: 'profile',
  numeric: true,
  disablePadding: false,
  label: 'Profile'
}];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      children: headCells.map(headCell => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        align: 'left',
        padding: headCell.disablePadding ? 'none' : "default",
        sortDirection: orderBy === headCell.id ? order : false,
        children: headCell.label
      }, headCell.id))
    })
  });
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%'
  },
  container: {
    maxHeight: "39vh",
    minHeight: "39vh",
    border: "1px solid #810000",
    padding: "0px 10px",
    borderRadius: 6
  },
  table: {
    minWidth: 500
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
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
function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('asc');
  const [orderBy, setOrderBy] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('calories');
  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
  const [dense, setDense] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(5);
  const {
    data
  } = props;
  const header = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.header);
  const {
    0: rawdata,
    1: setRawdata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: rawtabledata,
    1: setRawtabledata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: tabledata,
    1: setTabledata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (data.length !== 0) {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://[::1]:3000/account-drivers/accountDetails", {
        params: {
          period: header.period,
          refNum: data[0].refNum
        }
      }).then(res => setRawdata(res.data)).catch(err => console.log("error"));
    }
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (rawdata.length !== 0) {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://[::1]:3000/account-drivers/similarassignments", {
        params: {
          period: rawdata[0].period,
          driver: rawdata[0].driver,
          profile: rawdata[0].profile,
          refNum: rawdata[0].refNum
        }
      }).then(res => setRawtabledata(res.data));
    }
  }, [rawdata]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let temp = [];

    if (rawtabledata.length !== 0) {
      rawtabledata.map(item => {
        let obj = {
          resource: item.refNum,
          name: item.AH.name,
          driver: item.driver,
          profile: item.profile
        };
        temp.push(obj);
      });
      setTabledata(temp);
    } else {
      setTabledata([]);
    }
  }, [rawtabledata]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tabledata.length - page * rowsPerPage);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      className: classes.paper,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        className: classes.container,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
          stickyHeader: true,
          className: classes.table,
          "aria-labelledby": "tableTitle",
          size: 'small',
          "aria-label": "enhanced table" // stickyHeader 
          ,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EnhancedTableHead, {
            classes: classes,
            numSelected: selected.length,
            order: order,
            orderBy: orderBy,
            onSelectAllClick: handleSelectAllClick,
            onRequestSort: handleRequestSort,
            rowCount: tabledata.length
          }), tabledata.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
            children: [stableSort(tabledata, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                hover: true,
                onClick: event => handleClick(event, row.name),
                role: "checkbox",
                "aria-checked": isItemSelected,
                tabIndex: -1,
                selected: isItemSelected,
                className: classes.rowdata,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                  align: "left",
                  padding: "none",
                  children: row.resource
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                  align: "left",
                  children: row.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                  align: "left",
                  children: row.driver
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                  align: "left",
                  children: row.profile
                })]
              }, row.name);
            }), emptyRows > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
              style: {
                height: "auto"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                colSpan: 6
              })
            })]
          })]
        })
      })
    })
  });
}

/***/ })

};
;
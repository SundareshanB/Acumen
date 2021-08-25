exports.id = 1090;
exports.ids = [1090];
exports.modules = {

/***/ 5355:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1120);
/* harmony import */ var _treeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(273);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1466);







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400
  },
  padding: {
    margin: "0px 10px"
  }
});

const Driverassignment = () => {
  const classes = useStyles();
  const {
    0: selectedlabel,
    1: setSelectedlabel
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  console.log(selectedlabel);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_treeview__WEBPACK_IMPORTED_MODULE_2__.default, {
        setSelectedlabel: setSelectedlabel
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.padding,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_table__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: selectedlabel
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Driverassignment);

/***/ }),

/***/ 1466:
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
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9613);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8222);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3750);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7394);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9895);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
















function createData(resource, name, driver, profile) {
  return {
    resource,
    name,
    driver,
    profile
  };
}

const rows = [createData('RES_HQS_FIN_001_901', "General Corporate", "FTE", "AUDIT"), createData('RES_HQS_FIN_006_06', "Mgr audit", "FTE", "AUDIT"), createData('RES_HQS_FIN_006_532', "Sr.Auditor", "FTE", "AUDIT"), createData('RES_HQS_FIN_006_9067', "Auditor", "FTE", "AUDIT"), createData('RES_HQS_COH_001_111', "Executive Admin II", "FTE", "AUDIT")];

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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      children: headCells.map(headCell => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        align: 'left',
        padding: headCell.disablePadding ? 'none' : "default",
        sortDirection: orderBy === headCell.id ? order : false,
        children: headCell.label
      }, headCell.id))
    })
  });
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%'
  },
  container: {
    maxHeight: "43vh",
    minHeight: "43vh",
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
  const header = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.header);
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
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("http://[::1]:3000/account-drivers/accountDetails", {
        params: {
          period: header.period,
          refNum: data[0].refNum
        }
      }).then(res => setRawdata(res.data)).catch(err => console.log("error"));
    }
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (rawdata.length !== 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("http://[::1]:3000/account-drivers/similarassignments", {
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
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      className: classes.paper,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        className: classes.container,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
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
          }), tabledata.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
            children: [stableSort(tabledata, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                hover: true,
                onClick: event => handleClick(event, row.name),
                role: "checkbox",
                "aria-checked": isItemSelected,
                tabIndex: -1,
                selected: isItemSelected,
                className: classes.rowdata,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  padding: "none",
                  children: row.resource
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  children: row.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  children: row.driver
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  children: row.profile
                })]
              }, row.name);
            }), emptyRows > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              style: {
                height: "auto"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                colSpan: 6
              })
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ 273:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Treeview; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5425);
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(131);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1084);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7305);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










 // dropdown







function StyledTreeItem(props) {
  const classes = (0,_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .useTreeItemStyles */ .AC)();

  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor
  } = props,
        other = _objectWithoutProperties(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, _objectSpread({
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.labelRoot,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      })
    }),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
  root: {
    height: 205,
    flexGrow: 1,
    overflow: "auto",
    border: "1px solid",
    margin: 10,
    borderRadius: 6
  },
  formControl: {
    marginRight: 5,
    minWidth: 120
  },
  labelname: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "75%",
    transform: "translate(14px,3px) scale(1)",
    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      // transform: "translate(14px, 0px) scale(0.75)"
      display: "none"
    }
  },
  treeviewtop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
function Treeview({
  setSelectedlabel
}) {
  const classes = useStyles();
  const {
    0: datum,
    1: setDatum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: Treeitems,
    1: setTreeitems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([..._JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__]);
  const Treeview = [];
  let {
    0: node,
    1: setNode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.header.stage);
  const {
    0: stages,
    1: setStages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  let stage = "";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview");
    temptreeview.then(res => res.json()).then(tempdata => setTreeitems(tempdata));
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    Treeitems.map(item => {
      if (item.stage === data) {
        Treeview.push(item);
      }
    }); // to get the higher node

    Treeview.map(item => {
      if (node < item.Node) {
        node = item.Node;
      }
    }); // to push the tree nodes inside the other nodes

    let deletenode = [];

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Treeview.map(item => {
            if (item.refNum === key.parentRefNum) {
              const bool = item.treeView.some(item => item._id === key._id);
              {
                !bool ? item.treeView = [...item.treeView, key] : item.treeView = [...item.treeView];
              }
              deletenode.push(index);
            }
          });
        }
      });
    }

    let tempdata = [];

    for (let i = 0; i < Treeview.length; i++) {
      if (!deletenode.includes(i)) {
        tempdata.push(Treeview[i]);
      }
    }

    setDatum([...tempdata]);
  }, [_JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__, Treeitems]);

  const handleClick = props => {
    setSelectedlabel([props]);
  };

  const Treeitem = props => {
    return props.data.map(item => {
      return !(item.treeView === undefined || item.treeView.length === 0) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id,
        labelText: item.name,
        color: "#810000",
        bgColor: "#EEEBDD",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
          data: item.treeView
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        onClick: () => handleClick(item),
        nodeId: item._id,
        labelText: item.name,
        color: "#810000",
        bgColor: "#EEEBDD"
      });
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      className: classes.root,
      defaultExpanded: ['3'],
      defaultCollapseIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default()), {}),
      defaultExpandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default()), {}),
      defaultEndIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          width: 24
        }
      }),
      children: datum.map(item => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
          nodeId: item._id,
          onClick: () => {
            item.treeView.length === 0 && handleClick(item);
          },
          labelText: item.name,
          color: "#810000",
          bgColor: "#EEEBDD",
          children: item.treeView.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
            data: item.treeView
          })
        });
      })
    })
  });
}

/***/ }),

/***/ 7774:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9513);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(282);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);










const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  },
  singleline: {
    "&.MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  input: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const Drivedictionary = () => {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("Controlled");
  const [definition, setDefinition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [source, setSource] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [sourcecontact, setSourcecontact] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state);
  const [definevalue, setDefinevalue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [sourcevalue, setSourcevalue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [contactvalue, setContactvalue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  const [dictionary, setDictionary] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [Status, setStatus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("http://[::1]:3000/driverDictionary/findBydriver", {
      params: {
        driver: data.account.accountdetails[0].driver
      }
    }).then(res => setDictionary(res.data));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (dictionary[0] !== undefined) {
      setDefinevalue(dictionary[0].definition ? dictionary[0].definition : "");
      setSourcevalue(dictionary[0].source ? dictionary[0].source : "");
      setContactvalue(dictionary[0].sourceContact ? dictionary[0].sourceContact : "");
    }
  }, [dictionary]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    // axios.patch(`http://[::1]:3000/driverDictionary/updateDriverDict?driver=${data.account.accountdetails[0].driver}&definition=${definevalue}&source=${sourcevalue}&sourceContact=${contactvalue}`).then(res=>console.log(res)).catch(err=>console.log(err))
    if (dictionary.length !== 0) {
      let obj = {
        driver: data.account.accountdetails[0].driver,
        definition: definevalue,
        source: sourcevalue,
        sourceContact: contactvalue
      };
      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        method: "patch",
        url: "http://[::1]:3000/driverDictionary/updateDriverDict",
        params: obj
      }).then(res => {
        if (res.statusText === "OK") {
          setDefinition(true);
          setSource(true);
          setSourcecontact(true);
        }
      }).catch(err => console.log(err));
    } else {
      let event = new Date();
      let obj = {
        driver: data.account.accountdetails[0].driver,
        definition: definevalue,
        source: sourcevalue,
        sourceContact: contactvalue,
        "modBy": 0,
        "modTime": event.toISOString()
      };
      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        method: "post",
        url: "http://[::1]:3000/driver-dictionaries",
        data: obj
      }).then(res => {
        if (res.statusText === "OK") {
          setDefinition(true);
          setSource(true);
          setSourcecontact(true);
        }
      }).catch(err => console.log(err));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classes.input,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          id: "outlined-multiline-static",
          label: "Definition",
          multiline: true,
          disabled: definition,
          rows: 2,
          value: definevalue,
          variant: "outlined",
          onChange: e => setDefinevalue(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
          onClick: () => setDefinition(!definition),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              fontSize: 14
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          id: "outlined-multiline-static",
          label: "Source",
          multiline: true,
          className: classes.singleline,
          disabled: source,
          value: sourcevalue,
          variant: "outlined",
          onChange: e => setSourcevalue(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
          onClick: () => setSource(!source),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              fontSize: 14
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          id: "outlined-multiline-static",
          label: "Source Contact",
          multiline: true,
          className: classes.singleline,
          disabled: sourcecontact,
          value: contactvalue,
          variant: "outlined",
          onChange: e => setContactvalue(e.target.value)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
          onClick: () => setSourcecontact(!sourcecontact),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
              fontSize: 14
            }
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.button,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        onClick: () => onSubmit(),
        variant: "contained",
        color: "primary",
        size: "small",
        children: "Add/Update"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Drivedictionary);

/***/ }),

/***/ 3386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Source; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1120);
/* harmony import */ var _treeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4164);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1457);







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400
  },
  padding: {
    margin: "0px 10px"
  }
});
function Source() {
  const classes = useStyles();
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_treeview__WEBPACK_IMPORTED_MODULE_2__.default, {
        setData: setData
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.padding,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_table__WEBPACK_IMPORTED_MODULE_3__.default, {
        value: data
      })
    })]
  });
}

/***/ }),

/***/ 1457:
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
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2302);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9613);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8222);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6847);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3750);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7394);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9895);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
















function createData(resource, name, driver, profile) {
  return {
    resource,
    name,
    driver,
    profile
  };
}

const rows = [createData('RES_HQS_FIN_001_901', "General Corporate", "FTE", "AUDIT"), createData('RES_HQS_FIN_006_06', "Mgr audit", "FTE", "AUDIT"), createData('RES_HQS_FIN_006_532', "Sr.Auditor", "FTE", "AUDIT"), createData('RES_HQS_FIN_006_9067', "Auditor", "FTE", "AUDIT")];

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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      children: headCells.map(headCell => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        align: 'left',
        padding: headCell.disablePadding ? 'none' : "default",
        sortDirection: orderBy === headCell.id ? order : false,
        children: headCell.label
      }, headCell.id))
    })
  });
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%'
  },
  container: {
    maxHeight: "37vh",
    minHeight: "37vh",
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
  const [row, setRow] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(5);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.driver.source);
  const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.account);
  const [temptable, setTemptable] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]); // useEffect(()=>{
  //   if(data.length!==0) {
  //   let temp = [...row]
  //   data.map((item) =>{
  //       let tempobj = {resource:item.refNum , name:item.name , driver:"FTE" , profile:"AUDIT_SERVICE"}
  //       temp.find((item)=> item.name=== tempobj.name) ?"": temp.push(tempobj)
  //   })
  //   setRow([...temp])}
  // },[data])

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (account.accountdetails !== undefined) {
      let accounts = account.accountdetails[0];
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://[::1]:3000/account-drivers/similaraccounts", {
        params: {
          period: accounts.period,
          driver: accounts.driver,
          profile: accounts.profile
        }
      }).then(res => setTemptable(res.data));
    }
  }, [account, data, props.value]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let temp = [];
    temptable.map(item => {
      let obj = {
        resource: item.refNum,
        name: item.AH.name,
        driver: item.driver,
        profile: item.profile
      };
      temp.push(obj);
    });
    setRow(temp);
  }, [temptable]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = row.map(n => n.name);
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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, row.length - page * rowsPerPage);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
      className: classes.paper,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        className: classes.container,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
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
            rowCount: row.length
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
            children: [stableSort(row, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                hover: true,
                onClick: event => handleClick(event, row.name),
                role: "checkbox",
                "aria-checked": isItemSelected,
                tabIndex: -1,
                selected: isItemSelected,
                className: classes.rowdata,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  padding: "none",
                  children: row.resource
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  children: row.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  children: row.driver
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  align: "left",
                  children: row.profile
                })]
              }, row.name);
            }), emptyRows > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              style: {
                height: "auto"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                colSpan: 6
              })
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ 4164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Treeview; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5425);
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(131);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1084);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7305);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6908);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4436);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3700);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(194);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(282);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












 // dropdown








function StyledTreeItem(props) {
  const classes = (0,_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .useTreeItemStyles */ .AC)();

  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor
  } = props,
        other = _objectWithoutProperties(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, _objectSpread({
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.labelRoot,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      })
    }),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)({
  root: {
    height: 215,
    flexGrow: 1,
    overflow: "auto",
    border: "1px solid",
    margin: 10,
    borderRadius: 6
  },
  formControl: {
    marginRight: 5,
    minWidth: 120
  },
  labelname: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "75%",
    transform: "translate(14px,3px) scale(1)",
    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      // transform: "translate(14px, 0px) scale(0.75)"
      display: "none"
    }
  },
  treeviewtop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkbox: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#810000"
    }
  }
});
function Treeview({
  setData
}) {
  const classes = useStyles();
  const {
    0: datum,
    1: setDatum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: Treeitems,
    1: setTreeitems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([..._JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__]);
  const Treeview = [];
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  let {
    0: node,
    1: setNode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    0: stages,
    1: setStages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: driver,
    1: setDriver
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  let stage = "";
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.header.stage);
  const period = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.header.period);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.account.accountdetails);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview");
    temptreeview.then(res => res.json()).then(tempdata => setTreeitems(tempdata));
    setData("");
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    Treeitems.map(item => {
      if (item.stage === data) {
        Treeview.push(item);
      }
    }); // to get the higher node

    Treeview.map(item => {
      if (node < item.Node) {
        node = item.Node;
      }
    });
    setNode(node);

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Object.assign(key, {
            ["checked"]: false
          });

          if (key.treeView.length !== 0) {
            key.treeView.map(item => {
              Object.assign(item, {
                ["checked"]: false
              });
            });
          }
        }
      });
    } // to push the tree nodes inside the other nodes


    let deletenode = [];

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Treeview.map(item => {
            if (item.refNum === key.parentRefNum) {
              const bool = item.treeView.some(item => item._id === key._id);
              {
                !bool ? item.treeView = [...item.treeView, key] : item.treeView = [...item.treeView];
              }
              deletenode.push(index);
            }
          });
        }
      });
    }

    let tempdata = [];

    for (let i = 0; i < Treeview.length; i++) {
      if (!deletenode.includes(i)) {
        tempdata.push(Treeview[i]);
      }
    }

    setDatum([...tempdata]);
  }, [_JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__, Treeitems]);

  const Treeitem = props => {
    const {
      parent
    } = props;
    return props.data.map(item => {
      return !(item.treeView === undefined || item.treeView.length === 0) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id,
        labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
            className: classes.checkbox,
            checked: item.checked,
            onClick: e => handleselectall(e, item)
          }), " ", item.name]
        }),
        color: "#810000",
        bgColor: "#EEEBDD",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
          data: item.treeView,
          parent: parent
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id.$oid,
        labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
            className: classes.checkbox,
            checked: item.checked,
            onClick: e => handlecheckbox(props.data, item, parent)
          }), " ", item.name]
        }),
        color: "#810000",
        bgColor: "#EEEBDD"
      });
    });
  };

  const selectall = props => {
    props["checked"] = true;

    if (props.treeView === undefined) {
      selected.push(props);
    }

    setSelected([...selected]);
    let a = props;

    if (a.treeView && a.treeView.length !== 0 || a.treeView !== undefined) {
      for (let i = 0; i < a.treeView.length; i++) {
        a.treeView[i]["checked"] = true;
        selectall(a.treeView[i]);
      }
    }
  };

  const unselectall = props => {
    props["checked"] = false;

    if (props.treeView === undefined) {
      const index = selected.findIndex(item => item.name === props.name);
      selected.splice(index, 1);
    }

    setSelected([...selected]);
    let a = props;

    if (a.treeView && a.treeView.length !== 0 || a.treeView !== undefined) {
      for (let i = 0; i < a.treeView.length; i++) {
        a.treeView[i]["checked"] = false;
        unselectall(a.treeView[i]);
      }
    }
  }; // for single select 


  const selectparent = (props, state) => {
    let parentrefnum = props;
    let value = state;

    for (let i = node; i > 0; i--) {
      Treeitems.map(item => {
        if (parentrefnum === item.refNum) {
          if (item.treeView !== undefined && item.treeView.length !== 0) {
            const status = item.treeView.every(key => key["checked"] === true);

            if (status) {
              item["checked"] = true;
              parentrefnum = item.parentRefNum;
            } else {
              item["checked"] = false;
              parentrefnum = item.parentRefNum;
            }
          } else {
            item["checked"] = value;
            parentrefnum = item.parentRefNum;
          }
        }
      });
    }
  };

  const handleselectall = (e, props) => {
    if (props["checked"] === false) {
      props["checked"] = true;

      if (props.treeView.length !== 0) {
        for (let i = 0; i < props.treeView.length; i++) {
          selectall(props.treeView[i]);
        }
      }

      selectparent(props.parentRefNum, true);
    } else if (props["checked"] === true) {
      props["checked"] = false;

      if (props.treeView.length !== 0) {
        for (let i = 0; i < props.treeView.length; i++) {
          unselectall(props.treeView[i]);
        }
      }

      selectparent(props.parentRefNum, false);
    }

    setDatum([...datum]);
  };

  const handlecheckbox = (item, props, data) => {
    let count = 0;

    if (props["checked"] === false) {
      selected.push(props);
      setSelected([...selected]);
      props["checked"] = true;
    } else {
      props["checked"] = false;
      const a = selected.findIndex(item => item.name === props.name);
      selected.splice(a, 1);
      setSelected([...selected]);
    }

    item.length !== 0 && item.map(key => {
      if (key["checked"] === true) {
        count = count + 1;
      }
    });

    if (count === item.length && data !== undefined) {
      let parentrefnum = props.parentRefNum;
      let value = true;
      selectparent(parentrefnum, value);
    } else if (data !== undefined) {
      let parentrefnum = props.parentRefNum;
      let value = false;
      selectparent(parentrefnum, value);
    }

    setDatum([...datum]);
  };

  const refresh = props => {
    props.map(item => {
      item["checked"] = false;

      if (item.treeView !== undefined) {
        item["checked"] = false;
        refresh(item.treeView);
      }
    });
  };

  const Addassignment = () => {
    selected.map(item => {
      axios__WEBPACK_IMPORTED_MODULE_8___default().get("http://[::1]:3000/account-drivers/accountDetails", {
        params: {
          period: period,
          refNum: item.refNum
        }
      }).then(res => {
        console.log(res.data);
        let final = {
          refNum: item.refNum,
          period: period,
          driver: state[0].driverLink[0].driverName,
          profile: state[0].profile
        };
        axios__WEBPACK_IMPORTED_MODULE_8___default()({
          method: "patch",
          url: "http://[::1]:3000/account-drivers/assignDriverProfile",
          params: final
        }).then(res => {
          if (res.statusText === "OK") {
            setData("OK");
          }
        });
      }).catch(err => console.log(err));
      datum.map(item => {
        item["checked"] = false;
        item.treeView !== undefined && refresh(item.treeView);
      });
      setDatum([...datum]);
      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_12__/* .source */ .q)(selected));
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classes.treeviewtop,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
        variant: "outlined",
        disabled: true,
        className: classes.formControl,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          className: classes.labelname,
          id: "demo-simple-select-outlined-label",
          children: "Financial"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
          labelId: "demo-simple-select-outlined-label",
          id: "demo-simple-select-outlined",
          label: "Age",
          input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .Bootstrapdropdownlong */ .xi, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
        variant: "contained",
        color: "primary",
        onClick: Addassignment,
        size: "small",
        children: "Assign Selected"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      className: classes.root,
      defaultExpanded: ['3'],
      defaultCollapseIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default()), {}),
      defaultExpandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default()), {}),
      defaultEndIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          width: 24
        }
      }),
      children: datum.map(item => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
          nodeId: item._id,
          labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
              className: classes.checkbox,
              checked: item.checked,
              onClick: e => item.treeView.length !== 0 ? handleselectall(e, item) : handlecheckbox([], item)
            }), " ", item.name]
          }),
          color: "#810000",
          bgColor: "#EEEBDD",
          children: item.treeView.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
            data: item.treeView,
            parent: item
          })
        });
      })
    })]
  });
}

/***/ }),

/***/ 1090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2543);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5258);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1423);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2014);
/* harmony import */ var _onetreeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7895);
/* harmony import */ var _Sourceaccount_sourceaccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3386);
/* harmony import */ var _DriverAssignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5355);
/* harmony import */ var _Driverdictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7774);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function TabPanel(props) {
  const {
    children,
    value,
    index,
    padding
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index", "padding"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      padding: padding,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        children: children
      })
    })
  }));
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  treeviewtab: {
    height: "74vh",
    border: "1px solid",
    padding: "6px 8px",
    borderRadius: 6
  }
});

function Assignment(props) {
  const {
    classes
  } = props;
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        value: value,
        onChange: handleChange,
        "aria-label": "simple tabs example",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread({
          label: "Destination"
        }, a11yProps(0))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread({
          label: "Driver Dictionary"
        }, a11yProps(1))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread({
          label: "Source Account"
        }, a11yProps(2))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread({
          label: "Driver Assignment"
        }, a11yProps(3)))]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
      padding: "10px",
      className: classes.tabpadding,
      value: value,
      index: 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.treeviewtab,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_onetreeview__WEBPACK_IMPORTED_MODULE_2__.default, {})
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
      padding: "12px",
      className: classes.tabpadding,
      value: value,
      index: 1,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Driverdictionary__WEBPACK_IMPORTED_MODULE_5__.default, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
      padding: "10px",
      className: classes.tabpadding,
      value: value,
      index: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sourceaccount_sourceaccount__WEBPACK_IMPORTED_MODULE_3__.default, {})
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
      padding: "8px",
      className: classes.tabpadding,
      value: value,
      index: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DriverAssignment__WEBPACK_IMPORTED_MODULE_4__.default, {})
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(styles)(Assignment));

/***/ }),

/***/ 7895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Treeview; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5425);
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(131);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1084);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7305);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6908);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4436);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3700);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(194);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(282);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












 // dropdown







function StyledTreeItem(props) {
  const classes = (0,_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .useTreeItemStyles */ .AC)();

  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor
  } = props,
        other = _objectWithoutProperties(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, _objectSpread({
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: classes.labelRoot,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        variant: "body2",
        className: classes.labelText,
        children: labelText
      })
    }),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other));
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(() => ({
  root: {
    height: "67vh",
    flexGrow: 1,
    overflow: "auto"
  },
  formControl: {
    marginRight: 5,
    minWidth: 120
  },
  labelname: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "75%",
    transform: "translate(14px,3px) scale(1)",
    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      // transform: "translate(14px, 0px) scale(0.75)"
      display: "none"
    }
  },
  treeviewtop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkbox: {
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#810000"
    }
  }
}));
function Treeview() {
  const classes = useStyles();
  const {
    0: datum,
    1: setDatum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: Treeitems,
    1: setTreeitems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([..._JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__]);
  const Treeview = [];
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  let {
    0: node,
    1: setNode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.header.stage);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    0: stages,
    1: setStages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const driver = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.modal.driver);
  let stage = "";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_11__/* .drivers */ ._)([]));
    const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview");
    temptreeview.then(res => res.json()).then(tempdata => setTreeitems(tempdata));
    const tempstage = fetch("http://[::1]:3000/stages");
    tempstage.then(res => res.json()).then(d => {
      setStages(d);
    });
  }, [data, driver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let highorder = 0;
    let temporder = "";
    stages.map(item => {
      if (item.stageName === data) {
        temporder = item.stageOrder;
      }
    });
    stages.map(item => {
      if (highorder < item.stageOrder) {
        highorder = item.stageOrder;
      }
    });
    let order = "";
    stages.map(item => {
      if (item.stageOrder <= highorder && item.stageOrder === temporder + 1) {
        order = item.stageName;
      }
    });
    Treeitems.map(item => {
      if (item.stage === order) {
        Treeview.push(item);
      }
    }); // to get the higher node

    Treeview.map(item => {
      if (node < item.Node) {
        node = item.Node;
      }
    });
    setNode(node);

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Object.assign(key, {
            ["checked"]: false
          });

          if (key.treeView.length !== 0) {
            key.treeView.map(item => {
              Object.assign(item, {
                ["checked"]: false
              });
            });
          }
        }
      });
    } // to push the tree nodes inside the other nodes


    let deletenode = [];

    for (let i = node; i > 0; i--) {
      Treeview.map((key, index) => {
        if (key.Node === i) {
          Treeview.map(item => {
            if (item.refNum === key.parentRefNum) {
              const bool = item.treeView.some(item => item._id === key._id);
              {
                !bool ? item.treeView = [...item.treeView, key] : item.treeView = [...item.treeView];
              }
              deletenode.push(index);
            }
          });
        }
      });
    }

    let tempdata = [];

    for (let i = 0; i < Treeview.length; i++) {
      if (!deletenode.includes(i)) {
        tempdata.push(Treeview[i]);
      }
    }

    setDatum([...tempdata]);
  }, [_JSON_TreeNodes_json__WEBPACK_IMPORTED_MODULE_5__, Treeitems]);

  const Treeitem = props => {
    const {
      parent
    } = props;
    return props.data.map(item => {
      // TreeNodes,parent [{2a{3}},{2b}]  
      return !(item.treeView === undefined || item.treeView.length === 0) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id,
        labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
            className: classes.checkbox,
            checked: item.checked,
            onClick: e => handleselectall(e, item)
          }), " ", item.name]
        }),
        color: "#810000",
        bgColor: "#EEEBDD",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
          data: item.treeView,
          parent: parent
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
        nodeId: item._id,
        labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
            className: classes.checkbox,
            checked: item.checked,
            onClick: e => handlecheckbox(props.data, item, parent)
          }), " ", item.name]
        }),
        color: "#810000",
        bgColor: "#EEEBDD"
      });
    });
  };

  const selectall = props => {
    // level 2 = 3a 3b
    props["checked"] = true;

    if (props.treeView === undefined) {
      selected.push(props);
    }

    setSelected([...selected]);
    let a = props; // level 2

    if (a.treeView && a.treeView.length !== 0 || a.treeView !== undefined) {
      for (let i = 0; i < a.treeView.length; i++) {
        a.treeView[i]["checked"] = true;
        selectall(a.treeView[i]); //level 3b
      }
    }
  };

  const unselectall = props => {
    props["checked"] = false;

    if (props.treeView === undefined) {
      const index = selected.findIndex(item => item.name === props.name);
      selected.splice(index, 1);
    }

    setSelected([...selected]);
    let a = props;

    if (a.treeView && a.treeView.length !== 0 || a.treeView !== undefined) {
      for (let i = 0; i < a.treeView.length; i++) {
        a.treeView[i]["checked"] = false;
        unselectall(a.treeView[i]);
      }
    }
  };

  const selectparent = (props, state) => {
    // children selected parent selected
    let parentrefnum = props; // level1

    let value = state; // true or false

    for (let i = node; i > 0; i--) {
      Treeitems.map(item => {
        if (parentrefnum === item.refNum) {
          if (item.treeView !== undefined && item.treeView.length !== 0) {
            const status = item.treeView.every(key => key["checked"] === true);

            if (status) {
              item["checked"] = true;
              parentrefnum = item.parentRefNum;
            } else {
              item["checked"] = false;
              parentrefnum = item.parentRefNum;
            }
          } else {
            item["checked"] = value;
            parentrefnum = item.parentRefNum;
          }
        }
      });
    }
  }; //parent


  const handleselectall = (e, props) => {
    // level 2 {level 3a , level 3b}
    if (props["checked"] === false) {
      props["checked"] = true;

      if (props.treeView.length !== 0) {
        for (let i = 0; i < props.treeView.length; i++) {
          selectall(props.treeView[i]);
        }
      }

      selectparent(props.parentRefNum, true);
    } else if (props["checked"] === true) {
      props["checked"] = false;

      if (props.treeView.length !== 0) {
        for (let i = 0; i < props.treeView.length; i++) {
          unselectall(props.treeView[i]);
        }
      }

      selectparent(props.parentRefNum, false);
    }

    setDatum([...datum]);
  }; //children


  const handlecheckbox = (item, props, data) => {
    // treenodes,children,parent
    // => item=>props.data , props=>item , data=parent
    let count = 0;

    if (props["checked"] === false) {
      selected.push(props);
      setSelected([...selected]);
      props["checked"] = true;
    } else {
      props["checked"] = false;
      const a = selected.findIndex(item => item.name === props.name);
      selected.splice(a, 1);
      setSelected([...selected]);
    }

    item.length !== 0 && item.map(key => {
      if (key["checked"] === true) {
        count = count + 1;
      }
    });

    if (count === item.length && data !== undefined) {
      let parentrefnum = props.parentRefNum;
      let value = true;
      selectparent(parentrefnum, value);
    } else if (data !== undefined) {
      let parentrefnum = props.parentRefNum;
      let value = false;
      selectparent(parentrefnum, value);
    }

    setDatum([...datum]);
  };

  const refresh = props => {
    props.map(item => {
      item["checked"] = false;

      if (item.treeView !== undefined) {
        item["checked"] = false;
        refresh(item.treeView);
      }
    });
  };

  const Addassignment = () => {
    dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_11__/* .drivers */ ._)(selected));
    datum.map(item => {
      item["checked"] = false;
      item.treeView !== undefined && refresh(item.treeView);
    });
    setDatum([...datum]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classes.treeviewtop,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
        variant: "outlined",
        disabled: true,
        className: classes.formControl,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
          className: classes.labelname,
          id: "demo-simple-select-outlined-label",
          children: "Resource"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
          labelId: "demo-simple-select-outlined-label",
          id: "demo-simple-select-outlined",
          label: "Age",
          input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_inputs__WEBPACK_IMPORTED_MODULE_4__/* .Bootstrapdropdownlong */ .xi, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
        variant: "contained",
        color: "primary",
        onClick: Addassignment,
        size: "small",
        children: "Add Assignment"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
      className: classes.root,
      defaultExpanded: ['3'],
      defaultCollapseIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_2___default()), {}),
      defaultExpandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_3___default()), {}),
      defaultEndIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          width: 24
        }
      }),
      children: datum.map(item => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTreeItem, {
          nodeId: item._id,
          labelText: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
              className: classes.checkbox,
              checked: item.checked,
              onClick: e => item.treeView.length !== 0 ? handleselectall(e, item) : handlecheckbox([], item)
            }), " ", item.name]
          }),
          color: "#810000",
          bgColor: "#EEEBDD",
          children: item.treeView.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Treeitem, {
            data: item.treeView,
            parent: item
          })
        });
      })
    })]
  });
}

/***/ }),

/***/ 6908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ drivers; },
/* harmony export */   "q": function() { return /* binding */ source; }
/* harmony export */ });
/* harmony import */ var _drivertypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7695);

const drivers = data => {
  return {
    type: _drivertypes__WEBPACK_IMPORTED_MODULE_0__/* .CURRENT_ASSIGNMENT */ .B,
    payload: data
  };
};
const source = data => {
  return {
    type: _drivertypes__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_ASSIGNMENT */ .O,
    payload: data
  };
};

/***/ }),

/***/ 7695:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ CURRENT_ASSIGNMENT; },
/* harmony export */   "O": function() { return /* binding */ SOURCE_ASSIGNMENT; }
/* harmony export */ });
const CURRENT_ASSIGNMENT = "CURRENT_ASSIGNMENT";
const SOURCE_ASSIGNMENT = "SOURCE_ASSIGNMENT";

/***/ })

};
;
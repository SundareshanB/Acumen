exports.id = 5436;
exports.ids = [5436];
exports.modules = {

/***/ 5436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SimpleModal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(65);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(1423);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(2014);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(5639);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 5 modules
var Select = __webpack_require__(194);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(2302);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(9613);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(8222);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(6847);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(7394);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(9895);
;// CONCATENATED MODULE: ./pages/JSON/periods.json
var periods_namespaceObject = JSON.parse('[{"_id":{"$oid":"60ddac13b8b98f3b20954f28"},"PeriodName":"2014_Actual","StartDate":{"$date":"2016-11-29T18:30:00Z"},"EndDate":{"$date":"2016-11-29T18:30:00Z"},"Scenario":"Actual","Week":49,"Month":8,"Quarter":0,"Year":2016},{"_id":{"$oid":"60ddac13b8b98f3b20954f29"},"PeriodName":"2014_Plan","StartDate":{"$date":"2014-01-28T10:05:00Z"},"EndDate":{"$date":"2014-01-28T10:05:00Z"},"Scenario":"Budget","Week":5,"Month":-2,"Quarter":0,"Year":2014},{"_id":{"$oid":"60ddac13b8b98f3b20954f2a"},"PeriodName":"2015_Plan","StartDate":{"$date":"2014-12-31T18:30:00Z"},"EndDate":{"$date":"2015-12-30T18:30:00Z"},"Scenario":"Budget","Week":0,"Month":0,"Quarter":0,"Year":2015}]');
// EXTERNAL MODULE: ./components/inputs.js
var inputs = __webpack_require__(64);
// EXTERNAL MODULE: ./pages/JSON/costtypes.json
var costtypes = __webpack_require__(5440);
;// CONCATENATED MODULE: ./components/Table.js




















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

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
    rowsarray
  } = props;
  const headCells = [];
  rowsarray.map(item => {
    if (item !== "_id" && item !== "Dest_Ref_Num" && item !== "ModBy" && item !== "ModTime" && item !== "Ref_Num" && item !== "__v" && item !== "Timestamp") {
      headCells.push({
        id: item,
        numeric: false,
        disablePadding: true,
        label: item
      });
    } else if (item === "Ref_Num") {
      headCells.push({
        id: item,
        numeric: true,
        disablePadding: false,
        label: 'Reference Number'
      });
    } else if (item === "Dest_Ref_Num") {
      headCells.push({
        id: item,
        numeric: true,
        disablePadding: false,
        label: 'Destination Reference Number'
      });
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx(TableHead/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(TableRow/* default */.Z, {
      children: headCells.map(headCell => /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
        children: headCell.label
      }, headCell.id))
    })
  });
}

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 700
  },
  Tablebody: {
    height: "53vh"
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  search: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "15px"
  },
  searchinput: {
    display: "flex",
    alignItems: "center"
  }
}));
function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = external_react_default().useState('asc');
  const [orderBy, setOrderBy] = external_react_default().useState('calories');
  const [selected, setSelected] = external_react_default().useState([]);
  const [page, setPage] = external_react_default().useState(0);
  const [dense, setDense] = external_react_default().useState(false);
  const [rowsPerPage, setRowsPerPage] = external_react_default().useState(5);
  const Rows = [];
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(true);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(props.data);
  (0,external_react_.useEffect)(() => {
    if (props.data.length !== 0) {
      setOpen(false);
    }
  });
  (0,external_react_.useEffect)(() => {
    props.row.map(item => {
      if (item !== "_id" && item !== "ModBy" && item !== "ModTime" && item !== "__v" && item !== "Timestamp") {
        Rows.push(item);
      }
    });
  }, [props]); //   const handleSelectAllClick = (event) => {
  //     if (event.target.checked) {
  //       const newSelecteds = rows.map((n) => n.name);
  //       setSelected(newSelecteds);
  //       return;
  //     }
  //     setSelected([]);
  //   };

  const Tablebody = props => {
    let data = props.data;
    return props.row.map(item => item !== "_id" && item !== "ModBy" && item !== "Timestamp" && item !== "ModTime" && item !== "__v" && (item !== "CostType" && item !== "Period" ? /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
      align: "left",
      children: data[item]
    }) : item === "CostType" ? /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
      align: "left",
      children: /*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
        labelId: "demo-customized-select-label",
        id: "demo-customized-select",
        input: /*#__PURE__*/jsx_runtime_.jsx(inputs/* Bootstrapdropdown */.AO, {}),
        defaultValue: data[item],
        children: costtypes.map(key => /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
          value: key.costtype,
          children: key.costtype
        }))
      })
    }) : item === "Period" && /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
      align: "left",
      children: /*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
        labelId: "demo-customized-select-label",
        id: "demo-customized-select",
        input: /*#__PURE__*/jsx_runtime_.jsx(inputs/* Bootstrapdropdown */.AO, {}),
        defaultValue: data[item],
        children: periods_namespaceObject.map(key => /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
          value: key.PeriodName,
          children: key.PeriodName
        }))
      })
    })));
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

  const Search = key => {
    const temp = props.data.filter(item => item.Period === key);
    setData([...temp]);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.search,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Select/* default */.Z, {
        labelId: "demo-customized-select-label",
        id: "demo-customized-select",
        input: /*#__PURE__*/jsx_runtime_.jsx(inputs/* Bootstrapdropdown */.AO, {}),
        children: periods_namespaceObject.map(key => /*#__PURE__*/jsx_runtime_.jsx(MenuItem/* default */.Z, {
          onClick: () => Search(key.PeriodName),
          value: key.PeriodName,
          children: key.PeriodName
        }))
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.searchinput,
        children: [/*#__PURE__*/jsx_runtime_.jsx(inputs/* BootstrapTextfield */.TS, {
          size: "small",
          id: "",
          variant: "outlined"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          variant: "contained",
          color: "primary",
          style: {
            fontSize: 10,
            marginLeft: 10
          },
          children: "Search"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Paper/* default */.Z, {
      className: classes.paper,
      children: /*#__PURE__*/jsx_runtime_.jsx(TableContainer/* default */.Z, {
        className: classes.Tablebody,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Table/* default */.Z, {
          className: classes.table,
          "aria-labelledby": "tableTitle",
          size: 'small',
          "aria-label": "enhanced table",
          stickyHeader: true // stickyHeader 
          ,
          children: [/*#__PURE__*/jsx_runtime_.jsx(EnhancedTableHead, {
            classes: classes,
            numSelected: selected.length,
            order: order,
            orderBy: orderBy //   onSelectAllClick={handleSelectAllClick}
            //   onRequestSort={handleRequestSort}
            ,
            rowCount: Rows.length,
            rowsarray: props.row
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TableBody/* default */.Z, {
            children: [stableSort(data, getComparator(order, orderBy)) // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${index}`;
              return /*#__PURE__*/jsx_runtime_.jsx(TableRow/* default */.Z, {
                hover: true // onClick={(event) => handleClick(event, row.name)}
                ,
                role: "checkbox",
                "aria-checked": isItemSelected,
                tabIndex: -1,
                selected: isItemSelected,
                className: classes.rowdata,
                children: props.row && /*#__PURE__*/jsx_runtime_.jsx(Tablebody, {
                  data: row,
                  row: props.row
                })
              }, row.name);
            }), emptyRows > 0 && /*#__PURE__*/jsx_runtime_.jsx(TableRow/* default */.Z, {
              style: {
                height: "auto"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(TableCell/* default */.Z, {
                colSpan: 6
              })
            })]
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./pages/JSON/costs.json
var costs_namespaceObject = [];
;// CONCATENATED MODULE: ./pages/JSON/DataManagerCost.json
var DataManagerCost_namespaceObject = JSON.parse('[{"_id":{"$oid":"60def9e13556f3e87eab1e1e"},"Period":"2015_Plan","Cost":850,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e28"},"Ref_Num":"A","Name":"A","Parent_Ref_Num":"FIN_HQS_MKT_004"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e1f"},"Period":"2015_Plan","Cost":250,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e29"},"Ref_Num":"B","Name":"B","Parent_Ref_Num":"FIN_HQS_MKT_004"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e20"},"Period":"2015_Plan","Cost":500,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2a"},"Ref_Num":"C","Name":"C","Parent_Ref_Num":"FIN_HQS_MKT_004"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e21"},"Period":"2015_Plan","Cost":1500,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2b"},"Ref_Num":"E","Name":"E","Parent_Ref_Num":"FIN_HQS_MKT_004"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e22"},"Period":"2014_Actual","Cost":30132,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e25"},"Ref_Num":"FIN_HQS_FIN_006_IND6000","Name":"Corporate Services","Parent_Ref_Num":"FIN_HQS_FIN_006"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e23"},"Period":"2014_Plan","Cost":33372,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e25"},"Ref_Num":"FIN_HQS_FIN_006_IND6000","Name":"Corporate Services","Parent_Ref_Num":"FIN_HQS_FIN_006"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e24"},"Period":"2015_Plan","Cost":34020,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e25"},"Ref_Num":"FIN_HQS_FIN_006_IND6000","Name":"Corporate Services","Parent_Ref_Num":"FIN_HQS_FIN_006"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e25"},"Period":"2014_Actual","Cost":8148,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e26"},"Ref_Num":"FIN_HQS_FIN_006_IND8000","Name":"Business Sustaining","Parent_Ref_Num":"FIN_HQS_FIN_006"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e26"},"Period":"2014_Plan","Cost":8400,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e26"},"Ref_Num":"FIN_HQS_FIN_006_IND8000","Name":"Business Sustaining","Parent_Ref_Num":"FIN_HQS_FIN_006"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e27"},"Period":"2014_Actual","Cost":374552.7,"CostType":"USD","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e27"},"Ref_Num":"FIN_HQS_ITS_005_IND3000","Name":"Technology Services","Parent_Ref_Num":"FIN_HQS_ITS_005"}]},{"_id":{"$oid":"60def9e13556f3e87eab1e28"},"Period":"2014_Plan","Cost":421864.62,"CostType":"FTE","DMCost":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e27"},"Ref_Num":"FIN_HQS_ITS_005_IND3000","Name":"Technology Services","Parent_Ref_Num":"FIN_HQS_ITS_005"}]},{"_id":{"$oid":"60df08cfdbfe16051c4df365"},"Cost":1050,"Period":"2021","CostType":"INR","DMCost":[]}]');
;// CONCATENATED MODULE: ./pages/JSON/accountdrivers.json
var accountdrivers_namespaceObject = JSON.parse('[{"_id":{"$oid":"60df0ea145869a57fc4d5ee5"},"Ref_Num":"TEST","Driver":"TESTDriver","Profile":"TESTProfile","Period":"2021","DMAccDriver":[]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45642"},"Ref_Num":"ACT_1_1_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45643"},"Ref_Num":"ACT_1_1_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45644"},"Ref_Num":"ACT_1_1_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45645"},"Ref_Num":"ACT_1_1_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45646"},"Ref_Num":"ACT_1_1_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45647"},"Ref_Num":"ACT_1_2_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45648"},"Ref_Num":"ACT_1_2_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45649"},"Ref_Num":"ACT_1_2_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4564a"},"Ref_Num":"ACT_1_2_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4564b"},"Ref_Num":"ACT_1_2_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4564c"},"Ref_Num":"ACT_1_2_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4564d"},"Ref_Num":"ACT_1_2_3","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4564e"},"Ref_Num":"ACT_1_2_3","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4564f"},"Ref_Num":"ACT_1_2_3","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45650"},"Ref_Num":"ACT_1_3_1","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45651"},"Ref_Num":"ACT_1_3_1","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45652"},"Ref_Num":"ACT_1_3_1","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45653"},"Ref_Num":"ACT_1_3_2","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d83"},"Ref_Num":"ACT_1_3_2","Name":"Develop sales partner/alliance relationship","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45654"},"Ref_Num":"ACT_1_3_2","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d83"},"Ref_Num":"ACT_1_3_2","Name":"Develop sales partner/alliance relationship","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45655"},"Ref_Num":"ACT_1_3_2","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d83"},"Ref_Num":"ACT_1_3_2","Name":"Develop sales partner/alliance relationship","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45656"},"Ref_Num":"ACT_1_3_3","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45657"},"Ref_Num":"ACT_1_3_3","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45658"},"Ref_Num":"ACT_1_3_3","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45659"},"Ref_Num":"ACT_1_3_4","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d85"},"Ref_Num":"ACT_1_3_4","Name":"Establish sales goals and measure","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4565a"},"Ref_Num":"ACT_1_3_4","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d85"},"Ref_Num":"ACT_1_3_4","Name":"Establish sales goals and measure","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4565b"},"Ref_Num":"ACT_1_3_4","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d85"},"Ref_Num":"ACT_1_3_4","Name":"Establish sales goals and measure","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4565c"},"Ref_Num":"ACT_1_3_5","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d86"},"Ref_Num":"ACT_1_3_5","Name":"Establish customer management measure","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4565d"},"Ref_Num":"ACT_1_3_5","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d86"},"Ref_Num":"ACT_1_3_5","Name":"Establish customer management measure","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4565e"},"Ref_Num":"ACT_1_3_5","Driver":"Regional Campaign Management","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d86"},"Ref_Num":"ACT_1_3_5","Name":"Establish customer management measure","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4565f"},"Ref_Num":"ACT_1_4_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d87"},"Ref_Num":"ACT_1_4_1","Name":"Establish goals objectives  and metrics for products by channels/segment","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45660"},"Ref_Num":"ACT_1_4_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d87"},"Ref_Num":"ACT_1_4_1","Name":"Establish goals objectives  and metrics for products by channels/segment","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45661"},"Ref_Num":"ACT_1_4_1","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d87"},"Ref_Num":"ACT_1_4_1","Name":"Establish goals objectives  and metrics for products by channels/segment","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45662"},"Ref_Num":"ACT_1_4_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d88"},"Ref_Num":"ACT_1_4_2","Name":"Establish marketing budget","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45663"},"Ref_Num":"ACT_1_4_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d88"},"Ref_Num":"ACT_1_4_2","Name":"Establish marketing budget","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45664"},"Ref_Num":"ACT_1_4_2","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d88"},"Ref_Num":"ACT_1_4_2","Name":"Establish marketing budget","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45665"},"Ref_Num":"ACT_1_4_3","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d89"},"Ref_Num":"ACT_1_4_3","Name":"Develop and manage media","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45666"},"Ref_Num":"ACT_1_4_3","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d89"},"Ref_Num":"ACT_1_4_3","Name":"Develop and manage media","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45667"},"Ref_Num":"ACT_1_4_3","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d89"},"Ref_Num":"ACT_1_4_3","Name":"Develop and manage media","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45668"},"Ref_Num":"ACT_1_4_4","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8a"},"Ref_Num":"ACT_1_4_4","Name":"Develop and manage pricing","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45669"},"Ref_Num":"ACT_1_4_4","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8a"},"Ref_Num":"ACT_1_4_4","Name":"Develop and manage pricing","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4566a"},"Ref_Num":"ACT_1_4_4","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8a"},"Ref_Num":"ACT_1_4_4","Name":"Develop and manage pricing","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4566b"},"Ref_Num":"ACT_1_4_5","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8b"},"Ref_Num":"ACT_1_4_5","Name":"Develop and manage promotional activities","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4566c"},"Ref_Num":"ACT_1_4_5","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8b"},"Ref_Num":"ACT_1_4_5","Name":"Develop and manage promotional activities","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4566d"},"Ref_Num":"ACT_1_4_5","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8b"},"Ref_Num":"ACT_1_4_5","Name":"Develop and manage promotional activities","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4566e"},"Ref_Num":"ACT_1_4_6","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8c"},"Ref_Num":"ACT_1_4_6","Name":"Track customer management measure","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a4566f"},"Ref_Num":"ACT_1_4_6","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8c"},"Ref_Num":"ACT_1_4_6","Name":"Track customer management measure","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45670"},"Ref_Num":"ACT_1_4_6","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2015_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8c"},"Ref_Num":"ACT_1_4_6","Name":"Track customer management measure","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45671"},"Ref_Num":"ACT_1_4_7","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Actual","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8d"},"Ref_Num":"ACT_1_4_7","Name":"Develop and manage packaging strategy","Parent_Ref_Num":"ACT_1_4"}]},{"_id":{"$oid":"60df0ee3190a8bd3a7a45672"},"Ref_Num":"ACT_1_4_7","Driver":"Brand Management / Web Marketing","Profile":"Inherit","Period":"2014_Plan","DMAccDriver":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d8d"},"Ref_Num":"ACT_1_4_7","Name":"Develop and manage packaging strategy","Parent_Ref_Num":"ACT_1_4"}]}]');
;// CONCATENATED MODULE: ./pages/JSON/driverquantities.json
var driverquantities_namespaceObject = JSON.parse('[{"_id":{"$oid":"60ddadfbb8b98f3b20955307"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_501_Hours","Period":"2014_Actual","Driver_Qty":1500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955308"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_501_Hours","Period":"2014_Plan","Driver_Qty":1500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955309"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095530a"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095530b"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095530c"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_504_Hours","Period":"2014_Actual","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095530d"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_504_Hours","Period":"2014_Plan","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095530e"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_504_Hours","Period":"2015_Plan","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095530f"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_513_Hours","Period":"2014_Actual","Driver_Qty":3000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955310"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_513_Hours","Period":"2014_Plan","Driver_Qty":3000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955311"},"Dest_Ref_Num":"ACT_1_1_1","Driver":"RES_HQS_MKT_001_513_Hours","Period":"2015_Plan","Driver_Qty":3000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7d"},"Ref_Num":"ACT_1_1_1","Name":"Perform customer and market intelligence analysis","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955312"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_501_Hours","Period":"2014_Actual","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955313"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_501_Hours","Period":"2014_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955314"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_501_Hours","Period":"2015_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955315"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955316"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955317"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955318"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_504_Hours","Period":"2014_Actual","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955319"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_504_Hours","Period":"2014_Plan","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095531a"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_504_Hours","Period":"2015_Plan","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095531b"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_513_Hours","Period":"2014_Actual","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095531c"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_513_Hours","Period":"2014_Plan","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095531d"},"Dest_Ref_Num":"ACT_1_1_2","Driver":"RES_HQS_MKT_001_513_Hours","Period":"2015_Plan","Driver_Qty":1000,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7e"},"Ref_Num":"ACT_1_1_2","Name":"Evaluate and prioritize market opportunities","Parent_Ref_Num":"ACT_1_1"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095531e"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095531f"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955320"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955321"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955322"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955323"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955324"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955325"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955326"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955327"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2014_Actual","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955328"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2014_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955329"},"Dest_Ref_Num":"ACT_1_2_1","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2015_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d7f"},"Ref_Num":"ACT_1_2_1","Name":"Define offering and customer value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095532a"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095532b"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095532c"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095532d"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095532e"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095532f"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955330"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955331"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955332"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955333"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2014_Actual","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955334"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2014_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955335"},"Dest_Ref_Num":"ACT_1_2_2","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2015_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d80"},"Ref_Num":"ACT_1_2_2","Name":"Define pricing strategy to align to value proposition","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955336"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955337"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955338"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955339"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095533a"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095533b"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_503_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095533c"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095533d"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095533e"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_504_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095533f"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2014_Actual","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955340"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2014_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955341"},"Dest_Ref_Num":"ACT_1_2_3","Driver":"RES_HQS_MKT_002_514_Hours","Period":"2015_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d81"},"Ref_Num":"ACT_1_2_3","Name":"Define and manage channel strategy","Parent_Ref_Num":"ACT_1_2"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955342"},"Dest_Ref_Num":"ACT_1_3_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955343"},"Dest_Ref_Num":"ACT_1_3_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955344"},"Dest_Ref_Num":"ACT_1_3_1","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955345"},"Dest_Ref_Num":"ACT_1_3_1","Driver":"RES_HQS_MKT_004_509_Hours","Period":"2014_Actual","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955346"},"Dest_Ref_Num":"ACT_1_3_1","Driver":"RES_HQS_MKT_004_509_Hours","Period":"2014_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955347"},"Dest_Ref_Num":"ACT_1_3_1","Driver":"RES_HQS_MKT_004_509_Hours","Period":"2015_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d82"},"Ref_Num":"ACT_1_3_1","Name":"Develop sales forecast","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955348"},"Dest_Ref_Num":"ACT_1_3_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d83"},"Ref_Num":"ACT_1_3_2","Name":"Develop sales partner/alliance relationship","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955349"},"Dest_Ref_Num":"ACT_1_3_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d83"},"Ref_Num":"ACT_1_3_2","Name":"Develop sales partner/alliance relationship","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095534a"},"Dest_Ref_Num":"ACT_1_3_2","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d83"},"Ref_Num":"ACT_1_3_2","Name":"Develop sales partner/alliance relationship","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095534b"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Actual","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095534c"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2014_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095534d"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_001_502_Hours","Period":"2015_Plan","Driver_Qty":100,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095534e"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_509_Hours","Period":"2014_Actual","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b2095534f"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_509_Hours","Period":"2014_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955350"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_509_Hours","Period":"2015_Plan","Driver_Qty":500,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955351"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_510_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955352"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_510_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955353"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_510_Hours","Period":"2015_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955354"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_511_Hours","Period":"2014_Actual","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]},{"_id":{"$oid":"60ddadfbb8b98f3b20955355"},"Dest_Ref_Num":"ACT_1_3_3","Driver":"RES_HQS_MKT_004_511_Hours","Period":"2014_Plan","Driver_Qty":250,"Driver_Wt":1,"DriverQty":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d84"},"Ref_Num":"ACT_1_3_3","Name":"Establish overall sales budget","Parent_Ref_Num":"ACT_1_3"}]}]');
;// CONCATENATED MODULE: ./pages/JSON/assignmentprofiles.json
var assignmentprofiles_namespaceObject = JSON.parse('[{"_id":{"$oid":"60df0e9c45869a57fc4d5ee3"},"ProfileName":"TEST","Dest_Ref_Num":"Test01","Period":"2021","acName":[]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45621"},"ProfileName":"909","Dest_Ref_Num":"ACT_2_2_1","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d9d"},"Ref_Num":"ACT_2_2_1","Name":"Develop sourcing strategies","Parent_Ref_Num":"ACT_2_2"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45622"},"ProfileName":"909","Dest_Ref_Num":"ACT_2_2_2","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d9e"},"Ref_Num":"ACT_2_2_2","Name":"Select suppliers and develop/maintain contract","Parent_Ref_Num":"ACT_2_2"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45623"},"ProfileName":"911","Dest_Ref_Num":"ACT_2_2_3","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d9f"},"Ref_Num":"ACT_2_2_3","Name":"Order materials and services","Parent_Ref_Num":"ACT_2_2"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45624"},"ProfileName":"911","Dest_Ref_Num":"ACT_2_2_3","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954d9f"},"Ref_Num":"ACT_2_2_3","Name":"Order materials and services","Parent_Ref_Num":"ACT_2_2"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45625"},"ProfileName":"911","Dest_Ref_Num":"ACT_2_2_4","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954da0"},"Ref_Num":"ACT_2_2_4","Name":"Appraise and develop supplier","Parent_Ref_Num":"ACT_2_2"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45626"},"ProfileName":"911","Dest_Ref_Num":"ACT_2_2_4","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954da0"},"Ref_Num":"ACT_2_2_4","Name":"Appraise and develop supplier","Parent_Ref_Num":"ACT_2_2"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45627"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_802","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2c"},"Ref_Num":"RES_HQS_FIN_006_802","Name":"Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45628"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_802","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2c"},"Ref_Num":"RES_HQS_FIN_006_802","Name":"Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45629"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_802","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2c"},"Ref_Num":"RES_HQS_FIN_006_802","Name":"Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4562a"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_810","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2d"},"Ref_Num":"RES_HQS_FIN_006_810","Name":"Mgr - Audit","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4562b"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_810","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2d"},"Ref_Num":"RES_HQS_FIN_006_810","Name":"Mgr - Audit","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4562c"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_810","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2d"},"Ref_Num":"RES_HQS_FIN_006_810","Name":"Mgr - Audit","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4562d"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_815","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2e"},"Ref_Num":"RES_HQS_FIN_006_815","Name":"Sr Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4562e"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_815","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2e"},"Ref_Num":"RES_HQS_FIN_006_815","Name":"Sr Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4562f"},"ProfileName":"AUDIT SERVICES","Dest_Ref_Num":"RES_HQS_FIN_006_815","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2e"},"Ref_Num":"RES_HQS_FIN_006_815","Name":"Sr Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45630"},"ProfileName":"Inherit","Dest_Ref_Num":"RES_HQS_FIN_006_802","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2c"},"Ref_Num":"RES_HQS_FIN_006_802","Name":"Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45631"},"ProfileName":"INHERIT","Dest_Ref_Num":"RES_HQS_FIN_006_802","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2c"},"Ref_Num":"RES_HQS_FIN_006_802","Name":"Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45632"},"ProfileName":"Inherit","Dest_Ref_Num":"RES_HQS_FIN_007_801","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2f"},"Ref_Num":"RES_HQS_FIN_007_801","Name":"Accountant","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45633"},"ProfileName":"Inherit","Dest_Ref_Num":"RES_HQS_FIN_007_801","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2f"},"Ref_Num":"RES_HQS_FIN_007_801","Name":"Accountant","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45634"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_801","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2f"},"Ref_Num":"RES_HQS_FIN_007_801","Name":"Accountant","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45635"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_801","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2f"},"Ref_Num":"RES_HQS_FIN_007_801","Name":"Accountant","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45636"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_801","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2f"},"Ref_Num":"RES_HQS_FIN_007_801","Name":"Accountant","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45637"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_812","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e30"},"Ref_Num":"RES_HQS_FIN_007_812","Name":"Mgr - Corp Profitability","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45638"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_812","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e30"},"Ref_Num":"RES_HQS_FIN_007_812","Name":"Mgr - Corp Profitability","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a45639"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_812","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e30"},"Ref_Num":"RES_HQS_FIN_007_812","Name":"Mgr - Corp Profitability","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4563a"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_816","Period":"2014_Actual","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e31"},"Ref_Num":"RES_HQS_FIN_007_816","Name":"Sr Financial Analyst","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4563b"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_816","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e31"},"Ref_Num":"RES_HQS_FIN_007_816","Name":"Sr Financial Analyst","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4563c"},"ProfileName":"REVENUE ACCOUNTING","Dest_Ref_Num":"RES_HQS_FIN_007_816","Period":"2015_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e31"},"Ref_Num":"RES_HQS_FIN_007_816","Name":"Sr Financial Analyst","Parent_Ref_Num":"RES_HQS_FIN_007"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4563d"},"ProfileName":"Test_profile","Dest_Ref_Num":"RES_HQS_FIN_006_802","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2c"},"Ref_Num":"RES_HQS_FIN_006_802","Name":"Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4563e"},"ProfileName":"Test_profile","Dest_Ref_Num":"RES_HQS_FIN_006_810","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2d"},"Ref_Num":"RES_HQS_FIN_006_810","Name":"Mgr - Audit","Parent_Ref_Num":"RES_HQS_FIN_006"}]},{"_id":{"$oid":"60df0ed1190a8bd3a7a4563f"},"ProfileName":"Test_profile","Dest_Ref_Num":"RES_HQS_FIN_006_815","Period":"2014_Plan","acName":[{"_id":{"$oid":"60dda8dfb8b98f3b20954e2e"},"Ref_Num":"RES_HQS_FIN_006_815","Name":"Sr Auditor","Parent_Ref_Num":"RES_HQS_FIN_006"}]}]');
;// CONCATENATED MODULE: ./pages/JSON/volumes.json
var volumes_namespaceObject = JSON.parse('[{"_id":{"$oid":"60df0d033556f3e87eab20da"},"Ref_Num":"A","Period":"2014_Actual","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20db"},"Ref_Num":"A","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20dc"},"Ref_Num":"A","Period":"2015_Plan","Volume":"1","UOM":"Nos"},{"_id":{"$oid":"60df0d033556f3e87eab20dd"},"Ref_Num":"ACT_1_1_2","Period":"2014_Plan","Volume":"2","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20de"},"Ref_Num":"ACT_2_1_3","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20df"},"Ref_Num":"ACT_2_1_4","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e0"},"Ref_Num":"ACT_2_1_8","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e1"},"Ref_Num":"ACT_2_2_1","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e2"},"Ref_Num":"ACT_6_10_2","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e3"},"Ref_Num":"ACT_6_8_1","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e4"},"Ref_Num":"ACT_6_8_1","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e5"},"Ref_Num":"ACT_6_8_2","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e6"},"Ref_Num":"B","Period":"2014_Actual","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e7"},"Ref_Num":"B","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e8"},"Ref_Num":"B","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20e9"},"Ref_Num":"C","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20ea"},"Ref_Num":"C","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20eb"},"Ref_Num":"E","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20ec"},"Ref_Num":"E","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20ed"},"Ref_Num":"F","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20ee"},"Ref_Num":"FIN_HQS_FIN_006_IND6000","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20ef"},"Ref_Num":"FIN_HQS_FIN_006_IND6000","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f0"},"Ref_Num":"FIN_HQS_FIN_006_IND8000","Period":"2014_Actual","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f1"},"Ref_Num":"FIN_HQS_FIN_006_IND8000","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f2"},"Ref_Num":"FIN_HQS_FIN_006_IND8000","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f3"},"Ref_Num":"FIN_HQS_ITS_005_IND3000","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f4"},"Ref_Num":"RES_HQS_FIN_006_802","Period":"2014_Actual","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f5"},"Ref_Num":"RES_HQS_FIN_006_802","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f6"},"Ref_Num":"RES_HQS_FIN_006_802","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f7"},"Ref_Num":"RES_HQS_FIN_006_810","Period":"2014_Plan","Volume":"1"},{"_id":{"$oid":"60df0d033556f3e87eab20f8"},"Ref_Num":"RES_HQS_FIN_006_810","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20f9"},"Ref_Num":"RES_HQS_FIN_006_815","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20fa"},"Ref_Num":"RES_HQS_FIN_006_815","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20fb"},"Ref_Num":"RES_HQS_FIN_007_801","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20fc"},"Ref_Num":"RES_HQS_FIN_007_812","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20fd"},"Ref_Num":"RES_HQS_FIN_007_816","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20fe"},"Ref_Num":"SVC_HQS_BUS_IND8001","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab20ff"},"Ref_Num":"SVC_HQS_BUS_IND8001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2100"},"Ref_Num":"SVC_HQS_BUS_IND8002","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2101"},"Ref_Num":"SVC_HQS_BUS_IND8002","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2102"},"Ref_Num":"SVC_HQS_BUS_IND8003","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2103"},"Ref_Num":"SVC_HQS_BUS_IND8003","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2104"},"Ref_Num":"SVC_HQS_CDS_IND10001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2105"},"Ref_Num":"SVC_HQS_CDS_IND10002","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2106"},"Ref_Num":"SVC_HQS_CDS_IND10004","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2107"},"Ref_Num":"SVC_HQS_CDS_IND10005","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2108"},"Ref_Num":"SVC_HQS_CDS_IND10006","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2109"},"Ref_Num":"SVC_HQS_CDS_IND10007","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab210a"},"Ref_Num":"SVC_HQS_CDS_IND10008","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab210b"},"Ref_Num":"SVC_HQS_CDS_IND10010","Period":"2015_Plan","Volume":"1"},{"_id":{"$oid":"60df0d033556f3e87eab210c"},"Ref_Num":"SVC_HQS_CHK_IND20010","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab210d"},"Ref_Num":"SVC_HQS_CHK_IND20015","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab210e"},"Ref_Num":"SVC_HQS_CHK_IND20016","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab210f"},"Ref_Num":"SVC_HQS_CHK_IND20017","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2110"},"Ref_Num":"SVC_HQS_CHK_IND20018","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2111"},"Ref_Num":"SVC_HQS_CHK_IND20019","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2112"},"Ref_Num":"SVC_HQS_CHK_IND20022","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2113"},"Ref_Num":"SVC_HQS_CHK_IND20023","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2114"},"Ref_Num":"SVC_HQS_COH_IND7001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2115"},"Ref_Num":"SVC_HQS_COS_IND6001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2116"},"Ref_Num":"SVC_HQS_COS_IND6002","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2117"},"Ref_Num":"SVC_HQS_FIN_IND5001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2118"},"Ref_Num":"SVC_HQS_FIN_IND5002","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab2119"},"Ref_Num":"SVC_HQS_HRS_IND2001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab211a"},"Ref_Num":"SVC_HQS_HRS_IND2002","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab211b"},"Ref_Num":"SVC_HQS_HRS_IND2003","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab211c"},"Ref_Num":"SVC_HQS_MKT_IND4001","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab211d"},"Ref_Num":"SVC_HQS_MKT_IND4002","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab211e"},"Ref_Num":"SVC_HQS_MKT_IND4003","Period":"2015_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d033556f3e87eab211f"},"Ref_Num":"SVC_HQS_OPS_IND1001","Period":"2014_Plan","Volume":"1","UOM":""},{"_id":{"$oid":"60df0d1937b7243c04ea4f13"},"Ref_Num":"TEST","Period":"2021","Volume":2,"UOM":"Nos"}]');
;// CONCATENATED MODULE: ./pages/JSON/centerhierarchies.json
var centerhierarchies_namespaceObject = JSON.parse('[{"_id":{"$oid":"60dda88fb8b98f3b20954d1d"},"Ref_Num":"A_OPHAN","Name":"Orphan","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d1e"},"Ref_Num":"ACT_1","Name":"1.0 Market and Sell Products and Services","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d1f"},"Ref_Num":"ACT_1_1","Name":"1.1 Understand markets customers  and capabilities","Stage":"Activity","Parent_Ref_Num":"ACT_1","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d20"},"Ref_Num":"ACT_1_2","Name":"1.2 Develop marketing strategy","Stage":"Activity","Parent_Ref_Num":"ACT_1","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d21"},"Ref_Num":"ACT_1_3","Name":"1.3 Develop sales strategy","Stage":"Activity","Parent_Ref_Num":"ACT_1","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d22"},"Ref_Num":"ACT_1_4","Name":"1.4 Develop and manage marketing plans","Stage":"Activity","Parent_Ref_Num":"ACT_1","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d23"},"Ref_Num":"ACT_1_5","Name":"1.5 Develop and manage sales plans","Stage":"Activity","Parent_Ref_Num":"ACT_1","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d24"},"Ref_Num":"ACT_2","Name":"2.0 Deliver Products and Services","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d25"},"Ref_Num":"ACT_2_1","Name":"2.1 Plan for and acquire necessary resources (Supply Chain Planning)","Stage":"Activity","Parent_Ref_Num":"ACT_2","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d26"},"Ref_Num":"ACT_2_2","Name":"2.2 Procure materials and services","Stage":"Activity","Parent_Ref_Num":"ACT_2","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d27"},"Ref_Num":"ACT_2_3","Name":"2.3 Produce/Manufacture/Deliver product","Stage":"Activity","Parent_Ref_Num":"ACT_2","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d28"},"Ref_Num":"ACT_2_4","Name":"2.4 Deliver service to customer","Stage":"Activity","Parent_Ref_Num":"ACT_2","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d29"},"Ref_Num":"ACT_2_5","Name":"2.5 Manage logistics and warehousing","Stage":"Activity","Parent_Ref_Num":"ACT_2","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d2a"},"Ref_Num":"ACT_3","Name":"3.0 Manage Customer Service","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d2b"},"Ref_Num":"ACT_3_1","Name":"3.1 Develop customer care/customer service strategy","Stage":"Activity","Parent_Ref_Num":"ACT_3","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d2c"},"Ref_Num":"ACT_3_2","Name":"3.2 Plan and manage customer service operations","Stage":"Activity","Parent_Ref_Num":"ACT_3","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d2d"},"Ref_Num":"ACT_3_3","Name":"3.3 Measure and evaluate customer service operations","Stage":"Activity","Parent_Ref_Num":"ACT_3","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d2e"},"Ref_Num":"ACT_4","Name":"4.0 Develop and Manage Human Capital","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d2f"},"Ref_Num":"ACT_4_1","Name":"4.1 Develop and manage human resources (HR) planning  policies  and strategies","Stage":"Activity","Parent_Ref_Num":"ACT_4","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d30"},"Ref_Num":"ACT_4_2","Name":"4.2 Recruit  source and select employees","Stage":"Activity","Parent_Ref_Num":"ACT_4","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d31"},"Ref_Num":"ACT_4_3","Name":"4.3 Develop and counsel employees","Stage":"Activity","Parent_Ref_Num":"ACT_4","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d32"},"Ref_Num":"ACT_4_4","Name":"4.4 Reward and retain employees","Stage":"Activity","Parent_Ref_Num":"ACT_4","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d33"},"Ref_Num":"ACT_4_5","Name":"4.5 Redeploy and retire employees","Stage":"Activity","Parent_Ref_Num":"ACT_4","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d34"},"Ref_Num":"ACT_4_6","Name":"4.6 Manage employee information","Stage":"Activity","Parent_Ref_Num":"ACT_4","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d35"},"Ref_Num":"ACT_5","Name":"5.0 Manage Information Technology","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d36"},"Ref_Num":"ACT_5_1","Name":"5.1 Manage the business of information technology","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d37"},"Ref_Num":"ACT_5_2","Name":"5.2 Develop and manage IT customer relationships","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d38"},"Ref_Num":"ACT_5_3","Name":"5.3 Manage business resiliency and risk","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d39"},"Ref_Num":"ACT_5_4","Name":"5.4 Manage enterprise information","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d3a"},"Ref_Num":"ACT_5_5","Name":"5.5 Develop and maintain information technology solutions","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d3b"},"Ref_Num":"ACT_5_6","Name":"5.6 Deploy information technology solutions","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d3c"},"Ref_Num":"ACT_5_7","Name":"5.7 Deliver and support information technology services","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d3d"},"Ref_Num":"ACT_5_8","Name":"5.8 Manage IT knowledge","Stage":"Activity","Parent_Ref_Num":"ACT_5","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d3e"},"Ref_Num":"ACT_6","Name":"6.0 Manage Financial Resources","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d3f"},"Ref_Num":"ACT_6_1","Name":"6.1 Perform planning and management accounting","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d40"},"Ref_Num":"ACT_6_10","Name":"6.10 Manage international funds/consolidation","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d41"},"Ref_Num":"ACT_6_2","Name":"6.2 Perform revenue accounting","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d42"},"Ref_Num":"ACT_6_3","Name":"6.3 Perform general accounting and reporting","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d43"},"Ref_Num":"ACT_6_4","Name":"6.4 Manage fixed-asset project accounting","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d44"},"Ref_Num":"ACT_6_5","Name":"6.5 Process payroll","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d45"},"Ref_Num":"ACT_6_6","Name":"6.6 Process accounts payable and expense reimbursements","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d46"},"Ref_Num":"ACT_6_7","Name":"6.7 Manage treasury operations","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d47"},"Ref_Num":"ACT_6_8","Name":"6.8 Manage internal controls","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d48"},"Ref_Num":"ACT_6_9","Name":"6.9 Manage taxes","Stage":"Activity","Parent_Ref_Num":"ACT_6","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d49"},"Ref_Num":"ACT_7","Name":"7.0 Corporate Support","Stage":"Activity","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d4a"},"Ref_Num":"ACT_7_1","Name":"7.1 Corporate Strategy and Support","Stage":"Activity","Parent_Ref_Num":"ACT_7","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d4b"},"Ref_Num":"ACT_7_2","Name":"7.2 Legal  Audit and Compliance Support","Stage":"Activity","Parent_Ref_Num":"ACT_7","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d4c"},"Ref_Num":"ACT_7_3","Name":"7.3 Aviation Services","Stage":"Activity","Parent_Ref_Num":"ACT_7","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d4d"},"Ref_Num":"FIN_HQS","Name":"Shared Support","Stage":"Financial","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d4e"},"Ref_Num":"FIN_HQS_FIN","Name":"Accounting and Finance","Stage":"Financial","Parent_Ref_Num":"FIN_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d4f"},"Ref_Num":"FIN_HQS_FIN_006","Name":"AUDIT SERVICES","Stage":"Financial","Parent_Ref_Num":"FIN_HQS_FIN","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d50"},"Ref_Num":"FIN_HQS_ITS","Name":"Information Technology","Stage":"Financial","Parent_Ref_Num":"FIN_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d51"},"Ref_Num":"FIN_HQS_ITS_005","Name":"DESKTOP SUPPORT","Stage":"Financial","Parent_Ref_Num":"FIN_HQS_ITS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d52"},"Ref_Num":"FIN_HQS_MKT","Name":"Marketing","Stage":"Financial","Parent_Ref_Num":"FIN_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d53"},"Ref_Num":"FIN_HQS_MKT_004","Name":"SALES AND PRODUCT MANAGEMENT","Stage":"Financial","Parent_Ref_Num":"FIN_HQS_MKT","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d54"},"Ref_Num":"RES_HQS","Name":"Shared Support","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d55"},"Ref_Num":"RES_HQS_FIN","Name":"Accounting and Finance","Stage":"Resource","Parent_Ref_Num":"RES_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d56"},"Ref_Num":"RES_HQS_FIN_006","Name":"AUDIT SERVICES","Stage":"Resource","Parent_Ref_Num":"RES_HQS_FIN","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d57"},"Ref_Num":"RES_HQS_FIN_007","Name":"REVENUE ACCOUNTING","Stage":"Resource","Parent_Ref_Num":"RES_HQS_FIN","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d58"},"Ref_Num":"RES_Reg_00A_BOS","Name":"Boston","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d59"},"Ref_Num":"RES_Reg_00A_NYC","Name":"New York","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d5a"},"Ref_Num":"RES_Reg_00A_PHL","Name":"Philadelphia","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d5b"},"Ref_Num":"RES_Reg_00A_WDC","Name":"Washington DC","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d5c"},"Ref_Num":"RES_Reg_00B_ATL","Name":"Atlanta","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d5d"},"Ref_Num":"RES_Reg_00B_CLT","Name":"Charlotte","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d5e"},"Ref_Num":"RES_Reg_00B_MIA","Name":"Miami","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d5f"},"Ref_Num":"RES_Reg_00B_NWO","Name":"New Orleans","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d60"},"Ref_Num":"RES_Reg_00C_CHI","Name":"Chicago","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d61"},"Ref_Num":"RES_Reg_00C_CLB","Name":"Columbus","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d62"},"Ref_Num":"RES_Reg_00C_MIN","Name":"Minneapolis","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d63"},"Ref_Num":"RES_Reg_00C_STL","Name":"St Louis","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d64"},"Ref_Num":"RES_Reg_00D_DAL","Name":"Dallas","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d65"},"Ref_Num":"RES_Reg_00D_DNV","Name":"Denver","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d66"},"Ref_Num":"RES_Reg_00D_LAS","Name":"Los Angeles","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d67"},"Ref_Num":"RES_Reg_00D_SFA","Name":"San Francisco","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d68"},"Ref_Num":"RES_Reg_00E_ECM","Name":"E-Commerce","Stage":"Resource","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d69"},"Ref_Num":"S_ORPHAN","Name":"Orphan","Stage":"Service","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d6a"},"Ref_Num":"SVC_HQS","Name":"Shared Support","Stage":"Service","Node":1},{"_id":{"$oid":"60dda88fb8b98f3b20954d6b"},"Ref_Num":"SVC_HQS_BUS","Name":"Business Sustaining","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d6c"},"Ref_Num":"SVC_HQS_CCS","Name":"Credit Card","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d6d"},"Ref_Num":"SVC_HQS_CDP","Name":"Commercial Deposits","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d6e"},"Ref_Num":"SVC_HQS_CDS","Name":"CD\'S","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d6f"},"Ref_Num":"SVC_HQS_CHK","Name":"Checking","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d70"},"Ref_Num":"SVC_HQS_CLN","Name":"Commercial Loans","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d71"},"Ref_Num":"SVC_HQS_COH","Name":"Corporate OH","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d72"},"Ref_Num":"SVC_HQS_COS","Name":"Corporate Services","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d73"},"Ref_Num":"SVC_HQS_FIN","Name":"Finance Services","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d74"},"Ref_Num":"SVC_HQS_HRS","Name":"HR Services","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d75"},"Ref_Num":"SVC_HQS_ITS","Name":"Technology Services","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d76"},"Ref_Num":"SVC_HQS_LNS","Name":"Consumer Loans","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d77"},"Ref_Num":"SVC_HQS_LOC","Name":"Consumer line of Credit","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d78"},"Ref_Num":"SVC_HQS_MKT","Name":"Marketing Services","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d79"},"Ref_Num":"SVC_HQS_MTG","Name":"Consumer Mortgages","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d7a"},"Ref_Num":"SVC_HQS_OPS","Name":"Operations Support","Stage":"Service","Parent_Ref_Num":"SVC_HQS","Node":2},{"_id":{"$oid":"60dda88fb8b98f3b20954d7b"},"Ref_Num":"SVC_HQS_OPS_SUP","Name":"Operations Support Centers","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3},{"_id":{"$oid":"60dda88fb8b98f3b20954d7c"},"Ref_Num":"SVC_HQS_SAV","Name":"Savings","Stage":"Service","Parent_Ref_Num":"SVC_HQS_OPS","Node":3}]');
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(8777);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 5 modules
var Modal = __webpack_require__(1893);
// EXTERNAL MODULE: ./redux/Modal/modalaction.js
var modalaction = __webpack_require__(5228);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./pages/Modal/Datamanager/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }























function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
      p: 3,
      children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
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

function getModalStyle() {
  return {
    top: `45%`,
    left: `45%`,
    transform: `translate(-45%, -45%)`
  };
}

const Datamanager_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  Tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    position: 'absolute',
    width: "90%",
    height: "93%",
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #810000',
    boxShadow: theme.shadows[5]
  },
  Header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#610000",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  Tabbody: {
    height: "65vh"
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
    margin: "15px 0"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  closebutton: {
    background: "#810000",
    borderRadius: 0,
    color: "white"
  }
}));
function SimpleModal(props) {
  const classes = Datamanager_useStyles();
  const [modalStyle] = external_react_default().useState(getModalStyle);
  const [value, setValue] = external_react_default().useState(0);
  const [costs, setCosts] = external_react_default().useState([]);
  const [accountdriver, setAccountdriver] = external_react_default().useState([]);
  const [assignmentprofile, setAssignmentprofile] = external_react_default().useState([]);
  const [driverquantity, setDriverquantity] = external_react_default().useState([]);
  const open = (0,external_react_redux_.useSelector)(state => state.modal.datamanager);
  const dispatch = (0,external_react_redux_.useDispatch)();

  const handleClose = () => {
    dispatch((0,modalaction/* datamanager */.gC)(false));
  };

  (0,external_react_.useEffect)(() => {
    const temp = [];
    DataManagerCost_namespaceObject.map(item => {
      const tempdata = Object.assign({
        Ref_Num: item.DMCost.length === 0 ? "" : item.DMCost[0].Ref_Num,
        Name: item.DMCost.length === 0 ? "" : item.DMCost[0].Name
      }, item);
      delete tempdata.DMCost;
      temp.push(tempdata);
    });
    setCosts(temp);
  }, [DataManagerCost_namespaceObject]);
  (0,external_react_.useEffect)(() => {
    const temp = [];
    accountdrivers_namespaceObject.map(item => {
      const tempdata = Object.assign({
        Name: item.DMAccDriver.length === 0 ? "" : item.DMAccDriver[0].Name
      }, item);
      delete tempdata.DMAccDriver;
      temp.push(tempdata);
    });
    setAccountdriver(temp);
  }, [accountdrivers_namespaceObject]);
  (0,external_react_.useEffect)(() => {
    const temp = [];
    assignmentprofiles_namespaceObject.map(item => {
      const tempdata = Object.assign({
        Name: item.acName.length === 0 ? "" : item.acName[0].Name
      }, item);
      delete tempdata.acName;
      temp.push(tempdata);
    });
    setAssignmentprofile(temp);
  }, [assignmentprofiles_namespaceObject]);
  (0,external_react_.useEffect)(() => {
    const temp = [];
    driverquantities_namespaceObject.map(item => {
      const tempdata = Object.assign({
        Name: item.DriverQty.length === 0 ? "" : item.DriverQty[0].Name
      }, item);
      delete tempdata.DriverQty;
      temp.push(tempdata);
    });
    setDriverquantity(temp);
  }, [driverquantities_namespaceObject]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "simple-modal-title",
      "aria-describedby": "simple-modal-description",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: modalStyle,
        className: classes.paper,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.Header,
          children: ["Data Manager", /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            size: "small",
            onClick: () => handleClose(),
            children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
              className: classes.closebutton
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.Tab,
          children: [/*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
            position: "static",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Tabs/* default */.Z, {
              value: value,
              onChange: handleChange,
              "aria-label": "simple tabs example",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Tab/* default */.Z, _objectSpread({
                label: "Cost"
              }, a11yProps(0))), /*#__PURE__*/jsx_runtime_.jsx(Tab/* default */.Z, _objectSpread({
                label: "Account Driver"
              }, a11yProps(1))), /*#__PURE__*/jsx_runtime_.jsx(Tab/* default */.Z, _objectSpread({
                label: "Driver Quantity"
              }, a11yProps(2))), /*#__PURE__*/jsx_runtime_.jsx(Tab/* default */.Z, _objectSpread({
                label: "Assignment Profile"
              }, a11yProps(3))), /*#__PURE__*/jsx_runtime_.jsx(Tab/* default */.Z, _objectSpread({
                label: "Volume"
              }, a11yProps(4))), /*#__PURE__*/jsx_runtime_.jsx(Tab/* default */.Z, _objectSpread({
                label: "Center Management"
              }, a11yProps(5)))]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
            className: classes.Tabbody,
            value: value,
            index: 0,
            children: costs.length !== 0 && /*#__PURE__*/jsx_runtime_.jsx(EnhancedTable, {
              data: costs,
              row: Object.keys(costs[0])
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
            className: classes.Tabbody,
            value: value,
            index: 1,
            children: accountdriver.length !== 0 && /*#__PURE__*/jsx_runtime_.jsx(EnhancedTable, {
              data: accountdriver,
              row: Object.keys(accountdriver[0])
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
            className: classes.Tabbody,
            value: value,
            index: 2,
            children: driverquantity.length !== 0 && /*#__PURE__*/jsx_runtime_.jsx(EnhancedTable, {
              data: driverquantity,
              row: Object.keys(driverquantity[0])
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
            className: classes.Tabbody,
            value: value,
            index: 3,
            children: assignmentprofile.length !== 0 && /*#__PURE__*/jsx_runtime_.jsx(EnhancedTable, {
              data: assignmentprofile,
              row: Object.keys(assignmentprofile[0])
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
            className: classes.Tabbody,
            value: value,
            index: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx(EnhancedTable, {
              data: volumes_namespaceObject,
              row: Object.keys(volumes_namespaceObject[0])
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(TabPanel, {
            className: classes.Tabbody,
            value: value,
            index: 5,
            children: /*#__PURE__*/jsx_runtime_.jsx(EnhancedTable, {
              data: centerhierarchies_namespaceObject,
              row: Object.keys(centerhierarchies_namespaceObject[0])
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.button,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "contained",
            color: "primary",
            children: "Export to Excel"
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "contained",
            color: "primary",
            onClick: () => handleClose(),
            children: "Cancel"
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "contained",
            color: "primary",
            children: "Reset"
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            variant: "contained",
            color: "primary",
            children: "Add/Update"
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ 5228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gC": function() { return /* binding */ datamanager; },
/* harmony export */   "vC": function() { return /* binding */ driver; },
/* harmony export */   "Fk": function() { return /* binding */ modelstats; },
/* harmony export */   "bg": function() { return /* binding */ dbconnection; }
/* harmony export */ });
/* harmony import */ var _modaltypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4061);



const datamanager = data => {
  return {
    type: _modaltypes__WEBPACK_IMPORTED_MODULE_0__/* .DATA_MANAGER */ .fT,
    payload: data
  };
};
const driver = data => {
  return {
    type: _modaltypes__WEBPACK_IMPORTED_MODULE_0__/* .DRIVER */ .cY,
    payload: data
  };
};
const modelstats = data => {
  return {
    type: _modaltypes__WEBPACK_IMPORTED_MODULE_0__/* .MODEL_STATS */ .rj,
    payload: data
  };
};
const dbconnection = data => {
  return {
    type: _modaltypes__WEBPACK_IMPORTED_MODULE_0__/* .DB_CONNECTION */ .vr,
    payload: data
  };
};

/***/ }),

/***/ 4061:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fT": function() { return /* binding */ DATA_MANAGER; },
/* harmony export */   "cY": function() { return /* binding */ DRIVER; },
/* harmony export */   "rj": function() { return /* binding */ MODEL_STATS; },
/* harmony export */   "vr": function() { return /* binding */ DB_CONNECTION; }
/* harmony export */ });
const DATA_MANAGER = "DATA_MANAGER";
const DRIVER = "DRIVER";
const MODEL_STATS = "MODEL_STATS";
const DB_CONNECTION = "DB_CONNECTION";

/***/ }),

/***/ 5440:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"_id":{"$oid":"60deb6899f1f335410eddb31"},"costtype":"INR","__v":0},{"_id":{"$oid":"60deb6b19f1f335410eddb33"},"costtype":"USD","__v":0},{"_id":{"$oid":"60deb6b89f1f335410eddb35"},"costtype":"FTE","__v":0}]');

/***/ })

};
;
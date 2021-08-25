import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch,useSelector } from "react-redux";
import {Accounttable} from "../../redux";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from '@material-ui/core/CircularProgress';

function createData(resource, name, qty, wt, cost, percent) {
  return { resource, name, qty, wt, cost, percent };
}

const table = [
  createData(
    "RES_HQS_FIN_001_901",
    "General Corporate Council",
    15000,
    1.0,
    2,
    180,
    35.2912
  ),
  createData("RES_HQS_FIN_006_06", "Mgr audit", 75000, 1.0, 1090, 17.6412),
  createData("RES_HQS_FIN_006_532", "Sr.Auditor", 65000, 1.0, 945, 15.2912),
  createData("RES_HQS_FIN_006_9067", "Auditor", 55000, 2.0, 1599, 25.8824),
  createData(
    "RES_HQS_COH_001_111",
    "Executive Admin II",
    50000,
    1.0,
    363,
    5.8824
  )
];

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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "resource", numeric: false, disablePadding: true, label: "Resource" },
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "qty", numeric: true, disablePadding: false, label: "Qty" },
  { id: "wt", numeric: true, disablePadding: false, label: "Wt" },
  { id: "cost", numeric: true, disablePadding: false, label: "Cost" },
  {
    id: "percent",
    numeric: true,
    disablePadding: false,
    label: "Percentage(%)"
  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  circular:{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
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

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [table,setTable] = React.useState([])
  let [temptable,setTemptable] = React.useState([])
  const account = useSelector(state=>state.account.accountdetails)
  const state = useSelector(state => state.header)
  const driver = useSelector (state=> state.modal.driver)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(account[0]!=="No data" && account.length !==0 )
      {
      temptable=[]
      setTable([])
    if( account[0].driverLink[0] && account[0].driverLink[0].driverAssociation === "Common"){
      axios.get("http://[::1]:3000/api/AssignmentProfile/Dest_Common",{params:{period:state.period,refNum:state.account[0].refNum}}).then(res=>setTemptable(res.data)).catch(err=>console.log("err"))
    }
    else{
      axios.get("http://[::1]:3000/api/driverQuantity/Dest_Specific",{params:{period:state.period,refNum:state.account[0].refNum}}).then(res=>setTemptable(res.data)).catch(err=>console.log("err"))
    }}
    else{
      setTemptable([])
    }
  },[account,driver])

  useEffect(()=>{
    let temp =[]
    let total=0
    temptable.map((item)=>item.DQ ? total+=(item.DQ.driverQty*item.DQ.driverWt) : total+=(item.driverQty*item.driverWt ))
    temptable.map((item)=>{
      let obj={resource:item.destRefNum,name:item.AH.name,qty:item.DQ ? item.DQ.driverQty:item.driverQty,wt:item.DQ ? item.DQ.driverWt:item.driverWt,
        cost:((item.CC[0]!==undefined ? item.CC[0].cost*(((item.DQ ? item.DQ.driverQty*item.DQ.driverWt :item.driverQty*item.driverWt)/total)*100):item.CC.cost*(((item.DQ ? item.DQ.driverQty*item.DQ.driverWt :item.driverQty*item.driverWt)/total)*100))/100),
        percent:( ((item.DQ ? item.DQ.driverQty*item.DQ.driverWt :item.driverQty*item.driverWt)/total)*100 )}
      temp.push(obj)
    })
    setTable([...temp])
  },[temptable])

  useEffect(()=>{
    dispatch(Accounttable(table))
  },[table])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = table.map((n) => n.name);
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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, table.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
            stickyHeader
          >
          {state.account.length!==0 &&
          (table.length ===0 ?
           <TableBody >
              <TableRow>
                <TableCell  className={classes.circular}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            </TableBody>
           :
           <>
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={table.length}
            />
           
            <TableBody>
              {stableSort(table, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    row.length!==0 ?
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className={classes.rowdata}
                    >
                      
                      <TableCell padding="checkbox">
                        <Checkbox
                          className={classes.rowheadercheck}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell align="center">{row.resource}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">{row.wt}</TableCell>
                      <TableCell align="right">${(row.cost).toFixed(2)}</TableCell>
                      <TableCell align="right">{(row.percent).toFixed(2)}</TableCell>
                    </TableRow>
                    :
                    <TableRow></TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: "auto" }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            </>)}
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </div>
  );
}

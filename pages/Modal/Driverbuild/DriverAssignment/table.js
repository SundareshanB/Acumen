import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import { useSelector } from 'react-redux';

function createData(resource, name, driver, profile) {
  return { resource, name,driver, profile};
}


const rows = [
  createData('RES_HQS_FIN_001_901', "General Corporate", "FTE", "AUDIT"),
  createData('RES_HQS_FIN_006_06', "Mgr audit", "FTE", "AUDIT"),
  createData('RES_HQS_FIN_006_532', "Sr.Auditor", "FTE", "AUDIT"),
  createData('RES_HQS_FIN_006_9067', "Auditor", "FTE", "AUDIT"),
  createData('RES_HQS_COH_001_111', "Executive Admin II","FTE", "AUDIT")
  
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
  return order === 'desc'
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
  { id: 'resource', numeric: false, disablePadding: true, label: 'Resource' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'driver', numeric: true, disablePadding: false, label: 'Driver' },
  { id: 'profile', numeric: true, disablePadding: false, label: 'Profile' }
];

function EnhancedTableHead(props) {
  const {order, orderBy,onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding?'none':"default"}
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
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  container:{
    maxHeight:"43vh",
    minHeight:"43vh",
    border: "1px solid #810000",
    padding: "0px 10px",
    borderRadius:6
  },
  table: {
    minWidth: 500,
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
    width: 1,
  },
  rowheadercheck:{
    "&.MuiCheckbox-colorSecondary.Mui-checked":{
      color: "#810000"
    }
  },
  rowdata:{
    "&.MuiTableRow-root.Mui-selected":{
      backgroundColor: "#eeebdd",
    }
  }
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {data} = props;
  const header = useSelector(state=>state.header)
  const [rawdata,setRawdata] = useState([])
  const [rawtabledata,setRawtabledata] = useState([])
  const [tabledata,setTabledata] = useState([])

  useEffect(()=>{
    if(data.length !==0){axios.get("http://[::1]:3000/account-drivers/accountDetails",
    {params:{period:header.period,refNum:data[0].refNum}})
    .then(res=>setRawdata(res.data))
    .catch(err=>console.log("error"))}
  },[data])

  useEffect(()=>{
    if(rawdata.length !==0){axios.get("http://[::1]:3000/account-drivers/similarassignments",{params:{period:rawdata[0].period,driver:rawdata[0].driver,profile:rawdata[0].profile,refNum:rawdata[0].refNum}})
    .then(res=>setRawtabledata(res.data))}
  },[rawdata])

  useEffect(()=>{
    let temp=[]
    if(rawtabledata.length !==0 ){
      rawtabledata.map((item)=>{
        let obj={resource:item.refNum,name:item.AH.name,driver:item.driver,profile:item.profile}
        temp.push(obj)
      })
      setTabledata(temp)
    }
    else{
      setTabledata([])
    }
  },[rawtabledata])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
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
        selected.slice(selectedIndex + 1),
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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tabledata.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
            // stickyHeader 
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tabledata.length}
            />
            {tabledata.length !==0 &&
            <TableBody >
              {stableSort(tabledata, getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
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
                      <TableCell align="left" padding={"none"} >{row.resource}</TableCell>
                      <TableCell align="left" >{row.name}</TableCell>
                      <TableCell align="left" >{row.driver}</TableCell>
                      <TableCell align="left" >{row.profile}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: "auto" }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>}
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
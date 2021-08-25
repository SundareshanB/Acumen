import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Period from "../pages/JSON/periods.json";
import {Bootstrapdropdown,BootstrapTextfield} from "./inputs";
import Costtype from "../pages/JSON/costtypes.json"
import Button from "@material-ui/core/Button"


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


function EnhancedTableHead(props) {
  const {order, orderBy,onRequestSort,rowsarray } = props;
  const headCells =[]
  rowsarray.map((item)=>{
      if(item !=="_id" && item!=="Dest_Ref_Num" && item !== "ModBy" && item !=="ModTime" && item!=="Ref_Num"&&  item!=="__v" && item!=="Timestamp"){headCells.push({id:item, numeric:false,disablePadding:true,label:item})}
      else if(item==="Ref_Num"){headCells.push({id:item,numeric: true, disablePadding: false, label: 'Reference Number'})}
      else if(item==="Dest_Ref_Num"){headCells.push({id:item,numeric: true, disablePadding: false, label: 'Destination Reference Number'})}
  })
  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'center'}
            // padding={headCell.disablePadding ? 'none' : 'default'}
            // sortDirection={orderBy === headCell.id ? order : false}
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
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
  Tablebody:{
      height:"53vh"
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  search:{
    display:"flex",
    justifyContent:"space-around",
    marginBottom:"15px"
  },
  searchinput:{
    display:"flex",
    alignItems:"center"
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
  const Rows=[];
  const [open , setOpen] = useState(true)
  const [data,setData] = useState(props.data)

  useEffect(()=>{
    if(props.data.length!==0){
      setOpen(false)
    }
  })

  useEffect(()=>{
      props.row.map((item)=>{
        if(item !=="_id" && item !== "ModBy" && item !=="ModTime"&& item!=="__v" && item!=="Timestamp"){
            Rows.push(item)
        }
      })
  },[props])

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

  const Tablebody = (props) =>{
      let data = props.data
      return(
        props.row.map((item)=>(item !=="_id" && item !== "ModBy" && item!=="Timestamp" && item !=="ModTime" && item!=="__v") &&
        ((item!=="CostType" && item!=="Period")?<TableCell align="left">{data[item]}</TableCell>
        :
        item==="CostType" ?
        <TableCell align="left">
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<Bootstrapdropdown />}
            defaultValue={data[item]}
          >
            {Costtype.map((key)=><MenuItem value={key.costtype}>{key.costtype}</MenuItem>)}
          </Select>
        </TableCell>
        :
        item==="Period"&&
        <TableCell align="left">
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<Bootstrapdropdown />}
            defaultValue={data[item]}
          >
            {Period.map((key)=><MenuItem value={key.PeriodName}>{key.PeriodName}</MenuItem>)}
          </Select>
        </TableCell>
        )
        )
      )
  }

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

  const Search = (key) =>{
      const temp = props.data.filter((item)=> item.Period===key)
      setData([...temp])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <div className={classes.search}>
          <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                input={<Bootstrapdropdown />}
              >
                {Period.map((key)=><MenuItem onClick={()=>Search(key.PeriodName)} value={key.PeriodName}>{key.PeriodName}</MenuItem>)}
          </Select>
          <div className={classes.searchinput}>
            <BootstrapTextfield  size="small" id="" variant="outlined" />
            <Button variant="contained" color="primary" style={{fontSize:10,marginLeft:10}}>Search</Button>
          </div>
      </div>
      <Paper className={classes.paper}>
        {/* {props.data.length===0?
        <Backdrop className={classes.backdrop} open={true} >
          <CircularProgress color="inherit" />
        </Backdrop>: */}
        <TableContainer className={classes.Tablebody}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
            stickyHeader
            // stickyHeader 
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
            //   onSelectAllClick={handleSelectAllClick}
            //   onRequestSort={handleRequestSort}
              rowCount={Rows.length}
              rowsarray={props.row}
            />
            <TableBody >
              {stableSort(data, getComparator(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className={classes.rowdata}
                    >
                      {/* <TableCell padding="checkbox" >
                        <Checkbox
                          className={classes.rowheadercheck}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell> */}
                      {props.row && <Tablebody data={row} row={props.row}/> }
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: "auto" }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* } */}
      </Paper>
    </div>
  );
}
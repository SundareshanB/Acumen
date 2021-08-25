import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from "@material-ui/core/Button"
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector,useDispatch} from "react-redux"
import { Delete } from '@material-ui/icons';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios"
import {BootstrapTextfield} from '../../../components/inputs';
import {drivers} from "../../../redux";
import Modal from "../../../components/modal";
import { CircularProgress } from '@material-ui/core';

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
  { id: 'qty', numeric: true, disablePadding: false, label: 'Qty' },
  { id: 'wt', numeric: true, disablePadding: false, label: 'Wt' }
];

function EnhancedTableHead(props) {
  const {classes,onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell  padding="checkbox">
          <Checkbox
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            className={classes.selectall}
          />
        </TableCell>
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
    maxHeight:"45vh"
  },
  table: {
    minWidth: 500,
    height:"auto"
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
  selectall:{
    "&.MuiCheckbox-colorSecondary.Mui-checked":{
      color: "#810000"
    }
  },
  buttonalign:{
    display:"flex",
    justifyContent:"flex-end",
    padding:"12px 0px"
},
button:{
    marginLeft:10
},
title:{
    fontSize:"14px",
    fontWeight:"bold",
    color:"black"
  },
  circular:{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const data = useSelector(state => state.driver.data)
  const [dialog ,setDialog] = React.useState(false)
  const [success ,setSuccess] = React.useState(false)
  const [open,setOpen] = React.useState("")
  let [tempdata,setTempdata] = React.useState([])
  const [row,setRow] = React.useState([])
  const state = useSelector(state => state.account.accountdetails)
  const header = useSelector(state=>state.header)
  const dispatch = useDispatch();
  useEffect(()=>{
    setRow([])
  },[])

  useEffect(()=>{
    if(state[0]!=="No data" && state.length !==0  )
      {
      tempdata=[]
      setRow([])
    if( state[0].driverLink[0] && state[0].driverLink[0].driverAssociation === "Common"){
      axios.get("http://[::1]:3000/AssignmentProfile/Dest_Common",{params:{period:header.period,refNum:header.account[0].refNum}}).then(res=>setTempdata(res.data)).catch(err=>console.log("err"))
    }
    else{
      axios.get("http://[::1]:3000/driverQuantity/Dest_Specific",{params:{period:header.period,refNum:header.account[0].refNum}}).then(res=>setTempdata(res.data)).catch(err=>console.log("err"))
    }}
  },[state,open])
  console.log("desttable",data,header,state,tempdata)
  useEffect(()=>{
    let temp=[]
    tempdata.map((item) =>{
      let tempobj = {resource:item.destRefNum , name:item.AH.name , qty:item.DQ ? item.DQ.driverQty:item.driverQty,wt:item.DQ ? item.DQ.driverWt:item.driverWt}
      temp.push(tempobj)
      }
      )
      setRow([...temp])
  },[tempdata])

  useEffect(()=>{ 
    if(data.length!==0) {
      let temp = [...row]
      data.map((item) =>{
          let tempobj = {resource:item.refNum , name:item.name , qty:1 , wt:1}
          temp.find((item)=> item.name=== tempobj.name) ?"": temp.push(tempobj)
    }
    )
    setRow([...temp])}
  },[data])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = row.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, props) => {
    const selectedIndex = selected.indexOf(props.name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, props.name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const Delete = () =>{
    setDialog(!dialog)
    const temp = [...row]
    let length = selected.length
    selected.map((item)=>{
     const a = row.find((key)=>key.name===item)
     let obj = {destRefNum:a.resource,driver:state[0].driverLink[0].driverName,period:header.period}
     axios({
       method:"delete",
       url:"http://[::1]:3000/driverQuantity/deleteDest",
       params:obj
     }).then(res=>{
       if(res.statusText==="OK"){
         length=length-1
        setOpen("delete")
        if(length===0){
          setSuccess(true)
          }
     }
    })
    })
    setSelected([])
    
  }

  const onSubmit = () =>{
    let length = row.length
    row.map((item)=>{
      let event = new Date()
      let obj={
        "destRefNum": item.resource,
        "driver": state[0].driverLink[0].driverName,
        "period": header.period,
        "driverQty": parseFloat(item.qty),
        "driverWt": parseFloat(item.wt)
      }
      axios({
        method:"patch",
        url:"http://[::1]:3000/driverQuantity/SubmitDest",
        params:obj
      })
      .then(res=>{if(res.statusText==="OK"){
        length=length-1 
        if(state[0].driverLink[0] && state[0].driverLink[0].driverAssociation==="Common")
        {
          let tempobj = {
            "profileName": state[0].profile,
            "destRefNum": item.resource,
            "period": header.period
          }
        
          axios({
            method:"patch",
            url:"http://[::1]:3000/assignmentProfile/SubmitAssignmentDest",
            params:tempobj
          })
          .then(res=>console.log(res))
        }
        if(length===0)
        {
          setOpen("submit")
          setSuccess(true)
          dispatch(drivers([]))
        }
      }})
      .catch(err=>console.log(err))
    })
  }

  const onClose = () =>{
    setSuccess(!success)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, row.length - page * rowsPerPage);
  return (
    <div className={classes.root}>
      <div className={classes.title}>Current Assignment</div>
        <div className={classes.buttonalign}>
            <Button className={classes.button} variant="contained" color="primary" size={"small"} disabled={selected.length===0} onClick={()=>setDialog(!dialog)}>Delete</Button>
            <Button className={classes.button} variant="contained" color="primary" size={"small"} onClick={()=>onSubmit()}>Submit</Button>
        </div>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
            // stickyHeader 
          >
           {row.length===0?
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
              rowCount={row.length}
            />
            <TableBody >
              {stableSort(row, getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className={classes.rowdata}
                    >
                       <TableCell padding="checkbox" >
                        <Checkbox
                          className={classes.rowheadercheck}
                          onClick={(event) => handleClick(event, row)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell align="left" padding={"none"} >{row.resource}</TableCell>
                      <TableCell align="left" >{row.name}</TableCell>
                      <TableCell align="left" >
                        {row.qty ?
                        <BootstrapTextfield type="number" onChange={(event)=>row.qty = event.target.value} defaultValue={row.qty} size="small" id="" variant="outlined" />:
                        <BootstrapTextfield type="number" onChange={(event)=>row.qty = event.target.value} defaultValue={0} size="small" id="" variant="outlined" />
                        }
                      </TableCell>
                      <TableCell align="left" ><BootstrapTextfield type="number" onChange={(event)=>row.wt = event.target.value} defaultValue={row.wt} size="small" id="" variant="outlined" /></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: "auto" }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            </>
            }
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
      <div>
        <Dialog
          open={dialog}
          onClose={()=>setDialog(!dialog)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you Sure ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={()=>Delete()}>Yes</Button>
            <Button onClick={()=>setDialog(!dialog)} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        {/* <Dialog
          open={success}
          onClose={()=>()=>setSuccess(!success)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{open==="delete"?"Deleted":"Submitted"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             {open==="delete"?"Selected data's are deleted successfully":"Selected data's are submitted successfully"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setSuccess(!success)} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog> */}
        <Modal success={success} value={open} onClose={onClose} />
      </div>
    </div>
  );
}
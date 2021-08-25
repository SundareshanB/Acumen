import React,{useEffect} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from "./currenttable"
import Button from "@material-ui/core/Button"
  
const useStyles = makeStyles((theme) => ({
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
}));


const Currentassignment = (props) =>{
  const classes = useStyles();
  

  return (
    <div >
      <div className={classes.tabledata}>
            <Table />
      </div>
    </div>
  );
}
export default Currentassignment;
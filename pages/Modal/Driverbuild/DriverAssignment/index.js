import PropTypes from 'prop-types';
import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Treeview from "./treeview";
import Table from "./table"

const useStyles = makeStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
    padding:{
      margin:"0px 10px"
    }
});

const Driverassignment = () => {
    const classes = useStyles();
    const [selectedlabel,setSelectedlabel] = useState([])
    console.log(selectedlabel)

    return (
        <div>
            <div>
              <Treeview setSelectedlabel={setSelectedlabel}/>
            </div>
            <div className={classes.padding}>
              <Table data={selectedlabel}/>
            </div>
        </div>
    );
}

export default Driverassignment;
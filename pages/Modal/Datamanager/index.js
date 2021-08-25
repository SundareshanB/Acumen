import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import Table from "../../../components/Table";
import cost from "../../JSON/costs.json";
import costname from "../../JSON/DataManagerCost.json"
import accountdrivers from "../../JSON/accountdrivers.json";
import driverquantities from "../../JSON/driverquantities.json";
import assignmentprofiles from "../../JSON/assignmentprofiles.json";
import volume from "../../JSON/volumes.json";
import centermanagement from "../../JSON/centerhierarchies.json";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import {datamanager} from "../../../redux"
import { useDispatch,useSelector } from 'react-redux';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function getModalStyle() {
  
    return {
      top: `45%`,
      left: `45%`,
      transform: `translate(-45%, -45%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    Tab: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    paper: {
      position: 'absolute',
      width: "90%",
      height:"93%",
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #810000',
      boxShadow: theme.shadows[5]
    },
    Header:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#610000",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Tabbody:{
        height:"65vh",
    },
    button:{
        display:"flex",
        justifyContent:"space-around",
        margin:"15px 0"
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    closebutton:{
      background:"#810000",
      borderRadius:0,
      color:"white"
    }
  }));
  
  export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [value, setValue] = React.useState(0);
    const [costs , setCosts] = React.useState([]);
    const [accountdriver , setAccountdriver] = React.useState([])
    const [assignmentprofile , setAssignmentprofile] = React.useState([])
    const [driverquantity , setDriverquantity] = React.useState([])
    const open = useSelector(state=>state.modal.datamanager)
    const dispatch = useDispatch();

    const handleClose = () =>{     
        dispatch(datamanager(false))
    };

    useEffect(()=>{
      const temp=[]
      costname.map((item)=>{
        const tempdata = Object.assign({Ref_Num:item.DMCost.length===0?"":item.DMCost[0].Ref_Num , Name:item.DMCost.length===0?"":item.DMCost[0].Name},item)
        delete tempdata.DMCost
        temp.push(tempdata)
      })
      setCosts(temp)
    },[costname])
    useEffect(()=>{
      const temp=[]
      accountdrivers.map((item)=>{
        const tempdata = Object.assign({Name:item.DMAccDriver.length===0?"":item.DMAccDriver[0].Name},item)
        delete tempdata.DMAccDriver
        temp.push(tempdata)
      })
      setAccountdriver(temp)
    },[accountdrivers])
    useEffect(()=>{
      const temp=[]
      assignmentprofiles.map((item)=>{
        const tempdata = Object.assign({Name:item.acName.length===0?"":item.acName[0].Name},item)
        delete tempdata.acName
        temp.push(tempdata)
      })
      setAssignmentprofile(temp)
    },[assignmentprofiles])
    useEffect(()=>{
      const temp=[]
      driverquantities.map((item)=>{
        const tempdata = Object.assign({Name:item.DriverQty.length===0?"":item.DriverQty[0].Name},item)
        delete tempdata.DriverQty
        temp.push(tempdata)
      })
      setDriverquantity(temp)
    },[driverquantities])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    return (
      <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.Header}>Data Manager
              <IconButton size="small" onClick={()=>handleClose()}>
                  <CloseIcon className={classes.closebutton}/>
              </IconButton>
            </div>
            <div className={classes.Tab}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Cost" {...a11yProps(0)} />
                        <Tab label="Account Driver" {...a11yProps(1)} />
                        <Tab label="Driver Quantity" {...a11yProps(2)} />
                        <Tab label="Assignment Profile" {...a11yProps(3)} />
                        <Tab label="Volume" {...a11yProps(4)} />
                        <Tab label="Center Management" {...a11yProps(5)} />
                    </Tabs>
                </AppBar>
                <TabPanel className={classes.Tabbody} value={value} index={0}>
                    {costs.length!==0 && <Table data={costs} row={Object.keys(costs[0])}/>}
                </TabPanel>
                <TabPanel className={classes.Tabbody} value={value} index={1}>
                    {/* {accountdrivers.length!==0 ?*/}
                     {accountdriver.length!==0 && <Table data={accountdriver} row={Object.keys(accountdriver[0])}/>} 
                     {/* {accountdrivers.length===0 &&
                      <Backdrop className={classes.backdrop} open={true} >
                        <CircularProgress color="inherit" />
                      </Backdrop>} */}
                    {/* } */}
                </TabPanel>
                <TabPanel className={classes.Tabbody} value={value} index={2}>
                    {driverquantity.length !==0 && <Table data={driverquantity} row={Object.keys(driverquantity[0])}/>}
                </TabPanel>
                <TabPanel className={classes.Tabbody} value={value} index={3}>
                    {assignmentprofile.length !==0 && <Table data={assignmentprofile} row={Object.keys(assignmentprofile[0])}/>}
                </TabPanel>
                <TabPanel className={classes.Tabbody} value={value} index={4}>
                    <Table data={volume} row={Object.keys(volume[0])}/>
                </TabPanel>
                <TabPanel className={classes.Tabbody} value={value} index={5}>
                    <Table data={centermanagement} row={Object.keys(centermanagement[0])}/>
                </TabPanel>
            </div>
            <div className={classes.button}>
                <Button variant="contained" color="primary">Export to Excel</Button>
                <Button variant="contained" color="primary" onClick={()=>handleClose()}>Cancel</Button>
                <Button variant="contained" color="primary">Reset</Button>
                <Button variant="contained" color="primary">Add/Update</Button>
            </div>
        </div>
        </Modal>
      </div>
    );
  }



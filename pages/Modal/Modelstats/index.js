import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import {modelstats} from "../../../redux"
import { useDispatch,useSelector } from 'react-redux';
import Table from "./modeltable"
import Chart from "./modelchart"
import Switch from '@material-ui/core/Switch';

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
    },
    tablealign:{
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      height:"450px",
      justifyContent:"center",
    },
    graphalign:{
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      height:"90%",
      justifyContent:"center",
      overflow:"auto"
    }
  }));
  
  export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = useSelector(state=>state.modal.modelstats)
    const dispatch = useDispatch();
    const data=[{Stage:"Financial",FTE:"0.00",USD:"142,850,900,789"},{Stage:"Resource",FTE:"0.00",USD:"142,850,900,789"},{Stage:"Activity",FTE:"0.00",USD:"132,678,934,789"},{Stage:"Service",FTE:"0.00",USD:"132,320,009,154"},{Stage:"Sub_Activity",FTE:"0.00",USD:"2,890,145,789"}]
    const datas=[{Stage:"Financial",DistinctAccounts:"573",Assignments:"1910",Avg_Assign:"3",Max_Assign:"11"},{Stage:"Resource",DistinctAccounts:"161",Assignments:"1074",Avg_Assign:"6",Max_Assign:"33"},{Stage:"Activity",DistinctAccounts:"168",Assignments:"619",Avg_Assign:"4",Max_Assign:"15"},{Stage:"Service",DistinctAccounts:"241",Assignments:"1",Avg_Assign:"1",Max_Assign:"1"}]
    const cost = [{Period:"2014-plan",Cost:"",Rows:"0"}]
    const unassigned=[{Stage:"Financial",Amount:"1,00,17,304"},{Stage:"Resource",Amount:"0"},{Stage:"Activity",Amount:"59,09,143"},{Stage:"Service",Amount:"12,12,88,123"},{Stage:"Sub_Activity",Amount:"0"}]
    const [graph,setGraph] = useState(false)

    const handleClose = () =>{     
        dispatch(modelstats(false))
    };

    
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
            <div className={classes.Header}>
              <div>MODEL STATS
                <Switch
                  checked={graph}
                  onChange={()=>setGraph(!graph)}
                  name="Graph"
                  color="primary"
                />
              </div>
              <IconButton size="small" onClick={()=>handleClose()}>
                  <CloseIcon className={classes.closebutton}/>
              </IconButton>
            </div>
            {graph ?
              <div className={classes.graphalign}>
                <Chart value={data} row={Object.keys(data[0])} title="Model Balance"/>
                <Chart value={datas} row={Object.keys(datas[0])} title="Stage Statics"/>
                <Chart value={cost} row={Object.keys(cost[0])} title="Cost Facts"/>
                <Chart value={unassigned} row={Object.keys(unassigned[0])} title="Unassigned Costs"/>
              </div>
                :
                <div className={classes.tablealign}>
                  <Table value={data} row={Object.keys(data[0])} title="Model Balance"/>
                  <Table value={datas} row={Object.keys(datas[0])} title="Stage Statics"/>
                  <Table value={cost} row={Object.keys(cost[0])} title="Cost Facts"/>
                  <Table value={unassigned} row={Object.keys(unassigned[0])} title="Unassigned Costs"/>
                </div>
              }
        </div>
        </Modal>
      </div>
    );
  }



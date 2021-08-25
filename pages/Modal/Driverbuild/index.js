import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import {driver} from "../../../redux"
import { useDispatch,useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Currentassignment from "./currentassignment"
import Assignmenttab  from './assignmenttab';
//Dropdown options
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from "axios"
import MenuItem from '@material-ui/core/MenuItem';
import {Bootstrapdropdown,BootstrapTextfield} from '../../../components/inputs';

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
        height: "85%",
        margin: "0 2%",
        display:"flex"
      },
    paper: {
      position: 'absolute',
      width: "90%",
      height:"95vh",
      color:"#810000",
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
        justifyContent: "space-between",
        height:"10%"
    },
    Tabbody:{
        height:"65vh",
    },
    button:{
        display:"flex",
        justifyContent:"space-around",
        margin:"15px 0"
    },
    closebutton:{
      background:"#810000",
      borderRadius:0,
      color:"white"
    },
    left:{
      width:"50%",
      height:"100%",
      paddingRight:5
    },
    right:{
      width:"50%",
      height:"100%",
    },
    title:{
      fontSize:"14px",
      fontWeight:"600"
    },
    refer:{
      fontSize:"10px",
      color:"lightgrey"
    },
    // Left
    profilelabel:{
      display:"flex",
    },
    reflabel:{
      color:"grey",
      fontSize:"10",
      fontWeight:400
    },
    accountlabel:{
      paddingRight:40
    },
    profiledropdown:{
      display:"flex",
      paddingTop:15,
      height:85
    },
    profilebutton:{
      display:"flex",
      justifyContent:"flex-end",
      paddingTop:10
    },
    profile:{
      padding:10,
      border:"1px solid #810000",
      borderRadius:"12px",
      fontSize:"12px",
      height:"23vh"
    },
    currentassignment:{
      borderRadius:6,
      border: "1px solid",
      padding: 5,
      margin: "6px 0px",
      height:"58vh"
    },
    contents:{
      width:"30%",
      paddingRight:"12px",
      color:"black"
    },
    formtitle:{
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "bolder",
      display:"flex",
      alignItems:"center",
      height: "40px"
    },
    formdetails:{
      textAlign:"left",
      paddingLeft:10,
      paddingTop:5
    },
    iconalign:{
      paddingLeft:10,
      display:"flex",
      alignItems:"center"
    },
    buttonicon:{
      display:"flex",
      justifyContent:"space-evenly",
      width:"50%"
    },
    //dropdown
    formControl: {
      marginRight:5,
      minWidth: 120,
    },
    labelname: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "75%",
      transform: "translate(14px,3px) scale(1)",
      "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
        // transform: "translate(14px, 0px) scale(0.75)"
        display:"none"
      }}
  }));

  const Drivermodal = (props) =>{
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [profile,setProfile] = React.useState([])
  const open = useSelector(state=>state.modal.driver)
  const state = useSelector(state => state.account.accountdetails)
  const account = useSelector(state =>state.header.account)
  const data = useSelector(state=>state.header)
  const [name,setName] = useState("")
  const [type,setType] = useState("")
  const [association,setAssociation] = React.useState("")
  const [profilename,setProfilename] = useState("Inherit")
  const [count,setCount] = React.useState(0)
  const [editable,setEditable] = useState(true)

  const dispatch = useDispatch();

  useEffect(()=>{
    if(state.length!==0)
    {
      if(state[0]!=="No data" && (( state[0].driverLink!==undefined && state[0].driverLink.length!==0) && (state[0].driverLink[0].driverName !=="" && state[0].driverLink[0].driverType!=="" && state[0].driverLink[0].driverAssociation!=="")))
      {
        setEditable(false)
      }
    }
  },[state])

  useEffect(()=>{
      let temp = fetch("http://[::1]:3000/profiles")
      temp.then(res=>res.json()).then(data=>setProfile(data))
  },[,count])
  const handleClose = () =>{     
    dispatch(driver(false))
  };

  const onSubmit = () =>{
    if(name!=="" && type!=="" && association !== "" && profilename!=="")
    {
      let obj = {"driverName": name,"driverType": type,"driverAssociation": association}
      axios.post("http://[::1]:3000/drivers",obj)
      .then(res=>{
        if(res.statusText === "OK")
        {
          let obj={refNum:account[0].refNum,period:data.period,driver:name,profile:profilename}
          axios.post("http://[::1]:3000/account-drivers",obj).then(res=>
          {
            if(res.statusText==="OK")
            {
              let temp={"refNum": account[0].refNum,"period": data.period ,"cost": 0,"costType": "USD"}
              axios.post("http://[::1]:3000/costs",temp).then(res=>console.log(res))
              let tempobj={"refNum": account[0].refNum,"period": data.period ,"volume": 0,"uom": "Nos"}
              axios.post("http://[::1]:3000/volumes",tempobj).then(res=>console.log(res))
              setCount(count+1)
            }
          }
          ).catch(err=>console.log(err))
        }})
      .catch(err=>console.log(err))
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
            <div style={modalStyle} className={classes.paper}>
                <div className={classes.Header}>Driver Build
                <IconButton size="small" onClick={()=>handleClose()}>
                    <CloseIcon className={classes.closebutton}/>
                </IconButton>
                </div>
                <div className={classes.Tab}>
                    <div className={classes.left}>
                      <div className={classes.profile}>
                        <div className={classes.profilelabel}>
                          <div className={classes.accountlabel}><label className={classes.title}>{account[0] && account[0].name}<label className={classes.reflabel}>({account[0] && account[0].refNum})</label></label></div>
                          {/* <div><label className={classes.title}>Profile:</label>INHERIT</div> */}
                        </div>
                        <div className={classes.profiledropdown}>
                        <div className={classes.contents}>
                          <div className={classes.formtitle}>Driver Name 
                          {/* <IconButton className={classes.iconalign}><EditIcon onClick={()=>setName(!name)} style={{fontSize:14}}/></IconButton> */}
                          </div>
                          {editable ?
                            <div className={classes.formdetails}>
                              <BootstrapTextfield onChange={(event)=>setName(event.target.value)}  size="small" id="" variant="outlined" />
                            </div>
                          :
                          <div className={classes.formdetails}>{state[0] !== "No data" && state[0].driverLink[0] && state[0].driverLink[0].driverName}</div>}
                        </div>
                        <div className={classes.contents}>
                          <div className={classes.formtitle}>Driver Type
                          {/* <IconButton className={classes.iconalign}><EditIcon onClick={()=>setType(!type)} style={{fontSize:14}}/></IconButton> */}
                          </div>
                          {editable ?
                            <div className={classes.formdetails}>
                              <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                input={<Bootstrapdropdown />}
                                onChange={(event)=>setType(event.target.value)}
                              >
                                <MenuItem value={"Basic"}>Basic</MenuItem>
                                <MenuItem value={"Survey"}>Survey</MenuItem>
                                <MenuItem value={"Volume"}>Volume</MenuItem>
                                
                              </Select>
                            </div>
                          :
                          <div className={classes.formdetails}>{state[0] !== "No data" && state[0].driverLink[0] && state[0].driverLink[0].driverType}</div>}
                        </div>
                        <div className={classes.contents}>
                          <div className={classes.formtitle}>Association 
                          {/* <IconButton className={classes.iconalign}><EditIcon onClick={()=>setDriver(!drivers)} style={{fontSize:14}}/></IconButton> */}
                          </div>
                          {editable ?
                            <div className={classes.formdetails}>
                              <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                input={<Bootstrapdropdown />}
                                onChange={(event)=>setAssociation(event.target.value)}
                              >  
                                <MenuItem value={"Common"}>Common</MenuItem>
                                <MenuItem value={"Specific"}>Specific</MenuItem>
                              </Select>
                            </div>
                          :
                          <div className={classes.formdetails}>{state[0] !== "No data" && state[0].driverLink[0] && state[0].driverLink[0].driverAssociation}</div>}
                        </div>
                        <div className={classes.contents}>
                          <div className={classes.formtitle}>Profile 
                          {/* <IconButton className={classes.iconalign}><EditIcon onClick={()=>setProfile(!profile)} style={{fontSize:14}}/></IconButton> */}
                          </div>
                          {editable ?
                            <div className={classes.formdetails}>
                              {association==="Common" ? <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                input={<Bootstrapdropdown />}
                                onChange={(event)=>setProfilename(event.target.value)}
                              >
                                { profile.map((item)=>
                                  <MenuItem  value={item.profileName}>{item.profileName}</MenuItem>
                                )}
                              </Select>
                              :
                                <div className={classes.formdetails}>{"Inherit"}</div>
                              }
                            </div>
                          :
                          <div className={classes.formdetails}>{state[0] !== "No data" &&  state[0].profile}</div>}
                        </div>
                        </div>
                        <div className={classes.profilebutton}><Button disabled={editable ? false:true} onClick={()=>onSubmit()} variant="contained" color="primary" size={"small"}>Save</Button></div>
                      </div>
                      <div className={classes.currentassignment}><Currentassignment /></div>
                    </div>
                    <div className={classes.right}>
                      <Assignmenttab />
                    </div>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  );
}
export default Drivermodal;
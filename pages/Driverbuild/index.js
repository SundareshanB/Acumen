import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import Currentassignment from "./currentassignment"
import Assignmenttab  from './assignmenttab';
//Dropdown options
import Header from "../../components/header"
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from '../Acumen/Navigator';
import Select from '@material-ui/core/Select';
import axios from "axios"
import MenuItem from '@material-ui/core/MenuItem';
import {Bootstrapdropdown,BootstrapTextfield} from '../../components/inputs';
import Link from "next/link";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

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
  
  const drawerWidth = 210;
  const height = "90%"
    const useStyles = makeStyles((theme) => ({
      root: {
      display: 'flex',
      height: '89vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        height:height
      }},
    drawerclose: {
        [theme.breakpoints.up('sm')]: {
          width: "90px",
          flexShrink: 0,
          height:height
        },
    },
    treedrawer: {
      background: '#EAEFF1',
      width: drawerWidth,
        flexShrink: 0,
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: "16px",
      background: '#EEEBDD',
      overflow:"hidden"
    },
      Tab: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          height: "85%",
          margin: "0 2%",
          display:"flex"
        },
      paper: {
        minWidth: "100%",
        height:"85vh",
        color:"#810000",
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #810000',
        boxShadow: theme.shadows[5]
      },
        paper1: {
        minWidth: "89%",
        height:"85vh",
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
          height:"10%"
      },
      HeaderText:{
       padding:12
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
        height:"50vh"
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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(()=>{
    if(state.length!==0)
    {
      if(state[0]!=="No data" && (( state[0].driverLink!==undefined && state[0].driverLink.length!==0) && (state[0].driverLink[0].driverName !=="" && state[0].driverLink[0].driverType!=="" && state[0].driverLink[0].driverAssociation!=="")))
      {
        setEditable(false)
      }
    }
  },[,state])
  console.log("profile",profile,data,open,account,state)

  useEffect(()=>{
      let temp = fetch("http://[::1]:3000/profiles")
      temp.then(res=>res.json()).then(data=>setProfile(data))
  },[,count])


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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Header className="header" onDrawerToggle={handleDrawerToggle} />
      <div className={classes.root}>
        <CssBaseline />
        <nav className={mobileOpen?classes.drawer:classes.drawerclose}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: mobileOpen?drawerWidth : "90px" , height:height} }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: mobileOpen?drawerWidth : "90px", height:height } }} open={mobileOpen}
              onClose={handleDrawerToggle} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <div className={classes.main}>
            <div>
            <div className={mobileOpen?classes.paper1:classes.paper}>
                <div className={classes.Header}>
                  <Link href="/Acumen" as="/Acumen"> 
                  <IconButton size="small">
                    <ArrowBackIosOutlinedIcon className={classes.closebutton}/>
                  </IconButton></Link>
                  Driver Build
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
        </div>
      </div>
    </div>
  </div>
  );
}
export default Drivermodal;
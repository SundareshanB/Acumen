import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done"
import CloseIcon from '@material-ui/icons/Close';
import {IconButton } from '@material-ui/core';
import {BootstrapInputnumber,Bootstrapdropdown,BootstrapTextfield} from "../../components/inputs";
import Costtype from "../JSON/costtypes.json";
import BuildIcon from '@material-ui/icons/Build';
import { useDispatch,useSelector } from 'react-redux';
import {driver,Accountdetails} from "../../redux";
import axios from "axios"
import Link from"next/link";
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme)=>({
  container: {
    minWidth: 650,
    height:"100%",
    padding: "10px"
  },
  title:{
    fontSize:"16px",
    fontWeight:"bolder"
  },
  refer:{
    fontSize:"10px",
    color:"lightgrey"
  },
  profile:{
    display:"flex",
    justifyContent:"space-between",
    padding:10,
    border:"1px solid #810000",
    borderRadius:"12px"
  },
  form:{
    display:"flex",
    justifyContent:"space-between"
  },
  contents:{
    width:"30%",
    paddingRight:"12px"
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
  margin: {
    margin: theme.spacing(1),
  },
}));

// const basic = [{_id:"", refNum:"", driver:"",profile:"",period:"",driverLink:[{_id:"",driverName:"",driverType:""driverAssociation:""}],costLink:{_id:"",refNum:"",
//   period:"",
//   cost:"",
//   costType:"",
//   modBy:"",
//   modTime:""},
//   volLink:{_id:"",
//   refNum:"",
//   period:"",
//   volume:"",
//   uom:""}
// }]

const Details = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [rawdata,setRawdata] = React.useState([])
  const [accountdata,setAccountdata] = React.useState([])
  const reduxdata = useSelector(state=>state.header)
  const [drivers,setDriver] = React.useState(false)
  const [profile,setProfile] = React.useState(false)
  const [total , setTotal] = React.useState(false)
  const [costtype,setCosttype] = React.useState(false)
  const [volume , setVolume] = React.useState(false)
  const [uom , setUom] = React.useState(false)
  const router = useRouter();

useEffect(()=>{
  console.log(reduxdata)
    {reduxdata.account[0] && axios.get("http://[::1]:3000/api/account-drivers/accountDetails",
    {params:{period:reduxdata.period,refNum:reduxdata.account[0].refNum}})
    .then(res=>(setRawdata(res.data.length!==0 ? res.data :[ "No data"]),console.log(res.data)))
    .catch(err=>console.log("error"))}
},[reduxdata])
useEffect(()=>{
  let tempdata=[]
    if(rawdata[0]!=="No data") {
    let temp = rawdata.filter((item)=>reduxdata.period===item.period && reduxdata.account[0].refNum===item.refNum)
    if(temp[0] !== "No data")
    {
      setAccountdata([...temp])
    }
    else{
      setAccountdata(["No data"])
    }}
    else{
      setAccountdata(["No data"])
    }
  },[rawdata])

  const handleClick=(e)=>{
    e.preventDefault();
    router.push("/Driverbuild")
  }

useEffect(()=>{    
  dispatch(Accountdetails(accountdata))
  },[accountdata])

  return (
    <form >
        {(accountdata.length===0) ? <div></div>
        :
        <>
        <div className={classes.form}>
          <div className={classes.contents}>
            <div className={classes.formtitle}>Driver <IconButton onClick={()=>setDriver(!drivers)} className={classes.iconalign}><EditIcon  style={{fontSize:14}}/></IconButton></div>
            {drivers ?
              <div className={classes.formdetails}>
                <BootstrapTextfield  size="small" id="" variant="outlined" />
                <div className={classes.buttonicon}>
                  <Link href='/Driverbuild' as='/Driverbuild'>
                    <IconButton 
                    // onClick={(e)=>handleClick(e)}
                    size="small">
                      <BuildIcon color={"primary"} fontSize="inherit"/>
                    </IconButton>
                  </Link>
                  <IconButton size="small">
                    <DoneIcon color={"primary"} fontSize="inherit" />
                  </IconButton>
                  <IconButton size="small">
                    <CloseIcon color={"primary"} fontSize="inherit" />
                  </IconButton>
                  <IconButton  size="small">
                    <DeleteIcon color={"primary"} fontSize="inherit" />
                  </IconButton>
              </div>
              </div>
             :
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0].driverLink[0] && accountdata[0].driverLink[0].driverName : ""}</div>}
          </div>
          <div className={classes.contents}>
            <div className={classes.formtitle}>Association</div>
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0].driverLink[0] && accountdata[0].driverLink[0].driverAssociation : ""}</div>
          </div>
          <div className={classes.contents}>
            <div className={classes.formtitle}>Profile<IconButton className={classes.iconalign}><EditIcon onClick={()=>setProfile(!profile)} style={{fontSize:14}}/></IconButton></div>
            {profile ?
            <div className={classes.formdetails}>
            <BootstrapTextfield  size="small" id="" variant="outlined" />
              <div className={classes.buttonicon}>
                <IconButton size="small">
                  <DoneIcon color={"primary"} fontSize="inherit" />
                </IconButton>
                <IconButton size="small">
                  <CloseIcon color={"primary"} fontSize="inherit" />
                </IconButton>
                <IconButton  size="small">
                  <DeleteIcon color={"primary"} fontSize="inherit" />
                </IconButton>
              </div>
            </div>
            :
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0] && accountdata[0].profile : ""}</div>}
          </div>
          <div className={classes.contents}></div>
        </div>
        <div className={classes.form}>
          <div className={classes.contents}>
            <div className={classes.formtitle}>Total Cost<IconButton className={classes.iconalign}><EditIcon onClick={()=>setTotal(!total)} style={{fontSize:14}}/></IconButton></div>
            {total ?
              <div className={classes.formdetails}>
                <BootstrapInputnumber className={classes.input} type="number" size="small" id="" variant="outlined" />
                <div className={classes.buttonicon}>
                  <div></div>
                  <IconButton size="small">
                    <DoneIcon color={"primary"} fontSize="inherit" />
                  </IconButton>
                  <IconButton size="small">
                    <CloseIcon color={"primary"} fontSize="inherit" />
                  </IconButton>
              </div>
              </div>
             :
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0].costLink[0] && accountdata[0].costLink[0].cost : ""}</div>}
          </div>
          <div className={classes.contents}>
            <div className={classes.formtitle}>Cost Type<IconButton className={classes.iconalign}><EditIcon onClick={()=>setCosttype(!costtype)} style={{fontSize:14}}/></IconButton></div>
            {costtype ?
            <div className={classes.formdetails}>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                input={<Bootstrapdropdown />}
              >
                {/* <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>RUB</MenuItem>
                <MenuItem value={30}>AUS</MenuItem> */}
                {Costtype.map((item)=><MenuItem value={item}>{item.costtype}</MenuItem>)}
              </Select>
              <div className={classes.buttonicon}>
                <IconButton size="small">
                  <DoneIcon color={"primary"} fontSize="inherit" />
                </IconButton>
                <IconButton  size="small">
                  <CloseIcon color={"primary"} fontSize="inherit" />
                </IconButton>
                <IconButton   size="small">
                  <DeleteIcon color={"primary"} fontSize="inherit" />
                </IconButton>
              </div>
            </div>
            :
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0].costLink[0] && accountdata[0].costLink[0].costType : ""}</div>}
          </div>
          <div className={classes.contents}>
            <div className={classes.formtitle}>Volume<IconButton className={classes.iconalign}><EditIcon onClick={()=>setVolume(!volume)} style={{fontSize:14}}/></IconButton></div>
            {volume ?
            <div className={classes.formdetails}>
            <BootstrapInputnumber type="number" size="small" id="" variant="outlined" />
              <div className={classes.buttonicon}>
                <IconButton size="small">
                  <DoneIcon color={"primary"} fontSize="inherit" />
                </IconButton>
                <IconButton  size="small">
                  <CloseIcon color={"primary"} fontSize="inherit" />
                </IconButton>
              </div>
            </div>
            :
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0].volLink[0] && accountdata[0].volLink[0].volume : ""}</div>}
          </div>
          <div className={classes.contents}>
            <div className={classes.formtitle}>UOM<IconButton className={classes.iconalign}><EditIcon onClick={()=>setUom(!uom)} style={{fontSize:14}}/></IconButton></div>
            {uom ?
            <div className={classes.formdetails}>
            <BootstrapTextfield type="number" size="small" id="" variant="outlined" />
              <div className={classes.buttonicon}>
                <IconButton size="small">
                  <DoneIcon color={"primary"} fontSize="inherit" />
                </IconButton>
                <IconButton  size="small">
                  <CloseIcon color={"primary"} fontSize="inherit" />
                </IconButton>
              </div>
            </div>
            :
            <div className={classes.formdetails}>{accountdata[0] !== "No data" ? accountdata[0].volLink[0] && accountdata[0].volLink[0].uom: ""}</div>}
          </div>
        </div>
      </>  
      }
    </form>
  );
}
export default Details;
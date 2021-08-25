import PropTypes from 'prop-types';
import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useTreeItemStyles} from "../../../components/inputs";
import Data from "../../JSON/TreeNodes.json";
import { Checkbox } from '@material-ui/core';
import { source } from '../../../redux';
import {useDispatch,useSelector} from "react-redux"
// dropdown
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {Bootstrapdropdownlong} from '../../../components/inputs';
import axios from "axios"
import Button from "@material-ui/core/Button"

function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <div className={classes.labelRoot}>
                    {/* <LabelIcon color="inherit" className={classes.labelIcon} /> */}
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    {/* <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography> */}
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
                '--tree-view-height':38,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    // labelIcon: PropTypes.elementType.isRequired,
    // labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
    root: {
        height: 157,
        flexGrow: 1,
        overflow:"auto",
        border: "1px solid",
        margin: 10,
        borderRadius:6,
    },
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
    }},
    treeviewtop:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    checkbox:{
      "&.MuiCheckbox-colorSecondary.Mui-checked":{
        color: "#810000"
      }
    },
    
});

export default function Treeview({setData}) {
  const classes = useStyles();
  const [datum,setDatum] = useState([]);
  const [Treeitems , setTreeitems]  = useState([...Data])
  const Treeview=[]
  const [selected,setSelected] =useState([])
  let [node, setNode] = useState(0);
  const dispatch = useDispatch();
  const data  = useSelector(state => state.header.stage)
  const period = useSelector(state =>state.header.period)
  const state = useSelector(state => state.account.accountdetails)

  useEffect(()=>{
    const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview")
    temptreeview.then(res=>res.json()).then(tempdata=>setTreeitems(tempdata))
    setData("")
  },[])

  useEffect(() => {
    Treeitems.map((item)=>{
      if(item.stage === data){
        Treeview.push(item)
      }
    })
     // to get the higher node
      Treeview.map((item) => {
        if (node < item.Node) {
          node = item.Node;
        }
      });
      setNode(node)
      for(let i=node ; i>0 ; i--){
        Treeview.map((key,index) =>{
          if(key.Node === i)
          {
            Object.assign(key,{["checked"]:false})
            if(key.treeView.length !== 0) {
              key.treeView.map((item)=>
              {
                Object.assign(item,{["checked"]:false}) 
              })
            } 
          }
        })
      }
      // to push the tree nodes inside the other nodes
      let deletenode =[]
      for (let i = node; i > 0; i--) {
        Treeview.map((key, index) => {
          if (key.Node === i) {
            Treeview.map((item) => {
              if (item.refNum === key.parentRefNum) {
                const bool = item.treeView.some((item)=>item._id===key._id)
                {!bool ? item.treeView=[...item.treeView,key]:item.treeView=[...item.treeView]}
                deletenode.push(index)
              }
            });
          }
        });
      }
      let tempdata =[]
      for(let i =0 ; i<Treeview.length;i++){
        if(!deletenode.includes(i)){
            tempdata.push(Treeview[i])
        }
      }
      setDatum([...tempdata]);
    }, [Data,Treeitems]);

const Treeitem = (props) =>{
  const {parent} = props
    return(
      props.data.map((item)=>{
        return(
          !(item.treeView===undefined || item.treeView.length === 0) ?
            <StyledTreeItem nodeId={item._id} labelText={<div ><Checkbox className={classes.checkbox} checked={item.checked} onClick={(e)=>handleselectall(e,item)} /> {item.name}</div>} color="#810000" bgColor="#EEEBDD">
                 <Treeitem data={item.treeView} parent={parent}/> 
            </StyledTreeItem>
            :
            <StyledTreeItem nodeId={item._id.$oid} labelText={<div ><Checkbox className={classes.checkbox} checked={item.checked} onClick={(e)=>handlecheckbox(props.data,item,parent)} /> {item.name}</div>} color="#810000" bgColor="#EEEBDD"/>
        )
  }
  ))
}

const selectall = (props) =>{
  props["checked"] = true;
  if(props.treeView === undefined){
    selected.push(props)
  }
  setSelected([...selected])
  let a = props
  if( (a.treeView && a.treeView.length!==0) || a.treeView !== undefined){
  for(let i=0 ; i<a.treeView.length;i++){
    a.treeView[i]["checked"] = true;
    selectall(a.treeView[i])
  }
 }
 
}
const unselectall = (props) =>{
    props["checked"] = false;
    if(props.treeView === undefined){
      const index = selected.findIndex((item) => item.name === props.name)
      selected.splice(index,1)
    }
    setSelected([...selected])
    let a = props
    if( (a.treeView && a.treeView.length!==0) || a.treeView !== undefined){
    for(let i=0 ; i<a.treeView.length;i++){
      a.treeView[i]["checked"] = false;
      unselectall(a.treeView[i])
   }
  }
}
// for single select 
const selectparent = (props,state) =>{
  let parentrefnum = props
  let value = state
  for(let i=node ; i>0 ;i--)
    {
      Treeitems.map((item)=>{
        if(parentrefnum===item.refNum)
        {
          if(item.treeView !== undefined && item.treeView.length!==0){
            const status = item.treeView.every((key)=>key["checked"]===true)
            if(status){item["checked"] = true;parentrefnum = item.parentRefNum; }
            else{item["checked"]=false;parentrefnum=item.parentRefNum;}
          }
          else{item["checked"] = value;parentrefnum = item.parentRefNum}
        }
      })
    }
}

const handleselectall = (e,props) =>{
  if(props["checked"] === false){
    props["checked"] = true
    if(props.treeView.length !==0){
      for(let i=0 ; i<props.treeView.length;i++){
        selectall(props.treeView[i])
    }
  }
  selectparent(props.parentRefNum,true)
  }
  else if(props["checked"] === true){
    props["checked"] = false
    if(props.treeView.length !==0){
      for(let i=0 ; i<props.treeView.length;i++){
        unselectall(props.treeView[i])
    }
  }
  selectparent(props.parentRefNum,false)
  }
  setDatum([...datum])
}

const handlecheckbox = (item,props,data) =>{
  let count=0
  if(props["checked"] === false){
    selected.push(props)
    setSelected([...selected])
    props["checked"]=true
  }
  else{
    props["checked"]=false
    const a = selected.findIndex((item) => item.name === props.name)
    selected.splice(a,1)
    setSelected([...selected])
  }
  item.length !==0 && item.map((key)=> {
    if(key["checked"]===true) 
    {
      count=count+1
    }}
    )
  if(count === item.length && data!== undefined)
  {
    let parentrefnum = props.parentRefNum
    let value=true
    selectparent(parentrefnum,value)
  }
  else if(data !==undefined){
    let parentrefnum = props.parentRefNum
    let value=false
    selectparent(parentrefnum,value)
  }
  setDatum([...datum])
}


    const refresh = (props) =>{
      props.map((item) =>{
      item["checked"] = false
      if(item.treeView!== undefined)
        {
          item["checked"] = false
          refresh(item.treeView)
        }
    })}

    const Addassignment=()=>{
        selected.map((item)=>{
            axios.get("http://[::1]:3000/account-drivers/accountDetails",{params:{period:period,refNum:item.refNum}})
            .then(res=> {
              console.log(res.data)
              let final = {refNum:item.refNum,period:period,driver:state[0].driverLink[0].driverName,profile:state[0].profile}
                  axios({
                    method:"patch",
                    url:"http://[::1]:3000/account-drivers/assignDriverProfile",
                    params:final
                  }).then(res=>{if(res.statusText==="OK"){setData("OK")}})
              
            }).catch(err=>console.log(err))
        datum.map((item)=>{
          item["checked"] = false
          item.treeView!== undefined && refresh(item.treeView)
        })
        setDatum([...datum])
        dispatch(source(selected))
        })
      }

    return (
        <div>
        <div className={classes.treeviewtop}>
            <FormControl variant="outlined" disabled className={classes.formControl}>
                <InputLabel
                className={classes.labelname}
                id="demo-simple-select-outlined-label"
                >
                Financial
                </InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                input={<Bootstrapdropdownlong />}
                >
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={Addassignment} size={"small"}>Assign Selected</Button>
        </div>
        <TreeView
            className={classes.root}
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
        >
            {datum.map((item) =>{
                return(
                <StyledTreeItem nodeId={item._id} labelText={<div><Checkbox className={classes.checkbox} checked={item.checked} onClick={(e)=>item.treeView.length!==0 ?(handleselectall(e,item)):handlecheckbox([],item)} /> {item.name}</div>} color="#810000" bgColor="#EEEBDD">
                     {
                    (item.treeView.length !== 0) &&
                        <Treeitem data={item.treeView} parent={item}/>
                    } 
                </StyledTreeItem>)
            })
        }
        </TreeView>
        </div>
    );
}
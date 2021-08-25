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
import {useSelector,useDispatch} from "react-redux"
// dropdown

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
        height: 177,
        flexGrow: 1,
        overflow:"auto",
        border: "1px solid",
        margin: 10,
        borderRadius:6
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
    }
});

export default function Treeview({setSelectedlabel}) {
    const classes = useStyles();
    const [datum,setDatum] = useState([]);
    const [Treeitems , setTreeitems]  = useState([...Data])
    const Treeview=[]
    let [node, setNode] = useState(0);
    const data  = useSelector(state => state.header.stage)
    
    useEffect(()=>{
      const temptreeview = fetch("http://[::1]:3000/center-hierarchies/treeview")
      temptreeview.then(res=>res.json()).then(tempdata=>setTreeitems(tempdata))
      
  },[data])

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

        const handleClick = (props) =>{
          setSelectedlabel([props])
        }

    const Treeitem = (props) =>{
        return(
          props.data.map((item)=>{
            return(
              !(item.treeView===undefined || item.treeView.length === 0) ?
                <StyledTreeItem nodeId={item._id} labelText={item.name} color="#810000" bgColor="#EEEBDD">
                     <Treeitem data={item.treeView} /> 
                </StyledTreeItem>
                :
                <StyledTreeItem onClick={()=>handleClick(item)} nodeId={item._id} labelText={item.name} color="#810000" bgColor="#EEEBDD"/>
            )
      }
    ))
    }


    return (
        <div>
        <TreeView
            className={classes.root}
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
        >
            {datum.map((item) =>{
                return(
                <StyledTreeItem nodeId={item._id} onClick={()=>{item.treeView.length===0 && handleClick(item)}} labelText={item.name} color="#810000" bgColor="#EEEBDD">
                     {
                    (item.treeView.length !== 0) &&
                        <Treeitem data={item.treeView} />
                    } 
                </StyledTreeItem>)
            })
        }
        </TreeView>
        </div>
    );
}
import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image"
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as XLSX from 'xlsx';
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import ImportExport from "@material-ui/icons/ImportExport";
import ImportContacts from "@material-ui/icons/ImportContacts";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Assessment from "@material-ui/icons/Assessment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Apps from "@material-ui/icons/Apps"; 
import Functions from "@material-ui/icons/Functions";
import Equalizer from "@material-ui/icons/Equalizer";
import PieChart from "@material-ui/icons/PieChart";
import Bookmark from "@material-ui/icons/Bookmark";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import BlurOn from "@material-ui/icons/BlurOn";
import { useDispatch } from "react-redux";
import { dbconnection,modelstats} from "../../redux";
import Popover from '@material-ui/core/Popover';
// import Listitems from "./List";

const categories = [
  {
    id: "Develop",
    children: [
      {
        id: "Import",
        icon: <ImportExport />,
        active: "true",
        name: "Import",
        child: [
          { id: "Microsoft Excel",accept:".xlsx,.xls,.xlsm" },
          { id: "Microsoft Access" },
          { id: "Microsoft SQL Sever" },
          { id: "Text File" },
          { id: "Entire Model" },
          { id: "Backup/Restore" }
        ]
      },
      {
        id: "Structure",
        icon: <AccountBalance />,
        name: "Structure",
        child: [
          { id: "Stage" },
          { id: "Period" },
          { id: "Scenarios" },
          { id: "Centres" },
          { id: "Accounts" },
          { id: "Drivers" },
          { id: "Profiles" },
          { id: "Unit of Measures" },
          { id: "Attributes" },
          { id: "Cost Types" },
          { id: "Driver Associations" }
        ]
      },
      {
        id: "Export",
        icon: <ImportExport />,
        child: [
          {
            id: "Packages",
            child: [
              { id: "Attributes" },
              { id: "Core Model" },
              { id: "Driver group" },
              { id: "Extended Model" },
              { id: "Period Specific" },
              { id: "Results" }
            ]
          },
          { id: "Entire Model" },
          { id: "Backup/Restore" }
        ]
      },
      {
        id: "Advanced",
        icon: <Apps />,
        child: [
          { id: "Data Manager", name: "Datamanager" },
          { id: "Data Cleanup" },
          { id: "Clone Period" },
          { id: "Full Model Wipe" }
        ]
      }
    ]
  },
  {
    id: "Model Management",
    children: [
      { id: "Calculate", icon: <Functions /> },
      { id: "Model Stats", icon: <Equalizer /> },
      { id: "Cost Analytics", icon: <PieChart /> },
      {
        id: "Reports",
        icon: <Assessment />,
        child: [
          { id: "Model Analysis" },
          { id: "Model Development" },
          { id: "Cost Flow" }
        ]
      }
    ]
  },
  {
    id: "Calculation & Reporting",
    children: [
      { id: "Document Management", icon: <InsertDriveFile /> },
      { id: "Dictionaries", icon: <ImportContacts /> },
      {
        id: "Bookmarks",
        icon: <Bookmark />,
        child: [{ id: "Account" }, { id: "Centre" }, { id: "Remove" }]
      }
    ]
  },
  {
    id: "Activity Logs",
    children: [
      { id: "Audit Trial", icon: <VerifiedUser /> },
      { id: "Import History", icon: <ImportContacts /> },
      { id: "Calculation Logs", icon: <BlurOn /> },
      { id: "Error Logs", icon: <BlurOn /> }
    ]
  }
];

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "center",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&.MuiMenuItem-root": {
      padding: "0 15px"
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "&.MuiListItemIcon-root, &.MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: "#6A7778",
    fontWeight: 500
  },
  item: {
    paddingTop: 8,
    color: "#6A7778",
    paddingBottom: 10,
    justifyContent: "center",
    "&:hover": {
      color: "#6A7778",
      backgroundColor: "#EEEBDD"
    },
    "&:focus": {
      backgroundColor: "#EEEBDD",
      color: "#810000"
    }
  },
  itemCategory: {
    backgroundColor: "white",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  firebase: {
    fontSize: 24,
    color: "black",
    justifyContent: "center"
  },
  itemActiveItem: {
    color: "#810000",
    backgroundColor: "white",
    justifyContent: "center"
  },
  itemPrimary: {
    fontSize: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  listSpacing:{
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems:"center"
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2)
  },
  itemIconclose: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 16,
    justifyContent: "space-around",
    alignItems: "center",
    width: "60px"
  },
  itemIconclose1: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 23,
    justifyContent: "start",
    width: "50px"
  },
  divider: {
    backgroundColor: "white"
  },
  imgopen: {
    height: 92,
    width: 80
  },
  acumenimg: {
    height: 65,
    width: 62
  },
  browser: {
    fontSize: 100,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0
  }
});

function Navigator(props) {
  const { classes, ...other } = props;
  // const [open, setOpen] = React.useState("");
  const [child, setChild] = React.useState([]);
  const [anchor, setAnchor] = React.useState(null);
  const dispatch = useDispatch();
  
  const Clicking = (event, item) => {
    // setOpen(!open);
    if(item.child!==undefined)
    {
      setAnchor(event.currentTarget);
      setChild(item.child)
    };
  };

  const handleclicks = (props) =>{
    if(props === "Model Stats")
    {
      dispatch(modelstats(true))
    }
  }

  const Listitem = (props) => {
    const [anchorEL,setAnchorEL] = React.useState(null)
    const [second,setSecond] = useState(false)

    const uploaded = (e) =>{
      e.preventDefault();
      var files = e.target.files, f = files[0];
      var reader = new FileReader();
      // console.log(files)
      reader.onload = function (e) {
          var data = e.target.result;
          let readedData = XLSX.read(data, {type: 'binary'});
          const wsname = readedData.SheetNames[0];
          const ws = readedData.Sheets[wsname];
  
          /* Convert array to json*/
          console.log(Object.values(ws))
          const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
          // console.log("Data>>>"+dataParse);
      };
      reader.readAsBinaryString(f)
      
    }

    const handleClick = (event) =>{
      setAnchorEL(event.currentTarget)
      setSecond(!second)
    }

    const handleClose = (item) =>{
      setAnchor(null)
      if(item.id === "Microsoft SQL Sever")
      {
        dispatch(dbconnection(true))
      }
      
    }

    const secondClose = () =>{
      setAnchorEL(null)
      setSecond(!second)
    }

   return(
      <Popover
      id="simple-menu"
      elevation={1}
      anchorEl={anchor}
      keepMounted
      open={Boolean(anchor)}
      getContentAnchorEl={null}
      // onClick={handleClose}
      anchorOrigin={{ vertical: 'center', horizontal: 'right'}}
      transformOrigin={{vertical: 'top',horizontal: 'left' }}
    >
        {
            props.data.map((item)=>
              item.child !== undefined ? 
              <>
                <MenuItem aria-controls="simple-menus" aria-haspopup="true" aria-disables="true" 
                onClick={handleClick}
                >
                  {item.id}
                  <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
                  <Popover
                    id="simple-menus"
                    elevation={1}
                    anchorEl={anchorEL}
                    keepMounted
                    open={second}
                    // getContentAnchorEl={null}
                    // onClick={secondClose}
                    anchorOrigin={{ vertical: 'center', horizontal: 'right'}}
                    transformOrigin={{vertical: 'top',horizontal: 'left' }}
                  >
                    {item.child.map((key)=>
                      <MenuItem aria-controls="child-menus" aria-haspopup="true" aria-disables="true"
                        onClick={secondClose}
                        > 
                        {key.id} 
                      </MenuItem>
                    )}
                  </Popover>
                </MenuItem>
              </>
              :
              (
              item.accept!==undefined ?
              <MenuItem onClick={()=>handleClose(item)}><input type="file" onChange={uploaded} className={classes.browser} accept={item.accept}/>{item.id}</MenuItem>
              :
              <MenuItem onClick={()=>handleClose(item)}>
                {item.id}
              </MenuItem>
              )
            )
          }
    </Popover>
   )

  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          <Image alt="Acumen" 
          height={props.open?92:65} width={props.open?80:62}
          title="Acumen"
          src="/Acumen.png" layout="fixed" objectFit="contain" />
        </ListItem>
        {categories.map(({ id, children }) => ( // categories
          <React.Fragment key={id}>
            {props.open && (
              <ListItem  className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
            )}
            {children.map((item) => (  // categories child
              <ListItem
                key={item.id}
                onClick={(event) =>{Clicking(event, item),handleclicks(item.id)}}
                button
                className={clsx(
                  classes.item,
                  item.active && classes.itemActiveItem
                )}
              >
                <ListItemIcon
                  className={
                    props.open
                      ? classes.itemIcon
                      : item.child !== undefined
                      ? classes.itemIconclose
                      : classes.itemIconclose1
                  }
                  // onClick={(event) => Clicking(event, item)}
                >
                  {props.open ? (
                    item.icon
                  ) : (
                    <>
                      <Tooltip title={item.id} placement="right">
                          <div >{item.icon}</div>
                      </Tooltip>
                      {item.child !== undefined && (
                        <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
                      )}
                    </>
                  )}
                </ListItemIcon>
                {props.open && (
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary
                    }}
                  >
                    <div className={classes.listSpacing}>{item.id}
                      {item.child !== undefined && (
                        <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
                      )}
                    </div>
                  </ListItemText>
                )}
                {child !== undefined && (
                  <Listitem data={child} />
                )}
              </ListItem>
            ))}
            {!props.open && <p></p>}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);

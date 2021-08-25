import React, { useEffect,useState } from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import {dbconnection} from "../../redux" 
import { useDispatch,useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Bootstrapdropdown = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: "-4px",
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: "200px",
      padding: "4px 26px 4px 12px",
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        backgroundColor:"#eeebdd"
      },
    },
  }))(InputBase);

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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    paper: {
      position: 'absolute',
      width: "35%",
      height:"55%",
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
    closebutton:{
      background:"#810000",
      borderRadius:0,
      color:"white"
    },
    labelname: {
        transform: "translate(14px,3px) scale(1)",
        "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
          // transform: "translate(14px,3px) scale(1)";
          display:"none"
        }},
    form:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
  }));
  
  export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const open = useSelector(state=>state.modal.dbconnection)
    const dispatch = useDispatch();

    const handleClose = () =>{     
        dispatch(dbconnection(false))
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
              <div>Select a MS SQL Server
              </div>
              <IconButton size="small" onClick={()=>handleClose()}>
                    <CloseIcon className={classes.closebutton}/>
                </IconButton>
            </div>
            <div className={classes.form}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    Server Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    input={<Bootstrapdropdown />}
                  >
                  </Select>
                </FormControl> 
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    Authentication
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    input={<Bootstrapdropdown />}
                  >
                  </Select>
                </FormControl> 
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    Login
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    input={<Bootstrapdropdown />}
                  >
                  </Select>
                </FormControl> 
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    Password
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    input={<Bootstrapdropdown />}
                  >
                  </Select>
                </FormControl> 
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    Database Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    input={<Bootstrapdropdown />}
                  >
                  </Select>
                </FormControl> 
            </div>
        </div>
        </Modal>
      </div>
    );
  }



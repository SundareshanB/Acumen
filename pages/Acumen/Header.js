import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import Stage from "../JSON/stages.json";
// import Period from "../JSON/periods.json";
import {Stage,Period} from "../../redux";
import {useDispatch,useSelector} from "react-redux";

const lightColor = 'rgba(255, 255, 255, 0.7)';

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
    width: "120px",
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


const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      display:"none"
    }
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  maininput:{
    width:"40%",
    display:"flex",
    justifyContent:"space-evenly",
    marginRight:"60px"
  },
  aligntopitems:{
    display:"flex",
    alignItems:"center"
  },
  labelname: {
    transform: "translate(14px,3px) scale(1)",
  }
})

function Header(props) {
  const { classes, onDrawerToggle } = props;
  const [stage,setStage] = useState([]);
  const [ordered,setOrdered] = useState([])
  const [period , setPeriod] = useState([])
  const header = useSelector(state=>state.header)
  const [selectedstage , setSelectedstage] = useState("")
  const [selectperiod , setSelectperiod] = useState("")
  const dispatch = useDispatch()
  useState(()=>{
    if(header)
    {
      setSelectedstage(header.stage)
      setSelectperiod(header.period)
    }
  },[header])

  useEffect(()=>{
    const tempstage = fetch("http://[::1]:3000/api/stages")
    tempstage.then(res =>
      res.json()).then(d => {
          setStage(d)
      })
        const tempperiod = fetch("http://[::1]:3000/api/periods")
        tempperiod.then(res =>
          res.json()).then(d => {
              setPeriod(d)
          })
  },[])

  useEffect(()=>{
    let temp = []
      stage.map((item,index)=>{
        stage.map((item)=>{
          if(item.stageOrder === index+1) 
          {
            temp.push(item)
          }
        })
      })
      setOrdered(temp)
  },[stage])

  const Stageselection = (value) =>{
    dispatch(Stage(value))
  }
  const Periodselection = (value) =>{
    setSelectperiod(value)
    dispatch(Period(value))
  }

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs />
              <Grid className={classes.maininput} item>
              <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    {/* {selectedstage !== "" ? selectedstage : "Stage"} */}
                    Stage
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    input={<Bootstrapdropdown />}
                    value={selectedstage}
                  >
                    {ordered && ordered.map((item)=>
                      <MenuItem value={item.stageName} key={item.id} onClick={()=>(Stageselection(item.stageName),setSelectedstage(item.stageName))}>{item.stageName}</MenuItem>
                    )}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.labelname}
                    id="demo-simple-select-outlined-label"
                  >
                    {/* {selectperiod !== "" ? selectperiod : "Period"} */}
                    Period
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label={selectperiod}
                    input={<Bootstrapdropdown />}
                    value={selectperiod}
                  >
                    {period && period.map((item)=>
                      <MenuItem value={item.periodName} onClick={()=>Periodselection(item.periodName)}>{item.periodName}</MenuItem>
                    )}
                  </Select>
                </FormControl>         
              </Grid>
              
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                {/* <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" /> */}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        {/* <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Import Data
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                Web setup
              </Button>
            </Grid> 
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar> */}
      </AppBar>
      {/* <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Develop" />
          <Tab textColor="inherit" label="Model Management" />
          <Tab textColor="inherit" label="Calculation & Reporting" />
          <Tab textColor="inherit" label="Activity Logs" />
        </Tabs>
      </AppBar> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
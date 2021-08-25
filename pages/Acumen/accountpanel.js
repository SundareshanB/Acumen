import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container} from '@material-ui/core';
import Details from "./accountpaneldetails";
import Tabletabs from "./accountpaneltab";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme)=>({
  container: {
    minWidth: 650,
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
}));


export default function BasicTable() {
  const classes = useStyles();
  const state = useSelector(state=>state.header.account)
  

  return (
    <Container className={classes.container} component={Paper} fixed >
        <div className={classes.profile}>
          <label className={classes.title}>{state[0] && state[0].name}</label>
          <div>{state[0] && state[0].refNum}<label className={classes.refer}>({state[0] && state[0].parentRefNum})</label></div>
        </div>
        <Details />
        <Tabletabs />
    </Container>
  );
}
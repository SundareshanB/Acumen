import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // height:"100%"
  },
  paper:{
      width:"650px",
      margin:5,
      padding:5,
      border:"1px solid #810000"
  },
  header:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin: 5,
      fontSize: 16,
      color: "#810000",
      padding:5,
      background:"lightgray",
      fontWeight: 700
  }
});


const BasicTable = (props) => {
  const classes = useStyles();
  const [data,setData] = useState(props.value)
  const [row,setRow]=useState(props.row)

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <div className={classes.header}>{props.title}</div>
      <Table className={classes.table} aria-label="simple table" size={"small"}>
        <TableHead>
          <TableRow>
            {row!==undefined && row.length!=0 && row.map((item)=>
                <TableCell align="left">{item}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data!==undefined && data.length!==0 && data.map((key) => (
            <TableRow key={key.Stage}>
              {props.row.map((item)=>
                  <TableCell align="left">{key[item]}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
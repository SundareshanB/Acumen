import React,{useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Line} from "react-chartjs-2";
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
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

const Chart = (props) =>{
    const classes = useStyles();
    const {row,value} = props; // option = row (amount)
    const label=[]
    const [data,setData] = useState({})
    let color=["#FED39F","#FFD57E","#FE8761","#AF460F","#9D2503"]
    
    useEffect(()=>{
    let temp=[]
        value.map((item)=>{ 
            label.push(item[row[0]]) 
        })
        row.splice(0,1)
        row.map((item,index)=>{ 
            let tempdata=[]
            value.map((key)=>{ 
                tempdata.push(parseInt(key[item].replace(/,/g, '')))
            })
            let tempobj = {
                label:item,
                data:tempdata,
                backgroundColor:color[index],
                fontColor:color[index],
                borderColor:color[index]
            }
            temp.push(tempobj)
        } 
    );
    let obj = {
        labels:label,
        datasets:temp
    }
    setData(obj)
    },[row])
    console.log(data)


    return(
        <>
            
        <TableContainer className={classes.paper} component={Paper}>
        <div className={classes.header}>{props.title}</div>
        <Table className={classes.table} aria-label="simple table" size={"small"}>
            <Line data={data}/>
        </Table>
        </TableContainer>
        </>
    )
}

export default Chart;
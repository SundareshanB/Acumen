import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  },
  singleline: {
    "&.MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  input: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const Drivedictionary = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const [definition, setDefinition] = React.useState(true);
  const [source, setSource] = React.useState(true);
  const [sourcecontact, setSourcecontact] = React.useState(true);
  const data = useSelector(state => state)
  const [definevalue,setDefinevalue] = React.useState("")
  const [sourcevalue,setSourcevalue] = React.useState("")
  const [contactvalue,setContactvalue] = React.useState("")
  const [dictionary , setDictionary] = React.useState([])
  const [Status,setStatus] = React.useState("")

  useEffect(()=>{
    axios.get("http://[::1]:3000/driverDictionary/findBydriver",{params:{driver:data.account.accountdetails[0].driver}}).then(res=>setDictionary(res.data))
  },[])

  useEffect(()=>{
    if(dictionary[0] !== undefined)
    {
    setDefinevalue(dictionary[0].definition ?dictionary[0].definition:"" )
    setSourcevalue(dictionary[0].source ? dictionary[0].source : "")
    setContactvalue(dictionary[0].sourceContact ? dictionary[0].sourceContact : "")
    }
  },[dictionary])
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit=()=>{
    
    // axios.patch(`http://[::1]:3000/driverDictionary/updateDriverDict?driver=${data.account.accountdetails[0].driver}&definition=${definevalue}&source=${sourcevalue}&sourceContact=${contactvalue}`).then(res=>console.log(res)).catch(err=>console.log(err))
    if(dictionary.length!==0){
      let obj={driver:data.account.accountdetails[0].driver,definition:definevalue,source:sourcevalue,sourceContact:contactvalue};
      axios({
      method:"patch",
      url:"http://[::1]:3000/driverDictionary/updateDriverDict",
      params:obj
    }).then(res=>{if(res.statusText === "OK"){
      setDefinition(true)
      setSource(true)
      setSourcecontact(true)
    }}).catch(err=>console.log(err))}
    else{
      let event = new Date()
      let obj={driver:data.account.accountdetails[0].driver,definition:definevalue,source:sourcevalue,sourceContact:contactvalue,"modBy": 0,
      "modTime": event.toISOString()};
      axios({
        method:"post",
        url:"http://[::1]:3000/driver-dictionaries",
        data:obj
      }).then(res=>{if(res.statusText === "OK"){
        setDefinition(true)
        setSource(true)
        setSourcecontact(true)
      }}).catch(err=>console.log(err))}
  }
 
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.input}>
        <div>
          
          <TextField
            id="outlined-multiline-static"
            label="Definition"
            multiline
            disabled={definition}
            rows={2}
            value={definevalue}
            variant="outlined"
            onChange={(e)=>setDefinevalue(e.target.value)}
          />
          <IconButton onClick={() => setDefinition(!definition)}>
            <EditIcon style={{ fontSize: 14 }} />
          </IconButton>
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Source"
            multiline
            className={classes.singleline}
            disabled={source}
            value={sourcevalue}
            variant="outlined"
            onChange={(e)=>setSourcevalue(e.target.value)}
          />
          
          <IconButton onClick={() => setSource(!source)}>
            <EditIcon style={{ fontSize: 14 }} />
          </IconButton>
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Source Contact"
            multiline
            className={classes.singleline}
            disabled={sourcecontact}
            value={contactvalue}
            variant="outlined"
            onChange={(e)=>setContactvalue(e.target.value)}
          />
          <IconButton onClick={() => setSourcecontact(!sourcecontact)}>
            <EditIcon style={{ fontSize: 14 }} />
          </IconButton>
        </div>
      </div>
      <div className={classes.button}>
        <Button onClick={() =>onSubmit()} variant="contained" color="primary" size={"small"}>
          Add/Update
        </Button>
      </div>
    </form>
  );
};

export default Drivedictionary;

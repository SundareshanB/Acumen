import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Logindata from "./JSON/users.json";
import { useDispatch } from "react-redux";
import { login } from "../redux";
import { useRouter } from "next/router";

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "#8D1B19"
    },
    "& label.Mui-focused": {
      color: "#8D1B19"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#8D1B19",
        borderWidth: "1px"
      },
      "&:hover fieldset": {
        borderColor: "#8D1B19",
        borderWidth: "1px"
      },
      "&:hover fieldset .Mui-focused": {
        borderColor: "#8D1B19",
        borderWidth: "1px"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8D1B19",
        borderWidth: "1px"
      },
      "&.MuiCheckbox-colorSecondary.Mui-checked":{
        color: "#810000"
      },
      "&.MuiTableRow-root.Mui-selected":{
        backgroundColor: "#eeebdd",
      },
    }
  }
})(TextField);
const Buttons = withStyles({
  root: {
    backgroundColor: "#8D1B19",
    borderColor: "#8D1B19",
    "&.hover": {
      backgroundColor: "#8D1B19",
      borderColor: "#8D1B19"
    }
  }
})(Button);

const useStyles = makeStyles((theme) => ({
  Login: {
    width: "100%",
    height: "100vh",
    display: "flex"
  },
  paper: {
    width: "30%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  papercontainer: {
    width: "90%",
    height: "90%"
  },
  imgopen: {
    height: 92,
    width: 80
  },
  image: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "5%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  logindetails: {
    paddingTop: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "45%",
    alignItems: "center"
  },
  loginheader: {
    fontSize: 18,
    padding: 0,
    margin: 0
  },
  companyimg: {
    height: "auto",
    width: "70%",
    display: "flex",
    alignItems: "flex-end"
  },
  companylogo: {
    backgroundImage:
      "url(https://armadasolutions.com/wp-content/uploads/2021/01/armada-brand-bg-1500x1054.jpg)",
    width: "100%",
    height: "86%",
    background: "no-repeat",
    backgroundSize: "100% 94%"
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const router = useRouter()
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  let username = true;
  let passwords = true;
  const [logindata, setLogindata] = useState({
    userid: "",
    password: "",
    id_status: false,
    password_status: false
  });

  const handleClose = () => {
    setLogindata({
      userid: "",
      password: "",
      id_status: false,
      password_status: false
    });
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userid") {
      setLogindata({
        ...logindata,
        [name]: value,
        id_status: !/^[0-9a-zA-Z]+$/.test(value)
      });
    }
    if (name === "password") {
      setLogindata({ ...logindata, [name]: value });
    }
    if (name === "userid" && value === "") {
      setLogindata({ ...logindata, id_status: false });
    }
  };

  const Submit = () => {
      console.log(Logindata)
    for (let i = 0; i <= Logindata.length; i++) {
      if (
        i < Logindata.length - 1 &&
        logindata.userid === Logindata[i].username &&
        logindata.password === Logindata[i].password
      ) {
          console.log("success")
          router.push("/Acumen")
        // dispatch(login([{ auth: true, username: Logindata[i].fullName }]));
      } else if (Logindata.length === i) {
        // username = Logindata.some((item) => item.username === logindata.userid);
        // passwords = false;
        // setOpen(true);
      }
    }
  };

  return (
    <div className={classes.Login}>
      <div className={classes.paper}>
        <Paper className={classes.papercontainer} elevation={2}>
          <div className={classes.image}>
            <Image alt="Acumen" 
                height={92} width={80}
                title="Acumen"
                src="/Acumen.png" layout="fixed" objectFit="contain" />
          </div>
          <form className={classes.logindetails}>
            <h2 className={classes.loginheader}>Login Details</h2>
            <CssTextField
              error={logindata.id_status}
              required
              id="outlined-disabled"
              label="Userid"
              variant="outlined"
              name="userid"
              size="small"
              value={logindata.userid}
              // className={style.input}
              onChange={handleChange}
            />
            <CssTextField
              error={logindata.password_status}
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              size="small"
              value={logindata.password}
              // className={style.input}
              onChange={handleChange}
            />
            <Buttons variant="contained" onClick={Submit} color="primary">
              Login
              <ArrowForwardIcon />
            </Buttons>
          </form>
        </Paper>
      </div>
      <div className={classes.companyimg}>
        <div className={classes.companylogo}>
          <div className={classes.logoalign}>
            <img
              height={50}
              width={150}
              style={{ paddingLeft: "20px" }}
              src={
                "https://armadasolutions.com/wp-content/uploads/2021/01/Armada-AFA.svg"
              }
            />
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Invalid {username && "username"} {username && passwords && "and"}{" "}
              {passwords && "password"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Modal=(props) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(props.value);
  const {success,value,onClose} = props;

  return (
    <div>
        <Dialog
          open={success}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{value.toUpperCase()}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             {`Selected data's are ${value}ed successfully`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}

export default Modal;
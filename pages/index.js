import {useState} from 'react';
import Auth from "./auth"
import {withStyles } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import store from '../redux/store'

const styles= (theme)=>({
})


function App(props) {
  const  {classes} = props;

  return (
    <Provider store={store}>
      <div className={classes.app}>
        <Auth />
      </div>
    </Provider>
  );
}

export default withStyles(styles)(App);

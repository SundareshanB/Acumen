import Paperbase from './Acumen';
import {withStyles } from '@material-ui/core/styles';

const styles= (theme)=>({
})


function App(props) {
  const  {classes} = props;

  return (
      <div className={classes.app}>
        <Paperbase />
      </div>
  );
}

export default withStyles(styles) (App);

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withStyles,makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import theme from "../../src/theme"

const drawerWidth = 210;
const height = "90%"

const styles = {
  root: {
    display: 'flex',
    height: '89vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      height:height
    }},
  drawerclose: {
      [theme.breakpoints.up('sm')]: {
        width: "90px",
        flexShrink: 0,
        height:height
      },
  },
  treedrawer: {
    background: '#eaeff1',
    width: drawerWidth,
      flexShrink: 0,
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: "16px",
    background: '#eeebdd',
    overflow:"hidden"
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eeebdd',
  },
}

function Paperbase(props) {
  const { classes } =props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header className="header" onDrawerToggle={handleDrawerToggle} />
      <div className={classes.root}>
        <CssBaseline />
        <nav className={mobileOpen?classes.drawer:classes.drawerclose}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: mobileOpen?drawerWidth : "90px" , height:height} }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: mobileOpen?drawerWidth : "90px", height:height } }} open={mobileOpen}
              onClose={handleDrawerToggle} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <div className={classes.main}>
            <Content />
          </div>
          {/* <footer className={classes.footer}>
            <Copyright />
          </footer> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Treeview from "./onetreeview";
import Source from "./Sourceaccount/sourceaccount";
import Driverassignment from "./DriverAssignment";
import Driverdictionary from "./Driverdictionary"

function TabPanel(props) {
  const { children, value, index,padding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box padding={padding}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  padding: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const styles = (theme) =>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
      treeviewtab:{
        height: "66vh",
        border:"1px solid",
        padding: "6px 8px",
        borderRadius:6
      },
})


function Assignment(props){
  const {classes} = props
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Destination" {...a11yProps(0)} />
          <Tab label="Driver Dictionary" {...a11yProps(1)} />
          <Tab label="Source Account" {...a11yProps(2)} />
          <Tab label="Driver Assignment" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel padding={"10px"} className={classes.tabpadding} value={value} index={0}>
        <div className={classes.treeviewtab}>
            <Treeview />
        </div>
      </TabPanel>
      <TabPanel padding={"12px"} className={classes.tabpadding} value={value} index={1}>
        <Driverdictionary />
      </TabPanel>
      <TabPanel padding={"10px"} className={classes.tabpadding} value={value} index={2}>
        <div><Source /></div>
      </TabPanel>
      <TabPanel padding={"8px"} className={classes.tabpadding} value={value} index={3}>
        <Driverassignment />
      </TabPanel>
    </div>
  );
}

Assignment.propTypes = {
    class: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Assignment)
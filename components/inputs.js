import { withStyles,makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from "@material-ui/core/TextField"

export const CssTextField = withStyles({
  root: {
    '& label':{
      color:"#8D1B19"
    },
    '& label.Mui-focused': {
      color: '#8D1B19',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8D1B19',
        borderWidth:'1px'
      },
      '&:hover fieldset': {
        borderColor: '#8D1B19',
        borderWidth:'1px'
      },
      '&:hover fieldset .Mui-focused': {
        borderColor: '#8D1B19',
        borderWidth:'1px'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8D1B19',
        borderWidth:'1px'
      },
    },
  },
})(TextField);

export const Bootstrapdropdownlong = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: "-4px",
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: "120px",
    padding: "4px 26px 4px 12px",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor:"#eeebdd"
    },
  },
}))(InputBase);

export const Bootstrapdropdown = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: "90px",
    padding: "4px 26px 4px 12px",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor:"white"
    },
  },
}))(InputBase);

export const BootstrapInputnumber = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 100,
    padding: 4,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },}))(InputBase);

  export const BootstrapTextfield = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: "100%",
      padding: 4,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },}))(InputBase);

  export const useTreeItemStyles = makeStyles((theme) => ({
      root: {
          color: theme.palette.text.secondary,
          '&:hover > $content': {
              backgroundColor: theme.palette.action.hover,
          },
          '&:focus > $content, &$selected > $content': {
              backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
              color: 'var(--tree-view-color)',
          },
          '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
              backgroundColor: 'transparent',
          },
           
      },
      content: {
          color: theme.palette.text.secondary,
          borderTopRightRadius: theme.spacing(2),
          borderBottomRightRadius: theme.spacing(2),
          paddingRight: theme.spacing(1),
          fontWeight: theme.typography.fontWeightMedium,
          '$expanded > &': {
              fontWeight: theme.typography.fontWeightRegular,
          },
          
      },
      group: {
          marginLeft: 0,
          paddingBottom:6,
          '& $content': {
              paddingLeft: 0,
          },
      },
      expanded: { paddingLeft:10},
      selected: {},
      label: {
          fontWeight: 'inherit',
          color: 'black',
          display:"flex",
          justifyContent:"left",
          
      },
      labelRoot: {
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0.5, 0),
          
      },
      labelIcon: {
          marginRight: theme.spacing(1),
      },
      labelText: {
          textAlign:"left",
          fontWeight: 'inherit',
          flexGrow: 1,
      },
      span:{
        "&.MuiCheckbox-colorSecondary.Mui-checked":{
          color: "#810000"
        }
      }
  }));
  
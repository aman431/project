import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BarChartIcon from '@material-ui/icons/BarChart';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    color: 'black'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{display:'flex', flexDirection:'row', backgroundColor:'white'}}>
        <img style={{marginLeft:'15px', marginTop:'5px', marginRight:'10px'}}height="40" width="60" src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/mk3ejteswarf7e5kq5us" />
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tabs} label="Dashboard" {...a11yProps(0)} />
          <Tab className={classes.tabs} label="Discovery" {...a11yProps(1)} />
          <Tab className={classes.tabs} label="Campaign" {...a11yProps(2)} />
          <Tab className={classes.tabs} label="Performance" {...a11yProps(2)} />
          <Tab className={classes.tabs} label="Payout" {...a11yProps(2)} />
          <Tab className={classes.tabs} label="Setting" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}

import React from 'react';
import { makeStyles,Input,InputLabel,InputAdornment,FormControl,TextField,Button } from '@material-ui/core';

import happyCustomer from '../assets/happycustomer.jpeg';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(11),
    },
    Button:{
        size:'small',
        margin:theme.spacing(5)
    }

  }));

const CustomerReview = () => {
    const classes = useStyles();
    return (
        <div>
            <h2>Customer Point of Views</h2>
&nbsp;&nbsp;&nbsp;&nbsp;
<br/>
            <img 
                src={happyCustomer}
            />
            <br/>
<FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Comment Your Reviews of our Product</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              {/* <AccountCircle /> */}
            </InputAdornment>    
          }
        />
        <br/>
        <Button variant="contained" color="primary" size="small" className={classes.Button}>Submit Review</Button>
</FormControl>
        </div>
    )
}

export default CustomerReview

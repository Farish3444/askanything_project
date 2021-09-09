import React from 'react'
import {Grid,Button,Card,CardActionArea,CardActions,CardContent,CardMedia,Typography,makeStyles} from '@material-ui/core'
import revenue from '../assets/revenue.jpeg';
import customer from '../assets/customer.jpeg';
import quality from '../assets/quality.png'
import FreeListingCards from '../ReUsableComps/FreeListingCards';
import {useHistory,Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });

const FreeListing = () => {

    const classes = useStyles();
    const history = useHistory();


    return (
        <div>
            <h1 style={{margin:'3%'}}>Get Your Business a Big Boost with a 30-Days Free Trial</h1>
            <Link to="/SignUp">
           <Button variant="contained" color='secondary'>
               Click to Get the Free Trial
           </Button>
            </Link>
           <br/>
           <br/>
           <h1>Benefits you get in the Free Trial</h1>

           <br />

         <div style={{display:'inline-flex',columnGap:'10%'}}>


         <FreeListingCards 
               image={revenue}
               heading={'Increase in Profit'}
               title='Profits'
               caption="Make a Big Big Profit with our Service and Grow your Empire with Huge Customers"
           />

    <FreeListingCards
       image={customer} 
       heading="NEW CUSTOMERS" 
       title="New Customers title"
       caption="The First time New Customers to your product is a big Advantage for your Bussiness, we make it so easy for you."
    />


    <FreeListingCards 
        image={quality}
        heading="Best Service and Maintanence"
        caption="We Provide the best for our Valuable Clients with good Quality"
    />
         </div>  
         
        </div>
    )
}

export default FreeListing

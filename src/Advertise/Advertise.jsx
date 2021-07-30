import React from 'react'
import Poster from '../assets/poster.webp';
import "../NavBar/NavComp.css";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { BrowserRouter as Router, Switch, Route, BrowserRouter,Link, useHistory } from "react-router-dom";
import Payment from './Payment';


const Advertise=()=>{

const history = useHistory();


return(
    
<React.Fragment>
<h1>Best Plans For You</h1>
        <Link to="/Payment">
        <PricingTable  highlightColor='#000080'> 
    <PricingSlot  buttonText='TRY IT FREE' title='FREE TRIAL' priceText='₹0/month'>
        <PricingDetail> <b>30</b>Days Free of Cost</PricingDetail>
        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
        <PricingDetail> <b>5</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted  buttonText='SIGN UP' title='BASIC' priceText='₹140/month'>
        <PricingDetail> <b>35</b> projects</PricingDetail>
        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SIGN UP' title='PROFESSIONAL' priceText='₹299/month'>
        <PricingDetail> <b>100</b> projects</PricingDetail>
        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot buttonText='SIGN UP' title='ENTERPRISE' priceText='₹799/month'>
        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
  </PricingTable>
        </Link>  
</React.Fragment>
)
}

export default Advertise
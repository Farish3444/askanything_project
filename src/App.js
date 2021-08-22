import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//////////////imports
import logo from './assets/Logo.png';
import './App.css';
import NavComp from './NavBar/NavComp';
import Advertise from './Advertise/Advertise';
import Home from './LandingPage/Home';
import ContactUs from './NavBar/ContactUs';
import SignUpop from "./SignUp/SignUpop";
import Payment from "./Advertise/Payment";
import CustomerReview from "./CustomerReview/CustomerReview";
/////////////////

function App() {
  return (
    <div className="App">
    <img src={logo} className='logo'/>
    <React.Fragment>
      <BrowserRouter>
      <NavComp />
      <Switch>
      <Route path="/Customer-Review" component={CustomerReview}/>
      <Route exact path="/Payment" component={Payment} />
      <Route path="/SignUp" component={SignUpop}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route  path="/Advertise"  component={Advertise}/>
        <Route path="/" exact component={Home}/>
      </Switch>
      </BrowserRouter>
    </React.Fragment>
    </div>
  );
}

export default App;

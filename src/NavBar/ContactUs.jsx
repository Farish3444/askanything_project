import React from 'react'
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Contactimage from '../assets/contactus.jpeg';
import facebooklogo from '../assets/facebookLogo.png';
import instalogo from '../assets/instalogo.png';

const ContactUs = () => {

    const history = useHistory();

    return (
        <div>
           <img src={Contactimage} alt="" style={{marginTop:'5%',margin:'3%'}}/> 
           <br style={{margin:'0%'}}/>
           <img src={facebooklogo} style={{width:'7%',margin:'1%',cursor:'pointer'}}/>
           <img src={instalogo} style={{width:'7%',cursor:'pointer'}}/>
           <br/>
           <Button variant="danger" onClick={()=>history.push('/')}>Back to home</Button>              
        </div>
    )
}

export default ContactUs

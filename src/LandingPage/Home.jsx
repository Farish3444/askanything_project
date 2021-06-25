import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Contactimage from '../assets/contactus.jpeg';

const Home = () => {


  const serviceData = [
    {service:"Doctor&Pharmacy",types:'Cardiologist,dentist,Skincare'},
    {service:"Restaurant",types:'FastFood,IndianFood,WesternFood'},
    {service:"Store",types:'ShoppingMall,DepartmentStores'} 
  ];


    function ToggleButtonGroupControlled() {
        const [value, setValue] = useState([1, 3]);
      
        const handleChange = (val) => setValue(val);
      
        return (
          <ToggleButtonGroup type="checkbox"  value={value} onChange={handleChange} style={{width:'50%'}} >
            <ToggleButton value={1} variant="outline-success">Services</ToggleButton>
            <ToggleButton value={2} variant="outline-success" >Offers</ToggleButton>
            <ToggleButton value={3} variant="outline-success" >Community</ToggleButton>
          </ToggleButtonGroup>
        );
      }


    return (
        <React.Fragment>
          <Form style={{width:'50%',marginLeft:'25%'}}>
  <Form.Group controlId="formBasicEmail">
  <br/>
    <Form.Control type="email" placeholder="Ask Anything  🔍 " style={{textAlign:'center'}} />
  </Form.Group>
  </Form>
  <br/>
<ToggleButtonGroupControlled/>
&nbsp;&nbsp;&nbsp;&nbsp;


  {serviceData.map((datacard) => (
    <div className="card" style={{width: "15rem",margin:'5%',display:'inline-flex'}}>
    <div key={datacard.services}>
  <img class="card-img-top" src={Contactimage} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{datacard.service}</h5>
    <p class="card-text">{datacard.types}</p>
    <a href="#" class="btn btn-primary">view more</a>
    </div>
  </div>
</div>
  ))}    
        </React.Fragment>
    )
}

export default Home

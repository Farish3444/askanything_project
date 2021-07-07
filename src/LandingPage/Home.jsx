import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import hospitalLogo from '../assets/hospital.jpeg';
import ReuseCards from '../ReUsableComps/ReuseCards';
import foodLogo from '../assets/foodLogo.jpeg';

const Home = () => {


  const serviceData = [
    {service:"Doctor&Pharmacy",types:'Cardiologist,dentist,Skincare'},
  
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

<div style={{marginTop:'5%',marginRight:'10rem'}}>


<div>
  <ReuseCards 
    src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    service={'Apple Products'}
    types={'Imac,MacBook,iPad,IPhone'}
    style={{marginTop:'1%',marginLeft:'20%',width: "17rem"}}
  />
</div>

<div>
  <ReuseCards 
    src={hospitalLogo}
    service={'Best Doctors'}
    types={'Cardio,Dentist,Neurologist'}
    style={{marginTop:'-33%',marginLeft:'47%',width: "17rem",height:'23.1rem'}}
  />
</div>

  <ReuseCards 
    src={foodLogo}
    service={'Best Street Foods'}
    types={'snack,drinks,chart-items'}
    style={{marginTop:'-33%',marginLeft:'73%',width: "17rem",height:'23.1rem'}}
  />
 </div>

      </React.Fragment>
    )
}

export default Home

import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Home = () => {

    function ToggleButtonGroupControlled() {
        const [value, setValue] = useState([1, 3]);
      
        /*
         * The second argument that will be passed to
         * `handleChange` from `ToggleButtonGroup`
         * is the SyntheticEvent object, but we are
         * not using it in this example so we will omit it.
         */
        const handleChange = (val) => setValue(val);
      
        return (
          <ToggleButtonGroup type="checkbox"  value={value} onChange={handleChange} style={{width:'50%'}} >
            <ToggleButton value={1} variant="outline-success" inline >Services</ToggleButton>
            <ToggleButton value={2} variant="outline-success" >Offers</ToggleButton>
            <ToggleButton value={3} variant="outline-success" >Community</ToggleButton>
          </ToggleButtonGroup>
        );
      }


    return (
        <div>
          <Form style={{width:'50%',marginLeft:'25%'}}>
  <Form.Group controlId="formBasicEmail">
  <br/>
    <Form.Control type="email" placeholder="Ask Anything  🔍 " style={{textAlign:'center'}} />
  </Form.Group>
  </Form>
  <br/>
<ToggleButtonGroupControlled/>
        </div>
    )
}

export default Home

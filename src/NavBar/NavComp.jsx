import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,Link,NavLink,useHistory, BrowserRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl,Button} from 'react-bootstrap';
import './NavComp.css';
import '../Advertise/Advertise';

const NavComp = () => {

    const history = useHistory();

    const handleHistory=()=>{
        history.push("/")
    }
    
    return (
        <div className="NavComp">
           <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

  <BrowserRouter>
 {/* Nav items and Routed lists */}
    <Nav className="mr-auto">
      
      <Nav.Link onClick={handleHistory}>
      Home |
      </Nav.Link>
     
      <Nav.Link > Free Listing |</Nav.Link>
      <Nav.Link onClick={()=>history.push('/Advertise')}> Advertise with Us |</Nav.Link>
      <Nav.Link onClick={()=>history.push('/Customer-Review')}> Customer / Business. |</Nav.Link>
      <Nav.Link onClick={()=>history.push('/ContactUs')}> Contact Us |</Nav.Link>
      <NavDropdown title="Languages" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">தமிழ்</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* Nav items and Routed lists */}
  </BrowserRouter>


    <Form inline>
    <Link to="/SignUp">
      <Button variant="outline-success">Login/Sign-up</Button>
    </Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavComp

import React,{useState} from 'react'
import { TextField,Button,Link } from '@material-ui/core';
import './SignUpop.css';



const SignUpop = () => {

const [state, setState] = useState({
    FirstName:'',
    LastName:'',
    Password:'',
    resetPassword:''
});
const [submit, setSubmit] = useState(false);
const [valid, setvalid] = useState(false);
const [errormsg, seterrormsg] = useState(<p>Invalid Entry</p>)

const validateForm=(e)=>{
    e.preventDefault();

    if (!state.FirstName && !state.LastName && !state.Password && !state.resetPassword){
        setSubmit(false)
        console.log('Submit Falsy')    
    }


    if (state.FirstName && state.LastName && state.Password && state.resetPassword){
        setSubmit(true)
        console.log(state);
        setvalid(true);
    }


}


const handleChange=(e)=> {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }
console.log(state.resetPassword,state.Password)

    return (
        <div className="inputs">
            <form>
                <TextField 
                    label='Enter Firstname'
                    name='FirstName'
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}}
                    value={state.FirstName}
                    onChange={handleChange}
                    error={submit && !state.FirstName}
                />
                {submit && !state.FirstName ? (<p>Field required</p>):(null)}
                <br/>
                <TextField 
                    label='Enter Last Name'
                    name="LastName"
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}}
                    value={state.LastName}
                    onChange={handleChange}
                    error={submit && !state.LastName} 
                />
                {submit && !state.LastName ? (<p>Field required</p>):null}
                <br/>
                <TextField 
                    label='Enter Password'
                    type='password'
                    name="Password"
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}}
                    value={state.Password}
                    onChange={handleChange}
                    error={submit && !state.Password} 
                />
                {submit && !state.Password ? (<p>Field required</p>):null}
                <br/>
                <TextField 
                    label='ReEnter Password'
                    type='password'
                    name="resetPassword"
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}} 
                    value={state.resetPassword}
                    onChange={handleChange}
                    error={submit && state.Password !== state.resetPassword}
                />
                {submit && state.Password !== state.resetPassword  ? <p>Invalid Password</p>:null}    

                <br/>
               
                <Button 
                variant='contained' 
                color='primary'
                style={{width:'10%'}}
                onClick={validateForm} 
                >Submit</Button>
               
                {submit && valid  ? <p style={{color:'green'}}>successfully added</p>:null}
                <br/>
                
                <Link variant="body2" style={{cursor:'pointer'}}>
                    Existing Users Login Here
                </Link>
            </form>
        </div>
    )
}

export default SignUpop

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


const validateForm=(e)=>{
    e.preventDefault();
    if (state.FirstName && state.LastName && state.Password && state.resetPassword){
        setvalid(true)
        console.log(state);
        setSubmit(true)
    }
    console.log("submit",submit)
    console.log("valid",valid)
    console.log("done")

}

// const handleFirst=(e)=>{
//       setState({...state,FirstName:e.target.value})
// }
// const handleLast=(e)=>{
//       setState({...state,LastName:e.target.value})
// }
const handlePassword=(e)=>{
      setState({...state,Password:e.target.value})
}

const handleReset=(e)=>{
    setState({...state,resetPassword:e.target.value})
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
                />
                {submit && state.Password !== state.resetPassword  ? <p>Invalid Password</p>:null}    

                <br/>
                {submit && valid  ? <p style={{color:'green'}}>successfully added</p>:null}
                <br/>
                <br/>
                <Button 
                variant='contained' 
                color='primary'
                style={{width:'10%'}}
                onClick={validateForm} 
                >Submit</Button>
                <br/>
                <br/>
                <Link variant="body2" style={{cursor:'pointer'}}>
                    Existing Users Login Here
                </Link>
            </form>
        </div>
    )
}

export default SignUpop

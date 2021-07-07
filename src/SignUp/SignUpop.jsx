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
    if (state.FirstName && state.LastName && state.Password){
        setvalid(true)
        console.log(state);
    }
    setSubmit(true)
}

const handleFirst=(e)=>{
      setState({...state,FirstName:e.target.value})
}
const handleLast=(e)=>{
      setState({...state,LastName:e.target.value})
}
const handlePassword=(e)=>{
      setState({...state,Password:e.target.value})
}

const handleReset=(e)=>{
    setState({...state,resetPassword:e.target.value})
}

    return (
        <div className="inputs">
            <form>
                <TextField 
                    label='Enter Firstname'
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}}
                    value={state.FirstName}
                    onChange={handleFirst} 
                />
                {submit && !state.FirstName ? (<p>Field required</p>):(null)}
                <br/>
                <TextField 
                    label='Enter Last Name'
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}}
                    value={state.LastName}
                    onChange={handleLast} 
                />
                {submit && !state.LastName ? (<p>Field required</p>):null}
                <br/>
                <TextField 
                    label='Enter Password'
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}}
                    value={state.Password}
                    onChange={handlePassword} 
                />
                {submit && !state.Password ? (<p>Field required</p>):null}
                <br/>
                <TextField 
                    label='ReEnter Password'
                    variant='outlined'
                    style={{margin:'1%',width:'30%'}} 
                    value={state.resetPassword}
                    onChange={handleReset}
                />
                {submit && handlePassword !== handleReset ? <p>Invalid Password</p>:null}
                {/* {setpassValid(true)} */}
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

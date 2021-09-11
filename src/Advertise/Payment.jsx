import React,{useState,useEffect} from 'react'
import {TextField,Button} from '@material-ui/core';
import { getByTitle } from '@testing-library/react';



const Payment = () => {
    
    const [form, setform] = useState({
    cardNumber:"",
    cardHolderName:"",
    monthYear:"",
    cvv:""
})

const [submit, setSubmit] = useState(false);
const [valid, setvalid] = useState(false)
const errormsg = (<p style={{color:'red'}}>Invalid Input</p>)
const [paymentsuccess, setPaymentsuccess] = useState(false)
const [payment,setPayment] = useState(false)
const [done,setDone] = useState(true)
const handleCardNumber=(e)=>{
    setform({...form,cardNumber:e.target.value})
}
// 
const handleCardHolderName=(e)=>{
    setform({...form,cardHolderName:e.target.value})
}
// 
const handleMonthYear=(e)=>{
    setform({...form,monthYear:e.target.value})
}
// 
const handleCVV=(e)=>{
    setform({...form,cvv:e.target.value})
}

const validateForm=(e)=>{
     e.preventDefault();
     if(form.cardNumber && form.cardHolderName && form.monthYear && form.cvv){
         setvalid(true)
        }
        setSubmit(true)
        console.log(form)
        setPaymentsuccess(true)

        setTimeout(()=>{
            setPayment(true)
            setDone(false)
        },3000)
    }

    useEffect(()=>{
        document.title = `Payment successful`
    },[])



    return (
        <div style={{margin:'3%'}}>

        <h1 style={{marginLeft:'-20%'}}>PAYMENT INFORMATION</h1>
        <hr />
            <form className='formTable'>
                <TextField
                  multiline={false}
                  placeholder="0000 0000 0000 💳︎"
                  InputLabelProps={ { shrink: true } }
                  label='Card Number'
                  variant='outlined'
                  style={{width:'30%'}}
                  value={form.cardNumber}
                  onChange={handleCardNumber}
                />
                &emsp;
                &emsp;
                {submit && !form.cardNumber ? (errormsg):null}
                {/*  */}
                <TextField 
                    label="MM/YY"
                    variant='outlined'
                    style={{width:'10%'}}
                    value={form.monthYear}
                    onChange={handleMonthYear}
                />
                &emsp;
                &emsp;
                {submit && !form.monthYear ? (errormsg):null}
                {/*  */}
                <TextField 
                    label="CVV"
                    variant='outlined'
                    style={{width:'10%'}}
                    value={form.cvv}
                    onChange={handleCVV}
                />
                &emsp;
                &emsp;
                {submit && !form.cvv ? (errormsg):null}
                <br/>
                {/*  */}
                <TextField
                    label="Card Holder Name"
                    style={{margin:'2%',width:'30%',marginLeft:'-27%'}}
                    variant='outlined'
                    value={form.cardHolderName}
                    onChange={handleCardHolderName}
                />
                <br/>
                <br/>
                {submit && !form.cardHolderName ? (errormsg):null}
                {/*  */}
            <Button variant='contained' color="primary" onClick={validateForm}>Submit</Button>
                {submit && valid && done  ? <p style={{color:'green'}}>Process is Loading successfully...Please wait for push</p>:null}                
                {payment ? <p>successful payment</p> : null}
            </form>
        </div>
    )
}

export default Payment